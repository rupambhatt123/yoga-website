'use client';

import websiteData from '@/data/websiteData.json';

export default function Hero() {
  const heroData = (websiteData as any).categories.Yoga.sections.Hero?.variants?.YogaHero1 || {
    badge: 'Breathe • Move • Heal • Belong',
    titleLine1: 'Find Your',
    titleLine2: 'Inner Balance',
    description: 'Experience the power of yoga to calm your mind, strengthen your body and create a healthier, happier you.',
    backgroundImage: '/hero1.png'
  };

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url('${heroData.backgroundImage}')`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 w-full pt-28 pb-16">
        <div className="max-w-xl space-y-4 sm:space-y-5">
          <div className="flex items-center gap-3">
            <div className="h-[1.5px] w-9 bg-[#C59B51]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.26em] font-medium text-[#1E3B2F]">
              {heroData.badge}
            </span>
          </div>

          <h1 
            className="text-[64px] sm:text-[76px] lg:text-[88px] leading-[0.98] tracking-[-0.01em] text-[#1B3A2C]"
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

          <p className="text-sm sm:text-base text-[#1E3B2F]/90 leading-relaxed max-w-[410px] font-normal pt-2">
            {heroData.description}
          </p>
        </div>
      </div>
    </section>
  );
}