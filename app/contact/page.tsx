'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Drawer from '@/components/Drawer';
import PageBanner from '@/components/PageBanner';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import websiteData from '@/data/websiteData.json';

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const contactPageData = (websiteData as any).categories.Yoga.pages.contact;

  return (
    <main className="min-h-screen bg-[#F9F7F2]">
      <Navbar onOpenMenu={() => setIsMenuOpen(true)} />
      <Drawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <PageBanner
        title={contactPageData.title}
        breadcrumb={contactPageData.breadcrumb}
      />
      <ContactSection />
      <Footer />
    </main>
  );
}