import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { CaseStudy } from '../../data/caseStudies';
import { getCaseStudyAnchor } from '../../data/caseStudies';

type Props = {
  study: CaseStudy;
};

export function CaseStudyCard({ study }: Props) {
  return (
    <Link
      to={getCaseStudyAnchor(study.slug)}
      className="group flex flex-col bg-white rounded-card overflow-hidden shadow-subtle hover:shadow-medium transition-all duration-300 hover:-translate-y-0.5 border border-text-primary/5">
      <div className="w-full aspect-video overflow-hidden bg-bg-light relative">
        <img
          src={study.imageSrc}
          alt={study.imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-full bg-cta text-white font-body text-[13px] font-semibold shadow-subtle">
          {study.stat}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <p className="font-body text-[14px] uppercase tracking-[1.2px] text-divider mb-3 font-medium">
          {study.tag}
        </p>
        <h3 className="font-heading text-[20px] md:text-[22px] leading-[1.25] text-primary mb-3 group-hover:text-divider transition-colors">
          {study.headline}
        </h3>
        <p className="font-body text-[14px] leading-[1.6] text-text-primary/70 mb-5 line-clamp-2 flex-1">
          {study.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {study.services.map((service) => (
            <span
              key={service}
              className="inline-block px-2.5 py-1 rounded-full border border-divider/30 bg-bg-light font-body text-[12px] font-medium text-text-primary">
              {service}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-text-primary/10">
          <span className="font-body text-[13px] text-text-primary/60">
            {study.statLabel}
          </span>
          <span className="inline-flex items-center gap-1.5 font-body text-[14px] font-semibold text-cta group-hover:text-accent transition-colors">
            Read story
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
