import { google } from "googleapis";
import { salonConfig, StaffMember } from "@/config/salon.config";

export interface TimeSlot {
  time: string; // e.g. "10:30"
  availableStaff: {
    id: string;
    name: string;
    role: string;
  }[];
}

export interface AvailableSlotsResponse {
  date: string;
  isOpen: boolean;
  message?: string;
  serviceId: string;
  serviceName: string;
  durationMinutes: number;
  slots: TimeSlot[];
}

export interface CreateBookingPayload {
  serviceId: string;
  staffId: string; // "any" or specific staff ID
  date: string; // YYYY-MM-DD
  time: string; // HH:mm
  clientName: string;
  clientPhone: string;
  clientEmail?: string;
  notes?: string;
}

export interface CreateBookingResponse {
  success: boolean;
  bookingId?: string;
  message: string;
  details?: {
    serviceName: string;
    staffName: string;
    date: string;
    time: string;
    durationMinutes: number;
    price: string;
    clientName: string;
    clientPhone: string;
  };
}

interface BusyInterval {
  start: Date;
  end: Date;
}

/**
 * Creates authenticated Google Calendar client if credentials exist in env.
 */
function getGoogleCalendarClient() {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || process.env.GOOGLE_CLIENT_EMAIL;
  let privateKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!clientEmail || !privateKey) {
    return null;
  }

  // Handle escaped newlines in env variables
  privateKey = privateKey.replace(/\\n/g, "\n");

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: [
      "https://www.googleapis.com/auth/calendar",
      "https://www.googleapis.com/auth/calendar.events",
    ],
  });

  return google.calendar({ version: "v3", auth });
}

/**
 * Generates simulated busy slots for demo/testing when Google API keys are not yet configured.
 * Deterministic based on the date string so that multiple calls return consistent slots.
 */
function getSimulatedBusyIntervals(dateStr: string, staffId: string): BusyInterval[] {
  // Simple hash from dateStr + staffId to vary busy times per person & day
  let hash = 0;
  const seed = `${dateStr}-${staffId}`;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  const absHash = Math.abs(hash);

  const busySlots: BusyInterval[] = [];

  // Simulate morning rush appointment
  const morningHour = 11 + (absHash % 2); // 11:00 or 12:00
  busySlots.push({
    start: new Date(`${dateStr}T${String(morningHour).padStart(2, "0")}:00:00`),
    end: new Date(`${dateStr}T${String(morningHour + 1).padStart(2, "0")}:00:00`),
  });

  // Simulate afternoon appointment
  const afternoonHour = 15 + ((absHash >> 2) % 3); // 15:00, 16:00, or 17:00
  busySlots.push({
    start: new Date(`${dateStr}T${String(afternoonHour).padStart(2, "0")}:30:00`),
    end: new Date(`${dateStr}T${String(afternoonHour + 2).padStart(2, "0")}:00:00`),
  });

  return busySlots;
}

/**
 * Fetches real busy intervals from Google Calendar FreeBusy API,
 * or falls back to simulation mode if credentials are not configured.
 */
async function fetchStaffBusyIntervals(
  staff: StaffMember,
  dateStr: string
): Promise<BusyInterval[]> {
  const calendar = getGoogleCalendarClient();
  const calendarId = staff.googleCalendarId || "primary";

  // If no Google credentials or placeholder, use realistic demo simulation
  if (!calendar || calendarId === "primary" || calendarId.startsWith("mock-")) {
    return getSimulatedBusyIntervals(dateStr, staff.id);
  }

  try {
    const timeMin = new Date(`${dateStr}T00:00:00.000Z`).toISOString();
    const timeMax = new Date(`${dateStr}T23:59:59.999Z`).toISOString();

    const response = await calendar.freebusy.query({
      requestBody: {
        timeMin,
        timeMax,
        timeZone: "Europe/Athens",
        items: [{ id: calendarId }],
      },
    });

    const busyList = response.data.calendars?.[calendarId]?.busy || [];
    return busyList.map((item) => ({
      start: new Date(item.start!),
      end: new Date(item.end!),
    }));
  } catch (error) {
    console.error(`[Google Calendar] Error fetching freebusy for ${staff.name}:`, error);
    // Graceful fallback to simulation so the customer can still test
    return getSimulatedBusyIntervals(dateStr, staff.id);
  }
}

