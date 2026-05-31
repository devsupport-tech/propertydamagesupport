import React from 'react';
import { siteConfig } from '@/config/site';
import TrustBadges from '@/components/ui/TrustBadges';

interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
  showTrustBadges?: boolean;
}

export default function HeroSection({
  headline = 'Complete Property Damage Solutions in Houston',
  subheadline = 'Professional restoration, inspections, claims support, design services, and expert witness testimony across 8 specialized service pillars',
  showTrustBadges = true,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[700px] lg:min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Sophisticated Background */}
      <div className="absolute inset-0">
        {/* Gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-blue-50" />

        {/* Mesh gradient overlay for depth */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 20%, rgba(37, 99, 235, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 70% 60%, rgba(212, 97, 28, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 90% 90%, rgba(107, 127, 53, 0.08) 0%, transparent 50%)
            `
          }}
        />
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust indicator badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-neutral-200 shadow-sm mb-8">
            <svg className="w-5 h-5 text-success-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium text-neutral-700">
              Trusted by 1,000+ Houston Property Owners
            </span>
          </div>

          {/* Main headline with gradient accent */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
            <span className="text-cbrs-navy-900">Complete Property</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cbrs-terracotta-600 to-cbrs-olive-600 mt-2">
              Damage Solutions
            </span>
          </h1>

          {/* Subheadline with visual separation */}
          <p className="text-xl md:text-2xl text-neutral-600 mb-10 leading-relaxed max-w-3xl mx-auto font-light">
            Professional restoration, inspections, claims support, design services, and expert witness testimony across
            <span className="font-medium text-cbrs-navy-800"> 8 specialized service pillars</span>
          </p>

          {/* Service badges preview */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {['Restoration', 'Inspections', 'Claims', 'Design', 'Legal Support'].map(service => (
              <span
                key={service}
                className="px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-neutral-200 text-sm font-medium text-neutral-700 shadow-sm"
              >
                {service}
              </span>
            ))}
          </div>

          {/* CTAs with better visual hierarchy */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-cbrs-navy-800 hover:bg-cbrs-navy-900 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-250 hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>{siteConfig.phone}</span>
            </a>

            <a
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-neutral-50 text-cbrs-navy-800 font-semibold rounded-xl border-2 border-neutral-200 hover:border-cbrs-navy-800 shadow-sm hover:shadow-md transition-all duration-250"
            >
              <span>Explore Services</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto text-white fill-current">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
        </svg>
      </div>
    </section>
  );
}
