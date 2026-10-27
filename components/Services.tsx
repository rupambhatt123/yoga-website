'use client';

import { useEffect, useState } from 'react';
import websiteData from '@/data/websiteData.json';

const serviceIcons = [
  (
    <svg key="1" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="2.5" />
      <path d="M12 7.5v6" />
      <path d="M7 11l5 2.5 5-2.5" />
      <path d="M5.5 19.5c1.5-2.5 4-3.5 6.5-3.5s5 1 6.5 3.5" />
      <path d="M4 19.5h16" />
    </svg>
  ),
  (
    <svg key="2" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 6c-1.5 3-1.5 7 0 11 1.5-4 1.5-8 0-11z" />
      <path d="M11 9c-3 1.5-4.5 4.5-3.5 8 2.5-1 4-4 3.5-8z" />
      <path d="M13 9c3 1.5 4.5 4.5 3.5 8-2.5-1-4-4-3.5-8z" />
      <path d="M6 14.5c2.5 2.5 5 2.5 6 2.5s3.5 0 6-2.5" />
    </svg>
  ),
  (
    <svg key="3" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="7" cy="15" rx="3.5" ry="5" />
      <circle cx="7" cy="15" r="1.5" />
      <path d="M7 10l12-3c1.5-.4 2.5.5 2.5 2v3c0 1.2-.8 2.2-2 2.5L7 20" />
    </svg>
  ),
  (
    <svg key="4" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4c-2 3.5-2 7.5 0 12 2-4.5 2-8.5 0-12z" />
      <path d="M9.5 9c-2.5 1.5-3.5 4.5-2.5 7.5 2.5-.5 4-3 2.5-7.5z" />
      <path d="M14.5 9c2.5 1.5 3.5 4.5 2.5 7.5-2.5-.5-4-3-2.5-7.5z" />
      <circle cx="12" cy="19.5" r="1" fill="currentColor" />
    </svg>
  )
];

export default function Services() {
  const [motifSrc, setMotifSrc] = useState<string | null>(null);

  const servicesData = (websiteData as any).categories.Yoga.sections.Classes?.variants?.YogaClasses1 || {
    badge: 'Our Services',
    titleLine1: 'Yoga Services for',
    titleLine2: 'a Healthier, Happier You',
    description: 'At PranaYoga, we offer a wide range of yoga services designed to support your physical, mental and emotional well-being. Whether you are a beginner or an experienced practitioner, our offerings help you build strength, flexibility and inner peace in a supportive environment.',
    heroImage: '/m3.png',
    motifImage: '/m4.png',
    items: [
      {
        title: 'Group Yoga Classes',
        description: 'Energizing classes for all levels in a friendly and supportive space.'
      },
      {
        title: 'Personalized Sessions',
        description: 'One-to-one yoga sessions tailored to your goals and needs.'
      },
      {
        title: 'Corporate Yoga',
        description: 'Wellness programs to improve focus, reduce stress and boost productivity.'
      },
      {
        title: 'Yoga Retreats',
        description: 'Rejuvenating retreats to help you disconnect, relax and rediscover yourself.'
      }
    ]
  };

  useEffect(() => {
    const img = new Image();
    img.src = servicesData.motifImage || '/m4.png';
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

      const bgR = data[0];
      const bgG = data[1];
      const bgB = data[2];

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        const diff = Math.sqrt(
          (r - bgR) ** 2 + (g - bgG) ** 2 + (b - bgB) ** 2
        );

        if (diff < 35 || (r > 225 && g > 220 && b > 210)) {
          data[i + 3] = 0;
        }
      }

      ctx.putImageData(imgData, 0, 0);
      setMotifSrc(canvas.toDataURL('image/png'));
    };
  }, [servicesData.motifImage]);

  return (
    <section className="bg-[#FAF8F5] overflow-hidden w-full pt-6 sm:pt-8 pb-8 sm:pb-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        
        {/* Content Column (Mobile pe Order-1) */}
        <div className="order-1 lg:order-2 lg:col-span-6 flex flex-col justify-center px-5 sm:px-10 lg:px-16 py-4 sm:py-8 lg:py-12">
          <div className="max-w-[550px] mx-auto w-full flex flex-col items-center">
            
            <div className="w-56 sm:w-68 md:w-80 flex items-center justify-center mb-3 sm:mb-4">
              <img
                src={motifSrc || servicesData.motifImage || '/m4.png'}
                alt={servicesData.badge || 'Our Services'}
                className="w-full h-auto object-contain transition-opacity duration-300"
                style={{
                  opacity: motifSrc ? 1 : 0,
                  filter: 'contrast(125%) brightness(95%)',
                }}
              />
            </div>

            <h2
              className="text-center text-2xl sm:text-3xl lg:text-[40px] leading-[1.18] text-[#1A3326] mb-2 sm:mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              <span className="block font-semibold tracking-tight">{servicesData.titleLine1}</span>
              <span className="block italic font-normal text-[#688A72] mt-0.5">
                {servicesData.titleLine2}
              </span>
            </h2>

            <p 
              className="text-center text-[13.5px] sm:text-[15px] leading-[1.6] text-[#2D4537] max-w-[500px] mb-6 sm:mb-8 font-normal"
              style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
            >
              {servicesData.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 sm:gap-y-6 w-full text-left">
              {servicesData.items?.map((service: any, idx: number) => (
                <div key={service.id || idx} className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#E5EFE6] flex items-center justify-center shrink-0 text-[#254231]">
                    {serviceIcons[idx % serviceIcons.length]}
                  </div>
                  <div>
                    <h3
                      className="text-[16px] sm:text-[17px] font-semibold text-[#183324] leading-snug"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-[12px] sm:text-[13px] text-[#2F4A3B] leading-[1.45] mt-1">
                      {service.description || service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Photo Column (Mobile pe Order-2) */}
        <div className="order-2 lg:order-1 lg:col-span-6 relative w-full h-[250px] xs:h-[280px] sm:h-[380px] lg:h-full min-h-0 lg:min-h-[480px] overflow-hidden mt-6 lg:mt-0">
          <img
            src={servicesData.heroImage || '/m3.png'}
            alt={servicesData.titleLine1 || 'Yoga Services'}
            className="w-full h-full object-cover object-center"
          />
        </div>

      </div>
    </section>
  );
}