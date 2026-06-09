import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig, services, serviceAreas } from '@/config/site';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const featured = services.filter((s) => s.featured);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { to: '/service-areas', label: 'Service Areas' },
    { to: '/insurance-help', label: 'Insurance' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Hazard stripe band at the very top */}
      <div className="hazard-stripe-thin h-1.5" />

      {/* Ticker strip — cream type on navy */}
      <div className="bg-cbrs-navy-900" style={{ color: '#F5F1E8' }}>
        <div className="field-container flex items-center justify-between gap-6 py-2 text-cream">
          <div className="flex items-center gap-3 stencil text-cream">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-cbrs-terracotta-500 pulse-dot shrink-0" />
            <span className="hidden sm:inline">24 / 7 EMERGENCY RESPONSE</span>
            <span className="sm:hidden">24/7 ACTIVE</span>
            <span className="hidden md:inline opacity-40">·</span>
            <span className="hidden md:inline opacity-70">LICENSED · INSURED · IICRC</span>
          </div>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="stencil text-cream hover:text-cbrs-terracotta-400 transition-colors whitespace-nowrap"
          >
            ↪ DISPATCH&nbsp; {siteConfig.phone}
          </a>
        </div>
      </div>

      {/* Main bar — heavy cream */}
      <div
        className={`bg-cream-50 border-b-2 border-cbrs-navy-900 transition-shadow duration-300 ${
          scrolled ? 'shadow-[0_2px_0_rgba(13,34,55,0.08)]' : ''
        }`}
      >
        <div className="field-container flex items-center justify-between gap-6 h-[64px]">
          {/* Wordmark */}
          <Link to="/" className="group flex items-center gap-3">
            <div
              className="flex items-center justify-center w-10 h-10 bg-cbrs-navy-900 group-hover:bg-cbrs-terracotta-600 transition-colors shrink-0"
              style={{ color: '#F5F1E8' }}
            >
              <span
                className="font-display font-black text-2xl leading-none"
                style={{ letterSpacing: '-0.04em', color: '#F5F1E8' }}
              >
                C
              </span>
            </div>
            <div className="flex flex-col justify-center leading-none gap-1">
              <span
                className="font-display font-black text-xl text-cbrs-navy-900 tracking-tight"
                style={{ letterSpacing: '-0.01em' }}
              >
                CBRS&nbsp;GROUP
              </span>
              <span className="stencil text-cbrs-navy-900/55 text-[10px]">
                FIELD DIVISION&nbsp;·&nbsp;HOU TX
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="stencil text-cbrs-navy-900 hover:text-cbrs-terracotta-600 transition-colors relative group"
              >
                <span>{l.label}</span>
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-cbrs-terracotta-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
          </nav>

          {/* CTA — height-matched to the nav bar so it doesn't poke out */}
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="hidden lg:inline-flex items-center h-10 bg-cbrs-terracotta-600 hover:bg-cbrs-navy-900 transition-colors group"
            style={{ color: '#F5F1E8' }}
          >
            <span className="px-4 stencil text-cream border-r border-cream/30 self-stretch flex items-center">
              CALL NOW
            </span>
            <span
              className="px-4 font-display font-bold text-base tracking-tight text-cream self-stretch flex items-center"
              style={{ letterSpacing: '-0.01em' }}
            >
              {siteConfig.phone}
            </span>
          </a>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-cbrs-navy-900 p-2"
            aria-label="Menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2.5">
              {mobileOpen ? (
                <path d="M7 7 L21 21 M21 7 L7 21" />
              ) : (
                <>
                  <path d="M4 9 H24" />
                  <path d="M4 19 H24" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-cream-50 border-b-2 border-cbrs-navy-900">
          <div className="field-container py-8 space-y-8">
            <div>
              <div className="stencil stencil-faint mb-4">SERVICE LINES</div>
              <ul className="border-t border-cbrs-navy-900/20">
                {featured.map((s, i) => (
                  <li key={s.id} className="border-b border-cbrs-navy-900/20">
                    <Link
                      to={s.href}
                      className="flex items-baseline gap-4 py-3 row-hover"
                    >
                      <span className="serial text-cbrs-navy-900/50 text-sm">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-display font-extrabold text-xl text-cbrs-navy-900 uppercase tracking-tight">
                        {s.shortTitle}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="stencil stencil-faint mb-4">METRO HOUSTON</div>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                {serviceAreas.tier1.map((a) => (
                  <li key={a.slug}>
                    <Link
                      to={`/service-areas/${a.slug}`}
                      className="font-condensed font-bold text-lg text-cbrs-navy-700 hover:text-cbrs-terracotta-600 transition-colors"
                    >
                      {a.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t-2 border-cbrs-navy-900 pt-6 space-y-2">
              {navLinks.map((l) => (
                <Link key={l.to} to={l.to} className="block stencil stencil-navy">
                  {l.label}
                </Link>
              ))}
            </div>

            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center justify-between bg-cbrs-terracotta-600 text-cream px-5 py-4"
            >
              <span className="stencil stencil-cream">CALL DISPATCH</span>
              <span className="font-display font-bold text-lg">{siteConfig.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
