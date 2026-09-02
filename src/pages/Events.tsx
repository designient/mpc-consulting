import React, { useMemo, useState } from 'react';
import { StickyNav } from '../components/layout/StickyNav';
import { FooterDark } from '../components/sections/FooterDark';
import { ServiceHero } from '../components/sections/heroes/ServiceHero';
import { FilterBar } from '../components/sections/FilterBar';
import { EventCard } from '../components/sections/EventCard';
import {
  SEO,
  ORGANIZATION_SCHEMA,
  ORIGIN,
} from '../components/seo/SEO';
import { buildBreadcrumbSchema } from '../components/sections/Breadcrumb';
import {
  EVENT_TYPE_FILTERS,
  PAST_EVENTS,
  getEventPath,
  sortEventsByDateDesc,
  type EventTypeFilter,
} from '../data/events';

const BREADCRUMB = [
  { label: 'Resources', to: '/resources/' },
  { label: 'Events' },
];

function buildEventsItemListSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'MPC Past Events',
    itemListElement: PAST_EVENTS.map((event, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: event.title,
      url: `${ORIGIN}${getEventPath(event.slug)}`,
    })),
  };
}

export function Events() {
  const [activeFilter, setActiveFilter] = useState<EventTypeFilter>('all');

  const filtered = useMemo(() => {
    const events =
      activeFilter === 'all'
        ? PAST_EVENTS
        : PAST_EVENTS.filter((event) => event.type === activeFilter);
    return sortEventsByDateDesc(events);
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Past Events | Roundtables & Conferences | MPC"
        description="Browse MPC's archive of past roundtables and conferences on Oracle Cloud, AI, and enterprise transformation."
        canonicalPath="/resources/events/"
        schema={[
          ORGANIZATION_SCHEMA,
          buildBreadcrumbSchema(BREADCRUMB),
          buildEventsItemListSchema(),
        ]}
      />

      <StickyNav />

      <ServiceHero
        eyebrow="Events"
        headline="Our Events"
        imageSrc="/resources-hero.png"
        imageAlt="MPC events and sessions"
        breadcrumb={BREADCRUMB}
      />

      <section
        id="library"
        className="w-full bg-bg-light pt-12 md:pt-16 pb-16 md:pb-20 scroll-mt-[140px]">
        <FilterBar
          filters={EVENT_TYPE_FILTERS}
          activeId={activeFilter}
          onChange={(id) => setActiveFilter(id as EventTypeFilter)}
        />

        <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-[60px] mt-10">
          {filtered.length === 0 ? (
            <div className="bg-white rounded-card py-16 text-center">
              <p className="font-heading text-[20px] text-text-primary mb-2">
                No matches yet
              </p>
              <p className="font-body text-[15px] text-text-primary/70">
                Try a different category filter.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {filtered.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          )}
        </div>
      </section>

      <FooterDark />
    </div>
  );
}
