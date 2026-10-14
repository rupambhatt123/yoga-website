'use client';

import websiteData from '@/data/websiteData.json';

const pillIcons = [
  (
    <svg key="1" viewBox="0 0 24 24" fill="none" className="w-6 h-6 stroke-[#1D3E2F]" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3c-2 4-2 11 0 14c2-3 2-10 0-14z" />
      <path d="M10.5 6C7 8 5.5 11 8 15" />
      <path d="M13.5 6C17 8 18.5 11 16 15" />
    </svg>
  ),
  (
    <svg key="2" viewBox="0 0 24 24" fill="none" className="w-6 h-6 stroke-[#1D3E2F]" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3" />
      <circle cx="16" cy="10" r="2.5" />
      <path d="M4 19c0-2.8 2.2-5 5-5s5 2.2 5 5" />
      <path d="M14 14.2c1.8.3 3.5 1.5 4 3.8" />
    </svg>
  ),
  (
    <svg key="3" viewBox="0 0 24 24" fill="none" className="w-6 h-6 stroke-[#1D3E2F]" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="6" r="3" />
      <path d="M6 19c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M8 21h8" />
      <path d="M5 16l3-1" />
      <path d="M19 16l-3-1" />
    </svg>
  ),
  (
    <svg key="4" viewBox="0 0 24 24" fill="none" className="w-6 h-6 stroke-[#1D3E2F]" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4C9.5 8 9.5 16 12 20C14.5 16 14.5 8 12 4Z" />
      <path d="M10 7C6 9 5 13 8 18" />
      <path d="M14 7C18 9 19 13 16 18" />
    </svg>
  ),
];

