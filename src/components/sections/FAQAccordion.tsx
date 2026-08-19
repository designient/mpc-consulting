import React, { useState } from 'react';
import { Plus } from 'lucide-react';
export interface FAQItem {
  q: string;
  a: string;
}
export interface FAQAccordionProps {
  title?: string;
  eyebrow?: string;
  items: FAQItem[];
  layout?: 'full' | 'split';
  imageSrc?: string;
  imageAlt?: string;
  bg?: 'white' | 'soft';
}
export function FAQAccordion({
  title = 'Frequently Asked Questions',
  eyebrow,
  items,
  layout = 'full',
  imageSrc,
  imageAlt = '',
  bg = 'soft'
}: FAQAccordionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const bgClass = bg === 'soft' ? 'bg-bg-light' : 'bg-white';
  const accordion =
  <div className="w-full">
      {items.map((item, i) => {
      const isOpen = openIdx === i;
      return (
        <div
          key={i}
          className="bg-white rounded-card border border-text-primary/8 mb-3 overflow-hidden transition-shadow hover:shadow-subtle">
          
            <button
            onClick={() => setOpenIdx(isOpen ? null : i)}
            className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left group"
            aria-expanded={isOpen}>
            
              <span
              className={`font-heading font-semibold text-[17px] md:text-[18px] leading-snug transition-colors ${isOpen ? 'text-primary' : 'text-text-primary group-hover:text-primary'}`}>
              
                {item.q}
              </span>
              <span
              className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-cta text-white rotate-45' : 'bg-bg-light text-text-primary'}`}>
              
                <Plus className="w-4 h-4" />
              </span>
            </button>
            <div
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{
              maxHeight: isOpen ? '500px' : '0px'
            }}>
            
              <p className="font-body text-[15px] leading-[1.7] text-text-primary/75 px-6 pb-5 pr-12">
                {item.a}
              </p>
            </div>
          </div>);

    })}
    </div>;

  return (
    <section
      className={`w-full ${bgClass} px-4 py-16 md:px-10 md:py-20 lg:px-[60px] lg:py-[100px]`}>
      
      {layout === 'split' ?
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start max-w-[1280px] mx-auto">
          {imageSrc &&
        <div className="w-full sticky top-24">
              <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full aspect-[4/5] object-cover rounded-card" />
          
            </div>
        }
          <div>
            {eyebrow &&
          <p className="font-body text-[14px] uppercase tracking-[2px] font-semibold text-divider mb-4">
                {eyebrow}
              </p>
          }
            <h2 className="type-h2 text-text-primary mb-8">
              {title}
            </h2>
            {accordion}
          </div>
        </div> :

      <div className="max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-10">
            {eyebrow &&
          <p className="font-body text-[14px] uppercase tracking-[2px] font-semibold text-divider mb-4">
                {eyebrow}
              </p>
          }
            <h2 className="type-h2 text-text-primary">
              {title}
            </h2>
          </div>
          {accordion}
        </div>
      }
    </section>);

}
export function buildFAQSchema(items: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: it.a
      }
    }))
  };
}