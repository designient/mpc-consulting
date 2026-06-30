import React from 'react';
import { StickyNav } from '../../components/layout/StickyNav';
import { FooterDark } from '../../components/sections/FooterDark';
import { SEO, ORGANIZATION_SCHEMA } from '../../components/seo/SEO';
import { ServiceHero } from '../../components/sections/heroes/ServiceHero';
import { ServiceWhatIs } from '../../components/sections/ServiceWhatIs';
import { TableOfContents } from '../../components/sections/TableOfContents';
import { ServiceCapabilities } from '../../components/sections/ServiceCapabilities';
import { ProcessSteps } from '../../components/sections/ProcessSteps';
import { ComparisonTable } from '../../components/sections/ComparisonTable';
import {
  FAQAccordion,
  buildFAQSchema,
} from '../../components/sections/FAQAccordion';
import { CTABand } from '../../components/sections/CTABand';
import { buildBreadcrumbSchema } from '../../components/sections/Breadcrumb';
import {
  SOLUTION_ERP,
  SOLUTION_EPM,
  SOLUTION_HCM,
  SOLUTION_SCM,
  SOLUTION_TECH,
  SOLUTION_UNIFIER,
  SERVICE_ORACLE,
  SERVICES_INDEX,
} from '../../data/paths';

const TOC = [
  { label: 'Overview', hash: 'overview' },
  { label: 'Process', hash: 'process' },
  { label: 'Comparison', hash: 'comparison' },
  { label: 'FAQ', hash: 'faq' },
];

const OVERVIEW_IMAGE =
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop';

const BREADCRUMB = [
  { label: 'Services', to: SERVICES_INDEX },
  { label: 'Oracle (Fusion & EBS)' },
];

const CAPABILITIES = [
  {
    title: 'Oracle HCM Cloud',
    body: 'Core HR, Talent Management, Global Payroll, Workforce Management, and Oracle ME — implemented and supported by certified HCM specialists.',
    to: SOLUTION_HCM,
  },
  {
    title: 'Oracle Fusion ERP',
    body: 'Cloud-native Financials, Projects, Procurement, Risk & Compliance, and Treasury — designed for modern enterprise operations.',
    to: SOLUTION_ERP,
  },
  {
    title: 'Oracle SCM',
    body: 'Supply chain planning, procurement, logistics, and inventory management on Oracle Fusion and EBS — from demand planning to fulfilment.',
    to: SOLUTION_SCM,
  },
  {
    title: 'Oracle EPM',
    body: 'Enterprise Performance Management — budgeting, forecasting, and financial consolidation on Oracle EPM Cloud.',
    to: SOLUTION_EPM,
  },
  {
    title: 'Oracle Unifier',
    body: 'Project lifecycle management on Oracle Unifier — capital projects, document control, and portfolio delivery.',
    to: SOLUTION_UNIFIER,
  },
  {
    title: 'Tech',
    body: 'Post-go-live support, health checks, upgrades, and ongoing Oracle optimisation — so you stay current and compliant.',
    to: SOLUTION_TECH,
  },
];

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Assess',
    description:
      'Current Oracle estate audit, process pain-point mapping, and Fusion / EBS suitability analysis.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Future-state architecture, integration design, and configuration blueprint aligned to Oracle Cloud capabilities.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Iterative configuration and development by Oracle-certified consultants with documented design decisions.',
  },
  {
    number: '04',
    title: 'Validate',
    description:
      'SIT, UAT, parallel runs, and audit trail verification — ensuring production readiness before go-live.',
  },
  {
    number: '05',
    title: 'Go-Live',
    description:
      'Phased cutover, command-centre support, and stabilisation of critical business cycles.',
  },
  {
    number: '06',
    title: 'Optimise',
    description:
      'Quarterly release readiness, continuous improvement, and managed support transition.',
  },
];

const COMPARISON_ROWS = [
  {
    criterion: 'Oracle depth',
    values: [
      'Generalist consultants learning on the job',
      '350+ years combined Oracle expertise across Fusion and EBS',
    ],
  },
  {
    criterion: 'Fusion + EBS coverage',
    values: [
      'Fusion-only or EBS-only specialists',
      'Unified practice spanning Fusion Cloud, EBS, and migration',
    ],
  },
  {
    criterion: 'Regional compliance',
    values: [
      'Single-region templates',
      'India, UAE, Singapore, Australia, and UK with local compliance',
    ],
  },
  {
    criterion: 'AI integration',
    values: [
      'Generic AI plug-ins',
      'AI CoE — purpose-built agents for Oracle workflows',
    ],
  },
  {
    criterion: 'Post go-live support',
    values: [
      'Hand-over and gone',
      'Managed service from the team that built it',
    ],
  },
];

