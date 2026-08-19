import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { StickyNav } from '../components/layout/StickyNav';
import { FooterDark } from '../components/sections/FooterDark';
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
const BREADCRUMB = [{ label: 'Careers' }];

const HERO_BG = '/careers-hero.png';

const CAREER_PATH_BG = '/career-path-bg.png';

const MISSION_INTRO =
  'Join a team of 700+ technology evangelists and industry veterans. At MPC we build high-performing teams who can be the bedrock to support our mission and vision. If you are curious and have the intent to co-create, deliver on commitments, and are ready to contribute to our mission, join us.';

const CULTURE_ITEMS = [
  {
    imageSrc:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80',
    title: 'Craft',
    description:
      'We take work engineering seriously. We invest in mastery, we review each other’s work, and we ship things we’re proud to put our name on.'
  },
  {
    imageSrc:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    title: 'Care',
    description:
      'We care about the client outcome, the teammate next to you, and the long-term path of your career. No heroics needed, just sustained quality.'
  },
  {
    imageSrc:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80',
    title: 'Curiosity',
    description:
      'We learn, relearn, and build high-performing teams to deliver by fostering a culture of exceptional delivery, collaboration, ownership, and accountability.'
  }
];

const LIFE_AT_MPC = [
  {
    title: 'Our Culture Framework',
    description:
      'Our values, leadership principles, and ways of working, the foundation for how we show up for clients and each other.',
    imageSrc:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'MPC team collaborating on culture and values',
  },
  {
    title: 'Employee Engagement',
    description:
      'Fostering an inclusive culture where employees stay, grow, and thrive across five global regions.',
    imageSrc:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'MPC employees engaged in team discussion',
  },
  {
    title: 'Career Development',
    description:
      'Investing in our people through structured learning, mentorship, and development programmes at every stage.',
    imageSrc:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'MPC team members learning together',
  },
  {
    title: 'Corporate Social Responsibility',
    description:
      'Supporting communities and causes that are meaningful to our team members around the world.',
    imageSrc:
      'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'MPC team community initiative',
  },
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
    title: 'AI Engineer, AI CoE',
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
    title: 'Account Director. BFSI',
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
      'Be the HR business partner for our consulting practice, hiring, retention, and growth conversations.'
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
        description="Join a team of 700+ Oracle Cloud specialists across India, UAE, Singapore, Australia, and the UK. Meaningful work, real ownership, structured growth."
        canonicalPath="/careers/"
        schema={[
          ORGANIZATION_SCHEMA,
          buildBreadcrumbSchema(BREADCRUMB),
          buildFAQSchema(FAQS)
        ]}
      />

      <StickyNav />

      <main>
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
            <div className="w-full max-w-[1100px] text-center lg:text-left flex flex-col items-center lg:items-start mx-auto lg:mx-0">
              <h1 className="type-h1 text-text-inverse">
                Build your career at{' '}
                <span className="font-body italic font-normal text-text-inverse">
                  MPC
                </span>
              </h1>

              <p className="font-body text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5] text-text-inverse/90 mt-4 md:mt-5 max-w-[640px] lg:max-w-[720px]">
                Unlock Your Potential. Where Innovation Meets Transformation.
              </p>

              <div className="flex items-center justify-center lg:justify-start mt-6 md:mt-8">
                <a
                  href="#roles"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary rounded-full font-body text-[15px] font-medium hover:bg-white/90 transition-colors group">
                  See open roles
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Available Jobs */}
        <section className="w-full bg-white px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="max-w-[1280px] mx-auto">
            <Heading level={2} className="mb-8 md:mb-10">
              Available Jobs
            </Heading>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {ROLES.slice(0, 3).map((role) => (
                <article
                  key={role.id}
                  className="flex flex-col h-full rounded-card bg-bg-light p-6 md:p-7 border border-transparent hover:border-divider/20 transition-colors">
                  <h3 className="type-h3 text-[18px] md:text-[20px] text-text-primary mb-3 leading-snug">
                    {role.title}
                  </h3>
                  <p className="inline-flex items-center gap-1.5 font-body text-[14px] text-stat mb-3">
                    <MapPin className="w-4 h-4 shrink-0" aria-hidden />
                    {role.location}
                  </p>
                  <p className="font-body text-[14px] leading-[1.6] text-text-primary opacity-75 flex-grow">
                    {role.blurb}
                  </p>
                  <a
                    href="#roles"
                    className="inline-flex items-center justify-center mt-6 px-6 py-3 bg-cta text-white rounded-button font-body text-[14px] font-semibold hover:opacity-90 transition-opacity w-fit">
                    Apply
                  </a>
                </article>
              ))}
            </div>

            <div className="mt-8 md:mt-10">
              <a
                href="#roles"
                className="inline-flex items-center gap-2 font-body text-[15px] font-semibold text-cta hover:text-stat transition-colors group">
                View all jobs
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>

        {/* Careers at MPC */}
        <section className="w-full bg-bg-light px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="max-w-[800px] mx-auto text-center">
            <p className="section-eyebrow mb-3">Careers at MPC</p>
            <Heading level={2} className="mb-6">
              Build work that matters
            </Heading>
            <p className="font-body text-[17px] md:text-[18px] leading-[1.7] text-text-primary opacity-85">
              {MISSION_INTRO}
            </p>
          </div>
        </section>

        {/* Our culture */}
        <section className="w-full bg-white px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="text-center mb-10 max-w-[800px] mx-auto">
            <Link
              to="/values/"
              className="section-eyebrow mb-3 inline-block hover:text-cta transition-colors">
              Culture
            </Link>
            <Heading level={2} className="mb-4">
              Our culture
            </Heading>
            <p className="font-body text-[17px] leading-[1.7] text-text-primary opacity-80">
              Three qualities that define how we work together, and how we
              show up for clients every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-[1280px] mx-auto">
            {CULTURE_ITEMS.map((item) => (
              <article
                key={item.title}
                className="flex flex-col h-full rounded-card border border-cta bg-white p-5 md:p-6">
                <img
                  src={item.imageSrc}
                  alt=""
                  className="w-full aspect-[4/3] object-cover rounded-[10px] md:rounded-[12px] mb-5 md:mb-6"
                />
                <h3 className="type-h3 text-[20px] md:text-[22px] text-text-primary mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-[15px] leading-[1.65] text-text-primary opacity-80">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Open roles */}
        <section
          id="roles"
          className="w-full bg-bg-light pt-16 md:pt-20 pb-16 md:pb-20 scroll-mt-24">
          <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-[60px] mb-8">
            <p className="section-eyebrow mb-3">
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
                  Send your CV to careers@mpccloudconsulting.com, we’ll keep
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
                    <p className="font-body text-[14px] uppercase tracking-[1.2px] text-divider font-medium mb-2">
                      {role.team}
                    </p>
                    <h3 className="type-h3 text-[20px] md:text-[22px] leading-tight text-primary mb-3 group-hover:text-stat transition-colors">
                      {role.title}
                    </h3>
                    <p className="font-body text-[14px] leading-[1.6] text-text-primary opacity-75 mb-5 flex-1">
                      {role.blurb}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-text-primary/10">
                      <span className="inline-flex items-center gap-1.5 font-body text-[13px] text-stat">
                        <MapPin className="w-3.5 h-3.5" aria-hidden />
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

        {/* AI CoE spotlight */}
        <section className="relative w-full overflow-hidden text-text-inverse px-4 py-14 md:px-10 md:py-16 lg:px-[60px] lg:py-20">
          <img
            src={CAREER_PATH_BG}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div aria-hidden className="absolute inset-0 bg-cta/55" />
          <div className="relative z-10 max-w-[1280px] mx-auto">
            <p className="font-body text-[14px] uppercase tracking-[0.8px] font-semibold text-text-inverse mb-3">
              Innovation
            </p>
            <Heading level={2} color="text-inverse" className="mb-5">
              Discover career paths in AI and innovation
            </Heading>
            <p className="font-body text-[16px] md:text-[17px] leading-[1.7] opacity-90 mb-8 max-w-[540px]">
              MPC's AI CoE is where we deliver AI enablement, custom agents,
              Oracle extensions, and accelerators that turn cloud investments
              into competitive advantage.
            </p>
            <Link
              to="/services/ai-coe/"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-primary rounded-full font-body text-[14px] font-medium hover:bg-white/90 transition-colors group">
              Explore AI CoE
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>

        {/* Life at MPC */}
        <section className="w-full bg-white px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="text-center mb-10 max-w-[800px] mx-auto">
            <p className="section-eyebrow mb-3">Life at MPC</p>
            <Heading level={2}>Get a glimpse into life at MPC</Heading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-[1280px] mx-auto">
            {LIFE_AT_MPC.map((item) => (
              <article
                key={item.title}
                className="flex flex-col rounded-card border border-cta bg-white overflow-hidden">
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  className="w-full aspect-[16/10] object-cover"
                />
                <div className="p-5 md:p-6 lg:p-7">
                  <h3 className="type-h3 text-[20px] md:text-[22px] text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-[15px] leading-[1.65] text-text-primary opacity-80">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <TestimonialGrid
          title="In their own words"
          items={TESTIMONIALS}
          variant="light"
          carousel
        />

        {/* Life at MPC stats */}
        <section className="w-full bg-white px-4 py-10 md:px-10 md:py-12 lg:px-[60px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-[1200px] mx-auto">
            {[
              { n: '700+', l: 'Team members' },
              { n: '5', l: 'Regions, one team' },
              { n: '92%', l: 'Annual retention' },
              { n: '15+', l: 'Yrs avg senior tenure' },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-heading font-semibold text-stat text-[44px] md:text-[56px] leading-none mb-2">
                  {s.n}
                </div>
                <div className="font-body text-[14px] uppercase tracking-[0.8px] font-medium text-text-primary opacity-80">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </section>

        <ProcessSteps
          eyebrow="How we hire"
          title="Our hiring process, end to end"
          intro="No black boxes. Here is exactly what happens between the moment you apply and the moment you sign."
          steps={PROCESS}
          variant="light"
        />

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
          title="Don’t see a role that fits?"
          titleAccent={'We still want to hear from\u00A0you.'}
          body="If you’re excited about Oracle Cloud, AI, or enterprise transformation, send us your CV. We keep great candidates in mind as roles open up."
          ctaText="Send us your CV"
          ctaTo="mailto:careers@mpccloudconsulting.com"
          variant="split"
        />
      </main>

      <FooterDark />
    </div>
  );
}
