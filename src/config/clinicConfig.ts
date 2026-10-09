/**
 * Configurable Clinic Environment & Brand Constants
 * IMPORTANT: Do not invent phone numbers, Instagram URLs, coordinates, or doctor names.
 * Replace placeholders via environment variables (.env) when connecting live clinic accounts.
 */

export const WHATSAPP_NUMBER: string =
  import.meta.env.VITE_WHATSAPP_NUMBER || "YOUR_NUMBER_HERE";

export const INSTAGRAM_URL: string =
  import.meta.env.VITE_INSTAGRAM_URL || "YOUR_INSTAGRAM_URL_HERE";

export const GOOGLE_MAPS_URL: string =
  import.meta.env.VITE_GOOGLE_MAPS_URL || "YOUR_GOOGLE_MAPS_URL_HERE";

export const BOOKING_URL: string =
  import.meta.env.VITE_BOOKING_URL || "YOUR_BOOKING_URL_HERE";

export const CLINIC_INFO = {
  name: "Shookra Aesthetics & Academy",
  shortName: "SHOOKRA",
  subName: "AESTHETICS & ACADEMY",
  addressLine1: "8, Road, Shivalik Rd, Shivalik Colony",
  addressLine2: "New Delhi, Delhi 110017, India",
  fullAddress: "8, Road, Shivalik Rd, Shivalik Colony, New Delhi, Delhi 110017, India",
  neighborhood: "Shivalik Colony, New Delhi",
  rating: "5.0",
  maxRating: "5.0",
  reviewCount: 22,
  category:
    "Aesthetic Clinic / Beauty Clinic / Permanent Makeup / Skin & Hair Treatments / Academy",
  whatsappPreFilledMessage:
    "Hello Shookra Aesthetics & Academy, I would like to enquire about an appointment.",
  disclaimer:
    "Treatment suitability and results may vary from person to person. Consultation is recommended before proceeding with any treatment.",
};

export function isConfiguredValue(val: string | undefined, placeholder: string): boolean {
  if (!val) return false;
  const trimmed = val.trim();
  return (
    trimmed.length > 0 &&
    trimmed !== placeholder &&
    !trimmed.includes("YOUR_") &&
    !trimmed.includes("MY_")
  );
}

export function getWhatsAppHref(customMessage?: string): string {
  const message = encodeURIComponent(
    customMessage || CLINIC_INFO.whatsappPreFilledMessage
  );
  if (isConfiguredValue(WHATSAPP_NUMBER, "YOUR_NUMBER_HERE")) {
    const cleanDigits = WHATSAPP_NUMBER.replace(/[^\d]/g, "");
    return `https://wa.me/${cleanDigits}?text=${message}`;
  }
  return `https://api.whatsapp.com/send?text=${message}`;
}
