'use client';

import websiteData from '@/data/websiteData.json';

export default function Hero() {
  const heroData = (websiteData as any)?.categories?.Yoga?.sections?.Hero?.variants?.YogaHero1 || {
    badge: 'Breathe • Move • Heal • Belong',
    titleLine1: 'Find Your',
    titleLine2: 'Inner Balance',
    description: 'Experience the power of yoga to calm your mind, strengthen your body and create a healthier, happier you.',
    backgroundImage: '/hero1.png'
  };

  return (
    <section className="relative w-full min-h-[100dvh] flex items-center overflow-hidden">
      {/* Background Image with mobile focal shift to the right */}
      <div 
        className="absolute inset-0 bg-cover bg-[76%_center] sm:bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url('${heroData.backgroundImage}')`,
        }}
      />

      {/* Subtle overlay for text clarity on small mobile screens */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/50 via-transparent to-transparent sm:hidden z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 w-full pt-28 sm:pt-32 pb-16">
        <div className="max-w-xl space-y-3.5 sm:space-y-5">
          <div className="flex items-center gap-3">
            <div className="h-[1.5px] w-8 sm:w-9 bg-[#C59B51]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.24em] sm:tracking-[0.26em] font-medium text-[#1E3B2F]">
              {heroData.badge}
            </span>
          </div>

          <h1 
            className="text-[46px] xs:text-[56px] sm:text-[76px] lg:text-[88px] leading-[1.02] sm:leading-[0.98] tracking-[-0.01em] text-[#1B3A2C]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            <span className="block font-medium">{heroData.titleLine1}</span>
            <span 
              className="block italic font-normal text-[#436752] mt-1"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {heroData.titleLine2}
            </span>
          </h1>

          <p className="text-xs sm:text-base text-[#1E3B2F]/90 leading-relaxed max-w-[340px] sm:max-w-[410px] font-normal pt-1 sm:pt-2">
            {heroData.description}
          </p>
        </div>
      </div>
    </section>
  );
}