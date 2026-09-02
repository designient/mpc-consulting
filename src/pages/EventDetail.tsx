import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin } from 'lucide-react';
import { StickyNav } from '../components/layout/StickyNav';
import { FooterDark } from '../components/sections/FooterDark';
import { EventCard } from '../components/sections/EventCard';
import { Breadcrumb } from '../components/sections/Breadcrumb';
import { Heading } from '../components/ui/Heading';
import { SEO, ORGANIZATION_SCHEMA } from '../components/seo/SEO';
import { buildBreadcrumbSchema } from '../components/sections/Breadcrumb';
import {
  EVENT_TOPIC_LABELS,
  EVENT_TYPE_LABELS,
  PAST_EVENTS,
  getEventBySlug,
  getEventPath,
  sortEventsByDateDesc,
} from '../data/events';

export function EventDetail() {
  const { slug } = useParams<{ slug: string }>();
  const event = slug ? getEventBySlug(slug) : undefined;

  if (!event) {
    return <Navigate to="/resources/events/" replace />;
  }

  const breadcrumb = [
    { label: 'Resources', to: '/resources/' },
    { label: 'Events', to: '/resources/events/' },
    { label: event.title },
  ];

  const relatedEvents = sortEventsByDateDesc(
    PAST_EVENTS.filter((item) => item.slug !== event.slug),
  ).slice(0, 2);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${event.title} | MPC Events`}
        description={event.description}
        canonicalPath={getEventPath(event.slug)}
        schema={[
          ORGANIZATION_SCHEMA,
          buildBreadcrumbSchema(breadcrumb),
          {
            '@context': 'https://schema.org',
            '@type': 'Event',
            name: event.title,
            startDate: event.startDate,
            eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
            eventStatus: 'https://schema.org/EventScheduled',
            location: {
              '@type': 'Place',
              name: event.location,
            },
            description: event.description,
            image: event.imageSrc,
            organizer: {
              '@type': 'Organization',
              name: 'MPC Cloud Consulting',
            },
          },
        ]}
      />

      <StickyNav />

      <section className="relative w-full min-h-[min(50svh,520px)] max-h-[520px] overflow-hidden flex items-end">
        <img
          src={event.imageSrc}
          alt={event.imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/55 to-primary/25" />

        <div className="relative w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-[60px] py-10 md:py-14">
          <Breadcrumb items={breadcrumb} variant="dark" className="mb-6" />
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/15 text-white font-body text-[13px] font-semibold backdrop-blur-sm">
              {EVENT_TYPE_LABELS[event.type]}
            </span>
            {event.topics.map((topic) => (
              <span
                key={topic}
                className="inline-flex items-center px-3 py-1 rounded-full border border-white/25 text-white/90 font-body text-[12px] font-medium backdrop-blur-sm">
                {EVENT_TOPIC_LABELS[topic]}
              </span>
            ))}
          </div>
          <h1 className="type-h1 text-text-inverse max-w-[900px]">{event.title}</h1>
          <div className="flex flex-wrap gap-5 mt-5 text-text-inverse/85 font-body text-[14px] md:text-[15px]">
            <span className="inline-flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {event.displayDate}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {event.location}
              {event.region ? ` · ${event.region}` : ''}
            </span>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-12 md:py-16 px-4 md:px-10 lg:px-[60px]">
        <div className="max-w-[800px] mx-auto">
          <p className="font-body text-[18px] md:text-[20px] leading-[1.7] text-text-primary">
            {event.detail.intro}
          </p>

          <div className="mt-10 md:mt-12 space-y-10 md:space-y-12">
            {event.detail.sections.map((section, index) => (
              <div key={index}>
                {section.heading && (
                  <Heading level={3} className="mb-4">
                    {section.heading}
                  </Heading>
                )}
                {section.paragraphs && section.paragraphs.length > 0 && (
                  <div className="space-y-4">
                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        className="font-body text-[16px] md:text-[17px] leading-[1.7] text-text-primary/85">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-4 space-y-3">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="font-body text-[16px] md:text-[17px] leading-[1.7] text-text-primary/85 pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.7em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-cta">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <Link
            to="/resources/events/"
            className="inline-flex items-center gap-2 mt-12 font-body text-[15px] font-medium text-cta hover:text-accent transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to all events
          </Link>
        </div>
      </section>

      {event.detail.gallery.length > 0 && (
        <section className="w-full bg-bg-light py-12 md:py-16 px-4 md:px-10 lg:px-[60px]">
          <div className="max-w-[1280px] mx-auto">
            <Heading level={2} className="mb-8 md:mb-10">
              Event gallery
            </Heading>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {event.detail.gallery.map((image) => (
                <div
                  key={image.src}
                  className="overflow-hidden rounded-card bg-white shadow-subtle border border-text-primary/5">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedEvents.length > 0 && (
        <section className="w-full bg-white py-12 md:py-16 px-4 md:px-10 lg:px-[60px]">
          <div className="max-w-[1280px] mx-auto">
            <Heading level={2} className="mb-8 md:mb-10">
              More past events
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {relatedEvents.map((relatedEvent) => (
                <EventCard key={relatedEvent.slug} event={relatedEvent} />
              ))}
            </div>
          </div>
        </section>
      )}

      <FooterDark />
    </div>
  );
}
