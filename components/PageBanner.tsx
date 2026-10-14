'use client';

import Link from 'next/link';
import websiteData from '@/data/websiteData.json';

interface PageBannerProps {
  title?: string;
  breadcrumb?: string;
  pageKey?: string;
}

export default function PageBanner({
  title,
  breadcrumb,
  pageKey,
}: PageBannerProps) {
  const pagesData = (websiteData as any).categories?.Yoga?.pages;
  const currentPageData = pageKey && pagesData ? pagesData[pageKey] : null;

  const displayTitle = title || currentPageData?.title || 'About Us';
  const displayBreadcrumb = breadcrumb || currentPageData?.breadcrumb || displayTitle;

  return (
    <div className="relative w-full bg-[#D7E0D6] overflow-hidden pt-20 sm:pt-24 lg:pt-28 pb-20 sm:pb-24 lg:pb-28 select-none">
      
      <div className="absolute left-[8%] sm:left-[12%] top-1/2 -translate-y-[45%] w-44 sm:w-52 md:w-60 h-44 sm:h-52 md:h-60 pointer-events-none opacity-45">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full stroke-[#A8BFA9]" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M40 160 C50 110, 80 80, 160 50 C130 90, 110 130, 40 160 Z" />
          <path d="M40 160 C80 125, 120 90, 160 50" strokeDasharray="1 0" />
          <path d="M70 145 C60 100, 75 60, 120 30 C105 70, 95 110, 70 145 Z" />
          <path d="M60 155 C70 160, 100 170, 140 155 C110 140, 90 145, 60 155 Z" />
        </svg>
      </div>

      <div className="absolute right-[8%] sm:right-[12%] top-1/2 -translate-y-[45%] w-44 sm:w-52 md:w-60 h-44 sm:h-52 md:h-60 pointer-events-none opacity-45">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full stroke-[#A8BFA9]" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M100 170 C95 110, 110 65, 145 30 C140 85, 125 130, 100 170 Z" />
          <path d="M100 170 C115 125, 130 80, 145 30" />
          <path d="M100 165 C75 130, 65 95, 80 60 C95 95, 100 130, 100 165 Z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center justify-center text-center">
        <h1
          className="text-4xl sm:text-5xl lg:text-[54px] italic font-normal text-[#213F30] tracking-wide mb-3"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {displayTitle}
        </h1>

        <div className="flex items-center gap-2.5 text-[14.5px] sm:text-[15.5px] text-[#2D4638] font-medium tracking-normal">
          <Link
            href="/"
            className="hover:text-[#183124] transition-colors cursor-pointer"
          >
            Home
          </Link>
          
          <span className="text-[10px] text-[#2D4638] opacity-80 translate-y-[-0.5px]">
            ◆
          </span>

          <span className="text-[#3E5C4B]">
            {displayBreadcrumb}
          </span>
        </div>
      </div>

    </div>
  );
}