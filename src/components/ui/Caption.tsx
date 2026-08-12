import React from 'react';

export interface CaptionProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'span' | 'p' | 'div' | 'label';
  muted?: boolean;
  /** Section label above headings */
  eyebrow?: boolean;
  inverse?: boolean;
}

/** Caption, minimum 14px; use for labels, meta, eyebrows */
export function Caption({
  as: Tag = 'span',
  muted = false,
  eyebrow = false,
  inverse = false,
  className = '',
  children,
  ...props
}: CaptionProps) {
  const variantClass = eyebrow ?
    inverse ?
      'section-eyebrow-inverse'
    : 'section-eyebrow'
  : muted ?
  'type-caption-muted'
  : 'type-caption';

  return (
    <Tag className={`${variantClass} ${className}`} {...props}>
      {children}
    </Tag>
  );
}
