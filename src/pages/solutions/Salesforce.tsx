import React from 'react';
import { BarChart3, Cloud, Settings } from 'lucide-react';
import {
  OracleSolutionLayout,
  type OracleSolutionPageConfig,
} from '../../components/layout/OracleSolutionLayout';
import {
  SOLUTION_CLOUD_MANAGEMENT,
  SERVICE_CX_ANALYTICS,
  SOLUTION_POWER_BI,
  SOLUTION_SALESFORCE,
  SOLUTION_SERVICENOW,
} from '../../data/paths';

const CX_PARENT = {
  label: 'CX & Analytics',
  to: SERVICE_CX_ANALYTICS,
};

const CONFIG: OracleSolutionPageConfig = {
  canonicalPath: SOLUTION_SALESFORCE,
  breadcrumbLabel: 'Salesforce',
  parentService: CX_PARENT,
  seoTitle: 'Salesforce Implementation Services | MPC',
  seoDescription:
    'MPC provides end-to-end Salesforce implementation for B2C, B2B, OMS, Sales, Service, Marketing, and custom cloud use cases.',
  serviceType: 'Salesforce Implementation Services',
  serviceDescription:
    'Salesforce consulting and implementation across B2C, B2B, OMS, Sales Cloud, Service Cloud, Marketing Cloud, and custom workflows.',
  heroEyebrow: 'CX & Analytics · Salesforce',
  heroHeadline: 'Implement Salesforce',
  heroHeadlineAccent: 'for full customer lifecycle impact',
  heroSubhead:
    'End-to-end Salesforce delivery across B2C, B2B, OMS, Sales, Service, and Marketing, integrated with your enterprise systems.',
  heroCtaText: 'Talk to Our Salesforce Team',
  heroImageSrc:
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2400&auto=format&fit=crop',
  whatIsTitle: 'What is MPC Salesforce implementation?',
  whatIsBody:
    'MPC helps organizations design and deploy Salesforce ecosystems that improve conversion, service quality, and operational visibility. We cover strategy, implementation, integration, rollout, and managed support across the customer lifecycle.',
  whatIsImageSrc:
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop',
  whatIsImageAlt: 'Salesforce consulting and customer lifecycle operations',
  toc: [
    { label: 'Overview', hash: 'overview' },
    { label: 'Capabilities', hash: 'capabilities' },
    { label: 'Services', hash: 'modules' },
    { label: 'Process', hash: 'process' },
    { label: 'Comparison', hash: 'comparison' },
    { label: 'FAQ', hash: 'faq' },
  ],
  overviewTitle: 'Salesforce with MPC',
  overviewParagraphs: [
    'Salesforce programs fail when implementations are feature-heavy but process-light. MPC focuses on customer journeys, data flow, and adoption outcomes before configuration begins.',
    'We implement cloud capabilities in a phased model that balances speed and governance, while integrating Salesforce with ERP, analytics, and service platforms.',
  ],
  moduleChips: [
    'B2C',
    'B2B',
    'OMS',
    'Sales Cloud',
    'Service Cloud',
    'Marketing Cloud',
    'Custom Clouds',
    'Managed Support',
  ],
  capabilitiesTitle: 'Our Salesforce Capabilities',
  capabilities: [
    {
      title: 'End-to-End Implementations',
      body: 'Discovery, architecture, configuration, integration, migration, and go-live support in one execution model.',
    },
    {
      title: 'B2C & B2B Workflows',
      body: 'Pipeline, account, lead, and opportunity models aligned to distinct B2C and B2B revenue motions.',
    },
    {
      title: 'OMS Integration',
      body: 'Order visibility and orchestration integrations that connect sales, fulfillment, and finance teams.',
    },
    {
      title: 'Sales & Service Operations',
      body: 'Process automation and productivity tooling for sales reps, service agents, and support leadership.',
    },
    {
      title: 'Marketing Enablement',
      body: 'Campaign and segmentation workflows that strengthen demand generation and customer engagement.',
    },
    {
      title: 'Custom Cloud Extensions',
      body: 'Custom objects, automations, and integrations for industry-specific customer lifecycle requirements.',
    },
  ],
  modulesSectionTitle: 'Salesforce solutions we deliver',
  modulesSectionSubtitle:
    'Focused delivery tracks across sales, service, and customer engagement operations.',
  modules: [
    {
      title: 'Salesforce Core',
      desc: 'B2C and B2B pipeline setup, account hierarchy design, and automation for predictable revenue operations.',
      imageSrc:
        'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Salesforce core implementation',
    },
    {
      title: 'Service & OMS Integration',
      desc: 'Service workflows and order orchestration integrated with downstream systems for full lifecycle visibility.',
      imageSrc:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Service and order orchestration workflows',
    },
    {
      title: 'Marketing & Custom Clouds',
      desc: 'Campaign and journey workflows with custom cloud extensions for specialized industry and process needs.',
      imageSrc:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Marketing cloud and custom workflows',
    },
  ],
  processTitle: 'Our Salesforce delivery process',
  processIntro:
    'A phased approach designed to accelerate rollout while preserving data quality and adoption.',
  processSteps: [
    { number: '01', title: 'Define', description: 'Journey mapping, target process design, and KPI baseline for sales and service functions.' },
    { number: '02', title: 'Architect', description: 'Org model, object schema, automation strategy, and integration blueprint.' },
    { number: '03', title: 'Configure', description: 'Cloud configuration, custom objects, security model, and workflow automation.' },
    { number: '04', title: 'Integrate', description: 'ERP, analytics, and service system integrations with secure data synchronization.' },
    { number: '05', title: 'Enable', description: 'Role-based training, UAT, and rollout planning by region or business unit.' },
    { number: '06', title: 'Optimise', description: 'Post-go-live tuning, adoption analytics, and continuous improvement backlog.' },
  ],
  comparisonTitle: 'Generic CRM setup vs. MPC Salesforce',
  comparisonIntro:
    'What enterprises typically experience when comparing generic Salesforce setup to MPC\'s business-led implementation.',
  comparisonRows: [
    { criterion: 'Implementation focus', values: ['Configuration-first', 'Journey and outcome-first'] },
    { criterion: 'Integration model', values: ['CRM in isolation', 'Connected with ERP, BI, and service systems'] },
    { criterion: 'Adoption', values: ['Minimal enablement', 'Structured change and role-based adoption'] },
    { criterion: 'Scalability', values: ['Single-market deployment', 'Global rollout model and governance'] },
    { criterion: 'Post-go-live', values: ['Project closure', 'Managed enhancement and support'] },
  ],
  related: [
    {
      icon: BarChart3,
      title: 'Power BI',
      description: 'Bring Salesforce pipeline and service metrics into executive analytics.',
      to: SOLUTION_POWER_BI,
    },
    {
      icon: Settings,
      title: 'ServiceNow',
      description: 'Unify customer workflows with downstream IT and service operations.',
      to: SOLUTION_SERVICENOW,
    },
    {
      icon: Cloud,
      title: 'Cloud Management',
      description: 'Cloud operations and reliability foundations for integrated CX systems.',
      to: SOLUTION_CLOUD_MANAGEMENT,
    },
  ],
  faqs: [
    {
      q: 'Which Salesforce areas does MPC implement?',
      a: 'We implement B2C, B2B, OMS, Sales, Service, Marketing, and custom cloud capabilities aligned to your operating model.',
    },
    {
      q: 'Can MPC integrate Salesforce with Oracle back-office systems?',
      a: 'Yes. We design and deliver integrations across Salesforce, Oracle ERP/HCM, and analytics platforms for consistent data flow.',
    },
    {
      q: 'Do you support global rollout programs?',
      a: 'Yes. We support phased rollouts across regions with localization, training, governance, and post-go-live stabilization.',
    },
    {
      q: 'Do you provide ongoing Salesforce managed support?',
      a: 'Yes. Managed support includes incident resolution, enhancement delivery, release planning, and process optimization.',
    },
  ],
  faqTitle: 'Salesforce. Frequently Asked Questions',
  ctaTitle: 'Build a stronger',
  ctaTitleAccent: 'Customer Revenue Engine',
  ctaBody:
    'Share your CRM and customer journey goals. We\'ll design the right Salesforce roadmap and rollout approach.',
  ctaText: 'Talk to MPC',
};

export function Salesforce() {
  return <OracleSolutionLayout config={CONFIG} />;
}
