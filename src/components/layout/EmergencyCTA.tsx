'use client';

import React, { useState, useEffect } from 'react';
import { siteConfig } from '@/config/site';

export default function EmergencyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 200px
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile: Sticky bottom bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="flex items-center justify-center gap-3 bg-cbrs-emergency hover:bg-red-700 text-white px-6 py-4 shadow-lg transition-colors"
          aria-label="Call for emergency service"
        >
          <span className="text-2xl animate-pulse" aria-hidden="true">
            🚨
          </span>
          <div className="flex flex-col items-start">
            <span className="text-xs font-medium uppercase tracking-wide">Emergency? Call Now</span>
            <span className="text-lg font-bold">{siteConfig.phone}</span>
          </div>
        </a>
      </div>

      {/* Desktop: Floating button (bottom-right) */}
      <div
        className={`hidden md:block fixed bottom-8 right-8 z-50 transition-all duration-300 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
      >
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="flex items-center gap-3 bg-cbrs-emergency hover:bg-red-700 text-white px-6 py-4 rounded-full shadow-2xl transition-all hover:scale-105 group"
          aria-label="Call for emergency service"
        >
          <span className="text-2xl group-hover:scale-110 transition-transform" aria-hidden="true">
            📞
          </span>
          <div className="flex flex-col items-start">
            <span className="text-xs font-medium uppercase tracking-wide">24/7 Emergency</span>
            <span className="text-lg font-bold">{siteConfig.phone}</span>
          </div>
        </a>
      </div>
    </>
  );
}
