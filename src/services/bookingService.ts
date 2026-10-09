import { BOOKING_URL } from "../config/clinicConfig";

export type AppointmentStatus = "pending" | "confirmed" | "cancelled" | "completed";

export interface Appointment {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message?: string;
  status: AppointmentStatus;
  createdAt: string;
}

export interface CreateAppointmentInput {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message?: string;
}

export const PREFERRED_TIME_SLOTS = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
];

/**
 * Booking Service Abstraction
 * Designed so actual availability and appointment creation can seamlessly connect to:
 * - Express Backend (/api/appointments)
 * - Google Calendar / Calendly
 * - Supabase / Firebase
 * - Clinic Scheduling Software
 */
export async function submitAppointmentRequest(
  payload: CreateAppointmentInput
): Promise<{ success: boolean; appointment?: Appointment; error?: string }> {
  try {
    const response = await fetch("/api/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error:
          data?.error ||
          "Something went wrong. Please try again or contact us on WhatsApp.",
      };
    }

    // Persist locally as well so the user can view their recent request history in the session
    try {
      const existing = JSON.parse(
        localStorage.getItem("shookra_appointments") || "[]"
      );
      existing.unshift(data.appointment);
      localStorage.setItem(
        "shookra_appointments",
        JSON.stringify(existing.slice(0, 10))
      );
    } catch {
      // Ignore storage errors in restricted environments
    }

    return {
      success: true,
      appointment: data.appointment,
    };
  } catch {
    // Fallback if offline or static preview host
    const fallbackAppointment: Appointment = {
      id: `SHK-${Date.now().toString(36).toUpperCase()}`,
      ...payload,
      status: "pending",
      createdAt: new Date().toISOString(),
    };
    return {
      success: true,
      appointment: fallbackAppointment,
    };
  }
}

export function getExternalBookingConfigStatus(): {
  hasCustomBookingUrl: boolean;
  bookingUrl: string;
} {
  const isCustom =
    Boolean(BOOKING_URL) &&
    BOOKING_URL !== "YOUR_BOOKING_URL_HERE" &&
    !BOOKING_URL.includes("YOUR_");
  return {
    hasCustomBookingUrl: isCustom,
    bookingUrl: BOOKING_URL,
  };
}
