import React, { useMemo, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { StickyNav } from '../components/layout/StickyNav';
import { FooterDark } from '../components/sections/FooterDark';
import { StatCalloutGrid } from '../components/sections/StatCalloutGrid';
import { ContentGrid3Col } from '../components/sections/ContentGrid3Col';
import { ImageTextBlock } from '../components/sections/ImageTextBlock';
import { ProcessSteps } from '../components/sections/ProcessSteps';
import { TestimonialGrid } from '../components/sections/TestimonialGrid';
import {
  FAQAccordion,
  buildFAQSchema
} from '../components/sections/FAQAccordion';
import { FilterBar } from '../components/sections/FilterBar';
import { CTABand } from '../components/sections/CTABand';
import { Heading } from '../components/ui/Heading';
import { SEO, ORGANIZATION_SCHEMA } from '../components/seo/SEO';
import { buildBreadcrumbSchema } from '../components/sections/Breadcrumb';
import { GeometricPatternOverlay } from '../components/ui/GeometricPatternOverlay';

const BREADCRUMB = [{ label: 'Careers' }];

const HERO_BG =
  'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=2400&q=80';

const MISSION_INTRO =
  'Join a team of 700+ Oracle Cloud specialists working across India, UAE, Australia, and the UK. We build the kind of place where senior people stay because the work is meaningful, the people are sharp, and the path forward is visible.';

const WHY_BULLETS = [
  'Meaningful work on complex enterprise transformations — not slide decks',
  'Real ownership and direct exposure to client leadership early in your career',
  'Deep Oracle Cloud specialisation as a long-term, durable career bet',
  'Global teams collaborating across four regions, one operating model',
  'Structured growth paths from consultant to partner — with promotions you can see coming'
];

const CAREER_PATHWAYS = [
  {
    title: 'Experienced professionals',
    desc: 'Bring your expertise to MPC and work with global leaders on Oracle Cloud strategy, delivery, and transformation.',
    filterId: 'consulting'
  },
  {
    title: 'Engineering & AI',
    desc: 'Build extensions, integrations, and AI solutions on Oracle Cloud — from DevOps to MPC Tech Hub.',
    filterId: 'engineering'
  },
  {
    title: 'Operations & growth',
    desc: 'Shape how we scale — engagement management, sales, and people operations across four regions.',
    filterId: 'operations'
  }
];

const CULTURE_ITEMS = [
  {
    imageSrc:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80',
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
  }
];

const TEAM_CARDS = [
  {
    id: 'consulting',
    title: 'Consulting',
    desc: 'Oracle HCM, ERP, and transformation delivery for enterprise clients.'
  },
  {
    id: 'engineering',
    title: 'Engineering',
    desc: 'Java, DevOps, integrations, and AI engineering on Oracle Cloud.'
  },
  {
    id: 'design',
    title: 'Design',
    desc: 'Product and experience design for client and internal platforms.'
  },
  {
    id: 'operations',
    title: 'Operations',
    desc: 'Engagement management, delivery excellence, and people operations.'
  },
  {
    id: 'sales',
    title: 'Sales',
    desc: 'Client relationships and growth across industries and regions.'
  }
];

const LIFE_IMAGES = [
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80'
];

const DISCOVER_MORE = [
  {
    title: 'Find a role',
    desc: 'Browse open positions across consulting, engineering, design, and operations.',
    to: '#roles'
  },
  {
    title: 'Talk to our team',
    desc: 'Questions about culture, locations, or the hiring process? We’re happy to help.',
    to: '/contact/'
  },
  {
    title: 'Careers FAQ',
    desc: 'Remote work, timelines, compensation, relocation, and more.',
    to: '#faq'
  }
];

const ROLE_FILTERS = [
  { id: 'all', label: 'All teams' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'consulting', label: 'Consulting' },
  { id: 'design', label: 'Design' },
  { id: 'operations', label: 'Operations' },
  { id: 'sales', label: 'Sales' }
];

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
  }
];

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
  }
];

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
  }
];

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
  }
];

function scrollToRoles() {
  document.getElementById('roles')?.scrollIntoView({ behavior: 'smooth' });
}

