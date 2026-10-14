'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import websiteData from '@/data/websiteData.json';

export default function BlogSection() {
  const [lotusSrc, setLotusSrc] = useState<string | null>(null);

  const blogSectionData = (websiteData as any)?.categories?.Yoga?.sections?.Blog?.variants?.YogaBlog1;

  // featuredPost agar na mile to posts array ke pehle item ko automatically le lega
  const featuredPost =
    blogSectionData?.featuredPost ||
    blogSectionData?.posts?.[0] || {
      title: 'Bhakti Yoga: Devotion and Love to Warm Our Hearts',
      date: 'June 16, 2021',
      description:
        'Discover how the path of Bhakti Yoga can open your heart, bring more love into your life, and create a deeper connection with yourself and the world around you.',
      image: '/m7.png',
      link: '/blog-detail',
    };

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

  if (!blogSectionData) return null;

  return (
    <section className="bg-[#FAF8F5] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12 lg:mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3.5 mb-5">
              <span className="text-[12px] uppercase tracking-[0.28em] font-medium text-[#2E4738]">
                {blogSectionData.badge || 'Resources'}
              </span>
              <div className="w-12 h-[1.5px] bg-[#C59B51]" />
            </div>

            <h2
              className="text-5xl sm:text-6xl lg:text-[66px] leading-[1.04] text-[#193727] font-normal tracking-tight whitespace-pre-line"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {blogSectionData.title || 'Going Deeper with\nYoga'}
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start lg:items-end text-left lg:text-right pt-2 lg:pt-3">
            <div className="w-16 sm:w-20 h-14 mb-4 flex items-center justify-end">
              <img
                src={lotusSrc || '/lotus.png'}
                alt="Lotus Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/lotus(1).png';
                }}
                style={{
                  filter: 'contrast(115%) brightness(95%)',
                }}
              />
            </div>

            <p className="text-[14.5px] sm:text-[15.5px] leading-[1.65] text-[#344E3E] max-w-[360px] mb-3.5 font-normal">
              {blogSectionData.description}
            </p>

            <div className="w-12 h-[1.5px] bg-[#C59B51]" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 relative">
            <div className="absolute -top-3.5 -left-3.5 w-36 h-36 sm:w-48 sm:h-48 rounded-[28px] bg-[#5B7966] -z-0" />

            <div className="relative z-10 rounded-[28px] overflow-hidden bg-[#ECE7DF] shadow-sm aspect-[16/11] sm:aspect-[16/10] w-full">
              <img
                src={featuredPost?.image || '/m7.png'}
                alt={featuredPost?.title || 'Featured Blog'}
                className="w-full h-full object-cover object-center hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start justify-center pr-0 lg:pr-4">
            <h3
              className="text-3xl sm:text-4xl lg:text-[42px] leading-[1.16] text-[#193626] font-normal mb-5"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {featuredPost?.title}
            </h3>

            <div className="flex items-center gap-2.5 mb-5 text-[#B4833D]">
              <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <circle cx="8" cy="14" r="1" fill="currentColor" />
                <circle cx="12" cy="14" r="1" fill="currentColor" />
                <circle cx="16" cy="14" r="1" fill="currentColor" />
                <circle cx="8" cy="18" r="1" fill="currentColor" />
                <circle cx="12" cy="18" r="1" fill="currentColor" />
              </svg>
              <span className="text-[14px] font-medium tracking-wide text-[#2C4837]">
                {featuredPost?.date}
              </span>
            </div>

            <p className="text-[14.5px] sm:text-[15.5px] leading-[1.7] text-[#3A5343] mb-8 font-normal">
              {featuredPost?.description}
            </p>

            <Link
              href={featuredPost?.link || '/blog-detail'}
              className="inline-flex items-center gap-4 bg-[#B47F39] hover:bg-[#9E6E2E] text-white pl-7 pr-2.5 py-2.5 rounded-full transition-all duration-300 shadow-sm cursor-pointer group"
            >
              <span className="text-sm font-medium tracking-wide">
                Read More
              </span>

              <span className="w-8 h-8 rounded-full bg-white text-[#B47F39] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}