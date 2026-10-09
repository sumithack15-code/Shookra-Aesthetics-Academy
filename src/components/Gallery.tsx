import React, { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "../data/servicesData";
import { ResilientImage } from "./ResilientImage";

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const filterTabs = [
    "All",
    "Clinic",
    "Beauty",
    "Skin",
    "Hair",
    "Treatments",
    "Results",
  ];

  const filteredItems: GalleryItem[] =
    activeFilter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  }, [lightboxIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
    );
  }, [lightboxIndex, filteredItems.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, handleNext, handlePrev]);

  const currentLightboxItem =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="py-20 lg:py-28 bg-[#0D0C0B]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#C6A368] mb-3">
              Visual Portfolio &amp; Clinic Ambience
            </p>
            <h2
              id="gallery-heading"
              className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F6F3EE]"
            >
              Inside Shookra
            </h2>
            <p className="text-sm text-[#A8A196] mt-2 max-w-xl">
              Explore our serene Shivalik Colony clinic environment and
              illustrative treatment aesthetics.
            </p>
          </div>

          {/* Interactive Category Filter Bar */}
          <div
            role="tablist"
            aria-label="Gallery categories"
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#161412] border border-[#F6F3EE]/10 rounded-sm self-start"
          >
            {filterTabs.map((tab) => {
              const isSelected = activeFilter === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => {
                    setActiveFilter(tab);
                    setLightboxIndex(null);
                  }}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isSelected
                      ? "bg-[#C6A368] text-[#0D0C0B] font-semibold"
                      : "text-[#C7C0B6] hover:text-[#F6F3EE]"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Masonry-Inspired Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setLightboxIndex(idx);
                }
              }}
              aria-label={`Open ${item.title} in lightbox`}
              className="group relative rounded-sm overflow-hidden border border-[#F6F3EE]/10 bg-[#151311] cursor-pointer luxury-card-hover"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <ResilientImage
                  src={item.image}
                  alt={item.caption}
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0B]/90 via-[#0D0C0B]/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#0D0C0B]/70 border border-[#F6F3EE]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4 text-[#E2C792]" aria-hidden="true" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-xs text-[#C6A368] mb-1">
                    <span>{item.category}</span>
                    <span aria-hidden="true" className="mx-1.5">
                      ·
                    </span>
                    <span className="text-[#A8A196]">
                      {item.isIllustrativeNote}
                    </span>
                  </div>
                  <h3 className="font-serif-editorial text-xl text-[#F6F3EE]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#C7C0B6] mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Ethical Note on Results Imagery */}
        <p className="text-xs text-[#A8A196] mt-8 text-center">
          Note: To respect client confidentiality and ethical standards, imagery
          shown above is illustrative of our clinic environment and treatment
          modalities. Verified client cases may be reviewed privately during your
          in-clinic consultation.
        </p>
      </div>

      {/* Lightbox Modal with Keyboard & Mobile Touch Swipe Support */}
      {currentLightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={currentLightboxItem.title}
          onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchStartX === null) return;
            const deltaX = e.changedTouches[0].clientX - touchStartX;
            if (deltaX > 50) handlePrev();
            if (deltaX < -50) handleNext();
            setTouchStartX(null);
          }}
          className="fixed inset-0 z-50 bg-[#0D0C0B]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close gallery lightbox"
            className="absolute top-6 right-6 w-11 h-11 rounded-sm bg-[#161412] border border-[#F6F3EE]/20 text-[#F6F3EE] hover:text-[#C6A368] flex items-center justify-center cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {filteredItems.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous image"
                className="absolute left-4 sm:left-8 w-11 h-11 rounded-sm bg-[#161412]/90 border border-[#F6F3EE]/20 text-[#F6F3EE] hover:text-[#C6A368] flex items-center justify-center cursor-pointer z-10"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next image"
                className="absolute right-4 sm:right-8 w-11 h-11 rounded-sm bg-[#161412]/90 border border-[#F6F3EE]/20 text-[#F6F3EE] hover:text-[#C6A368] flex items-center justify-center cursor-pointer z-10"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          <div className="max-w-4xl w-full bg-[#151311] border border-[#C6A368]/30 rounded-sm overflow-hidden shadow-2xl">
            <div className="aspect-[16/10] w-full bg-[#0D0C0B]">
              <ResilientImage
                src={currentLightboxItem.image}
                alt={currentLightboxItem.caption}
                containerClassName="w-full h-full"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs text-[#C6A368] mb-1">
                  {currentLightboxItem.category} ·{" "}
                  {currentLightboxItem.isIllustrativeNote}
                </p>
                <h3 className="font-serif-editorial text-2xl text-[#F6F3EE]">
                  {currentLightboxItem.title}
                </h3>
                <p className="text-sm text-[#C7C0B6] mt-1">
                  {currentLightboxItem.caption}
                </p>
              </div>
              <span className="text-xs font-mono text-[#A8A196] tabular-nums shrink-0">
                {(lightboxIndex ?? 0) + 1} / {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
