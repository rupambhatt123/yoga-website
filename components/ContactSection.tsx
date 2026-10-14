'use client';

import { useEffect, useState } from 'react';
import websiteData from '@/data/websiteData.json';

export default function ContactSection() {
  const [lotusSrc, setLotusSrc] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactData = (websiteData as any).categories.Yoga.sections.Contact.variants.YogaContact1;
  const commonData = (websiteData as any).common;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    const img = new Image();
    img.src = '/lotus.png';
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.drawImage(img, 0, 0);
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        if (r > 235 && g > 230 && b > 220) {
          data[i + 3] = 0;
        }
      }

      ctx.putImageData(imgData, 0, 0);
      setLotusSrc(canvas.toDataURL('image/png'));
    };

    img.onerror = () => {
      setLotusSrc('/lotus(1).png');
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleCloseModal = () => {
    setIsSubmitted(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <section className="relative bg-[#FAF8F5] text-stone-800 pt-12 pb-24 overflow-hidden">
      
      {/* Background Motifs */}
      <div className="absolute -left-6 sm:left-0 top-12 sm:top-16 w-52 sm:w-64 h-80 sm:h-96 pointer-events-none opacity-45 select-none z-0">
        <svg viewBox="0 0 200 280" fill="none" className="w-full h-full stroke-[#A5BFA8]" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M25 240 C45 170, 85 110, 180 50 C140 110, 105 180, 25 240 Z" />
          <path d="M25 240 C75 180, 130 120, 180 50" strokeWidth="1.2" />
          <path d="M55 220 C55 150, 80 100, 140 45 C120 100, 95 160, 55 220 Z" />
          <path d="M40 230 C55 240, 105 250, 160 210 C120 200, 85 210, 40 230 Z" />
        </svg>
      </div>

      <div className="absolute -right-6 sm:right-0 top-12 sm:top-16 w-52 sm:w-64 h-80 sm:h-96 pointer-events-none opacity-45 select-none z-0 -scale-x-100">
        <svg viewBox="0 0 200 280" fill="none" className="w-full h-full stroke-[#A5BFA8]" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M25 240 C45 170, 85 110, 180 50 C140 110, 105 180, 25 240 Z" />
          <path d="M25 240 C75 180, 130 120, 180 50" strokeWidth="1.2" />
          <path d="M55 220 C55 150, 80 100, 140 45 C120 100, 95 160, 55 220 Z" />
          <path d="M40 230 C55 240, 105 250, 160 210 C120 200, 85 210, 40 230 Z" />
        </svg>
      </div>

      <div className="max-w-[1040px] mx-auto px-6 sm:px-10 space-y-16 sm:space-y-20 relative z-10">
        
        <div className="space-y-8 sm:space-y-10">
          
          <div className="text-center flex flex-col items-center">
            <div className="flex items-center justify-center gap-3.5 mb-3">
              <div className="h-[1.5px] w-12 sm:w-16 bg-[#C59B51]" />
              <div className="w-14 sm:w-16 h-10 sm:h-12 flex items-center justify-center">
                <img
                  src={lotusSrc || '/lotus.png'}
                  alt="Lotus Logo"
                  className="w-full h-full object-contain"
                  style={{
                    filter: 'contrast(115%) brightness(95%)',
                  }}
                />
              </div>
              <div className="h-[1.5px] w-12 sm:w-16 bg-[#C59B51]" />
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#193727] tracking-tight uppercase leading-[1.1] mb-3"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {contactData.title}
            </h1>

            <p className="text-[14.5px] sm:text-[15.5px] text-[#3D5244] max-w-2xl mx-auto leading-[1.65] font-normal">
              {contactData.description}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="block text-[13.5px] font-medium text-[#253E30] mb-1.5">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full px-4 py-3 rounded-[14px] border border-[#D9D3C7] bg-white text-[14px] text-stone-800 placeholder-[#9BA59D] focus:outline-none focus:border-[#2A4432] focus:ring-1 focus:ring-[#2A4432] transition"
                />
              </div>

              <div>
                <label className="block text-[13.5px] font-medium text-[#253E30] mb-1.5">
                  Last Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-4 py-3 rounded-[14px] border border-[#D9D3C7] bg-white text-[14px] text-stone-800 placeholder-[#9BA59D] focus:outline-none focus:border-[#2A4432] focus:ring-1 focus:ring-[#2A4432] transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="block text-[13.5px] font-medium text-[#253E30] mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-[14px] border border-[#D9D3C7] bg-white text-[14px] text-stone-800 placeholder-[#9BA59D] focus:outline-none focus:border-[#2A4432] focus:ring-1 focus:ring-[#2A4432] transition"
                />
              </div>

              <div>
                <label className="block text-[13.5px] font-medium text-[#253E30] mb-1.5">
                  Telephone
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-[14px] border border-[#D9D3C7] bg-white text-[14px] text-stone-800 placeholder-[#9BA59D] focus:outline-none focus:border-[#2A4432] focus:ring-1 focus:ring-[#2A4432] transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-[13.5px] font-medium text-[#253E30] mb-1.5">
                Message
              </label>
              <textarea
                rows={4}
                required
                placeholder="Write your message here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-[14px] border border-[#D9D3C7] bg-white text-[14px] text-stone-800 placeholder-[#9BA59D] focus:outline-none focus:border-[#2A4432] focus:ring-1 focus:ring-[#2A4432] transition"
              />
            </div>

            <div className="flex justify-center pt-3">
              <button
                type="submit"
                className="inline-flex items-center gap-4 bg-[#2A4432] hover:bg-[#1C3224] text-white pl-8 pr-2.5 py-2.5 rounded-full transition-all duration-300 shadow-sm text-[13px] font-semibold tracking-wider uppercase group cursor-pointer"
              >
                <span>SEND MESSAGE</span>
                <span className="w-8 h-8 rounded-full bg-white text-[#C59B51] flex items-center justify-center shrink-0 group-hover:translate-x-0.5 transition-transform shadow-xs">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* Studio Card */}
        <div className="relative overflow-hidden bg-white rounded-[26px] p-6 sm:p-8 border border-[#ECE5D8] shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="absolute -right-4 -bottom-6 w-44 h-44 opacity-25 pointer-events-none stroke-[#2A4432]">
            <svg viewBox="0 0 100 100" fill="none" strokeWidth="1.8" className="w-full h-full">
              <path d="M20 90 C 20 40, 50 10, 90 20 C 80 60, 50 90, 20 90 Z" />
              <path d="M20 90 C 45 60, 60 45, 90 20" strokeWidth="1" />
            </svg>
          </div>

          <div className="md:col-span-6 rounded-[20px] overflow-hidden aspect-[4/3] bg-[#ECE7DF] shadow-xs">
            <img
              src={contactData.studio.image}
              alt={contactData.studio.title}
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="md:col-span-6 space-y-5">
            <div>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#193727] tracking-wide"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {contactData.studio.title}
              </h2>
              <div className="w-12 h-[2px] bg-[#C59B51] mt-2" />
            </div>

            <div className="space-y-4 pt-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#5B7966] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#5B7966]">Our Location</p>
                  <p className="text-[15px] font-medium text-stone-800">{contactData.studio.location || commonData.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#5B7966] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#5B7966]">Call Us</p>
                  <p className="text-[15px] font-medium text-stone-800">{contactData.studio.phone || commonData.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#5B7966] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#5B7966]">Our Address</p>
                  <p className="text-[15px] font-medium text-stone-800">{contactData.studio.address || commonData.address}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Aesthetic Yoga-Themed Thank You Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#173727]/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative bg-[#FAF8F5] border border-[#ECE5D8] rounded-[28px] p-8 sm:p-10 max-w-[500px] w-full text-center shadow-2xl overflow-hidden">
            
            {/* Background Decorative Mandala Motif */}
            <div 
              className="absolute -right-8 -bottom-8 w-44 h-44 opacity-15 pointer-events-none bg-no-repeat bg-contain"
              style={{ backgroundImage: "url('/14oct.png')" }}
            />

            {/* Close Cross Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-stone-200/60 hover:bg-stone-300/80 text-stone-600 flex items-center justify-center transition"
              aria-label="Close"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Golden Lines with Lotus Icon */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[1.5px] w-12 bg-[#C59B51]" />
              <div className="w-12 h-12 rounded-full bg-[#E5ECE5] text-[#1D3E2F] flex items-center justify-center shadow-xs">
                <svg className="w-6 h-6 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3c-2 4-2 11 0 14c2-3 2-10 0-14z" />
                  <path d="M10.5 6C7 8 5.5 11 8 15" />
                  <path d="M13.5 6C17 8 18.5 11 16 15" />
                </svg>
              </div>
              <div className="h-[1.5px] w-12 bg-[#C59B51]" />
            </div>

            <span className="text-[11.5px] uppercase tracking-[0.28em] font-semibold text-[#C59B51] block mb-2">
              Namaste
            </span>

            <h3
              className="text-3xl sm:text-4xl text-[#193727] font-serif mb-3 tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Thank You!
            </h3>

            <p className="text-[14.5px] text-[#3D5244] leading-[1.65] mb-8 font-normal">
              Your message has been received with gratitude. Our team will get back to you shortly to guide your wellness journey.
            </p>

            <button
              onClick={handleCloseModal}
              className="inline-flex items-center justify-center gap-3 bg-[#2A4432] hover:bg-[#1C3224] text-white px-8 py-3 rounded-full transition-all duration-300 text-[13.5px] font-semibold tracking-wider uppercase shadow-sm cursor-pointer"
            >
              <span>Back to Sanctuary</span>
              <span className="w-6 h-6 rounded-full bg-white text-[#2A4432] flex items-center justify-center text-xs">
                ✓
              </span>
            </button>
          </div>
        </div>
      )}

    </section>
  );
}