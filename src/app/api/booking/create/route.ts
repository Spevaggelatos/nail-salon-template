import { NextRequest, NextResponse } from "next/server";
import { createBookingAppointment, CreateBookingPayload } from "@/lib/googleCalendar";

export async function POST(request: NextRequest) {
  try {
    const body: CreateBookingPayload = await request.json();

    if (!body.serviceId || !body.date || !body.time || !body.clientName || !body.clientPhone) {
      return NextResponse.json(
        { error: "Συμπληρώστε όλα τα απαραίτητα πεδία (υπηρεσία, ημερομηνία, ώρα, όνομα, τηλέφωνο)." },
        { status: 400 }
      );
    }

    const result = await createBookingAppointment(body);

    if (!result.success) {
      return NextResponse.json(result, { status: 400 });
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("[API /api/booking/create] Error:", error);
    return NextResponse.json(
      { error: "Σφάλμα κατά την καταχώρηση του ραντεβού." },
      { status: 500 }
    );
  }
}
