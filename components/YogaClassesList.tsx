'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import websiteData from '@/data/websiteData.json';

const classIcons = [
  (
    <svg key="1" className="w-7 h-7 stroke-[#1D3E2F]" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4C9.5 8 9.5 16 12 20C14.5 16 14.5 8 12 4Z" />
      <path d="M10 7C6 9 5 13 8 18" />
      <path d="M14 7C18 9 19 13 16 18" />
    </svg>
  ),
  (
    <svg key="2" className="w-7 h-7 stroke-[#1D3E2F]" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="6" r="3" />
      <path d="M6 19c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M8 21h8" />
      <path d="M5 16l3-1" />
      <path d="M19 16l-3-1" />
    </svg>
  ),
  (
    <svg key="3" className="w-7 h-7 stroke-[#1D3E2F]" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <line x1="12" y1="12" x2="12" y2="12.01" />
    </svg>
  ),
  (
    <svg key="4" className="w-7 h-7 stroke-[#1D3E2F]" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3c-2 4-2 11 0 14c2-3 2-10 0-14z" />
      <path d="M10.5 6C7 8 5.5 11 8 15" />
      <path d="M13.5 6C17 8 18.5 11 16 15" />
    </svg>
  ),
];

export default function YogaClassesList() {
  const [lotusSrc, setLotusSrc] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const classesSectionData = (websiteData as any)?.categories?.Yoga?.sections?.Classes?.variants?.YogaClasses1;
  const classesList = classesSectionData?.items || [];

  useEffect(() => {
    const img = new Image();
    img.src = '/lotus.png';
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.drawImage(img, 0, 0);
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        if (r > 235 && g > 230 && b > 220) {
          data[i + 3] = 0;
        }
      }

      ctx.putImageData(imgData, 0, 0);
      setLotusSrc(canvas.toDataURL('image/png'));
    };

    img.onerror = () => {
      setLotusSrc('/lotus(1).png');
    };
  }, []);

  if (!classesSectionData) return null;

  return (
    <section className="pt-8 sm:pt-10 pb-6 sm:pb-8 px-6 sm:px-10 lg:px-12 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-[1380px] mx-auto">
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          <div className="w-24 sm:w-28 h-16 sm:h-20 mb-2 flex items-center justify-center">
            <img
              src={lotusSrc || '/lotus.png'}
              alt="Lotus Logo"
              className="w-full h-full object-contain"
              style={{
                filter: 'contrast(115%) brightness(95%)',
              }}
            />
          </div>

          <div className="flex items-center gap-3.5 mb-3">
            <div className="h-[1px] w-12 bg-[#C59B51]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] font-semibold text-[#2D4536]">
              {classesSectionData.badge}
            </span>
            <div className="h-[1px] w-12 bg-[#C59B51]" />
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-[58px] leading-[1.08] text-[#173727] font-semibold mb-4 tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {classesSectionData.title}
          </h2>

          <p className="text-[14.5px] sm:text-[15.5px] leading-[1.65] text-[#3D5244] max-w-[640px] font-normal">
            {classesSectionData.description}
          </p>
        </div>

        {/* Mobile View: Ek card front me aur dots se slide */}
        {classesList.length > 0 && (
          <div className="block lg:hidden">
            <div className="bg-white rounded-[26px] overflow-hidden shadow-sm border border-[#F0ECE3] flex flex-col min-h-[460px] justify-between">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#ECE7DF]">
                <img
                  src={classesList[activeIndex]?.image}
                  alt={classesList[activeIndex]?.title}
                  className="w-full h-full object-cover object-center transition-all duration-500"
                />
              </div>

              <div className="p-7 flex flex-col justify-between flex-grow items-start bg-white">
                <div className="w-full">
                  <div className="w-14 h-14 rounded-full bg-[#E5ECE5] flex items-center justify-center mb-5 shrink-0">
                    {classIcons[activeIndex % classIcons.length]}
                  </div>

                  <h3
                    className="text-[24px] leading-tight text-[#163626] font-medium mb-3"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {classesList[activeIndex]?.title}
                  </h3>

                  <div className="w-10 h-[1.5px] bg-[#C59B51] mb-3.5" />

                  <p className="text-[14px] leading-[1.6] text-[#475C4E] font-normal mb-6">
                    {classesList[activeIndex]?.description || classesList[activeIndex]?.desc}
                  </p>
                </div>

                <Link
                  href={classesList[activeIndex]?.ctaLink || '/yoga-detail'}
                  className="inline-flex items-center gap-3.5 bg-[#2A4432] hover:bg-[#1E3425] text-white pl-6 pr-2 py-2 rounded-full transition-all duration-300 group cursor-pointer"
                >
                  <span className="text-[13px] font-medium tracking-wide">
                    {classesList[activeIndex]?.ctaText || 'Learn More'}
                  </span>
                  <span className="w-7 h-7 rounded-full bg-white text-[#2A4432] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {classesList.map((_: any, idx: number) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === idx
                      ? 'w-7 bg-[#173727]'
                      : 'w-2.5 bg-[#C59B51]/40 hover:bg-[#C59B51]'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Desktop View: Untouched 2-column Grid */}
        <div className="hidden lg:grid grid-cols-2 gap-8 lg:gap-10">
          {classesList.map((item: any, index: number) => (
            <motion.div
              key={item.id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-[26px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 grid grid-cols-1 sm:grid-cols-12 min-h-[300px] border border-[#F0ECE3]"
            >
              <div className="sm:col-span-6 relative aspect-[4/3] sm:aspect-auto h-full overflow-hidden bg-[#ECE7DF]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="sm:col-span-6 p-7 sm:p-8 flex flex-col justify-between items-start bg-white">
                <div className="w-full">
                  <div className="w-14 h-14 rounded-full bg-[#E5ECE5] flex items-center justify-center mb-5 shrink-0">
                    {classIcons[index % classIcons.length]}
                  </div>

                  <h3
                    className="text-[24px] sm:text-[26px] leading-tight text-[#163626] font-medium mb-3"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {item.title}
                  </h3>

                  <div className="w-10 h-[1.5px] bg-[#C59B51] mb-3.5" />

                  <p className="text-[13.5px] sm:text-[14px] leading-[1.6] text-[#475C4E] font-normal mb-6">
                    {item.description || item.desc}
                  </p>
                </div>

                <Link
                  href={item.ctaLink || '/yoga-detail'}
                  className="inline-flex items-center gap-3.5 bg-[#2A4432] hover:bg-[#1E3425] text-white pl-6 pr-2 py-2 rounded-full transition-all duration-300 group cursor-pointer"
                >
                  <span className="text-[13px] font-medium tracking-wide">
                    {item.ctaText || 'Learn More'}
                  </span>
                  <span className="w-7 h-7 rounded-full bg-white text-[#2A4432] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}