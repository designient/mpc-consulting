import React from 'react';

/** BCG-inspired decorative mesh: dot lattice, arcs, and soft glow on dark bands */
export function GeometricPatternOverlay({
  className = ''
}: {
  className?: string;
}) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden>
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 85% 50%, rgba(56, 189, 248, 0.18), transparent 55%), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(196, 53, 115, 0.08), transparent 50%)'
        }}
      />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="careers-dot-grid"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.25" fill="white" fillOpacity="0.14" />
          </pattern>
          <linearGradient
            id="careers-arc-fade"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="35%" stopColor="white" stopOpacity="0.12" />
            <stop offset="100%" stopColor="white" stopOpacity="0.22" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#careers-dot-grid)" />
        <g
          fill="none"
          stroke="url(#careers-arc-fade)"
          strokeWidth="1"
          strokeLinecap="round">
          <path d="M 1180 -40 Q 920 280 640 600" />
          <path d="M 1280 20 Q 1000 300 720 600" />
          <path d="M 1380 80 Q 1080 340 800 600" />
          <path d="M 1480 140 Q 1160 380 880 600" />
          <path d="M 1100 -80 Q 860 240 580 600" />
        </g>
        <g stroke="white" strokeOpacity="0.08" strokeWidth="0.75">
          <line x1="200" y1="120" x2="380" y2="200" />
          <line x1="380" y1="200" x2="520" y2="160" />
          <line x1="520" y1="160" x2="640" y2="280" />
          <line x1="900" y1="80" x2="1040" y2="140" />
          <line x1="1040" y1="140" x2="1180" y2="100" />
          <line x1="1180" y1="100" x2="1320" y2="180" />
        </g>
        <g fill="white" fillOpacity="0.2">
          <circle cx="380" cy="200" r="3" />
          <circle cx="520" cy="160" r="3" />
          <circle cx="640" cy="280" r="3" />
          <circle cx="1040" cy="140" r="3" />
          <circle cx="1180" cy="100" r="3" />
        </g>
        <g fill="#38BDF8" fillOpacity="0.35">
          <circle cx="1320" cy="180" r="4" />
          <circle cx="1280" cy="320" r="2.5" />
        </g>
        <g fill="#c43573" fillOpacity="0.25">
          <circle cx="200" cy="120" r="3" />
          <circle cx="900" cy="80" r="2.5" />
        </g>
      </svg>
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" />
    </div>
  );
}
