'use client';

import Link from 'next/link';
import websiteData from '@/data/websiteData.json';

export default function BlogDetailSection() {
  const blogDetailData = (websiteData as any)?.categories?.Yoga?.sections?.BlogDetail?.variants?.YogaBlogDetail1;

  if (!blogDetailData) return null;

  return (
    <section className="bg-[#FAF8F5] pt-10 sm:pt-14 pb-20 px-6 sm:px-10 lg:px-12 text-stone-800">
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        <div className="lg:col-span-8 space-y-7">
          <div>
            <h1
              className="text-3xl sm:text-4xl lg:text-[46px] leading-[1.15] text-[#143725] font-normal tracking-tight mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {blogDetailData.title}
            </h1>

            <div className="flex items-center gap-6 text-[13px] text-[#475C4E] font-medium">
              <div className="flex items-center gap-2">
                <span className="text-[#C59B51]">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </span>
                <span>{blogDetailData.date}</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[#C59B51]">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="7" r="4" />
                    <path d="M5.5 21a7.5 7.5 0 0 1 13 0" />
                  </svg>
                </span>
                <span>{blogDetailData.author}</span>
              </div>
            </div>
          </div>

          <div className="rounded-[24px] overflow-hidden shadow-sm aspect-[16/9.5] bg-[#ECE7DF]">
            <img
              src={blogDetailData.heroImage}
              alt={blogDetailData.title}
              className="w-full h-full object-cover object-center"
            />
          </div>

          <p className="text-[14.5px] sm:text-[15.5px] leading-[1.7] text-[#3A5243] font-normal">
            {blogDetailData.intro}
          </p>

          {blogDetailData.sections?.map((section: any, idx: number) => {
            if (section.image) {
              return (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-2">
                  <div className="md:col-span-7 space-y-2.5">
                    <div>
                      <h2
                        className="text-2xl sm:text-[26px] text-[#163727] font-normal"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        {section.number}. {section.title}
                      </h2>
                      <div className="w-10 h-[1.5px] bg-[#C59B51] mt-2" />
                    </div>
                    <p className="text-[14px] sm:text-[14.5px] leading-[1.65] text-[#3D5244] font-normal">
                      {section.description}
                    </p>
                  </div>

                  <div className="md:col-span-5 rounded-[20px] overflow-hidden shadow-sm aspect-[4/3] bg-[#ECE7DF]">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              );
            }

            return (
              <div key={idx} className="pt-2 space-y-2.5">
                <div>
                  <h2
                    className="text-2xl sm:text-[26px] text-[#163727] font-normal"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {section.number}. {section.title}
                  </h2>
                  <div className="w-10 h-[1.5px] bg-[#C59B51] mt-2" />
                </div>
                <p className="text-[14px] sm:text-[14.5px] leading-[1.65] text-[#3D5244] font-normal">
                  {section.description}
                </p>
              </div>
            );
          })}
        </div>

        <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-8">
          <div className="bg-white rounded-[24px] p-6 sm:p-7 border border-[#ECE5D8] shadow-sm space-y-5">
            <div>
              <h3
                className="text-xl sm:text-[22px] font-normal text-[#173727]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Recent Posts
              </h3>
              <div className="w-10 h-[1.5px] bg-[#C59B51] mt-2" />
            </div>

            <div className="space-y-4 pt-1">
              {blogDetailData.recentPosts?.map((post: any) => (
                <div
                  key={post.id}
                  className="flex items-center gap-3.5 cursor-default"
                >
                  <div className="w-[74px] h-[74px] rounded-[16px] overflow-hidden bg-[#ECE7DF] shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h4 className="text-[13.5px] font-medium text-[#183726] line-clamp-2 leading-snug">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-1.5 text-[11.5px] text-[#6A7E72]">
                      <span className="text-[#C59B51]">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                      </span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden bg-[#F0ECE4]/80 rounded-[24px] p-8 border border-[#E2DBD0] shadow-sm text-center flex flex-col items-center">
            <div className="absolute -bottom-6 -left-6 w-32 h-32 opacity-20 pointer-events-none stroke-[#2B4636]">
              <svg viewBox="0 0 100 100" fill="none" strokeWidth="2">
                <path d="M20 90 C 20 40, 50 10, 90 20 C 80 60, 50 90, 20 90 Z" />
                <path d="M20 90 C 45 60, 60 45, 90 20" />
              </svg>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 opacity-20 pointer-events-none stroke-[#2B4636] -scale-x-100">
              <svg viewBox="0 0 100 100" fill="none" strokeWidth="2">
                <path d="M20 90 C 20 40, 50 10, 90 20 C 80 60, 50 90, 20 90 Z" />
                <path d="M20 90 C 45 60, 60 45, 90 20" />
              </svg>
            </div>

            <div className="w-12 h-10 mb-2 flex items-center justify-center">
              <svg viewBox="0 0 64 48" fill="none" className="w-full h-full stroke-[#C59B51]" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M32 6 C28 18, 28 34, 32 42 C36 34, 36 18, 32 6 Z" />
                <path d="M30 14 C20 22, 16 32, 26 40 C21 34, 23 23, 30 14 Z" />
                <path d="M34 14 C44 22, 48 32, 38 40 C43 34, 41 23, 34 14 Z" />
              </svg>
            </div>

            <h3
              className="text-[22px] sm:text-[24px] text-[#173727] font-normal leading-snug"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Start Your Yoga Journey Today
            </h3>

            <p className="mt-2.5 text-[13px] text-[#475C4E] leading-relaxed max-w-xs font-normal">
              Join our yoga classes and experience a healthier, happier and more balanced life.
            </p>

            <div className="mt-6 z-10 w-full max-w-[190px]">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-between bg-[#2A4432] hover:bg-[#1E3425] text-white pl-6 pr-2 py-2 rounded-full transition-all duration-300 shadow-xs group text-[13px] font-medium cursor-pointer"
              >
                <span>Enquire Now</span>
                <span className="w-7 h-7 rounded-full bg-white text-[#2A4432] flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </aside>

      </div>
    </section>
  );
}