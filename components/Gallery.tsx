'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import websiteData from '@/data/websiteData.json';

export default function Gallery() {
  const [motifSrc, setMotifSrc] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<any | null>(null);

  const galleryData = (websiteData as any).categories.Yoga.sections.Gallery.variants.YogaGallery1;

  const row1Images = galleryData.items.slice(0, 3);
  const row2Images = galleryData.items.slice(3, 7);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = '/m6.png';
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
  }, []);

  return (
    <section className="bg-[#FAF8F5] py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 flex flex-col gap-2.5 sm:gap-3 w-full">
            
            <div className="grid grid-cols-12 gap-2.5 sm:gap-3">
              {row1Images.map((item: any, idx: number) => {
                const colSpanClass = idx === 0 ? 'col-span-5 aspect-[1.35/1]' : idx === 1 ? 'col-span-4 aspect-[1.08/1]' : 'col-span-3 aspect-[0.82/1]';
                return (
                  <button
                    key={item.id || idx}
                    type="button"
                    onClick={() => setSelectedImage(item)}
                    className={`${colSpanClass} rounded-[16px] overflow-hidden bg-[#ECE7DF] shadow-sm cursor-pointer border-0 p-0 text-left block w-full focus:outline-none`}
                  >
                    <img
                      src={item.image}
                      alt={item.title || 'Yoga Gallery'}
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    />
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-12 gap-2.5 sm:gap-3">
              {row2Images.map((item: any, idx: number) => (
                <button
                  key={item.id || idx}
                  type="button"
                  onClick={() => setSelectedImage(item)}
                  className="col-span-3 aspect-[0.95/1] rounded-[16px] overflow-hidden bg-[#ECE7DF] shadow-sm cursor-pointer border-0 p-0 text-left block w-full focus:outline-none"
                >
                  <img
                    src={item.image}
                    alt={item.title || 'Yoga Gallery'}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </button>
              ))}
            </div>

          </div>

          <div className="lg:col-span-5 flex flex-col items-start justify-center pl-0 lg:pl-6">
            
            <div className="w-52 sm:w-60 flex items-center justify-start mb-5 -ml-1">
              <img
                src={motifSrc || '/m6.png'}
                alt={galleryData.badge || 'Gallery'}
                className="w-full h-auto object-contain transition-opacity duration-300"
                style={{
                  opacity: motifSrc ? 1 : 0,
                  filter: 'contrast(125%) brightness(95%)',
                }}
              />
            </div>

            <h2
              className="text-3xl sm:text-4xl xl:text-[42px] leading-[1.18] text-[#1B3527] mb-5 font-medium"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              <span className="block whitespace-nowrap">{galleryData.titleLine1}</span>
              <span className="block italic text-[#B5833B] mt-1 font-normal">
                {galleryData.titleLine2}
              </span>
            </h2>

            <p className="text-[14px] sm:text-[15px] leading-[1.7] text-[#3D5244] max-w-[420px] mb-8 font-normal">
              Take a glimpse into our classes, events and community. Every moment here reflects balance, strength and inner peace.
            </p>

            <Link
              href="/gallery"
              className="inline-flex items-center gap-4 bg-[#B47F39] hover:bg-[#9E6E2E] text-white pl-6 pr-2.5 py-2.5 rounded-full transition-all duration-300 shadow-sm cursor-pointer group"
            >
              <span className="text-sm font-medium tracking-wide">
                View More
              </span>

              <span className="w-8 h-8 rounded-full bg-white text-[#B47F39] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </Link>

          </div>

        </div>
      </div>

      {/* Lightbox / Full Image Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#FAF8F5] rounded-2xl overflow-hidden shadow-2xl p-3 sm:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 text-[#173727] flex items-center justify-center hover:bg-white shadow-md transition-all cursor-pointer"
              aria-label="Close"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-xl overflow-hidden bg-black/5">
              <img
                src={selectedImage.image}
                alt={selectedImage.title || 'Gallery Preview'}
                className="w-full h-full object-contain"
              />
            </div>

            {selectedImage.title && (
              <div className="pt-3 px-2 text-center">
                <h3
                  className="text-lg sm:text-xl font-semibold text-[#173727]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {selectedImage.title}
                </h3>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}