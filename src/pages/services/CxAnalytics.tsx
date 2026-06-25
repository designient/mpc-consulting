import React from 'react';
import { BarChart3, Users, Settings } from 'lucide-react';
import { StickyNav } from '../../components/layout/StickyNav';
import { FooterDark } from '../../components/sections/FooterDark';
import { SEO, ORGANIZATION_SCHEMA } from '../../components/seo/SEO';
import { ServiceHero } from '../../components/sections/heroes/ServiceHero';
import { ServiceWhatIs } from '../../components/sections/ServiceWhatIs';
import { TableOfContents } from '../../components/sections/TableOfContents';
import { SolutionColumns } from '../../components/sections/SolutionColumns';
import { LifecyclePath } from '../../components/sections/LifecyclePath';
import { Heading } from '../../components/ui/Heading';
import { ComparisonTable } from '../../components/sections/ComparisonTable';
import {
  FAQAccordion,
  buildFAQSchema,
} from '../../components/sections/FAQAccordion';
import { CTABand } from '../../components/sections/CTABand';
import { buildBreadcrumbSchema } from '../../components/sections/Breadcrumb';

const TOC = [
  { label: 'Overview', hash: 'overview' },
  { label: 'Solutions', hash: 'solutions' },
  { label: 'Services', hash: 'services' },
  { label: 'Comparison', hash: 'comparison' },
  { label: 'FAQ', hash: 'faq' },
];

const OVERVIEW_IMAGE =
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop';

const BREADCRUMB = [
  { label: 'Services', to: '/services/' },
  { label: 'CX & Analytics' },
];

const SOLUTIONS = [
  {
    icon: BarChart3,
    title: 'Power BI',
    imageSrc:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Power BI dashboards and business analytics',
    items: [
      'Power BI Consulting',
      'Data Integration & Modelling',
      'Dashboard Development & Self-Service BI',
      'Licensing & Version recommendation',
      'Advanced Analytics',
      'Migration to Power BI',
    ],
  },
  {
    icon: Users,
    title: 'Salesforce',
    imageSrc:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Salesforce CRM and customer engagement',
    items: [
      'End-to-End Implementation of Salesforce Clouds',
      'B2C',
      'B2B',
      'OMS, Sales, Service, Marketing and other custom clouds',
    ],
  },
  {
    icon: Settings,
    title: 'ServiceNow',
    imageSrc:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'ServiceNow IT service management platform',
    items: [
      'HRSD (Human Resources Service Delivery)',
      'ITAM (IT Asset Management)',
      'ITOM (IT Operations Management)',
      'ITSM (IT Service Management)',
    ],
  },
];

const SERVICE_LIFECYCLE = [
  'Consulting',
  'Implementation & Global Rollouts',
  'Upgrades & Instance Migration',
  'Managed Service Support',
  'Application Development & Integration',
];

const COMPARISON_ROWS = [
  {
    criterion: 'Platform breadth',
    values: [
      'Single-vendor specialist',
      'Power BI, Salesforce, and ServiceNow under one partner',
    ],
  },
  {
    criterion: 'Global rollout experience',
    values: [
      'Regional deployments only',
      'Multi-region rollouts across India, UAE, Singapore, UK & Australia',
    ],
  },
  {
    criterion: 'Analytics depth',
    values: [
      'Basic reporting',
      'Advanced analytics, data modelling, and self-service BI',
    ],
  },
  {
    criterion: 'Managed support',
    values: [
      'Implementation-only',
      'Ongoing managed service support and instance management',
    ],
  },
  {
    criterion: 'Oracle back-office integration',
    values: [
      'Standalone CX stack',
      'Integrated with Oracle ERP and HCM where needed',
    ],
  },
];

