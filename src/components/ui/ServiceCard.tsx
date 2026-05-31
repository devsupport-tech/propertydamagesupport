import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  color?: string;
}

// Service pillar color mapping
const serviceColors: Record<string, {
  accent: string;
  iconBg: string;
  hoverGradient: string;
  text: string;
  shadow: string;
}> = {
  blue: {
    accent: 'bg-service-restoration',
    iconBg: 'bg-service-restoration/10',
    hoverGradient: 'from-service-restoration/5 to-transparent',
    text: 'text-service-restoration',
    shadow: 'group-hover:shadow-[0_10px_30px_-5px_rgba(37,99,235,0.15)]',
  },
  purple: {
    accent: 'bg-service-estimating',
    iconBg: 'bg-service-estimating/10',
    hoverGradient: 'from-service-estimating/5 to-transparent',
    text: 'text-service-estimating',
    shadow: 'group-hover:shadow-[0_10px_30px_-5px_rgba(124,58,237,0.15)]',
  },
  amber: {
    accent: 'bg-service-claims',
    iconBg: 'bg-service-claims/10',
    hoverGradient: 'from-service-claims/5 to-transparent',
    text: 'text-service-claims',
    shadow: 'group-hover:shadow-[0_10px_30px_-5px_rgba(5,150,105,0.15)]',
  },
  green: {
    accent: 'bg-service-claims',
    iconBg: 'bg-service-claims/10',
    hoverGradient: 'from-service-claims/5 to-transparent',
    text: 'text-service-claims',
    shadow: 'group-hover:shadow-[0_10px_30px_-5px_rgba(5,150,105,0.15)]',
  },
  pink: {
    accent: 'bg-service-design',
    iconBg: 'bg-service-design/10',
    hoverGradient: 'from-service-design/5 to-transparent',
    text: 'text-service-design',
    shadow: 'group-hover:shadow-[0_10px_30px_-5px_rgba(236,72,153,0.15)]',
  },
  orange: {
    accent: 'bg-service-organization',
    iconBg: 'bg-service-organization/10',
    hoverGradient: 'from-service-organization/5 to-transparent',
    text: 'text-service-organization',
    shadow: 'group-hover:shadow-[0_10px_30px_-5px_rgba(245,158,11,0.15)]',
  },
  cyan: {
    accent: 'bg-service-inspection',
    iconBg: 'bg-service-inspection/10',
    hoverGradient: 'from-service-inspection/5 to-transparent',
    text: 'text-service-inspection',
    shadow: 'group-hover:shadow-[0_10px_30px_-5px_rgba(6,182,212,0.15)]',
  },
  sky: {
    accent: 'bg-service-drone',
    iconBg: 'bg-service-drone/10',
    hoverGradient: 'from-service-drone/5 to-transparent',
    text: 'text-service-drone',
    shadow: 'group-hover:shadow-[0_10px_30px_-5px_rgba(14,165,233,0.15)]',
  },
  slate: {
    accent: 'bg-service-legal',
    iconBg: 'bg-service-legal/10',
    hoverGradient: 'from-service-legal/5 to-transparent',
    text: 'text-service-legal',
    shadow: 'group-hover:shadow-[0_10px_30px_-5px_rgba(139,92,246,0.15)]',
  },
};

export function ServiceCard({
  title,
  description,
  icon,
  href,
  color = "blue",
}: ServiceCardProps) {
  const colors = serviceColors[color] || serviceColors.blue;

  return (
    <div className="group relative h-full">
      <Link
        href={href}
        className="relative h-full flex flex-col p-8 lg:p-10 bg-white rounded-2xl border border-neutral-200 shadow-md hover:shadow-2xl transition-all duration-350 hover:-translate-y-2 overflow-hidden"
      >
        {/* Colored accent bar (top) */}
        <div
          className={`absolute top-0 left-0 right-0 h-1 ${colors.accent} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-350 origin-left`}
        />

        {/* Background pattern (subtle) */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className={`w-full h-full bg-gradient-to-br ${colors.hoverGradient} rounded-full blur-3xl`} />
        </div>

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col">
          {/* Icon container with colored background */}
          <div className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl ${colors.iconBg} group-hover:scale-110 transition-transform duration-350`}>
            <span className="text-4xl" role="img" aria-label={title}>
              {icon}
            </span>
          </div>

          {/* Title */}
          <h3 className={`text-2xl lg:text-3xl font-bold text-cbrs-navy-900 mb-4 group-hover:${colors.text} transition-colors duration-250`}>
            {title}
          </h3>

          {/* Description */}
          <p className="text-neutral-600 leading-relaxed mb-6 flex-1">
            {description}
          </p>

          {/* CTA with icon */}
          <div className={`inline-flex items-center gap-2 ${colors.text} font-semibold`}>
            <span>Learn More</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-250"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
}

// Compact version for smaller grids
export function ServiceCardCompact({
  title,
  icon,
  href,
}: Pick<ServiceCardProps, "title" | "icon" | "href">) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 p-4 bg-white rounded-lg border border-neutral-200 hover:border-cbrs-navy-800 hover:shadow-md transition-all duration-250"
    >
      <span className="text-2xl" role="img">{icon}</span>
      <span className="font-medium text-cbrs-navy-900">{title}</span>
    </Link>
  );
}
