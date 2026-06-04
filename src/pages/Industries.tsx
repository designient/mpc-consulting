import React from 'react';
import { StickyNav } from '../components/layout/StickyNav';
import { FooterDark } from '../components/sections/FooterDark';
import { ServiceHero } from '../components/sections/heroes/ServiceHero';
import { StatCalloutGrid } from '../components/sections/StatCalloutGrid';
import { IndustryTabSwitcher } from '../components/sections/IndustryTabSwitcher';
import { ContentGrid3Col } from '../components/sections/ContentGrid3Col';
import { ProcessSteps } from '../components/sections/ProcessSteps';
import { ComparisonTable } from '../components/sections/ComparisonTable';
import { StatOverlayCaseStudy } from '../components/sections/StatOverlayCaseStudy';
import { TestimonialGrid } from '../components/sections/TestimonialGrid';
import {
  FAQAccordion,
  buildFAQSchema } from
'../components/sections/FAQAccordion';
import { CTABand } from '../components/sections/CTABand';
import { SEO, ORGANIZATION_SCHEMA, WEB_SITE_SCHEMA } from '../components/seo/SEO';
import { QuickAnswerCard } from '../components/sections/QuickAnswerCard';
import { buildBreadcrumbSchema } from '../components/sections/Breadcrumb';

const BREADCRUMB = [{ label: 'Industries' }];
const INDUSTRIES = [
{
  id: 'bfsi',
  label: 'BFSI',
  headline: 'Modern banking and insurance, without the legacy drag',
  description:
  'We help banks, insurers, and financial services firms move core HR, finance, and customer-facing platforms to Oracle Cloud while staying audit-ready and regulator-aligned across every region we operate in.',
  challenges: [
  'Regulatory pressure across RBI, SAMA, APRA, and FCA in parallel',
  'Legacy core banking and policy admin platforms slowing innovation',
  'Customer experience expectations rising faster than internal systems',
  'AI and data governance demands across risk, fraud, and compliance'],

  image:
  'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=1400&q=80',
  href: '/industries/'
},
{
  id: 'manufacturing',
  label: 'Manufacturing',
  headline: 'Connect the shop floor to the boardroom',
  description:
  'From discrete to process manufacturing, we connect Oracle ERP and HCM with operations data so finance, supply chain, and people decisions all run off the same source of truth.',
  challenges: [
  'Disconnected ERP, MES, and plant maintenance systems',
  'Supply chain shocks demanding faster planning cycles',
  'Skilled-labour shortages and rapid workforce shifts',
  'Sustainability and ESG reporting expectations from buyers'],

  image:
  'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1400&q=80',
  href: '/industries/'
},
{
  id: 'travel',
  label: 'Travel & Hospitality',
  headline: 'Run lean while scaling guest experience',
  description:
  'Airlines, hotel chains, and travel platforms use MPC to consolidate HR, finance, and operations on Oracle Cloud — so they can flex up and down with demand without breaking margins.',
  challenges: [
  'High-volume seasonal hiring and shift-based workforces',
  'Multi-property, multi-currency consolidation pain',
  'Pressure to personalise guest experience at scale',
  'Rising distribution costs and channel complexity'],

  image:
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80',
  href: '/industries/'
},
{
  id: 'real-estate',
  label: 'Real Estate',
  headline: 'Portfolio finance and people, in one cockpit',
  description:
  'Developers, REITs, and facility operators trust MPC to unify project finance, leasing, FM, and HR across complex portfolios — with the reporting agility their boards expect.',
  challenges: [
  'Project, property, and corporate books on different systems',
  'Complex revenue recognition across multi-year projects',
  'Workforce spanning HQ, on-site, and contracted staff',
  'Investor and lender reporting expectations rising every cycle'],

  image:
  'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1400&q=80',
  href: '/industries/'
},
{
  id: 'energy',
  label: 'Energy & Utilities',
  headline: 'Modernise without disrupting the grid',
  description:
  'We help energy producers, utilities, and EPCs modernise on Oracle Cloud with the safety, asset, and regulatory rigour the sector demands — across upstream, downstream, and renewables.',
  challenges: [
  'Aging workforces and critical skills transfer',
  'Asset-heavy operations needing real-time visibility',
  'Energy transition and ESG reshaping the cost base',
  'Cyber and OT/IT convergence raising security stakes'],

  image:
  'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1400&q=80',
  href: '/industries/'
},
{
  id: 'telecom',
  label: 'Telecom',
  headline: 'B/OSS-aware Oracle Cloud, done right',
  description:
  'Telcos partner with MPC for HR, finance, and customer-platform modernisation — with deep understanding of how Oracle Cloud sits alongside B/OSS, billing, and network systems.',
  challenges: [
  'High-volume frontline workforce churn and reskilling',
  'Revenue assurance across complex product portfolios',
  '5G and edge investments competing with legacy maintenance',
  'AI-driven customer service redefining cost-to-serve'],

  image:
  'https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&w=1400&q=80',
  href: '/industries/'
},
{
  id: 'public-sector',
  label: 'Public Sector',
  headline: 'Citizen-grade reliability, modern delivery',
  description:
  'Government bodies and PSUs work with MPC to modernise HR and finance on Oracle Cloud while staying inside procurement, security, and accessibility frameworks specific to each region.',
  challenges: [
  'Procurement and sovereignty constraints on cloud adoption',
  'Workforces spanning permanent, contractual, and seasonal staff',
  'Citizen experience expectations rising alongside private sector',
  'Audit, transparency, and accessibility non-negotiables'],

  image:
  'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1400&q=80',
  href: '/industries/'
},
{
  id: 'professional-services',
  label: 'Professional Services',
  headline: 'Bill, staff, and grow without the spreadsheet sprawl',
  description:
  'Consultancies, law firms, and agencies turn to MPC to put project finance, utilisation, and HR on Oracle Cloud — so growth doesn’t come at the cost of margin visibility.',
  challenges: [
  'Project profitability lost between systems and spreadsheets',
  'Talent acquisition and retention in a tight specialist market',
  'Global teams needing one source of truth for utilisation',
  'Client-facing AI and automation reshaping service delivery'],

  image:
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80',
  href: '/industries/'
}];