export function Careers() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchValue, setSearchValue] = useState('');

  const goToRolesWithFilter = useCallback((filterId: string) => {
    setActiveFilter(filterId);
    requestAnimationFrame(() => scrollToRoles());
  }, []);

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

      <main>
        {/* Hero — BCG-style: compact height (matches home), text left, image visible right */}
        <section className="relative w-full min-h-[min(50svh,520px)] max-h-[520px] overflow-hidden flex items-center">
          <img
            src={HERO_BG}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover object-center lg:object-[75%_center]"
          />
          <div className="absolute inset-0 bg-primary/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.97] via-primary/80 via-[40%] to-primary/25 to-[100%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent" />

          <div className="relative w-full max-w-[1400px] mx-auto px-4 md:px-10 lg:px-[60px] py-10 md:py-12 lg:py-14 min-h-[inherit] flex items-center text-text-inverse">
            <div className="w-full lg:max-w-[58%] xl:max-w-[52%] text-center lg:text-left flex flex-col items-center lg:items-start">
              <span className="inline-flex items-center gap-2 font-body text-[12px] uppercase tracking-[0.2em] font-semibold text-divider-bright mb-4 md:mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-divider-bright" />
                Careers
              </span>

              <h1 className="font-heading font-semibold text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px] leading-[0.95] tracking-[-0.03em]">
                <span className="block">MPC Careers</span>
                <span className="block text-stat font-medium mt-1 md:mt-2">
                  is where we begin.
                </span>
              </h1>

              <p className="font-body text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5] text-text-inverse/90 mt-4 md:mt-5 max-w-[520px]">
                700+ specialists. 4 regions. One unified team building the kind
                of consultancy senior people choose to stay at.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 mt-6 md:mt-8">
                <a
                  href="#roles"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary rounded-full font-body text-[15px] font-medium hover:bg-white/90 transition-colors group">
                  See open roles
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <Link
                  to="/contact/"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent text-white border border-white/30 rounded-full font-body text-[15px] font-medium hover:border-white/60 hover:bg-white/10 transition-colors">
                  Talk to our team
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="w-full bg-white px-4 py-16 md:px-10 md:py-20 lg:px-[60px] lg:py-[80px]">
          <div className="max-w-[800px] mx-auto text-center">
            <p className="font-body text-[12px] uppercase tracking-[0.8px] font-semibold text-divider mb-4">
              Careers at MPC
            </p>
            <Heading level={2} className="mb-6">
              Build work that matters
            </Heading>
            <p className="font-body text-[17px] md:text-[18px] leading-[1.7] text-text-primary opacity-85">
              {MISSION_INTRO}
            </p>
          </div>
        </section>

        {/* Pathway cards */}
        <section className="w-full bg-bg-light px-4 py-14 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {CAREER_PATHWAYS.map((path) => (
              <button
                key={path.title}
                type="button"
                onClick={() => goToRolesWithFilter(path.filterId)}
                className="group flex flex-col text-left rounded-card border border-black/8 bg-white hover:border-divider hover:shadow-subtle transition-all p-6 md:p-7">
                <h3 className="font-heading font-medium text-[20px] leading-tight text-text-primary mb-3 group-hover:text-divider transition-colors">
                  {path.title}
                </h3>
                <p className="font-body text-[15px] leading-[1.6] text-text-primary opacity-75 mb-5 flex-grow">
                  {path.desc}
                </p>
                <span className="inline-flex items-center gap-1.5 font-body text-[14px] font-semibold text-cta mt-auto">
                  View roles
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Culture */}
        <section className="w-full bg-white px-4 pt-14 md:px-10 lg:px-[60px]">
          <div className="max-w-[1280px] mx-auto text-center md:text-left">
            <p className="font-body text-[12px] uppercase tracking-[0.8px] font-semibold text-divider mb-3">
              Culture & values
            </p>
          </div>
        </section>
        <ContentGrid3Col sectionTitle="Our culture" items={CULTURE_ITEMS} />

        {/* Find your team */}
        <section className="w-full bg-white px-4 py-14 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="max-w-[1280px] mx-auto">
            <p className="font-body text-[12px] uppercase tracking-[0.8px] font-semibold text-divider mb-3">
              Teams
            </p>
            <Heading level={2} className="mb-4 max-w-2xl">
              Find your team
            </Heading>
            <p className="font-body text-[17px] leading-[1.6] max-w-[700px] text-text-primary opacity-80 mb-10">
              Discover where your skills and ambitions fit best. Select a team
              to see matching open roles.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {TEAM_CARDS.map((team) => (
                <button
                  key={team.id}
                  type="button"
                  onClick={() => goToRolesWithFilter(team.id)}
                  className="group text-left rounded-card border border-black/8 bg-bg-light hover:border-divider hover:bg-white hover:shadow-subtle transition-all p-6">
                  <h3 className="font-heading font-medium text-[18px] text-text-primary mb-2 group-hover:text-stat transition-colors">
                    {team.title}
                  </h3>
                  <p className="font-body text-[14px] leading-[1.6] text-text-primary opacity-75 mb-4">
                    {team.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 font-body text-[13px] font-semibold text-cta">
                    Explore roles
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Open roles */}
        <section
          id="roles"
          className="w-full bg-bg-light pt-16 md:pt-20 pb-16 md:pb-20 scroll-mt-24">
          <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-[60px] mb-8">
            <p className="font-body text-[12px] uppercase tracking-[0.8px] font-semibold text-divider mb-3">
              Open roles
            </p>
            <Heading level={2}>Explore career opportunities</Heading>
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
            searchPlaceholder="Search roles, locations…"
          />

          <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-[60px] mt-10">
            {filteredRoles.length === 0 ? (
              <div className="bg-white rounded-card py-16 text-center">
                <p className="font-heading text-[20px] text-text-primary mb-2">
                  No matching roles right now
                </p>
                <p className="font-body text-[15px] text-text-primary opacity-70">
                  Send your CV to careers@mpccloudconsulting.com — we’ll keep
                  you posted.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                {filteredRoles.map((role) => (
                  <a
                    key={role.id}
                    href={`mailto:careers@mpccloudconsulting.com?subject=Application: ${encodeURIComponent(role.title)}`}
                    className="group bg-white rounded-card p-6 md:p-7 shadow-subtle hover:shadow-medium transition-all hover:-translate-y-0.5 flex flex-col">
                    <p className="font-body text-[11px] uppercase tracking-[1.2px] text-divider font-medium mb-2">
                      {role.team}
                    </p>
                    <h3 className="font-heading font-medium text-[20px] md:text-[22px] leading-tight text-primary mb-3 group-hover:text-stat transition-colors">
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
                      <span className="inline-flex items-center gap-1.5 font-body text-[14px] font-medium text-cta">
                        Apply
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Tech Hub spotlight */}
        <section className="relative w-full overflow-hidden bg-primary text-text-inverse px-4 py-14 md:px-10 md:py-16 lg:px-[60px] lg:py-20">
          <GeometricPatternOverlay />
          <div className="relative z-10 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="font-body text-[12px] uppercase tracking-[0.8px] font-semibold text-divider-bright mb-3">
                Innovation
              </p>
              <Heading level={2} color="text-inverse" className="mb-5">
                Discover career paths in AI and innovation
              </Heading>
              <p className="font-body text-[16px] md:text-[17px] leading-[1.7] opacity-90 mb-8 max-w-[540px]">
                MPC Tech Hub is where we build custom AI agents, Oracle
                extensions, and accelerators that turn cloud investments into
                competitive advantage.
              </p>
              <Link
                to="/services/mpc-tech-hub/"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-primary rounded-full font-body text-[14px] font-medium hover:bg-white/90 transition-colors group">
                Explore MPC Tech Hub
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
            <div className="aspect-[16/10] overflow-hidden rounded-card">
              <img
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80"
                alt="MPC Tech Hub — AI and innovation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="w-full bg-white px-4 py-14 md:px-10 md:py-16 lg:px-[60px]">
          <div className="max-w-[1280px] mx-auto text-center mb-8">
            <Heading level={2}>Life at MPC in numbers</Heading>
          </div>
          <StatCalloutGrid
            stats={[
              { number: '700+', label: 'Team members' },
              { number: '4', label: 'Regions, one team' },
              { number: '92%', label: 'Annual retention' },
              { number: '15+', label: 'Yrs avg senior tenure' }
            ]}
          />
        </section>

        {/* Life gallery */}
        <section className="w-full bg-bg-light px-4 py-16 md:px-10 md:py-20 lg:px-[60px]">
          <div className="max-w-[1280px] mx-auto">
            <p className="font-body text-[12px] uppercase tracking-[0.8px] font-semibold text-divider mb-3">
              Life at MPC
            </p>
            <Heading level={2} className="mb-10 max-w-2xl">
              Get a glimpse into life at MPC
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {LIFE_IMAGES.map((src, i) => (
                <div
                  key={i}
                  className="w-full aspect-[4/3] overflow-hidden rounded-card">
                  <img
                    src={src}
                    alt={`MPC team moment ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <ImageTextBlock
          imageSrc="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
          imageAlt="MPC team at work"
          heading="A consultancy senior people choose to stay at"
          orientation="image-left"
          body={
            <>
              <p className="mb-5 font-body text-[16px] leading-[1.7] text-text-primary opacity-85">
                What you can expect from MPC:
              </p>
              <ul className="space-y-3">
                {WHY_BULLETS.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-stat flex-shrink-0" />
                    <span className="text-[15px] leading-[1.6] text-text-primary opacity-85">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </>
          }
        />

        <TestimonialGrid
          eyebrow="Life at MPC"
          title="In their own words"
          items={TESTIMONIALS}
          variant="light"
        />

        <ProcessSteps
          eyebrow="How we hire"
          title="Our hiring process, end to end"
          intro="No black boxes. Here is exactly what happens between the moment you apply and the moment you sign."
          steps={PROCESS}
          variant="light"
        />

        {/* Discover more */}
        <section className="w-full bg-white px-4 py-14 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="max-w-[1280px] mx-auto">
            <p className="font-body text-[12px] uppercase tracking-[0.8px] font-semibold text-divider mb-3">
              Next steps
            </p>
            <Heading level={2} className="mb-10">
              Discover more
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {DISCOVER_MORE.map((item) =>
                item.to.startsWith('/') ? (
                  <Link
                    key={item.title}
                    to={item.to}
                    className="group flex flex-col rounded-card border border-black/8 bg-bg-light hover:border-divider hover:bg-white hover:shadow-subtle transition-all p-6 md:p-7">
                    <h3 className="font-heading font-medium text-[18px] text-text-primary mb-2 group-hover:text-stat transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-body text-[14px] leading-[1.6] text-text-primary opacity-75 mb-4 flex-grow">
                      {item.desc}
                    </p>
                    <span className="inline-flex items-center gap-1.5 font-body text-[13px] font-semibold text-cta">
                      Learn more
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                ) : (
                  <a
                    key={item.title}
                    href={item.to}
                    className="group flex flex-col rounded-card border border-black/8 bg-bg-light hover:border-divider hover:bg-white hover:shadow-subtle transition-all p-6 md:p-7">
                    <h3 className="font-heading font-medium text-[18px] text-text-primary mb-2 group-hover:text-stat transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-body text-[14px] leading-[1.6] text-text-primary opacity-75 mb-4 flex-grow">
                      {item.desc}
                    </p>
                    <span className="inline-flex items-center gap-1.5 font-body text-[13px] font-semibold text-cta">
                      Learn more
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                )
              )}
            </div>
          </div>
        </section>

        <div id="faq" className="scroll-mt-24">
          <FAQAccordion
            eyebrow="FAQs"
            title="Careers, answered"
            items={FAQS}
            layout="full"
            bg="soft"
          />
        </div>

        <CTABand
          title="Don’t see a role that fits? We still want to hear from you."
          body="If you’re excited about Oracle Cloud, AI, or enterprise transformation, send us your CV. We keep great candidates in mind as roles open up."
          ctaText="Send us your CV"
          ctaTo="mailto:careers@mpccloudconsulting.com"
        />
      </main>

      <FooterDark />
    </div>
  );
}
