'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import websiteData from '@/data/websiteData.json';

export default function Logo() {
  const headerData = (websiteData as any)?.categories?.Yoga?.sections?.Header?.variants?.YogaHeader1;
  const commonData = (websiteData as any)?.common;

  const logoSrc = headerData?.logo || '/logo.png';
  const siteName = commonData?.siteName || 'PranaYoga';

  const [transparentSrc, setTransparentSrc] = useState<string>(logoSrc);

  useEffect(() => {
    if (!logoSrc) return;

    const img = new Image();
    img.src = logoSrc;
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

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        if (r > 195 && g > 195 && b > 195) {
          data[i + 3] = 0;
        }
      }

      ctx.putImageData(imgData, 0, 0);
      setTransparentSrc(canvas.toDataURL('image/png'));
    };

    img.onerror = () => {
      setTransparentSrc(logoSrc);
    };
  }, [logoSrc]);

  return (
    <Link href="/" className="inline-block cursor-pointer">
      <img
        src={transparentSrc}
        alt={siteName}
        className="h-14 sm:h-16 w-auto object-contain"
        style={{
          filter: 'contrast(160%) brightness(88%) saturate(120%) drop-shadow(0 1px 1px rgba(0,0,0,0.08))',
          opacity: 1,
        }}
      />
    </Link>
  );
}