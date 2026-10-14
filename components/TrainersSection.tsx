'use client';

import { useState } from 'react';
import websiteData from '@/data/websiteData.json';

export default function TrainersSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const trainersSectionData = 
    (websiteData as any)?.categories?.Yoga?.sections?.Trainers?.variants?.YogaTrainers1;

  const trainersList = trainersSectionData?.trainers || trainersSectionData?.items || [];

  if (!trainersSectionData) return null;

  return (
    <section className="pt-4 sm:pt-6 pb-16 lg:pb-24 px-6 sm:px-10 lg:px-12 bg-[#FAF8F5]">
      <div className="max-w-[1380px] mx-auto">
        <div className="flex flex-col items-center text-center mb-8 sm:mb-10">
          <div className="flex items-center gap-3.5 mb-2.5">
            <div className="h-[1px] w-12 bg-[#C59B51]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] font-semibold text-[#2D4536]">
              {trainersSectionData.badge}
            </span>
            <div className="h-[1px] w-12 bg-[#C59B51]" />
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-[54px] text-[#173727] font-semibold mb-3 tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {trainersSectionData.title}
          </h2>

          <p className="text-[14.5px] sm:text-[15.5px] text-[#3D5244] max-w-[640px] font-normal leading-[1.65]">
            {trainersSectionData.description}
          </p>
        </div>

        {trainersList.length > 0 && (
          <div className="block md:hidden">
            <div className="bg-white rounded-[22px] overflow-hidden shadow-sm border border-[#ECE5D8] flex flex-col justify-between transition-all duration-300">
              <div className="relative aspect-[4/4.2] overflow-hidden bg-[#ECE7DF]">
                <img
                  src={trainersList[activeIndex]?.image}
                  alt={trainersList[activeIndex]?.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3
                    className="text-[21px] font-semibold text-[#163626] mb-1"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {trainersList[activeIndex]?.name}
                  </h3>
                  <p className="text-xs uppercase tracking-wider font-medium text-[#C59B51] mb-3">
                    {trainersList[activeIndex]?.role}
                  </p>
                  <p className="text-[13.5px] text-[#475C4E] leading-[1.6] mb-5 font-normal">
                    {trainersList[activeIndex]?.desc || trainersList[activeIndex]?.description}
                  </p>
                </div>

                {trainersList[activeIndex]?.tags && (
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-[#F0ECE3]">
                    {trainersList[activeIndex].tags.map((tag: string, idx: number) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#E5ECE5] text-[#1D3E2F]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 mt-8">
              {trainersList.map((_: any, idx: number) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to trainer ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === idx
                      ? 'w-7 bg-[#173727]'
                      : 'w-2.5 bg-[#C59B51]/40 hover:bg-[#C59B51]'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {trainersList.map((trainer: any) => (
            <div
              key={trainer.id}
              className="bg-white rounded-[22px] overflow-hidden shadow-sm hover:shadow-md border border-[#ECE5D8] flex flex-col justify-between transition-all duration-300 group"
            >
              <div className="relative aspect-[4/4.2] overflow-hidden bg-[#ECE7DF]">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                <div>
                  <h3
                    className="text-[21px] font-semibold text-[#163626] mb-1"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {trainer.name}
                  </h3>
                  <p className="text-xs uppercase tracking-wider font-medium text-[#C59B51] mb-3">
                    {trainer.role}
                  </p>
                  <p className="text-[13.5px] text-[#475C4E] leading-[1.6] mb-5 font-normal">
                    {trainer.desc || trainer.description}
                  </p>
                </div>

                {trainer.tags && (
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-[#F0ECE3]">
                    {trainer.tags.map((tag: string, idx: number) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#E5ECE5] text-[#1D3E2F]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}