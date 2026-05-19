import React, { useMemo, useState, Component } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { StickyNav } from '../components/layout/StickyNav';
import { FooterDark } from '../components/sections/FooterDark';
import { ServiceHero } from '../components/sections/heroes/ServiceHero';
import { StatCalloutGrid } from '../components/sections/StatCalloutGrid';
import { ContentGrid3Col } from '../components/sections/ContentGrid3Col';
import { ImageTextBlock } from '../components/sections/ImageTextBlock';
import { ProcessSteps } from '../components/sections/ProcessSteps';
import { TestimonialGrid } from '../components/sections/TestimonialGrid';
import {
  FAQAccordion,
  buildFAQSchema } from
'../components/sections/FAQAccordion';
import { FilterBar } from '../components/sections/FilterBar';
import { CTABand } from '../components/sections/CTABand';
import { Heading } from '../components/ui/Heading';
import { SEO, ORGANIZATION_SCHEMA } from '../components/seo/SEO';
import { buildBreadcrumbSchema } from '../components/sections/Breadcrumb';

const BREADCRUMB = [{ label: 'Careers' }];
const WHY_TEXT = `Join a team of 700+ Oracle Cloud specialists working across India, UAE, Australia, and the UK. We build the kind of place where senior people stay because the work is meaningful, the people are sharp, and the path forward is visible.

What you can expect from MPC:`;
const WHY_BULLETS = [
'Meaningful work on complex enterprise transformations — not slide decks',
'Real ownership and direct exposure to client leadership early in your career',
'Deep Oracle Cloud specialisation as a long-term, durable career bet',
'Global teams collaborating across four regions, one operating model',
'Structured growth paths from consultant to partner — with promotions you can see coming'];

const CULTURE_ITEMS = [
{
  imageSrc:
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
  title: 'Craft',
  description:
  'We take Oracle Cloud seriously. We invest in mastery, we review each other’s work, and we ship things we’re proud to put our name on.'
},
{
  imageSrc:
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
  title: 'Care',
  description:
  'We care about the client outcome, the teammate next to you, and the long-term path of your career. No heroics needed — just sustained quality.'
},
{
  imageSrc:
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80',
  title: 'Curiosity',
  description:
  'AI, new Oracle modules, emerging architectures — we read, experiment, and bring ideas back into client work. The status quo is a starting point.'
}];

const LIFE_IMAGES = [
'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80',
'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80'];

const ROLE_FILTERS = [
{
  id: 'all',
  label: 'All teams'
},
{
  id: 'engineering',
  label: 'Engineering'
},
{
  id: 'consulting',
  label: 'Consulting'
},
{
  id: 'design',
  label: 'Design'
},
{
  id: 'operations',
  label: 'Operations'
},
{
  id: 'sales',
  label: 'Sales'
}];

type Role = {
  id: string;
  title: string;
  team: string;
  teamId: string;
  location: string;
  blurb: string;
};
const ROLES: Role[] = [
{
  id: 'r1',
  title: 'Senior Oracle HCM Consultant',
  team: 'Consulting',
  teamId: 'consulting',
  location: 'Dubai',
  blurb:
  'Lead Oracle HCM Cloud rollouts for enterprise clients across the GCC. 8+ years of Oracle HCM experience.'
},
{
  id: 'r2',
  title: 'Oracle Cloud ERP Functional Lead',
  team: 'Consulting',
  teamId: 'consulting',
  location: 'Gurugram',
  blurb:
  'Anchor finance and projects rollouts for our largest India clients. Strong functional + transformation lens required.'
},
{
  id: 'r3',
  title: 'Java Engineering Lead',
  team: 'Engineering',
  teamId: 'engineering',
  location: 'Bengaluru',
  blurb:
  'Lead a team building Oracle Cloud extensions and integrations. Spring Boot, microservices, and clean architecture.'
},
{
  id: 'r4',
  title: 'DevOps Engineer',
  team: 'Engineering',
  teamId: 'engineering',
  location: 'Remote · India',
  blurb:
  'Kubernetes, CI/CD, observability, and multi-cloud infra for client environments. We’ll teach you Oracle Cloud.'
},
{
  id: 'r5',
  title: 'AI Engineer — MPC Tech Hub',
  team: 'Engineering',
  teamId: 'engineering',
  location: 'Hyderabad',
  blurb:
  'Build AI agents and automation layered on top of Oracle Cloud. LLMs, RAG, and production-grade evals.'
},
{
  id: 'r6',
  title: 'Senior Product Designer',
  team: 'Design',
  teamId: 'design',
  location: 'Remote · UK',
  blurb:
  'Design internal tools and client-facing dashboards on top of Oracle Cloud. Systems thinker.'
},
{
  id: 'r7',
  title: 'Change & Adoption Lead (AaaS)',
  team: 'Consulting',
  teamId: 'consulting',
  location: 'Melbourne',
  blurb:
  'Drive change management and adoption programmes for Oracle Cloud rollouts. Prosci or equivalent preferred.'
},
{
  id: 'r8',
  title: 'Engagement Manager',
  team: 'Operations',
  teamId: 'operations',
  location: 'London',
  blurb:
  'Own delivery for a portfolio of Oracle Cloud clients. Senior, ex-Big Four or boutique consulting backgrounds welcome.'
},
{
  id: 'r9',
  title: 'Account Director — BFSI',
  team: 'Sales',
  teamId: 'sales',
  location: 'Mumbai',
  blurb:
  'Build long-term relationships with banks and insurers. Sell outcomes, not headcount.'
},
{
  id: 'r10',
  title: 'People Operations Partner',
  team: 'Operations',
  teamId: 'operations',
  location: 'Gurugram',
  blurb:
  'Be the HR business partner for our consulting practice — hiring, retention, and growth conversations.'
}];

