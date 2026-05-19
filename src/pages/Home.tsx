import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Database,
  Code2,
  Cloud,
  Workflow,
  Activity,
  UserCheck,
  Sparkles,
  ArrowRight,
  Star,
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
import { SEO, ORGANIZATION_SCHEMA, WEB_SITE_SCHEMA } from '../components/seo/SEO';
import { Heading } from '../components/ui/Heading';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { StatCalloutGrid } from '../components/sections/StatCalloutGrid';
import { TestimonialGrid } from '../components/sections/TestimonialGrid';
import { StatOverlayCaseStudy } from '../components/sections/StatOverlayCaseStudy';
import {
  FAQAccordion,
  buildFAQSchema } from
'../components/sections/FAQAccordion';
import { CTABand } from '../components/sections/CTABand';
import { NewsletterInline } from '../components/sections/NewsletterInline';
import { LogoCloud } from '../components/sections/LogoCloud';
const SERVICES = [
{
  icon: Users,
  title: 'HCM',
  desc: 'Transform your workforce with Oracle HCM Cloud — HR, Talent, Payroll, and Oracle ME.',
  to: '/services/hcm/'
},
{
  icon: Database,
  title: 'ERP (Oracle Cloud)',
  desc: 'Modernise finance, procurement, and compliance with Oracle Fusion and EBS.',
  to: '/services/erp-oracle-cloud/'
},
{
  icon: Code2,
  title: 'Java Technologies',
  desc: 'Enterprise Java development — Spring Boot, microservices, APIs, and full-stack cloud apps.',
  to: '/services/java-technologies/'
},
{
  icon: Cloud,
  title: 'DevOps Services',
  desc: 'CI/CD pipelines, Kubernetes, multi-cloud infrastructure, and continuous delivery.',
  to: '/services/devops/'
},
{
  icon: Workflow,
  title: 'Business Process Consulting',
  desc: 'Optimise operations across Finance, HR, Supply Chain, and Sales before you transform.',
  to: '/services/business-process-consulting/'
},
{
  icon: Activity,
  title: 'HCaaS',
  desc: 'Health Check as a Service — comprehensive Oracle audit with a prioritised remediation roadmap.',
  to: '/services/health-check-as-a-service/'
},
{
  icon: UserCheck,
  title: 'AaaS',
  desc: 'Adoption as a Service — maximise ROI through change management, training, and enablement.',
  to: '/services/adoption-as-a-service/'
},
{
  icon: Sparkles,
  title: 'MPC Tech Hub',
  desc: 'AI agents, custom Oracle extensions, and innovation accelerators for the AI era.',
  to: '/services/mpc-tech-hub/'
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

const PILLARS = [
{
  title: 'Deep Industry Understanding',
  body: "We don't just implement technology. We understand the business problems it must solve — across BFSI, manufacturing, energy, and seven other verticals."
},
{
  title: 'Domain Specialisation',
  body: 'Oracle-certified consultants. Deep product knowledge across HCM, ERP, DevOps, and AI. Not generalists — specialists.'
},
{
  title: 'Strong Competencies',
  body: 'End-to-end delivery capability: advisory, implementation, managed support, and innovation. One partner for the full journey.'
}];

const TESTIMONIALS = [
{
  quote:
  'MPC delivered our Oracle HCM transformation on time and on budget — with measurable improvements in HR efficiency from day one.',
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
  'Their Oracle depth is genuinely rare — they navigated configuration edge cases our previous SI never even surfaced.',
  name: 'VP IT',
  title: 'VP, Enterprise Applications',
  company: 'Public Sector Body',
  country: 'UK'
}];

const FAQS = [
{
  q: 'What Oracle Cloud services does MPC specialise in?',
  a: 'MPC delivers end-to-end Oracle Cloud services including HCM, ERP (Fusion and EBS), Java Technologies, DevOps, Business Process Consulting, Health Check as a Service (HCaaS), and Adoption as a Service (AaaS). We also build custom AI solutions and Oracle extensions through our MPC Tech Hub.'
},
{
  q: 'Which countries does MPC operate in?',
  a: 'We have offices in India (Gurugram, Hyderabad, Bengaluru), UAE (Dubai, Abu Dhabi), Australia (Melbourne), and the UK (London). Our delivery teams support clients globally.'
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
  const hcmLogos = [
  'Aegis',
  'NovaBank',
  'Helios',
  'Verdant',
  'Atria',
  'Sterling'];

  const erpLogos = [
  'Northwind',
  'Cyrus',
  'Pinnacle',
  'Polaris',
  'Eversource',
  'Meridian'];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="Oracle Cloud & AI Consulting | MPC Cloud Consulting"
        description="MPC Cloud Consulting — Oracle Cloud, HCM & ERP transformation across India, UAE, UK & Australia. 65+ clients. 350+ years combined expertise."
        canonicalPath="/"
        schema={[ORGANIZATION_SCHEMA, WEB_SITE_SCHEMA, buildFAQSchema(FAQS)]}
      />
      

      <StickyNav />

      <main className="flex-grow w-full">
        {/* HERO — Editorial flagship */}
        <section className="relative w-full bg-white overflow-hidden">
          {/* Soft ambient gradient blobs */}
          <div
            aria-hidden
            className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full opacity-[0.08] blur-3xl"
            style={{
              background:
              'radial-gradient(circle, #0369A1 0%, transparent 70%)'
            }} />
          
          <div
            aria-hidden
            className="absolute -top-20 right-0 w-[420px] h-[420px] rounded-full opacity-[0.06] blur-3xl"
            style={{
              background:
              'radial-gradient(circle, #0955B4 0%, transparent 70%)'
            }} />
          

          <div className="relative w-full px-4 pt-16 md:px-10 md:pt-24 lg:px-[60px] lg:pt-[120px]">
            <div className="max-w-[960px] mx-auto text-center flex flex-col items-center">
              <span className="inline-flex items-center gap-2 font-body text-[11px] md:text-[12px] uppercase tracking-[2px] font-semibold text-divider mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-divider" />
                Oracle Cloud · AI Transformation
              </span>

              <h1 className="font-heading font-medium text-[44px] md:text-[64px] lg:text-[80px] leading-[1.02] tracking-[-0.6px] text-text-primary">
                From Cloud First to{' '}
                <span className="font-serif italic font-normal text-divider">
                  AI-First
                </span>
              </h1>

              <p className="font-body text-[17px] md:text-[20px] leading-[1.6] text-text-primary/75 mt-7 max-w-[680px]">
                We help enterprises transform their operations with Oracle
                Cloud, AI solutions, and deep domain expertise — across India,
                UAE, Australia, and the UK.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3 mt-10">
                <Link
                  to="/services/"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white rounded-full font-body text-[14px] font-medium hover:bg-primary/90 transition-colors group">
                  
                  Explore Our Services
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/contact/"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-text-primary border border-text-primary/15 rounded-full font-body text-[14px] font-medium hover:border-text-primary/40 hover:bg-bg-light transition-colors">
                  
                  Talk to an Expert
                </Link>
              </div>

              <div className="flex items-center gap-3 mt-10 text-[13px] font-medium text-text-primary/70">
                <div className="flex text-divider">
                  {[0, 1, 2, 3, 4].map((i) =>
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  )}
                </div>
                <span>Trusted by 65+ enterprises across 4 countries</span>
              </div>
            </div>
          </div>

          {/* 3-image triptych */}
          <div className="relative w-full px-4 md:px-10 lg:px-[60px] pt-16 md:pt-24 pb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 max-w-[1320px] mx-auto">
              {/* Left card — overlay quote */}
              <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-card bg-primary group">
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80"
                  alt="MPC consultants working with clients"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" />
                
                <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/20 to-primary/95" />
                <div className="absolute inset-0 p-6 md:p-7 flex flex-col justify-between text-white">
                  <span className="inline-flex w-fit items-center gap-2 text-[10px] uppercase tracking-[1.5px] font-semibold text-divider-bright">
                    <span className="w-1 h-1 rounded-full bg-divider-bright" />
                    Our Approach
                  </span>
                  <p className="font-heading font-medium text-[18px] md:text-[20px] leading-snug">
                    At MPC, we don't just consult — we build alongside ambitious
                    teams.
                  </p>
                </div>
              </div>

              {/* Middle card — clean portrait */}
              <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-card bg-bg-light group">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
                  alt="MPC consultant portrait"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                
              </div>

              {/* Right card — abstract tech with stat overlay */}
              <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-card bg-primary group">
                <img
                  src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80"
                  alt="Oracle Cloud and AI abstract"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 via-primary/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7 text-white">
                  <div className="font-heading font-semibold text-stat text-[40px] md:text-[52px] leading-none mb-1">
                    700+
                  </div>
                  <div className="font-body text-[12px] uppercase tracking-[1.2px] font-medium opacity-90">
                    Oracle specialists, one team
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CREDENTIAL BAR */}
        <section className="w-full bg-white px-4 py-12 md:px-10 md:py-16 lg:px-[60px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-[1200px] mx-auto">
            {[
            {
              n: '65+',
              l: 'Enterprise Clients'
            },
            {
              n: '700+',
              l: 'Oracle Consultants'
            },
            {
              n: '350+',
              l: 'Years Combined Expertise'
            },
            {
              n: '87+',
              l: 'Successful Engagements'
            }].
            map((s) =>
            <div key={s.l} className="text-center md:text-left">
                <div className="font-heading font-semibold text-stat text-[44px] md:text-[56px] leading-none mb-2">
                  {s.n}
                </div>
                <div className="font-body text-[12px] uppercase tracking-[0.8px] font-medium text-text-primary opacity-80">
                  {s.l}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* THREE PILLARS */}
        <section className="w-full bg-bg-light px-4 py-14 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="mb-10 max-w-[800px]">
            <p className="font-body text-[12px] uppercase tracking-[0.8px] font-semibold text-divider mb-3">
              Why MPC
            </p>
            <Heading level={2} className="mb-4">
              Built on Three Pillars of Excellence
            </Heading>
            <p className="font-body text-[17px] leading-[1.7] text-text-primary opacity-80">
              MPC's approach combines industry understanding with Oracle
              specialisation and cross-functional competencies — built to
              deliver real outcomes, not just implementations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {PILLARS.map((p, i) =>
            <Card key={i} bg="white">
                <div className="w-10 h-1 bg-divider mb-5" />
                <Heading level={3} className="mb-3">
                  {p.title}
                </Heading>
                <p className="font-body text-[16px] leading-[1.7] text-text-primary opacity-80">
                  {p.body}
                </p>
              </Card>
            )}
          </div>
        </section>

        {/* SERVICES TEASER */}
        <section className="w-full bg-white px-4 py-14 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-6">
            <div className="max-w-[700px]">
              <p className="font-body text-[12px] uppercase tracking-[0.8px] font-semibold text-divider mb-3">
                Services
              </p>
              <Heading level={2}>End-to-End Cloud Services</Heading>
            </div>
            <Link
              to="/services/"
              className="inline-flex items-center gap-2 font-body text-[14px] font-semibold text-cta hover:text-accent transition-colors group">
              
              View all services{' '}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.to}
                  to={s.to}
                  className="group flex flex-col rounded-card border border-black/8 bg-white hover:border-divider hover:shadow-subtle transition-all p-6">
                  
                  <div className="w-11 h-11 rounded-md bg-divider/10 flex items-center justify-center text-divider mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-medium text-[20px] leading-tight tracking-tight text-text-primary mb-2 group-hover:text-divider transition-colors">
                    {s.title}
                  </h3>
                  <p className="font-body text-[14px] leading-[1.6] text-text-primary opacity-75 mb-5 flex-grow">
                    {s.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-body text-[13px] font-semibold text-cta mt-auto">
                    Learn more{' '}
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>);

            })}
          </div>
        </section>

        {/* INDUSTRIES STRIP */}
        <section className="w-full bg-primary text-text-inverse px-4 py-14 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="text-center mb-10">
            <p className="font-body text-[12px] uppercase tracking-[0.8px] font-semibold text-divider-bright mb-3">
              Industries We Serve
            </p>
            <div className="flex justify-center">
              <Heading level={2} color="text-inverse">
                Serving Sectors That Power the World
              </Heading>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 max-w-[1100px] mx-auto mb-10">
            {INDUSTRIES.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.name}
                  className="flex flex-col items-center text-center p-5 rounded-card bg-white/5 border border-white/10 hover:border-divider-bright transition-colors">
                  
                  <Icon className="w-7 h-7 text-divider-bright mb-3" />
                  <p className="font-body text-[14px] font-medium">
                    {ind.name}
                  </p>
                </div>);

            })}
          </div>
          <div className="text-center">
            <Link to="/industries/">
              <Button variant="tertiary" size="md">
                Explore All Industries
              </Button>
            </Link>
          </div>
        </section>

        {/* ABOUT TEASER + STATS */}
        <section className="w-full bg-bg-light px-4 py-14 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="font-body text-[12px] uppercase tracking-[0.8px] font-semibold text-divider mb-3">
                About MPC
              </p>
              <Heading level={2} className="mb-5">
                The MPC Difference
              </Heading>
              <p className="font-body text-[18px] leading-[1.6] text-text-primary opacity-90 mb-5">
                Founded in 2019, MPC Cloud Consulting has grown into a global
                Oracle implementation and AI transformation partner — with 7
                offices across India, UAE, Australia, and the UK.
              </p>
              <p className="font-body text-[16px] leading-[1.7] text-text-primary opacity-80 mb-7">
                We combine Oracle-certified expertise with genuine industry
                knowledge to deliver outcomes that move the needle — not just
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
                n: '7',
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
              map((s) =>
              <div
                key={s.l}
                className="bg-primary text-text-inverse rounded-callout p-6 md:p-7">
                
                  <div className="font-heading font-semibold text-stat text-[32px] md:text-[40px] leading-tight mb-1">
                    {s.n}
                  </div>
                  <div className="font-body text-[12px] uppercase tracking-[0.8px] font-medium opacity-90 mt-2">
                    {s.l}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CLIENT LOGO WALL */}
        <section className="w-full bg-white px-4 py-14 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="text-center mb-8">
            <p className="font-body text-[12px] uppercase tracking-[0.8px] font-semibold text-divider mb-3">
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
              className={`px-4 py-2 rounded-full font-body text-[13px] font-medium transition-colors ${logoTab === key ? 'bg-primary text-text-inverse' : 'bg-bg-light text-text-primary hover:bg-divider/10'}`}>
              
                {label}
              </button>
            )}
          </div>

          <LogoCloud
            logos={logoTab === 'hcm' ? hcmLogos : erpLogos}
            bg="transparent" />
          
        </section>

        {/* TESTIMONIALS */}
        <TestimonialGrid
          eyebrow="Client Voices"
          title="What Our Clients Say"
          items={TESTIMONIALS}
          variant="light"
          columns={2} />
        

        {/* FEATURED CASE STUDY */}
        <StatOverlayCaseStudy
          eyebrow="Featured Case Study"
          tag="Global BFSI · 2024"
          headline="$48M saved across an Oracle Cloud consolidation programme"
          description="A leading multinational BFSI institution operating across three countries needed to consolidate four legacy HR systems and modernise their Oracle ERP. MPC delivered phased Core HR → Talent → Payroll alongside an ERP optimisation programme."
          metadata="BFSI · India, UAE, UK · HCM + ERP"
          imageSrc="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000&auto=format&fit=crop"
          imageAlt="Enterprise team reviewing transformation outcomes"
          stat="$48M"
          statLabel="Delivered savings"
          statContext="Across 18 months of phased Oracle consolidation and optimisation."
          ctaText="Read the case study"
          ctaTo="/resources/case-studies/"
          bg="soft" />
        
        <div className="w-full bg-bg-light h-[80px] lg:h-[120px]" />

        {/* CTA BAND */}
        <CTABand
          title="Ready to Start Your Transformation?"
          body="Whether you're at the start of your Oracle journey or looking to accelerate an existing programme — let's talk."
          ctaText="Schedule a Consultation"
          ctaTo="/contact/"
          variant="centered" />
        

        {/* FAQ */}
        <FAQAccordion
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          items={FAQS}
          layout="full"
          bg="soft" />
        

        {/* NEWSLETTER */}
        <NewsletterInline
          title="Stay Ahead of Oracle"
          subhead="Monthly insights on Oracle Cloud, AI, and enterprise technology — direct to your inbox. No fluff."
          variant="ocean" />
        
      </main>

      <FooterDark />
    </div>);

}