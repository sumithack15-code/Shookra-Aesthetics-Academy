import React from "react";
import { Calendar } from "lucide-react";
import { WHY_CHOOSE_ITEMS } from "../data/servicesData";

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="why-shookra"
      aria-labelledby="why-shookra-heading"
      className="py-20 lg:py-28 bg-[#12100E] border-y border-[#F6F3EE]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#C6A368] mb-3">
              The Shookra Philosophy
            </p>
            <h2
              id="why-shookra-heading"
              className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F6F3EE]"
              style={{ textWrap: "balance" }}
            >
              Why Shookra?
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#A8A196] max-w-md leading-relaxed">
            Every detail at Shookra Aesthetics &amp; Academy is guided by calm
            professionalism, honest consultation, and individualized aesthetic
            care.
          </p>
        </div>

        {/* Asymmetric Bento Grid for the 5 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {WHY_CHOOSE_ITEMS.map((item, idx) => {
            const spanClass =
              idx < 2 ? "md:col-span-3" : "md:col-span-2";
            return (
              <div
                key={item.index}
                className={`${spanClass} bg-[#171512] border border-[#F6F3EE]/10 p-8 rounded-sm flex flex-col justify-between luxury-card-hover`}
              >
                <div>
                  <span className="font-mono text-xs text-[#C6A368] tracking-widest block mb-4">
                    {item.index}.
                  </span>
                  <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#F6F3EE] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#A8A196] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2.5 px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0D0C0B] bg-[#C6A368] hover:bg-[#D5B57C] rounded-sm luxury-neon-cta cursor-pointer"
          >
            <Calendar className="w-4 h-4" aria-hidden="true" />
            <span>Book Your Appointment</span>
          </button>
        </div>
      </div>
    </section>
  );
};
