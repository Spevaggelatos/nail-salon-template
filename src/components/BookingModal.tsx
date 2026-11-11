"use client";

import { useState, useEffect, useTransition } from "react";
import { salonConfig, ServiceItem } from "@/config/salon.config";
import {
  X,
  Calendar,
  Clock,
  User,
  Phone,
  MessageSquare,
  Check,
  Sparkles,
  Mail,
  Loader2,
  CalendarCheck,
  AlertCircle,
  Scissors,
} from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: ServiceItem | null;
}

interface SlotItem {
  time: string;
  availableStaff: {
    id: string;
    name: string;
    role: string;
  }[];
}

interface AvailabilityData {
  date: string;
  isOpen: boolean;
  message?: string;
  serviceId: string;
  serviceName: string;
  durationMinutes: number;
  slots: SlotItem[];
}

export default function BookingModal({
  isOpen,
  onClose,
  initialService,
}: BookingModalProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialService?.id || salonConfig.services[3].id
  );
  const [selectedStaffId, setSelectedStaffId] = useState<string>("any");
  const [date, setDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");

  // Contact details
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [notes, setNotes] = useState<string>("");

  // UI States
  const [isLoadingSlots, setIsLoadingSlots] = useState<boolean>(false);
  const [availability, setAvailability] = useState<AvailabilityData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [bookingSuccess, setBookingSuccess] = useState<any | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Set default date to tomorrow (or Tuesday if tomorrow is Sun/Mon)
  useEffect(() => {
    try {
      const d = new Date();
      d.setDate(d.getDate() + 1);
      // If Sunday (0) or Monday (1), jump to Tuesday
      if (d.getDay() === 0) d.setDate(d.getDate() + 2);
      if (d.getDay() === 1) d.setDate(d.getDate() + 1);

      const yyyy = d.getFullYear();
      const mm = String(d.getMonth() + 1).padStart(2, "0");
      const dd = String(d.getDate()).padStart(2, "0");
      setDate(`${yyyy}-${mm}-${dd}`);
    } catch {
      setDate("2026-11-12");
    }
  }, []);

  // Update initialService when prop changes
  useEffect(() => {
    if (initialService) {
      setSelectedServiceId(initialService.id);
    }
  }, [initialService]);

  const currentService =
    salonConfig.services.find((s) => s.id === selectedServiceId) ||
    salonConfig.services[0];

  // Eligible staff members for current service category
  const eligibleStaff = salonConfig.staff.filter((staff) =>
    staff.categoryIds.includes(currentService.categoryId)
  );

  // If selected staff is not eligible for new service, reset to "any"
  useEffect(() => {
    if (
      selectedStaffId !== "any" &&
      !eligibleStaff.some((s) => s.id === selectedStaffId)
    ) {
      setSelectedStaffId("any");
    }
  }, [selectedServiceId, eligibleStaff, selectedStaffId]);

  // Fetch available slots from backend whenever date, service, or staff changes
  useEffect(() => {
    if (!date || !selectedServiceId || !isOpen) return;

    let isMounted = true;
    setIsLoadingSlots(true);
    setErrorMessage("");
    setSelectedTime("");

    fetch(
      `/api/booking/slots?date=${date}&serviceId=${selectedServiceId}&staffId=${selectedStaffId}&_t=${Date.now()}`,
      { cache: "no-store" }
    )
      .then((res) => res.json())
      .then((data: AvailabilityData) => {
        if (!isMounted) return;
        setAvailability(data);
        setIsLoadingSlots(false);
      })
      .catch((err) => {
        if (!isMounted) return;
        console.error("Failed to fetch slots:", err);
        setIsLoadingSlots(false);
      });

    return () => {
      isMounted = false;
    };
  }, [date, selectedServiceId, selectedStaffId, isOpen]);

  if (!isOpen) return null;

  // Handle final appointment submission
  const handleSubmitBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!selectedTime) {
      setErrorMessage("Παρακαλούμε επιλέξτε μια διαθέσιμη ώρα.");
      return;
    }
    if (!name.trim() || !phone.trim()) {
      setErrorMessage("Παρακαλούμε συμπληρώστε το ονοματεπώνυμο και το κινητό σας.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/booking/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceId: selectedServiceId,
          staffId: selectedStaffId,
          date,
          time: selectedTime,
          clientName: name,
          clientPhone: phone,
          clientEmail: email,
          notes,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMessage(data.message || "Σφάλμα κατά την κράτηση. Παρακαλούμε δοκιμάστε ξανά.");
        setIsSubmitting(false);
        return;
      }

      setBookingSuccess(data);
      setIsSubmitting(false);
    } catch (err) {
      console.error(err);
      setErrorMessage("Παρουσιάστηκε πρόβλημα επικοινωνίας με το σύστημα κρατήσεων.");
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setBookingSuccess(null);
    setSelectedTime("");
    setErrorMessage("");
    onClose();
  };

  // Google Calendar "Add to Calendar" link for user
  const generateGoogleCalendarUrl = () => {
    if (!bookingSuccess?.details) return "#";
    const d = bookingSuccess.details;
    const startIso = `${d.date.replace(/-/g, "")}T${d.time.replace(":", "")}00`;
    const startObj = new Date(`${d.date}T${d.time}:00`);
    const endObj = new Date(startObj.getTime() + (d.durationMinutes || 60) * 60000);
    const endIso = `${endObj.toISOString().slice(0, 10).replace(/-/g, "")}T${endObj
      .toTimeString()
      .slice(0, 5)
      .replace(":", "")}00`;

    const title = encodeURIComponent(`${salonConfig.business.name}: ${d.serviceName}`);
    const details = encodeURIComponent(
      `Ραντεβού στο ${salonConfig.business.name}\nΥπηρεσία: ${d.serviceName}\nΤεχνίτρια: ${d.staffName}\nΔιεύθυνση: ${salonConfig.contact.address.street}, ${salonConfig.contact.address.city}\nΤηλέφωνο: ${salonConfig.contact.phone}`
    );
    const location = encodeURIComponent(
      `${salonConfig.contact.address.street}, ${salonConfig.contact.address.city}`
    );

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startIso}/${endIso}&details=${details}&location=${location}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Modal Card */}
      <div className="relative w-full max-w-xl bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border border-[#F2D8DE] overflow-hidden max-h-[94vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#541223] via-[#721B32] to-[#8E253F] text-white p-5 sm:p-6 relative">
          <button
            onClick={handleResetAndClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/15 hover:bg-black/25 rounded-full p-2 transition-colors cursor-pointer"
            aria-label="Κλείσιμο"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#C9A44C]/30 text-[#F5E6BE] border border-[#C9A44C]/40">
              <Sparkles className="w-3 h-3 text-[#C9A44C]" />
              Smart Google Calendar Booking
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-light tracking-wide text-white">
            Online Κράτηση Ραντεβού
          </h3>
          <p className="text-[#FAF0F3]/85 text-xs sm:text-sm mt-1">
            Επιλέξτε υπηρεσία, τεχνίτρια & ώρα σε πραγματικό χρόνο χωρίς αναμονή
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-6">
          {bookingSuccess ? (
            /* SUCCESS CONFIRMATION VIEW */
            <div className="text-center py-6 space-y-5 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <Check className="w-9 h-9 stroke-[2.5]" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-emerald-700 font-semibold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Κωδικός: #{bookingSuccess.bookingId}
                </span>
                <h4 className="font-serif text-2xl font-light text-[#1E1518] mt-2">
                  Το ραντεβού σας κατοχυρώθηκε!
                </h4>
                <p className="text-sm text-[#6C565E] mt-1 max-w-md mx-auto">
                  Έχει καταχωρηθεί αυτόματα στο ημερολόγιο του καταστήματος. Σας περιμένουμε!
                </p>
              </div>

              {/* Receipt Summary Card */}
              <div className="bg-[#FDF8F9] border border-[#F2D8DE] rounded-2xl p-4 text-left space-y-2 text-sm text-[#1E1518]">
                <div className="flex justify-between items-center pb-2 border-b border-[#F2D8DE]">
                  <span className="text-xs uppercase tracking-wider text-[#6C565E]">Υπηρεσία:</span>
                  <span className="font-medium text-[#84233C]">
                    {bookingSuccess.details?.serviceName}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[#F2D8DE]">
                  <span className="text-xs uppercase tracking-wider text-[#6C565E]">Τεχνίτρια:</span>
                  <span className="font-medium">{bookingSuccess.details?.staffName}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[#F2D8DE]">
                  <span className="text-xs uppercase tracking-wider text-[#6C565E]">Ημερομηνία & Ώρα:</span>
                  <span className="font-semibold text-emerald-700">
                    {bookingSuccess.details?.date} στις {bookingSuccess.details?.time} (
                    {bookingSuccess.details?.durationMinutes} λεπτά)
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[#F2D8DE]">
                  <span className="text-xs uppercase tracking-wider text-[#6C565E]">Εκτιμώμενη Αξία:</span>
                  <span className="font-serif text-base font-bold text-[#84233C]">
                    {bookingSuccess.details?.price}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-1 text-xs text-[#6C565E]">
                  <span>Στοιχεία: {bookingSuccess.details?.clientName}</span>
                  <span>Τηλ: {bookingSuccess.details?.clientPhone}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={generateGoogleCalendarUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#84233C] hover:bg-[#6F1A30] text-white rounded-xl font-medium text-sm transition-colors shadow-md"
                >
                  <CalendarCheck className="w-4 h-4" />
                  Προσθήκη στο Google Calendar μου
                </a>
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-5 py-3 border border-[#F2D8DE] text-[#6C565E] hover:bg-[#FDF8F9] rounded-xl text-sm font-medium transition-colors cursor-pointer"
                >
                  Κλείσιμο
                </button>
              </div>
            </div>
          ) : (
            /* BOOKING FORM VIEW */
            <form onSubmit={handleSubmitBooking} className="space-y-5">
              {/* Error Alert */}
              {errorMessage && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs sm:text-sm text-rose-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* 1. Επιλογή Υπηρεσίας */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6C565E] mb-1.5">
                  1. Επιλέξτε Υπηρεσία
                </label>
                <div className="relative">
                  <select
                    value={selectedServiceId}
                    onChange={(e) => setSelectedServiceId(e.target.value)}
                    className="w-full bg-[#FDF8F9] border border-[#F2D8DE] rounded-xl px-4 py-2.5 text-sm text-[#1E1518] focus:outline-none focus:border-[#84233C] focus:ring-1 focus:ring-[#84233C]"
                  >
                    {salonConfig.categories.map((cat) => (
                      <optgroup key={cat.id} label={cat.name}>
                        {salonConfig.services
                          .filter((s) => s.categoryId === cat.id)
                          .map((service) => (
                            <option key={service.id} value={service.id}>
                              {service.name} • {service.duration} — {service.price}
                            </option>
                          ))}
                      </optgroup>
                    ))}
                  </select>
                </div>

                {/* Service Details Badge */}
                <div className="mt-2 flex items-center justify-between bg-[#FAF0F3] border border-[#F2D8DE] rounded-xl p-2.5 text-xs text-[#6C565E]">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#84233C]" />
                    <span>
                      Διάρκεια:{" "}
                      <strong className="text-[#1E1518]">{currentService.duration}</strong>
                    </span>
                  </div>
                  <div className="font-semibold text-sm text-[#84233C]">
                    {currentService.price}
                  </div>
                </div>
              </div>

              {/* 2. Επιλογή Τεχνίτριας */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6C565E] mb-1.5">
                  2. Επιλέξτε Τεχνίτρια
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedStaffId("any")}
                    className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedStaffId === "any"
                        ? "bg-[#84233C] text-white border-[#84233C] shadow-sm"
                        : "bg-[#FDF8F9] text-[#1E1518] border-[#F2D8DE] hover:border-[#D38CA0]"
                    }`}
                  >
                    <div className="text-xs font-semibold">✨ Πρώτη Διαθέσιμη</div>
                    <div
                      className={`text-[10px] truncate ${
                        selectedStaffId === "any" ? "text-white/80" : "text-[#6C565E]"
                      }`}
                    >
                      Ταχύτερο ραντεβού
                    </div>
                  </button>

                  {eligibleStaff.map((staff) => (
                    <button
                      key={staff.id}
                      type="button"
                      onClick={() => setSelectedStaffId(staff.id)}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        selectedStaffId === staff.id
                          ? "bg-[#84233C] text-white border-[#84233C] shadow-sm"
                          : "bg-[#FDF8F9] text-[#1E1518] border-[#F2D8DE] hover:border-[#D38CA0]"
                      }`}
                    >
                      <div className="text-xs font-semibold">{staff.name}</div>
                      <div
                        className={`text-[10px] truncate ${
                          selectedStaffId === staff.id ? "text-white/80" : "text-[#6C565E]"
                        }`}
                      >
                        {staff.role.split(" ")[0]}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Ημερομηνία & Dynamic Slots */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#6C565E]">
                    3. Ημερομηνία & Ώρα
                  </label>
                  <span className="text-[11px] text-[#84233C] font-medium">
                    Τρίτη - Παρασκευή: 10-20 | Σάβ: 9-17
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-1">
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-[#FDF8F9] border border-[#F2D8DE] rounded-xl px-3 py-2.5 text-xs text-[#1E1518] focus:outline-none focus:border-[#84233C]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    {isLoadingSlots ? (
                      <div className="h-20 bg-[#FDF8F9] border border-[#F2D8DE] rounded-xl flex items-center justify-center gap-2 text-xs text-[#6C565E]">
                        <Loader2 className="w-4 h-4 animate-spin text-[#84233C]" />
                        <span>Έλεγχος διαθεσιμότητας Google Calendar...</span>
                      </div>
                    ) : availability && !availability.isOpen ? (
                      <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 text-center">
                        🔒 {availability.message || "Κλειστά αυτή την ημέρα."}
                      </div>
                    ) : availability && availability.slots.length === 0 ? (
                      <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 text-center">
                        Δεν υπάρχει κενό {currentService.duration} για αυτή την ημέρα. Παρακαλούμε επιλέξτε άλλη ημερομηνία.
                      </div>
                    ) : (
                      <div className="grid grid-cols-4 sm:grid-cols-4 gap-1.5 max-h-36 overflow-y-auto p-1">
                        {availability?.slots.map((slot) => {
                          const isSelected = selectedTime === slot.time;
                          return (
                            <button
                              key={slot.time}
                              type="button"
                              onClick={() => setSelectedTime(slot.time)}
                              className={`py-2 px-1 rounded-lg text-xs font-medium text-center transition-all cursor-pointer ${
                                isSelected
                                  ? "bg-[#84233C] text-white shadow-sm ring-2 ring-[#84233C]/40"
                                  : "bg-[#FDF8F9] hover:bg-[#FAF0F3] text-[#1E1518] border border-[#F2D8DE]"
                              }`}
                            >
                              {slot.time}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>

                {selectedTime && (
                  <div className="mt-2 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-xl px-3 py-1.5 flex items-center justify-between">
                    <span>
                      ✓ Επιλεγμένη ώρα: <strong>{selectedTime}</strong> ({currentService.duration})
                    </span>
                    <span className="text-[11px] text-emerald-600">Άμεση κατοχύρωση</span>
                  </div>
                )}
              </div>

              {/* 4. Στοιχεία Πελάτη */}
              <div className="space-y-3 pt-1 border-t border-[#F2D8DE]">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6C565E]">
                  4. Τα Στοιχεία Σας
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Ονοματεπώνυμο *"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#FDF8F9] border border-[#F2D8DE] rounded-xl px-3 py-2 text-xs text-[#1E1518] focus:outline-none focus:border-[#84233C]"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Κινητό Τηλέφωνο *"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#FDF8F9] border border-[#F2D8DE] rounded-xl px-3 py-2 text-xs text-[#1E1518] focus:outline-none focus:border-[#84233C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="email"
                    placeholder="Email (για επιβεβαίωση)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#FDF8F9] border border-[#F2D8DE] rounded-xl px-3 py-2 text-xs text-[#1E1518] focus:outline-none focus:border-[#84233C]"
                  />
                  <input
                    type="text"
                    placeholder="Σημειώσεις (π.χ. σχέδιο, αφαίρεση)"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-[#FDF8F9] border border-[#F2D8DE] rounded-xl px-3 py-2 text-xs text-[#1E1518] focus:outline-none focus:border-[#84233C]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting || !selectedTime}
                  className={`w-full py-3.5 px-4 rounded-xl font-medium text-sm text-white flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer ${
                    isSubmitting || !selectedTime
                      ? "bg-[#B85B73]/60 cursor-not-allowed"
                      : "bg-[#84233C] hover:bg-[#541223] active:scale-[0.99]"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Καταχώρηση στο Calendar...
                    </>
                  ) : (
                    <>
                      <Check className="w-4 h-4" />
                      Επιβεβαίωση Ραντεβού ({currentService.price})
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-[#6C565E] mt-2">
                  🔒 Χωρίς προπληρωμή • Πληρωμή στο κατάστημα • Δωρεάν ακύρωση έως 2 ώρες πριν
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
