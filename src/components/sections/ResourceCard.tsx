import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
type Props = {
  image: string;
  category: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  href: string;
};
export function ResourceCard({
  image,
  category,
  title,
  description,
  date,
  readTime,
  href
}: Props) {
  return (
    <Link
      to={href}
      className="group flex flex-col bg-white rounded-card overflow-hidden shadow-subtle hover:shadow-medium transition-all duration-300 hover:-translate-y-0.5 border border-text-primary/5">
      
      <div className="w-full aspect-video overflow-hidden bg-bg-light">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        
      </div>
      <div className="p-6 flex flex-col flex-1">
        <p className="font-body text-[11px] uppercase tracking-[1.2px] text-divider mb-3 font-medium">
          {category}
        </p>
        <h3 className="font-heading text-[20px] md:text-[22px] leading-[1.25] text-primary mb-3 group-hover:text-divider transition-colors">
          {title}
        </h3>
        <p className="font-body text-[14px] leading-[1.6] text-text-primary/70 mb-5 line-clamp-2 flex-1">
          {description}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-text-primary/10">
          <div className="flex items-center gap-4 text-[12px] font-body text-text-primary/55">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3 h-3" />
              {date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3 h-3" />
              {readTime}
            </span>
          </div>
          <ArrowRight className="w-4 h-4 text-divider transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>);

}