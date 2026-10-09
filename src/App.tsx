/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { AboutSection } from "./components/AboutSection";
import { ServicesGrid } from "./components/ServicesGrid";
import { ServiceDetail } from "./components/ServiceDetail";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { AcademySection } from "./components/AcademySection";
import { Gallery } from "./components/Gallery";
import { Reviews } from "./components/Reviews";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BookingModal } from "./components/BookingModal";
import { FloatingActions } from "./components/FloatingActions";
import { TreatmentService } from "./data/servicesData";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [activeServiceDetail, setActiveServiceDetail] =
    useState<TreatmentService | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [preselectedService, setPreselectedService] = useState<
    string | undefined
  >(undefined);
  const [instagramModalOpen, setInstagramModalOpen] = useState<boolean>(false);

  // Track active section on scroll when viewing the main landing page
  useEffect(() => {
    if (activeServiceDetail) return;

    const sectionIds = [
      "home",
      "about",
      "treatments",
      "why-shookra",
      "academy",
      "gallery",
      "reviews",
      "faq",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeServiceDetail]);

  // Dynamic Document Title & Canonical URL for SEO when switching between Home and Dedicated Service Pages
  useEffect(() => {
    const canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (activeServiceDetail) {
      document.title = `${activeServiceDetail.name} in New Delhi | Shookra Aesthetics & Academy`;
      if (canonicalEl) {
        canonicalEl.href = `${window.location.origin}/?treatment=${activeServiceDetail.slug}`;
      }
    } else {
      document.title =
        "Shookra Aesthetics & Academy | Premium Aesthetic Clinic in New Delhi";
      if (canonicalEl) {
        canonicalEl.href = `${window.location.origin}/`;
      }
    }
  }, [activeServiceDetail]);

  const handleNavigate = (sectionId: string) => {
    if (activeServiceDetail) {
      setActiveServiceDetail(null);
      setTimeout(() => {
        const target = document.getElementById(sectionId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 60);
    } else {
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
    setActiveSection(sectionId);
  };

  const handleOpenBooking = (serviceName?: string) => {
    setPreselectedService(serviceName);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0D0C0B] text-[#F6F3EE] selection:bg-[#C6A368]/30 selection:text-[#F6F3EE]">
      {/* Sticky Navigation Bar */}
      <Navbar
        activeSection={activeServiceDetail ? "treatments" : activeSection}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
        onOpenInstagramInfo={() => setInstagramModalOpen(true)}
      />

      {/* Main Content Area: Either Dedicated Service Page or Full Clinic Website */}
      <main id="main-content" className="flex-grow">
        {activeServiceDetail ? (
          <ServiceDetail
            service={activeServiceDetail}
            onBack={() => setActiveServiceDetail(null)}
            onSelectService={(srv) => setActiveServiceDetail(srv)}
            onBookService={(srvName) => handleOpenBooking(srvName)}
          />
        ) : (
          <>
            <Hero
              onOpenBooking={() => handleOpenBooking()}
              onExploreTreatments={() => handleNavigate("treatments")}
              onOpenInstagram={() => setInstagramModalOpen(true)}
            />

            <TrustBar />

            <AboutSection
              onOpenBooking={() => handleOpenBooking()}
              onExploreTreatments={() => handleNavigate("treatments")}
            />

            <ServicesGrid
              onSelectService={(srv) => setActiveServiceDetail(srv)}
              onBookService={(srvName) => handleOpenBooking(srvName)}
            />

            <WhyChooseUs onOpenBooking={() => handleOpenBooking()} />

            <AcademySection />

            <Gallery />

            <Reviews onOpenBooking={() => handleOpenBooking()} />

            <FAQ />

            <Contact
              onOpenBooking={() => handleOpenBooking()}
              onOpenInstagram={() => setInstagramModalOpen(true)}
            />
          </>
        )}
      </main>

      {/* Dark Luxury Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSelectService={(srv) => setActiveServiceDetail(srv)}
        onOpenBooking={() => handleOpenBooking()}
        onOpenInstagram={() => setInstagramModalOpen(true)}
      />

      {/* Multi-Step Appointment Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        initialService={preselectedService}
        onClose={() => setBookingModalOpen(false)}
      />

      {/* Floating WhatsApp, Mobile Sticky Bar & Instagram Config Modal */}
      <FloatingActions
        onOpenBooking={() => handleOpenBooking()}
        instagramModalOpen={instagramModalOpen}
        onCloseInstagramModal={() => setInstagramModalOpen(false)}
      />
    </div>
  );
}

