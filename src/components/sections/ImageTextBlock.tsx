import React from 'react';
import { Heading } from '../ui/Heading';
export interface ImageTextBlockProps {
  imageSrc: string;
  imageAlt?: string;
  orientation?: 'image-left' | 'image-right';
  heading: string;
  body: React.ReactNode;
  children?: React.ReactNode;
  /** Rounded corners + thin brand-blue border on the image */
  borderedImage?: boolean;
}

export function ImageTextBlock({
  imageSrc,
  imageAlt = '',
  orientation = 'image-left',
  heading,
  body,
  children,
  borderedImage = false,
}: ImageTextBlockProps) {
  const isImageLeft = orientation === 'image-left';

  return (
    <section className="w-full bg-bg-light px-4 py-4 md:px-10 md:py-10 lg:px-[60px] lg:py-[60px] flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-10">
      <div
        className={`w-full md:w-[45%] ${isImageLeft ? 'md:order-1' : 'md:order-2'}`}>
        {borderedImage ? (
          <div className="rounded-card border border-cta bg-white p-3 md:p-4 shadow-subtle">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full aspect-video object-cover rounded-[10px] md:rounded-[12px]"
            />
          </div>
        ) : (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover aspect-video rounded-none shadow-subtle-dark"
          />
        )}
      </div>
      <div
        className={`w-full md:w-[55%] flex flex-col items-start ${isImageLeft ? 'md:order-2' : 'md:order-1'}`}>
        
        <Heading level={2} className="mb-6">
          {heading}
        </Heading>
        <div className="type-paragraph mb-6">
          {body}
        </div>
        {children}
      </div>
    </section>);

}