const overviewIcons = [
  (
    <svg key="o1" viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-[#1D3E2F]" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3c-2 4-2 11 0 14c2-3 2-10 0-14z" />
      <path d="M10.5 6C7 8 5.5 11 8 15" />
      <path d="M13.5 6C17 8 18.5 11 16 15" />
    </svg>
  ),
  (
    <svg key="o2" viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-[#1D3E2F]" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  (
    <svg key="o3" viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-[#1D3E2F]" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="21" x2="21" y2="21" />
    </svg>
  ),
];

const benefitIcons = [
  (
    <svg key="b1" viewBox="0 0 24 24" fill="none" className="w-6 h-6 stroke-[#1D3E2F]" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 18c0-3 2-6 6-6s6 3 6 6" />
      <path d="M12 4v4" />
      <path d="m4.93 7.93 2.83 2.83" />
      <path d="m19.07 7.93-2.83 2.83" />
    </svg>
  ),
  (
    <svg key="b2" viewBox="0 0 24 24" fill="none" className="w-6 h-6 stroke-[#1D3E2F]" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4C9.5 8 9.5 16 12 20C14.5 16 14.5 8 12 4Z" />
      <path d="M10 7C6 9 5 13 8 18" />
      <path d="M14 7C18 9 19 13 16 18" />
    </svg>
  ),
  (
    <svg key="b3" viewBox="0 0 24 24" fill="none" className="w-6 h-6 stroke-[#1D3E2F]" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  (
    <svg key="b4" viewBox="0 0 24 24" fill="none" className="w-6 h-6 stroke-[#1D3E2F]" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
];

export default function YogaDetail() {
  const yogaCategory = (websiteData as any)?.categories?.Yoga;
  const yogaDetailSection = yogaCategory?.sections?.ClassDetail || yogaCategory?.sections?.YogaDetail;
  const yogaDetailData = yogaDetailSection?.variants?.YogaDetail1 || yogaDetailSection?.variants?.[Object.keys(yogaDetailSection?.variants || {})[0]];

  if (!yogaDetailData) return null;

  const features = yogaDetailData.features || yogaDetailData.highlights || [];
  const overviewCards = yogaDetailData.overview?.cards || yogaDetailData.overview?.stats || [];
  const benefitsList = yogaDetailData.benefits?.items || (Array.isArray(yogaDetailData.benefits) ? yogaDetailData.benefits : []);
  const expectationsList = yogaDetailData.expectations || yogaDetailData.whatToExpect?.steps || [];

  return (
    <div className="bg-[#FAF8F5] py-12 lg:py-16 text-stone-800">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 space-y-16 lg:space-y-20">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-4">
            
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1.5px] w-12 bg-[#C59B51]" />
              <span className="text-[11.5px] uppercase tracking-[0.28em] font-semibold text-[#2D4536]">
                {yogaDetailData.badge || 'Our Services'}
              </span>
              <div className="h-[1.5px] w-12 bg-[#C59B51]" />
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-[54px] leading-[1.08] text-[#173727] font-normal mb-5 tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {yogaDetailData.title}
            </h1>

            <p className="text-[14.5px] sm:text-[15.5px] leading-[1.65] text-[#3D5244] max-w-xl font-normal mb-7">
              {yogaDetailData.description}
            </p>

            <div className="mb-10">
              <a
                href={yogaDetailData.ctaButton?.href || yogaDetailData.ctaLink || '/contact'}
                className="inline-flex items-center gap-3.5 bg-[#2A4432] hover:bg-[#1E3425] text-white pl-6 pr-2 py-2 rounded-full transition-all duration-300 shadow-sm cursor-pointer group"
              >
                <span className="text-[13px] font-medium tracking-wide">
                  {yogaDetailData.ctaButton?.text || yogaDetailData.ctaText || 'Enquire Now'}
                </span>
                <span className="w-7 h-7 rounded-full bg-white text-[#2A4432] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </a>
            </div>

            {features.length > 0 && (
              <div className="grid grid-cols-4 gap-3 sm:gap-4 w-full pt-1">
                {features.map((item: any, idx: number) => (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#E5ECE5] text-[#1D3E2F] flex items-center justify-center mb-2.5">
                      {pillIcons[idx % pillIcons.length]}
                    </div>
                    <span className="text-[12.5px] sm:text-[13px] font-medium text-[#1A3728] leading-tight whitespace-pre-line">
                      {item.title || item.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

          </div>

          <div className="lg:col-span-6 rounded-[26px] overflow-hidden shadow-sm aspect-[4/3] sm:aspect-[16/11] bg-[#ECE7DF]">
            <img
              src={yogaDetailData.heroImage || '/yd.jpg'}
              alt={yogaDetailData.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Overview Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-4">
          <div className="lg:col-span-6 rounded-[26px] overflow-hidden shadow-sm aspect-[4/3] sm:aspect-[16/11] bg-[#ECE7DF]">
            <img
              src={yogaDetailData.overviewImage || yogaDetailData.overview?.image || '/yd1.jpg'}
              alt={yogaDetailData.overview?.title || 'Overview'}
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="lg:col-span-6 space-y-5">
            <div>
              <h2
                className="text-3xl sm:text-4xl lg:text-[40px] text-[#173727] font-normal tracking-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {yogaDetailData.overview?.title || 'Overview'}
              </h2>
              <div className="w-12 h-[2px] bg-[#C59B51] mt-2.5" />
            </div>

            <p className="text-[14.5px] sm:text-[15px] leading-[1.65] text-[#3D5244] font-normal">
              {yogaDetailData.overview?.description}
            </p>

            {overviewCards.length > 0 && (
              <div className="bg-[#EFECE6]/70 rounded-[22px] p-5 sm:p-6 border border-[#E4DEC3]/40 grid grid-cols-1 sm:grid-cols-3 gap-5">
                {overviewCards.map((stat: any, idx: number) => (
                  <div
                    key={idx}
                    className={`text-center flex flex-col items-center justify-start ${
                      idx === 1 ? 'sm:border-x sm:border-[#D9D3C7] sm:px-3' : ''
                    }`}
                  >
                    <div className="w-11 h-11 rounded-full bg-[#E5ECE5] text-[#1D3E2F] flex items-center justify-center mb-3">
                      {overviewIcons[idx % overviewIcons.length]}
                    </div>
                    <h4
                      className="text-[15.5px] font-medium text-[#173727] mb-1"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {stat.title}
                    </h4>
                    <p className="text-[12px] leading-[1.4] text-[#475C4E] whitespace-pre-line">
                      {stat.value || stat.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Benefits Section */}
        {benefitsList.length > 0 && (
          <div className="pt-2">
            <div className="mb-8">
              <h2
                className="text-3xl sm:text-4xl lg:text-[40px] text-[#173727] font-normal tracking-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Key Benefits
              </h2>
              <div className="w-12 h-[2px] bg-[#C59B51] mt-2.5" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefitsList.map((benefit: any, idx: number) => (
                <div key={idx} className="space-y-2.5">
                  <div className="w-13 h-13 rounded-full bg-[#E5ECE5] text-[#1D3E2F] flex items-center justify-center">
                    {benefitIcons[idx % benefitIcons.length]}
                  </div>
                  <h3
                    className="text-[18px] font-medium text-[#173727]"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {benefit.title}
                  </h3>
                  <p className="text-[13.5px] leading-[1.6] text-[#475C4E] font-normal">
                    {benefit.desc || benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* What to Expect Section */}
        {expectationsList.length > 0 && (
          <div className="bg-[#EFECE6]/75 rounded-[26px] p-8 sm:p-10 lg:p-12 border border-[#E4DEC3]/50">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 space-y-5">
                <div>
                  <h2
                    className="text-3xl sm:text-4xl text-[#173727] font-normal tracking-tight"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    What To Expect
                  </h2>
                  <div className="w-12 h-[2px] bg-[#C59B51] mt-2.5" />
                </div>

                <div className="space-y-3.5 pt-2">
                  {expectationsList.map((item: any, idx: number) => (
                    <div key={idx} className="flex items-center gap-4">
                      <span className="w-8 h-8 rounded-full bg-[#2A4432] text-white flex items-center justify-center text-[12px] font-semibold shrink-0">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[14px] text-[#2D4536] font-medium">
                        {typeof item === 'string' ? item : item.title || item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6 rounded-[22px] overflow-hidden shadow-sm aspect-[16/10] bg-[#ECE7DF]">
                <img
                  src={yogaDetailData.expectImage || yogaDetailData.whatToExpect?.image || '/y2.jpg'}
                  alt="What To Expect"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}