const FAQS = [
  {
    q: 'What is the difference between Oracle Fusion and Oracle EBS?',
    a: 'Oracle Fusion Cloud is Oracle\'s modern SaaS platform — cloud-native, continuously updated, and designed for new implementations. Oracle EBS (E-Business Suite) is the established on-premise ERP used by thousands of enterprises. MPC supports both, including structured EBS→Fusion migration programmes.',
  },
  {
    q: 'Should I start with HCM or ERP?',
    a: 'It depends on your priority. HR-led transformations typically start with HCM (Core HR, Talent, Payroll). Finance-led programmes start with ERP (Financials, Projects, Procurement). Many clients run both in parallel — we can advise on sequencing during a fit conversation.',
  },
  {
    q: 'Does MPC support multi-region Oracle deployments?',
    a: 'Yes. We have offices and delivery teams across India, UAE, Singapore, Australia, and the UK — with experience configuring Oracle for local payroll, tax, and regulatory requirements in each region.',
  },
  {
    q: 'Can MPC migrate us from EBS to Fusion?',
    a: 'Yes. We\'ve delivered structured EBS→Fusion migration programmes with documented data migration, process redesign, and minimal disruption to financial close and HR operations.',
  },
  {
    q: 'How do HCM and ERP engagements work together?',
    a: 'HCM and ERP share master data, reporting, and integration architecture. Our unified Oracle practice ensures both practices align on chart of accounts, organisational structure, and integration design — so your back office runs as one system.',
  },
];

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Oracle Fusion & EBS Consulting',
  provider: {
    '@type': 'Organization',
    name: 'MPC Cloud Consulting',
  },
  areaServed: ['India', 'UAE', 'Singapore', 'Australia', 'United Kingdom'],
  description:
    'End-to-end Oracle Fusion and EBS consulting — HCM, ERP, SCM, Unifier, EPM, and technology services across Fusion and EBS.',
  url: `https://www.mpccloudconsulting.com${SERVICE_ORACLE}`,
};

export function OracleFusionEBS() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="Oracle Fusion & EBS Consulting | HCM, ERP & Cloud Services | MPC"
        description="MPC delivers end-to-end Oracle Fusion & EBS — HCM, ERP, SCM, Unifier, EPM, and cloud services. 65+ clients across India, UAE, Singapore, UK & Australia."
        canonicalPath={SERVICE_ORACLE}
        schema={[
          ORGANIZATION_SCHEMA,
          SERVICE_SCHEMA,
          buildBreadcrumbSchema(BREADCRUMB),
          buildFAQSchema(FAQS),
        ]}
      />

      <StickyNav />
      <main className="flex-grow w-full">
        <ServiceHero
          eyebrow="Oracle Cloud · Fusion & EBS"
          headline="One Oracle Partner for"
          headlineAccent="Fusion & EBS"
          subhead="HCM, ERP, SCM, Unifier, EPM, and technology services across Oracle Fusion Cloud and E-Business Suite — delivered by specialists who know the platform at depth."
          primaryCtaText="Talk to Our Oracle Team"
          primaryCtaTo="/contact/"
          secondaryCtaText="Explore Overview"
          secondaryCtaTo="#overview"
          imageSrc="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop"
          imageAlt="Enterprise team reviewing Oracle Cloud strategy"
          breadcrumb={BREADCRUMB}
        />

        <ServiceWhatIs
          title="What is MPC's Oracle (Fusion & EBS) practice?"
          body="MPC's Oracle practice is an end-to-end capability spanning Oracle Fusion Cloud and E-Business Suite. With HCM and ERP as our two primary pillars, we deliver implementation, migration, extension, and managed service across the full Oracle portfolio — from Core HR and Global Payroll to Financials, Projects, and EPM."
          imageSrc={OVERVIEW_IMAGE}
          imageAlt="Enterprise team reviewing Oracle Cloud strategy"
        />

        <TableOfContents items={TOC} variant="inline" />

        <ServiceCapabilities
          title="Full Oracle portfolio coverage"
          intro="From HCM and ERP to APEX, OIC, EPM, and Unifier — one partner for your entire Oracle estate."
          capabilities={CAPABILITIES}
        />

        <div id="process" className="scroll-mt-[140px]">
          <ProcessSteps
            eyebrow="Delivery"
            title="Our Oracle delivery process"
            intro="A six-stage Oracle methodology proven across Fusion implementations, EBS upgrades, and EBS→Fusion migrations."
            steps={PROCESS_STEPS}
            variant="light"
            centerHeader
            accentStepTitles
          />
        </div>

        <ComparisonTable
          id="comparison"
          className="scroll-mt-[140px]"
          eyebrow="Comparison"
          title="Generic SI vs. MPC Oracle practice"
          intro="What enterprises typically encounter when comparing generic system integrators against MPC's dedicated Oracle practice."
          headers={['Criterion', 'Generic SI', 'With MPC']}
          highlightIndex={2}
          rows={COMPARISON_ROWS}
          bg="white"
          centerHeader
        />

        <div id="faq" className="scroll-mt-[140px]">
          <FAQAccordion
            eyebrow="FAQs"
            title="Oracle (Fusion & EBS) — Frequently Asked Questions"
            items={FAQS}
            layout="full"
            bg="white"
          />
        </div>

        <CTABand
          title="Start your Oracle"
          titleAccent="Transformation"
          body="Tell us about your current Oracle setup and your goals. We'll show you exactly where our Fusion & EBS practice can help."
          ctaText="Get in Touch"
          ctaTo="/contact/"
          variant="split"
        />
      </main>
      <FooterDark />
    </div>
  );
}
