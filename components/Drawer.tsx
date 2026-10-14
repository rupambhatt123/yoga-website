
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Logo from './Logo';
import websiteData from '@/data/websiteData.json';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CloseIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const iconMap: { [key: string]: React.ReactNode } = {
  '/': (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  '/about': (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  '/yoga-classes': (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2a4.5 4.5 0 0 0-4.5 4.5c0 4.14 4.5 7.5 4.5 7.5s4.5-3.36 4.5-7.5A4.5 4.5 0 0 0 12 2z" />
    </svg>
  ),
  '/classes': (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2a4.5 4.5 0 0 0-4.5 4.5c0 4.14 4.5 7.5 4.5 7.5s4.5-3.36 4.5-7.5A4.5 4.5 0 0 0 12 2z" />
    </svg>
  ),
  '/gallery': (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  ),
  '/packages': (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  ),
  '/yoga-trainer': (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="4" />
      <path d="M5.5 21a7.5 7.5 0 0 1 13 0" />
    </svg>
  ),
  '/trainers': (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="4" />
      <path d="M5.5 21a7.5 7.5 0 0 1 13 0" />
    </svg>
  ),
  '/blog-detail': (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
      <path d="M6 6h10" />
      <path d="M6 10h10" />
    </svg>
  ),
  '/blogs': (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
      <path d="M6 6h10" />
      <path d="M6 10h10" />
    </svg>
  ),
  '/appointment': (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  '/book-appointment': (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  '/contact': (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
};

const defaultIcon = (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
  </svg>
);

export default function Drawer({ isOpen, onClose }: DrawerProps) {
  const commonData = (websiteData as any).common;
  const headerData = (websiteData as any).categories.Yoga.sections.Header.variants.YogaHeader1;

  const menuItems = headerData.navLinks;
  const ctaButton = headerData.ctaButton;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 cursor-pointer"
          />

          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-[460px] bg-[#FAF8F3] z-50 overflow-y-auto p-8 sm:p-10 flex flex-col justify-between shadow-2xl"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-stone-200">
                <Logo />
                <button
                  onClick={onClose}
                  aria-label="Close Menu"
                  className="p-2 text-stone-600 hover:text-black transition cursor-pointer"
                >
                  <CloseIcon />
                </button>
              </div>

              <nav className="mt-6 flex flex-col gap-2">
                {menuItems.map((item: any, index: number) => (
                  <Link
                    key={index}
                    href={item.path}
                    onClick={onClose}
                    className="group flex items-center justify-between px-3 py-2.5 rounded-xl text-stone-700 hover:bg-[#EAE4D9]/50 transition cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#E8EDE6] flex items-center justify-center text-[#234238] group-hover:scale-105 transition">
                        {iconMap[item.path] || defaultIcon}
                      </div>
                      <span className="text-base font-serif-custom text-[#1E382B] group-hover:translate-x-1 transition font-medium">
                        {item.title}
                      </span>
                    </div>
                    <span className="text-stone-400 group-hover:text-[#1E382B] transition">
                      <ChevronRightIcon />
                    </span>
                  </Link>
                ))}

                {ctaButton && (
                  <Link
                    href={ctaButton.path}
                    onClick={onClose}
                    className="group flex items-center justify-between px-3 py-2.5 rounded-xl text-stone-700 hover:bg-[#EAE4D9]/50 transition cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#E8EDE6] flex items-center justify-center text-[#234238] group-hover:scale-105 transition">
                        {iconMap[ctaButton.path] || iconMap['/appointment'] || defaultIcon}
                      </div>
                      <span className="text-base font-serif-custom text-[#1E382B] group-hover:translate-x-1 transition font-medium">
                        {ctaButton.text}
                      </span>
                    </div>
                    <span className="text-stone-400 group-hover:text-[#1E382B] transition">
                      <ChevronRightIcon />
                    </span>
                  </Link>
                )}
              </nav>
            </div>

            <div className="pt-8 mt-6 border-t border-stone-200">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-stone-600 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#5D7363] text-white flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-stone-400 uppercase">Call Us</p>
                    <p className="font-semibold text-stone-800">{commonData.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#5D7363] text-white flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div className="truncate">
                    <p className="text-[10px] text-stone-400 uppercase">Email Us</p>
                    <p className="font-semibold text-stone-800 truncate">{commonData.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#5D7363] text-white flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-stone-400 uppercase">Location</p>
                    <p className="font-semibold text-stone-800 truncate">{commonData.address}</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center gap-4 py-3">
                {commonData.socialLinks.facebook && (
                  <a href={commonData.socialLinks.facebook} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-[#E5DFD4] text-stone-700 flex items-center justify-center hover:bg-[#5D7363] hover:text-white transition">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                )}
                {commonData.socialLinks.instagram && (
                  <a href={commonData.socialLinks.instagram} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-[#E5DFD4] text-stone-700 flex items-center justify-center hover:bg-[#5D7363] hover:text-white transition">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                )}
                {commonData.socialLinks.youtube && (
                  <a href={commonData.socialLinks.youtube} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-[#E5DFD4] text-stone-700 flex items-center justify-center hover:bg-[#5D7363] hover:text-white transition">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
                    </svg>
                  </a>
                )}
              </div>

              <div className="text-center font-serif-custom italic text-xs text-stone-500 mt-2">
                — Breathe • Move • Heal • Belong —
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

