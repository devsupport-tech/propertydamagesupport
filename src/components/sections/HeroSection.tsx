import { Link } from 'react-router-dom';
import { siteConfig } from '@/config/site';
import ShieldBadge from '@/components/ui/ShieldBadge';

interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
  showTrustBadges?: boolean;
}

const responseLog = [
  { t: '11:42 CDT', svc: 'WATER MITIGATION', loc: 'KATY · 77494', dur: '32 MIN ON SITE' },
  { t: '09:18 CDT', svc: 'FIRE BOARD-UP',    loc: 'SUGAR LAND · 77479', dur: '47 MIN ON SITE' },
  { t: '02:54 CDT', svc: 'STORM TARP',       loc: 'CYPRESS · 77433',  dur: '28 MIN ON SITE' },
  { t: '23:11 CDT', svc: 'MOLD INSPECTION',  loc: 'BELLAIRE · 77401', dur: 'COMPLETE' },
  { t: '20:07 CDT', svc: 'DRONE ASSESSMENT', loc: 'HEIGHTS · 77008',  dur: 'COMPLETE' },
  { t: '17:33 CDT', svc: 'PACKOUT INTAKE',   loc: 'PEARLAND · 77584', dur: '64 MIN ON SITE' },
];

export default function HeroSection({}: HeroSectionProps) {
  return (
    <section className="relative tex-asphalt text-cream overflow-hidden">
      {/* Blueprint grid */}
      <div className="absolute inset-0 tex-blueprint pointer-events-none" />

      <div className="relative field-container pt-10 lg:pt-12 pb-0">
        {/* Top spec line */}
        <div className="border-b border-cream/15 pb-4 flex flex-wrap items-baseline justify-between gap-y-2 rise">
          <div className="stencil stencil-cream-faint">
            <span className="stencil-cream">DOC&nbsp;No.&nbsp;001</span>
            &nbsp;·&nbsp; PROPERTY RECOVERY OPERATIONS
            &nbsp;·&nbsp; HOU TX
          </div>
          <div className="stencil stencil-cream-faint hidden sm:block">
            LICENSED · INSURED · BONDED
          </div>
        </div>

        {/* Headline + badge grid */}
        <div className="grid grid-cols-12 gap-8 lg:gap-12 pt-12 lg:pt-16 pb-14 items-start">
          {/* Headline column */}
          <div className="col-span-12 lg:col-span-8 rise">
            <div className="stencil stencil-terra mb-5">
              ✦&nbsp; SECTION I &nbsp;·&nbsp; ARRIVAL
            </div>

            <h1
              className="font-display font-black text-cream uppercase"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                lineHeight: '0.92',
                letterSpacing: '-0.02em',
              }}
            >
              <span className="block">YOUR PARTNER</span>
              <span className="block">IN PROPERTY</span>
              <span className="block text-cbrs-terracotta-500 relative inline-block">
                RECOVERY
                <span className="hazard-stripe-thin absolute -bottom-2 left-0 h-1 w-[40%]" />
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-cream/80 text-base md:text-lg leading-relaxed">
              CBRS Group delivers concierge-level restoration services — from water
              extraction to complete fire damage rebuild.{' '}
              <strong className="text-cream font-semibold">
                One dedicated team
              </strong>{' '}
              managing your entire project, end to end.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="group inline-flex items-stretch bg-cbrs-terracotta-600 hover:bg-cream hover:text-cbrs-navy-900 text-cream transition-colors"
              >
                <span className="px-4 py-3 stencil stencil-cream group-hover:text-cbrs-navy-900 border-r border-cream/30 group-hover:border-cbrs-navy-900/30 flex items-center">
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
                <span>REQUEST ESTIMATE</span>
                <svg width="22" height="10" viewBox="0 0 22 10" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M0 5 H20 M16 1 L20 5 L16 9" />
                </svg>
                <span className="absolute left-0 right-0 bottom-0 h-px bg-cream scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            </div>
          </div>

          {/* Badge column — properly anchored to top */}
          <div className="col-span-12 lg:col-span-4 rise">
            <div className="flex flex-col items-start lg:items-end gap-6">
              <div className="text-cbrs-terracotta-500">
                <ShieldBadge
                  size={180}
                  serial="01"
                  topText="CBRS · FIELD DIVISION"
                  bottomText="EST. HOU · TX · 24/7"
                />
              </div>

              {/* Stat slab — sits right under the badge */}
              <div className="slab w-full max-w-[240px] border-l-4 border-cbrs-terracotta-600 py-4">
                <div className="stencil stencil-cream-faint mb-1">SERVICE LINES</div>
                <div
                  className="font-display font-black text-cream leading-none"
                  style={{ fontSize: '3.5rem', letterSpacing: '-0.03em' }}
                >
                  09
                </div>
                <div className="stencil stencil-cream-faint mt-1">
                  DISTINCT DISCIPLINES
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip — equal columns, consistent padding */}
        <div className="border-t border-cream/15 grid grid-cols-3 divide-x divide-cream/15">
          {[
            { v: '01',   l: 'Point of Contact' },
            { v: '09',   l: 'Service Lines' },
            { v: '24/7', l: 'Response Active' },
          ].map((s, i) => (
            <div key={i} className="py-5 px-4 first:pl-0 last:pr-0 flex flex-col gap-1">
              <div className="stencil stencil-cream-faint">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div
                className="font-display font-black text-cream leading-none"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', letterSpacing: '-0.02em' }}
              >
                {s.v}
              </div>
              <div className="stencil stencil-cream-faint mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Live response log marquee */}
      <div className="relative bg-cbrs-navy-800 border-y-2 border-cbrs-terracotta-600 py-2.5 overflow-hidden">
        <div className="marquee-track">
          {[...responseLog, ...responseLog, ...responseLog].map((r, i) => (
            <div key={i} className="flex items-center gap-3 px-8 whitespace-nowrap">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-cbrs-terracotta-600" />
              <span className="stencil stencil-cream">{r.t}</span>
              <span className="stencil stencil-cream-faint">·</span>
              <span className="font-mono text-[11px] tracking-wider text-cream">{r.svc}</span>
              <span className="stencil stencil-cream-faint">·</span>
              <span className="font-mono text-[11px] tracking-wider text-cream/70">{r.loc}</span>
              <span className="stencil stencil-cream-faint">·</span>
              <span className="stencil stencil-terra">{r.dur}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
