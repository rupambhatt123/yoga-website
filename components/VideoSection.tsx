'use client';

import { useState } from 'react';
import websiteData from '@/data/websiteData.json';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoData = (websiteData as any).categories.Yoga.sections.Video.variants.YogaVideo1;

  return (
    <>
      <section className="bg-[#FAF8F5] py-16 lg:py-24 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-5 flex flex-col items-start justify-center pr-0 lg:pr-6">
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-[1.5px] bg-[#C59B51]" />
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] font-medium text-[#2E4738]">
                  {videoData.badge}
                </span>
                <div className="w-10 h-[1.5px] bg-[#C59B51]" />
              </div>

              <h2
                className="text-4xl sm:text-5xl lg:text-[54px] leading-[1.12] text-[#1D3327] mb-6 font-normal"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {videoData.titleLine1}{' '}
                <span className="italic font-normal text-[#B58A4A]">{videoData.highlightText}</span>{' '}
                {videoData.titleLine2}
              </h2>

              <p
                className="text-[15px] sm:text-[16px] leading-[1.65] text-[#2F473A] max-w-[420px] mb-10 font-normal"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {videoData.description}
              </p>

              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                className="inline-flex items-center gap-4 bg-[#425C4B] hover:bg-[#344A3C] text-white pl-7 pr-2.5 py-2.5 rounded-full transition-all duration-300 shadow-sm cursor-pointer group"
              >
                <span className="text-sm font-medium tracking-wide">
                  {videoData.buttonText}
                </span>

                <span className="w-8 h-8 rounded-full bg-white text-[#425C4B] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </button>

            </div>

            <div className="lg:col-span-7 w-full">
              <div 
                onClick={() => setIsPlaying(true)}
                className="relative rounded-[28px] overflow-hidden shadow-sm aspect-[16/10] sm:aspect-[16/9] lg:aspect-[1.55/1] w-full bg-[#EAE6DF] cursor-pointer group"
              >
                <img
                  src={videoData.thumbnailImage}
                  alt={`${videoData.titleLine1} ${videoData.highlightText} ${videoData.titleLine2}`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {isPlaying && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setIsPlaying(false)}
        >
          <div 
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsPlaying(false)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center cursor-pointer transition"
              aria-label="Close video"
            >
              ✕
            </button>

            <iframe
              className="w-full h-full"
              src={videoData.videoUrl}
              title={videoData.badge}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}