'use client';

import { useState } from 'react';
import Link from 'next/link';
import websiteData from '@/data/websiteData.json';

export default function BlogSection() {
  const yogaCategory = (websiteData as any)?.categories?.Yoga;
  const blogSectionData = yogaCategory?.sections?.Blog?.variants?.YogaBlog1;

  const posts = blogSectionData?.posts || (blogSectionData?.featuredPost ? [blogSectionData.featuredPost] : []);

  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  if (!blogSectionData) return null;

  const handlePrevMobile = () => {
    setActiveMobileIndex((prev) => (prev === 0 ? posts.length - 1 : prev - 1));
  };

  const handleNextMobile = () => {
    setActiveMobileIndex((prev) => (prev === posts.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-[#FAF8F5] pt-4 sm:pt-6 lg:pt-8 pb-12 sm:pb-16 lg:pb-24 relative overflow-hidden">
      
      <div 
        className="absolute top-10 right-0 w-[420px] h-[500px] pointer-events-none opacity-20 bg-no-repeat bg-right-top bg-contain"
        style={{ backgroundImage: "url('/14oct.png')" }}
      />
      <div 
        className="absolute top-[45%] left-0 w-[360px] h-[480px] pointer-events-none opacity-20 bg-no-repeat bg-left-center bg-contain"
        style={{ backgroundImage: "url('/14oct.png')" }}
      />
      <div 
        className="absolute bottom-10 right-0 w-[420px] h-[500px] pointer-events-none opacity-20 bg-no-repeat bg-right-bottom bg-contain"
        style={{ backgroundImage: "url('/14oct.png')" }}
      />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-10 lg:px-14 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-10 sm:mb-16 lg:mb-20">
          
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3.5 mb-3 sm:mb-4">
              <span className="text-[12px] sm:text-[13px] uppercase tracking-[0.28em] font-medium text-[#C59B51]">
                {blogSectionData.badge}
              </span>
              <div className="w-12 h-[1.5px] bg-[#C59B51]" />
            </div>

            <h2
              className="text-[28px] xs:text-3xl sm:text-6xl lg:text-[68px] leading-[1.12] sm:leading-[1.05] text-[#173727] font-serif tracking-tight whitespace-normal sm:whitespace-pre-line"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {blogSectionData.title}
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start lg:items-start pt-1 sm:pt-3 lg:pl-10">
            <div className="w-12 h-12 sm:w-14 sm:h-14 mb-3 sm:mb-4">
              <img
                src="/lotus.png"
                alt="Lotus"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>

            <p className="text-[14px] sm:text-[16px] leading-[1.6] sm:leading-[1.65] text-[#3D5244] max-w-[420px] mb-3 sm:mb-3.5 font-normal">
              {blogSectionData.description}
            </p>

            <div className="w-12 h-[1.5px] bg-[#C59B51]" />
          </div>

        </div>

        {posts.length > 0 && (
          <div className="block lg:hidden">
            <div className="flex flex-col gap-6 items-start">
              <div className="relative w-full">
                <div className="absolute -top-2.5 -left-2.5 w-24 h-24 rounded-[20px] bg-[#5B7966] -z-0" />
                <div className="relative z-10 rounded-[22px] overflow-hidden shadow-sm aspect-[16/10] bg-[#ECE7DF] w-full">
                  <img
                    key={activeMobileIndex}
                    src={posts[activeMobileIndex]?.image}
                    alt={posts[activeMobileIndex]?.title}
                    className="w-full h-full object-cover object-center transition-all duration-500"
                  />
                </div>
              </div>

              <div className="w-full flex flex-col items-start">
                <h3
                  className="text-2xl sm:text-3xl leading-[1.2] text-[#173727] font-serif mb-3"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {posts[activeMobileIndex]?.title}
                </h3>

                <div className="flex items-center gap-2 mb-3 text-[#B4833D]">
                  <svg
                    className="w-4 h-4 fill-none stroke-current"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                    <circle cx="8" cy="14" r="1" fill="currentColor" />
                    <circle cx="12" cy="14" r="1" fill="currentColor" />
                    <circle cx="16" cy="14" r="1" fill="currentColor" />
                    <circle cx="8" cy="18" r="1" fill="currentColor" />
                    <circle cx="12" cy="18" r="1" fill="currentColor" />
                  </svg>
                  <span className="text-[13px] font-medium tracking-wide text-[#2D4536]">
                    {posts[activeMobileIndex]?.date}
                  </span>
                </div>

                <p className="text-[13.5px] sm:text-[14.5px] leading-[1.65] text-[#3D5244] mb-6 font-normal">
                  {posts[activeMobileIndex]?.description}
                </p>

                <Link
                  href={posts[activeMobileIndex]?.link || '/blog-detail'}
                  className="inline-flex items-center gap-3.5 bg-[#B58542] hover:bg-[#9F7232] text-white pl-6 pr-2 py-2 rounded-full transition-all duration-300 shadow-sm cursor-pointer group"
                >
                  <span className="text-xs sm:text-sm font-medium tracking-wide">
                    Read More
                  </span>
                  <span className="w-7 h-7 rounded-full bg-white text-[#B58542] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                    <svg
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            {/* Mobile Pagination Controls */}
            {posts.length > 1 && (
              <div className="flex items-center justify-center gap-3 mt-8">
                <button
                  type="button"
                  onClick={handlePrevMobile}
                  aria-label="Previous blog post"
                  className="w-8 h-8 rounded-full border border-[#D9D3C7] bg-white text-[#173727] flex items-center justify-center hover:bg-[#FAF8F5] transition-colors shadow-xs cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>

                <div className="flex items-center gap-2">
                  {posts.map((_: any, idx: number) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveMobileIndex(idx)}
                      aria-label={`Go to blog post ${idx + 1}`}
                      className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                        activeMobileIndex === idx
                          ? 'w-7 bg-[#173727]'
                          : 'w-2.5 bg-[#C59B51]/40 hover:bg-[#C59B51]'
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleNextMobile}
                  aria-label="Next blog post"
                  className="w-8 h-8 rounded-full border border-[#D9D3C7] bg-white text-[#173727] flex items-center justify-center hover:bg-[#FAF8F5] transition-colors shadow-xs cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        )}

        <div className="hidden lg:block space-y-28">
          {posts.map((post: any, index: number) => {
            const isImageLeft = index % 2 === 0;

            return (
              <div
                key={post.id || index}
                className="grid grid-cols-12 gap-16 items-center"
              >
                <div
                  className={`col-span-7 relative ${
                    isImageLeft ? 'order-1' : 'order-2'
                  }`}
                >
                  <div
                    className="absolute -top-3.5 -left-3.5 w-44 h-44 rounded-[26px] bg-[#5B7966] -z-0"
                  />

                  <div className="relative z-10 rounded-[28px] overflow-hidden shadow-sm aspect-[1.55/1] bg-[#ECE7DF] w-full">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                    />
                  </div>
                </div>

                <div
                  className={`col-span-5 flex flex-col items-start justify-center ${
                    isImageLeft ? 'order-2 pl-4' : 'order-1 pr-4'
                  }`}
                >
                  <h3
                    className="text-[42px] leading-[1.15] text-[#173727] font-serif mb-5"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {post.title}
                  </h3>

                  <div className="flex items-center gap-2.5 mb-5 text-[#B4833D]">
                    <svg
                      className="w-5 h-5 fill-none stroke-current"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                      <circle cx="8" cy="14" r="1" fill="currentColor" />
                      <circle cx="12" cy="14" r="1" fill="currentColor" />
                      <circle cx="16" cy="14" r="1" fill="currentColor" />
                      <circle cx="8" cy="18" r="1" fill="currentColor" />
                      <circle cx="12" cy="18" r="1" fill="currentColor" />
                    </svg>
                    <span className="text-[14px] font-medium tracking-wide text-[#2D4536]">
                      {post.date}
                    </span>
                  </div>

                  <p className="text-[15.5px] leading-[1.7] text-[#3D5244] mb-8 font-normal">
                    {post.description}
                  </p>

                  <Link
                    href={post.link || '/blog-detail'}
                    className="inline-flex items-center gap-4 bg-[#B58542] hover:bg-[#9F7232] text-white pl-7 pr-2.5 py-2.5 rounded-full transition-all duration-300 shadow-sm cursor-pointer group"
                  >
                    <span className="text-sm font-medium tracking-wide">
                      Read More
                    </span>

                    <span className="w-8 h-8 rounded-full bg-white text-[#B58542] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}