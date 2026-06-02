import { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig, services, serviceAreas } from '@/config/site';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  const featuredServices = services.filter((s) => s.featured);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-neutral-200 shadow-sm">
      {/* Top Bar - Professional */}
      <div className="bg-gradient-to-r from-cbrs-navy-900 to-cbrs-navy-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <span className="hidden sm:inline flex items-center gap-2">
            <svg className="w-4 h-4 text-cbrs-terracotta-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Professional Property Damage Solutions</span>
          </span>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="font-semibold hover:text-cbrs-terracotta-400 flex items-center gap-2 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>{siteConfig.phone}</span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex items-center gap-3 group-hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-gradient-to-br from-cbrs-terracotta-600 to-cbrs-olive-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl font-heading">C</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold text-cbrs-navy-900 leading-tight">
                  CBRS Group
                </span>
                <span className="text-xs text-neutral-600 leading-tight">Property Solutions</span>
              </div>
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
                className="flex items-center gap-1 text-cbrs-navy-900 hover:text-cbrs-terracotta-600 font-semibold transition-colors"
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
                <div className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-neutral-200 p-4 grid grid-cols-1 gap-2">
                  {featuredServices.map((service) => (
                    <Link
                      key={service.id}
                      to={service.href}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-50 transition-all group"
                      onClick={() => setServicesOpen(false)}
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform">{service.icon}</span>
                      <div>
                        <div className="font-semibold text-cbrs-navy-900 group-hover:text-cbrs-terracotta-600 transition-colors">
                          {service.title}
                        </div>
                        <div className="text-sm text-neutral-600 line-clamp-1">
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
                className="flex items-center gap-1 text-cbrs-navy-900 hover:text-cbrs-terracotta-600 font-semibold transition-colors"
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
                <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-neutral-200 p-4">
                  <div className="grid grid-cols-2 gap-2">
                    {serviceAreas.tier1.map((area) => (
                      <Link
                        key={area.slug}
                        to={`/service-areas/${area.slug}`}
                        className="text-cbrs-navy-900 hover:text-cbrs-terracotta-600 py-1 font-medium transition-colors"
                        onClick={() => setAreasOpen(false)}
                      >
                        {area.name}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-neutral-200">
                    <Link
                      to="/service-areas"
                      className="text-cbrs-terracotta-600 hover:text-cbrs-terracotta-700 text-sm font-semibold"
                      onClick={() => setAreasOpen(false)}
                    >
                      View All Areas →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/insurance-help"
              className="text-cbrs-navy-900 hover:text-cbrs-terracotta-600 font-semibold transition-colors"
            >
              Insurance Help
            </Link>

            <Link
              to="/about"
              className="text-cbrs-navy-900 hover:text-cbrs-terracotta-600 font-semibold transition-colors"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-cbrs-navy-900 hover:text-cbrs-terracotta-600 font-semibold transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="bg-cbrs-navy-800 hover:bg-cbrs-navy-900 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>Get Started</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-cbrs-navy-900 hover:text-cbrs-terracotta-600 transition-colors"
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
          <div className="lg:hidden py-4 border-t border-neutral-200">
            <div className="space-y-4">
              <div>
                <div className="font-bold text-cbrs-navy-900 mb-2 text-sm uppercase tracking-wide">Services</div>
                <div className="grid grid-cols-2 gap-2 pl-4">
                  {featuredServices.map((service) => (
                    <Link
                      key={service.id}
                      to={service.href}
                      className="text-neutral-700 hover:text-cbrs-terracotta-600 py-1 font-medium transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.icon} {service.shortTitle}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <div className="font-bold text-cbrs-navy-900 mb-2 text-sm uppercase tracking-wide">
                  Service Areas
                </div>
                <div className="grid grid-cols-2 gap-2 pl-4">
                  {serviceAreas.tier1.map((area) => (
                    <Link
                      key={area.slug}
                      to={`/service-areas/${area.slug}`}
                      className="text-neutral-700 hover:text-cbrs-terracotta-600 py-1 font-medium transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/insurance-help"
                className="block text-cbrs-navy-900 hover:text-cbrs-terracotta-600 font-semibold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Insurance Help
              </Link>

              <Link
                to="/about"
                className="block text-cbrs-navy-900 hover:text-cbrs-terracotta-600 font-semibold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>

              <Link
                to="/contact"
                className="block text-cbrs-navy-900 hover:text-cbrs-terracotta-600 font-semibold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center justify-center gap-2 bg-cbrs-navy-800 hover:bg-cbrs-navy-900 text-white text-center px-6 py-3 rounded-xl font-semibold transition-all shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>Call {siteConfig.phone}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
