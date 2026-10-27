'use client';

import { useState } from 'react';
import websiteData from '@/data/websiteData.json';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // 100% direct JSON access (Zero fallback text)
  const testimonialsData = (websiteData as any)?.categories?.Yoga?.sections?.Testimonials?.variants?.YogaTestimonials1;

  const testimonials = testimonialsData?.items || [];

  if (!testimonialsData) return null;

  const handlePrevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-[#FAF8F5] pt-0 pb-6 sm:pb-8 lg:pb-10 overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-12">
        
        <div className="mb-10 lg:mb-14">
          <div className="flex items-center gap-3.5 mb-3.5">
            <div className="w-12 h-[1.5px] bg-[#C59B51]" />
            <span className="text-[12px] sm:text-xs uppercase tracking-[0.28em] font-semibold text-[#2E4738]">
              {testimonialsData.badge}
            </span>
            <div className="w-12 h-[1.5px] bg-[#C59B51]" />
          </div>

          <h2
            className="text-5xl sm:text-6xl lg:text-[76px] leading-[1.04] tracking-tight font-normal mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            <span className="text-[#0D3829]">{testimonialsData.titleLine1}</span>
            <span className="text-[#4E7655]">{testimonialsData.titleLine2}</span>
          </h2>

          <p className="text-[16px] sm:text-[18px] leading-[1.5] text-[#244734] font-normal max-w-[460px]">
            {testimonialsData.description}
          </p>
        </div>

        {/* Mobile View: Single Card with Pagination Dots & Arrows */}
        <div className="block md:hidden">
          <div className="min-h-[220px] flex flex-col justify-between items-start transition-all duration-300">
            <div>
              <div className="flex items-center gap-1.5 mb-4 text-[#A67C2F]">
                {[...Array(testimonials[activeIndex]?.rating || 5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-[19px] h-[19px] fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              <p className="text-[15px] leading-[1.7] text-[#294636] font-normal mb-6">
                {testimonials[activeIndex]?.text}
              </p>
            </div>

            <h4
              className="text-[20px] font-medium text-[#13402E] tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {testimonials[activeIndex]?.author}
            </h4>
          </div>

          {/* Dots with Previous and Next Arrow Controls */}
          {testimonials.length > 1 ? (
            <div className="flex items-center justify-center gap-3 mt-8">
              <button
                type="button"
                onClick={handlePrevTestimonial}
                aria-label="Previous testimonial"
                className="w-8 h-8 rounded-full border border-[#D9D3C7] bg-white text-[#173727] flex items-center justify-center hover:bg-[#FAF8F5] transition-colors shadow-xs cursor-pointer"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((_: any, idx: number) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeIndex === idx
                        ? 'w-7 bg-[#13402E]'
                        : 'w-2.5 bg-[#C59B51]/40 hover:bg-[#C59B51]'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={handleNextTestimonial}
                aria-label="Next testimonial"
                className="w-8 h-8 rounded-full border border-[#D9D3C7] bg-white text-[#173727] flex items-center justify-center hover:bg-[#FAF8F5] transition-colors shadow-xs cursor-pointer"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2 mt-8">
              {testimonials.map((_: any, idx: number) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === idx
                      ? 'w-7 bg-[#13402E]'
                      : 'w-2.5 bg-[#C59B51]/40 hover:bg-[#C59B51]'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Desktop / Tablet View: 3-Column Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-10 lg:gap-16 pt-2">
          {testimonials.map((item: any, index: number) => {
            const ratingCount = item.rating || 5;
            return (
              <div key={item.id || index} className="flex flex-col justify-between items-start">
                <div>
                  <div className="flex items-center gap-1.5 mb-5 text-[#A67C2F]">
                    {[...Array(ratingCount)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-[19px] h-[19px] fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-[15px] sm:text-[16px] leading-[1.7] text-[#294636] font-normal mb-8">
                    {item.text}
                  </p>
                </div>

                <h4
                  className="text-[20px] sm:text-[22px] font-medium text-[#13402E] tracking-tight"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {item.author}
                </h4>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}