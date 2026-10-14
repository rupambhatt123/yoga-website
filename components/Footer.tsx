'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import websiteData from '@/data/websiteData.json';

export default function Footer() {
  const [footerLogoSrc, setFooterLogoSrc] = useState<string | null>(null);

  const footerData = (websiteData as any).categories.Yoga.sections.Footer.variants.YogaFooter1;
  const commonData = (websiteData as any).common;

  const instagramUrl = commonData?.socialLinks?.instagram || 'https://instagram.com';
  const facebookUrl = commonData?.socialLinks?.facebook || 'https://facebook.com';
  const youtubeUrl = commonData?.socialLinks?.youtube || 'https://youtube.com';

  useEffect(() => {
    const img = new Image();
    img.src = footerData.logo || '/footer.png';
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

        if (diff < 28) {
          data[i + 3] = 0;
        }
      }

      ctx.putImageData(imgData, 0, 0);
      setFooterLogoSrc(canvas.toDataURL('image/png'));
    };

    img.onerror = () => {
      setFooterLogoSrc(footerData.logo || '/footer.png');
    };
  }, [footerData.logo]);

  return (
    <footer className="w-full bg-[#1B3F2C] text-white py-6 sm:py-7 border-t border-[#25523B]">
      <div className="w-full max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
        
        <div className="flex items-center shrink-0">
          <Link href="/" className="inline-block">
            <img
              src={footerLogoSrc || footerData.logo || '/footer.png'}
              alt={commonData.siteName || 'PranaYoga'}
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </Link>
        </div>

        <nav className="flex flex-wrap md:flex-nowrap items-center justify-center text-[13.5px] sm:text-[14.5px] lg:text-[15px] xl:text-[16px] font-normal text-[#E2EAE5] gap-y-2">
          {footerData.navLinks.map((link: any, idx: number) => (
            <div key={link.name} className="flex items-center">
              <Link
                href={link.href}
                className="hover:text-[#C59B51] transition-colors duration-200 px-2 sm:px-3 lg:px-3.5 py-1"
              >
                {link.name}
              </Link>
              {idx !== footerData.navLinks.length - 1 && (
                <span className="text-[#3F6851] font-light select-none text-[15px] sm:text-[17px] hidden sm:inline">
                  |
                </span>
              )}
            </div>
          ))}
        </nav>

        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 shrink-0 text-center sm:text-right">
          
          <div className="flex items-center gap-3.5 text-white">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C59B51] transition-colors p-1"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C59B51] transition-colors p-1"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C59B51] transition-colors p-1"
              aria-label="YouTube"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#1B3F2C" />
              </svg>
            </a>
          </div>

          <span className="hidden sm:inline-block text-[#3F6851] font-light select-none text-[18px]">
            |
          </span>

          <div className="text-[12px] sm:text-[13px] text-[#A8C2B3] leading-tight">
            <div>{footerData.copyright}</div>
          </div>

        </div>

      </div>
    </footer>
  );
}