import React from 'react';
export interface LogoCloudProps {
  caption?: string;
  logos: string[];
  bg?: 'white' | 'soft' | 'transparent';
}
export function LogoCloud({ caption, logos, bg = 'soft' }: LogoCloudProps) {
  const bgClass =
  bg === 'soft' ?
  'bg-bg-light' :
  bg === 'white' ?
  'bg-white' :
  'bg-transparent';
  return (
    <section
      className={`w-full ${bgClass} px-4 py-10 md:px-10 md:py-12 lg:px-[60px] lg:py-14`}>
      
      {caption &&
      <p className="text-center font-body text-[12px] uppercase tracking-[0.8px] font-semibold text-text-primary opacity-70 mb-6">
          {caption}
        </p>
      }
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-6 items-center justify-items-center max-w-[1100px] mx-auto">
        {logos.map((logo, i) =>
        <div
          key={i}
          className="font-body italic text-[22px] md:text-[24px] text-text-primary opacity-50 hover:opacity-80 transition-opacity select-none">
          
            {logo}
          </div>
        )}
      </div>
    </section>);

}