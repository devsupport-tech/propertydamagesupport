import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  color?: string;
}

const colorClasses: Record<string, string> = {
  blue: "hover:border-service-water hover:bg-blue-50",
  orange: "hover:border-service-fire hover:bg-orange-50",
  purple: "hover:border-service-storm hover:bg-purple-50",
  green: "hover:border-service-mold hover:bg-green-50",
  sky: "hover:border-service-drone hover:bg-sky-50",
  amber: "hover:border-service-insurance hover:bg-amber-50",
  cyan: "hover:border-cyan-500 hover:bg-cyan-50",
  indigo: "hover:border-indigo-500 hover:bg-indigo-50",
  slate: "hover:border-slate-500 hover:bg-slate-50",
};

export function ServiceCard({
  title,
  description,
  icon,
  href,
  color = "blue",
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={`
        block p-8 glass-card rounded-2xl border-2 border-gray-200
        transition-all duration-300 hover:shadow-2xl hover:-translate-y-2
        group
        ${colorClasses[color] || colorClasses.blue}
      `}
    >
      <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-cbrs-primary mb-3 group-hover:text-cbrs-accent transition-colors">
        {title}
      </h3>
      <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>
      <span className="text-cbrs-accent font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
        Learn More
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </span>
    </Link>
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
      className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all"
    >
      <span className="text-2xl">{icon}</span>
      <span className="font-medium text-gray-900">{title}</span>
    </Link>
  );
}
