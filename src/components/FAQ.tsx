import React, { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { GENERAL_FAQS } from "../data/servicesData";
import { CLINIC_INFO, getWhatsAppHref } from "../config/clinicConfig";

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-20 lg:py-28 bg-[#0D0C0B] border-t border-[#F6F3EE]/10"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-[#C6A368] mb-3">
            Clear &amp; Responsible Guidance
          </p>
          <h2
            id="faq-heading"
            className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F6F3EE]"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#A8A196] mt-3 max-w-xl mx-auto">
            Answers to common questions regarding consultations, treatments, and
            visiting Shookra Aesthetics &amp; Academy.
          </p>
        </div>

        <div className="space-y-3.5">
          {GENERAL_FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#151311] border border-[#F6F3EE]/10 rounded-sm overflow-hidden transition-colors hover:border-[#C6A368]/30"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C6A368]"
                  >
                    <span className="font-serif-editorial text-xl sm:text-2xl text-[#F6F3EE]">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#C6A368] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                {isOpen && (
                  <div className="px-6 pb-6 pt-3 text-sm sm:text-base text-[#C7C0B6] leading-relaxed border-t border-[#F6F3EE]/8">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 p-6 bg-[#151311] border border-[#F6F3EE]/10 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-[#F6F3EE]">
              Have a specific question about your skin or hair goals?
            </p>
            <p className="text-xs text-[#A8A196] mt-0.5">
              {CLINIC_INFO.disclaimer}
            </p>
          </div>
          <a
            href={getWhatsAppHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#0D0C0B] bg-[#C6A368] hover:bg-[#D5B57C] rounded-sm whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            <span>Talk on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
