import React from 'react';

export interface LogoProps {
  tone?: 'ocean' | 'white';
  /** Height in px. Width scales proportionally. Defaults to 44. */
  height?: number;
  className?: string;
  /** Accessible label for the logo. */
  label?: string;
}

const LOGO_SRC = '/main-mpccc-logo.png';

export function Logo({
  tone = 'ocean',
  height = 44,
  className = '',
  label = 'MPC Cloud Consulting'
}: LogoProps) {
  const toneClass =
    tone === 'white' ?
      'brightness-0 invert'
    : '';

  return (
    <img
      src={LOGO_SRC}
      alt={label}
      className={`inline-block align-middle object-contain object-left ${toneClass} ${className}`}
      style={{ height, width: 'auto', maxWidth: 'min(300px, 55vw)' }}
    />
  );
}
