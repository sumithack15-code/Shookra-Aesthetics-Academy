import React from "react";
import { MessageCircle, Calendar, ArrowUp, Instagram, X } from "lucide-react";
import {
  getWhatsAppHref,
  INSTAGRAM_URL,
  isConfiguredValue,
} from "../config/clinicConfig";

interface FloatingActionsProps {
  onOpenBooking: () => void;
  instagramModalOpen: boolean;
  onCloseInstagramModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onOpenBooking,
  instagramModalOpen,
  onCloseInstagramModal,
}) => {
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hasCustomInstagram = isConfiguredValue(
    INSTAGRAM_URL,
    "YOUR_INSTAGRAM_URL_HERE"
  );

  return (
    <>
      {/* Desktop Floating WhatsApp & Scroll-to-Top */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-3">
        {showScrollTop && (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="w-11 h-11 rounded-sm bg-[#161412]/90 border border-[#F6F3EE]/20 text-[#F6F3EE] hover:border-[#C6A368] hover:text-[#C6A368] flex items-center justify-center shadow-lg transition-colors cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        <a
          href={getWhatsAppHref()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp with Shookra Aesthetics & Academy"
          className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-sm bg-[#151311] border border-[#C6A368]/50 text-[#F6F3EE] hover:border-[#C6A368] shadow-2xl transition-transform duration-200 hover:-translate-y-0.5"
        >
          <MessageCircle className="w-4 h-4 text-[#C6A368]" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-wider">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Mobile Bottom Sticky Bar: [ WhatsApp ] [ Book Appointment ] (Strictly <= 15% viewport height) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0D0C0B]/95 backdrop-blur-md border-t border-[#C6A368]/30 px-4 py-2.5 flex items-center gap-3">
        <a
          href={getWhatsAppHref()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex-1 py-3 px-4 rounded-sm bg-[#171512] border border-[#F6F3EE]/20 text-xs font-semibold uppercase tracking-wider text-[#F6F3EE] flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-4 h-4 text-[#C6A368]" aria-hidden="true" />
          <span>WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={onOpenBooking}
          className="flex-1 py-3 px-4 rounded-sm bg-[#C6A368] text-xs font-semibold uppercase tracking-wider text-[#0D0C0B] flex items-center justify-center gap-2 luxury-neon-cta cursor-pointer"
        >
          <Calendar className="w-4 h-4" aria-hidden="true" />
          <span>Book Appointment</span>
        </button>
      </div>

      {/* Configurable Instagram Modal / Redirect Handler */}
      {instagramModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="instagram-modal-title"
          className="fixed inset-0 z-50 bg-[#0D0C0B]/90 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="max-w-md w-full bg-[#151311] border border-[#D4A39A]/40 rounded-sm p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4A39A]">
                <Instagram className="w-4 h-4" />
                <span>Instagram Integration</span>
              </div>
              <button
                type="button"
                onClick={onCloseInstagramModal}
                aria-label="Close Instagram dialog"
                className="text-[#A8A196] hover:text-[#F6F3EE] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <h3
              id="instagram-modal-title"
              className="font-serif-editorial text-2xl text-[#F6F3EE] mb-2"
            >
              Shookra Aesthetics &amp; Academy on Instagram
            </h3>

            {hasCustomInstagram ? (
              <div className="space-y-4">
                <p className="text-xs sm:text-sm text-[#C7C0B6] leading-relaxed">
                  Explore our latest aesthetic work, clinic updates, and academy
                  highlights on Instagram.
                </p>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onCloseInstagramModal}
                  className="w-full py-3 px-5 rounded-sm luxury-neon-instagram text-xs font-semibold uppercase tracking-wider text-[#F6F3EE] flex items-center justify-center gap-2"
                >
                  <Instagram className="w-4 h-4 text-[#D4A39A]" />
                  <span>Open Instagram Profile</span>
                </a>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-xs sm:text-sm text-[#C7C0B6] leading-relaxed">
                  To prevent linking to an unverified handle, the Instagram URL
                  is configured via the{" "}
                  <code className="text-[#E2C792]">INSTAGRAM_URL</code>{" "}
                  variable (<code className="text-[#E2C792]">VITE_INSTAGRAM_URL</code>{" "}
                  in <code className="text-[#E2C792]">.env</code>).
                </p>
                <div className="p-3 bg-[#100E0C] border border-[#F6F3EE]/10 rounded-sm text-xs font-mono text-[#A8A196]">
                  INSTAGRAM_URL = &quot;{INSTAGRAM_URL}&quot;
                </div>
                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={onCloseInstagramModal}
                    className="px-4 py-2 text-xs uppercase tracking-wider text-[#C7C0B6] hover:text-[#F6F3EE] cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      onCloseInstagramModal();
                      onOpenBooking();
                    }}
                    className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0D0C0B] bg-[#C6A368] rounded-sm cursor-pointer"
                  >
                    Book Appointment Instead
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
