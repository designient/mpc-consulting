import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BoxIcon } from 'lucide-react';
import { Heading } from '../ui/Heading';
import { Card } from '../ui/Card';

export interface SolutionColumn {
  icon: BoxIcon;
  title: string;
  items: string[];
  imageSrc?: string;
  imageAlt?: string;
  to?: string;
}

export interface SolutionColumnsProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  columns: SolutionColumn[];
  bg?: 'white' | 'soft';
  centerHeader?: boolean;
}

export function SolutionColumns({
  id,
  eyebrow = 'Solutions',
  title,
  columns,
  bg = 'soft',
  centerHeader = true,
}: SolutionColumnsProps) {
  const bgClass = bg === 'soft' ? 'bg-bg-light' : 'bg-white';

  return (
    <section
      id={id}
      className={`scroll-mt-[140px] w-full ${bgClass} px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]`}>
      <div
        className={`mb-10 ${centerHeader ? 'text-center max-w-[800px] mx-auto' : ''}`}>
        <p className="section-eyebrow mb-3">{eyebrow}</p>
        {title && <Heading level={2}>{title}</Heading>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-[1280px] mx-auto">
        {columns.map((col, i) => {
          const Icon = col.icon;
          const cardInner = (
            <Card bg="white" className="p-0 min-h-0 overflow-hidden h-full">
              {col.imageSrc && (
                <img
                  src={col.imageSrc}
                  alt={col.imageAlt ?? col.title}
                  className="w-full aspect-[16/10] object-cover"
                />
              )}
              <div className="p-6 md:p-7 flex flex-col flex-1">
              <div className="w-11 h-11 rounded-md bg-stat/10 flex items-center justify-center text-stat mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <Heading level={3} className="mb-4">
                {col.title}
              </Heading>
              <ul className="space-y-2 flex-grow">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="font-body text-[15px] leading-[1.6] text-text-primary opacity-80 flex gap-2">
                    <span className="text-stat shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-stat" />
                    {item}
                  </li>
                ))}
              </ul>
              {col.to && (
                <span className="inline-flex items-center gap-2 font-body text-[14px] font-semibold text-cta mt-6 group-hover:text-accent transition-colors">
                  Explore
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              )}
              </div>
            </Card>
          );
          return col.to ? (
            <Link key={i} to={col.to} className="group block h-full">
              {cardInner}
            </Link>
          ) : (
            <div key={i} className="h-full">{cardInner}</div>
          );
        })}
      </div>
    </section>
  );
}
