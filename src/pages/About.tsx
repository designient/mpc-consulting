import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  ArrowRight,
  MapPin } from
'lucide-react';
import { StickyNav } from '../components/layout/StickyNav';
import { FooterDark } from '../components/sections/FooterDark';
import { SEO, ORGANIZATION_SCHEMA } from '../components/seo/SEO';
import { Heading } from '../components/ui/Heading';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { StatCalloutGrid } from '../components/sections/StatCalloutGrid';
import { PillarsSection } from '../components/sections/PillarsSection';
import { CTABand } from '../components/sections/CTABand';
import { StatOverlayCaseStudy } from '../components/sections/StatOverlayCaseStudy';
import {
  buildBreadcrumbSchema } from
'../components/sections/Breadcrumb';
import { LogoCloud } from '../components/sections/LogoCloud';
import { PARTNER_LOGOS } from '../data/partnerLogos';
const BREADCRUMB = [{ label: 'About' }];

const HERO_BG = '/about-hero.png';

const TIMELINE = [
{
  y: '2019',
  l: 'Founded'
},
{
  y: '2020',
  l: 'UAE Expansion'
},
{
  y: '2021',
  l: 'First 25 Clients'
},
{
  y: '2022',
  l: 'Australia & UK Offices'
},
{
  y: '2023',
  l: '50+ Clients'
},
{
  y: '2024',
  l: 'AI CoE Launched'
},
{
  y: '2025',
  l: '700+ Consultants'
},
{
  y: '2026',
  l: 'AI-First Strategy'
}];

const STATS = [
{
  number: '65+',
  label: 'Enterprise Clients'
},
{
  number: '700+',
  label: 'Oracle Consultants'
},
{
  number: '350+',
  label: 'years of Leadership Experience'
},
{
  number: '87+',
  label: 'Successful Engagements'
},
{
  number: '8',
  label: 'Global Offices'
},
{
  number: '5',
  label: 'Countries'
},
{
  number: '2019',
  label: 'Year Founded'
},
{
  number: '8',
  label: 'Industries Served'
}];

const PILLARS = [
  {
    title: 'Deep Industry Understanding',
    body: "We understand the processes, challenges, and priorities that shape your business. Our experience across BFSI, manufacturing, energy, and other industries helps us design solutions grounded in real-world business needs.",
    imageSrc:
      'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Industry and business context for Oracle Cloud delivery'
  },
  {
    title: 'Domain Specialisation',
    body: '85+ Consultants & SME in Oracle Tech & Cloud. We have 30+ Certified Consultants in Multicloud & Cyber Security. Every consultant on our team is Cloud & AI-focused, Oracle/AWS/Microsoft-certified, and committed to mastering one platform rather than spreading across many.',
    imageSrc:
      'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Oracle domain specialists collaborating'
  },
  {
    title: 'Strong Competencies',
    body: 'Our capabilities span advisory, implementation, integration, managed support, and continuous innovation. Agile delivery, cross-functional collaboration, and a commitment to quality help us turn transformation strategies into outcomes that last.',
    imageSrc:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'End-to-end Oracle Cloud delivery team'
  }
];

const OFFICES = [
{
  city: 'Gurugram',
  country: 'India',
  addr: '19th Floor, AIPL Business Club, Sector 62, Gurugram 122101'
},
{
  city: 'Hyderabad',
  country: 'India',
  addr: 'Level 1, N Heights, Plot 38, Hitech City Road, Hyderabad 500081'
},
{
  city: 'Bengaluru',
  country: 'India',
  addr: '4th Floor, Hanto Virgo Centre, 185/A, 22nd Cross Rd, HSR Layout'
},
{
  city: 'Singapore',
  country: 'Singapore',
  addr: '12 Marina View, Asia Square Tower 2, Level 18, Singapore 018961'
},
{
  city: 'Dubai',
  country: 'UAE',
  addr: '25th Floor, The Citadel Tower, Marasi Drive, Business Bay'
},
{
  city: 'Abu Dhabi',
  country: 'UAE',
  addr: '13th Floor, Al Mansoor Tower, Al Salam Street'
},
{
  city: 'Melbourne',
  country: 'Australia',
  addr: 'Glen Waverley, Melbourne VIC 3150'
},
{
  city: 'London',
  country: 'UK',
  addr: '7 Benton Mews, Aylesbury'
}];

const LEADERSHIP_IMG = '/mpc-leadership/Amit.png';

