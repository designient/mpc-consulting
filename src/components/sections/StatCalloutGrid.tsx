import React from 'react';
import { StatCallout } from '../ui/StatCallout';

export interface StatItem {
  number: string;
  label: string;
}

export interface StatCalloutGridProps {
  stats: StatItem[];
  variant?: 'light' | 'dark';
  className?: string;
}

export function StatCalloutGrid({
  stats,
  variant = 'light',
  className = ''
}: StatCalloutGridProps) {
  return (
    <div
      className={`w-full px-4 py-4 md:px-10 md:py-8 lg:px-[60px] lg:py-10 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
        {stats.map((stat, index) => (
          <StatCallout
            key={index}
            variant={variant}
            number={stat.number}
            label={stat.label}
          />
        ))}
      </div>
    </div>
  );
}
