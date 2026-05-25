import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem } from '../Breadcrumb';
export interface ServiceHeroProps {
  eyebrow: string;
  headline: string;
  /** Optional italic-serif phrase appended to the headline on its own line */
  headlineAccent?: string;
  subhead: string;
  primaryCtaText: string;
  primaryCtaTo: string;
  secondaryCtaText?: string;
  secondaryCtaTo?: string;
  imageSrc?: string;
  imageAlt?: string;
  breadcrumb?: BreadcrumbItem[];
  /** Optional triptych imagery — if 3 images provided, renders the 3-image grid below the hero */
  triptych?: string[];
  trustLine?: string;
}
export function ServiceHero({
  eyebrow,
  headline,
  headlineAccent,
  subhead,
  primaryCtaText,
  primaryCtaTo,
  secondaryCtaText,
  secondaryCtaTo,
  imageSrc,
  imageAlt = '',
  breadcrumb,
  triptych,
  trustLine
}: ServiceHeroProps) {
  const triptychImages =
  triptych && triptych.length === 3 ?
  triptych :
  imageSrc ?
  [imageSrc, imageSrc, imageSrc] :
  null;
  return (
    <section className="w-full bg-white">
      <div className="w-full px-4 pt-10 md:px-10 md:pt-14 lg:px-[60px] lg:pt-20">
        {breadcrumb &&
        <div className="max-w-[1200px] mx-auto mb-8">
            <Breadcrumb items={breadcrumb} variant="light" />
          </div>
        }

        {/* Centered editorial hero */}
        <div className="max-w-[920px] mx-auto text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-2 font-body text-[11px] md:text-[12px] uppercase tracking-[2px] font-semibold text-divider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-divider" />
            {eyebrow}
          </span>

          <h1 className="font-heading font-medium text-[40px] md:text-[56px] lg:text-[68px] leading-[1.05] tracking-[-0.5px] text-text-primary">
            {headline}
            {headlineAccent &&
            <>
                <br />
                <span className="font-body italic font-normal text-divider">
                  {headlineAccent}
                </span>
              </>
            }
          </h1>

          <p className="font-body text-[17px] md:text-[19px] leading-[1.6] text-text-primary/75 mt-7 max-w-[680px]">
            {subhead}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 mt-10">
            <Link
              to={primaryCtaTo}
              className="inline-flex items-center justify-center px-7 py-3.5 bg-primary text-white rounded-full font-body text-[14px] font-medium hover:bg-primary/90 transition-colors">
              
              {primaryCtaText}
            </Link>
            {secondaryCtaText && secondaryCtaTo &&
            <Link
              to={secondaryCtaTo}
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-text-primary border border-text-primary/15 rounded-full font-body text-[14px] font-medium hover:border-text-primary/40 hover:bg-bg-light transition-colors">
              
                {secondaryCtaText}
              </Link>
            }
          </div>

          {trustLine &&
          <div className="flex items-center gap-3 mt-10 text-[13px] font-medium text-text-primary/70">
              <div className="flex text-divider">
                {[0, 1, 2, 3, 4].map((i) =>
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
              )}
              </div>
              <span>{trustLine}</span>
            </div>
          }
        </div>
      </div>

      {/* Image triptych */}
      {triptychImages &&
      <div className="w-full px-4 md:px-10 lg:px-[60px] pt-14 md:pt-20 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 max-w-[1320px] mx-auto">
            {triptychImages.map((src, i) =>
          <div
            key={i}
            className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-card bg-bg-light">
            
                <img
              src={src}
              alt={i === 0 ? imageAlt : ''}
              className="w-full h-full object-cover" />
            
              </div>
          )}
          </div>
        </div>
      }
    </section>);

}