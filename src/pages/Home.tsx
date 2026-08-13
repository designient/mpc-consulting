import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Database,
  Sparkles,
  Cloud,
  BarChart3,
  Shield,
  Landmark,
  ArrowRight,
  Star,
  Banknote,
  Factory,
  Plane,
  Building2,
  Zap,
  Radio,
  Briefcase,
} from 'lucide-react';
import { StickyNav } from '../components/layout/StickyNav';
import { FooterDark } from '../components/sections/FooterDark';
import { SEO, ORGANIZATION_SCHEMA, WEB_SITE_SCHEMA } from '../components/seo/SEO';
import { Heading } from '../components/ui/Heading';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { TestimonialGrid } from '../components/sections/TestimonialGrid';
import { StatOverlayCaseStudy } from '../components/sections/StatOverlayCaseStudy';
import {
  statAccentCardClass,
  statAccentLabelClass,
} from '../components/ui/StatCallout';
import {
  FAQAccordion,
  buildFAQSchema } from
'../components/sections/FAQAccordion';
import { LogoCloud } from '../components/sections/LogoCloud';
import { ERP_CLIENT_LOGOS, HCM_CLIENT_LOGOS } from '../data/clientLogos';

const HERO_BG =
  'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2400&q=80';

const SERVICES = [
  {
    icon: Database,
    title: 'Oracle (Fusion & EBS)',
    desc: 'HCM, ERP, SCM, Unifier, EPM, and technology services across Fusion and EBS.',
    to: '/services/oracle-fusion-ebs/',
  },
  {
    icon: Sparkles,
    title: 'AI CoE',
    desc: 'AI enablement, predictive AI, custom agents, and generative AI for the enterprise.',
    to: '/services/ai-coe/',
  },
  {
    icon: Cloud,
    title: 'Cloud & Digital Transformation',
    desc: 'Application development, database migration, and cloud management at scale.',
    to: '/services/cloud-digital-transformation/',
  },
  {
    icon: BarChart3,
    title: 'CX & Analytics',
    desc: 'Power BI, Salesforce, and ServiceNow for customer experience and insight.',
    to: '/services/cx-analytics/',
  },
  {
    icon: Shield,
    title: 'Security & Zero Trust',
    desc: 'Cybersecurity strategy, application and cloud security, and managed operations.',
    to: '/services/security-zero-trust/',
  },
  {
    icon: Landmark,
    title: 'Treasury Management',
    desc: 'IBS Fintech and end-to-end treasury management capabilities.',
    to: '/services/treasury-management/',
  },
];

const INDUSTRIES = [
  {
    icon: Banknote,
    name: 'BFSI',
    desc: 'Oracle Cloud for banks and insurers that is audit-ready, regulator-aligned, and built for scale across every region we operate in.',
  },
  {
    icon: Factory,
    name: 'Manufacturing',
    desc: 'Connect ERP, HCM, and operations data so finance, supply chain, and workforce decisions run from one source of truth.',
  },
  {
    icon: Plane,
    name: 'Travel & Hospitality',
    desc: 'Consolidate HR, finance, and operations on Oracle Cloud so you can flex with demand without breaking margins.',
  },
  {
    icon: Building2,
    name: 'Real Estate',
    desc: 'Unify project finance, leasing, and HR across complex portfolios with the reporting agility boards expect.',
  },
  {
    icon: Zap,
    name: 'Energy & Utilities',
    desc: 'Modernise on Oracle Cloud with the safety, asset, and regulatory rigour the sector demands.',
  },
  {
    icon: Radio,
    name: 'Telecommunications',
    desc: 'HR and finance modernisation with deep understanding of how Oracle sits alongside B/OSS and billing systems.',
  },
  {
    icon: Landmark,
    name: 'Public Sector',
    desc: 'Modernise HR and finance while staying inside procurement, security, and accessibility frameworks.',
  },
  {
    icon: Briefcase,
    name: 'Professional Services',
    desc: 'Put project finance, utilisation, and HR on Oracle Cloud so growth does not cost margin visibility.',
  },
];

const PILLARS = [
  {
    title: 'Deep Industry Understanding',
    body: "We understand the processes, challenges, and priorities that shape your business. Our experience across BFSI, manufacturing, energy, and other industries helps us design solutions grounded in real-world business needs."
  },
  {
    title: 'Domain Specialisation',
    body: '85+ Consultants & SME in Oracle Tech & Cloud. We have 30+ Certified Consultants in Multicloud & Cyber Security. Every consultant on our team is Cloud & AI-focused, Oracle/AWS/Microsoft-certified, and committed to mastering one platform rather than spreading across many.'
  },
  {
    title: 'Strong Competencies',
    body: 'Our capabilities span advisory, implementation, integration, managed support, and continuous innovation. Agile delivery, cross-functional collaboration, and a commitment to quality help us turn transformation strategies into outcomes that last.'
  }
];

