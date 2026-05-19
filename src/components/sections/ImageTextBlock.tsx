import React from 'react';
import { Heading } from '../ui/Heading';
export interface ImageTextBlockProps {
  imageSrc: string;
  imageAlt?: string;
  orientation?: 'image-left' | 'image-right';
  heading: string;
  body: React.ReactNode;
  children?: React.ReactNode;
}
export function ImageTextBlock({
  imageSrc,
  imageAlt = '',
  orientation = 'image-left',
  heading,
  body,
  children
}: ImageTextBlockProps) {
  const isImageLeft = orientation === 'image-left';
  return (
    <section className="w-full bg-bg-light px-4 py-4 md:px-10 md:py-10 lg:px-[60px] lg:py-[60px] flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-10">
      <div
        className={`w-full md:w-[45%] ${isImageLeft ? 'md:order-1' : 'md:order-2'}`}>
        
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover aspect-video rounded-none shadow-subtle-dark" />
        
      </div>
      <div
        className={`w-full md:w-[55%] flex flex-col items-start ${isImageLeft ? 'md:order-2' : 'md:order-1'}`}>
        
        <Heading level={2} className="mb-6">
          {heading}
        </Heading>
        <div className="font-body text-[16px] leading-[1.6] text-text-primary mb-6">
          {body}
        </div>
        {children}
      </div>
    </section>);

}