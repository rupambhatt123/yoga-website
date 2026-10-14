'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Drawer from '@/components/Drawer';
import PageBanner from '@/components/PageBanner';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import websiteData from '@/data/websiteData.json';

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const aboutPageData = (websiteData as any).categories.Yoga.pages.about;

  return (
    <main className="min-h-screen bg-[#F9F7F2]">
      <Navbar onOpenMenu={() => setIsMenuOpen(true)} />
      <Drawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <PageBanner
        title={aboutPageData.title}
        breadcrumb={aboutPageData.breadcrumb}
      />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </main>
  );
}