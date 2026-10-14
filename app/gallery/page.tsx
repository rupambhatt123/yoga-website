'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Drawer from '@/components/Drawer';
import PageBanner from '@/components/PageBanner';
import GallerySection from '@/components/GallerySection';
import Footer from '@/components/Footer';
import websiteData from '@/data/websiteData.json';

export default function GalleryPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const galleryPageData = (websiteData as any).categories.Yoga.pages.gallery;

  return (
    <main className="min-h-screen bg-[#F9F7F2]">
      <Navbar onOpenMenu={() => setIsMenuOpen(true)} />
      <Drawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <PageBanner
        title={galleryPageData.title}
        breadcrumb={galleryPageData.breadcrumb}
      />
      <GallerySection />
      <Footer />
    </main>
  );
}