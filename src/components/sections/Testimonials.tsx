const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Katy, TX',
    text: 'Our kitchen flooded at 2 AM and they were here within 45 minutes! The team was professional, efficient, and worked directly with our insurance company. Highly recommend!',
    service: 'Water Damage',
  },
  {
    name: 'Michael R.',
    location: 'Sugar Land, TX',
    text: 'After a fire in our garage, we were devastated. Property Damage Support handled everything from emergency board-up to final restoration. They made a terrible situation manageable.',
    service: 'Fire Damage',
  },
  {
    name: 'Jennifer L.',
    location: 'Houston, TX',
    text: 'Hurricane damage to our roof and multiple rooms. The insurance process was so confusing until these guys stepped in. They handled all the paperwork and got us fully covered.',
    service: 'Storm Damage',
  },
  {
    name: 'David P.',
    location: 'Pearland, TX',
    text: 'Found mold in our attic and basement. They did a thorough inspection, explained everything clearly, and completed the remediation quickly. No mold since!',
    service: 'Mold Remediation',
  },
  {
    name: 'Amanda K.',
    location: 'The Woodlands, TX',
    text: 'Burst pipe caused major damage while we were on vacation. They responded immediately, dried everything out, and had repairs done before we got home. Lifesavers!',
    service: 'Water Damage',
  },
  {
    name: 'Robert J.',
    location: 'Cypress, TX',
    text: 'Commercial property with extensive water damage. They worked around our business hours and had us back to normal operations in 5 days. Professional and efficient.',
    service: 'Commercial Services',
  },
];

export default function Testimonials() {
  const featured = testimonials[0];
  const rest = testimonials.slice(1);

  return (
    <section className="relative bg-cream-50 py-16 md:py-24">
      <div className="absolute inset-0 tex-concrete opacity-30 pointer-events-none" />
      <div className="relative field-container">
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 lg:gap-10 mb-12 border-b-2 border-cbrs-navy-900 pb-8 items-end">
          <div className="col-span-12 lg:col-span-4">
            <div className="stencil stencil-terra mb-2">✦ SECTION IV</div>
            <div className="serial text-cbrs-navy-900 text-xl font-semibold">
              FIELD <span className="text-cbrs-navy-900/40">/</span> REPORTS
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <h2
              className="font-display font-black text-cbrs-navy-900 uppercase"
              style={{
                fontSize: 'clamp(1.875rem, 3.6vw, 3rem)',
                lineHeight: '0.95',
                letterSpacing: '-0.02em',
              }}
            >
              WHAT OUR <span className="text-cbrs-terracotta-600">CLIENTS</span> SAY
            </h2>
          </div>
        </div>

        {/* Featured pull-quote */}
        <div className="grid grid-cols-12 gap-6 lg:gap-10 mb-14 items-start">
          <div className="col-span-12 lg:col-span-2">
            <div
              className="font-display font-black text-cbrs-terracotta-600 leading-none"
              style={{ fontSize: 'clamp(4rem, 7vw, 6rem)' }}
            >
              &ldquo;
            </div>
            <div className="stencil stencil-faint mt-1">REPORT No. 01</div>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <blockquote
              className="font-condensed text-cbrs-navy-900 uppercase tracking-tight"
              style={{
                fontSize: 'clamp(1.25rem, 2.4vw, 2rem)',
                lineHeight: '1.1',
                fontWeight: 700,
              }}
            >
              {featured.text}
            </blockquote>
            <div className="mt-6 border-t-2 border-cbrs-navy-900 pt-3 flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <div className="stencil stencil-navy">{featured.name.toUpperCase()}</div>
                <div className="stencil stencil-faint">{featured.location.toUpperCase()}</div>
              </div>
              <div className="stencil stencil-terra">SERVICE LINE · {featured.service.toUpperCase()}</div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-2 flex items-start lg:justify-end">
            <div className="stamp text-cbrs-terracotta-700 text-sm">
              VERIFIED
            </div>
          </div>
        </div>

        {/* Hazard divider */}
        <div className="hazard-stripe-thin h-1.5 mb-10" />

        {/* Rest as a sharp-cornered grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l-2 border-t-2 border-cbrs-navy-900">
          {rest.map((t, i) => (
            <article
              key={i}
              className="flex flex-col border-r-2 border-b-2 border-cbrs-navy-900 p-7 bg-cream-50 hover:bg-cbrs-navy-900 group transition-colors duration-200"
            >
              <div className="flex items-baseline justify-between mb-4">
                <div className="stencil text-cbrs-navy-900/60 group-hover:text-cream/60 transition-colors">
                  REPORT No. {String(i + 2).padStart(2, '0')}
                </div>
                <div className="stencil stencil-terra">★★★★★</div>
              </div>
              <blockquote
                className="font-condensed text-cbrs-navy-900 group-hover:text-cream uppercase tracking-tight transition-colors flex-grow"
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: '1.25',
                  fontWeight: 600,
                }}
              >
                {t.text}
              </blockquote>
              <div className="mt-5 border-t border-cbrs-navy-900/20 group-hover:border-cream/20 pt-3 transition-colors">
                <div className="stencil stencil-navy group-hover:text-cream transition-colors">
                  {t.name.toUpperCase()}
                </div>
                <div className="stencil stencil-faint group-hover:text-cream/60 transition-colors">
                  {t.location.toUpperCase()} · {t.service.toUpperCase()}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="pt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="stencil stencil-faint">FIELD REPORTS · UNEDITED · VERIFIED</div>
          <a
            href="https://www.google.com/search?q=property+damage+support"
            target="_blank"
            rel="noopener noreferrer"
            className="stencil stencil-navy hover:text-cbrs-terracotta-600 transition-colors"
          >
            ADDITIONAL REPORTS ON GOOGLE →
          </a>
        </div>
      </div>
    </section>
  );
}
