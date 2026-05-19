import React from 'react';
export interface InputProps extends
  React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: boolean;
}
export function Input({
  label,
  helperText,
  error,
  className = '',
  id,
  ...props
}: InputProps) {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <div className={`flex flex-col w-full ${className}`}>
      {label &&
      <label
        htmlFor={inputId}
        className="font-body font-medium text-[12px] uppercase tracking-[0.8px] text-text-primary mb-2">
        
          {label}
        </label>
      }
      <input
        id={inputId}
        className={`
          w-full rounded-button px-4 py-2.5 font-body text-[16px] text-text-primary bg-white
          border border-[#E8E8E8] shadow-none outline-none transition-all
          placeholder:text-text-primary placeholder:opacity-50
          focus:border-cta focus:border-2 focus:px-[15px] focus:py-[9px]
          ${error ? 'border-accent focus:border-accent' : ''}
        `}
        {...props} />
      
      {helperText &&
      <span
        className={`font-body text-[12px] mt-1 ${error ? 'text-accent' : 'text-text-primary opacity-70'}`}>
        
          {helperText}
        </span>
      }
    </div>);

}