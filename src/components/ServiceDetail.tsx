import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  ChevronDown,
  MessageCircle,
  ShieldAlert,
} from "lucide-react";
import {
  SIGNATURE_SERVICES,
  TreatmentService,
} from "../data/servicesData";
import { CLINIC_INFO, getWhatsAppHref } from "../config/clinicConfig";
import { ResilientImage } from "./ResilientImage";

interface ServiceDetailProps {
  service: TreatmentService;
  onBack: () => void;
  onSelectService: (service: TreatmentService) => void;
  onBookService: (serviceName: string) => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({
  service,
  onBack,
  onSelectService,
  onBookService,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [service.id]);

  const relatedServices = SIGNATURE_SERVICES.filter(
    (s) => s.id !== service.id
  ).slice(0, 3);

  return (
    <article className="min-h-screen pt-24 pb-20 bg-[#0D0C0B] text-[#F6F3EE]">
      {/* Top Breadcrumb & Back Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-b border-[#F6F3EE]/10">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#C6A368] hover:text-[#E2C792] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Back to All Treatments</span>
          </button>

          <nav aria-label="Breadcrumb" className="text-xs text-[#A8A196]">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span>Treatments</span>
            <span className="mx-2">/</span>
            <span className="text-[#F6F3EE]">{service.name}</span>
          </nav>
        </div>
      </div>

      {/* Dedicated Hero Split */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C6A368] mb-3">
              <span className="font-mono tabular-nums">
                Treatment {service.indexNumber}
              </span>
              <span aria-hidden="true">·</span>
              <span>{service.category}</span>
            </div>

            <h1
              className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#F6F3EE] leading-[1.08] mb-6"
              style={{ textWrap: "balance" }}
            >
              {service.name}
            </h1>

            <p className="text-base sm:text-lg text-[#C7C0B6] leading-relaxed mb-8">
              {service.overview}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <button
                type="button"
                onClick={() => onBookService(service.name)}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0D0C0B] bg-[#C6A368] hover:bg-[#D5B57C] rounded-sm luxury-neon-cta whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Calendar className="w-4 h-4" aria-hidden="true" />
                <span>Book {service.name}</span>
              </button>

              <a
                href={getWhatsAppHref(
                  `Hello Shookra Aesthetics & Academy, I would like to enquire about ${service.name}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-xs sm:text-sm font-medium uppercase tracking-wider text-[#F6F3EE] bg-[#161412] hover:bg-[#1F1C19] border border-[#F6F3EE]/20 rounded-sm transition-colors whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4 text-[#C6A368]" aria-hidden="true" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>

            {/* Responsible Clinical Note */}
            <div className="p-4 bg-[#151311] border border-[#C6A368]/25 rounded-sm flex items-start gap-3">
              <ShieldAlert
                className="w-5 h-5 text-[#C6A368] shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <p className="text-xs text-[#C7C0B6] leading-relaxed">
                <strong className="text-[#F6F3EE] font-medium">
                  Consultation &amp; Suitability Notice:
                </strong>{" "}
                Individual treatment plans depend on assessment. Suitability
                should be discussed during consultation, and results may vary
                from person to person.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative h-[340px] sm:h-[440px] lg:h-full rounded-sm overflow-hidden border border-[#C6A368]/25">
              <ResilientImage
                src={service.heroImage}
                alt={service.imageAlt}
                priority={true}
                containerClassName="w-full h-full"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Benefits & Who It May Be Suitable For */}
      <div className="bg-[#12100E] border-y border-[#F6F3EE]/10 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Key Benefits */}
            <div className="bg-[#171512] border border-[#F6F3EE]/10 p-8 rounded-sm">
              <p className="text-xs uppercase tracking-[0.18em] text-[#C6A368] mb-2">
                Treatment Highlights
              </p>
              <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#F6F3EE] mb-6">
                Key Benefits of {service.name}
              </h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-4 h-4 text-[#C6A368] shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <span className="text-sm sm:text-base text-[#D5CFC7] leading-relaxed">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who It May Be Suitable For */}
            <div className="bg-[#171512] border border-[#F6F3EE]/10 p-8 rounded-sm">
              <p className="text-xs uppercase tracking-[0.18em] text-[#D4A39A] mb-2">
                Candidacy &amp; Assessment
              </p>
              <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#F6F3EE] mb-6">
                Who It May Be Suitable For
              </h2>
              <ul className="space-y-4">
                {service.suitability.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="font-mono text-xs text-[#C6A368] mt-1">
                      0{index + 1}.
                    </span>
                    <span className="text-sm sm:text-base text-[#D5CFC7] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* The Treatment Experience (3-Step Journey) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-[#C6A368] mb-2">
            What to Expect at Shookra
          </p>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#F6F3EE]">
            The Treatment Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {service.experienceSteps.map((stepObj) => (
            <div
              key={stepObj.step}
              className="bg-[#151311] border border-[#F6F3EE]/10 p-7 rounded-sm"
            >
              <span className="font-mono text-xs text-[#C6A368] tracking-widest block mb-3">
                STEP {stepObj.step}
              </span>
              <h3 className="font-serif-editorial text-2xl text-[#F6F3EE] mb-3">
                {stepObj.title}
              </h3>
              <p className="text-sm text-[#A8A196] leading-relaxed">
                {stepObj.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Treatment-Specific FAQs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="font-serif-editorial text-3xl text-[#F6F3EE] mb-8 text-center">
          Frequently Asked Questions — {service.name}
        </h2>
        <div className="space-y-4">
          {service.faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#151311] border border-[#F6F3EE]/10 rounded-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-serif-editorial text-xl text-[#F6F3EE]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#C6A368] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm text-[#C7C0B6] leading-relaxed border-t border-[#F6F3EE]/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Other Treatments to Explore */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-[#F6F3EE]/10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#F6F3EE]">
            Explore Other Signature Treatments
          </h2>
          <button
            type="button"
            onClick={onBack}
            className="text-xs uppercase tracking-wider text-[#C6A368] hover:underline cursor-pointer"
          >
            View All 10 Treatments
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedServices.map((rel) => (
            <div
              key={rel.id}
              className="bg-[#151311] border border-[#F6F3EE]/10 p-6 rounded-sm flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-[#C6A368]">
                  {rel.indexNumber}. {rel.category}
                </span>
                <h3 className="font-serif-editorial text-2xl text-[#F6F3EE] mt-1 mb-2">
                  {rel.name}
                </h3>
                <p className="text-xs text-[#A8A196] line-clamp-2 mb-4">
                  {rel.shortDescription}
                </p>
              </div>
              <button
                type="button"
                onClick={() => onSelectService(rel)}
                className="text-xs font-medium uppercase tracking-wider text-[#E2C792] hover:underline text-left cursor-pointer"
              >
                Explore {rel.name} →
              </button>
            </div>
          ))}
        </div>

        <p className="text-xs text-[#A8A196] mt-12 text-center">
          {CLINIC_INFO.disclaimer}
        </p>
      </div>
    </article>
  );
};
