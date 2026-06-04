import React from 'react';

export interface StatCalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'light' | 'dark';
  number: string;
  label: string;
}

/** Shared accent stat card: #0369a1 bg, white labels and values */
export const statAccentCardClass =
  'bg-[#0369a1] text-white rounded-callout shadow-subtle p-8';
export const statAccentNumberClass =
  'font-heading font-semibold text-[48px] md:text-[64px] leading-tight text-white';
export const statAccentLabelClass =
  'type-caption font-medium uppercase tracking-[0.8px] text-white';
export const statAccentEyebrowClass =
  'type-caption font-medium uppercase tracking-[0.8px] text-white';

export function StatCallout({
  number,
  label,
  className = '',
  ...props
}: StatCalloutProps) {
  return (
    <div
      className={`flex flex-col justify-center ${statAccentCardClass} ${className}`}
      {...props}>
      <div className={statAccentNumberClass}>{number}</div>
      <div className={`${statAccentLabelClass} mt-2`}>{label}</div>
    </div>
  );
}
