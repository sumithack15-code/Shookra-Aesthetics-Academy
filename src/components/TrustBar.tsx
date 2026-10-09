import React from "react";
import { Star } from "lucide-react";
import { CLINIC_INFO } from "../config/clinicConfig";

export const TrustBar: React.FC = () => {
  const pillars = [
    {
      number: "01",
      title: "Professional Experience",
      subtitle: "Calm, hygienic environment tailored for aesthetic care",
    },
    {
      number: "02",
      title: "Personalized Consultation",
      subtitle: "Individual treatment plans guided by assessment",
    },
    {
      number: "03",
      title: "Modern Treatment Approach",
      subtitle: "Refined skin, hair, laser & permanent makeup protocols",
    },
    {
      number: "04",
      title: "Premium Clinic Experience",
      subtitle: "Located at Shivalik Rd, Shivalik Colony, New Delhi",
    },
  ];

  return (
    <section
      aria-label="Client Trust and Clinic Standards"
      className="bg-[#12100E] border-y border-[#F6F3EE]/10 py-12 lg:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Rating Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 border-b border-[#F6F3EE]/10">
          <div className="flex items-center gap-5">
            <span className="font-serif-editorial text-5xl sm:text-6xl font-semibold text-[#E2C792] tabular-nums leading-none">
              {CLINIC_INFO.rating}
            </span>
            <div>
              <div
                className="flex items-center gap-1 text-[#C6A368] mb-1"
                aria-label="Rated 5.0 out of 5.0 stars"
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#C6A368] text-[#C6A368]"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#D5CFC7] tabular-nums">
                Based on {CLINIC_INFO.reviewCount} Verified Google Reviews
              </p>
            </div>
          </div>

          <p className="font-serif-editorial italic text-xl sm:text-2xl text-[#F6F3EE] max-w-md md:text-right">
            “Trusted by clients seeking refined aesthetic care.”
          </p>
        </div>

        {/* 4 Factual Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-10">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="flex flex-col">
              <span className="text-xs font-mono text-[#C6A368] tabular-nums mb-2">
                {pillar.number}.
              </span>
              <h2 className="font-serif-editorial text-xl font-medium text-[#F6F3EE] mb-1.5">
                {pillar.title}
              </h2>
              <p className="text-sm text-[#A8A196] leading-relaxed">
                {pillar.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
