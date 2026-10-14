'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Drawer from '@/components/Drawer';
import PageBanner from '@/components/PageBanner';
import PackagesSection from '@/components/PackageSection';
import Footer from '@/components/Footer';
import websiteData from '@/data/websiteData.json';

export default function PackagesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const packagesPageData = (websiteData as any).categories.Yoga.pages.packages;

  return (
    <main className="min-h-screen bg-[#F9F7F2]">
      <Navbar onOpenMenu={() => setIsMenuOpen(true)} />
      <Drawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <PageBanner
        title={packagesPageData.title}
        breadcrumb={packagesPageData.breadcrumb}
      />
      <PackagesSection />
      <Footer />
    </main>
  );
}