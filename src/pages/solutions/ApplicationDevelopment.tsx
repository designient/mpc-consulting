import React from 'react';
import { Cloud, Database } from 'lucide-react';
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
  canonicalPath: SOLUTION_APP_DEV,
  breadcrumbLabel: 'Application Development',
  parentService: CLOUD_PARENT,
  seoTitle: 'Application Development | Mobile, Web & Full Stack | MPC',
  seoDescription:
    'MPC builds enterprise applications, mobile, web, full stack, APIs, UI/UX, and legacy modernization across modern cloud platforms.',
  serviceType: 'Application Development Services',
  serviceDescription:
    'Mobile and web application development, full stack engineering, APIs, microservices, UI/UX, and legacy modernization.',
  heroEyebrow: 'Cloud & Digital Transformation · App Dev',
  heroHeadline: 'Build applications',
  heroHeadlineAccent: 'that scale with your business',
  heroSubhead:
    'Mobile, web, full stack, and API development, from greenfield builds to legacy modernization, delivered with enterprise-grade engineering discipline.',
  heroCtaText: 'Talk to Our App Dev Team',
  heroImageSrc:
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2400&auto=format&fit=crop',
  whatIsTitle: 'What is MPC Application Development?',
  whatIsBody:
    'MPC\'s application development practice delivers modern software across mobile, web, and backend tiers, using React, Angular, Node.js, .NET Core, Java Spring Boot, Flutter, and React Native. We build applications that integrate with Oracle, cloud platforms, and enterprise APIs without compromising security or maintainability.',
  whatIsImageSrc:
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
  whatIsImageAlt: 'Software development and pair programming',
  toc: [
    { label: 'Overview', hash: 'overview' },
    { label: 'Capabilities', hash: 'capabilities' },
    { label: 'Services', hash: 'modules' },
    { label: 'Process', hash: 'process' },
    { label: 'Comparison', hash: 'comparison' },
    { label: 'FAQ', hash: 'faq' },
  ],
  overviewTitle: 'Application Development with MPC',
  overviewParagraphs: [
    'Enterprise applications need more than code, they need architecture that survives audits, integrations that don\'t break at month-end, and UX that people actually use. MPC delivers application development as part of a broader cloud and digital transformation practice.',
    'From mobile apps and responsive web portals to microservices and legacy modernization, we build with the stacks your teams can hire for and operate long after go-live.',
  ],
  moduleChips: [
    'Android & iOS',
    'React.js',
    'Angular',
    'Node.js',
    '.NET Core',
    'Java Spring Boot',
    'REST & GraphQL',
    'Flutter',
    'React Native',
    'Figma',
  ],
  capabilitiesTitle: 'Our Application Development Capabilities',
  capabilities: [
    {
      title: 'Mobile Development',
      body: 'Native and cross-platform mobile apps for Android and iOS. Flutter and React Native where speed-to-market matters.',
    },
    {
      title: 'Web Applications',
      body: 'Responsive web apps on React.js and Angular, enterprise portals, dashboards, and customer-facing experiences.',
    },
    {
      title: 'Backend & APIs',
      body: 'Node.js, .NET Core, and Java Spring Boot services with REST and GraphQL APIs and microservices architecture.',
    },
    {
      title: 'Full Stack Delivery',
      body: 'End-to-end ownership from database design through UI, one team accountable for the full application stack.',
    },
    {
      title: 'UI/UX Design',
      body: 'Figma-based prototyping and design systems that align product, business, and engineering before build starts.',
    },
    {
      title: 'Legacy Modernization',
      body: 'Strangler patterns and phased rewrites that move monoliths to modern architectures without big-bang risk.',
    },
  ],
  modulesSectionTitle: 'What we build',
  modulesSectionSubtitle:
    'Three delivery pillars where MPC application teams deliver production-ready software.',
  modules: [
    {
      title: 'Mobile & Cross-Platform',
      desc: 'Android, iOS, Flutter, and React Native applications, offline-capable, secure, and integrated with enterprise identity and APIs.',
      imageSrc:
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Mobile application development',
    },
    {
      title: 'Web & Full Stack',
      desc: 'React and Angular front ends with Node, .NET, or Java backends, database design, API layers, and deployment pipelines included.',
      imageSrc:
        'https://images.unsplash.com/photo-1461743480684-dccba630e2f6?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Full stack web development',
    },
    {
      title: 'APIs & Microservices',
      desc: 'REST and GraphQL services, event-driven integrations, and microservices that connect Oracle, SaaS, and cloud platforms reliably.',
      imageSrc:
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'API and microservices architecture',
    },
  ],
  processTitle: 'Our application delivery process',
  processIntro:
    'A six-stage delivery model for enterprise applications, from discovery through hypercare and handover to managed support.',
  processSteps: [
    {
      number: '01',
      title: 'Discover',
      description:
        'Requirements workshops, technical assessment, and architecture options, aligned to business outcomes.',
    },
    {
      number: '02',
      title: 'Design',
      description:
        'UX prototypes, API contracts, data models, and sprint-ready backlog with clear acceptance criteria.',
    },
    {
      number: '03',
      title: 'Build',
      description:
        'Agile sprints with CI/CD, code review, and demo cadence, iterative delivery with stakeholder visibility.',
    },
    {
      number: '04',
      title: 'Test',
      description:
        'Automated and manual testing, functional, integration, performance, and security validation.',
    },
    {
      number: '05',
      title: 'Release',
      description:
        'Controlled deployments to cloud or on-prem environments with rollback plans and monitoring.',
    },
    {
      number: '06',
      title: 'Support',
      description:
        'Hypercare, knowledge transfer, and optional managed application support from MPC Tech.',
    },
  ],
  comparisonTitle: 'Offshore factory vs. MPC App Dev',
  comparisonIntro:
    'What enterprises typically encounter when comparing volume offshore shops against MPC\'s integrated application practice.',
  comparisonRows: [
    {
      criterion: 'Architecture quality',
      values: [
        'Feature delivery without enterprise context',
        'Architecture aligned to Oracle and cloud estate',
      ],
    },
    {
      criterion: 'Integration depth',
      values: [
        'Point integrations, fragile APIs',
        'Durable integrations with ERP, HCM, and cloud',
      ],
    },
    {
      criterion: 'UX discipline',
      values: ['Developer-led UI', 'Figma-led design with user validation'],
    },
    {
      criterion: 'Security & compliance',
      values: ['Bolted on late', 'Security woven into SDLC from sprint one'],
    },
    {
      criterion: 'Post-go-live',
      values: ['Hand-over and ticket queue', 'Managed support from builders'],
    },
  ],
  related: [
    {
      icon: Database,
      title: 'Database Migration',
      description:
        'Data platform migrations and engineering alongside your application builds.',
      to: SOLUTION_DB_MIGRATION,
    },
    {
      icon: Cloud,
      title: 'Cloud Management',
      description:
        'Hosting, DevOps, and multi-cloud operations for applications we build.',
      to: SOLUTION_CLOUD_MANAGEMENT,
    },
    {
      icon: Cloud,
      title: 'DevOps',
      description:
        'CI/CD pipelines and container orchestration for application delivery.',
      to: SOLUTION_DEVOPS,
    },
  ],
  faqs: [
    {
      q: 'Which tech stacks does MPC use for application development?',
      a: 'React.js, Angular, Node.js, .NET Core, Java Spring Boot, Flutter, and React Native, selected based on your existing estate and hiring strategy.',
    },
    {
      q: 'Can MPC modernize legacy applications?',
      a: 'Yes. We deliver legacy app modernization using strangler patterns, API facades, and phased rewrites to reduce cutover risk.',
    },
    {
      q: 'Do you provide UI/UX design?',
      a: 'Yes. Our practice includes Figma-based prototyping and design systems before development sprints begin.',
    },
    {
      q: 'How does application development connect to Oracle projects?',
      a: 'We build Oracle extensions, APEX applications, and integration layers that extend Fusion and EBS, not isolated apps that fight your ERP.',
    },
  ],
  faqTitle: 'Application Development. Frequently Asked Questions',
  ctaTitle: 'Start your',
  ctaTitleAccent: 'Application Build',
  ctaBody:
    'Tell us what you need to build or modernize. We\'ll outline architecture, timeline, and the right stack.',
  ctaText: 'Talk to MPC',
};

export function ApplicationDevelopment() {
  return <OracleSolutionLayout config={CONFIG} />;
}
