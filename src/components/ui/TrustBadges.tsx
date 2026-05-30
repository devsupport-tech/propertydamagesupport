import React from 'react';

interface TrustBadge {
  text: string;
  icon: string;
}

const defaultBadges: TrustBadge[] = [
  { text: '24/7 Emergency Response', icon: '🚨' },
  { text: 'Insurance Claim Assistance', icon: '📋' },
  { text: 'Licensed & Certified', icon: '✓' },
  { text: 'Free Estimates', icon: '💰' },
];

interface TrustBadgesProps {
  badges?: TrustBadge[];
  className?: string;
}

export default function TrustBadges({ badges = defaultBadges, className = '' }: TrustBadgesProps) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-4 md:gap-6 ${className}`}>
      {badges.map((badge, index) => (
        <div
          key={index}
          className="flex items-center gap-2 px-4 py-2 glass-card rounded-full transition-all hover:scale-105"
        >
          <span className="text-lg" aria-hidden="true">
            {badge.icon}
          </span>
          <span className="text-sm md:text-base font-medium text-cbrs-primary whitespace-nowrap">
            {badge.text}
          </span>
        </div>
      ))}
    </div>
  );
}
