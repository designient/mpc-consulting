import React, { useState } from 'react';
import type { LucideIcon } from 'lucide-react';

export type PillarItem = {
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  icon: LucideIcon;
};

export interface PillarCardsProps {
  items: PillarItem[];
}

const IMAGE_FALLBACK =
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80';

/** Blue-bordered cards with compact image header — matches Industries We Serve styling */
export function PillarCards({ items }: PillarCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 items-stretch">
      {items.map((pillar) => (
        <PillarCard key={pillar.title} pillar={pillar} />
      ))}
    </div>
  );
}

function PillarCard({ pillar }: { pillar: PillarItem }) {
  const Icon = pillar.icon;
  const [imgSrc, setImgSrc] = useState(pillar.imageSrc);
  const [failed, setFailed] = useState(false);

  return (
    <article className="flex flex-col h-full min-w-0 bg-white border-2 border-[#0369a1] rounded-card overflow-hidden hover:shadow-subtle transition-shadow">
      <div className="relative w-full h-[120px] sm:h-[128px] md:h-[136px] shrink-0 overflow-hidden bg-bg-light">
        {!failed ?
          <img
            src={imgSrc}
            alt={pillar.imageAlt}
            width={400}
            height={136}
            className="w-full h-full object-cover object-center"
            loading="lazy"
            decoding="async"
            onError={() => {
              if (imgSrc !== IMAGE_FALLBACK) {
                setImgSrc(IMAGE_FALLBACK);
              } else {
                setFailed(true);
              }
            }}
          />
        : (
          <div
            className="w-full h-full flex items-center justify-center bg-[#0369a1]/10"
            aria-hidden>
            <Icon className="w-10 h-10 text-[#0369a1]/40" />
          </div>
        )}
      </div>
      <div className="flex flex-col flex-grow p-5 md:p-6 min-w-0">
        <Icon className="w-7 h-7 text-[#0369a1] mb-3 shrink-0" />
        <h3 className="type-h3 text-[18px] md:text-[20px] text-[#0369a1] mb-2 leading-snug">
          {pillar.title}
        </h3>
        <p className="font-body text-[14px] leading-[1.6] text-[#0369a1]">
          {pillar.body}
        </p>
      </div>
    </article>
  );
}
