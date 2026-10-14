'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Drawer from '@/components/Drawer';
import PageBanner from '@/components/PageBanner';
import TrainersSection from '@/components/TrainersSection';
import Footer from '@/components/Footer';
import websiteData from '@/data/websiteData.json';

export default function TrainersPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const trainersPageData = (websiteData as any).categories.Yoga.pages.trainers;

  return (
    <main className="min-h-screen bg-[#F9F7F2]">
      <Navbar onOpenMenu={() => setIsMenuOpen(true)} />
      <Drawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <PageBanner
        title={trainersPageData.title}
        breadcrumb={trainersPageData.breadcrumb}
      />
      <TrainersSection />
      <Footer />
    </main>
  );
}