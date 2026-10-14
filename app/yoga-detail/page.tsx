'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Drawer from '@/components/Drawer';
import PageBanner from '@/components/PageBanner';
import YogaDetail from '@/components/YogaDetail';
import Footer from '@/components/Footer';
import websiteData from '@/data/websiteData.json';

export default function YogaDetailPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const yogaDetailPageData = (websiteData as any).categories.Yoga.pages.yogaDetail;

  return (
    <main className="min-h-screen bg-[#F9F7F2]">
      <Navbar onOpenMenu={() => setIsMenuOpen(true)} />
      <Drawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <PageBanner
        title={yogaDetailPageData.title}
        breadcrumb={yogaDetailPageData.breadcrumb}
      />
      <YogaDetail />
      <Footer />
    </main>
  );
}