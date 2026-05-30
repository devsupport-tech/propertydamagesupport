'use client';

import { useState } from 'react';
import Link from 'next/link';
import { siteConfig, services, serviceAreas } from '@/config/site';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  const featuredServices = services.filter((s) => s.featured);

  return (
    <header className="sticky top-0 z-50 glass-card border-b border-gray-200">
      {/* Top Bar - Emergency */}
      <div className="bg-cbrs-emergency text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <span className="hidden sm:inline">
            🚨 24/7 Emergency Response Available
          </span>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="font-bold hover:underline flex items-center gap-2"
          >
            <span>📞</span>
            <span>CALL NOW: {siteConfig.phone}</span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex items-center justify-center w-10 h-10 bg-cbrs-primary rounded-lg group-hover:scale-105 transition-transform">
              <span className="text-white text-xl font-bold">P</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-cbrs-primary leading-tight">
                Property Damage
              </span>
              <span className="text-xs text-cbrs-secondary font-semibold leading-tight">
                Support
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setServicesOpen(!servicesOpen);
                  setAreasOpen(false);
                }}
                className="flex items-center gap-1 text-cbrs-primary hover:text-cbrs-accent font-semibold transition-colors"
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 glass-card rounded-xl shadow-2xl border border-gray-200 p-4 grid grid-cols-1 gap-2">
                  {featuredServices.map((service) => (
                    <Link
                      key={service.id}
                      href={service.href}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 transition-colors group"
                      onClick={() => setServicesOpen(false)}
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform">{service.icon}</span>
                      <div>
                        <div className="font-semibold text-cbrs-primary group-hover:text-cbrs-accent transition-colors">
                          {service.title}
                        </div>
                        <div className="text-sm text-gray-600">
                          {service.description}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Service Areas Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setAreasOpen(!areasOpen);
                  setServicesOpen(false);
                }}
                className="flex items-center gap-1 text-cbrs-primary hover:text-cbrs-accent font-semibold transition-colors"
              >
                Service Areas
                <svg
                  className={`w-4 h-4 transition-transform ${areasOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {areasOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 glass-card rounded-xl shadow-2xl border border-gray-200 p-4">
                  <div className="grid grid-cols-2 gap-2">
                    {serviceAreas.tier1.map((area) => (
                      <Link
                        key={area.slug}
                        href={`/service-areas/${area.slug}`}
                        className="text-cbrs-primary hover:text-cbrs-accent py-1 font-medium transition-colors"
                        onClick={() => setAreasOpen(false)}
                      >
                        {area.name}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <Link
                      href="/service-areas"
                      className="text-cbrs-accent hover:underline text-sm font-semibold"
                      onClick={() => setAreasOpen(false)}
                    >
                      View All Areas →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/insurance-help"
              className="text-cbrs-primary hover:text-cbrs-accent font-semibold transition-colors"
            >
              Insurance Help
            </Link>

            <Link
              href="/about"
              className="text-cbrs-primary hover:text-cbrs-accent font-semibold transition-colors"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-cbrs-primary hover:text-cbrs-accent font-semibold transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="bg-cbrs-emergency hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold transition-all shadow-md hover:scale-105"
            >
              Emergency? Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-cbrs-primary hover:text-cbrs-accent transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="space-y-4">
              <div>
                <div className="font-bold text-cbrs-primary mb-2 text-sm uppercase">Services</div>
                <div className="grid grid-cols-2 gap-2 pl-4">
                  {featuredServices.map((service) => (
                    <Link
                      key={service.id}
                      href={service.href}
                      className="text-gray-700 hover:text-cbrs-accent py-1 font-medium transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.icon} {service.shortTitle}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <div className="font-bold text-cbrs-primary mb-2 text-sm uppercase">
                  Service Areas
                </div>
                <div className="grid grid-cols-2 gap-2 pl-4">
                  {serviceAreas.tier1.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/service-areas/${area.slug}`}
                      className="text-gray-700 hover:text-cbrs-accent py-1 font-medium transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/insurance-help"
                className="block text-cbrs-primary hover:text-cbrs-accent font-semibold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Insurance Help
              </Link>

              <Link
                href="/about"
                className="block text-cbrs-primary hover:text-cbrs-accent font-semibold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>

              <Link
                href="/contact"
                className="block text-cbrs-primary hover:text-cbrs-accent font-semibold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="block bg-cbrs-emergency hover:bg-red-700 text-white text-center px-6 py-3 rounded-full font-bold transition-all shadow-md hover:scale-105"
              >
                📞 Call Now: {siteConfig.phone}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