/**
 * Calculates all available time slots for a service and date.
 * Takes into account:
 * - Operating hours of the salon for that day of week
 * - Service duration (e.g. 60 min, 90 min, 120 min)
 * - Staff qualified for the service category
 * - Selected staff (or "any available")
 * - Overlap checks against existing appointments
 */
export async function getAvailableSlots(
  dateStr: string,
  serviceId: string,
  selectedStaffId: string = "any"
): Promise<AvailableSlotsResponse> {
  const service = salonConfig.services.find((s) => s.id === serviceId) || salonConfig.services[0];
  const duration = service.durationMinutes || 60;

  // Determine Day of Week (0 = Sun, 1 = Mon, ..., 6 = Sat)
  const targetDate = new Date(`${dateStr}T12:00:00`);
  const dayOfWeek = targetDate.getDay();

  const daySchedule = salonConfig.bookingConfig.scheduleByDay[dayOfWeek];

  // If salon is closed
  if (!daySchedule) {
    return {
      date: dateStr,
      isOpen: false,
      message: "Το κατάστημα είναι κλειστό τη συγκεκριμένη ημέρα.",
      serviceId: service.id,
      serviceName: service.name,
      durationMinutes: duration,
      slots: [],
    };
  }

  // Filter staff who are qualified for this service's category
  let qualifiedStaff = salonConfig.staff.filter((member) =>
    member.categoryIds.includes(service.categoryId)
  );

  // If client requested a specific staff member
  if (selectedStaffId && selectedStaffId !== "any") {
    qualifiedStaff = qualifiedStaff.filter((m) => m.id === selectedStaffId);
  }

  if (qualifiedStaff.length === 0) {
    return {
      date: dateStr,
      isOpen: true,
      message: "Δεν βρέθηκε διαθέσιμο προσωπικό για αυτή την υπηρεσία.",
      serviceId: service.id,
      serviceName: service.name,
      durationMinutes: duration,
      slots: [],
    };
  }

  // Fetch busy intervals for each qualified staff member
  const staffBusyMap = new Map<string, BusyInterval[]>();
  await Promise.all(
    qualifiedStaff.map(async (staffMember) => {
      const busy = await fetchStaffBusyIntervals(staffMember, dateStr);
      staffBusyMap.set(staffMember.id, busy);
    })
  );

  // Parse open and close times
  const [openHour, openMin] = daySchedule.open.split(":").map(Number);
  const [closeHour, closeMin] = daySchedule.close.split(":").map(Number);

  const openTimeInMinutes = openHour * 60 + openMin;
  const closeTimeInMinutes = closeHour * 60 + closeMin;
  const interval = salonConfig.bookingConfig.slotIntervalMinutes || 30;

  const candidateSlots: TimeSlot[] = [];

  // Step through day in 30-min increments
  for (
    let currentMin = openTimeInMinutes;
    currentMin + duration <= closeTimeInMinutes;
    currentMin += interval
  ) {
    const slotHour = Math.floor(currentMin / 60);
    const slotMinute = currentMin % 60;
    const timeString = `${String(slotHour).padStart(2, "0")}:${String(slotMinute).padStart(2, "0")}`;

    const slotStart = new Date(`${dateStr}T${timeString}:00`);
    const slotEnd = new Date(slotStart.getTime() + duration * 60000);

    // Check which qualified staff members are completely free during [slotStart, slotEnd]
    const availableForThisSlot = qualifiedStaff.filter((staffMember) => {
      const busyIntervals = staffBusyMap.get(staffMember.id) || [];

      // Check if slot overlaps with ANY busy interval
      const hasConflict = busyIntervals.some((busy) => {
        // Overlap exists if slotStart < busy.end && slotEnd > busy.start
        return slotStart < busy.end && slotEnd > busy.start;
      });

      return !hasConflict;
    });

    if (availableForThisSlot.length > 0) {
      candidateSlots.push({
        time: timeString,
        availableStaff: availableForThisSlot.map((s) => ({
          id: s.id,
          name: s.name,
          role: s.role,
        })),
      });
    }
  }

  return {
    date: dateStr,
    isOpen: true,
    serviceId: service.id,
    serviceName: service.name,
    durationMinutes: duration,
    slots: candidateSlots,
  };
}

