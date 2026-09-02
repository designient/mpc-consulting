import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import type { PastEvent } from '../../data/events';
import {
  EVENT_TOPIC_LABELS,
  EVENT_TYPE_LABELS,
  getEventPath,
} from '../../data/events';

type Props = {
  event: PastEvent;
};

export function EventCard({ event }: Props) {
  return (
    <Link
      to={getEventPath(event.slug)}
      className="group flex flex-col bg-white rounded-card overflow-hidden shadow-subtle hover:shadow-medium transition-all duration-300 hover:-translate-y-0.5 border border-text-primary/5 h-full">
      <div className="w-full aspect-video overflow-hidden bg-bg-light relative">
        <img
          src={event.imageSrc}
          alt={event.imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-full bg-cta text-white font-body text-[13px] font-semibold shadow-subtle">
          {EVENT_TYPE_LABELS[event.type]}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-heading text-[20px] md:text-[22px] leading-[1.25] text-primary mb-3 group-hover:text-divider transition-colors">
          {event.title}
        </h3>
        <p className="font-body text-[14px] leading-[1.6] text-text-primary/70 mb-5 line-clamp-2 flex-1">
          {event.description}
        </p>

        {event.topics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {event.topics.map((topic) => (
              <span
                key={topic}
                className="inline-block px-2.5 py-1 rounded-full border border-divider/30 bg-bg-light font-body text-[12px] font-medium text-text-primary">
                {EVENT_TOPIC_LABELS[topic]}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-text-primary/10 mt-auto">
          <div className="flex flex-col gap-1.5 text-[12px] font-body text-text-primary/60">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3 h-3 shrink-0" />
              {event.displayDate}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 shrink-0" />
              {event.location}
              {event.region ? ` · ${event.region}` : ''}
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 font-body text-[14px] font-semibold text-cta group-hover:text-accent transition-colors shrink-0 ml-4">
            View event
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
