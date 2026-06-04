import React from 'react';

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  muted?: boolean;
}

/** Body paragraph — 16–17px */
export function Text({
  muted = false,
  className = '',
  children,
  ...props
}: TextProps) {
  return (
    <p
      className={`type-paragraph ${muted ? 'opacity-80' : ''} ${className}`}
      {...props}>
      {children}
    </p>
  );
}
