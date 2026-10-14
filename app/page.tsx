'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Drawer from '@/components/Drawer';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import VideoSection from '@/components/VideoSection';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen">
      <Navbar onOpenMenu={() => setIsMenuOpen(true)} />
      <Drawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      <Hero />
      <About />
      <Services />
      <VideoSection />
      <Gallery />
      <Testimonials />
      <Blog />
      <Footer />
    </main>
  );
}