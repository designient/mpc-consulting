import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Heading } from '../ui/Heading';

export type ServiceCapability = {
  title: string;
  body: string;
  to: string;
};

export interface ServiceCapabilitiesProps {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  capabilities: ServiceCapability[];
  columns?: 3 | 4;
}

export function ServiceCapabilities({
  id = 'overview',
  eyebrow = 'Overview',
  title,
  intro,
  capabilities,
  columns = 3,
}: ServiceCapabilitiesProps) {
  const gridClass =
    columns === 4
      ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-[1280px] mx-auto'
      : 'grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-[1280px] mx-auto';

  return (
    <section
      id={id}
      className="scroll-mt-[140px] w-full bg-bg-light px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
      <div className="text-center mb-10 max-w-[800px] mx-auto">
        <p className="section-eyebrow mb-3">{eyebrow}</p>
        <Heading level={2}>{title}</Heading>
        {intro && (
          <p className="font-body text-[17px] leading-[1.7] text-text-primary opacity-80 mt-4">
            {intro}
          </p>
        )}
      </div>
      <div className={gridClass}>
        {capabilities.map((cap) => (
          <Link
            key={cap.to}
            to={cap.to}
            className="group flex flex-col rounded-card shadow-subtle bg-white border border-transparent hover:border-divider transition-all p-6 md:p-7 min-h-[280px]">
            <div className="w-10 h-1 bg-divider mb-5" />
            <Heading
              level={3}
              className="mb-3 group-hover:text-divider transition-colors">
              {cap.title}
            </Heading>
            <p className="font-body text-[16px] leading-[1.7] text-text-primary opacity-80 mb-6 flex-grow">
              {cap.body}
            </p>
            <span className="inline-flex items-center gap-2 font-body text-[14px] font-semibold text-cta group-hover:text-accent transition-colors mt-auto">
              Explore
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
