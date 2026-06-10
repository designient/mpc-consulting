import React from 'react';
import { Heading } from '../ui/Heading';
export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}
export interface ProcessStepsProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  steps: ProcessStep[];
  variant?: 'light' | 'dark';
  id?: string;
  centerHeader?: boolean;
  /** Color step titles with brand accent pink */
  accentStepTitles?: boolean;
}
export function ProcessSteps({
  eyebrow,
  title,
  intro,
  steps,
  variant = 'light',
  id,
  centerHeader = false,
  accentStepTitles = false,
}: ProcessStepsProps) {
  const isDark = variant === 'dark';
  const bgCls = isDark ?
  'bg-primary text-text-inverse' :
  'bg-white text-text-primary';
  const headingColor = isDark ? 'text-inverse' : 'text-primary';
  const descColor = isDark ?
  'text-text-inverse opacity-80' :
  'text-text-primary opacity-80';
  return (
    <section
      id={id}
      className={`w-full ${bgCls} px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]`}>
      
      <div className="max-w-[1000px] mx-auto">
        <div
          className={`mb-12 ${centerHeader ? 'text-center max-w-[800px] mx-auto' : 'text-center md:text-left'}`}>
          {eyebrow &&
          <p
            className={`mb-3 ${centerHeader ? 'section-eyebrow' : `font-body text-[14px] uppercase tracking-[0.8px] font-medium ${isDark ? 'text-divider-bright' : 'text-divider'}`}`}>
            
              {eyebrow}
            </p>
          }
          <Heading
            level={2}
            color={headingColor as 'text-primary' | 'text-inverse'}>
            
            {title}
          </Heading>
          {intro &&
          <p
            className={`font-body text-[18px] leading-[1.6] mt-5 max-w-[700px] ${centerHeader ? 'mx-auto' : ''} ${descColor}`}>
            
              {intro}
            </p>
          }
        </div>

        <ol className="relative">
          {steps.map((step, i) => {
            const isLongLabel = step.number.length > 2;
            const lineCls = isDark
              ? 'bg-divider-bright opacity-40'
              : 'bg-divider opacity-30';
            return (
              <li
                key={i}
                className="relative flex gap-5 sm:gap-6 md:gap-10 pb-10 last:pb-0">
                <div className="relative z-10 self-stretch shrink-0 w-[104px] sm:w-[120px] md:w-[152px] flex flex-col items-end pt-0.5 pr-2 sm:pr-3">
                  <span
                    className={`font-heading font-semibold leading-none opacity-90 select-none text-right whitespace-nowrap shrink-0 ${
                      isLongLabel
                        ? 'text-[22px] sm:text-[26px] md:text-[32px] tracking-tight'
                        : 'text-[40px] md:text-[64px]'
                    } ${isDark ? 'text-divider-bright' : 'text-divider'}`}
                    aria-hidden>
                    {step.number}
                  </span>
                  {i < steps.length - 1 && (
                    <div
                      aria-hidden
                      className={`w-[2px] flex-1 mt-3 mr-2 sm:mr-3 md:mr-4 min-h-[24px] ${lineCls}`}
                    />
                  )}
                </div>
                <div className="flex-1 min-w-0 pt-1 md:pt-2">
                  <h3
                    className={`font-heading font-semibold text-[20px] md:text-[24px] leading-tight mb-2 ${
                      accentStepTitles
                        ? 'text-stat'
                        : isDark
                          ? 'text-text-inverse'
                          : 'text-text-primary'
                    }`}>
                    {step.title}
                  </h3>
                  <p
                    className={`font-body text-[16px] leading-[1.6] max-w-[600px] ${descColor}`}>
                    {step.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>);

}