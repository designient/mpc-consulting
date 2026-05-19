import React from 'react';
import { Heading } from '../ui/Heading';
import { Button } from '../ui/Button';
export interface HeroDarkAsymmetricProps {
  headline: string;
  subhead: string;
  primaryCtaText: string;
  secondaryCtaText?: string;
  imageSrc: string;
  imageAlt?: string;
}
export function HeroDarkAsymmetric({
  headline,
  subhead,
  primaryCtaText,
  secondaryCtaText,
  imageSrc,
  imageAlt = ''
}: HeroDarkAsymmetricProps) {
  return (
    <section className="w-full bg-primary min-h-[600px] px-4 py-4 md:px-10 md:py-10 lg:px-[60px] lg:py-[60px] flex flex-col md:flex-row items-center gap-10">
      <div className="w-full md:w-[55%] lg:w-[60%] flex flex-col items-start">
        <Heading
          level={1}
          color="text-inverse"
          showAccentBar
          accentBarPosition="above">
          
          {headline}
        </Heading>
        <p className="font-body text-[18px] leading-[1.6] text-text-inverse opacity-90 mt-6 mb-8 max-w-[90%]">
          {subhead}
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" size="lg">
            {primaryCtaText}
          </Button>
          {secondaryCtaText &&
          <Button variant="secondary" size="lg">
              {secondaryCtaText}
            </Button>
          }
        </div>
      </div>
      <div className="w-full md:w-[45%] lg:w-[40%] h-full min-h-[300px] md:min-h-[400px]">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover aspect-video md:aspect-[4/3] lg:aspect-video rounded-none shadow-medium-dark" />
        
      </div>
    </section>);

}