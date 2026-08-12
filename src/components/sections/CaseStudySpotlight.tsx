import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Heading } from '../ui/Heading';
import {
  statAccentCardClass,
  statAccentEyebrowClass,
  statAccentLabelClass,
  statAccentNumberClass,
} from '../ui/StatCallout';
import type { CaseStudy } from '../../data/caseStudies';
import { getCaseStudyAnchor } from '../../data/caseStudies';

const DEFAULT_INTERVAL_MS = 7000;

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

type Props = {
  items: CaseStudy[];
  eyebrow?: string;
  title?: string;
};

export function CaseStudySpotlight({
  items,
  eyebrow = 'Featured stories',
  title = 'Transformation outcomes that speak for themselves',
}: Props) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);

  const goTo = useCallback(
    (index: number) => {
      if (items.length === 0) return;
      const next = (index + items.length) % items.length;
      if (next === activeIndex) return;
      setFadeIn(false);
      window.setTimeout(() => {
        setActiveIndex(next);
        setFadeIn(true);
      }, 200);
    },
    [activeIndex, items.length],
  );

  useEffect(() => {
    if (items.length <= 1 || paused || prefersReducedMotion) return;
    const id = window.setInterval(() => {
      setFadeIn(false);
      window.setTimeout(() => {
        setActiveIndex((i) => (i + 1) % items.length);
        setFadeIn(true);
      }, 200);
    }, DEFAULT_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [items.length, paused, prefersReducedMotion]);

  if (items.length === 0) return null;

  const study = items[activeIndex];

  return (
    <section className="w-full bg-white px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
      <div className="text-center mb-10 max-w-[800px] mx-auto">
        <p className="section-eyebrow mb-3">{eyebrow}</p>
        <Heading level={2}>{title}</Heading>
      </div>

      <div
        className="max-w-[1280px] mx-auto"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
            setPaused(false);
          }
        }}>
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center transition-opacity duration-300 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
          aria-live="polite">
          <div className="lg:col-span-7 relative">
            <img
              src={study.imageSrc}
              alt={study.imageAlt}
              className="w-full aspect-video object-cover rounded-card shadow-subtle-dark"
            />
            <div
              className={`lg:absolute lg:right-[-24px] lg:bottom-[-40px] mt-6 lg:mt-0 max-w-[320px] shadow-medium-dark p-6 md:p-7 ${statAccentCardClass}`}>
              <p className={`${statAccentEyebrowClass} mb-2`}>Outcome</p>
              <div
                className={`${statAccentNumberClass} text-[48px] md:text-[56px] leading-none`}>
                {study.stat}
              </div>
              <p className={`${statAccentLabelClass} mt-2`}>{study.statLabel}</p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="inline-block font-body text-[14px] uppercase tracking-[0.8px] font-medium text-divider border border-divider/40 rounded-full px-3 py-1 mb-4">
              {study.tag}
            </span>
            <Heading level={3} className="mb-4">
              {study.headline}
            </Heading>
            <p className="font-body text-[16px] leading-[1.7] text-text-primary opacity-80 mb-5">
              {study.description}
            </p>
            {study.quote && (
              <blockquote className="border-l-2 border-stat pl-4 mb-6">
                <p className="font-body text-[15px] leading-[1.65] text-text-primary opacity-85 italic">
                  &ldquo;{study.quote}&rdquo;
                </p>
                {study.quoteAttribution && (
                  <cite className="not-italic font-body text-[13px] text-text-primary/60 mt-2 block">
                    {study.quoteAttribution}
                  </cite>
                )}
              </blockquote>
            )}
            <Link
              to={getCaseStudyAnchor(study.slug)}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-cta text-white rounded-full font-body text-[14px] font-medium hover:opacity-90 transition-opacity group">
              Read the story
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {items.length > 1 && (
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              className="w-10 h-10 rounded-full border border-black/10 bg-white shadow-subtle flex items-center justify-center text-primary hover:border-divider transition-colors"
              aria-label="Previous story">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Featured case studies">
              {items.map((item, i) => (
                <button
                  key={item.slug}
                  type="button"
                  role="tab"
                  aria-selected={i === activeIndex}
                  aria-label={`Show story: ${item.headline}`}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all ${i === activeIndex ? 'w-8 bg-cta' : 'w-2 bg-text-primary/20'}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              className="w-10 h-10 rounded-full border border-black/10 bg-white shadow-subtle flex items-center justify-center text-primary hover:border-divider transition-colors"
              aria-label="Next story">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
