import { Link } from 'react-router-dom';
import { services } from '@/config/site';
import { glyphById } from '@/components/icons/ServiceGlyph';

interface ServicesGridProps {
  title?: string;
  subtitle?: string;
  featuredOnly?: boolean;
  columns?: 2 | 3;
}

export default function ServicesGrid({
  title = 'Our Service Pillars',
  subtitle = 'Complete property damage solutions across 9 specialized service areas',
  featuredOnly = true,
}: ServicesGridProps) {
  const items = featuredOnly ? services.filter((s) => s.featured) : [...services];

  return (
    <section className="relative bg-cream-50 py-16 md:py-24">
      <div className="absolute inset-0 tex-concrete opacity-30 pointer-events-none" />

      <div className="relative field-container">
        {/* Section header */}
        <div className="grid grid-cols-12 gap-6 lg:gap-10 mb-12 items-start">
          <div className="col-span-12 lg:col-span-3">
            <div className="stencil stencil-terra mb-2">✦ SECTION II</div>
            <div className="serial text-cbrs-navy-900 text-xl font-semibold">
              CAPABILITY <span className="text-cbrs-navy-900/40">/</span> SHEET
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <h2
              className="font-display font-black text-cbrs-navy-900 uppercase"
              style={{
                fontSize: 'clamp(1.875rem, 3.6vw, 3rem)',
                lineHeight: '0.95',
                letterSpacing: '-0.02em',
              }}
            >
              OUR SERVICE <span className="text-cbrs-terracotta-600">PILLARS</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:pt-1">
            <p className="text-cbrs-navy-700 text-sm md:text-base leading-relaxed">
              {subtitle}. <strong>Nine disciplines, one accountable team.</strong>
            </p>
          </div>
        </div>

        {/* Hazard divider */}
        <div className="hazard-stripe-thin h-1.5 mb-10" />

        {/* Service tiles — chunky equal-height grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l-2 border-t-2 border-cbrs-navy-900">
          {items.map((s, idx) => {
            const Glyph = glyphById[s.id];
            const num = String(idx + 1).padStart(2, '0');
            return (
              <Link
                key={s.id}
                to={s.href}
                className="group relative flex flex-col bg-cream-50 hover:bg-cbrs-navy-900 border-r-2 border-b-2 border-cbrs-navy-900 p-7 md:p-8 transition-colors duration-200 overflow-hidden"
              >
                {/* Hover hazard accent (top-right corner triangle) */}
                <span
                  className="absolute top-0 right-0 w-12 h-12 hazard-stripe opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
                />

                {/* Header row */}
                <div className="flex items-start justify-between mb-6">
                  <div className="text-cbrs-navy-900 group-hover:text-cbrs-terracotta-500 transition-colors">
                    {Glyph ? <Glyph width={28} height={28} /> : null}
                  </div>
                  <div
                    className="font-display font-black text-cbrs-navy-900/15 group-hover:text-cream/15 leading-none transition-colors"
                    style={{ fontSize: '2.5rem', letterSpacing: '-0.04em' }}
                  >
                    {num}
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="font-display font-black text-cbrs-navy-900 group-hover:text-cream uppercase leading-[0.95] tracking-tight transition-colors mb-3"
                  style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)' }}
                >
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-cbrs-navy-700 group-hover:text-cream/75 text-sm leading-relaxed transition-colors flex-grow">
                  {s.description}
                </p>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-cbrs-navy-900/20 group-hover:border-cream/20 flex items-center justify-between transition-colors">
                  <span className="stencil text-cbrs-navy-900/50 group-hover:text-cream/60 transition-colors">
                    LINE {num} / 09
                  </span>
                  <span className="inline-flex items-center gap-2 stencil text-cbrs-terracotta-600 group-hover:text-cbrs-terracotta-500 transition-colors">
                    SPEC
                    <svg width="20" height="9" viewBox="0 0 22 10" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
                      <path d="M0 5 H20 M16 1 L20 5 L16 9" />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Footer note */}
        <div className="flex items-center justify-between pt-6">
          <div className="stencil stencil-faint">END OF SECTION II</div>
          <Link
            to="/contact"
            className="stencil stencil-navy hover:text-cbrs-terracotta-600 transition-colors"
          >
            ENGAGE A SERVICE LINE →
          </Link>
        </div>
      </div>
    </section>
  );
}
