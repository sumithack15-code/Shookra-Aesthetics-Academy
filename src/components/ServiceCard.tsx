import React from "react";
import { ArrowUpRight, Calendar } from "lucide-react";
import { TreatmentService } from "../data/servicesData";
import { ResilientImage } from "./ResilientImage";

interface ServiceCardProps {
  service: TreatmentService;
  onSelectService: (service: TreatmentService) => void;
  onBookService: (serviceName: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onSelectService,
  onBookService,
}) => {
  return (
    <article className="group bg-[#151311] border border-[#F6F3EE]/10 rounded-sm overflow-hidden flex flex-col justify-between luxury-card-hover">
      <div>
        {/* Image Frame with subtle 1.03 hover scale */}
        <div
          onClick={() => onSelectService(service)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onSelectService(service);
            }
          }}
          aria-label={`View details for ${service.name}`}
          className="relative aspect-[4/3] overflow-hidden cursor-pointer"
        >
          <ResilientImage
            src={service.heroImage}
            alt={service.imageAlt}
            containerClassName="w-full h-full"
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#151311] via-transparent to-transparent opacity-80"
          />

          {/* Quiet Editorial Numbering & Unboxed Category Metadata */}
          <div className="absolute bottom-3 left-5 right-5 flex items-center justify-between text-xs text-[#E2C792]">
            <span className="font-mono tabular-nums tracking-widest">
              {service.indexNumber}.
            </span>
            <span className="text-[#D5CFC7] tracking-wide">
              {service.category}
            </span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 pb-4">
          <h3 className="font-serif-editorial text-2xl font-medium text-[#F6F3EE] group-hover:text-[#E2C792] transition-colors duration-200 mb-2.5">
            <button
              type="button"
              onClick={() => onSelectService(service)}
              className="text-left focus-visible:outline-2 focus-visible:outline-[#C6A368] cursor-pointer"
            >
              {service.name}
            </button>
          </h3>

          <p className="text-sm text-[#A8A196] leading-relaxed line-clamp-3">
            {service.shortDescription}
          </p>
        </div>
      </div>

      {/* Card Actions */}
      <div className="px-6 pb-6 pt-3 mt-2 border-t border-[#F6F3EE]/8 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => onSelectService(service)}
          className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-[#D5CFC7] hover:text-[#E2C792] transition-colors whitespace-nowrap shrink-0 cursor-pointer py-2"
        >
          <span>Learn More</span>
          <ArrowUpRight
            className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </button>

        <button
          type="button"
          onClick={() => onBookService(service.name)}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0D0C0B] bg-[#C6A368] hover:bg-[#D5B57C] rounded-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Book Appointment</span>
        </button>
      </div>
    </article>
  );
};
