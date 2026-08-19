import React, { useCallback, useEffect, useState } from 'react';

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  country?: string;
  avatarSrc?: string;
}

export interface TestimonialGridProps {
  eyebrow?: string;
  title?: string;
  items: Testimonial[];
  /** 'light' is the default editorial style. 'dark' kept for backwards compatibility. */
  variant?: 'light' | 'dark';
  columns?: 2 | 3;
  /** Show one testimonial at a time and auto-advance. */
  carousel?: boolean;
  /** Auto-advance interval in ms (carousel only). */
  carouselIntervalMs?: number;
}

const PLACEHOLDER_AVATARS = [
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80',
];

const DEFAULT_CAROUSEL_INTERVAL_MS = 6000;

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

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
  cardCls: string;
  quoteCls: string;
  nameCls: string;
  roleCls: string;
  dividerCls: string;
  large?: boolean;
}

function TestimonialCard({
  testimonial: t,
  index,
  cardCls,
  quoteCls,
  nameCls,
  roleCls,
  dividerCls,
  large = false,
}: TestimonialCardProps) {
  return (
    <div
      className={`rounded-card border ${cardCls} flex flex-col min-h-0 ${
        large ? 'p-9 md:p-12 lg:p-14 min-h-[280px] md:min-h-[320px]' : 'p-7 md:p-8'
      }`}>
      <p
        className={`font-body leading-[1.6] ${quoteCls} ${
          large
            ? 'text-[20px] md:text-[22px] lg:text-[24px] mb-8 md:mb-10'
            : 'text-[17px] md:text-[18px] mb-7'
        }`}>
        &ldquo;{t.quote}&rdquo;
      </p>
      <div
        className={`mt-auto flex items-center gap-3 md:gap-4 border-t ${dividerCls} ${
          large ? 'pt-6 md:pt-8' : 'pt-5'
        }`}>
        <img
          src={
            t.avatarSrc || PLACEHOLDER_AVATARS[index % PLACEHOLDER_AVATARS.length]
          }
          alt={t.name}
          className={`rounded-full object-cover flex-shrink-0 ${
            large ? 'w-12 h-12 md:w-14 md:h-14' : 'w-10 h-10'
          }`}
        />
        <div className="min-w-0">
          <p
            className={`font-heading font-semibold ${nameCls} ${
              large ? 'text-[17px] md:text-[18px]' : 'text-[15px]'
            }`}>
            {t.name}
          </p>
          <p
            className={`font-body ${roleCls} mt-0.5 truncate ${
              large ? 'text-[14px] md:text-[15px]' : 'text-[12px]'
            }`}>
            {t.title}, {t.company}
            {t.country ? ` · ${t.country}` : ''}
          </p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialGrid({
  eyebrow,
  title,
  items,
  variant = 'light',
  columns = 2,
  carousel = false,
  carouselIntervalMs = DEFAULT_CAROUSEL_INTERVAL_MS,
}: TestimonialGridProps) {
  const isDark = variant === 'dark';
  const bgCls = isDark ? 'bg-primary text-white' : 'bg-white text-text-primary';
  const cardCls = isDark
    ? 'bg-white/5 border-white/10'
    : 'bg-bg-light border-transparent';
  const quoteCls = isDark ? 'text-white' : 'text-text-primary';
  const nameCls = isDark ? 'text-white' : 'text-text-primary';
  const roleCls = isDark ? 'text-white/65' : 'text-text-primary/65';
  const dividerCls = isDark ? 'border-white/10' : 'border-text-primary/10';
  const gridCols =
    columns === 3 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2';

  const prefersReducedMotion = usePrefersReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);

  const goTo = useCallback(
    (index: number) => {
      if (index === activeIndex || items.length === 0) return;
      setFadeIn(false);
      window.setTimeout(() => {
        setActiveIndex(index);
        setFadeIn(true);
      }, 200);
    },
    [activeIndex, items.length],
  );

  useEffect(() => {
    if (!carousel || items.length <= 1 || paused || prefersReducedMotion) {
      return;
    }
    const id = window.setInterval(() => {
      setFadeIn(false);
      window.setTimeout(() => {
        setActiveIndex((i) => (i + 1) % items.length);
        setFadeIn(true);
      }, 200);
    }, carouselIntervalMs);
    return () => window.clearInterval(id);
  }, [
    carousel,
    items.length,
    paused,
    prefersReducedMotion,
    carouselIntervalMs,
  ]);

  const headerAlignCls = carousel ? 'text-center' : 'text-center md:text-left';
  const dotActiveCls = isDark ? 'bg-white' : 'bg-cta';
  const dotInactiveCls = isDark ? 'bg-white/30' : 'bg-text-primary/20';

  return (
    <section
      className={`w-full ${bgCls} px-4 py-16 md:px-10 md:py-20 lg:px-[60px] lg:py-[100px]`}>
      {(eyebrow || title) && (
        <div className={`max-w-[1280px] mx-auto mb-12 ${headerAlignCls}`}>
          {eyebrow && (
            <p
              className={`font-body text-[14px] uppercase tracking-[2px] font-semibold ${isDark ? 'text-white/80' : 'text-divider'} mb-4`}>
              {eyebrow}
            </p>
          )}
          {title && (
            <h2
              className={`type-h2 max-w-[800px] mx-auto ${isDark ? 'text-white' : 'text-text-primary'}`}>
              {title}
            </h2>
          )}
        </div>
      )}

      {carousel ? (
        <div
          className="max-w-[1100px] mx-auto w-full"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
              setPaused(false);
            }
          }}>
          <div
            className={`transition-opacity duration-300 ease-out ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
            aria-live="polite"
            aria-atomic="true">
            <TestimonialCard
              testimonial={items[activeIndex]}
              index={activeIndex}
              cardCls={cardCls}
              quoteCls={quoteCls}
              nameCls={nameCls}
              roleCls={roleCls}
              dividerCls={dividerCls}
              large
            />
          </div>

          {items.length > 1 && (
            <div
              className="mt-10 md:mt-12 flex justify-center gap-2.5"
              role="tablist"
              aria-label="Testimonials">
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === activeIndex}
                  aria-label={`Show testimonial ${i + 1} of ${items.length}`}
                  onClick={() => goTo(i)}
                  className={`h-2 w-2 rounded-full transition-colors ${i === activeIndex ? dotActiveCls : dotInactiveCls}`}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div
          className={`max-w-[1280px] mx-auto grid grid-cols-1 ${gridCols} gap-4 md:gap-6`}>
          {items.map((t, i) => (
            <TestimonialCard
              key={i}
              testimonial={t}
              index={i}
              cardCls={cardCls}
              quoteCls={quoteCls}
              nameCls={nameCls}
              roleCls={roleCls}
              dividerCls={dividerCls}
            />
          ))}
        </div>
      )}
    </section>
  );
}
