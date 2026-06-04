import React from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  ShieldCheck,
  Shield,
  Database,
  Cloud,
  ArrowRight,
  MapPin,
  Banknote,
  Factory,
  Plane,
  Building2,
  Zap,
  Radio,
  Landmark,
  Briefcase } from
'lucide-react';
import { StickyNav } from '../components/layout/StickyNav';
import { FooterDark } from '../components/sections/FooterDark';
import { SEO, ORGANIZATION_SCHEMA } from '../components/seo/SEO';
import { Heading } from '../components/ui/Heading';
import { Card } from '../components/ui/Card';
import { PillarCards } from '../components/sections/PillarCards';
import { Button } from '../components/ui/Button';
import { StatCalloutGrid } from '../components/sections/StatCalloutGrid';
import { CTABand } from '../components/sections/CTABand';
import { LogoCloud } from '../components/sections/LogoCloud';
import { ALL_CLIENT_LOGOS } from '../data/clientLogos';
import {
  Breadcrumb,
  buildBreadcrumbSchema } from
'../components/sections/Breadcrumb';
const BREADCRUMB = [
{
  label: 'About'
}];

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
    icon: Landmark,
    title: 'Deep Industry Understanding',
    body: 'We operate at the intersection of technology and business. Every engagement begins with a thorough understanding of your industry, your processes, and your competitive pressures — not with a product pitch.',
    imageSrc:
      'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Industry and business context for Oracle Cloud delivery'
  },
  {
    icon: Database,
    title: 'Domain Specialisation',
    body: 'Oracle is not a sideline for us. It is our core. Every consultant on our team is Oracle-focused, Oracle-certified, and committed to mastering one platform rather than spreading across many.',
    imageSrc:
      'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Oracle domain specialists collaborating'
  },
  {
    icon: Shield,
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

const INDUSTRIES = [
{
  icon: Banknote,
  name: 'BFSI'
},
{
  icon: Factory,
  name: 'Manufacturing'
},
{
  icon: Plane,
  name: 'Travel & Hospitality'
},
{
  icon: Building2,
  name: 'Real Estate'
},
{
  icon: Zap,
  name: 'Energy & Utilities'
},
{
  icon: Radio,
  name: 'Telecommunications'
},
{
  icon: Landmark,
  name: 'Public Sector'
},
{
  icon: Briefcase,
  name: 'Professional Services'
}];

const LEADERS = [
{
  name: 'Amit Garg',
  title: 'Chief Executive Officer',
  bio: '20+ years of Oracle and enterprise technology leadership. Founder and strategic vision behind MPC.',
  img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop'
},
{
  name: 'Kishore Nerella',
  title: 'Chief Operating Officer',
  bio: "Drives delivery excellence and operational efficiency across MPC's global consulting operations.",
  img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop'
},
{
  name: 'Siva Prakya',
  title: 'Chief Technology Officer',
  bio: "Leads MPC's technology strategy, AI innovation, and Oracle platform architecture.",
  img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop'
}];

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
        <section className="w-full bg-primary text-text-inverse px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="mb-6">
            <Breadcrumb items={BREADCRUMB} variant="dark" />
          </div>
          <div className="w-[60px] h-[3px] bg-divider mb-6" />
          <Heading level={1} color="text-inverse">
            About MPC Cloud Consulting
          </Heading>
          <p className="font-body text-[18px] md:text-[20px] leading-[1.6] text-text-inverse opacity-90 mt-6 max-w-[760px]">
            We are a global Oracle Cloud and AI transformation partner — built
            on deep expertise, industry understanding, and a commitment to
            measurable outcomes.
          </p>
        </section>

        {/* Our Story */}
        <section className="w-full bg-white px-4 py-14 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="max-w-[820px]">
            <p className="section-eyebrow mb-3">
              Our Story
            </p>
            <Heading level={2} className="mb-6">
              From Cloud First to AI-First
            </Heading>
            <p className="font-body text-[18px] leading-[1.7] text-text-primary opacity-85 mb-5">
              MPC Cloud Consulting was founded in 2019 with a single conviction:
              that enterprise transformation must begin with genuine
              understanding — of business processes, of industry context, and of
              the people who use the systems we build.
            </p>
            <p className="font-body text-[17px] leading-[1.7] text-text-primary opacity-80 mb-5">
              In six years, we've grown to 700+ consultants across 8 global offices in
              5 countries. We've completed 87+ engagements for 65+ organisations
              — from BFSI giants to manufacturing leaders and energy companies.
              And we've done it by staying focused on Oracle Cloud, refusing to
              be generalists in a space that rewards depth.
            </p>
            <p className="font-body text-[17px] leading-[1.7] text-text-primary opacity-80">
              Today, with the rise of AI, we're leading a new chapter. MPC Tech
              Hub is our AI innovation centre — building custom agents,
              extending Oracle with intelligence, and helping enterprises move
              from Cloud First to AI-First.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="w-full bg-bg-light px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <p className="section-eyebrow mb-3">
            Milestones
          </p>
          <Heading level={2} className="mb-10">
            Seven years of growth
          </Heading>
          <div className="relative overflow-x-auto pb-4">
            <div className="absolute left-0 right-0 top-[26px] h-[2px] bg-divider/30" />
            <ol className="flex gap-6 md:gap-8 min-w-max relative">
              {TIMELINE.map((t) =>
              <li
                key={t.y}
                className="flex flex-col items-start min-w-[140px]">
                
                  <div className="w-3.5 h-3.5 rounded-full bg-divider border-4 border-bg-light z-10 mt-4" />
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
        </section>

        {/* Credentials */}
        <section className="w-full bg-bg-light px-4 pt-0 md:px-10 lg:px-[60px]">
          <Heading level={2} className="mb-8">
            MPC by the numbers
          </Heading>
          <StatCalloutGrid
            stats={STATS.slice(0, 4)}
            variant="light"
            className="!px-0 !py-0 mb-6" />
          
          <StatCalloutGrid
            stats={STATS.slice(4, 8)}
            variant="light"
            className="!px-0 !py-0 pb-12 md:pb-16 lg:pb-[40px]" />
          
        </section>

        {/* Three Pillars */}
        <section className="w-full bg-bg-light px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="mb-10 max-w-[700px]">
            <p className="section-eyebrow mb-3">
              What Sets Us Apart
            </p>
            <Heading level={2}>Three pillars of excellence</Heading>
          </div>
          <div className="max-w-[1280px] mx-auto">
            <PillarCards items={PILLARS} />
          </div>
        </section>

        {/* Global Presence */}
        <section className="w-full bg-bg-light px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="mb-10">
            <p className="section-eyebrow mb-3">
              Global Presence
            </p>
            <Heading level={2}>8 offices. One connected team.</Heading>
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

        {/* Industries */}
        <section className="w-full bg-white px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="mb-10">
            <p className="section-eyebrow mb-3">
              Industries
            </p>
            <Heading level={2}>Industries we understand</Heading>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {INDUSTRIES.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.name}
                  className="flex flex-col items-start p-5 rounded-card bg-bg-light border border-transparent hover:border-divider transition-colors">
                  
                  <Icon className="w-6 h-6 text-divider mb-3" />
                  <p className="font-body text-[14px] font-medium text-text-primary">
                    {ind.name}
                  </p>
                </div>);

            })}
          </div>
        </section>

        {/* Leadership snapshot */}
        <section className="w-full bg-bg-light px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
            <div>
              <p className="section-eyebrow mb-3">
                Leadership
              </p>
              <Heading level={2}>Leaders behind the work</Heading>
            </div>
            <Link
              to="/team/"
              className="inline-flex items-center gap-2 font-body text-[14px] font-semibold text-cta hover:text-accent group">
              
              Meet the full team{' '}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {LEADERS.map((l) =>
            <div
              key={l.name}
              className="bg-white rounded-card shadow-subtle overflow-hidden flex flex-col">
              
                <img
                src={l.img}
                alt={l.name}
                className="w-full aspect-[4/3] object-cover" />
              
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-[20px] text-text-primary">
                    {l.name}
                  </h3>
                  <p className="font-body text-[14px] uppercase tracking-[0.8px] font-medium text-divider mt-1 mb-3">
                    {l.title}
                  </p>
                  <p className="font-body text-[14px] leading-[1.6] text-text-primary opacity-80">
                    {l.bio}
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Awards & Certifications */}
        <section className="w-full bg-primary text-text-inverse px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="mb-10">
            <p className="section-eyebrow mb-3">
              Awards & Certifications
            </p>
            <Heading level={2} color="text-inverse">
              Trusted by partners, certified by standards
            </Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {CERTS.map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-card p-6">
                  
                  <Icon className="w-7 h-7 text-divider mb-4" />
                  <h3 className="font-heading font-semibold text-[18px] mb-2">
                    {c.title}
                  </h3>
                  <p className="font-body text-[14px] leading-[1.6] opacity-80">
                    {c.body}
                  </p>
                </div>);

            })}
          </div>
        </section>

        <LogoCloud
          caption="65+ organisations trust MPC"
          items={ALL_CLIENT_LOGOS}
          bg="soft"
          scrollable
        />
        

        <CTABand
          title="Ready to work with us?"
          body="Wherever you are in your Oracle journey — let's talk."
          ctaText="Contact Our Team"
          ctaTo="/contact/"
          variant="centered" />
        
      </main>
      <FooterDark />
    </div>);

}