import { NextRequest, NextResponse } from "next/server";
import { getAvailableSlots } from "@/lib/googleCalendar";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date");
    const serviceId = searchParams.get("serviceId");
    const staffId = searchParams.get("staffId") || "any";

    if (!date || !serviceId) {
      return NextResponse.json(
        { error: "Παρακαλούμε δηλώστε ημερομηνία και υπηρεσία." },
        { status: 400 }
      );
    }

    const availability = await getAvailableSlots(date, serviceId, staffId);

    return NextResponse.json(availability);
  } catch (error) {
    console.error("[API /api/booking/slots] Error:", error);
    return NextResponse.json(
      { error: "Σφάλμα κατά τον υπολογισμό διαθεσιμότητας." },
      { status: 500 }
    );
  }
}
