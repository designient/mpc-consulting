import React, { useMemo, useState } from 'react';
import { StickyNav } from '../components/layout/StickyNav';
import { FooterDark } from '../components/sections/FooterDark';
import { ServiceHero } from '../components/sections/heroes/ServiceHero';
import { LogoCloud } from '../components/sections/LogoCloud';
import { CaseStudySpotlight } from '../components/sections/CaseStudySpotlight';
import { StatCalloutGrid } from '../components/sections/StatCalloutGrid';
import { FilterBar } from '../components/sections/FilterBar';
import { CaseStudyCard } from '../components/sections/CaseStudyCard';
import { StatOverlayCaseStudy } from '../components/sections/StatOverlayCaseStudy';
import { CTABand } from '../components/sections/CTABand';
import { Heading } from '../components/ui/Heading';
import {
  SEO,
  ORGANIZATION_SCHEMA,
  ORIGIN,
} from '../components/seo/SEO';
import { buildBreadcrumbSchema } from '../components/sections/Breadcrumb';
import { ALL_CLIENT_LOGOS } from '../data/clientLogos';
import {
  CASE_STUDIES,
  CASE_STUDY_FILTERS,
  FEATURED_CASE_STUDIES,
  type CaseStudyFilter,
} from '../data/caseStudies';

const BREADCRUMB = [
  { label: 'Resources', to: '/resources/' },
  { label: 'Case Studies' },
];

const STATS = [
  { number: '65+', label: 'Enterprise Clients' },
  { number: '87+', label: 'Successful Engagements' },
  { number: '5', label: 'Operating Regions' },
  { number: '350+', label: 'Years Combined Expertise' },
];

function buildCaseStudiesItemListSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'MPC Oracle Cloud Case Studies',
    itemListElement: CASE_STUDIES.map((study, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: study.headline,
      url: `${ORIGIN}/resources/case-studies/#case-study-${study.slug}`,
    })),
  };
}

export function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState<CaseStudyFilter>('all');
  const [searchValue, setSearchValue] = useState('');

  const filtered = useMemo(() => {
    return CASE_STUDIES.filter((study) => {
      const matchesFilter =
        activeFilter === 'all' || study.topics.includes(activeFilter);
      const q = searchValue.trim().toLowerCase();
      const matchesSearch =
        !q ||
        study.headline.toLowerCase().includes(q) ||
        study.description.toLowerCase().includes(q) ||
        study.metadata.toLowerCase().includes(q) ||
        study.tag.toLowerCase().includes(q) ||
        study.services.some((s) => s.toLowerCase().includes(q));
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchValue]);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Case Studies | Oracle Cloud Transformation Stories | MPC"
        description="Real outcomes from MPC's Oracle Cloud, HCM, ERP, AI and DevOps engagements."
        canonicalPath="/resources/case-studies/"
        schema={[
          ORGANIZATION_SCHEMA,
          buildBreadcrumbSchema(BREADCRUMB),
          buildCaseStudiesItemListSchema(),
        ]}
      />

      <StickyNav />

      <ServiceHero
        eyebrow="Customer Journeys"
        headline="Inspiring stories from organizations we've helped become more efficient, resilient, and secure"
        subhead="Oracle Cloud transformation outcomes from 87+ engagements across India, UAE, Singapore, UK & Australia"
        primaryCtaText="Talk to a consultant"
        primaryCtaTo="/contact/"
        secondaryCtaText="Explore stories"
        secondaryCtaTo="#library"
        imageSrc="/case-studies-hero.png"
        imageAlt="MPC case studies"
        breadcrumb={BREADCRUMB}
      />

      <LogoCloud
        caption="Trusted by enterprise teams worldwide"
        items={ALL_CLIENT_LOGOS}
        bg="soft"
        autoScroll
        scrollable
      />

      <CaseStudySpotlight items={FEATURED_CASE_STUDIES} />

      <StatCalloutGrid stats={STATS} variant="light" className="bg-white" />

      <section
        id="library"
        className="w-full bg-bg-light pt-12 md:pt-16 pb-16 md:pb-20 scroll-mt-[140px]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-[60px] mb-8">
          <Heading level={2}>Browse customer stories</Heading>
          <p className="font-body text-[17px] leading-[1.6] mt-4 max-w-[700px] text-text-primary opacity-80">
            Filter by service or industry, or search by keyword. Each story
            includes measurable outcomes from real Oracle Cloud engagements.
          </p>
        </div>
        <FilterBar
          filters={CASE_STUDY_FILTERS}
          activeId={activeFilter}
          onChange={(id) => setActiveFilter(id as CaseStudyFilter)}
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          searchPlaceholder="Search case studies…"
        />
        <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-[60px] mt-10">
          {filtered.length === 0 ? (
            <div className="bg-white rounded-card py-16 text-center">
              <p className="font-heading text-[20px] text-text-primary mb-2">
                No matches yet
              </p>
              <p className="font-body text-[15px] text-text-primary opacity-70">
                Try a different filter or search term.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {filtered.map((study) => (
                <CaseStudyCard key={study.slug} study={study} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="stories" className="scroll-mt-[140px]">
        {CASE_STUDIES.map((study, index) => (
          <StatOverlayCaseStudy
            key={study.slug}
            id={`case-study-${study.slug}`}
            className="scroll-mt-[140px]"
            tag={study.tag}
            headline={study.headline}
            description={study.description}
            metadata={study.metadata}
            imageSrc={study.imageSrc}
            imageAlt={study.imageAlt}
            stat={study.stat}
            statLabel={study.statLabel}
            statContext={study.statContext}
            ctaText="Talk to a consultant"
            ctaTo="/contact/"
            ctaVariant="button"
            imagePosition={index % 2 === 0 ? 'left' : 'right'}
            bg={index % 2 === 0 ? 'soft' : 'white'}
          />
        ))}
      </section>

      <CTABand
        title="Ready to write your story?"
        body="Tell us what you're trying to achieve and we'll show you how organisations like yours have transformed with Oracle Cloud."
        ctaText="Talk to MPC"
        ctaTo="/contact/"
        secondaryCtaText="See all services"
        secondaryCtaTo="/#services"
      />

      <FooterDark />
    </div>
  );
}
