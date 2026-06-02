import { Link } from 'react-router-dom';
import { siteConfig } from '@/config/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cbrs-navy-900 text-neutral-300">
      {/* Contact CTA Bar */}
      <div className="bg-gradient-to-r from-cbrs-navy-800 to-cbrs-navy-900 text-white py-12 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            Ready to Get Started?
          </h2>
          <p className="mb-8 text-lg text-neutral-300 max-w-2xl mx-auto">
            Contact us today for professional property damage solutions tailored to your needs
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center gap-3 bg-cbrs-terracotta-600 hover:bg-cbrs-terracotta-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>{siteConfig.phone}</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg border-2 border-white/20 hover:border-white/30 transition-all"
            >
              <span>Request Estimate</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <p className="mt-6 text-sm text-neutral-400">
            Available 24/7 • Free Estimates • Insurance Accepted
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              CBRS Group
            </h3>
            <p className="text-sm mb-4">
              Comprehensive property damage solutions including restoration, inspections, claims support, and design services.
            </p>
            <p className="text-sm">
              <strong className="text-white">Phone:</strong> {siteConfig.phone}
            </p>
            <p className="text-sm">
              <strong className="text-white">Email:</strong> {siteConfig.email}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-cbrs-terracotta-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-cbrs-terracotta-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-cbrs-terracotta-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/insurance-help" className="text-sm hover:text-cbrs-terracotta-400 transition-colors">
                  Insurance Help
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Service Areas</h3>
            <p className="text-sm">
              Proudly serving the Greater Houston area including:
            </p>
            <p className="text-sm mt-2">
              Houston, Katy, Sugar Land, Pearland, The Woodlands, Cypress, and surrounding areas
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800 text-center text-sm">
          <p>
            &copy; {currentYear} CBRS Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
