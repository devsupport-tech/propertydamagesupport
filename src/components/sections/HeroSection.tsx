import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '@/config/site';
import TrustBadges from '@/components/ui/TrustBadges';

interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
  showTrustBadges?: boolean;
}

export default function HeroSection({
  headline = 'Your Partner in Property Recovery',
  subheadline = 'Comprehensive property damage solutions including restoration, inspections, claims support, and design services',
  showTrustBadges = true,
}: HeroSectionProps) {
  return (
    <section className="relative bg-cbrs-navy-900 pt-20 pb-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cbrs-navy-900 via-cbrs-navy-800 to-cbrs-navy-900 opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Trust badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-cbrs-terracotta-600" />
              <span className="text-sm font-medium text-white/80">
                Professional Restoration Services · Houston, TX
              </span>
            </div>
          </div>

          {/* Main headline */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight text-white mb-6">
            Water & Fire<br />
            Damage Restoration<br />
            <span className="text-cbrs-terracotta-600">Done Right</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-center text-white/60 max-w-2xl mx-auto mb-8">
            CBRS Group delivers concierge-level restoration services — from water extraction to complete fire damage rebuild. One dedicated team managing your entire project.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-cbrs-terracotta-600 px-8 py-4 text-base font-bold text-white hover:bg-cbrs-terracotta-700 transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {siteConfig.phone}
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-transparent px-8 py-4 text-base font-semibold text-white hover:bg-white/5 hover:border-white/40 transition-colors"
            >
              Request Free Estimate
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap items-center justify-center gap-10 pt-6 border-t border-white/10">
            {[
              { value: '1', label: 'Point of Contact' },
              { value: '9', label: 'Service Lines' },
              { value: 'Houston', label: 'Service Area' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-2xl md:text-3xl font-bold text-cbrs-terracotta-600">
                  {stat.value}
                </p>
                <p className="text-xs text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
