import React from 'react';

export interface StatCalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'light' | 'dark';
  number: string;
  label: string;
}

export function StatCallout({
  variant = 'light',
  number,
  label,
  className = '',
  ...props
}: StatCalloutProps) {
  const isDark = variant === 'dark';
  const containerClasses = isDark
    ? 'bg-primary rounded-callout shadow-subtle p-8'
    : 'bg-bg-light rounded-card shadow-subtle p-8';

  return (
    <div
      className={`flex flex-col justify-center ${containerClasses} ${className}`}
      {...props}>
      <div className="font-body font-semibold text-[48px] md:text-[64px] leading-tight text-stat">
        {number}
      </div>
      <div
        className={`font-body font-medium text-[12px] md:text-[13px] uppercase tracking-[0.8px] mt-2 ${isDark ? 'text-text-inverse opacity-80' : 'text-text-primary'}`}>
        {label}
      </div>
    </div>
  );
}
