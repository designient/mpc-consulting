import React from 'react';
import { Code2, Cloud } from 'lucide-react';
import {
  OracleSolutionLayout,
  type OracleSolutionPageConfig,
} from '../../components/layout/OracleSolutionLayout';
import {
  SERVICE_CLOUD_DT,
  SOLUTION_APP_DEV,
  SOLUTION_CLOUD_MANAGEMENT,
  SOLUTION_DB_MIGRATION,
} from '../../data/paths';

const CLOUD_PARENT = {
  label: 'Cloud & Digital Transformation',
  to: SERVICE_CLOUD_DT,
};

const CONFIG: OracleSolutionPageConfig = {
  canonicalPath: SOLUTION_DB_MIGRATION,
  breadcrumbLabel: 'Database Migration',
  parentService: CLOUD_PARENT,
  seoTitle: 'Database Migration & Data Engineering | MPC',
  seoDescription:
    'MPC migrates and modernises Oracle, SQL Server, MySQL, PostgreSQL, and NoSQL databases, plus data lakes, DWH, and AI-ready data platforms.',
  serviceType: 'Database Migration Services',
  serviceDescription:
    'Database upgrades, cloud migrations, data engineering, data lakes, and data warehouse delivery across Oracle and open-source platforms.',
  heroEyebrow: 'Cloud & Digital Transformation · Data',
  heroHeadline: 'Move data safely',
  heroHeadlineAccent: 'to the cloud',
  heroSubhead:
    'Database upgrades, migrations, and data engineering. Oracle, SQL Server, MySQL, PostgreSQL, NoSQL, data lakes, and DWH built for analytics and AI.',
  heroCtaText: 'Talk to Our Data Team',
  heroImageSrc:
    'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2400&auto=format&fit=crop',
  whatIsTitle: 'What is MPC Database Migration?',
  whatIsBody:
    'MPC\'s database migration practice moves enterprise data from legacy platforms to cloud-native and modern on-prem estates, with schema conversion, data validation, and cutover planning that protects business continuity. We work across Oracle, SQL Server, MySQL, PostgreSQL, MongoDB, and cloud data platforms.',
  whatIsImageSrc:
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
  whatIsImageAlt: 'Database and analytics infrastructure',
  toc: [
    { label: 'Overview', hash: 'overview' },
    { label: 'Capabilities', hash: 'capabilities' },
    { label: 'Platforms', hash: 'modules' },
    { label: 'Process', hash: 'process' },
    { label: 'Comparison', hash: 'comparison' },
    { label: 'FAQ', hash: 'faq' },
  ],
  overviewTitle: 'Database Migration with MPC',
  overviewParagraphs: [
    'Database migrations fail when treated as a technical lift-and-shift. MPC plans migrations around business continuity, parallel runs, reconciliation, rollback paths, and performance validation before cutover.',
    'Beyond migration, our data engineering practice builds data lakes and warehouses that feed analytics, reporting, and AI initiatives, so your data estate supports what comes next, not just what you leave behind.',
  ],
  moduleChips: [
    'Oracle',
    'SQL Server',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'NoSQL',
    'Data Lakes',
    'DWH',
    'Data & AI',
  ],
  capabilitiesTitle: 'Our Database & Data Capabilities',
  capabilities: [
    {
      title: 'Database Assessment',
      body: 'Inventory, dependency mapping, and migration complexity scoring before any data moves.',
    },
    {
      title: 'Cloud Migration',
      body: 'Oracle, SQL Server, and open-source databases migrated to OCI, AWS, Azure, or GCP.',
    },
    {
      title: 'Version Upgrades',
      body: 'In-place and parallel upgrades with regression testing and performance benchmarking.',
    },
    {
      title: 'Schema Conversion',
      body: 'Automated and manual schema translation with data type and constraint validation.',
    },
    {
      title: 'Data Engineering',
      body: 'Data lake and data warehouse design, ingestion, transformation, and governed analytics layers.',
    },
    {
      title: 'Data & AI Readiness',
      body: 'Pipelines and platforms that prepare enterprise data for analytics, ML, and AI workloads.',
    },
  ],
  modulesSectionTitle: 'Platforms we support',
  modulesSectionSubtitle:
    'Source and target platforms where MPC delivers migration and data engineering at scale.',
  modules: [
    {
      title: 'Enterprise RDBMS',
      desc: 'Oracle, SQL Server, MySQL, and PostgreSQL, upgrades, replication, and cloud migration with documented cutover and rollback procedures.',
      imageSrc:
        'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Enterprise database servers',
    },
    {
      title: 'NoSQL & Modern Data',
      desc: 'MongoDB and NoSQL platforms, schema design, sharding strategy, and migration from relational sources where document models fit better.',
      imageSrc:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Modern data platform monitoring',
    },
    {
      title: 'Data Lakes & DWH',
      desc: 'Cloud data lakes and warehouses on AWS, Azure, GCP, and OCI. ETL/ELT pipelines, governance, and analytics-ready marts.',
      imageSrc:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Data warehouse and analytics',
    },
  ],
  processTitle: 'Our migration delivery process',
  processIntro:
    'A proven six-stage methodology for database migrations, minimising downtime and data integrity risk.',
  processSteps: [
    {
      number: '01',
      title: 'Assess',
      description:
        'Source system inventory, volume analysis, dependency mapping, and migration approach selection.',
    },
    {
      number: '02',
      title: 'Design',
      description:
        'Target architecture, schema mapping, replication strategy, and cutover runbook.',
    },
    {
      number: '03',
      title: 'Migrate',
      description:
        'Initial load, incremental sync, and schema conversion with automated validation checks.',
    },
    {
      number: '04',
      title: 'Validate',
      description:
        'Row counts, checksums, performance tests, and application regression against migrated data.',
    },
    {
      number: '05',
      title: 'Cutover',
      description:
        'Controlled switchover with rollback criteria, monitoring, and command-centre support.',
    },
    {
      number: '06',
      title: 'Optimise',
      description:
        'Post-migration tuning, indexing, and transition to managed database operations.',
    },
  ],
  comparisonTitle: 'Lift-and-shift vs. MPC migration',
  comparisonIntro:
    'What enterprises typically encounter when comparing basic cloud rehosting against MPC\'s structured migration practice.',
  comparisonRows: [
    {
      criterion: 'Data integrity',
      values: [
        'Hope-based cutover',
        'Reconciliation and parallel-run validation',
      ],
    },
    {
      criterion: 'Downtime risk',
      values: [
        'Unplanned outages at cutover',
        'Rehearsed cutover with rollback plan',
      ],
    },
    {
      criterion: 'Performance',
      values: [
        'Cloud bill shock, slow queries',
        'Benchmarked and tuned target environment',
      ],
    },
    {
      criterion: 'Analytics readiness',
      values: ['Same siloed data, new location', 'Data lake/DWH path designed in'],
    },
    {
      criterion: 'Oracle alignment',
      values: [
        'Generic DBA vendor',
        'Oracle-aware migration alongside Fusion/EBS estates',
      ],
    },
  ],
  related: [
    {
      icon: Code2,
      title: 'Application Development',
      description:
        'Applications and APIs that consume your migrated data platforms.',
      to: SOLUTION_APP_DEV,
    },
    {
      icon: Cloud,
      title: 'Cloud Management',
      description:
        'Cloud hosting and operations for migrated database workloads.',
      to: SOLUTION_CLOUD_MANAGEMENT,
    },
    {
      icon: Cloud,
      title: 'Cloud & Digital Transformation',
      description:
        'Full practice overview, app dev, data, and cloud together.',
      to: SERVICE_CLOUD_DT,
    },
  ],
  faqs: [
    {
      q: 'Which databases does MPC migrate?',
      a: 'Oracle, SQL Server, MySQL, PostgreSQL, MongoDB, and other NoSQL platforms, to cloud or modern on-prem targets.',
    },
    {
      q: 'Can you migrate Oracle databases to the cloud?',
      a: 'Yes. We migrate Oracle databases to OCI, AWS RDS, Azure, and other targets with performance tuning and integration to Fusion/EBS where required.',
    },
    {
      q: 'Do you build data lakes and warehouses?',
      a: 'Yes. Our data engineering practice delivers data lakes, DWH, and analytics pipelines on major cloud platforms.',
    },
    {
      q: 'How do you minimise migration downtime?',
      a: 'We use replication, parallel runs, and rehearsed cutovers, with rollback criteria defined before production switch.',
    },
  ],
  faqTitle: 'Database Migration. Frequently Asked Questions',
  ctaTitle: 'Plan your',
  ctaTitleAccent: 'Data Migration',
  ctaBody:
    'Tell us about your source systems and targets. We\'ll assess complexity and propose a low-risk migration path.',
  ctaText: 'Talk to MPC',
};

export function DatabaseMigration() {
  return <OracleSolutionLayout config={CONFIG} />;
}
