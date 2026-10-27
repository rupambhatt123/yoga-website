'use client';

import { useState, useEffect } from 'react';
import websiteData from '@/data/websiteData.json';

export default function Gallery() {
  const gallerySectionData = (websiteData as any)?.categories?.Yoga?.sections?.Gallery?.variants?.YogaGallery1;

  if (!gallerySectionData) return null;

  const categories: string[] = gallerySectionData.categories;
  const galleryItems = gallerySectionData.items;

  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<any | null>(null);

  const filteredImages =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((img: any) => img.category === activeCategory);

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    setActiveImageIndex(0);
  }, [activeCategory]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="bg-[#FAF8F5] pt-10 sm:pt-14 pb-20 lg:pb-28 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
        
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          
          <div className="flex items-center gap-3.5 mb-4">
            <div className="w-12 h-[1.5px] bg-[#C59B51]" />
            <span className="text-[11.5px] uppercase tracking-[0.28em] font-semibold text-[#2D4536]">
              {gallerySectionData.badge}
            </span>
            <div className="w-12 h-[1.5px] bg-[#C59B51]" />
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-[62px] leading-[1.08] tracking-tight mb-6 sm:mb-8"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            <span className="block font-semibold text-[#143928]">
              {gallerySectionData.titleLine1}
            </span>
            <span className="block italic font-normal text-[#587B66] mt-1.5">
              {gallerySectionData.titleLine2}
            </span>
          </h2>

          {/* Mobile Dropdown View */}
          <div className="w-full max-w-[280px] sm:hidden relative">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="w-full appearance-none bg-white text-[#143928] font-medium text-[14px] px-5 py-3 rounded-full border border-[#DDD5C7] shadow-xs focus:outline-none focus:border-[#355342] pr-10 cursor-pointer"
            >
              {categories.map((cat: string) => (
                <option key={cat} value={cat} className="text-[#143928] py-1">
                  {cat}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#355342]">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>

          {/* Desktop/Tablet Pill Buttons View */}
          <div className="hidden sm:flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
            {categories.map((cat: string) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-[13.5px] font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#355342] text-white shadow-sm'
                    : 'bg-white text-[#344E3E] border border-[#DDD5C7] hover:border-[#355342]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {filteredImages.length > 0 && (
          <div className="block sm:hidden">
            <div 
              onClick={() => setSelectedImage(filteredImages[activeImageIndex])}
              className="relative aspect-[4/3] rounded-[22px] overflow-hidden bg-[#ECE7DF] shadow-sm cursor-pointer"
            >
              <img
                src={filteredImages[activeImageIndex]?.image || filteredImages[activeImageIndex]?.src}
                alt={filteredImages[activeImageIndex]?.title || filteredImages[activeImageIndex]?.alt}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Dots with Previous and Next Arrow Controls */}
            {filteredImages.length > 1 ? (
              <div className="flex items-center justify-center gap-3 mt-6">
                <button
                  type="button"
                  onClick={handlePrevImage}
                  aria-label="Previous image"
                  className="w-8 h-8 rounded-full border border-[#D9D3C7] bg-white text-[#173727] flex items-center justify-center hover:bg-[#FAF8F5] transition-colors shadow-xs cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>

                <div className="flex items-center gap-2">
                  {filteredImages.map((_: any, idx: number) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      aria-label={`Go to image ${idx + 1}`}
                      className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                        activeImageIndex === idx
                          ? 'w-7 bg-[#143928]'
                          : 'w-2.5 bg-[#C59B51]/40 hover:bg-[#C59B51]'
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleNextImage}
                  aria-label="Next image"
                  className="w-8 h-8 rounded-full border border-[#D9D3C7] bg-white text-[#173727] flex items-center justify-center hover:bg-[#FAF8F5] transition-colors shadow-xs cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2 mt-6">
                {filteredImages.map((_: any, idx: number) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    aria-label={`Go to image ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeImageIndex === idx
                        ? 'w-7 bg-[#143928]'
                        : 'w-2.5 bg-[#C59B51]/40 hover:bg-[#C59B51]'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {filteredImages.map((image: any, index: number) => (
            <div
              key={image.id || index}
              onClick={() => setSelectedImage(image)}
              className="group relative aspect-[4/3] rounded-[22px] overflow-hidden bg-[#ECE7DF] shadow-sm cursor-pointer"
            >
              <img
                src={image.image || image.src}
                alt={image.title || image.alt}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Image Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#FAF8F5] rounded-2xl overflow-hidden shadow-2xl p-3 sm:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 text-[#173727] flex items-center justify-center hover:bg-white shadow-md transition-all cursor-pointer"
              aria-label="Close"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-xl overflow-hidden bg-black/5">
              <img
                src={selectedImage.image || selectedImage.src}
                alt={selectedImage.title || selectedImage.alt}
                className="w-full h-full object-contain"
              />
            </div>

            {(selectedImage.title || selectedImage.alt) && (
              <div className="pt-3 px-2 text-center">
                <h3
                  className="text-lg sm:text-xl font-semibold text-[#173727]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {selectedImage.title || selectedImage.alt}
                </h3>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}