const TESTIMONIALS = [
{
  quote:
  'MPC delivered our Oracle HCM transformation on time and on budget with measurable improvements in HR efficiency from day one.',
  name: 'CHRO',
  title: 'Chief HR Officer',
  company: 'Global BFSI Group',
  country: 'India'
},
{
  quote:
  "Their team didn't just implement ERP. They redesigned our finance processes. The business impact was immediate.",
  name: 'CFO',
  title: 'Chief Financial Officer',
  company: 'Energy Major',
  country: 'UAE'
},
{
  quote:
  "The post-go-live support from MPC has been outstanding. They treat our system like it's their own.",
  name: 'CTO',
  title: 'Chief Technology Officer',
  company: 'Manufacturing Leader',
  country: 'Australia'
},
{
  quote:
  'Their Oracle depth is genuinely rare, they navigated configuration edge cases our previous SI never even surfaced.',
  name: 'VP IT',
  title: 'VP, Enterprise Applications',
  company: 'Public Sector Body',
  country: 'UK'
}];

const FAQS = [
{
  q: 'What Oracle Cloud services does MPC specialise in?',
  a: 'MPC delivers end-to-end Oracle Cloud services including HCM, ERP (Fusion and EBS), Java Technologies, DevOps, Business Process Consulting, Health Check as a Service (HCaaS), and Adoption as a Service (AaaS). We also deliver AI enablement, custom agents, and generative AI through our AI CoE.'
},
{
  q: 'Which countries does MPC operate in?',
  a: 'We have offices in India (Gurugram, Hyderabad, Bengaluru), UAE (Dubai, Abu Dhabi), Singapore, Australia (Melbourne), and the UK (London). Our delivery teams support clients globally.'
},
{
  q: 'How long has MPC been delivering Oracle Cloud projects?',
  a: 'MPC was founded in 2019. Our team collectively brings 350+ years of combined Oracle expertise to every engagement.'
},
{
  q: 'Can MPC support both new Oracle implementations and existing system improvements?',
  a: 'Yes. We handle greenfield implementations, system upgrades, rollouts, managed support, and health checks. We meet you wherever you are in your Oracle journey.'
},
{
  q: 'What industries does MPC serve?',
  a: 'We serve 8 key industries: BFSI, Manufacturing, Travel & Hospitality, Real Estate, Energy & Utilities, Telecommunications, Public Sector, and Professional Services.'
}];

