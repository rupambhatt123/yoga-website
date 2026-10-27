'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import websiteData from '@/data/websiteData.json';

const featureIcons = [
  (
    <svg key="1" className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5.5" r="3" />
      <path d="M7 19c0-2.8 2.2-5 5-5s5 2.2 5 5" />
      <path d="M9 21h6" />
      <path d="M5.5 15.5l3-1" />
      <path d="M18.5 15.5l-3-1" />
    </svg>
  ),
  (
    <svg key="2" className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4C9.5 8 9.5 16 12 20C14.5 16 14.5 8 12 4Z" />
      <path d="M10 7C6 9 5 13 8 18" />
      <path d="M14 7C18 9 19 13 16 18" />
    </svg>
  ),
  (
    <svg key="3" className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  (
    <svg key="4" className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3" />
      <circle cx="16" cy="10" r="2.5" />
      <path d="M4 19c0-2.8 2.2-5 5-5s5 2.2 5 5" />
      <path d="M14 14.2c1.8.3 3.5 1.5 4 3.8" />
    </svg>
  ),
  (
    <svg key="5" className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3c-2 4-2 11 0 14c2-3 2-10 0-14z" />
      <path d="M10.5 6C7 8 5.5 11 8 15" />
      <path d="M13.5 6C17 8 18.5 11 16 15" />
      <path d="M6 12c-2 2-2 4 1 5" />
      <path d="M18 12c2 2 2 4-1 5" />
      <path d="M7 19c2.5 1 7.5 1 10 0" />
    </svg>
  ),
  (
    <svg key="6" className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 7v10M18 7v10" />
      <path d="M3.5 9.5v5M20.5 9.5v5" />
      <path d="M6 12h12" />
    </svg>
  ),
];

export default function WhyChooseUs() {
  const [lotusSrc, setLotusSrc] = useState<string | null>(null);

  const whyChooseUsData = (websiteData as any)?.categories?.Yoga?.sections?.WhyChooseUs?.variants?.YogaWhyChooseUs1;
  const features = whyChooseUsData?.items || [];

  useEffect(() => {
    if (!whyChooseUsData?.motifImage) return;

    const img = new Image();
    img.src = whyChooseUsData.motifImage;
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
      setLotusSrc(whyChooseUsData.motifImage);
    };
  }, [whyChooseUsData?.motifImage]);

  if (!whyChooseUsData) return null;

  return (
    <section className="pt-2 sm:pt-6 lg:pt-8 pb-10 sm:pb-16 lg:pb-20 px-4 sm:px-10 lg:px-16 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-[1380px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
        
        {/* Text and Features Content (Mobile pe pehle dikhega) */}
        <div className="order-1 lg:order-2 lg:col-span-7 flex flex-col items-center text-center w-full">
          <div className="w-14 sm:w-16 h-10 sm:h-12 mb-2 sm:mb-3 flex items-center justify-center">
            <img
              src={lotusSrc || whyChooseUsData.motifImage}
              alt={whyChooseUsData.badge}
              className="w-full h-full object-contain"
              style={{
                filter: 'contrast(115%) brightness(95%)',
              }}
            />
          </div>

          <div className="flex items-center gap-3">
            <div className="h-[1px] w-10 sm:w-12 bg-[#C59B51]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] font-semibold text-[#2E4738]">
              {whyChooseUsData.badge}
            </span>
            <div className="h-[1px] w-10 sm:w-12 bg-[#C59B51]" />
          </div>

          <h2
            className="mt-3.5 sm:mt-5 text-3xl sm:text-5xl lg:text-[58px] leading-[1.08] sm:leading-[1.06] font-normal"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            <span className="block font-bold text-[#173426]">{whyChooseUsData.titleLine1}</span>
            <span className="block italic font-medium text-[#5A7B66] mt-1 sm:mt-1.5">
              {whyChooseUsData.titleLine2}
            </span>
          </h2>

          <p className="mt-3.5 sm:mt-5 text-[#3D5244] text-[14px] sm:text-[15.5px] leading-[1.6] sm:leading-[1.65] max-w-xl font-normal px-2 sm:px-0">
            {whyChooseUsData.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 sm:gap-y-8 gap-x-6 sm:gap-x-8 mt-6 sm:mt-12 w-full text-left">
            {features.map((item: any, index: number) => (
              <div key={item.id || index} className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#E4ECE4] text-[#1D3E2F] flex items-center justify-center shrink-0">
                  {featureIcons[index % featureIcons.length]}
                </div>
                <div>
                  <h3
                    className="text-[16px] sm:text-[17.5px] font-semibold text-[#183427] leading-snug"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] text-[#475C4E] mt-1 sm:mt-1.5 leading-[1.55] font-normal">
                    {item.desc || item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Container (Mobile pe text ke neeche aayega aur chhota dikhega) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 lg:col-span-5 relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[420px] lg:max-w-none mx-auto mt-2 sm:mt-4 lg:mt-0"
        >
          <div className="absolute -top-4 -left-4 w-48 h-48 bg-[#D8E2D8] -z-0 rounded-[28px] hidden sm:block" />
          <div className="relative z-10 rounded-[22px] sm:rounded-[28px] overflow-hidden shadow-sm aspect-[4/3] sm:aspect-[4/4.9] bg-[#ECE7DF] w-full">
            <img
              src={whyChooseUsData.heroImage}
              alt={whyChooseUsData.titleLine1}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-[#D8E2D8] -z-0 rounded-[28px] hidden sm:block" />
        </motion.div>

      </div>
    </section>
  );
}