import React from 'react';

export interface ButtonProps extends
  React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
}

const filledButtonClass =
  'bg-cta hover:opacity-90 active:opacity-95';

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-body font-semibold text-text-inverse rounded-button shadow-subtle transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed border-none';
  const variants = {
    primary: filledButtonClass,
    secondary: filledButtonClass,
    tertiary:
      'bg-transparent border border-text-inverse text-text-inverse hover:bg-cta hover:border-cta hover:text-text-inverse'
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
    </button>
  );
}
