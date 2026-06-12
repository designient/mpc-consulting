import React from 'react';
import { Link } from 'react-router-dom';
export interface CTABandProps {
  title: string;
  /** Optional phrase appended on a new line */
  titleAccent?: string;
  body?: string;
  ctaText: string;
  ctaTo: string;
  secondaryCtaText?: string;
  secondaryCtaTo?: string;
  variant?: 'centered' | 'split';
  bgImage?: string;
  /** Optional small avatar shown above the title */
  avatarSrc?: string;
  avatarName?: string;
  avatarRole?: string;
}
const DEFAULT_BG =
'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=2400&q=80';
const CTA_CLASSES =
'inline-flex items-center justify-center px-7 py-3.5 bg-white text-primary rounded-full font-body text-[14px] font-medium hover:bg-white/90 transition-colors';
export function CTABand({
  title,
  titleAccent,
  body,
  ctaText,
  ctaTo,
  secondaryCtaText,
  secondaryCtaTo,
  variant = 'centered',
  bgImage,
  avatarSrc,
  avatarName,
  avatarRole
}: CTABandProps) {
  if (variant === 'split') {
    return (
      <section className="w-full bg-white px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-20">
        <div className="max-w-[1280px] mx-auto rounded-2xl md:rounded-[28px] bg-stat px-8 py-10 md:px-12 md:py-12 lg:px-14 lg:py-14 xl:px-16 xl:py-16">
          <div className="grid grid-cols-1 xl:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 xl:gap-16 items-stretch">
            <div className="min-w-0 xl:min-w-[30rem]">
              <h2 className="font-heading font-semibold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[38px] xl:text-[38px] 2xl:text-[42px] leading-[1.12] tracking-[-0.02em] text-white text-left">
                <span className="block xl:whitespace-nowrap">{title}</span>
                {titleAccent && (
                  <span className="block xl:whitespace-nowrap">{titleAccent}</span>
                )}
              </h2>
            </div>

            <div className="flex flex-col justify-between gap-8 lg:gap-10">
              {body && (
                <p className="font-body text-[15px] md:text-[16px] lg:text-[17px] leading-[1.65] text-white/90 text-left lg:max-w-[420px] lg:ml-auto">
                  {body}
                </p>
              )}

              <div className="flex justify-start lg:justify-end mt-auto">
                <Link to={ctaTo} className={CTA_CLASSES}>
                  {ctaText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const bg = bgImage || DEFAULT_BG;
  return (
    <section className="relative w-full overflow-hidden">
      <img
        src={bg}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover" />
      
      <div className="absolute inset-0 bg-primary/85" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary/60" />

      <div className="relative px-4 py-20 md:px-10 md:py-28 lg:px-[60px] lg:py-[140px] text-center text-white">
        {avatarSrc &&
        <div className="flex items-center justify-center gap-3 mb-8">
            <img
            src={avatarSrc}
            alt={avatarName || ''}
            className="w-10 h-10 rounded-full object-cover border-2 border-white/30" />
          
            {(avatarName || avatarRole) &&
          <div className="text-left">
                {avatarName &&
            <div className="font-body text-[14px] font-medium">
                    {avatarName}
                  </div>
            }
                {avatarRole &&
            <div className="type-caption opacity-75">
                    {avatarRole}
                  </div>
            }
              </div>
          }
          </div>
        }

        <h2 className="type-h2 text-white max-w-[900px] mx-auto">
          {title}
          {titleAccent &&
          <>
              <br />
              <span className="font-body italic font-normal opacity-95">
                {titleAccent}
              </span>
            </>
          }
        </h2>

        {body &&
        <p className="font-body text-[16px] md:text-[18px] leading-[1.6] opacity-85 mt-7 max-w-[600px] mx-auto">
            {body}
          </p>
        }

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10">
          <Link to={ctaTo} className={CTA_CLASSES}>
            {ctaText}
          </Link>
          {secondaryCtaText && secondaryCtaTo &&
          <Link
            to={secondaryCtaTo}
            className="inline-flex items-center justify-center px-7 py-3.5 bg-transparent text-white border border-white/30 rounded-full font-body text-[14px] font-medium hover:border-white/60 hover:bg-white/5 transition-colors">
            
              {secondaryCtaText}
            </Link>
          }
        </div>
      </div>
    </section>);

}
