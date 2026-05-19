import React from 'react';
export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3;
  color?: 'text-primary' | 'text-inverse';
  showAccentBar?: boolean;
  accentBarPosition?: 'above' | 'below';
}
export function Heading({
  level = 2,
  color = 'text-primary',
  showAccentBar = false,
  accentBarPosition = 'above',
  className = '',
  children,
  ...props
}: HeadingProps) {
  const baseStyles = 'font-heading font-medium tracking-tight';
  const levels = {
    1: 'text-[64px] md:text-[68px] leading-[1.1] tracking-[-0.5px]',
    2: 'text-[40px] md:text-[44px] leading-[1.2] tracking-[-0.3px]',
    3: 'text-[24px] md:text-[26px] leading-[1.3] tracking-[-0.2px]'
  };
  const colors = {
    'text-primary': 'text-text-primary',
    'text-inverse': 'text-text-inverse'
  };
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const accentBarColor =
  color === 'text-inverse' ? 'bg-divider-bright' : 'bg-divider';
  const AccentBar = () =>
  <div className={`w-[60px] h-[3px] ${accentBarColor} mb-4`} />;

  return (
    <div className={`flex flex-col ${className}`}>
      {showAccentBar && accentBarPosition === 'above' && <AccentBar />}
      <Tag
        className={`${baseStyles} ${levels[level]} ${colors[color]}`}
        {...props}>
        
        {children}
      </Tag>
      {showAccentBar && accentBarPosition === 'below' &&
      <div className={`w-[60px] h-[3px] ${accentBarColor} mt-4`} />
      }
    </div>);

}