export function Home() {
  const [logoTab, setLogoTab] = useState<'hcm' | 'erp'>('hcm');

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="Oracle Cloud & AI Consulting | MPC Cloud Consulting"
        description="MPC Cloud Consulting, Oracle Cloud, HCM & ERP transformation across India, UAE, Singapore, UK & Australia. 65+ clients. 350+ years combined expertise."
        canonicalPath="/"
        schema={[ORGANIZATION_SCHEMA, WEB_SITE_SCHEMA, buildFAQSchema(FAQS)]}
      />
      

      <StickyNav />

      <main className="flex-grow w-full">
        {/* HERO. Compact display typography */}
        <section className="relative w-full min-h-[min(58svh,600px)] max-h-[600px] overflow-hidden flex items-center">
          <img
            src={HERO_BG}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover" />
          <div
            aria-hidden
            className="absolute inset-0 bg-cta/55"
          />

          <div className="relative w-full max-w-[1400px] mx-auto px-4 md:px-10 lg:px-[60px] py-12 md:py-14 lg:py-16 min-h-[inherit] flex flex-col justify-center text-text-inverse">
            <div className="w-full max-w-[1100px] text-center lg:text-left flex flex-col items-center lg:items-start">
              <span className="section-eyebrow-inverse inline-flex items-center gap-2 tracking-[0.2em] mb-4 md:mb-5 text-text-inverse">
                <span className="w-1.5 h-1.5 rounded-full bg-text-inverse" />
                Oracle Cloud · AI Transformation
              </span>

              <h1 className="type-h1 text-text-inverse">
                From Cloud First to{' '}
                <span className="font-body italic font-normal text-text-inverse">
                  AI-First
                </span>
              </h1>

              <p className="type-paragraph text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5] text-text-inverse/90 mt-4 md:mt-5 max-w-[640px] lg:max-w-[720px]">
                We help enterprises transform how they work through cloud, AI,
                automation, and modern technology, turning complex business
                challenges into measurable outcomes.
              </p>

              <div className="flex items-center justify-center lg:justify-start mt-6 md:mt-8">
                <Link
                  to="/services/"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary rounded-full font-body text-[15px] font-medium hover:bg-white/90 transition-colors group">
                  Explore Our Services
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-3 mt-6 lg:mt-8 pb-2 text-[13px] md:text-[14px] font-medium text-text-inverse/80 w-full max-w-[1100px] mx-auto lg:mx-0">
              <div className="flex text-stat">
                {[0, 1, 2, 3, 4].map((i) =>
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
                )}
              </div>
              <span>Trusted by 65+ enterprises across 5 countries</span>
            </div>
          </div>
        </section>

        {/* THREE PILLARS */}
        <section className="w-full bg-bg-light px-4 py-14 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="text-center mb-10 max-w-[800px] mx-auto">
            <p className="section-eyebrow mb-3">
              Why MPC
            </p>
            <Heading level={2} className="mb-4">
              Built on Three Pillars of Excellence
            </Heading>
            <p className="font-body text-[17px] leading-[1.7] text-text-primary opacity-80">
              MPC combines deep industry understanding, technology mastery,
              and cross-functional expertise to solve complex business
              challenges and deliver measurable outcomes across cloud,
              SaaS, AI, automation, and digital transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {PILLARS.map((p, i) => (
              <Card key={i} bg="white">
                <div className="w-10 h-1 bg-divider mb-5" />
                <Heading level={3} className="mb-3">
                  {p.title}
                </Heading>
                <p className="font-body text-[16px] leading-[1.7] text-text-primary opacity-80">
                  {p.body}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* SERVICES TEASER */}
        <section className="w-full bg-white px-4 py-14 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="text-center mb-10 max-w-[800px] mx-auto">
            <p className="section-eyebrow mb-3">
              Services
            </p>
            <Heading level={2}>
              <span className="text-stat">AI Powered</span>{' '}
              MPC Digital Transformation Services
            </Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-[1200px] mx-auto">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.title}
                  to={s.to}
                  className="group flex flex-col rounded-card border border-black/8 bg-white hover:border-divider hover:shadow-subtle transition-all p-6">
                  <div className="w-11 h-11 rounded-md bg-stat/10 flex items-center justify-center text-stat mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="type-h3 text-[20px] text-text-primary mb-2 group-hover:text-divider transition-colors">
                    {s.title}
                  </h3>
                  <p className="font-body text-[14px] leading-[1.6] text-text-primary opacity-75 mb-5 flex-grow">
                    {s.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-body text-[13px] font-semibold text-cta mt-auto">
                    Learn more{' '}
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="w-full bg-bg-light px-4 py-14 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="text-center mb-10 max-w-[800px] mx-auto">
            <p className="section-eyebrow mb-3">Industries We Serve</p>
            <Heading level={2}>Serving Sectors That Power the World</Heading>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-[1280px] mx-auto">
            {INDUSTRIES.map((ind) => {
              const Icon = ind.icon;
              return (
                <Link
                  key={ind.name}
                  to="/industries/"
                  className="group flex flex-col rounded-card border border-black/8 bg-white hover:border-divider hover:shadow-subtle transition-all p-6">
                  <div className="w-11 h-11 rounded-md bg-stat/10 flex items-center justify-center text-stat mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="type-h3 text-[20px] text-text-primary mb-2 group-hover:text-divider transition-colors">
                    {ind.name}
                  </h3>
                  <p className="font-body text-[14px] leading-[1.6] text-text-primary opacity-75 mb-5 flex-grow">
                    {ind.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-body text-[13px] font-semibold text-cta mt-auto">
                    Learn more{' '}
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ABOUT TEASER + STATS */}
        <section className="w-full bg-white px-4 py-14 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="section-eyebrow mb-3">
                About MPC
              </p>
              <Heading level={2} className="mb-5">
                The MPC Difference
              </Heading>
              <p className="font-body text-[18px] leading-[1.6] text-text-primary opacity-90 mb-5">
                Founded in 2019, MPC Cloud Consulting has grown into a global
                Oracle implementation and AI transformation partner with 8
                global offices across India, UAE, Singapore, Australia, and the UK.
              </p>
              <p className="font-body text-[16px] leading-[1.7] text-text-primary opacity-80 mb-7">
                We combine Oracle-certified expertise with genuine industry
                knowledge to deliver outcomes that move the needle, not just
                go-lives that hit a date. Our 700+ consultants have shaped ERP,
                HCM, and AI strategies for 65+ enterprises across four
                continents.
              </p>
              <Link to="/about/">
                <Button variant="primary" size="md">
                  About MPC
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              {[
              {
                n: '2019',
                l: 'Founded'
              },
              {
                n: '8',
                l: 'Global Offices'
              },
              {
                n: '4',
                l: 'Countries'
              },
              {
                n: 'Oracle + AI',
                l: 'Focus'
              }].
              map((s) => {
              const isCompactStat = s.n === 'Oracle + AI';
              return (
              <div
                key={s.l}
                className={`${statAccentCardClass} p-5 md:p-6 min-w-0`}>
                <div
                  className={`font-heading font-semibold text-white leading-tight mb-1 ${
                    isCompactStat
                      ? 'text-[20px] sm:text-[22px] md:text-[24px] whitespace-nowrap'
                      : 'text-[26px] sm:text-[28px] md:text-[32px]'
                  }`}>
                  {s.n}
                </div>
                <div className={`${statAccentLabelClass} !mt-1.5 text-[13px]`}>
                  {s.l}
                </div>
              </div>
              );
              })}
            </div>
          </div>
        </section>

        {/* CLIENT LOGO WALL */}
        <section className="w-full bg-white px-4 py-14 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="text-center mb-8">
            <p className="section-eyebrow mb-3">
              Our Clients
            </p>
            <div className="flex justify-center">
              <Heading level={2}>Trusted by 65+ Organisations</Heading>
            </div>
            <p className="font-body text-[16px] leading-[1.6] text-text-primary opacity-75 mt-4 max-w-[600px] mx-auto">
              Across industries from BFSI and manufacturing to energy and
              professional services.
            </p>
          </div>

          <div className="flex justify-center gap-2 mb-8">
            {(
            [
            ['hcm', 'HCM Clients'],
            ['erp', 'ERP Clients']] as
            const).
            map(([key, label]) =>
            <button
              key={key}
              onClick={() => setLogoTab(key)}
              className={`px-4 py-2 rounded-full font-body text-[13px] font-medium transition-colors ${logoTab === key ? 'bg-cta text-text-inverse' : 'bg-bg-light text-text-primary hover:bg-divider/10'}`}>
              
                {label}
              </button>
            )}
          </div>

          <LogoCloud
            key={logoTab}
            items={logoTab === 'hcm' ? HCM_CLIENT_LOGOS : ERP_CLIENT_LOGOS}
            bg="transparent"
            scrollable
            autoScroll
          />
          
        </section>

        {/* TESTIMONIALS */}
        <TestimonialGrid
          eyebrow="Client Voices"
          title="What Our Clients Say"
          items={TESTIMONIALS}
          variant="light"
          carousel
        />
        

        {/* FEATURED CASE STUDY */}
        <StatOverlayCaseStudy
          eyebrow="Featured Case Study"
          tag="Global BFSI · 2024"
          headline="$48M saved across an Oracle Cloud consolidation programme"
          description="A leading multinational BFSI institution operating across three countries needed to consolidate four legacy HR systems and modernise their Oracle ERP. MPC delivered phased Core HR → Talent → Payroll alongside an ERP optimisation programme."
          metadata="BFSI · India, UAE, Singapore, UK · HCM + ERP"
          imageSrc="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000&auto=format&fit=crop"
          imageAlt="Enterprise team reviewing transformation outcomes"
          stat="$48M"
          statLabel="Delivered savings"
          statContext="Across 18 months of phased Oracle consolidation and optimisation."
          ctaText="Read the case study"
          ctaTo="/resources/case-studies/"
          bg="soft" />
        
        {/* FAQ */}
        <FAQAccordion
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          items={FAQS}
          layout="full"
          bg="white"
        />

        {/* CREDENTIAL BAR */}
        <section className="w-full bg-white px-4 py-10 md:px-10 md:py-12 lg:px-[60px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-[1200px] mx-auto">
            {[
              { n: '65+', l: 'Enterprise Clients' },
              { n: '700+', l: 'Oracle Consultants' },
              { n: '350+', l: 'Years Combined Expertise' },
              { n: '87+', l: 'Successful Engagements' },
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
      </main>

      <FooterDark />
    </div>);

}