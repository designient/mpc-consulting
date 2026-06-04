import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Heading } from '../ui/Heading';
export type Industry = {
  id: string;
  label: string;
  headline: string;
  description: string;
  challenges: string[];
  image: string;
  href: string;
};
type Props = {
  industries: Industry[];
  eyebrow?: string;
  title?: string;
};
export function IndustryTabSwitcher({ industries, eyebrow, title }: Props) {
  const [activeId, setActiveId] = useState(industries[0]?.id);
  const active = industries.find((i) => i.id === activeId) ?? industries[0];
  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 md:px-10 lg:px-[60px]">
      <div className="max-w-[1280px] mx-auto">
        {eyebrow &&
        <p className="font-body text-[14px] uppercase tracking-[1.2px] text-divider mb-3">
            {eyebrow}
          </p>
        }
        {title &&
        <div className="mb-10 md:mb-12 max-w-3xl">
            <Heading level={2} showAccentBar>
              {title}
            </Heading>
          </div>
        }

        {/* Tabs */}
        <div className="border-b border-text-primary/10 mb-10 md:mb-12 -mx-4 md:mx-0 px-4 md:px-0 overflow-x-auto">
          <div className="flex gap-1 md:gap-2 min-w-max md:min-w-0">
            {industries.map((ind) => {
              const isActive = ind.id === active.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveId(ind.id)}
                  className={`relative px-4 md:px-5 py-3 md:py-4 font-body text-[14px] md:text-[15px] whitespace-nowrap transition-colors ${isActive ? 'text-primary font-medium' : 'text-text-primary/60 hover:text-text-primary'}`}>
                  
                  {ind.label}
                  {isActive &&
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-divider" />
                  }
                </button>);

            })}
          </div>
        </div>

        {/* Content panel */}
        <div
          key={active.id}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center animate-[fadeIn_0.3s_ease-out]"
          style={{
            animation: 'fadeIn 300ms ease-out'
          }}>
          
          <div>
            <Heading level={3} className="mb-4">
              {active.headline}
            </Heading>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.7] text-text-primary/80 mb-6">
              {active.description}
            </p>
            <ul className="space-y-3 mb-8">
              {active.challenges.map((c, i) =>
              <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-divider/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-divider" />
                  </span>
                  <span className="font-body text-[15px] text-text-primary/85 leading-[1.6]">
                    {c}
                  </span>
                </li>
              )}
            </ul>
            <Link
              to={active.href}
              className="inline-flex items-center gap-2 font-body text-[15px] font-medium text-divider hover:text-primary transition-colors group">
              
              Explore {active.label} solutions
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="relative w-full aspect-[4/3] overflow-hidden">
            <img
              src={active.image}
              alt={active.label}
              className="w-full h-full object-cover" />
            
            <span className="absolute top-0 left-0 w-[60px] h-[3px] bg-divider" />
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>);

}