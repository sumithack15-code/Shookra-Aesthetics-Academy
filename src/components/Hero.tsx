import React from "react";
import { ArrowRight, Star, MapPin, Instagram } from "lucide-react";
import { CLINIC_INFO } from "../config/clinicConfig";
import { GENERATED_IMAGES } from "../data/servicesData";
import { ResilientImage } from "./ResilientImage";

interface HeroProps {
  onOpenBooking: () => void;
  onExploreTreatments: () => void;
  onOpenInstagram: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onExploreTreatments,
  onOpenInstagram,
}) => {
  return (
    <section
      id="home"
      aria-label="Introduction to Shookra Aesthetics & Academy"
      className="relative min-h-screen pt-24 pb-16 lg:pt-28 lg:pb-24 flex items-center overflow-hidden bg-[#0D0C0B]"
    >
      {/* Subtle Luxury Ambient Radial Light Effect */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-1/4 w-[520px] h-[520px] rounded-full bg-[#C6A368]/10 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-10 w-[400px] h-[400px] rounded-full bg-[#D4A39A]/8 blur-[120px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Editorial Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center py-4 lg:py-8">
            <div className="flex flex-wrap items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#C6A368] mb-5">
              <span>{CLINIC_INFO.name}</span>
              <span aria-hidden="true" className="text-[#F6F3EE]/30">
                ·
              </span>
              <span className="text-[#D4A39A]">Premium Aesthetic Experience</span>
            </div>

            <h1
              className="font-serif-editorial text-[#F6F3EE] font-normal leading-[1.08] tracking-tight mb-6"
              style={{
                fontSize: "clamp(2.5rem, 4.5vw, 4.25rem)",
                textWrap: "balance",
              }}
            >
              Advanced Aesthetics.{" "}
              <span className="italic font-normal text-[#E2C792] block sm:inline">
                Elevated Confidence.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#C7C0B6] leading-relaxed max-w-xl mb-9">
              Premium aesthetic, skin, hair and beauty treatments designed with
              precision, care and modern techniques.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                type="button"
                onClick={onOpenBooking}
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#0D0C0B] bg-[#C6A368] hover:bg-[#D5B57C] rounded-sm luxury-neon-cta whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Book Your Appointment</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>

              <button
                type="button"
                onClick={onExploreTreatments}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-xs sm:text-sm font-medium tracking-wider uppercase text-[#F6F3EE] bg-[#161412] hover:bg-[#1F1C19] border border-[#F6F3EE]/20 hover:border-[#C6A368]/50 rounded-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Explore Treatments</span>
              </button>

              <button
                type="button"
                onClick={onOpenInstagram}
                aria-label="Follow Shookra Aesthetics & Academy on Instagram"
                className="inline-flex items-center justify-center gap-2 px-4 py-4 text-xs font-medium text-[#F6F3EE] rounded-sm luxury-neon-instagram whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Instagram className="w-4 h-4 text-[#D4A39A]" aria-hidden="true" />
                <span className="sm:hidden lg:inline">Instagram</span>
              </button>
            </div>

            {/* Subtle Unboxed Trust Strip */}
            <div className="pt-7 border-t border-[#F6F3EE]/10 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm text-[#D5CFC7]">
              <div className="flex items-center gap-2">
                <div className="flex items-center text-[#C6A368]" aria-label="5.0 out of 5 stars">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-3.5 h-3.5 fill-[#C6A368] text-[#C6A368]"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <span className="font-semibold text-[#F6F3EE] tabular-nums">
                  5.0 Rating
                </span>
              </div>

              <span aria-hidden="true" className="text-[#F6F3EE]/25">
                ·
              </span>

              <span className="tabular-nums text-[#D5CFC7]">
                22+ Google Reviews
              </span>

              <span aria-hidden="true" className="text-[#F6F3EE]/25">
                ·
              </span>

              <div className="flex items-center gap-1.5 text-[#D5CFC7]">
                <MapPin className="w-3.5 h-3.5 text-[#C6A368]" aria-hidden="true" />
                <span>Shivalik Colony, New Delhi</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Clinic Showcase Image */}
          <div className="lg:col-span-5 relative flex flex-col justify-between">
            <div className="relative h-[380px] sm:h-[460px] lg:h-full w-full rounded-sm overflow-hidden border border-[#C6A368]/25 shadow-2xl">
              <ResilientImage
                src={GENERATED_IMAGES.heroClinic}
                alt="Luxury interior of Shookra Aesthetics & Academy clinic in Shivalik Colony, New Delhi"
                priority={true}
                containerClassName="w-full h-full relative"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
              />
              {/* Measured Contrast Scrim */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#0D0C0B]/85 via-[#0D0C0B]/20 to-transparent"
              />

              {/* Bottom Caption Overlay inside Image Frame */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#E2C792] mb-1">
                    Where Beauty Meets Precision
                  </p>
                  <p className="font-serif-editorial text-xl text-[#F6F3EE]">
                    Shivalik Colony · South Delhi
                  </p>
                </div>
                <span className="text-xs text-[#D5CFC7] tabular-nums whitespace-nowrap">
                  10 Signature Protocols
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
