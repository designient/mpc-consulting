import React from 'react';
import { Link } from 'react-router-dom';
import { StickyNav } from './StickyNav';
import { FooterDark } from '../sections/FooterDark';
import { SEO } from '../seo/SEO';
import { Heading } from '../ui/Heading';
import { BreadcrumbItem } from '../sections/Breadcrumb';
export interface PageStubProps {
  title: string;
  description: string;
  canonicalPath: string;
  breadcrumb?: BreadcrumbItem[];
  noindex?: boolean;
}
export function PageStub({
  title,
  description,
  canonicalPath,
  noindex = true
}: PageStubProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title={`${title} | MPC Cloud Consulting`}
        description={description}
        canonicalPath={canonicalPath}
        noindex={noindex} />
      
      <StickyNav />

      <main className="flex-grow w-full">
        <section className="w-full bg-primary px-4 py-16 md:px-10 md:py-24 lg:px-[60px] lg:py-[120px]">
          <div className="w-[60px] h-[3px] bg-divider mb-6" />
          <Heading level={1} color="text-inverse">
            {title}
          </Heading>
          <p className="font-body text-[18px] leading-[1.6] text-text-inverse opacity-80 mt-6 max-w-[700px]">
            {description}
          </p>
          <div className="mt-10 inline-flex items-center gap-2 px-4 py-2 rounded-button border border-divider text-divider font-body text-[14px] uppercase tracking-[0.8px]">
            <span className="w-2 h-2 rounded-full bg-divider animate-pulse" />
            Coming soon
          </div>
          <div className="mt-8 flex flex-wrap gap-4 font-body text-[15px]">
            <Link to="/" className="text-divider-bright hover:text-stat transition-colors">
              Home
            </Link>
            <Link to="/#services" className="text-divider-bright hover:text-stat transition-colors">
              Services
            </Link>
            <Link to="/industries/" className="text-divider-bright hover:text-stat transition-colors">
              Industries
            </Link>
            <Link to="/contact/" className="text-divider-bright hover:text-stat transition-colors">
              Contact
            </Link>
          </div>
        </section>
      </main>

      <FooterDark />
    </div>);

}