import React from "react";
import { ArrowRight } from "lucide-react";
import { GENERATED_IMAGES } from "../data/servicesData";
import { ResilientImage } from "./ResilientImage";

interface AboutSectionProps {
  onOpenBooking: () => void;
  onExploreTreatments: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenBooking,
  onExploreTreatments,
}) => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 lg:py-28 bg-[#F6F3EE] text-[#141210]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Dual Imagery Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-sm overflow-hidden border border-[#141210]/10 aspect-[4/3] shadow-xl">
              <ResilientImage
                src={GENERATED_IMAGES.pmuFacial}
                alt="Refined natural facial aesthetics at Shookra Aesthetics & Academy"
                containerClassName="w-full h-full"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Supporting Secondary Image */}
            <div className="mt-6 sm:mt-0 sm:w-2/3 sm:ml-auto sm:-mt-20 relative z-10 rounded-sm overflow-hidden border-4 border-[#F6F3EE] shadow-xl aspect-[16/10]">
              <ResilientImage
                src={GENERATED_IMAGES.hydraCarbon}
                alt="Serene skincare treatment preparation at Shookra clinic in New Delhi"
                containerClassName="w-full h-full"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Editorial Narrative Column */}
          <div className="lg:col-span-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[#8C6D3B] font-semibold mb-3">
              About Shookra Aesthetics &amp; Academy
            </p>

            <h2
              id="about-heading"
              className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#141210] leading-[1.12] mb-6"
              style={{ textWrap: "balance" }}
            >
              Where Advanced Aesthetics Meets Personal Care.
            </h2>

            <p className="text-base sm:text-lg text-[#3D3833] leading-relaxed mb-6">
              Shookra Aesthetics &amp; Academy is dedicated to helping clients
              look and feel their best through personalized aesthetic, skin,
              hair and beauty treatments.
            </p>

            <p className="text-sm sm:text-base text-[#575049] leading-relaxed mb-8">
              Situated in Shivalik Colony, New Delhi, our clinic brings together
              ten specialized protocols—from Permanent Makeup, Hydra Facial, and
              Carbon Facial Peels to MNRF, Laser Hair Removal, Tattoo Removal,
              Scar Removal, and Scalp &amp; Hairfall care. Every visit begins
              with attentive listening, honest assessment, and a treatment plan
              shaped around your comfort.
            </p>

            {/* Editorial Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 border-y border-[#141210]/12 mb-8">
              <div>
                <h3 className="font-serif-editorial text-xl font-semibold text-[#141210] mb-1">
                  Bespoke Assessment
                </h3>
                <p className="text-xs sm:text-sm text-[#575049] leading-relaxed">
                  Treatment suitability and customized plans are thoughtfully
                  reviewed before every session.
                </p>
              </div>
              <div>
                <h3 className="font-serif-editorial text-xl font-semibold text-[#141210] mb-1">
                  Aesthetic &amp; Academy Hub
                </h3>
                <p className="text-xs sm:text-sm text-[#575049] leading-relaxed">
                  Uniting personal clinical care with modern beauty and
                  aesthetic education in South Delhi.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onExploreTreatments}
                className="group inline-flex items-center gap-3 px-7 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#F6F3EE] bg-[#141210] hover:bg-[#26221E] rounded-sm transition-colors cursor-pointer"
              >
                <span>Discover Shookra</span>
                <ArrowRight
                  className="w-4 h-4 text-[#C6A368] transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>

              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#141210] border border-[#141210]/25 hover:border-[#8C6D3B] hover:text-[#8C6D3B] rounded-sm transition-colors cursor-pointer"
              >
                <span>Book Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
