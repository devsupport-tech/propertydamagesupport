import { Link } from 'react-router-dom';
import { siteConfig, services, serviceAreas } from '@/config/site';
import ShieldBadge from '@/components/ui/ShieldBadge';

export default function Footer() {
  const year = new Date().getFullYear();
  const featured = services.filter((s) => s.featured).slice(0, 6);

  return (
    <footer className="relative tex-asphalt text-cream overflow-hidden">
      <div className="hazard-stripe-thin h-1.5" />
      <div className="absolute inset-0 tex-blueprint pointer-events-none" />

      <div className="relative field-container pt-16 pb-10">
        {/* Wordmark + badge */}
        <div className="border-b-2 border-cream/25 pb-10 mb-10">
          <div className="grid grid-cols-12 gap-6 lg:gap-10 items-end">
            <div className="col-span-12 lg:col-span-8">
              <div className="stencil stencil-terra mb-3">
                ✦ FIELD DIVISION · HOUSTON · TEXAS
              </div>
              <div
                className="font-display font-black text-cream uppercase leading-[0.88]"
                style={{
                  fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                  letterSpacing: '-0.03em',
                }}
              >
                CBRS{' '}
                <span className="text-cbrs-terracotta-500">GROUP.</span>
              </div>
              <div className="stencil stencil-cream-faint mt-3">
                EST. CBRS · LICENSED · INSURED · BONDED · IICRC CERTIFIED
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 flex lg:justify-end">
              <div className="text-cbrs-terracotta-500">
                <ShieldBadge
                  size={150}
                  serial="01"
                  topText="ALWAYS ON · LIVE 24/7"
                  bottomText="HOU · TX · CBRS"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Dispatch CTA bar */}
        <div className="mb-10">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="group block border-2 border-cbrs-terracotta-500 hover:bg-cbrs-terracotta-600 hover:border-cbrs-terracotta-600 transition-colors"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="inline-block h-2 w-2 rounded-full bg-cbrs-terracotta-500 pulse-dot group-hover:bg-cream" />
                <span className="stencil stencil-cream">EMERGENCY DISPATCH</span>
              </div>
              <div
                className="font-display font-black text-cream tracking-tight"
                style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', letterSpacing: '-0.02em' }}
              >
                {siteConfig.phone}
              </div>
              <span className="stencil stencil-cream-faint group-hover:text-cream transition-colors">
                ↪ CALL NOW
              </span>
            </div>
          </a>
        </div>

        {/* Four columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          {/* Practice */}
          <div className="md:col-span-3">
            <div className="stencil stencil-cream-faint mb-4">PRACTICE</div>
            <p className="text-cream/80 text-sm leading-relaxed">
              Comprehensive property damage solutions including restoration,
              inspections, claims support, and design services.
            </p>
            <div className="mt-5 space-y-1 stencil stencil-cream-faint">
              <div><span className="text-cream/40">EM</span>&nbsp; {siteConfig.email}</div>
              <div><span className="text-cream/40">TX</span>&nbsp; HOUSTON METRO</div>
              <div><span className="text-cream/40">HR</span>&nbsp; 24 / 7 / 365</div>
            </div>
          </div>

          {/* Service lines */}
          <div className="md:col-span-4">
            <div className="stencil stencil-cream-faint mb-4">SERVICE LINES</div>
            <ul className="space-y-2.5">
              {featured.map((s, i) => (
                <li key={s.id}>
                  <Link
                    to={s.href}
                    className="group flex items-baseline gap-3 hover:text-cbrs-terracotta-500 transition-colors"
                  >
                    <span className="font-mono text-[10px] text-cream/40 group-hover:text-cbrs-terracotta-500">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-condensed font-bold text-base text-cream uppercase tracking-tight">
                      {s.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div className="md:col-span-3">
            <div className="stencil stencil-cream-faint mb-4">METRO HOUSTON</div>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {serviceAreas.tier1.map((a) => (
                <li key={a.slug}>
                  <Link
                    to={`/service-areas/${a.slug}`}
                    className="stencil stencil-cream hover:text-cbrs-terracotta-500 transition-colors"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/service-areas"
              className="stencil stencil-terra mt-4 inline-block hover:text-cream transition-colors"
            >
              ALL AREAS →
            </Link>
          </div>

          {/* Navigate */}
          <div className="md:col-span-2">
            <div className="stencil stencil-cream-faint mb-4">NAVIGATE</div>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/insurance-help', label: 'Insurance' },
                { to: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="stencil stencil-cream hover:text-cbrs-terracotta-500 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Colophon */}
      <div className="relative border-t border-cream/15">
        <div className="field-container py-5 flex flex-wrap items-center justify-between gap-y-3 stencil stencil-cream-faint">
          <div>© {year} &nbsp; CBRS GROUP &nbsp;·&nbsp; ALL RIGHTS RESERVED</div>
          <div className="flex items-center gap-4">
            <span>HOU · TX · 29.76°N 95.37°W</span>
            <span className="opacity-50">·</span>
            <span>FIELD DIVISION</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