const CERTIFICATIONS = [
  {
    icon: ShieldCheck,
    title: 'ISO 27001 Aligned',
    body: 'Information security management aligned to global standards.',
  },
  {
    icon: ShieldCheck,
    title: 'SOC 2 Processes',
    body: 'Operational controls aligned to SOC 2 trust principles.',
  },
];

export function About() {
  const [credsTab, setCredsTab] = useState<'partners' | 'certifications'>('partners');

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="About MPC Cloud Consulting | Oracle & AI Transformation Partner"
        description="We help enterprises turn complex business challenges into meaningful outcomes through digital transformation, cloud, SaaS, AI, automation, and deep industry expertise."
        canonicalPath="/about/"
        schema={[ORGANIZATION_SCHEMA, buildBreadcrumbSchema(BREADCRUMB)]} />
      
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
            <div className="w-full max-w-[1100px] text-center lg:text-left flex flex-col items-center lg:items-start mx-auto lg:mx-0">
              <h1 className="type-h1 text-text-inverse">
                About MPC Cloud Consulting
              </h1>

              <p className="font-body text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5] text-text-inverse/90 mt-4 md:mt-5 max-w-[640px] lg:max-w-[720px]">
                We help enterprises turn complex business challenges into
                meaningful outcomes through digital transformation, cloud,
                SaaS, AI, automation, and deep industry expertise.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="w-full bg-white px-4 py-14 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="max-w-[1040px] mx-auto">
          <div className="text-center mb-10">
            <p className="section-eyebrow mb-3">Our Story</p>
            <Heading level={2} className="mb-4">
              From Cloud Expertise to Intelligent Transformation
            </Heading>
          </div>
          <div className="text-center">
            <p className="font-body text-[18px] leading-[1.7] text-text-primary opacity-85 mb-5">
              MPC Cloud Consulting was founded in 2019 with a simple belief:
              good technology work starts with understanding the business it
              is meant to change.
            </p>
            <p className="font-body text-[17px] leading-[1.7] text-text-primary opacity-80 mb-5">
              We spend time getting to know the processes, people, industry
              realities, and challenges behind every technology decision. That
              approach has shaped how we work and how we have grown.
            </p>
            <p className="font-body text-[17px] leading-[1.7] text-text-primary opacity-80">
              Today, MPC brings together 700+ consultants across 8 global
              offices in 5 countries, with 87+ successful engagements for 65+
              enterprise clients in industries such as BFSI, manufacturing,
              energy, and more. Our strength sits in deep technology expertise
              across Oracle, Cloud, Multicloud, SaaS, AI, automation, and modern
              architectures. We focus on continuous learning and choosing the
              right technology for the right business problem, not technology
              for its own sake. As more enterprises move into an AI-driven
              future, MPC is helping build what comes next. Through MPC Tech
              Hub, our AI innovation centre, we explore and develop practical
              AI solutions, from intelligent agents and automation to smarter
              enterprise platforms. For us, transformation is not about chasing
              the next trend. It is about finding what can work better, and
              making it real.
            </p>
          </div>
          </div>
        </section>

        {/* Milestones & stats */}
        <section className="w-full bg-bg-light px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="text-center mb-10 max-w-[800px] mx-auto">
            <p className="section-eyebrow mb-3">Milestones</p>
            <Heading level={2}>Seven years of growth</Heading>
          </div>
          <div className="relative overflow-x-auto pb-4">
            <div className="absolute left-0 right-0 top-[26px] h-[2px] bg-divider/30" />
            <ol className="flex gap-6 md:gap-8 min-w-max relative">
              {TIMELINE.map((t) =>
              <li
                key={t.y}
                className="flex flex-col items-start min-w-[140px]">
                
                  <div className="w-3.5 h-3.5 rounded-full bg-stat border-4 border-bg-light z-10 mt-4" />
                  <div className="font-heading font-semibold text-cta text-[22px] mt-3">
                    {t.y}
                  </div>
                  <div className="font-body text-[14px] text-text-primary opacity-80 mt-1">
                    {t.l}
                  </div>
                </li>
              )}
            </ol>
          </div>

          <div className="mt-12 md:mt-16 lg:mt-20">
            <StatCalloutGrid
              stats={STATS.slice(0, 4)}
              variant="light"
              className="!px-0 !py-0 mb-6" />
            <StatCalloutGrid
              stats={STATS.slice(4, 8)}
              variant="light"
              className="!px-0 !py-0" />
          </div>
        </section>

        <PillarsSection
          eyebrow="What Sets Us Apart"
          title="Three pillars of excellence"
          intro="MPC combines deep industry understanding, technology mastery, and cross-functional expertise to solve complex business challenges and deliver measurable outcomes across cloud, SaaS, AI, automation, and digital transformation."
          items={PILLARS}
        />

        {/* Global Presence */}
        <section className="w-full bg-bg-light px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="text-center mb-10 max-w-[800px] mx-auto">
            <p className="section-eyebrow mb-3">Global Presence</p>
            <Heading level={2}>
              <span className="text-stat">8 offices.</span> One connected team.
            </Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {OFFICES.map((o) =>
            <div
              key={o.city}
              className="bg-white rounded-card p-6 shadow-subtle">
              
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-divider" />
                  <span className="font-body text-[14px] uppercase tracking-[0.8px] font-semibold text-divider">
                    {o.country}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-[20px] text-text-primary mb-2">
                  {o.city}
                </h3>
                <p className="font-body text-[14px] leading-[1.6] text-text-primary opacity-75">
                  {o.addr}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Leadership */}
        <section className="w-full bg-cta text-text-inverse px-4 py-8 md:px-10 md:py-10 lg:px-[60px] lg:py-12">
          <div className="max-w-[1280px] mx-auto flex justify-center">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center">
              <div className="flex shrink-0">
                <img
                  src={LEADERSHIP_IMG}
                  alt="MPC leadership"
                  className="w-[200px] h-[208px] md:w-[220px] md:h-[228px] lg:w-[232px] lg:h-[240px] object-cover"
                />
                <div className="w-3 flex-shrink-0 bg-stat" aria-hidden />
              </div>

              <div className="flex flex-col items-start text-left max-w-[480px]">
                <h2 className="font-heading font-semibold text-[28px] md:text-[32px] lg:text-[36px] leading-[1.1] tracking-[-0.02em] text-text-inverse">
                  MPC Leadership
                </h2>
                <p className="font-body text-[15px] md:text-[16px] leading-[1.6] text-text-inverse/90 mt-3 max-w-[440px]">
                  We believe success is achieved through a clear playbook that
                  emphasizes leading by example, embodying our core values, and
                  pursuing excellence every day.
                </p>
                <div className="mt-5">
                  <Link
                    to="/leadership/"
                    className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-primary rounded-button font-body text-[14px] font-semibold hover:bg-white/90 transition-colors shadow-subtle">
                    View our leadership team
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners & Certifications */}
        <section className="w-full bg-white px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="text-center mb-10 max-w-[800px] mx-auto">
            <p className="section-eyebrow mb-3">Partners & Certifications</p>
            <Heading level={2}>
              Trusted by partners, certified by standards
            </Heading>
          </div>

          <div className="flex justify-center gap-2 mb-8">
            {(
              [
                ['partners', 'Partners'],
                ['certifications', 'Certifications'],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setCredsTab(key)}
                className={`px-4 py-2 rounded-full font-body text-[13px] font-medium transition-colors ${
                  credsTab === key
                    ? 'bg-cta text-text-inverse'
                    : 'bg-bg-light text-text-primary hover:bg-divider/10'
                }`}>
                {label}
              </button>
            ))}
          </div>

          {credsTab === 'partners' ? (
            <LogoCloud
              items={PARTNER_LOGOS}
              bg="transparent"
              scrollable
              autoScroll
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-[900px] mx-auto">
              {CERTIFICATIONS.map((c) => {
                const Icon = c.icon;
                return (
                  <div
                    key={c.title}
                    className="bg-bg-light rounded-card p-6 border border-transparent hover:border-divider/20 transition-colors">
                    <Icon className="w-7 h-7 text-cta mb-4" />
                    <h3 className="font-heading font-semibold text-[18px] text-text-primary mb-2">
                      {c.title}
                    </h3>
                    <p className="font-body text-[14px] leading-[1.6] text-text-primary opacity-80">
                      {c.body}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        <StatOverlayCaseStudy
          eyebrow="Careers"
          headline="Where Trust Meets Innovation"
          description="We believe great transformation comes from people who are curious enough to keep learning, disciplined enough to challenge their own work, and collaborative enough to make each other better. We invest in mastery, embrace agile ways of working, and explore AI, automation, and emerging technologies, always with a focus on solving real business problems."
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

        <CTABand
          title="Ready to work"
          titleAccent="with us?"
          body="Wherever you are in your transformation journey, let's talk."
          ctaText="Contact Our Team"
          ctaTo="/contact/"
          variant="split" />
        
      </main>
      <FooterDark />
    </div>);

}