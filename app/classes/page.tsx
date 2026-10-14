'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Drawer from '@/components/Drawer';
import PageBanner from '@/components/PageBanner';
import YogaClassesList from '@/components/YogaClassesList';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import websiteData from '@/data/websiteData.json';

export default function ClassesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const classesPageData = (websiteData as any).categories.Yoga.pages.classes;

  return (
    <main className="min-h-screen bg-[#F9F7F2]">
      <Navbar onOpenMenu={() => setIsMenuOpen(true)} />
      <Drawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <PageBanner
        title={classesPageData.title}
        breadcrumb={classesPageData.breadcrumb}
      />
      <YogaClassesList />
      <Testimonials />
      <Footer />
    </main>
  );
}