import React from 'react';
import { Code2, Database } from 'lucide-react';
import {
  OracleSolutionLayout,
  type OracleSolutionPageConfig,
} from '../../components/layout/OracleSolutionLayout';
import {
  SERVICE_CLOUD_DT,
  SOLUTION_APP_DEV,
  SOLUTION_CLOUD_MANAGEMENT,
  SOLUTION_DB_MIGRATION,
  SOLUTION_DEVOPS,
} from '../../data/paths';

const CLOUD_PARENT = {
  label: 'Cloud & Digital Transformation',
  to: SERVICE_CLOUD_DT,
};

const CONFIG: OracleSolutionPageConfig = {
  canonicalPath: SOLUTION_CLOUD_MANAGEMENT,
  breadcrumbLabel: 'Cloud Management',
  parentService: CLOUD_PARENT,
  seoTitle: 'Cloud Management. OCI, AWS, Azure & GCP | MPC',
  seoDescription:
    'MPC manages multi-cloud infrastructure across OCI, AWS, Azure, and GCP, migration, DevOps, backup/DR, and managed operations.',
  serviceType: 'Cloud Management Services',
  serviceDescription:
    'Multi-cloud strategy, migration, platform operations, backup and disaster recovery, and embedded DevOps across OCI, AWS, Azure, and GCP.',
  heroEyebrow: 'Cloud & Digital Transformation · Cloud',
  heroHeadline: 'Operate multi-cloud',
  heroHeadlineAccent: 'with confidence',
  heroSubhead:
    'OCI, AWS, Azure, and GCP, cloud migration, platform management, backup and disaster recovery, and DevOps woven into how your estate runs day to day.',
  heroCtaText: 'Talk to Our Cloud Team',
  heroImageSrc:
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2400&auto=format&fit=crop',
  whatIsTitle: 'What is MPC Cloud Management?',
  whatIsBody:
    'MPC Cloud Management is our practice for designing, migrating, and operating workloads across Oracle Cloud Infrastructure, AWS, Azure, and Google Cloud. We deliver multi-cloud strategy, infrastructure as code, observability, backup and disaster recovery, and DevOps pipelines, so your cloud estate is secure, cost-aware, and operable.',
  whatIsImageSrc:
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
  whatIsImageAlt: 'Cloud infrastructure operations center',
  toc: [
    { label: 'Overview', hash: 'overview' },
    { label: 'Capabilities', hash: 'capabilities' },
    { label: 'Platforms', hash: 'modules' },
    { label: 'Process', hash: 'process' },
    { label: 'Comparison', hash: 'comparison' },
    { label: 'FAQ', hash: 'faq' },
  ],
  overviewTitle: 'Cloud Management with MPC',
  overviewParagraphs: [
    'Cloud success is not just migration, it is how you run, secure, and optimise workloads after landing. MPC Cloud Management covers the full operational lifecycle: landing zone design, workload migration, CI/CD, monitoring, cost governance, and disaster recovery.',
    'We operate across OCI, AWS, Azure, and GCP with consistent practices, so multi-cloud does not mean multiplied complexity for your operations team.',
  ],
  moduleChips: [
    'OCI',
    'AWS',
    'Azure',
    'GCP',
    'Multi-Cloud',
    'CI/CD',
    'Kubernetes',
    'Backup & DR',
    'IaC',
  ],
  capabilitiesTitle: 'Our Cloud Management Capabilities',
  capabilities: [
    {
      title: 'Cloud Strategy',
      body: 'Workload assessment, platform selection, and multi-cloud roadmap aligned to compliance and cost goals.',
    },
    {
      title: 'Migration & Landing Zones',
      body: 'Secure landing zones, workload migration, and cutover with minimal business disruption.',
    },
    {
      title: 'Platform Operations',
      body: 'Day-2 operations, patching, scaling, incident response, and cost optimisation across clouds.',
    },
    {
      title: 'DevOps & CI/CD',
      body: 'GitLab, Jenkins, GitHub Actions pipelines with Docker, Kubernetes, and automated release governance.',
    },
    {
      title: 'Backup & Disaster Recovery',
      body: 'Enterprise DR strategies with documented RTO/RPO, tested recovery, and cross-region resilience.',
    },
    {
      title: 'Security & Compliance',
      body: 'Identity, network segmentation, encryption, and cloud security posture management.',
    },
  ],
  modulesSectionTitle: 'Platforms we manage',
  modulesSectionSubtitle:
    'Major cloud platforms where MPC designs, migrates, and operates enterprise workloads.',
  modules: [
    {
      title: 'Oracle Cloud (OCI)',
      desc: 'OCI compute, networking, and database services, aligned with Oracle application estates and Fusion/EBS integrations.',
      imageSrc:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Oracle Cloud infrastructure',
    },
    {
      title: 'AWS & Azure',
      desc: 'EC2, Lambda, S3, RDS, CloudFormation, CloudWatch on AWS; App Services, DevOps, and Security Center on Azure, managed with IaC and observability.',
      imageSrc:
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'AWS and Azure cloud services',
    },
    {
      title: 'Google Cloud',
      desc: 'App Engine, BigQuery, Cloud Functions, and GKE, for analytics-heavy and cloud-native application workloads.',
      imageSrc:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Google Cloud platform analytics',
    },
  ],
  processTitle: 'Our cloud delivery process',
  processIntro:
    'Six stages from cloud readiness assessment through managed operations, consistent across OCI, AWS, Azure, and GCP.',
  processSteps: [
    {
      number: '01',
      title: 'Assess',
      description:
        'Workload inventory, cloud readiness scoring, and TCO comparison across target platforms.',
    },
    {
      number: '02',
      title: 'Design',
      description:
        'Landing zone architecture, network topology, security baseline, and migration waves.',
    },
    {
      number: '03',
      title: 'Migrate',
      description:
        'Workload migration with validation, dependency sequencing, and cutover rehearsals.',
    },
    {
      number: '04',
      title: 'Automate',
      description:
        'CI/CD pipelines, infrastructure as code, and container orchestration setup.',
    },
    {
      number: '05',
      title: 'Operate',
      description:
        'Monitoring, incident management, patching, and cost governance in production.',
    },
    {
      number: '06',
      title: 'Optimise',
      description:
        'Continuous rightsizing, reserved capacity planning, and DR testing.',
    },
  ],
  comparisonTitle: 'Generic cloud MSP vs. MPC',
  comparisonIntro:
    'What enterprises typically encounter when comparing generic managed service providers against MPC\'s integrated cloud practice.',
  comparisonRows: [
    {
      criterion: 'Multi-cloud breadth',
      values: [
        'Single-cloud specialist',
        'OCI, AWS, Azure, GCP with unified operating model',
      ],
    },
    {
      criterion: 'Oracle alignment',
      values: [
        'Cloud-agnostic generalist',
        'Oracle-aware cloud practice for Fusion and EBS estates',
      ],
    },
    {
      criterion: 'DevOps integration',
      values: [
        'Separate dev and ops vendors',
        'CI/CD and IaC embedded in cloud delivery',
      ],
    },
    {
      criterion: 'DR maturity',
      values: ['Untested backup claims', 'Documented RTO/RPO with tested recovery'],
    },
    {
      criterion: 'Application context',
      values: [
        'Infrastructure-only support',
        'Full stack context from app dev and data practices',
      ],
    },
  ],
  related: [
    {
      icon: Code2,
      title: 'Application Development',
      description:
        'Cloud-native applications deployed on platforms we manage.',
      to: SOLUTION_APP_DEV,
    },
    {
      icon: Database,
      title: 'Database Migration',
      description:
        'Database workloads migrated and operated on cloud infrastructure.',
      to: SOLUTION_DB_MIGRATION,
    },
    {
      icon: Code2,
      title: 'DevOps',
      description:
        'Dedicated DevOps practice. CI/CD, containers, and release automation.',
      to: SOLUTION_DEVOPS,
    },
  ],
  faqs: [
    {
      q: 'Which cloud platforms does MPC manage?',
      a: 'OCI, AWS, Azure, and GCP, including multi-cloud architectures with consistent security and operations practices.',
    },
    {
      q: 'Does MPC provide DevOps as part of cloud management?',
      a: 'Yes. CI/CD with GitLab, Jenkins, or GitHub Actions, plus Docker and Kubernetes, is embedded in our cloud management offering.',
    },
    {
      q: 'Can MPC help with cloud cost optimisation?',
      a: 'Yes. We provide rightsizing, reserved capacity planning, and ongoing cost governance as part of managed operations.',
    },
    {
      q: 'How does cloud management relate to Oracle workloads?',
      a: 'We specialise in running Oracle applications and databases on OCI and other clouds, with integrations to Fusion, EBS, and hybrid estates.',
    },
  ],
  faqTitle: 'Cloud Management. Frequently Asked Questions',
  ctaTitle: 'Start your',
  ctaTitleAccent: 'Cloud Journey',
  ctaBody:
    'Tell us about your current estate and cloud goals. We\'ll recommend platform strategy, migration waves, and operating model.',
  ctaText: 'Talk to MPC',
};

export function CloudManagement() {
  return <OracleSolutionLayout config={CONFIG} />;
}
