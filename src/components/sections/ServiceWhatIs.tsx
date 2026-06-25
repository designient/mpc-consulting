import React from 'react';
import { Heading } from '../ui/Heading';
export interface ServiceWhatIsProps {
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  id?: string;
}
export function ServiceWhatIs({
  title,
  body,
  imageSrc,
  imageAlt,
  id
}: ServiceWhatIsProps) {
  return (
    <section
      id={id}
      className={`w-full bg-bg-light px-4 py-14 md:px-10 md:py-16 lg:px-[60px] lg:py-20${id ? ' scroll-mt-[140px]' : ''}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-[1280px] mx-auto">
        <div className="flex flex-col items-start">
          <p className="section-eyebrow mb-3">AI Overview-ready</p>
          <Heading level={2} className="mb-5">
            {title}
          </Heading>
          <p className="font-body text-[17px] md:text-[18px] leading-[1.75] text-text-primary opacity-85">
            {body}
          </p>
        </div>
        <div className="w-full">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full aspect-[4/3] object-cover rounded-card shadow-subtle"
          />
        </div>
      </div>
    </section>
  );
}
