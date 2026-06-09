const steps = [
  {
    code: 'T+00:00',
    num: '01',
    title: 'Contact & Assessment',
    body: "Reach out to us and we'll schedule a comprehensive property assessment.",
    note: 'INITIAL DISPATCH',
  },
  {
    code: 'T+04:00',
    num: '02',
    title: 'Detailed Estimate',
    body: 'Professional Xactimate estimate with complete scope of work and timeline.',
    note: 'XACTIMATE · LICENSED',
  },
  {
    code: 'T+24:00',
    num: '03',
    title: 'Insurance Claims',
    body: 'We handle all documentation and communication with your insurance company.',
    note: 'CARRIER LIAISON',
  },
  {
    code: 'T+ ·',
    num: '04',
    title: 'Expert Execution',
    body: 'Licensed professionals complete all work with quality assurance throughout.',
    note: 'IICRC CERTIFIED',
  },
];

export default function OurProcess() {
  return (
    <section className="relative tex-asphalt text-cream py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 tex-blueprint pointer-events-none" />

      <div className="relative field-container">
        {/* Work order header */}
        <div className="grid grid-cols-12 gap-6 lg:gap-10 mb-12 border-b-2 border-cream/30 pb-8 items-end">
          <div className="col-span-12 lg:col-span-4">
            <div className="stencil stencil-terra mb-2">✦ SECTION III</div>
            <h2
              className="font-display font-black text-cream uppercase"
              style={{
                fontSize: 'clamp(1.875rem, 3.6vw, 3rem)',
                lineHeight: '0.95',
                letterSpacing: '-0.02em',
              }}
            >
              OUR <span className="text-cbrs-terracotta-500">PROCESS</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:pb-1">
            <p className="text-cream/75 text-sm md:text-base leading-relaxed max-w-md">
              A streamlined approach to property damage solutions from initial contact to final completion.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <div className="border-2 border-cbrs-terracotta-500 p-3 transform -rotate-1 inline-block">
              <div className="stencil stencil-terra mb-0.5">WORK ORDER</div>
              <div
                className="font-display font-black text-cream leading-none"
                style={{ fontSize: '1.5rem', letterSpacing: '-0.02em' }}
              >
                # CBRS-07
              </div>
              <div className="stencil stencil-cream-faint mt-1">04 STAGES · STANDARDIZED</div>
            </div>
          </div>
        </div>

        {/* Step rows */}
        <ol className="border-t border-cream/20">
          {steps.map((s, i) => (
            <li
              key={s.num}
              className="grid grid-cols-12 gap-4 md:gap-8 border-b border-cream/20 py-7 md:py-8 group hover:bg-cream/[0.025] transition-colors items-center"
            >
              {/* Time code */}
              <div className="col-span-6 md:col-span-2 flex items-center gap-3">
                <span
                  className={`relative inline-block w-3 h-3 md:w-4 md:h-4 shrink-0 ${
                    i === 0 ? 'bg-cbrs-terracotta-600' : 'bg-cream/15 border border-cream/40'
                  }`}
                >
                  {i === 0 && <span className="absolute inset-0 bg-cbrs-terracotta-600 pulse-dot" />}
                </span>
                <div>
                  <div className="stencil stencil-cream-faint">TIME CODE</div>
                  <div className="stencil stencil-cream mt-0.5">{s.code}</div>
                </div>
              </div>

              {/* Number */}
              <div className="col-span-6 md:col-span-1">
                <div
                  className="font-display font-black text-cbrs-terracotta-500 leading-none"
                  style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', letterSpacing: '-0.04em' }}
                >
                  {s.num}
                </div>
              </div>

              {/* Body */}
              <div className="col-span-12 md:col-span-6">
                <h3
                  className="font-display font-black text-cream uppercase leading-[0.95] tracking-tight mb-2"
                  style={{ fontSize: 'clamp(1.25rem, 2.2vw, 1.75rem)' }}
                >
                  {s.title}
                </h3>
                <p className="text-cream/75 text-sm md:text-base leading-relaxed max-w-lg">
                  {s.body}
                </p>
              </div>

              {/* Note tag */}
              <div className="col-span-12 md:col-span-3 md:text-right">
                <span className="inline-block border border-cbrs-terracotta-500 px-3 py-1 stencil stencil-terra">
                  {s.note}
                </span>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex items-center justify-between text-cream/60">
          <div className="stencil stencil-cream-faint">END OF SECTION III</div>
          <div className="stencil stencil-cream-faint">04 STAGES · STANDARDIZED</div>
        </div>
      </div>
    </section>
  );
}