const WHY_ITEMS = [
{
  imageSrc:
  'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80',
  title: 'Sector-specialist consultants',
  description:
  'Every engagement is led by consultants with deep sector experience — not generalists learning your industry on your time.'
},
{
  imageSrc:
  'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80',
  title: 'Pre-built industry accelerators',
  description:
  'Configurations, data models, and reports tuned for your sector — so you start three steps ahead of a blank Oracle Cloud tenant.'
},
{
  imageSrc:
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80',
  title: 'Regulator-aware delivery',
  description:
  'We build to the rules of your market — RBI, SAMA, APRA, FCA, GDPR — with audit trails and controls baked into every rollout.'
}];

const PROCESS = [
{
  number: '01',
  title: 'Discovery',
  description:
  'Understand your industry pressures, current state, and ambitions before we put a single slide together.'
},
{
  number: '02',
  title: 'Industry Fit Assessment',
  description:
  'Map Oracle Cloud capabilities to your sector’s real workflows — not generic textbook processes.'
},
{
  number: '03',
  title: 'Tailored Roadmap',
  description:
  'Prioritise the moves that protect today and unlock tomorrow, with sequencing your CFO can defend.'
},
{
  number: '04',
  title: 'Implementation & Adoption',
  description:
  'Deliver in sprints, with adoption baked in from day one — not bolted on at go-live.'
}];

const COMPARISON_ROWS = [
{
  criterion: 'Industry specialists on every project',
  values: [false, false, true]
},
{
  criterion: 'Pre-built industry accelerators',
  values: [false, true, true]
},
{
  criterion: 'Regional presence in your market',
  values: [false, true, true]
},
{
  criterion: 'Fixed-price industry packages',
  values: [false, false, true]
},
{
  criterion: 'Oracle Cloud specialisation',
  values: [true, false, true]
},
{
  criterion: 'Ongoing post-go-live support',
  values: [true, false, true]
}];

const TESTIMONIALS = [
{
  quote:
  'MPC understood our regulator before we even mentioned it. That changed the way we ran the entire programme.',
  name: 'Group CIO',
  title: 'Chief Information Officer',
  company: 'Regional Bank',
  country: 'UAE'
},
{
  quote:
  'Their manufacturing accelerators saved us months on the Oracle Cloud rollout. The numbers spoke for themselves.',
  name: 'CFO',
  title: 'Chief Financial Officer',
  company: 'Global Auto Components Leader',
  country: 'India'
}];

