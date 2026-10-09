import React, { useState, useEffect } from "react";
import { Menu, X, Calendar, Instagram } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenBooking: (preselectedService?: string) => void;
  onOpenInstagramInfo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenBooking,
  onOpenInstagramInfo,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const primaryNavLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "treatments", label: "Treatments" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact" },
  ];

  const mobileFullLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "treatments", label: "Treatments" },
    { id: "why-shookra", label: "Why Shookra" },
    { id: "academy", label: "Academy" },
    { id: "gallery", label: "Gallery" },
    { id: "reviews", label: "Reviews" },
    { id: "contact", label: "Contact" },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#0D0C0B]/92 backdrop-blur-md border-b border-[#C6A368]/25 py-3.5"
          : "bg-[#0D0C0B]/70 backdrop-blur-sm border-b border-[#F6F3EE]/10 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark in the display face */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("home");
          }}
          className="font-serif-editorial text-xl sm:text-2xl font-semibold tracking-wider text-[#F6F3EE] hover:text-[#C6A368] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6A368]"
        >
          SHOOKRA AESTHETICS &amp; ACADEMY
        </a>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-7 text-sm font-medium"
        >
          {primaryNavLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.id);
                }}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6A368] ${
                  isActive
                    ? "text-[#E2C792]"
                    : "text-[#D5CFC7] hover:text-[#F6F3EE]"
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 right-0 -bottom-0.5 h-[1.5px] transition-all duration-200 ${
                    isActive
                      ? "bg-[#C6A368] shadow-[0_0_8px_rgba(198,163,104,0.8)] opacity-100 scale-x-100"
                      : "bg-[#C6A368]/60 opacity-0 scale-x-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onOpenBooking()}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#0D0C0B] bg-[#C6A368] hover:bg-[#D5B57C] rounded-sm luxury-neon-cta whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F6F3EE]"
          >
            <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Book Appointment</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 text-[#F6F3EE] hover:text-[#C6A368] border border-[#F6F3EE]/15 rounded-sm transition-colors focus-visible:outline-2 focus-visible:outline-[#C6A368]"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#12100E] border-b border-[#C6A368]/30 px-6 py-6 shadow-2xl">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-3">
            {mobileFullLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.id);
                  }}
                  className={`py-2 text-base font-medium border-b border-[#F6F3EE]/5 flex items-center justify-between transition-colors ${
                    isActive ? "text-[#E2C792]" : "text-[#F6F3EE] hover:text-[#C6A368]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="text-xs uppercase tracking-widest text-[#C6A368]">
                      Current
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          <div className="mt-6 pt-4 border-t border-[#F6F3EE]/10 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 px-5 text-xs font-semibold tracking-wider uppercase text-[#0D0C0B] bg-[#C6A368] rounded-sm luxury-neon-cta flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <span>Book Appointment</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInstagramInfo();
              }}
              aria-label="Follow Shookra Aesthetics & Academy on Instagram"
              className="w-full py-2.5 px-4 text-xs font-medium text-[#F6F3EE] rounded-sm luxury-neon-instagram flex items-center justify-center gap-2"
            >
              <Instagram className="w-4 h-4 text-[#D4A39A]" aria-hidden="true" />
              <span>Follow us on Instagram</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