const FAQS = [
  {
    q: 'Which CX and analytics platforms does MPC implement?',
    a: 'We deliver end-to-end implementations across Power BI, Salesforce (B2C, B2B, Sales, Service, Marketing), and ServiceNow (HRSD, ITAM, ITOM, ITSM).',
  },
  {
    q: 'Can MPC handle global Salesforce rollouts?',
    a: 'Yes. We have experience with multi-region Salesforce implementations and rollouts across our operating markets — with localisation, integration, and change management built in.',
  },
  {
    q: 'Do you provide ongoing managed support for Power BI and ServiceNow?',
    a: 'Yes. Managed service support, upgrades, and instance migration are core parts of our CX & Analytics service lifecycle — not just initial implementation.',
  },
  {
    q: 'Can CX platforms integrate with our Oracle back office?',
    a: 'Yes. We design integrations between Salesforce, ServiceNow, and Power BI and your Oracle ERP/HCM environment — so customer and employee data flows correctly across systems.',
  },
];

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'CX & Analytics Consulting',
  provider: {
    '@type': 'Organization',
    name: 'MPC Cloud Consulting',
  },
  areaServed: ['India', 'UAE', 'Singapore', 'Australia', 'United Kingdom'],
  description:
    'Power BI, Salesforce, and ServiceNow for customer experience, analytics, and enterprise service management.',
  url: 'https://www.mpccloudconsulting.com/services/cx-analytics/',
};

export function CxAnalytics() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="CX & Analytics | Power BI, Salesforce & ServiceNow | MPC"
        description="MPC delivers Power BI, Salesforce, and ServiceNow — CX, analytics, and service management with global rollout and managed support."
        canonicalPath="/services/cx-analytics/"
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
          eyebrow="CX & Analytics"
          headline="Customer Experience &"
          headlineAccent="Enterprise Insight"
          subhead="Power BI, Salesforce, and ServiceNow for customer experience and insight — implemented, rolled out globally, and supported long after go-live."
          primaryCtaText="Talk to Our CX Team"
          primaryCtaTo="/contact/"
          secondaryCtaText="Explore Solutions"
          secondaryCtaTo="#solutions"
          imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop"
          imageAlt="Analytics dashboard and customer experience data"
          breadcrumb={BREADCRUMB}
        />

        <ServiceWhatIs
          id="overview"
          title="What is MPC's CX & Analytics practice?"
          body="MPC's CX & Analytics practice helps enterprises turn data into decisions and deliver exceptional customer and employee experiences. We implement and support Power BI for analytics, Salesforce for customer engagement, and ServiceNow for IT and HR service delivery — with global rollout capability and ongoing managed support."
          imageSrc={OVERVIEW_IMAGE}
          imageAlt="Analytics dashboard and customer experience data"
        />

        <TableOfContents items={TOC} variant="inline" />

        <SolutionColumns id="solutions" columns={SOLUTIONS} />

        <section
          id="services"
          className="scroll-mt-[140px] w-full bg-white px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-10 max-w-[800px] mx-auto">
              <p className="section-eyebrow mb-3">Services</p>
              <Heading level={2}>Full CX & analytics lifecycle</Heading>
              <p className="font-body text-[17px] leading-[1.7] text-text-primary opacity-80 mt-4">
                From strategy and implementation through global rollouts and
                managed support.
              </p>
            </div>
            <LifecyclePath stages={SERVICE_LIFECYCLE} />
          </div>
        </section>

        <ComparisonTable
          id="comparison"
          className="scroll-mt-[140px]"
          eyebrow="Comparison"
          title="Generic CX implementer vs. MPC"
          intro="What enterprises typically encounter when comparing generic CX vendors against MPC's multi-platform practice."
          headers={['Criterion', 'Generic CX implementer', 'With MPC']}
          highlightIndex={2}
          rows={COMPARISON_ROWS}
          bg="soft"
          centerHeader
        />

        <div id="faq" className="scroll-mt-[140px]">
          <FAQAccordion
            eyebrow="FAQs"
            title="CX & Analytics — Frequently Asked Questions"
            items={FAQS}
            layout="full"
            bg="white"
          />
        </div>

        <CTABand
          title="Transform your"
          titleAccent="Customer Experience"
          body="Tell us about your CX and analytics goals. We'll recommend the right platform and rollout approach."
          ctaText="Talk to Our CX Team"
          ctaTo="/contact/"
          variant="split"
        />
      </main>
      <FooterDark />
    </div>
  );
}
