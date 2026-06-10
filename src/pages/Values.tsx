import React from 'react';
import { StickyNav } from '../components/layout/StickyNav';
import { FooterDark } from '../components/sections/FooterDark';
import { SEO, ORGANIZATION_SCHEMA } from '../components/seo/SEO';
import { Heading } from '../components/ui/Heading';
import { StatOverlayCaseStudy } from '../components/sections/StatOverlayCaseStudy';
import {
  Breadcrumb,
  buildBreadcrumbSchema,
} from '../components/sections/Breadcrumb';

const BREADCRUMB = [{ label: 'Values' }];

const HERO_BG =
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2400&q=80';

const VALUES = [
  {
    title: 'Entrepreneurial by Nature',
    body: 'We value innovation and creativity in the work we do, combined with the willingness to take calculated risks that drive real results for our clients and our team.',
    imageSrc:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Team innovating on Oracle Cloud solutions',
  },
  {
    title: 'Customer Orientation',
    body: "Customer orientation helps us understand our clients' perspectives, pain points, and requirements. We think about customers in everything we do — from design to delivery.",
    imageSrc:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Consultants collaborating with enterprise clients',
  },
  {
    title: 'Ownership',
    body: 'We value complete ownership and accountability across our team. It shows in how we deliver every project to our customers — we do not do anything half-heartedly.',
    imageSrc:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'MPC team taking ownership of client outcomes',
  },
  {
    title: 'Speed and Agility',
    body: 'Speed is critical to us. We value fast, thoughtful decision-making and swift action. Procrastination is not our style — we stay agile and adjust course when needed.',
    imageSrc:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Agile delivery and rapid iteration',
  },
  {
    title: 'Value Self',
    body: 'We want our people to value themselves. Only when you invest in your own growth can you be truly effective at work — and that investment is something we actively support.',
    imageSrc:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Professional growth and learning at MPC',
  },
];

export function Values() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="Our Values | MPC Cloud Consulting"
        description="Five principles that guide how MPC delivers Oracle Cloud transformations and supports its people — entrepreneurial spirit, customer focus, ownership, speed, and self-investment."
        canonicalPath="/values/"
        schema={[ORGANIZATION_SCHEMA, buildBreadcrumbSchema(BREADCRUMB)]}
      />

      <StickyNav />
      <main className="flex-grow w-full">
        {/* Hero */}
        <section className="relative w-full min-h-[min(58svh,600px)] max-h-[600px] overflow-hidden flex items-center">
          <img
            src={HERO_BG}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div aria-hidden className="absolute inset-0 bg-cta/55" />

          <div className="relative w-full max-w-[1400px] mx-auto px-4 md:px-10 lg:px-[60px] py-12 md:py-14 lg:py-16 min-h-[inherit] flex flex-col justify-center text-text-inverse">
            <Breadcrumb
              items={BREADCRUMB}
              variant="dark"
              className="mb-6 md:mb-8 w-full max-w-[1100px] mx-auto lg:mx-0"
            />

            <div className="w-full max-w-[1100px] text-center lg:text-left flex flex-col items-center lg:items-start mx-auto lg:mx-0">
              <span className="section-eyebrow-inverse inline-flex items-center gap-2 tracking-[0.2em] mb-4 md:mb-5 text-text-inverse">
                <span className="w-1.5 h-1.5 rounded-full bg-text-inverse" />
                Values
              </span>

              <h1 className="type-h1 text-text-inverse">What We Stand For</h1>

              <p className="font-body text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5] text-text-inverse/90 mt-4 md:mt-5 max-w-[640px] lg:max-w-[720px]">
                Our values shape how we serve clients, support our people, and
                deliver Oracle Cloud outcomes — every day, across every
                engagement.
              </p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="w-full bg-white px-4 py-14 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="max-w-[1040px] mx-auto text-center">
            <p className="section-eyebrow mb-3">Our approach</p>
            <Heading level={2} className="mb-4">
              The principles behind our work
            </Heading>
            <p className="font-body text-[18px] leading-[1.7] text-text-primary opacity-85">
              At MPC, values are not posters on a wall — they are the standards
              we hold ourselves to when advising clients, building solutions,
              and growing as a team. These five principles have guided us since
              2019 and continue to define who we are.
            </p>
          </div>
        </section>

        {/* Five Values */}
        <section className="w-full bg-bg-light px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="text-center mb-10 max-w-[800px] mx-auto">
            <p className="section-eyebrow mb-3">Our Values</p>
            <Heading level={2} className="mb-4">
              Five principles that guide us
            </Heading>
            <p className="font-body text-[17px] leading-[1.7] text-text-primary opacity-80">
              The beliefs that inform how we work with clients, collaborate as
              a team, and pursue excellence in Oracle Cloud delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-[1280px] mx-auto">
            {VALUES.map((value) => (
              <article
                key={value.title}
                className="flex flex-col h-full rounded-card border border-cta bg-white p-5 md:p-6">
                <img
                  src={value.imageSrc}
                  alt={value.imageAlt}
                  className="w-full aspect-[4/3] object-cover rounded-[10px] md:rounded-[12px] mb-5 md:mb-6"
                />
                <h3 className="type-h3 text-[20px] md:text-[22px] text-text-primary mb-3">
                  {value.title}
                </h3>
                <p className="font-body text-[15px] leading-[1.65] text-text-primary opacity-80">
                  {value.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Culture */}
        <section className="w-full bg-white px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="max-w-[1040px] mx-auto text-center">
            <p className="section-eyebrow mb-3">Culture</p>
            <Heading level={2} className="mb-6">
              How we treat our people
            </Heading>
            <p className="font-body text-[17px] leading-[1.7] text-text-primary opacity-85 mb-10">
              In six years, we have become an organisation of choice for Oracle
              HCM and ERP consultants. We take pride in caring for our people in
              ways that are genuinely personal — because every person is
              different, with different needs, and we treat each team member
              accordingly.
            </p>

            <div className="bg-cta rounded-card px-8 py-10 md:px-12 md:py-12 text-text-inverse text-left md:text-center max-w-[800px] mx-auto">
              <p className="font-heading font-semibold text-[22px] md:text-[26px] leading-[1.35] tracking-[-0.01em]">
                &ldquo;We provide LIFE to people.&rdquo;
              </p>
              <p className="font-body text-[14px] md:text-[15px] leading-[1.6] text-text-inverse/85 mt-4">
                — Amit Garg, Founder &amp; CEO
              </p>
            </div>
          </div>
        </section>

        {/* Careers CTA */}
        <StatOverlayCaseStudy
          eyebrow="Careers"
          headline="Where values become careers"
          description="Join a team of 700+ Oracle Cloud specialists who live these principles every day — across India, UAE, Singapore, Australia, and the UK. If our values resonate with you, there is a place for you at MPC."
          imageSrc="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2000&q=80"
          imageAlt="MPC team collaborating in the office"
          showStatOverlay={false}
          imagePosition="right"
          ctaText="Explore careers"
          ctaTo="/careers/"
          ctaVariant="button"
          headerInContent
          bg="soft"
        />
      </main>
      <FooterDark />
    </div>
  );
}
