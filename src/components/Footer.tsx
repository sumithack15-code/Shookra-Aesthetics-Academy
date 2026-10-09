import React from "react";
import { Instagram, MessageCircle, Calendar } from "lucide-react";
import { CLINIC_INFO, getWhatsAppHref } from "../config/clinicConfig";
import { SIGNATURE_SERVICES, TreatmentService } from "../data/servicesData";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSelectService: (service: TreatmentService) => void;
  onOpenBooking: () => void;
  onOpenInstagram: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onSelectService,
  onOpenBooking,
  onOpenInstagram,
}) => {
  return (
    <footer className="bg-[#090807] text-[#C7C0B6] border-t border-[#F6F3EE]/10 pb-24 lg:pb-12">
      {/* Pre-Footer Conversion Banner */}
      <div className="border-b border-[#F6F3EE]/10 py-14 bg-[#0D0C0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#C6A368] mb-2">
              Begin Your Aesthetic Journey
            </p>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#F6F3EE]">
              Where Beauty Meets Precision.
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2.5 px-7 py-4 text-xs font-semibold uppercase tracking-wider text-[#0D0C0B] bg-[#C6A368] hover:bg-[#D5B57C] rounded-sm luxury-neon-cta cursor-pointer"
            >
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <span>Book Appointment</span>
            </button>

            <a
              href={getWhatsAppHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 text-xs font-medium uppercase tracking-wider text-[#F6F3EE] bg-[#161412] border border-[#F6F3EE]/20 hover:border-[#C6A368] rounded-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#C6A368]" aria-hidden="true" />
              <span>Talk on WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={onOpenInstagram}
              aria-label="Follow us on Instagram"
              className="inline-flex items-center gap-2 px-6 py-4 text-xs font-medium uppercase tracking-wider text-[#F6F3EE] rounded-sm luxury-neon-instagram cursor-pointer"
            >
              <Instagram className="w-4 h-4 text-[#D4A39A]" aria-hidden="true" />
              <span>Follow us on Instagram</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#F6F3EE]/10">
          {/* Column 1: Brand Identity */}
          <div className="lg:col-span-4">
            <div className="font-serif-editorial text-2xl font-semibold tracking-wider text-[#F6F3EE]">
              SHOOKRA
            </div>
            <div className="text-xs tracking-[0.24em] uppercase text-[#C6A368] mb-4">
              AESTHETICS &amp; ACADEMY
            </div>
            <p className="text-xs sm:text-sm text-[#A8A196] leading-relaxed max-w-sm mb-6">
              Premium aesthetic, skin, hair and beauty treatments designed with
              precision, care and modern techniques in Shivalik Colony, New
              Delhi.
            </p>
            <div className="text-xs text-[#D5CFC7] tabular-nums">
              Google Rating: 5.0 ★★★★★ (22 Reviews)
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-[0.18em] text-[#F6F3EE] font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "treatments", label: "Treatments" },
                { id: "why-shookra", label: "Why Shookra" },
                { id: "academy", label: "Academy" },
                { id: "gallery", label: "Gallery" },
                { id: "reviews", label: "Reviews" },
                { id: "contact", label: "Contact" },
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(link.id);
                    }}
                    className="text-[#A8A196] hover:text-[#E2C792] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: All 10 Signature Treatments */}
          <div className="lg:col-span-4">
            <h3 className="text-xs uppercase tracking-[0.18em] text-[#F6F3EE] font-semibold mb-4">
              Treatments
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 text-xs sm:text-sm">
              {SIGNATURE_SERVICES.map((service) => (
                <li key={service.id}>
                  <button
                    type="button"
                    onClick={() => onSelectService(service)}
                    className="text-left text-[#A8A196] hover:text-[#E2C792] transition-colors cursor-pointer"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Address & Social */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-[0.18em] text-[#F6F3EE] font-semibold mb-4">
              Address &amp; Social
            </h3>
            <p className="text-xs sm:text-sm text-[#A8A196] leading-relaxed mb-5">
              8, Road, Shivalik Rd,
              <br />
              Shivalik Colony,
              <br />
              New Delhi, Delhi 110017
            </p>

            <div className="flex flex-col gap-2.5">
              <button
                type="button"
                onClick={onOpenInstagram}
                aria-label="Follow Shookra Aesthetics & Academy on Instagram"
                className="inline-flex items-center gap-2 text-xs text-[#E2C792] hover:underline cursor-pointer"
              >
                <Instagram className="w-3.5 h-3.5 text-[#D4A39A]" />
                <span>Instagram</span>
              </button>

              <a
                href={getWhatsAppHref()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Shookra Aesthetics & Academy on WhatsApp"
                className="inline-flex items-center gap-2 text-xs text-[#E2C792] hover:underline"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#C6A368]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Legal / Medical Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#8A8277]">
          <p>© 2026 Shookra Aesthetics &amp; Academy. All rights reserved.</p>
          <p className="max-w-xl md:text-right">{CLINIC_INFO.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
};
