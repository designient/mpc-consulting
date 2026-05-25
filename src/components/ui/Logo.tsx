import React from 'react';

export interface LogoProps {
  /** @deprecated Full-color logo ignores tone; kept for API compatibility. */
  tone?: 'ocean' | 'white';
  /** Height in px. Width scales proportionally. Defaults to 36. */
  height?: number;
  className?: string;
  /** Accessible label for the logo. */
  label?: string;
}

const LOGO_SRC = '/main-mpccc-logo.png';

export function Logo({
  height = 36,
  className = '',
  label = 'MPC Cloud Consulting'
}: LogoProps) {
  return (
    <img
      src={LOGO_SRC}
      alt={label}
      className={`inline-block align-middle object-contain object-left ${className}`}
      style={{ height, width: 'auto', maxWidth: 'min(280px, 55vw)' }}
    />
  );
}
