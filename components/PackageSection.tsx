'use client';

import { useState } from 'react';
import websiteData from '@/data/websiteData.json';

const pillSvgMap: Record<string, React.ReactNode> = {
  lotus: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 sm:w-8 sm:h-8 stroke-[#173727]" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3c-2.2 4-2.2 11 0 14c2.2-3 2.2-10 0-14z" />
      <path d="M10.2 6.5C6.5 8.5 5 11.5 7.5 15.5" />
      <path d="M13.8 6.5C17.5 8.5 19 11.5 16.5 15.5" />
      <path d="M5.5 11.5C3 13 2.5 15.5 4.5 17.5" />
      <path d="M18.5 11.5C21 13 21.5 15.5 19.5 17.5" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 sm:w-8 sm:h-8 stroke-[#173727]" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3.2" />
      <circle cx="16.5" cy="10" r="2.5" />
      <path d="M3.5 19.5c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5" />
      <path d="M14.5 14.5c1.8.4 3.5 1.7 4 3.8" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 sm:w-8 sm:h-8 stroke-[#173727]" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 sm:w-8 sm:h-8 stroke-[#173727]" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="21" x2="21" y2="21" />
    </svg>
  ),
};

export default function PackageSection() {
  const [activePlanIndex, setActivePlanIndex] = useState(0);

  const yogaData = (websiteData as any)?.categories?.Yoga?.sections?.Packages?.variants?.YogaPackages1;

  if (!yogaData) return null;

  const plans = yogaData.plans || yogaData.items || [];
  const featurePills = yogaData.featurePills || [];
  const heroImg = yogaData.heroImage || '/m1.png';

  return (
    <div className="bg-[#FAF8F5] relative overflow-hidden">
      
      <section className="relative w-full border-b border-[#ECE5D8]/40">
        
        <div 
          className="absolute left-0 top-0 bottom-0 w-[420px] pointer-events-none opacity-25 z-0 bg-no-repeat bg-left-center bg-contain"
          style={{ backgroundImage: "url('/14oct.png')" }}
        />

        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-0 lg:min-h-[560px] items-stretch relative z-10">
          
          <div className="lg:col-span-7 flex flex-col justify-center items-center text-center px-4 sm:px-12 lg:px-16 py-8 sm:py-12 lg:py-16">
            
            <div className="flex items-center justify-center gap-3 sm:gap-6 mb-3 sm:mb-4">
              <div className="w-12 sm:w-28 h-[1.5px] sm:h-[2px] bg-[#C59B51]" />
              <div className="w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-center shrink-0">
                <img 
                  src="/lotus.png" 
                  alt="Lotus" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <div className="w-12 sm:w-28 h-[1.5px] sm:h-[2px] bg-[#C59B51]" />
            </div>

            <span className="text-[11.5px] sm:text-[15px] tracking-[0.28em] sm:tracking-[0.35em] font-semibold text-[#173727] uppercase mb-2 sm:mb-3 block">
              {yogaData.badge || 'OUR PACKAGES'}
            </span>

            <h1
              className="text-3xl sm:text-5xl lg:text-[62px] text-[#173727] font-serif leading-[1.1] sm:leading-[1.08] mb-3 sm:mb-4 tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {yogaData.title || 'Choose Your Yoga Journey'}
            </h1>

            <p className="text-[14px] sm:text-[16px] text-[#475C4E] max-w-[580px] leading-[1.55] sm:leading-[1.6] mb-6 sm:mb-10 font-normal px-2 sm:px-0">
              {yogaData.description}
            </p>

            {featurePills.length > 0 && (
              <div className="grid grid-cols-4 gap-2 sm:gap-8 w-full max-w-[560px]">
                {featurePills.map((pill: any, idx: number) => (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 sm:w-[78px] sm:h-[78px] rounded-full bg-[#E5EFE7] flex items-center justify-center mb-2 sm:mb-3 shadow-xs border border-[#D5E3D8]">
                      {pillSvgMap[pill.icon] || pillSvgMap.lotus}
                    </div>
                    <span className="text-[11px] sm:text-[14px] font-semibold text-[#173727] whitespace-pre-line leading-tight">
                      {pill.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-5 relative w-full h-[240px] sm:h-[360px] lg:h-auto min-h-full overflow-hidden">
            <img
              src={heroImg}
              alt={yogaData.title}
              className="w-full h-full object-cover object-center"
            />
            
            <div 
              className="hidden lg:block absolute inset-y-0 left-0 w-36 pointer-events-none"
              style={{
                background: 'linear-gradient(to right, #FAF8F5 0%, rgba(250, 248, 245, 0.7) 40%, transparent 100%)'
              }}
            />
          </div>

        </div>
      </section>

      <section className="py-10 sm:py-20 px-4 sm:px-10 lg:px-12 max-w-[1380px] mx-auto">
        
        {plans.length > 0 && (
          <div className="block md:hidden">
            <div className="bg-white rounded-[22px] overflow-hidden border border-[#ECE5D8] shadow-sm flex flex-col justify-between">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#ECE7DF]">
                <img
                  src={plans[activePlanIndex]?.image}
                  alt={plans[activePlanIndex]?.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h3
                    className="text-xl text-[#173727] font-semibold mb-1"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {plans[activePlanIndex]?.title}
                  </h3>
                  <p className="text-xs text-[#475C4E] mb-3">
                    {plans[activePlanIndex]?.subtitle}
                  </p>

                  <div className="mb-4 flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-[#1D3E2F]">₹{plans[activePlanIndex]?.price}</span>
                    <span className="text-[11px] text-[#6B7E72]">/{plans[activePlanIndex]?.period}</span>
                  </div>

                  <div className="h-[1px] bg-[#ECE5D8] w-full mb-4" />

                  <ul className="space-y-2 mb-6">
                    {(plans[activePlanIndex]?.features || []).map((feat: string, i: number) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs text-[#3D5244]">
                        <span className="w-3.5 h-3.5 rounded-full bg-[#E5ECE5] text-[#1D3E2F] flex items-center justify-center text-[9px] font-bold shrink-0">
                          ✓
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="/contact"
                  className="w-full py-2.5 rounded-full text-center text-xs font-medium bg-[#2A4432] hover:bg-[#1E3425] text-white transition-colors duration-300"
                >
                  Choose Plan
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 mt-6">
              {plans.map((_: any, idx: number) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActivePlanIndex(idx)}
                  aria-label={`Go to plan ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activePlanIndex === idx
                      ? 'w-7 bg-[#173727]'
                      : 'w-2.5 bg-[#C59B51]/40 hover:bg-[#C59B51]'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan: any) => (
            <div
              key={plan.id}
              className="bg-white rounded-[24px] overflow-hidden border border-[#ECE5D8] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#ECE7DF]">
                <img
                  src={plan.image}
                  alt={plan.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-7 sm:p-8 flex flex-col flex-grow justify-between">
                <div>
                  <h3
                    className="text-2xl text-[#173727] font-semibold mb-2"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {plan.title}
                  </h3>
                  <p className="text-sm text-[#475C4E] mb-5">
                    {plan.subtitle}
                  </p>

                  <div className="mb-6 flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-[#1D3E2F]">₹{plan.price}</span>
                    <span className="text-xs text-[#6B7E72]">/{plan.period}</span>
                  </div>

                  <div className="h-[1px] bg-[#ECE5D8] w-full mb-6" />

                  <ul className="space-y-3 mb-8">
                    {(plan.features || []).map((feat: string, i: number) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-[#3D5244]">
                        <span className="w-4 h-4 rounded-full bg-[#E5ECE5] text-[#1D3E2F] flex items-center justify-center text-[10px] font-bold shrink-0">
                          ✓
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="/contact"
                  className="w-full py-3.5 rounded-full text-center text-sm font-medium bg-[#2A4432] hover:bg-[#1E3425] text-white transition-colors duration-300"
                >
                  Choose Plan
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}