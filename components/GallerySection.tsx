'use client';

import { useState, useEffect } from 'react';
import websiteData from '@/data/websiteData.json';

export default function Gallery() {
  const gallerySectionData = (websiteData as any)?.categories?.Yoga?.sections?.Gallery?.variants?.YogaGallery1;

  const categories: string[] = gallerySectionData?.categories || [];
  const galleryItems = gallerySectionData?.items || [];

  const [activeCategory, setActiveCategory] = useState(categories[0] || 'All');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const filteredImages =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((img: any) => img.category === activeCategory);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [activeCategory]);

  if (!gallerySectionData) return null;

  return (
    <section className="bg-[#FAF8F5] pt-10 sm:pt-14 pb-20 lg:pb-28 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
        
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          
          <div className="flex items-center gap-3.5 mb-4">
            <div className="w-12 h-[1.5px] bg-[#C59B51]" />
            <span className="text-[11.5px] uppercase tracking-[0.28em] font-semibold text-[#2D4536]">
              {gallerySectionData.badge}
            </span>
            <div className="w-12 h-[1.5px] bg-[#C59B51]" />
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-[62px] leading-[1.08] tracking-tight mb-8"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            <span className="block font-semibold text-[#143928]">
              {gallerySectionData.titleLine1}
            </span>
            <span className="block italic font-normal text-[#587B66] mt-1.5">
              {gallerySectionData.titleLine2}
            </span>
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
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
            <div className="relative aspect-[4/3] rounded-[22px] overflow-hidden bg-[#ECE7DF] shadow-sm">
              <img
                src={filteredImages[activeImageIndex]?.image || filteredImages[activeImageIndex]?.src}
                alt={filteredImages[activeImageIndex]?.title || filteredImages[activeImageIndex]?.alt || 'Yoga Gallery'}
                className="w-full h-full object-cover object-center"
              />
            </div>

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
          </div>
        )}

        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {filteredImages.map((image: any, index: number) => (
            <div
              key={image.id || index}
              className="group relative aspect-[4/3] rounded-[22px] overflow-hidden bg-[#ECE7DF] shadow-sm"
            >
              <img
                src={image.image || image.src}
                alt={image.title || image.alt || 'Yoga Gallery'}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}