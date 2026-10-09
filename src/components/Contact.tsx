import React, { useState } from "react";
import {
  MapPin,
  Star,
  Calendar,
  MessageCircle,
  Phone,
  Instagram,
  ExternalLink,
} from "lucide-react";
import {
  CLINIC_INFO,
  GOOGLE_MAPS_URL,
  WHATSAPP_NUMBER,
  isConfiguredValue,
  getWhatsAppHref,
} from "../config/clinicConfig";

interface ContactProps {
  onOpenBooking: () => void;
  onOpenInstagram: () => void;
}

export const Contact: React.FC<ContactProps> = ({
  onOpenBooking,
  onOpenInstagram,
}) => {
  const [callNoticeOpen, setCallNoticeOpen] = useState(false);

  const hasValidMapsEmbed = isConfiguredValue(
    GOOGLE_MAPS_URL,
    "YOUR_GOOGLE_MAPS_URL_HERE"
  );
  const hasConfiguredPhone = isConfiguredValue(
    WHATSAPP_NUMBER,
    "YOUR_NUMBER_HERE"
  );

  const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${CLINIC_INFO.name}, ${CLINIC_INFO.fullAddress}`
  )}`;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 lg:py-28 bg-[#12100E] border-t border-[#F6F3EE]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Clinic Details & Direct Conversion Actions */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#C6A368] mb-3">
                Visit Our Clinic
              </p>
              <h2
                id="contact-heading"
                className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F6F3EE] mb-6"
              >
                {CLINIC_INFO.name}
              </h2>

              {/* Address Card */}
              <div className="p-6 bg-[#171512] border border-[#F6F3EE]/10 rounded-sm mb-6">
                <div className="flex items-start gap-3.5">
                  <MapPin
                    className="w-5 h-5 text-[#C6A368] shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-[#C6A368] mb-1">
                      Clinic Address
                    </h3>
                    <p className="font-serif-editorial text-2xl text-[#F6F3EE]">
                      8, Road, Shivalik Rd,
                    </p>
                    <p className="font-serif-editorial text-2xl text-[#F6F3EE]">
                      Shivalik Colony,
                    </p>
                    <p className="text-sm text-[#C7C0B6] mt-1">
                      New Delhi, Delhi 110017, India
                    </p>
                  </div>
                </div>

                {/* Rating & Reviews */}
                <div className="mt-6 pt-5 border-t border-[#F6F3EE]/10 flex flex-wrap items-center gap-4 text-xs text-[#D5CFC7]">
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-[#F6F3EE] tabular-nums">
                      Rating: {CLINIC_INFO.rating}
                    </span>
                    <div className="flex items-center text-[#C6A368]">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 fill-[#C6A368] text-[#C6A368]"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">
                    Reviews: {CLINIC_INFO.reviewCount} Verified Google Reviews
                  </span>
                </div>
              </div>
            </div>

            {/* 4 Required Action Buttons: Book Appointment, WhatsApp, Call, Instagram */}
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#0D0C0B] bg-[#C6A368] hover:bg-[#D5B57C] rounded-sm luxury-neon-cta cursor-pointer"
                >
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <span>Book Appointment</span>
                </button>

                <a
                  href={getWhatsAppHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#F6F3EE] bg-[#171512] hover:bg-[#211E1A] border border-[#C6A368]/40 rounded-sm transition-colors"
                >
                  <MessageCircle
                    className="w-4 h-4 text-[#C6A368]"
                    aria-hidden="true"
                  />
                  <span>Talk on WhatsApp</span>
                </a>

                {hasConfiguredPhone ? (
                  <a
                    href={`tel:${WHATSAPP_NUMBER.replace(/[^\d+]/g, "")}`}
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-medium uppercase tracking-wider text-[#F6F3EE] bg-[#171512] hover:bg-[#211E1A] border border-[#F6F3EE]/15 rounded-sm transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#C6A368]" aria-hidden="true" />
                    <span>Call Clinic</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => setCallNoticeOpen(!callNoticeOpen)}
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-medium uppercase tracking-wider text-[#F6F3EE] bg-[#171512] hover:bg-[#211E1A] border border-[#F6F3EE]/15 rounded-sm transition-colors cursor-pointer"
                  >
                    <Phone className="w-4 h-4 text-[#C6A368]" aria-hidden="true" />
                    <span>Call Clinic</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={onOpenInstagram}
                  aria-label="Follow us on Instagram"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-medium uppercase tracking-wider text-[#F6F3EE] rounded-sm luxury-neon-instagram cursor-pointer"
                >
                  <Instagram
                    className="w-4 h-4 text-[#D4A39A]"
                    aria-hidden="true"
                  />
                  <span>Instagram</span>
                </button>
              </div>

              {callNoticeOpen && !hasConfiguredPhone && (
                <div className="p-4 bg-[#171512] border border-[#C6A368]/30 rounded-sm text-xs text-[#C7C0B6] flex items-center justify-between gap-4">
                  <span>
                    Direct phone number configuration (
                    <code className="text-[#E2C792]">WHATSAPP_NUMBER</code>) is
                    set to placeholder mode. Please book online or use WhatsApp
                    enquiry.
                  </span>
                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="text-[#C6A368] uppercase font-semibold underline shrink-0 cursor-pointer"
                  >
                    Book Online
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Map Section (Respects Google Maps Configuration Rule) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="h-full min-h-[340px] bg-[#171512] border border-[#F6F3EE]/10 rounded-sm overflow-hidden flex flex-col justify-between p-8 relative">
              {hasValidMapsEmbed ? (
                <iframe
                  title="Shookra Aesthetics & Academy Location Map"
                  src={GOOGLE_MAPS_URL}
                  className="w-full h-full min-h-[320px] border-0 rounded-sm"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <>
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#C6A368] block mb-2">
                      South Delhi Location
                    </span>
                    <h3 className="font-serif-editorial text-3xl text-[#F6F3EE] mb-3">
                      Shivalik Colony, New Delhi
                    </h3>
                    <p className="text-sm text-[#A8A196] leading-relaxed max-w-md">
                      Conveniently situated at 8, Road, Shivalik Rd, Shivalik
                      Colony, New Delhi, Delhi 110017. Set{" "}
                      <code className="text-[#E2C792]">
                        VITE_GOOGLE_MAPS_URL
                      </code>{" "}
                      in your environment configuration to enable an interactive
                      embedded map iframe, or open directions directly below.
                    </p>
                  </div>

                  <div className="my-8 p-5 bg-[#12100E] border border-[#F6F3EE]/10 rounded-sm">
                    <div className="text-xs text-[#C6A368] uppercase tracking-wider mb-1">
                      Verified Destination Address
                    </div>
                    <div className="text-sm text-[#F6F3EE] font-medium">
                      {CLINIC_INFO.fullAddress}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#F6F3EE]/10">
                    <a
                      href={googleMapsSearchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#0D0C0B] bg-[#C6A368] hover:bg-[#D5B57C] rounded-sm"
                    >
                      <span>Open Directions in Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                    <span className="text-xs text-[#A8A196]">
                      Private Consultation by Appointment
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
