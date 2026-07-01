import React from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  ShieldCheck,
  Cloud,
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
  Breadcrumb,
  buildBreadcrumbSchema } from
'../components/sections/Breadcrumb';
const BREADCRUMB = [{ label: 'About' }];

const HERO_BG =
  'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2400&q=80';

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
  label: 'Years Combined Expertise'
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
    body: 'We operate at the intersection of technology and business. Every engagement begins with a thorough understanding of your industry, your processes, and your competitive pressures — not with a product pitch.',
    imageSrc:
      'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Industry and business context for Oracle Cloud delivery'
  },
  {
    title: 'Domain Specialisation',
    body: 'Oracle is not a sideline for us. It is our core. Every consultant on our team is Oracle-focused, Oracle-certified, and committed to mastering one platform rather than spreading across many.',
    imageSrc:
      'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Oracle domain specialists collaborating'
  },
  {
    title: 'Strong Competencies',
    body: "From advisory and design to implementation, managed support, and innovation — we deliver the full lifecycle. You don't need five partners. You need one that can do the work from start to finish.",
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

const LEADERSHIP_IMG =
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=900&auto=format&fit=crop';

const CERTS = [
{
  icon: Award,
  title: 'Oracle Partner',
  body: 'Implementation partner — the foundation of our technical capability.'
},
{
  icon: ShieldCheck,
  title: 'ISO 27001 Aligned',
  body: 'Information security management aligned to global standards.'
},
{
  icon: Cloud,
  title: 'AWS · Azure · GCP',
  body: 'Multi-cloud partner relationships for infrastructure delivery.'
},
{
  icon: ShieldCheck,
  title: 'SOC 2 Processes',
  body: 'Operational controls aligned to SOC 2 trust principles.'
}];

export function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="About MPC Cloud Consulting | Oracle & AI Transformation Partner"
        description="Founded in 2019, MPC Cloud Consulting has 65+ clients across India, UAE, Singapore, UK & Australia. 700+ consultants. Deep Oracle Cloud & AI expertise."
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
            <Breadcrumb
              items={BREADCRUMB}
              variant="dark"
              className="mb-6 md:mb-8 w-full max-w-[1100px] mx-auto lg:mx-0"
            />

            <div className="w-full max-w-[1100px] text-center lg:text-left flex flex-col items-center lg:items-start mx-auto lg:mx-0">
              <span className="section-eyebrow-inverse inline-flex items-center gap-2 tracking-[0.2em] mb-4 md:mb-5 text-text-inverse">
                <span className="w-1.5 h-1.5 rounded-full bg-text-inverse" />
                About MPC
              </span>

              <h1 className="type-h1 text-text-inverse">
                About MPC Cloud Consulting
              </h1>

              <p className="font-body text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5] text-text-inverse/90 mt-4 md:mt-5 max-w-[640px] lg:max-w-[720px]">
                We are a global Oracle Cloud and AI transformation partner —
                built on deep expertise, industry understanding, and a
                commitment to measurable outcomes.
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
              From Cloud First to AI-First
            </Heading>
          </div>
          <div className="text-center">
            <p className="font-body text-[18px] leading-[1.7] text-text-primary opacity-85 mb-5">
              MPC Cloud Consulting was founded in 2019 with a single conviction:
              that enterprise transformation must begin with genuine
              understanding — of business processes, of industry context, and of
              the people who use the systems we build.
            </p>
            <p className="font-body text-[17px] leading-[1.7] text-text-primary opacity-80 mb-5">
              In six years, we've grown to 700+ consultants across 8 global
              offices in 5 countries. We've completed 87+ engagements for 65+
              organisations — from BFSI giants to manufacturing leaders and
              energy companies. And we've done it by staying focused on Oracle
              Cloud, refusing to be generalists in a space that rewards depth.
            </p>
            <p className="font-body text-[17px] leading-[1.7] text-text-primary opacity-80">
              Today, with the rise of AI, we're leading a new chapter. MPC Tech
              Hub is our AI innovation centre — building custom agents,
              extending Oracle with intelligence, and helping enterprises move
              from Cloud First to AI-First.
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
          intro="MPC's approach combines industry understanding with Oracle specialisation and cross-functional competencies — built to deliver real outcomes, not just implementations."
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

        {/* Awards & Certifications */}
        <section className="w-full bg-white px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="text-center mb-10 max-w-[800px] mx-auto">
            <p className="section-eyebrow mb-3">Awards & Certifications</p>
            <Heading level={2}>
              Trusted by partners, certified by standards
            </Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {CERTS.map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={i}
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
        </section>

        <StatOverlayCaseStudy
          eyebrow="Careers"
          headline="Where Trust Meets Innovation"
          description="We believe security empowers possibility. It creates the foundation for a more inclusive, connected, and empowered world. By helping our customers anticipate challenges, protect what matters most, and simplify their business experience, we unlock the potential for innovation. Through your talent, expertise, and insight, today's ideas become tomorrow's breakthroughs, transforming the way people live, work, and connect."
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
          body="Wherever you are in your Oracle journey — let's talk."
          ctaText="Contact Our Team"
          ctaTo="/contact/"
          variant="split" />
        
      </main>
      <FooterDark />
    </div>);

}