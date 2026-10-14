'use client';

import { useEffect, useState } from 'react';
import websiteData from '@/data/websiteData.json';

const featureIcons = [
  (
    <svg key="1" className="w-7 h-7 stroke-[#1D3E2F]" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  (
    <svg key="2" className="w-7 h-7 stroke-[#1D3E2F]" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3" />
      <circle cx="16" cy="10" r="2.5" />
      <path d="M4 19c0-2.8 2.2-5 5-5s5 2.2 5 5" />
      <path d="M14 14.2c1.8.3 3.5 1.5 4 3.8" />
    </svg>
  ),
  (
    <svg key="3" className="w-7 h-7 stroke-[#1D3E2F]" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3c-2 4-2 11 0 14c2-3 2-10 0-14z" />
      <path d="M10.5 6C7 8 5.5 11 8 15" />
      <path d="M13.5 6C17 8 18.5 11 16 15" />
    </svg>
  ),
  (
    <svg key="4" className="w-7 h-7 stroke-[#1D3E2F]" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
];

const whyIcons = [
  (
    <svg key="w1" className="w-7 h-7 stroke-[#1D3E2F]" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3c-2 4-2 11 0 14c2-3 2-10 0-14z" />
      <path d="M10.5 6C7 8 5.5 11 8 15" />
      <path d="M13.5 6C17 8 18.5 11 16 15" />
    </svg>
  ),
  (
    <svg key="w2" className="w-7 h-7 stroke-[#1D3E2F]" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  (
    <svg key="w3" className="w-7 h-7 stroke-[#1D3E2F]" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4C9.5 8 9.5 16 12 20C14.5 16 14.5 8 12 4Z" />
      <path d="M10 7C6 9 5 13 8 18" />
      <path d="M14 7C18 9 19 13 16 18" />
    </svg>
  ),
  (
    <svg key="w4" className="w-7 h-7 stroke-[#1D3E2F]" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="6" r="3" />
      <path d="M6 19c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M8 21h8" />
      <path d="M5 16l3-1" />
      <path d="M19 16l-3-1" />
    </svg>
  )
];

export default function BookAppointmentSection() {
  const [lotusSrc, setLotusSrc] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const appointmentData = (websiteData as any).categories.Yoga.sections.Appointment.variants.YogaAppointment1;
  const commonData = (websiteData as any).common;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    specialRequest: '',
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

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      specialRequest: '',
    });
    setIsSubmitted(false);
  };

  return (
    <section className="bg-[#FAF8F5] pt-10 pb-20 px-6 sm:px-10 lg:px-12 text-stone-800">
      <div className="max-w-[1360px] mx-auto space-y-14 lg:space-y-16">

        <div className="flex flex-col items-center text-center">
          <div className="w-16 sm:w-20 h-12 mb-2 flex items-center justify-center">
            <img
              src={lotusSrc || '/lotus.png'}
              alt="Lotus Logo"
              className="w-full h-full object-contain"
              style={{
                filter: 'contrast(115%) brightness(95%)',
              }}
            />
          </div>

          <div className="flex items-center gap-3.5 mb-3">
            <div className="h-[1.5px] w-14 bg-[#C59B51]" />
            <span className="text-[12px] uppercase tracking-[0.28em] font-semibold text-[#2D4536]">
              {appointmentData.badge}
            </span>
            <div className="h-[1.5px] w-14 bg-[#C59B51]" />
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-[58px] leading-[1.08] text-[#143725] font-bold tracking-tight mb-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {appointmentData.title}
          </h1>

          <p className="text-[14px] sm:text-[15px] text-[#3D5244] leading-relaxed max-w-xl font-normal">
            {appointmentData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          <div className="lg:col-span-5 relative rounded-[26px] overflow-hidden shadow-sm bg-[#ECE7DF] min-h-[460px] lg:min-h-[540px]">
            <img
              src={appointmentData.heroImage}
              alt={appointmentData.title}
              className="w-full h-full object-cover object-center"
            />
            
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-[270px] bg-[#2A4432]/95 backdrop-blur-md text-white p-5 rounded-[20px] shadow-lg border border-white/10">
              <div className="w-8 h-8 mb-2 flex items-center justify-start">
                <img
                  src={lotusSrc || '/lotus.png'}
                  alt="Lotus Motif"
                  className="w-full h-full object-contain brightness-200"
                />
              </div>
              <h4
                className="text-[17px] font-semibold leading-tight text-white mb-2"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {appointmentData.floatingBadge.title}
              </h4>
              <p className="text-[12px] text-stone-200 leading-relaxed font-normal">
                {appointmentData.floatingBadge.subtitle}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white rounded-[26px] p-7 sm:p-9 shadow-sm border border-[#ECE5D8] flex flex-col justify-center">
            {isSubmitted ? (
              <div className="flex flex-col items-center text-center py-10 px-4">
                <div className="w-16 h-16 rounded-full bg-[#E5ECE5] text-[#2A4432] flex items-center justify-center mb-5 shadow-xs">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>

                <div className="flex items-center gap-2.5 mb-2">
                  <div className="h-[1px] w-8 bg-[#C59B51]" />
                  <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#C59B51]">
                    Confirmation
                  </span>
                  <div className="h-[1px] w-8 bg-[#C59B51]" />
                </div>

                <h3
                  className="text-3xl sm:text-4xl text-[#143725] font-bold mb-3 tracking-tight"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Appointment Booked Successfully!
                </h3>

                <p className="text-[14.5px] text-[#475C4E] max-w-[460px] leading-relaxed mb-8 font-normal">
                  Thank you, <span className="font-semibold text-[#143725]">{formData.fullName}</span>. We have received your booking request for{' '}
                  <span className="font-semibold text-[#143725]">{formData.service || 'your yoga session'}</span>. Our team will contact you shortly to confirm your schedule.
                </p>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-3 bg-[#2A4432] hover:bg-[#1E3425] text-white px-7 py-2.5 rounded-full text-[13.5px] font-medium transition shadow-sm cursor-pointer"
                >
                  <span>Book Another Appointment</span>
                  <span>→</span>
                </button>
              </div>
            ) : (
              <>
                <h2
                  className="text-2xl sm:text-3xl text-[#143725] font-bold"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Book Your Appointment
                </h2>
                <div className="w-10 h-[2px] bg-[#C59B51] my-3" />
                <p className="text-[13px] text-[#475C4E] mb-6 leading-relaxed">
                  Fill in the details below to schedule your yoga class or personalized session. Our team will confirm your booking shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[12.5px] font-semibold text-[#1F392D] mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </span>
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 text-[13.5px] text-stone-800 focus:outline-none focus:border-[#2A4432] focus:ring-1 focus:ring-[#2A4432] transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12.5px] font-semibold text-[#1F392D] mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect width="20" height="16" x="2" y="4" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                          </svg>
                        </span>
                        <input
                          type="email"
                          required
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 text-[13.5px] text-stone-800 focus:outline-none focus:border-[#2A4432] focus:ring-1 focus:ring-[#2A4432] transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[12.5px] font-semibold text-[#1F392D] mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                        </span>
                        <input
                          type="tel"
                          required
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 text-[13.5px] text-stone-800 focus:outline-none focus:border-[#2A4432] focus:ring-1 focus:ring-[#2A4432] transition"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12.5px] font-semibold text-[#1F392D] mb-1.5">
                      Select Service <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 3c-2 4-2 11 0 14c2-3 2-10 0-14z" />
                          <path d="M10.5 6C7 8 5.5 11 8 15" />
                          <path d="M13.5 6C17 8 18.5 11 16 15" />
                        </svg>
                      </span>
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full pl-10 pr-8 py-2.5 rounded-xl border border-stone-200 text-[13.5px] text-stone-700 bg-white focus:outline-none focus:border-[#2A4432] focus:ring-1 focus:ring-[#2A4432] appearance-none transition"
                      >
                        <option value="">Choose a service</option>
                        {appointmentData.servicesOptions.map((srv: string, sIdx: number) => (
                          <option key={sIdx} value={srv}>
                            {srv}
                          </option>
                        ))}
                      </select>
                      <span className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-stone-400">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12.5px] font-semibold text-[#1F392D] mb-1.5">
                        Preferred Date <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect width="18" height="18" x="3" y="4" rx="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                        </span>
                        <input
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 text-[13.5px] text-stone-700 focus:outline-none focus:border-[#2A4432] focus:ring-1 focus:ring-[#2A4432] transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[12.5px] font-semibold text-[#1F392D] mb-1.5">
                        Preferred Time <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                        </span>
                        <select
                          required
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="w-full pl-10 pr-8 py-2.5 rounded-xl border border-stone-200 text-[13.5px] text-stone-700 bg-white focus:outline-none focus:border-[#2A4432] focus:ring-1 focus:ring-[#2A4432] appearance-none transition"
                        >
                          <option value="">Select time</option>
                          <option value="morning">Morning (06:00 AM - 09:00 AM)</option>
                          <option value="afternoon">Afternoon (11:00 AM - 01:00 PM)</option>
                          <option value="evening">Evening (05:00 PM - 08:00 PM)</option>
                        </select>
                        <span className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-stone-400">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12.5px] font-semibold text-[#1F392D] mb-1.5">
                      Special Request (Optional)
                    </label>
                    <div className="relative">
                      <span className="absolute top-3 left-3.5 text-stone-400 pointer-events-none">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="16" y1="13" x2="8" y2="13" />
                          <line x1="16" y1="17" x2="8" y2="17" />
                        </svg>
                      </span>
                      <textarea
                        rows={2}
                        placeholder="Let us know if you have any specific requirement..."
                        value={formData.specialRequest}
                        onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 text-[13.5px] text-stone-800 focus:outline-none focus:border-[#2A4432] focus:ring-1 focus:ring-[#2A4432] transition"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-between bg-[#2A4432] hover:bg-[#1E3425] text-white pl-6 pr-2 py-2 rounded-full transition-all duration-300 shadow-sm group text-[13.5px] font-medium cursor-pointer"
                    >
                      <span className="flex-1 text-center pl-4 tracking-wide">
                        Book Appointment
                      </span>
                      <span className="w-8 h-8 rounded-full bg-white text-[#2A4432] flex items-center justify-center shrink-0 group-hover:translate-x-0.5 transition-transform shadow-xs">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-2">
          {appointmentData.features.map((feat: any, idx: number) => (
            <div key={idx} className="flex items-center gap-3.5 bg-white p-4 sm:p-5 rounded-[20px] border border-[#ECE5D8] shadow-xs">
              <div className="w-13 h-13 rounded-full bg-[#E5ECE5] flex items-center justify-center shrink-0">
                {featureIcons[idx % featureIcons.length]}
              </div>
              <div>
                <h4
                  className="text-[15px] font-semibold text-[#143725]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {feat.title}
                </h4>
                <p className="text-[12px] text-[#475C4E] mt-0.5 leading-snug">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch pt-2">
          
          <div className="lg:col-span-8 space-y-6">
            <div>
              <h2
                className="text-3xl sm:text-4xl text-[#143725] font-bold tracking-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Why Book a Yoga Session?
              </h2>
              <div className="w-10 h-[2px] bg-[#C59B51] mt-2.5" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-1">
              {appointmentData.whyPoints.map((item: any, idx: number) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#E5ECE5] flex items-center justify-center shrink-0 mt-0.5">
                    {whyIcons[idx % whyIcons.length]}
                  </div>
                  <div>
                    <h3
                      className="text-[18px] font-semibold text-[#143725] leading-snug"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[13px] text-[#475C4E] mt-1.5 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#EFECE6]/80 rounded-[24px] p-7 sm:p-8 border border-[#E0D9CC] flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="w-12 h-10 mb-3 flex items-center justify-start">
                <img
                  src={lotusSrc || '/lotus.png'}
                  alt="Lotus Motif"
                  className="w-full h-full object-contain"
                  style={{
                    filter: 'contrast(115%) brightness(95%)',
                  }}
                />
              </div>

              <h3
                className="text-2xl text-[#143725] font-bold mb-2"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Need Assistance?
              </h3>
              <p className="text-[13px] text-[#475C4E] mb-6 leading-relaxed">
                Have questions or need help with booking? Our team is here to assist you.
              </p>

              <div className="space-y-4 text-[13.5px] text-[#1F392D]">
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#2A4432] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <span className="font-semibold">{commonData.phone}</span>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#2A4432] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <span className="font-semibold truncate">{commonData.email}</span>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#2A4432] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <span className="font-semibold">{commonData.address}</span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-24 h-24 opacity-25 pointer-events-none stroke-[#2A4432]">
              <svg viewBox="0 0 100 100" fill="none" strokeWidth="2">
                <path d="M20 90 C 20 40, 50 10, 90 20 C 80 60, 50 90, 20 90 Z" />
                <path d="M20 90 C 45 60, 60 45, 90 20" />
              </svg>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}