const PROCESS = [
{
  number: '01',
  title: 'Apply',
  description:
  'Send us your CV through the role page or to careers@mpccloudconsulting.com. We read every application.'
},
{
  number: '02',
  title: 'Conversation',
  description:
  'A 30-minute call with our talent team to understand your story and what you’re looking for next.'
},
{
  number: '03',
  title: 'Interview Loop',
  description:
  '2–3 conversations with the hiring manager, future peers, and a leader. We focus on real work, not gotchas.'
},
{
  number: '04',
  title: 'Offer',
  description:
  'A clear written offer with comp, level, and growth path within 5 working days of your final round.'
}];

const TESTIMONIALS = [
{
  quote:
  'I came in as a senior consultant and grew into a practice lead within four years. The path was always visible.',
  name: 'Aditi Rao',
  title: 'Practice Lead, HCM',
  company: 'MPC',
  country: 'India'
},
{
  quote:
  'Real ownership from day one. I shipped a client-facing Oracle Cloud extension in my first quarter.',
  name: 'Tom Whittaker',
  title: 'Senior Engineer',
  company: 'MPC',
  country: 'UK'
}];

const FAQS = [
{
  q: 'Do you offer remote roles?',
  a: 'Yes. Many engineering, design, and select consulting roles are remote within a region. Senior client-facing roles often involve travel during delivery phases.'
},
{
  q: 'How long does the interview process take?',
  a: 'From application to offer is typically 2–3 weeks. We move fast when there’s a fit on both sides.'
},
{
  q: 'Do you hire interns or graduates?',
  a: 'We run a structured graduate programme in India and the UK. Watch the careers page or reach out to careers@mpccloudconsulting.com.'
},
{
  q: 'What’s your stance on compensation?',
  a: 'Competitive base, performance-linked variable, and clear bands published internally. Pay equity is reviewed every six months.'
},
{
  q: 'Do you support relocation?',
  a: 'Yes, for senior roles where a regional presence is required. Discussed transparently during the offer stage.'
},
{
  q: 'I don’t see a role that fits. Should I still apply?',
  a: 'Absolutely. If you’re excited about Oracle Cloud or AI consulting, send us your CV and we’ll keep you in mind as roles open up.'
}];