const FAQS = [
{
  q: 'How deep is MPC’s industry expertise?',
  a: 'Every industry practice is led by consultants with 10–25 years of direct sector experience, supported by reusable accelerators we’ve refined across 87+ engagements.'
},
{
  q: 'Do you have references in my industry?',
  a: 'Yes. We can share relevant case studies under NDA across BFSI, manufacturing, travel, real estate, energy, telecom, public sector, and professional services.'
},
{
  q: 'Can you work alongside our existing systems integrator?',
  a: 'Absolutely. We frequently work as the Oracle Cloud specialist alongside a primary SI, focusing on HCM, ERP, Java, or DevOps where our depth makes a difference.'
},
{
  q: 'How do you handle regulatory differences across regions?',
  a: 'Our delivery teams operate inside the regulatory frameworks of each region we serve — India, UAE, Singapore, Australia, and the UK — and configure Oracle Cloud accordingly.'
},
{
  q: 'What’s the smallest engagement you take on?',
  a: 'We size to the problem. Many engagements start as a focused industry assessment or HCaaS health check before expanding into a full implementation.'
}];

export function Industries() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Industry Solutions | MPC Cloud Consulting"
        description="Oracle Cloud and AI transformation tuned for 8 industries — BFSI, Manufacturing, Travel, Real Estate, Energy, Telecom, Public Sector, and Professional Services."
        canonicalPath="/industries/"
        schema={[
          ORGANIZATION_SCHEMA,
          WEB_SITE_SCHEMA,
          buildBreadcrumbSchema(BREADCRUMB),
          buildFAQSchema(FAQS)
        ]}
      />
      
      <StickyNav />

      <ServiceHero
        eyebrow="Industries"
        headline="Industry-tuned Oracle Cloud and AI solutions"
        subhead="MPC builds for sectors, not stereotypes. Our practice leads, accelerators, and delivery playbooks are tuned for the eight industries we know deeply — so your transformation starts informed."
        primaryCtaText="Talk to an industry lead"
        primaryCtaTo="/contact/"
        secondaryCtaText="See all services"
        secondaryCtaTo="/services/"
        imageSrc="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=1400&q=80"
        imageAlt="Cross-industry team collaborating"
        breadcrumb={[
        {
          label: 'Industries'
        }]
        } />

      <QuickAnswerCard
        question="Which industries does MPC serve?"
        answer="MPC delivers Oracle Cloud and AI solutions for BFSI, manufacturing, travel and hospitality, real estate, energy and utilities, telecommunications, public sector, and professional services — with industry-tuned accelerators and delivery playbooks."
      />

      <StatCalloutGrid
        stats={[
        {
          number: '8',
          label: 'Industries served'
        },
        {
          number: '700+',
          label: 'Specialists'
        },
        {
          number: '87+',
          label: 'Engagements delivered'
        },
        {
          number: '4',
          label: 'Regions, one team'
        }]
        } />
      

      <IndustryTabSwitcher
        eyebrow="Pick your sector"
        title="Where MPC goes deep"
        industries={INDUSTRIES} />
      

      <ContentGrid3Col
        sectionTitle="Why MPC for industry transformation"
        items={WHY_ITEMS} />
      

      <ProcessSteps
        eyebrow="How we engage"
        title="A delivery model built around your sector"
        steps={PROCESS}
        variant="light" />
      

      <ComparisonTable
        eyebrow="How we compare"
        title="MPC vs. the alternatives in your industry"
        headers={[
        'Capability',
        'Generic Consultancies',
        'Big Four',
        'MPC Industry Practice']
        }
        rows={COMPARISON_ROWS}
        highlightIndex={3} />
      

      <StatOverlayCaseStudy
        eyebrow="Featured Case Study"
        tag="Manufacturing"
        headline="38% faster month-end close for a global auto components leader"
        description="A unified Oracle Cloud ERP and HCM rollout across 14 plants — designed around the realities of multi-entity manufacturing, with industry-specific reporting from day one."
        metadata="14 plants · 4 countries · 9 months"
        imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80"
        imageAlt="Manufacturing operations dashboard"
        stat="38%"
        statLabel="Faster month-end close"
        statContext="Closing the books dropped from 11 days to under 7."
        ctaText="Read case study"
        ctaTo="/resources/case-studies/" />
      

      <TestimonialGrid
        eyebrow="In their words"
        title="What industry leaders say about working with MPC"
        items={TESTIMONIALS}
        variant="light" />
      

      <FAQAccordion
        eyebrow="FAQs"
        title="Industry expertise, answered"
        items={FAQS}
        layout="split"
        imageSrc="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80"
        imageAlt="MPC team discussing industry strategy" />
      

      <CTABand
        title="Find your industry playbook"
        body="Talk to a sector lead who understands the rules of your market — and the levers Oracle Cloud gives you to win in it."
        ctaText="Talk to an industry lead"
        ctaTo="/contact/"
        secondaryCtaText="See all services"
        secondaryCtaTo="/services/" />
      

      <FooterDark />
    </div>);

}