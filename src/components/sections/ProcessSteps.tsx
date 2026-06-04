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
}
export function ProcessSteps({
  eyebrow,
  title,
  intro,
  steps,
  variant = 'light',
  id
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
        <div className="mb-12 text-center md:text-left">
          {eyebrow &&
          <p
            className={`font-body text-[14px] uppercase tracking-[0.8px] font-medium mb-3 ${isDark ? 'text-divider-bright' : 'text-divider'}`}>
            
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
            className={`font-body text-[18px] leading-[1.6] mt-5 max-w-[700px] ${descColor}`}>
            
              {intro}
            </p>
          }
        </div>

        <ol className="relative">
          {/* Vertical connector line */}
          <div
            className={`absolute left-[24px] md:left-[40px] top-0 bottom-0 w-[2px] ${isDark ? 'bg-divider-bright opacity-40' : 'bg-divider opacity-30'}`} />
          

          {steps.map((step, i) =>
          <li
            key={i}
            className="relative pl-16 md:pl-[120px] pb-10 last:pb-0">
            
              <div className="absolute left-0 top-0 w-[48px] md:w-[80px] flex justify-start">
                <span
                className={`font-heading font-semibold text-[40px] md:text-[64px] leading-none opacity-90 select-none ${isDark ? 'text-divider-bright' : 'text-divider'}`}
                aria-hidden>
                
                  {step.number}
                </span>
              </div>
              <h3
              className={`font-heading font-semibold text-[20px] md:text-[24px] leading-tight mb-2 ${isDark ? 'text-text-inverse' : 'text-text-primary'}`}>
              
                {step.title}
              </h3>
              <p
              className={`font-body text-[16px] leading-[1.6] max-w-[600px] ${descColor}`}>
              
                {step.description}
              </p>
            </li>
          )}
        </ol>
      </div>
    </section>);

}