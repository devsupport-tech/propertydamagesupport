// Circular industrial shield badge — used in hero & footer.
// Curved type around a centered serial number, like a hard-hat patch.

interface ShieldBadgeProps {
  size?: number;
  serial?: string;
  topText?: string;
  bottomText?: string;
  className?: string;
}

export default function ShieldBadge({
  size = 180,
  serial = '01',
  topText = 'CBRS GROUP · FIELD DIVISION',
  bottomText = 'EST. HOUSTON · TEXAS',
  className = '',
}: ShieldBadgeProps) {
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - 4;
  const innerR = r - 18;

  // Place curved text on an arc that sits 6px inside the outer ring
  const arcR = r - 6;

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      style={{ display: 'block' }}
    >
      <defs>
        <path
          id="badge-arc-top"
          d={`M ${cx - arcR},${cy} A ${arcR},${arcR} 0 0 1 ${cx + arcR},${cy}`}
        />
        <path
          id="badge-arc-bottom"
          d={`M ${cx - arcR},${cy} A ${arcR},${arcR} 0 0 0 ${cx + arcR},${cy}`}
        />
      </defs>

      {/* Outer ring */}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="currentColor" strokeWidth={1.5} />
      {/* Inner ring */}
      <circle cx={cx} cy={cy} r={innerR} fill="none" stroke="currentColor" strokeWidth={1} />

      {/* Tick marks at cardinal points */}
      {[0, 90, 180, 270].map((deg) => {
        const a = (deg * Math.PI) / 180;
        const x1 = cx + Math.cos(a) * (r - 1);
        const y1 = cy + Math.sin(a) * (r - 1);
        const x2 = cx + Math.cos(a) * (r - 8);
        const y2 = cy + Math.sin(a) * (r - 8);
        return (
          <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth={1.5} />
        );
      })}

      {/* Curved top label */}
      <text
        fill="currentColor"
        fontFamily="IBM Plex Mono, monospace"
        fontSize={Math.max(7.5, size * 0.045)}
        letterSpacing={3}
        style={{ textTransform: 'uppercase' }}
      >
        <textPath href="#badge-arc-top" startOffset="50%" textAnchor="middle">
          {topText}
        </textPath>
      </text>
      {/* Curved bottom label */}
      <text
        fill="currentColor"
        fontFamily="IBM Plex Mono, monospace"
        fontSize={Math.max(7.5, size * 0.045)}
        letterSpacing={3}
        style={{ textTransform: 'uppercase' }}
      >
        <textPath href="#badge-arc-bottom" startOffset="50%" textAnchor="middle">
          {bottomText}
        </textPath>
      </text>

      {/* Center serial — true-center via dominantBaseline="central" */}
      <text
        x={cx}
        y={cy}
        fill="currentColor"
        fontFamily="Big Shoulders Display, Impact, sans-serif"
        fontSize={size * 0.34}
        fontWeight={900}
        textAnchor="middle"
        dominantBaseline="central"
        style={{ textTransform: 'uppercase', letterSpacing: '-0.03em' }}
      >
        {serial}
      </text>
    </svg>
  );
}
