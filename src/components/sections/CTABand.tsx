import React from 'react';
import { Link } from 'react-router-dom';
export interface CTABandProps {
  title: string;
  /** Optional italic-serif phrase appended on a new line */
  titleAccent?: string;
  body?: string;
  ctaText: string;
  ctaTo: string;
  secondaryCtaText?: string;
  secondaryCtaTo?: string;
  /** @deprecated — kept for backwards compatibility */
  variant?: 'centered' | 'split';
  bgImage?: string;
  /** Optional small avatar shown above the title */
  avatarSrc?: string;
  avatarName?: string;
  avatarRole?: string;
}
const DEFAULT_BG =
'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=2400&q=80';
export function CTABand({
  title,
  titleAccent,
  body,
  ctaText,
  ctaTo,
  secondaryCtaText,
  secondaryCtaTo,
  bgImage,
  avatarSrc,
  avatarName,
  avatarRole
}: CTABandProps) {
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
            <div className="font-body text-[12px] opacity-75">
                    {avatarRole}
                  </div>
            }
              </div>
          }
          </div>
        }

        <h2 className="font-heading font-medium text-[36px] md:text-[52px] lg:text-[64px] leading-[1.05] tracking-[-0.5px] max-w-[900px] mx-auto">
          {title}
          {titleAccent &&
          <>
              <br />
              <span className="font-serif italic font-normal opacity-95">
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
          <Link
            to={ctaTo}
            className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-primary rounded-full font-body text-[14px] font-medium hover:bg-white/90 transition-colors">
            
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