import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BoxIcon } from 'lucide-react';
import { Heading } from '../ui/Heading';
export interface RelatedServiceItem {
  icon: BoxIcon;
  title: string;
  description: string;
  to: string;
}
export interface RelatedServicesProps {
  eyebrow?: string;
  title?: string;
  items: RelatedServiceItem[];
  id?: string;
  bg?: 'white' | 'soft';
}
export function RelatedServices({
  eyebrow = 'Related Services',
  title = 'Continue exploring',
  items,
  id,
  bg = 'white'
}: RelatedServicesProps) {
  const bgClass = bg === 'soft' ? 'bg-bg-light' : 'bg-white';
  return (
    <section
      id={id}
      className={`w-full ${bgClass} px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]`}>
      
      <div className="mb-10">
        <p className="font-body text-[12px] uppercase tracking-[0.8px] font-semibold text-divider mb-3">
          {eyebrow}
        </p>
        <Heading level={2}>{title}</Heading>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              key={i}
              to={item.to}
              className="group flex flex-col rounded-card shadow-subtle bg-white border border-transparent hover:border-divider transition-all p-6 md:p-7">
              
              <div className="w-12 h-12 rounded-md bg-divider/10 flex items-center justify-center text-divider mb-5">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-medium text-[20px] md:text-[22px] leading-tight tracking-tight text-text-primary mb-3 group-hover:text-divider transition-colors">
                {item.title}
              </h3>
              <p className="font-body text-[15px] leading-[1.6] text-text-primary opacity-75 mb-6 flex-grow">
                {item.description}
              </p>
              <span className="inline-flex items-center gap-2 font-body text-[14px] font-semibold text-cta group-hover:text-accent transition-colors mt-auto">
                Explore{' '}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>);

        })}
      </div>
    </section>);

}