'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import websiteData from '@/data/websiteData.json';

export default function About() {
  const pathname = usePathname();
  const isAboutPage = pathname === '/about';

  const aboutData = (websiteData as any)?.categories?.Yoga?.sections?.About?.variants?.YogaAbout1 || {
    badge: 'About Us',
    description: 'Mariah is a Yoga Instructor from New Hampshire. She attended Ithaca College, where she earned a degree in clinical exercise science. Her specialties are Ashtanga yoga, Hatha yoga, and Kundalini yoga.',
    image: '/m1.png',
    motifImage: '/m2.png',
    ctaLink: '/about',
    ctaText: 'About Us'
  };

  const [motifSrc, setMotifSrc] = useState<string>(aboutData.motifImage || '/m2.png');

  useEffect(() => {
    if (!aboutData.motifImage) return;

    const img = new Image();
    img.src = aboutData.motifImage;
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
  }, [aboutData.motifImage]);

  return (
    <section className="bg-[#FAF8F5] overflow-hidden w-full pt-4 sm:pt-6 lg:pt-8 pb-0 sm:pb-2">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        
        {/* Left Text & Motif Column */}
        <div className="lg:col-span-6 flex flex-col justify-center items-center text-center px-4 sm:px-10 lg:px-14 py-3 sm:py-5 lg:py-8">
          <div className="max-w-[440px] w-full flex flex-col items-center">
            
            {/* Motif Image */}
            <div className="w-20 sm:w-28 md:w-36 flex items-center justify-center mb-1.5 sm:mb-3">
              <img
                src={motifSrc}
                alt={aboutData.badge || 'Our Story'}
                className="w-full h-auto object-contain"
                style={{
                  filter: 'contrast(125%) brightness(95%)',
                }}
              />
            </div>

            {/* Description Text */}
            <p 
              className="text-[14px] sm:text-[16px] lg:text-[18px] leading-[1.5] text-[#22382C] font-normal px-2 sm:px-0"
              style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
            >
              {aboutData.description}
            </p>

            {/* CTA Button */}
            {!isAboutPage && (
              <div className="mt-3.5 sm:mt-5">
                <Link
                  href={aboutData.ctaLink || '/about'}
                  className="inline-flex items-center gap-2.5 sm:gap-3 bg-[#B28243] hover:bg-[#9B6E32] text-white pl-4 sm:pl-5 pr-1.5 sm:pr-2 py-1.5 sm:py-2 rounded-full shadow-sm transition group cursor-pointer"
                >
                  <span className="text-white text-xs sm:text-sm leading-none">
                    &#10033;
                  </span>

                  <span className="text-xs sm:text-[13px] font-medium tracking-wide">
                    {aboutData.ctaText || 'About Us'}
                  </span>

                  <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white text-[#B28243] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
            )}

          </div>
        </div>

        {/* Right Photo Column */}
        <div className="lg:col-span-6 relative w-full h-[240px] xs:h-[280px] sm:h-[340px] lg:h-full min-h-0 lg:min-h-[440px] overflow-hidden mb-0">
          <img
            src={aboutData.image || '/m1.png'}
            alt="Yoga Instructor"
            className="w-full h-full object-cover object-[center_20%] sm:object-center"
          />
        </div>

      </div>
    </section>
  );
}
