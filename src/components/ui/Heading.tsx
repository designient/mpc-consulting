import React from 'react';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3;
  color?: 'text-primary' | 'text-inverse';
  showAccentBar?: boolean;
  accentBarPosition?: 'above' | 'below';
}

const levelClass = {
  1: 'type-h1',
  2: 'type-h2',
  3: 'type-h3'
} as const;

const colors = {
  'text-primary': 'text-text-primary',
  'text-inverse': 'text-text-inverse'
};

export function Heading({
  level = 2,
  color = 'text-primary',
  showAccentBar = false,
  accentBarPosition = 'above',
  className = '',
  children,
  ...props
}: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const accentBarColor =
    color === 'text-inverse' ? 'bg-divider-bright' : 'bg-divider';
  const AccentBar = () =>
    <div className={`w-[60px] h-[3px] ${accentBarColor} mb-4`} />;

  return (
    <div className={`flex flex-col ${className}`}>
      {showAccentBar && accentBarPosition === 'above' && <AccentBar />}
      <Tag
        className={`${levelClass[level]} ${colors[color]}`}
        {...props}>
        {children}
      </Tag>
      {showAccentBar && accentBarPosition === 'below' && (
        <div className={`w-[60px] h-[3px] ${accentBarColor} mt-4`} />
      )}
    </div>
  );
}
