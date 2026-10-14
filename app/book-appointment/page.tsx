'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Drawer from '@/components/Drawer';
import PageBanner from '@/components/PageBanner';
import BookAppointmentSection from '@/components/BookAppointmentSection';
import Footer from '@/components/Footer';
import websiteData from '@/data/websiteData.json';

export default function BookAppointmentPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const appointmentPageData = (websiteData as any).categories.Yoga.pages.appointment;

  return (
    <main className="min-h-screen bg-[#F9F7F2]">
      <Navbar onOpenMenu={() => setIsMenuOpen(true)} />
      <Drawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <PageBanner
        title={appointmentPageData.title}
        breadcrumb={appointmentPageData.breadcrumb}
      />
      <BookAppointmentSection />
      <Footer />
    </main>
  );
}