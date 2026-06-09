import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ServicesGrid from '@/components/sections/ServicesGrid';
import OurProcess from '@/components/sections/OurProcess';
import Testimonials from '@/components/sections/Testimonials';
import SeoHead from '@/components/seo/SeoHead';
import { buildBreadcrumb } from '@/components/seo/schema';
import { siteConfig, serviceAreas, allServiceAreas } from '@/config/site';

const benefits = [
  {
    num: '01',
    title: '9 Service Pillars',
    body: 'Comprehensive property damage solutions across specialized service areas.',
    note: 'INTEGRATED PRACTICE',
  },
  {
    num: '02',
    title: 'Licensed & Certified',
    body: 'IICRC-certified professionals with industry expertise and credentials.',
    note: 'IICRC · LICENSED · BONDED',
  },
  {
    num: '03',
    title: 'Insurance Support',
    body: 'Professional documentation and inspection services for claim submission.',
    note: 'XACTIMATE · CARRIER LIAISON',
  },
  {
    num: '04',
    title: 'Professional Service',
    body: 'Quality workmanship and comprehensive property damage expertise.',
    note: 'CONCIERGE METHOD',
  },
];

const Index = () => {
  return (
    <>
      <SeoHead
        title="Houston Property Damage Restoration · 24/7 Water, Fire, Storm, Mold | CBRS Group"
        description="Houston's trusted property damage restoration experts. 24/7 emergency water damage, fire damage, storm restoration, mold remediation, drone inspections & insurance claim support. Licensed & insured. Call (832) 608-0535."
        path="/"
        keywords="property damage restoration Houston, water damage Houston, fire damage Houston, storm damage Houston, mold remediation Houston, emergency restoration Houston, Xactimate estimates, insurance claim help Texas, drone roof inspection, packout services Houston"
        jsonLd={buildBreadcrumb([{ name: 'Home', path: '/' }])}
      />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-cbrs-navy-900 focus:text-cream focus:px-4 focus:py-2"
      >
        Skip to main content
      </a>

      <div className="min-h-screen bg-cream text-cbrs-navy-900">
        <Navbar />

        <main id="main">
        {/* I. Hero */}
        <HeroSection />

        {/* II. Service lines */}
        <ServicesGrid
          title="Our Service Pillars"
          subtitle="Complete property damage solutions across 9 specialized service areas"
          featuredOnly={true}
        />

        {/* — Houston metro */}
        <section className="relative bg-cream-50 py-16 md:py-24 border-y-2 border-cbrs-navy-900 overflow-hidden">
          {/* City names marquee — quieter */}
          <div className="overflow-hidden py-4 border-b-2 border-cbrs-navy-900 mb-12 bg-cbrs-navy-900">
            <div className="marquee-track">
              {[...Array(3)].flatMap((_, k) =>
                allServiceAreas.map((a, i) => (
                  <div
                    key={`${k}-${i}`}
                    className="flex items-center gap-5 px-6 whitespace-nowrap"
                  >
                    <span
                      className="font-display font-black text-cream uppercase leading-none"
                      style={{
                        fontSize: 'clamp(1.5rem, 3.5vw, 3rem)',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {a.name}
                    </span>
                    <span className="text-cbrs-terracotta-500 text-xl leading-none">●</span>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="field-container">
            <div className="grid grid-cols-12 gap-6 lg:gap-10 items-start">
              {/* Header */}
              <div className="col-span-12 lg:col-span-4">
                <div className="stencil stencil-terra mb-2">✦ SECTION V</div>
                <h2
                  className="font-display font-black text-cbrs-navy-900 uppercase mb-5"
                  style={{
                    fontSize: 'clamp(1.875rem, 3.6vw, 3rem)',
                    lineHeight: '0.95',
                    letterSpacing: '-0.02em',
                  }}
                >
                  SERVING <span className="text-cbrs-terracotta-600">GREATER HOUSTON</span>
                </h2>
                <p className="text-cbrs-navy-700 text-sm md:text-base leading-relaxed max-w-md mb-6">
                  Fast response times to all major cities in the Houston metro area.
                  Twenty-eight registered neighborhoods, one accountable team.
                </p>
                <div className="border-2 border-cbrs-navy-900 inline-block px-4 py-3">
                  <div className="stencil stencil-faint mb-1">CITIES SERVED</div>
                  <div
                    className="font-display font-black text-cbrs-terracotta-600 leading-none"
                    style={{ fontSize: '3rem', letterSpacing: '-0.04em' }}
                  >
                    {allServiceAreas.length}
                  </div>
                </div>
              </div>

              {/* Tier 1 grid */}
              <div className="col-span-12 lg:col-span-8">
                <div className="stencil stencil-faint mb-4">TIER 01 · PRIORITY METRO</div>
                <ul className="grid grid-cols-2 md:grid-cols-3 border-l-2 border-t-2 border-cbrs-navy-900">
                  {serviceAreas.tier1.map((city, i) => (
                    <li key={city.slug} className="border-r-2 border-b-2 border-cbrs-navy-900">
                      <Link
                        to={`/service-areas/${city.slug}`}
                        className="group flex flex-col gap-1.5 p-4 hover:bg-cbrs-navy-900 transition-colors h-full"
                      >
                        <div className="flex items-center justify-between">
                          <span className="serial text-cbrs-navy-900/50 group-hover:text-cream/50 text-[11px] transition-colors">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span className="stencil stencil-faint group-hover:text-cream/50 transition-colors">TX</span>
                        </div>
                        <span
                          className="font-display font-black text-cbrs-navy-900 group-hover:text-cream uppercase leading-[0.95] tracking-tight transition-colors"
                          style={{ fontSize: 'clamp(1.25rem, 1.8vw, 1.5rem)', letterSpacing: '-0.015em' }}
                        >
                          {city.name}
                        </span>
                        <span className="stencil stencil-faint group-hover:text-cbrs-terracotta-500 transition-colors">
                          METRO HOU
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/service-areas"
                  className="mt-5 inline-flex items-center gap-3 stencil stencil-navy hover:text-cbrs-terracotta-600 transition-colors"
                >
                  ALL SERVICE AREAS
                  <svg width="22" height="10" viewBox="0 0 22 10" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M0 5 H20 M16 1 L20 5 L16 9" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* III. Process */}
        <OurProcess />

        {/* — Why choose us: 4 badge slabs */}
        <section className="relative bg-cream-50 py-16 md:py-24">
          <div className="absolute inset-0 tex-concrete opacity-30 pointer-events-none" />
          <div className="relative field-container">
            <div className="grid grid-cols-12 gap-6 lg:gap-10 mb-12 border-b-2 border-cbrs-navy-900 pb-8 items-end">
              <div className="col-span-12 lg:col-span-3">
                <div className="stencil stencil-terra mb-2">✦ SECTION VI</div>
                <div className="serial text-cbrs-navy-900 text-xl font-semibold">
                  WHY <span className="text-cbrs-navy-900/40">/</span> CBRS
                </div>
              </div>
              <div className="col-span-12 lg:col-span-9">
                <h2
                  className="font-display font-black text-cbrs-navy-900 uppercase"
                  style={{
                    fontSize: 'clamp(1.875rem, 3.6vw, 3rem)',
                    lineHeight: '0.95',
                    letterSpacing: '-0.02em',
                  }}
                >
                  WHY CHOOSE PROPERTY DAMAGE <span className="text-cbrs-terracotta-600">SUPPORT?</span>
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l-2 border-t-2 border-cbrs-navy-900">
              {benefits.map((b) => (
                <article
                  key={b.num}
                  className="flex flex-col border-r-2 border-b-2 border-cbrs-navy-900 p-7 bg-cream-50 hover:bg-cbrs-navy-900 group transition-colors"
                >
                  <div
                    className="font-display font-black text-cbrs-terracotta-600 group-hover:text-cbrs-terracotta-500 leading-none mb-5 transition-colors"
                    style={{ fontSize: '3.5rem', letterSpacing: '-0.04em' }}
                  >
                    {b.num}
                  </div>
                  <h3
                    className="font-display font-black text-cbrs-navy-900 group-hover:text-cream uppercase leading-[0.95] tracking-tight transition-colors mb-2.5"
                    style={{ fontSize: 'clamp(1.125rem, 1.6vw, 1.375rem)' }}
                  >
                    {b.title}
                  </h3>
                  <p className="text-cbrs-navy-700 group-hover:text-cream/75 text-sm leading-relaxed mb-5 transition-colors flex-grow">
                    {b.body}
                  </p>
                  <div className="pt-3 border-t border-cbrs-navy-900/20 group-hover:border-cream/20 transition-colors">
                    <span className="stencil text-cbrs-navy-900/60 group-hover:text-cbrs-terracotta-500 transition-colors">
                      {b.note}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* IV. Testimonials */}
        <Testimonials />

        {/* — Contact CTA: heavy navy slab */}
        <section className="relative tex-asphalt text-cream py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 tex-blueprint pointer-events-none" />

          <div className="relative field-container">
            <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="col-span-12 lg:col-span-7">
                <div className="stencil stencil-terra mb-4">
                  ✦ SECTION VII · ENGAGE
                </div>
                <h2
                  className="font-display font-black text-cream uppercase"
                  style={{
                    fontSize: 'clamp(2rem, 4.4vw, 3.5rem)',
                    lineHeight: '0.95',
                    letterSpacing: '-0.02em',
                  }}
                >
                  GET PROFESSIONAL PROPERTY DAMAGE <span className="text-cbrs-terracotta-500">SUPPORT</span>
                </h2>

                <p className="mt-6 max-w-xl text-cream/80 text-base md:text-lg leading-relaxed">
                  Contact us to discuss your property damage needs and explore our
                  comprehensive service solutions.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="group inline-flex items-stretch bg-cbrs-terracotta-600 hover:bg-cream hover:text-cbrs-navy-900 text-cream transition-colors"
                  >
                    <span className="px-4 py-3 stencil stencil-cream group-hover:text-cbrs-navy-900 border-r border-cream/30 group-hover:border-cbrs-navy-900/30 flex items-center transition-colors">
                      CALL DISPATCH
                    </span>
                    <span className="px-4 py-3 font-display font-bold text-base md:text-lg flex items-center tracking-tight">
                      {siteConfig.phone}
                    </span>
                  </a>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 px-1 py-2 stencil stencil-cream relative group"
                  >
                    <span>WRITTEN ESTIMATE FORM</span>
                    <svg width="22" height="10" viewBox="0 0 22 10" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M0 5 H20 M16 1 L20 5 L16 9" />
                    </svg>
                    <span className="absolute left-0 right-0 bottom-0 h-px bg-cream scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </Link>
                </div>
              </div>

              {/* Engagement brief card */}
              <div className="col-span-12 lg:col-span-5">
                <div className="border-2 border-cream/30 p-6">
                  <div className="flex items-baseline justify-between border-b border-cream/30 pb-3">
                    <span className="stencil stencil-cream">ENGAGEMENT BRIEF</span>
                    <span className="stencil stencil-cream-faint">No. CBRS-07</span>
                  </div>

                  <div className="pt-4 space-y-4">
                    {[
                      { l: 'RESPONSE',        v: 'Same Day' },
                      { l: 'ESTIMATE',        v: 'No Cost' },
                      { l: 'CARRIER LIAISON', v: 'Included' },
                      { l: 'SCOPE',           v: 'All 9 Lines', accent: true },
                    ].map((row, i) => (
                      <div key={row.l} className={i > 0 ? 'border-t border-cream/20 pt-4' : ''}>
                        <div className="stencil stencil-cream-faint">{row.l}</div>
                        <div
                          className={`font-display font-black uppercase leading-none mt-1 tracking-tight ${
                            row.accent ? 'text-cbrs-terracotta-500' : 'text-cream'
                          }`}
                          style={{ fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', letterSpacing: '-0.02em' }}
                        >
                          {row.v}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
