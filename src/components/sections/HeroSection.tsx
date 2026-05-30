import React from 'react';
import { siteConfig } from '@/config/site';
import TrustBadges from '@/components/ui/TrustBadges';

interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
  showTrustBadges?: boolean;
}

export default function HeroSection({
  headline = 'Property Damage? We\'re Here 24/7',
  subheadline = 'Emergency water damage, fire damage, and storm damage restoration services in Houston',
  showTrustBadges = true,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center px-6 py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50 opacity-60" />

      <div className="container relative z-10 max-w-5xl mx-auto text-center">
        {/* Emergency badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass-card rounded-full">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cbrs-emergency opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cbrs-emergency"></span>
          </span>
          <span className="text-sm font-semibold text-cbrs-emergency uppercase tracking-wide">
            Available Now
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cbrs-primary mb-6 leading-tight">
          {headline}
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          {subheadline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cbrs-emergency hover:bg-red-700 text-white text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105 hover:shadow-xl w-full sm:w-auto"
          >
            <span className="text-2xl" aria-hidden="true">
              📞
            </span>
            Call Now: {siteConfig.phone}
          </a>

          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-cbrs-primary text-lg font-semibold rounded-full border-2 border-cbrs-primary shadow-lg transition-all hover:scale-105 w-full sm:w-auto"
          >
            Get Free Estimate
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Trust badges */}
        {showTrustBadges && (
          <div className="mt-12">
            <TrustBadges />
          </div>
        )}
      </div>
    </section>
  );
}
