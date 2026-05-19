import React from 'react';
export interface LogoProps {
  /** 'ocean' renders in Ocean Blue (#0369A1) for light backgrounds. 'white' renders in white for dark backgrounds. */
  tone?: 'ocean' | 'white';
  /** Height in px. Width scales proportionally. Defaults to 32. */
  height?: number;
  className?: string;
  /** Accessible label for the logo. */
  label?: string;
}
const LOGO_SRC = "/logoMPCWhite.png";

// Source asset aspect ratio (white PNG provided). ~2.4:1.
const ASPECT_RATIO = 2.4;
export function Logo({
  tone = 'ocean',
  height = 32,
  className = '',
  label = 'MPC Cloud Consulting'
}: LogoProps) {
  const color = tone === 'white' ? '#FFFFFF' : '#0369A1';
  const width = Math.round(height * ASPECT_RATIO);
  return (
    <span
      role="img"
      aria-label={label}
      className={`inline-block align-middle ${className}`}
      style={{
        width,
        height,
        backgroundColor: color,
        WebkitMaskImage: `url(${LOGO_SRC})`,
        maskImage: `url(${LOGO_SRC})`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskPosition: 'left center',
        maskPosition: 'left center',
        transition: 'background-color 200ms ease'
      }} />);


}