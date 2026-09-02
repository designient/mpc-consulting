import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BreadcrumbItem } from '../Breadcrumb';
export interface ServiceHeroProps {
  eyebrow: string;
  headline: string;
  /** Optional italic-serif phrase appended to the headline on its own line */
  headlineAccent?: string;
  subhead?: string;
  primaryCtaText?: string;
  primaryCtaTo?: string;
  secondaryCtaText?: string;
  secondaryCtaTo?: string;
  imageSrc: string;
  imageAlt?: string;
  breadcrumb?: BreadcrumbItem[];
}
export function ServiceHero({
  headline,
  headlineAccent,
  subhead,
  primaryCtaText,
  primaryCtaTo,
  secondaryCtaText,
  secondaryCtaTo,
  imageSrc,
  imageAlt = '',
}: ServiceHeroProps) {
  const showPrimaryCta = Boolean(primaryCtaText && primaryCtaTo);
  const showSecondaryCta = Boolean(secondaryCtaText && secondaryCtaTo);

  return (
    <section className="relative w-full min-h-[min(58svh,600px)] max-h-[600px] overflow-hidden flex items-center">
      <img
        src={imageSrc}
        alt={imageAlt}
        aria-hidden={!imageAlt}
        className="absolute inset-0 w-full h-full object-cover object-center lg:object-[70%_center]"
      />
      <div aria-hidden className="absolute inset-0 bg-cta/55" />

      <div className="relative w-full max-w-[1400px] mx-auto px-4 md:px-10 lg:px-[60px] py-12 md:py-14 lg:py-16 min-h-[inherit] flex flex-col justify-center text-text-inverse">
        <div className="w-full max-w-[1100px] text-center lg:text-left flex flex-col items-center lg:items-start mx-auto lg:mx-0">
          <h1 className="type-h1 text-text-inverse">
            <span className="block">{headline}</span>
            {headlineAccent && (
              <span className="block font-body italic font-normal text-text-inverse mt-1 md:mt-2">
                {headlineAccent}
              </span>
            )}
          </h1>

          {subhead && (
            <p className="font-body text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5] text-text-inverse/90 mt-4 md:mt-5 max-w-[640px] lg:max-w-[720px]">
              {subhead}
            </p>
          )}

          {(showPrimaryCta || showSecondaryCta) && (
          <div className={`flex items-center justify-center lg:justify-start mt-6 md:mt-8${showSecondaryCta ? ' flex-col sm:flex-row gap-3' : ''}`}>
            {showPrimaryCta && (
            <Link
              to={primaryCtaTo!}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary rounded-full font-body text-[15px] font-medium hover:bg-white/90 transition-colors group">
              {primaryCtaText}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            )}
            {showSecondaryCta && (
              <Link
                to={secondaryCtaTo!}
                className="inline-flex items-center justify-center px-7 py-3.5 bg-transparent text-white border border-white/40 rounded-full font-body text-[14px] font-medium hover:border-white/70 hover:bg-white/10 transition-colors">
                {secondaryCtaText}
              </Link>
            )}
          </div>
          )}
        </div>
      </div>
    </section>
  );
}
