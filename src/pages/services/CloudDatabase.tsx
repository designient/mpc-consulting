import React from 'react';
import { Code2, Database, Cloud } from 'lucide-react';
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
  'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop';

const BREADCRUMB = [
  { label: 'Services', to: '/services/' },
  { label: 'Cloud & Database' },
];

const SOLUTIONS = [
  {
    icon: Code2,
    title: 'Application Development',
    imageSrc:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Software development and application engineering',
    items: [
      'Mobile App Development (Android & iOS)',
      'Web App Development (React.js, Angular)',
      'Backend Development (Node.js, .NET Core, Java Spring Boot)',
      'Full Stack Development',
      'API & Microservices Development (REST, GraphQL)',
      'Database Design & Optimization (PostgreSQL, MySQL)',
      'UI/UX Design & Prototyping (Figma)',
      'Legacy App Modernization',
      'Cross-Platform App Development (Flutter, React Native)',
    ],
  },
  {
    icon: Database,
    title: 'Database Migration',
    imageSrc:
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Database servers and data migration infrastructure',
    items: [
      'Data and AI Services',
      'Database — Oracle, SQL Server, MySQL, PostgreSQL, NoSQL, MongoDB',
      'Database upgrades',
      'Database migrations',
      'Data engineering — Data Lakes, DWH',
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud Management',
    imageSrc:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Cloud infrastructure and multi-cloud management',
    items: [
      'OCI, AWS, Azure, GCP',
      'Azure: App Services, DevOps, Security Center',
      'AWS: EC2, Lambda, S3, RDS, CloudFormation, CloudWatch',
      'Google Cloud: App Engine, BigQuery, Cloud Functions',
      'Multi-Cloud Strategy & Migration',
      'Backup & Disaster Recovery Solutions',
      'DevOps: CI/CD Pipelines, GitLab, Jenkins, GitHub Actions, Docker & Kubernetes',
    ],
  },
];

const SERVICE_LIFECYCLE = [
  'Consulting',
  'Upgrades & Migration',
  'Managed Services',
  'Managed Service Support',
  'Integrations & APIs',
  'Environment Hosting',
  'DevOps',
];

const COMPARISON_ROWS = [
  {
    criterion: 'Multi-cloud breadth',
    values: [
      'Single-cloud specialist',
      'OCI, AWS, Azure, and GCP with unified operations',
    ],
  },
  {
    criterion: 'Database expertise',
    values: [
      'Lift-and-shift only',
      'Oracle, SQL Server, PostgreSQL, NoSQL — upgrades and migrations',
    ],
  },
  {
    criterion: 'DevOps integration',
    values: [
      'Separate dev and ops teams',
      'CI/CD, containers, and IaC woven into delivery',
    ],
  },
  {
    criterion: 'Oracle ecosystem alignment',
    values: [
      'Cloud-agnostic generalist',
      'Oracle-aware cloud and database practice',
    ],
  },
  {
    criterion: 'Managed operations',
    values: [
      'Project hand-over',
      'Managed services, hosting, and ongoing support',
    ],
  },
];

const FAQS = [
  {
    q: 'Which cloud platforms does MPC support?',
    a: 'We design, migrate, and manage workloads across OCI, AWS, Azure, and GCP — including multi-cloud strategies with consistent infrastructure as code and observability.',
  },
  {
    q: 'Can MPC migrate our databases to the cloud?',
    a: 'Yes. We handle Oracle, SQL Server, MySQL, PostgreSQL, and NoSQL databases — including upgrades, schema migrations, and data lake / data warehouse engineering.',
  },
  {
    q: 'Do you build custom applications alongside cloud work?',
    a: 'Yes. Our application development practice covers mobile, web, full-stack, and API/microservices development — often delivered alongside cloud and database engagements.',
  },
  {
    q: 'How does DevOps fit into Cloud & Database?',
    a: 'DevOps is embedded in our cloud management offering — CI/CD pipelines, container orchestration, and automated delivery are part of how we run and maintain cloud environments.',
  },
];

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Cloud & Database Services',
  provider: {
    '@type': 'Organization',
    name: 'MPC Cloud Consulting',
  },
  areaServed: ['India', 'UAE', 'Singapore', 'Australia', 'United Kingdom'],
  description:
    'Application development, database migration, and cloud management at scale — OCI, AWS, Azure, GCP.',
  url: 'https://www.mpccloudconsulting.com/services/cloud-database/',
};

export function CloudDatabase() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="Cloud & Database Services | App Dev, Migration & Multi-Cloud | MPC"
        description="MPC delivers application development, database migration, and multi-cloud management — OCI, AWS, Azure, GCP. Enterprise scale across India, UAE, Singapore, UK & Australia."
        canonicalPath="/services/cloud-database/"
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
          eyebrow="Cloud & Database"
          headline="Build, Migrate & Manage"
          headlineAccent="at Enterprise Scale"
          subhead="Application development, database migration, and cloud management at scale — across OCI, AWS, Azure, and GCP."
          primaryCtaText="Talk to Our Cloud Team"
          primaryCtaTo="/contact/"
          secondaryCtaText="Explore Solutions"
          secondaryCtaTo="#solutions"
          imageSrc="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop"
          imageAlt="Modern cloud infrastructure and data centre"
          breadcrumb={BREADCRUMB}
        />

        <ServiceWhatIs
          id="overview"
          title="What is MPC's Cloud & Database practice?"
          body="MPC's Cloud & Database practice spans the full stack — from custom application development and database migration to multi-cloud management and DevOps. We help enterprises build modern applications, move data safely to the cloud, and operate infrastructure across OCI, AWS, Azure, and GCP with enterprise-grade reliability."
          imageSrc={OVERVIEW_IMAGE}
          imageAlt="Cloud infrastructure and database systems"
        />

        <TableOfContents items={TOC} variant="inline" />

        <SolutionColumns id="solutions" columns={SOLUTIONS} />

        <section
          id="services"
          className="scroll-mt-[140px] w-full bg-white px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-10 max-w-[800px] mx-auto">
              <p className="section-eyebrow mb-3">Services</p>
              <Heading level={2}>End-to-end cloud & database services</Heading>
              <p className="font-body text-[17px] leading-[1.7] text-text-primary opacity-80 mt-4">
                From initial consulting through managed operations — a complete
                service lifecycle for your cloud and data estate.
              </p>
            </div>
            <LifecyclePath stages={SERVICE_LIFECYCLE} />
          </div>
        </section>

        <ComparisonTable
          id="comparison"
          className="scroll-mt-[140px]"
          eyebrow="Comparison"
          title="Generic cloud vendor vs. MPC"
          intro="What enterprises typically encounter when comparing generic cloud vendors against MPC's integrated Cloud & Database practice."
          headers={['Criterion', 'Generic cloud vendor', 'With MPC']}
          highlightIndex={2}
          rows={COMPARISON_ROWS}
          bg="soft"
          centerHeader
        />

        <div id="faq" className="scroll-mt-[140px]">
          <FAQAccordion
            eyebrow="FAQs"
            title="Cloud & Database — Frequently Asked Questions"
            items={FAQS}
            layout="full"
            bg="white"
          />
        </div>

        <CTABand
          title="Start your cloud"
          titleAccent="Transformation"
          body="Tell us about your applications, databases, and cloud goals. We'll architect the right path."
          ctaText="Talk to Our Cloud Team"
          ctaTo="/contact/"
          variant="split"
        />
      </main>
      <FooterDark />
    </div>
  );
}
