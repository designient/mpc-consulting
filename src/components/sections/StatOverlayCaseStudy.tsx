import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Heading } from '../ui/Heading';
import {
  statAccentCardClass,
  statAccentEyebrowClass,
  statAccentLabelClass,
  statAccentNumberClass
} from '../ui/StatCallout';
export interface StatOverlayCaseStudyProps {
  id?: string;
  eyebrow?: string;
  tag?: string;
  headline: string;
  description: string;
  metadata?: string;
  imageSrc: string;
  imageAlt?: string;
  stat: string;
  statLabel: string;
  statContext?: string;
  ctaText?: string;
  ctaTo?: string;
  bg?: 'white' | 'soft';
}
export function StatOverlayCaseStudy({
  id,
  eyebrow = 'Featured Case Study',
  tag,
  headline,
  description,
  metadata,
  imageSrc,
  imageAlt = '',
  stat,
  statLabel,
  statContext,
  ctaText = 'Read case study',
  ctaTo = '/resources/case-studies/',
  bg = 'soft'
}: StatOverlayCaseStudyProps) {
  const bgClass = bg === 'soft' ? 'bg-bg-light' : 'bg-white';
  return (
    <section
      id={id}
      className={`w-full ${bgClass} px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]`}>
      
      <p className="section-eyebrow mb-3">
        {eyebrow}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Image + overlapping stat card */}
        <div className="relative lg:col-span-7">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full aspect-video object-cover rounded-card shadow-subtle-dark" />
          
          {/* Stat card — overlaps on desktop, sits below on mobile */}
          <div
            className={`lg:absolute lg:right-[-40px] lg:bottom-[-60px] mt-6 lg:mt-0 max-w-[360px] shadow-medium-dark p-7 md:p-8 ${statAccentCardClass}`}>
            <p className={`${statAccentEyebrowClass} mb-2`}>Outcome</p>
            <div
              className={`${statAccentNumberClass} text-[56px] md:text-[64px] leading-none`}>
              {stat}
            </div>
            <p className={`${statAccentLabelClass} mt-2`}>{statLabel}</p>
            {statContext &&
            <p className="font-body text-[14px] leading-[1.5] text-white/80 mt-3">
                {statContext}
              </p>
            }
          </div>
        </div>

        {/* Right-side narrative */}
        <div className="lg:col-span-5 lg:pl-4">
          {tag &&
          <span className="inline-block font-body text-[14px] uppercase tracking-[0.8px] font-medium text-divider border border-divider/40 rounded-full px-3 py-1 mb-4">
              {tag}
            </span>
          }
          <Heading level={3} className="mb-4">
            {headline}
          </Heading>
          <p className="font-body text-[16px] leading-[1.7] text-text-primary opacity-80 mb-5">
            {description}
          </p>
          {metadata &&
          <p className="font-body text-[14px] uppercase tracking-[0.8px] font-medium text-text-primary opacity-60 mb-6">
              {metadata}
            </p>
          }
          {ctaText && ctaTo &&
          <Link
            to={ctaTo}
            className="inline-flex items-center gap-2 font-body text-[15px] font-semibold text-cta hover:text-accent transition-colors group">
            
              {ctaText}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          }
        </div>
      </div>
    </section>);

}