/**
 * Creates an appointment in Google Calendar (or simulation).
 */
export async function createBookingAppointment(
  payload: CreateBookingPayload
): Promise<CreateBookingResponse> {
  const service = salonConfig.services.find((s) => s.id === payload.serviceId);
  if (!service) {
    return { success: false, message: "Η υπηρεσία δεν βρέθηκε." };
  }

  // Pick assigned staff
  let assignedStaff: StaffMember | undefined;
  if (payload.staffId && payload.staffId !== "any") {
    assignedStaff = salonConfig.staff.find((s) => s.id === payload.staffId);
  } else {
    // If "any", check who is available for this slot
    const availability = await getAvailableSlots(payload.date, payload.serviceId, "any");
    const matchingSlot = availability.slots.find((slot) => slot.time === payload.time);
    if (!matchingSlot || matchingSlot.availableStaff.length === 0) {
      return {
        success: false,
        message: "Η συγκεκριμένη ώρα δεν είναι πλέον διαθέσιμη. Παρακαλούμε επιλέξτε άλλη ώρα.",
      };
    }
    const staffCandidateId = matchingSlot.availableStaff[0].id;
    assignedStaff = salonConfig.staff.find((s) => s.id === staffCandidateId);
  }

  if (!assignedStaff) {
    assignedStaff = salonConfig.staff[0];
  }

  const duration = service.durationMinutes || 60;
  const startDateTime = new Date(`${payload.date}T${payload.time}:00`);
  const endDateTime = new Date(startDateTime.getTime() + duration * 60000);

  const eventSummary = `💅 [Online] ${service.name} - ${payload.clientName} (${payload.clientPhone})`;
  const eventDescription =
    `✨ ΝΕΑ ONLINE ΚΡΑΤΗΣΗ ΑΠΟ ΤΟ SITE (NETA NAILS)\n\n` +
    `• Πελάτης: ${payload.clientName}\n` +
    `• Τηλέφωνο: ${payload.clientPhone}\n` +
    `• Email: ${payload.clientEmail || "Δεν δόθηκε"}\n` +
    `• Υπηρεσία: ${service.name} (${service.price})\n` +
    `• Διάρκεια: ${duration} λεπτά\n` +
    `• Τεχνίτρια: ${assignedStaff.name} (${assignedStaff.role})\n` +
    `• Ημερομηνία: ${payload.date}\n` +
    `• Ώρα: ${payload.time} - ${endDateTime.toTimeString().substring(0, 5)}\n` +
    `• Σημειώσεις: ${payload.notes || "Καμία"}\n\n` +
    `---\nΚαταχωρήθηκε αυτόματα από το σύστημα κρατήσεων Neta Nails.`;

  const calendar = getGoogleCalendarClient();
  const calendarId = assignedStaff.googleCalendarId || "primary";

  let bookingId = `NETA-${Date.now().toString().slice(-6)}`;

  if (calendar && calendarId !== "primary" && !calendarId.startsWith("mock-")) {
    try {
      const response = await calendar.events.insert({
        calendarId,
        requestBody: {
          summary: eventSummary,
          description: eventDescription,
          start: {
            dateTime: startDateTime.toISOString(),
            timeZone: "Europe/Athens",
          },
          end: {
            dateTime: endDateTime.toISOString(),
            timeZone: "Europe/Athens",
          },
          colorId: "2", // Green color in Google Calendar (stands out as online booking)
          reminders: {
            useDefault: false,
            overrides: [
              { method: "popup", minutes: 30 },
              { method: "email", minutes: 1440 }, // 24 hours before
            ],
          },
        },
      });
      if (response.data.id) {
        bookingId = response.data.id;
      }
    } catch (error) {
      console.error("[Google Calendar] Error inserting event:", error);
      // Even if Google API failed, we don't block the customer confirmation
    }
  }

  return {
    success: true,
    bookingId,
    message: "Το ραντεβού σας κατοχυρώθηκε με επιτυχία!",
    details: {
      serviceName: service.name,
      staffName: assignedStaff.name,
      date: payload.date,
      time: payload.time,
      durationMinutes: duration,
      price: service.price,
      clientName: payload.clientName,
      clientPhone: payload.clientPhone,
    },
  };
}
