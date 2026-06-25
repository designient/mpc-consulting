import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Database, ArrowRight } from 'lucide-react';
import { StickyNav } from '../../components/layout/StickyNav';
import { FooterDark } from '../../components/sections/FooterDark';
import { SEO, ORGANIZATION_SCHEMA } from '../../components/seo/SEO';
import { ServiceHero } from '../../components/sections/heroes/ServiceHero';
import { ServiceWhatIs } from '../../components/sections/ServiceWhatIs';
import { TableOfContents } from '../../components/sections/TableOfContents';
import { Heading } from '../../components/ui/Heading';
import { Card } from '../../components/ui/Card';
import { ProcessSteps } from '../../components/sections/ProcessSteps';
import { ComparisonTable } from '../../components/sections/ComparisonTable';
import {
  FAQAccordion,
  buildFAQSchema,
} from '../../components/sections/FAQAccordion';
import { CTABand } from '../../components/sections/CTABand';
import { buildBreadcrumbSchema } from '../../components/sections/Breadcrumb';

const TOC = [
  { label: 'Overview', hash: 'overview' },
  { label: 'Oracle Practices', hash: 'practices' },
  { label: 'Capabilities', hash: 'capabilities' },
  { label: 'Process', hash: 'process' },
  { label: 'Comparison', hash: 'comparison' },
  { label: 'FAQ', hash: 'faq' },
];

const OVERVIEW_IMAGE =
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop';

const BREADCRUMB = [
  { label: 'Services', to: '/services/' },
  { label: 'Oracle (Fusion & EBS)' },
];

const TECH_CHIPS = [
  'Oracle Fusion',
  'Oracle EBS',
  'Oracle HCM Cloud',
  'Oracle APEX',
  'OIC',
  'OCI',
  'Oracle Redwood',
  'Oracle EPM',
  'Oracle Unifier',
  'Oracle ME',
];

const PRACTICES = [
  {
    icon: Users,
    title: 'HCM',
    description:
      'Oracle HCM Cloud — HR, Talent, Payroll, and Workforce Management end-to-end.',
    to: '/services/hcm/',
  },
  {
    icon: Database,
    title: 'ERP (Oracle Cloud)',
    description:
      'Oracle Fusion & EBS — Financials, Projects, Procurement, Risk, and Compliance.',
    to: '/services/erp-oracle-cloud/',
  },
];

const CAPABILITIES = [
  {
    title: 'Oracle HCM Cloud',
    body: 'Core HR, Talent Management, Global Payroll, Workforce Management, and Oracle ME — implemented and supported by certified HCM specialists.',
  },
  {
    title: 'Oracle Fusion ERP',
    body: 'Cloud-native Financials, Projects, Procurement, Risk & Compliance, and Treasury — designed for modern enterprise operations.',
  },
  {
    title: 'Oracle EBS',
    body: 'E-Business Suite implementations, customisations, extensions, and structured EBS→Fusion migration programmes.',
  },
  {
    title: 'Oracle APEX & PaaS',
    body: 'Custom business applications on Oracle APEX and Platform as a Service — extending Oracle capability without breaking it.',
  },
  {
    title: 'Oracle EPM & Unifier',
    body: 'Enterprise Performance Management for budgeting and consolidation, plus Unifier for project lifecycle management.',
  },
  {
    title: 'Managed Service & Support',
    body: 'Post-go-live support, health checks, upgrades, and ongoing Oracle optimisation — so you stay current and compliant.',
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
  url: 'https://www.mpccloudconsulting.com/services/oracle-fusion-ebs/',
};

export function OracleFusionEBS() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="Oracle Fusion & EBS Consulting | HCM, ERP & Cloud Services | MPC"
        description="MPC delivers end-to-end Oracle Fusion & EBS — HCM, ERP, SCM, Unifier, EPM, and cloud services. 65+ clients across India, UAE, Singapore, UK & Australia."
        canonicalPath="/services/oracle-fusion-ebs/"
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
          secondaryCtaText="Explore Our Practices"
          secondaryCtaTo="#practices"
          imageSrc="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop"
          imageAlt="Enterprise team reviewing Oracle Cloud strategy"
          breadcrumb={BREADCRUMB}
        />

        <ServiceWhatIs
          id="overview"
          title="What is MPC's Oracle (Fusion & EBS) practice?"
          body="MPC's Oracle practice is an end-to-end capability spanning Oracle Fusion Cloud and E-Business Suite. With HCM and ERP as our two primary pillars, we deliver implementation, migration, extension, and managed service across the full Oracle portfolio — from Core HR and Global Payroll to Financials, Projects, and EPM."
          imageSrc={OVERVIEW_IMAGE}
          imageAlt="Enterprise team reviewing Oracle Cloud strategy"
        />

        <TableOfContents items={TOC} variant="inline" />

        <section
          id="practices"
          className="scroll-mt-[140px] w-full bg-white px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="text-center mb-10 max-w-[800px] mx-auto">
            <p className="section-eyebrow mb-3">Oracle Practices</p>
            <Heading level={2}>Explore our Oracle services</Heading>
          </div>
          <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {PRACTICES.map((item, i) => {
              const Icon = item.icon;
              return (
                <Link
                  key={i}
                  to={item.to}
                  className="group flex flex-col rounded-card shadow-subtle bg-white border border-transparent hover:border-divider transition-all p-6 md:p-7">
                  <div className="w-11 h-11 rounded-md bg-stat/10 flex items-center justify-center text-stat mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-semibold text-[20px] md:text-[22px] leading-tight tracking-tight text-text-primary mb-3 group-hover:text-divider transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-body text-[15px] leading-[1.6] text-text-primary opacity-75 mb-6 flex-grow">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-2 font-body text-[14px] font-semibold text-cta group-hover:text-accent transition-colors mt-auto">
                    Explore{' '}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        <section
          id="capabilities"
          className="scroll-mt-[140px] w-full bg-bg-light px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="text-center mb-10 max-w-[800px] mx-auto">
            <p className="section-eyebrow mb-3">Capabilities</p>
            <Heading level={2}>Full Oracle portfolio coverage</Heading>
            <p className="font-body text-[17px] leading-[1.7] text-text-primary opacity-80 mt-4">
              From HCM and ERP to APEX, OIC, EPM, and Unifier — one partner for
              your entire Oracle estate.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-10">
            {CAPABILITIES.map((cap, i) => (
              <Card key={i} bg="white">
                <div className="w-10 h-1 bg-divider mb-5" />
                <Heading level={3} className="mb-3">
                  {cap.title}
                </Heading>
                <p className="font-body text-[16px] leading-[1.7] text-text-primary opacity-80">
                  {cap.body}
                </p>
              </Card>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 justify-center max-w-[900px] mx-auto">
            {TECH_CHIPS.map((c) => (
              <span
                key={c}
                className="px-3.5 py-1.5 rounded-full border border-divider/30 bg-white font-body text-[13px] font-medium">
                {c}
              </span>
            ))}
          </div>
        </section>

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
