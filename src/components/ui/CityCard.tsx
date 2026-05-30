import Link from "next/link";

interface CityCardProps {
  name: string;
  slug: string;
  featured?: boolean;
}

export function CityCard({ name, slug, featured }: CityCardProps) {
  return (
    <Link
      href={`/service-areas/${slug}`}
      className={`
        block p-4 rounded-lg border transition-all hover:shadow-md hover:-translate-y-0.5
        ${
          featured
            ? "bg-blue-50 border-blue-200 hover:border-blue-400"
            : "bg-white border-gray-200 hover:border-blue-400"
        }
      `}
    >
      <div className="flex items-center justify-between">
        <span className="font-medium text-gray-900">{name}</span>
        <svg
          className="w-4 h-4 text-gray-400"
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
      </div>
    </Link>
  );
}

// Inline link style for lists
export function CityLink({ name, slug }: CityCardProps) {
  return (
    <Link
      href={`/service-areas/${slug}`}
      className="text-blue-600 hover:underline"
    >
      {name}
    </Link>
  );
}
