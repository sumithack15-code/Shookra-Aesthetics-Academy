import React from "react";
import { Star, ExternalLink, Calendar } from "lucide-react";
import { CLINIC_INFO } from "../config/clinicConfig";

interface ReviewsProps {
  onOpenBooking: () => void;
}

export const Reviews: React.FC<ReviewsProps> = ({ onOpenBooking }) => {
  const placeholderCards = [
    {
      slot: "01",
      category: "Google Review Integration Slot",
      note: "Real client testimonials can be connected here via Google Places API or Admin CMS.",
      context: "Verified Aesthetic & Skin Care Feedback · Shivalik Colony",
    },
    {
      slot: "02",
      category: "Client Experience Feed Slot",
      note: "Real client testimonials can be connected here to showcase verified treatment experiences.",
      context: "Permanent Makeup & Facial Protocols · New Delhi",
    },
    {
      slot: "03",
      category: "Academy & Treatment Review Slot",
      note: "Real client testimonials can be connected here without fabricating unverified quotes.",
      context: "5.0 / 5.0 Aggregate Rating across 22 Google Reviews",
    },
  ];

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="py-20 lg:py-28 bg-[#12100E] border-t border-[#F6F3EE]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Verified Google Rating Summary */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-[#F6F3EE]/10">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#C6A368] mb-3">
              Verified Client Reputation
            </p>
            <h2
              id="reviews-heading"
              className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F6F3EE]"
            >
              Client Reviews &amp; Trust
            </h2>
          </div>

          <div className="flex items-center gap-6 bg-[#171512] border border-[#C6A368]/30 px-6 py-4 rounded-sm">
            <span className="font-serif-editorial text-4xl sm:text-5xl font-semibold text-[#E2C792] tabular-nums">
              {CLINIC_INFO.rating}
            </span>
            <div>
              <div
                className="flex items-center gap-1 text-[#C6A368] mb-1"
                aria-label="5.0 out of 5 stars"
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#C6A368] text-[#C6A368]"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="text-xs text-[#D5CFC7] tabular-nums">
                {CLINIC_INFO.reviewCount} Reviews on Google · Shivalik Colony,
                New Delhi
              </p>
            </div>
          </div>
        </div>

        {/* Honest Architectural Cards for Dynamic Review Integration */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {placeholderCards.map((card) => (
            <div
              key={card.slot}
              className="bg-[#171512] border border-[#F6F3EE]/10 p-7 rounded-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#C6A368] mb-4">
                  <span className="font-mono tabular-nums">
                    REVIEW SLOT {card.slot}
                  </span>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-3 h-3 fill-[#C6A368] text-[#C6A368]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>

                <p className="font-serif-editorial italic text-xl text-[#F6F3EE] leading-relaxed mb-4">
                  “{card.note}”
                </p>
              </div>

              <div className="pt-4 border-t border-[#F6F3EE]/8">
                <p className="text-xs font-medium text-[#D5CFC7]">
                  {card.category}
                </p>
                <p className="text-xs text-[#A8A196] mt-0.5">{card.context}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#171512] border border-[#F6F3EE]/10 p-6 rounded-sm">
          <div>
            <p className="text-sm font-medium text-[#F6F3EE]">
              Experience our 5.0-rated care in Shivalik Colony, New Delhi
            </p>
            <p className="text-xs text-[#A8A196] mt-0.5">
              Connect live Google Places reviews via your clinic configuration or
              schedule your personal visit today.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                `${CLINIC_INFO.name} ${CLINIC_INFO.fullAddress}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-[#F6F3EE] border border-[#F6F3EE]/20 hover:border-[#C6A368] rounded-sm transition-colors"
            >
              <span>View on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#C6A368]" />
            </a>

            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0D0C0B] bg-[#C6A368] hover:bg-[#D5B57C] rounded-sm cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
