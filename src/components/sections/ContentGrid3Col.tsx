import React from 'react';
import { Card } from '../ui/Card';
import { Heading } from '../ui/Heading';
import { Button } from '../ui/Button';
export interface GridItem {
  imageSrc?: string;
  title: string;
  description: string;
  ctaText?: string;
}
export interface ContentGrid3ColProps {
  sectionTitle?: string;
  items: GridItem[];
}
export function ContentGrid3Col({ sectionTitle, items }: ContentGrid3ColProps) {
  return (
    <section className="w-full bg-bg-light px-4 py-8 md:px-10 md:py-10 lg:px-[60px] lg:py-[60px]">
      {sectionTitle &&
      <div className="mb-10 text-center md:text-left">
          <Heading level={2}>{sectionTitle}</Heading>
        </div>
      }
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
        {items.map((item, index) =>
        <Card key={index} imageSrc={item.imageSrc} bg="white">
            <Heading level={3} className="mb-4">
              {item.title}
            </Heading>
            <p className="font-body text-[16px] leading-[1.6] text-text-primary mb-6 flex-grow">
              {item.description}
            </p>
            {item.ctaText &&
          <div className="mt-auto">
                <Button variant="primary" size="md">
                  {item.ctaText}
                </Button>
              </div>
          }
          </Card>
        )}
      </div>
    </section>);

}