import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Heading } from '../ui/Heading';

export type PillarItem = {
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  ctaTo?: string;
  ctaText?: string;
};

type PillarsSectionProps = {
  eyebrow: string;
  title: string;
  intro: string;
  items: PillarItem[];
};

export function PillarsSection({
  eyebrow,
  title,
  intro,
  items,
}: PillarsSectionProps) {
  return (
    <section className="w-full bg-white px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
      <div className="text-center mb-10 max-w-[800px] mx-auto">
        <p className="section-eyebrow mb-3">{eyebrow}</p>
        <Heading level={2} className="mb-4">
          {title}
        </Heading>
        <p className="font-body text-[17px] leading-[1.7] text-text-primary opacity-80">
          {intro}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {items.map((pillar) => (
          <article
            key={pillar.title}
            className="flex flex-col h-full rounded-card border border-cta bg-white p-5 md:p-6">
            <img
              src={pillar.imageSrc}
              alt={pillar.imageAlt}
              className="w-full aspect-[4/3] object-cover rounded-[10px] md:rounded-[12px] mb-5 md:mb-6"
            />
            <h3 className="type-h3 text-[20px] md:text-[22px] text-text-primary mb-3">
              {pillar.title}
            </h3>
            <p className="font-body text-[15px] leading-[1.65] text-text-primary opacity-80 flex-grow mb-6">
              {pillar.body}
            </p>
            {(pillar.ctaTo ?? '/contact/') && (
              <Link
                to={pillar.ctaTo ?? '/contact/'}
                className="inline-flex items-center gap-1.5 font-body text-[13px] font-semibold uppercase tracking-[0.06em] text-cta border-b-2 border-cta pb-0.5 w-fit hover:gap-2 transition-all mt-auto">
                {pillar.ctaText ?? 'Explore'}
                <ArrowRight className="w-3.5 h-3.5" aria-hidden />
              </Link>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
