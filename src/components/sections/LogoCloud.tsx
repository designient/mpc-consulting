import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { ClientLogo } from '../../data/clientLogos';

export interface LogoCloudProps {
  caption?: string;
  /** @deprecated Use `items` with image logos */
  logos?: string[];
  items?: ClientLogo[];
  bg?: 'white' | 'soft' | 'transparent';
  scrollable?: boolean;
  /** Continuous horizontal auto-scroll that loops seamlessly. */
  autoScroll?: boolean;
}

function toItems(logos: string[]): ClientLogo[] {
  return logos.map((name, i) => ({
    id: `text-${i}`,
    name,
    src: '',
  }));
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPrefersReducedMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return prefersReducedMotion;
}

function LogoTile({ logo }: { logo: ClientLogo }) {
  if (!logo.src) {
    return (
      <div className="shrink-0 font-body italic text-[22px] text-text-primary opacity-50 px-4">
        {logo.name}
      </div>
    );
  }

  return (
    <div className="shrink-0 flex items-center justify-center h-[56px] md:h-[64px] min-w-[130px] md:min-w-[150px] px-4 rounded-card bg-white border border-black/6 shadow-subtle">
      <img
        src={logo.src}
        alt={`${logo.name} logo`}
        width={140}
        height={48}
        loading="lazy"
        decoding="async"
        className="max-h-10 md:max-h-11 w-auto max-w-[130px] object-contain opacity-80 hover:opacity-100 transition-opacity"
      />
    </div>
  );
}

export function LogoCloud({
  caption,
  logos,
  items,
  bg = 'soft',
  scrollable = true,
  autoScroll = false,
}: LogoCloudProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const resolved = items ?? (logos ? toItems(logos) : []);
  const hasImages = resolved.some((l) => l.src);
  const useMarquee = autoScroll && hasImages && !prefersReducedMotion;
  const useManualScroll = scrollable && hasImages && !useMarquee;

  const bgClass =
    bg === 'soft' ? 'bg-bg-light' : bg === 'white' ? 'bg-white' : 'bg-transparent';

  const fadeFrom = bg === 'soft' ? 'from-bg-light' : 'from-white';

  const scrollBy = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({
      left: dir * Math.min(420, el.clientWidth * 0.85),
      behavior: 'smooth',
    });
  };

  const marqueeTrack = [...resolved, ...resolved];

  return (
    <div className={bgClass}>
      {caption && (
        <p className="text-center section-eyebrow mb-6 opacity-80">{caption}</p>
      )}

      {useMarquee ? (
        <div
          className="relative max-w-[1280px] mx-auto overflow-hidden group/logo-marquee"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
              setPaused(false);
            }
          }}
          aria-label="Client logos"
          tabIndex={0}>
          <div
            className={`pointer-events-none absolute left-0 top-0 bottom-0 w-8 md:w-16 z-10 bg-gradient-to-r ${fadeFrom} to-transparent`}
          />
          <div
            className={`pointer-events-none absolute right-0 top-0 bottom-0 w-8 md:w-16 z-10 bg-gradient-to-l ${fadeFrom} to-transparent`}
          />

          <div
            className={`flex items-center gap-10 md:gap-14 w-max py-2 animate-logo-marquee motion-reduce:animate-none ${paused ? '[animation-play-state:paused]' : ''}`}>
            {marqueeTrack.map((logo, i) => (
              <div
                key={`${logo.id}-${i}`}
                aria-hidden={i >= resolved.length}>
                <LogoTile logo={logo} />
              </div>
            ))}
          </div>
        </div>
      ) : useManualScroll ? (
        <div className="relative max-w-[1280px] mx-auto group/logo-scroll">
          <div
            className={`pointer-events-none absolute left-0 top-0 bottom-0 w-8 md:w-16 z-10 bg-gradient-to-r ${fadeFrom} to-transparent`}
          />
          <div
            className={`pointer-events-none absolute right-0 top-0 bottom-0 w-8 md:w-16 z-10 bg-gradient-to-l ${fadeFrom} to-transparent`}
          />

          <button
            type="button"
            onClick={() => scrollBy(-1)}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-black/10 shadow-subtle items-center justify-center text-primary hover:border-divider transition-colors"
            aria-label="Scroll logos left">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-black/10 shadow-subtle items-center justify-center text-primary hover:border-divider transition-colors"
            aria-label="Scroll logos right">
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            ref={trackRef}
            className="overflow-x-auto scroll-smooth overscroll-x-contain px-2 md:px-12 pb-2 [scrollbar-width:thin] [scrollbar-color:#0955B4_#f1f1f1]"
            aria-label="Client logos"
            tabIndex={0}>
            <div className="flex items-center gap-10 md:gap-14 w-max min-w-full py-2">
              {resolved.map((logo) => (
                <LogoTile key={logo.id} logo={logo} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-6 items-center justify-items-center max-w-[1100px] mx-auto">
          {resolved.map((logo) =>
            logo.src ? (
              <img
                key={logo.id}
                src={logo.src}
                alt={`${logo.name} logo`}
                className="max-h-10 object-contain opacity-70"
              />
            ) : (
              <div
                key={logo.id}
                className="font-body italic text-[22px] md:text-[24px] text-text-primary opacity-50">
                {logo.name}
              </div>
            ),
          )}
        </div>
      )}
    </div>
  );
}
