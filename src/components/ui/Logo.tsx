import React from 'react';

export interface LogoProps {
  tone?: 'ocean' | 'white';
  /** Height in px. Width scales proportionally. Defaults to 44. */
  height?: number;
  className?: string;
  /** Accessible label for the logo. */
  label?: string;
}

const LOGO_SRC = {
  ocean: '/mpc-main-logo.svg',
  white: '/mpc-logo-white.svg',
} as const;

export function Logo({
  tone = 'ocean',
  height = 44,
  className = '',
  label = 'MPC Cloud Consulting'
}: LogoProps) {
  return (
    <img
      src={LOGO_SRC[tone]}
      alt={label}
      className={`inline-block align-middle object-contain object-left ${className}`}
      style={{ height, width: 'auto', maxWidth: 'min(300px, 55vw)' }}
    />
  );
}
