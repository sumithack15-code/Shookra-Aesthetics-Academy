import React, { useState } from "react";
import { SIGNATURE_SERVICES, TreatmentService } from "../data/servicesData";
import { ServiceCard } from "./ServiceCard";
import { CLINIC_INFO } from "../config/clinicConfig";

interface ServicesGridProps {
  onSelectService: (service: TreatmentService) => void;
  onBookService: (serviceName?: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  onSelectService,
  onBookService,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Aesthetics & Beauty",
    "Advanced Skin",
    "Laser & Precision",
    "Hair & Scalp",
  ];

  const filteredServices =
    selectedCategory === "All"
      ? SIGNATURE_SERVICES
      : SIGNATURE_SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <section
      id="treatments"
      aria-labelledby="treatments-heading"
      className="py-20 lg:py-28 bg-[#0D0C0B] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#C6A368] mb-3">
              Shookra Clinical &amp; Beauty Portfolio
            </p>
            <h2
              id="treatments-heading"
              className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F6F3EE] leading-tight"
              style={{ textWrap: "balance" }}
            >
              Our Signature Treatments
            </h2>
            <p className="text-base text-[#A8A196] mt-3 max-w-xl">
              Personalized aesthetic solutions designed around your goals.
            </p>
          </div>

          {/* Interactive Filter Tabs (Functional Segmented Controls) */}
          <div
            role="tablist"
            aria-label="Filter treatments by category"
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#161412] border border-[#F6F3EE]/10 rounded-sm self-start"
          >
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 text-xs font-medium rounded-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? "bg-[#C6A368] text-[#0D0C0B] font-semibold shadow-sm"
                      : "text-[#C7C0B6] hover:text-[#F6F3EE]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 10 Signature Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectService={onSelectService}
              onBookService={onBookService}
            />
          ))}
        </div>

        {/* Responsible Medical / Consultation Disclaimer */}
        <div className="mt-14 pt-8 border-t border-[#F6F3EE]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-xs text-[#A8A196] max-w-2xl leading-relaxed">
            {CLINIC_INFO.disclaimer}
          </p>

          <button
            type="button"
            onClick={() => onBookService()}
            className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#0D0C0B] bg-[#C6A368] hover:bg-[#D5B57C] rounded-sm luxury-neon-cta whitespace-nowrap shrink-0 cursor-pointer"
          >
            Schedule Personal Consultation
          </button>
        </div>
      </div>
    </section>
  );
};