export function Careers() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchValue, setSearchValue] = useState('');
  const filteredRoles = useMemo(() => {
    return ROLES.filter((r) => {
      const teamMatch = activeFilter === 'all' || r.teamId === activeFilter;
      const q = searchValue.trim().toLowerCase();
      const searchMatch =
      !q ||
      r.title.toLowerCase().includes(q) ||
      r.location.toLowerCase().includes(q) ||
      r.blurb.toLowerCase().includes(q);
      return teamMatch && searchMatch;
    });
  }, [activeFilter, searchValue]);
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Careers at MPC | MPC Cloud Consulting"
        description="Join a team of 700+ Oracle Cloud specialists across India, UAE, Australia, and the UK. Meaningful work, real ownership, structured growth."
        canonicalPath="/careers/"
        schema={[
          ORGANIZATION_SCHEMA,
          buildBreadcrumbSchema(BREADCRUMB),
          buildFAQSchema(FAQS)
        ]}
      />
      
      <StickyNav />

      <ServiceHero
        eyebrow="Careers"
        headline="Build the future of Oracle Cloud with us"
        subhead="700+ specialists. 4 regions. One unified team building the kind of consultancy senior people choose to stay at."
        primaryCtaText="See open roles"
        primaryCtaTo="#roles"
        secondaryCtaText="Talk to our team"
        secondaryCtaTo="/contact/"
        imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80"
        imageAlt="MPC team collaborating"
        breadcrumb={[
        {
          label: 'Careers'
        }]
        } />
      

      <ImageTextBlock
        imageSrc="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
        imageAlt="MPC team at work"
        heading="A consultancy senior people choose to stay at"
        orientation="image-left"
        body={
        <>
            <p className="mb-5 whitespace-pre-line">{WHY_TEXT}</p>
            <ul className="space-y-3">
              {WHY_BULLETS.map((b, i) =>
            <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-divider flex-shrink-0" />
                  <span className="text-[15px] leading-[1.6] text-text-primary opacity-85">
                    {b}
                  </span>
                </li>
            )}
            </ul>
          </>
        } />
      

      <StatCalloutGrid
        stats={[
        {
          number: '700+',
          label: 'Team members'
        },
        {
          number: '4',
          label: 'Regions, one team'
        },
        {
          number: '92%',
          label: 'Annual retention'
        },
        {
          number: '15+',
          label: 'Yrs avg senior tenure'
        }]
        } />
      

      <ContentGrid3Col sectionTitle="Our culture" items={CULTURE_ITEMS} />

      {/* Life at MPC gallery */}
      <section className="w-full bg-white px-4 py-16 md:px-10 md:py-20 lg:px-[60px]">
        <div className="max-w-[1280px] mx-auto">
          <p className="font-body text-[12px] uppercase tracking-[1.2px] text-divider mb-3 font-medium">
            Life at MPC
          </p>
          <Heading level={2} className="mb-10 max-w-2xl">
            How we actually work, day to day
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {LIFE_IMAGES.map((src, i) =>
            <div key={i} className="w-full aspect-[4/3] overflow-hidden">
                <img
                src={src}
                alt={`MPC team moment ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section
        id="roles"
        className="w-full bg-bg-light pt-16 md:pt-20 pb-16 md:pb-20">
        
        <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-[60px] mb-8">
          <p className="font-body text-[12px] uppercase tracking-[1.2px] text-divider mb-3 font-medium">
            Open roles
          </p>
          <Heading level={2}>Where you could fit in</Heading>
          <p className="font-body text-[17px] leading-[1.6] mt-4 max-w-[700px] text-text-primary opacity-80">
            Filter by team or search by keyword, location, or role title. New
            roles added weekly.
          </p>
        </div>
        <FilterBar
          filters={ROLE_FILTERS}
          activeId={activeFilter}
          onChange={setActiveFilter}
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          searchPlaceholder="Search roles, locations…" />
        
        <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-[60px] mt-10">
          {filteredRoles.length === 0 ?
          <div className="bg-white rounded-card py-16 text-center">
              <p className="font-heading text-[20px] text-text-primary mb-2">
                No matching roles right now
              </p>
              <p className="font-body text-[15px] text-text-primary opacity-70">
                Send your CV to careers@mpccloudconsulting.com — we’ll keep you
                posted.
              </p>
            </div> :

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {filteredRoles.map((role) =>
            <a
              key={role.id}
              href={`mailto:careers@mpccloudconsulting.com?subject=Application: ${encodeURIComponent(role.title)}`}
              className="group bg-white rounded-card p-6 md:p-7 shadow-subtle hover:shadow-medium transition-all hover:-translate-y-0.5 flex flex-col">
              
                  <p className="font-body text-[11px] uppercase tracking-[1.2px] text-divider font-medium mb-2">
                    {role.team}
                  </p>
                  <h3 className="font-heading font-medium text-[20px] md:text-[22px] leading-tight text-primary mb-3 group-hover:text-divider transition-colors">
                    {role.title}
                  </h3>
                  <p className="font-body text-[14px] leading-[1.6] text-text-primary opacity-75 mb-5 flex-1">
                    {role.blurb}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-text-primary/10">
                    <span className="inline-flex items-center gap-1.5 font-body text-[13px] text-text-primary opacity-70">
                      <MapPin className="w-3.5 h-3.5" />
                      {role.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-body text-[14px] font-medium text-divider">
                      Apply
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
            )}
            </div>
          }
        </div>
      </section>

      <ProcessSteps
        eyebrow="How we hire"
        title="Our hiring process, end to end"
        intro="No black boxes. Here is exactly what happens between the moment you apply and the moment you sign."
        steps={PROCESS}
        variant="light" />
      

      <TestimonialGrid
        eyebrow="Life at MPC"
        title="In their own words"
        items={TESTIMONIALS}
        variant="light" />
      

      <FAQAccordion
        eyebrow="FAQs"
        title="Careers, answered"
        items={FAQS}
        layout="full"
        bg="soft" />
      

      <CTABand
        title="Don’t see a role that fits? We still want to hear from you."
        body="If you’re excited about Oracle Cloud, AI, or enterprise transformation, send us your CV. We keep great candidates in mind as roles open up."
        ctaText="Send us your CV"
        ctaTo="mailto:careers@mpccloudconsulting.com" />
      

      <FooterDark />
    </div>);

}