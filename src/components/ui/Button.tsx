import React from 'react';
export interface ButtonProps extends
  React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
}
export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
  'inline-flex items-center justify-center font-body font-semibold text-text-inverse rounded-button shadow-subtle transition-all duration-200 ease-in-out hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed border-none';
  const variants = {
    primary: 'bg-cta',
    secondary: 'bg-divider',
    tertiary:
    'bg-transparent border border-text-inverse hover:border-transparent'
  };
  const sizes = {
    sm: 'px-[20px] py-[10px] text-[13px]',
    md: 'px-[28px] py-[12px] text-[15px]',
    lg: 'px-[36px] py-[16px] text-[16px]'
  };
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}>
      
      {children}
    </button>);

}