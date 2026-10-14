'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Drawer from '@/components/Drawer';
import PageBanner from '@/components/PageBanner';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';
import websiteData from '@/data/websiteData.json';

export default function BlogsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const blogsPageData = (websiteData as any).categories.Yoga.pages.blogs;

  return (
    <main className="min-h-screen bg-[#F9F7F2]">
      <Navbar onOpenMenu={() => setIsMenuOpen(true)} />
      <Drawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <PageBanner
        title={blogsPageData.title}
        breadcrumb={blogsPageData.breadcrumb}
      />
      <BlogSection />
      <Footer />
    </main>
  );
}