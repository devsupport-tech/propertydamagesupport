import React from 'react';
import { siteConfig } from '@/config/site';
import TrustBadges from '@/components/ui/TrustBadges';
import FadeIn from '@/components/animations/FadeIn';

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
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden bg-cbrs-navy-900">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cbrs-navy-900 via-cbrs-navy-800 to-cbrs-navy-900 opacity-50" />

      <div className="container relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust indicator badge */}
          <FadeIn delay={100} direction="down" className="text-center w-full">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-sm mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-cbrs-terracotta-600" />
              <span className="text-sm font-medium text-white/80">
                Professional Restoration Services · Houston, TX
              </span>
            </div>
          </FadeIn>

          {/* Main headline with orange accent */}
          <FadeIn delay={200} className="text-center w-full">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-white text-center">
              Water & Fire<br />
              Damage Restoration<br />
              <span className="text-cbrs-terracotta-600">Done Right</span>
            </h1>
          </FadeIn>

          {/* Subheadline */}
          <FadeIn delay={300} className="text-center w-full">
            <p className="text-base md:text-lg text-white/60 mb-8 leading-relaxed max-w-2xl mx-auto text-center">
              Complete property damage solutions — from water extraction to fire damage rebuild. One dedicated team managing your entire project.
            </p>
          </FadeIn>

          {/* Service stats */}
          <FadeIn delay={400} className="w-full">
            <div className="flex flex-wrap items-center justify-center gap-8 mb-8 border-t border-white/10 pt-4 w-full">
              {[
                { value: '9', label: 'Service Pillars' },
                { value: '100+', label: 'Projects Completed' },
                { value: 'Houston', label: 'Service Area' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading text-xl md:text-2xl font-bold text-cbrs-terracotta-600">
                    {stat.value}
                  </p>
                  <p className="text-xs text-white/50 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={500} className="w-full">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-cbrs-terracotta-600 hover:bg-cbrs-terracotta-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-250 hover:scale-105"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>{siteConfig.phone}</span>
              </a>

              <a
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-transparent hover:bg-white/5 text-white font-semibold rounded-lg border border-white/20 hover:border-white/40 shadow-sm hover:shadow-md transition-all duration-250"
              >
                <span>Request Free Estimate</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
