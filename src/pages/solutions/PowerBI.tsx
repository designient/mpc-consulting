import React from 'react';
import { BarChart3, Cloud, Users } from 'lucide-react';
import {
  OracleSolutionLayout,
  type OracleSolutionPageConfig,
} from '../../components/layout/OracleSolutionLayout';
import {
  SERVICE_CX_ANALYTICS,
  SOLUTION_CLOUD_MANAGEMENT,
  SOLUTION_POWER_BI,
  SOLUTION_SALESFORCE,
  SOLUTION_SERVICENOW,
} from '../../data/paths';

const CX_PARENT = {
  label: 'CX & Analytics',
  to: SERVICE_CX_ANALYTICS,
};

const CONFIG: OracleSolutionPageConfig = {
  canonicalPath: SOLUTION_POWER_BI,
  breadcrumbLabel: 'Power BI',
  parentService: CX_PARENT,
  seoTitle: 'Power BI Consulting & Analytics Solutions | MPC',
  seoDescription:
    'MPC delivers Power BI consulting, data integration, modelling, dashboard development, and migration services for enterprise analytics programs.',
  serviceType: 'Power BI Consulting Services',
  serviceDescription:
    'Power BI consulting services across modelling, dashboard engineering, analytics, and migration from legacy BI tools.',
  heroEyebrow: 'CX & Analytics · Power BI',
  heroHeadline: 'Turn data into',
  heroHeadlineAccent: 'actionable decisions',
  heroSubhead:
    'Power BI consulting, data modelling, and enterprise dashboards built for speed, adoption, and measurable business outcomes.',
  heroCtaText: 'Talk to Our Power BI Team',
  heroImageSrc:
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2400&auto=format&fit=crop',
  whatIsTitle: 'What is MPC Power BI Consulting?',
  whatIsBody:
    'MPC helps enterprises build modern analytics foundations with Power BI. We design semantic models, integrate data from Oracle and non-Oracle systems, and develop self-service dashboards that leadership and operations teams can trust daily.',
  whatIsImageSrc:
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
  whatIsImageAlt: 'Power BI dashboards and analytics insights',
  toc: [
    { label: 'Overview', hash: 'overview' },
    { label: 'Capabilities', hash: 'capabilities' },
    { label: 'Services', hash: 'modules' },
    { label: 'Process', hash: 'process' },
    { label: 'Comparison', hash: 'comparison' },
    { label: 'FAQ', hash: 'faq' },
  ],
  overviewTitle: 'Power BI with MPC',
  overviewParagraphs: [
    'Enterprise reporting often fails because data is fragmented, metric definitions are inconsistent, and dashboards are built without governance. MPC solves this by combining platform expertise with data engineering rigor.',
    'From strategy and licensing guidance to migration and managed analytics support, we help you move from static reporting to decision-ready intelligence.',
  ],
  moduleChips: [
    'Power BI Consulting',
    'Data Modelling',
    'Data Integration',
    'Dashboard Development',
    'Self-Service BI',
    'Advanced Analytics',
    'Migration to Power BI',
  ],
  capabilitiesTitle: 'Our Power BI Capabilities',
  capabilities: [
    {
      title: 'Consulting & Architecture',
      body: 'Platform strategy, workspace governance, and operating model design for long-term BI maturity.',
    },
    {
      title: 'Data Integration & Modelling',
      body: 'Data ingestion, transformation, and semantic model design for trusted KPIs and reusable metrics.',
    },
    {
      title: 'Dashboard Engineering',
      body: 'Role-based dashboards for executives, finance, sales, operations, and frontline teams.',
    },
    {
      title: 'Self-Service Enablement',
      body: 'Guided self-service frameworks that empower business users without compromising data quality.',
    },
    {
      title: 'Advanced Analytics',
      body: 'Forecasting, scenario analysis, and deeper insight layers for high-impact business decisions.',
    },
    {
      title: 'Migration Services',
      body: 'Structured migration from legacy BI tools to Power BI with minimal business disruption.',
    },
  ],
  modulesSectionTitle: 'Power BI services we deliver',
  modulesSectionSubtitle:
    'End-to-end analytics delivery from data foundation to executive reporting and adoption.',
  modules: [
    {
      title: 'Power BI Foundation',
      desc: 'Tenant setup, governance model, security roles, and enterprise-grade workspace structure for scalable adoption.',
      imageSrc:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Power BI analytics foundation',
    },
    {
      title: 'Dashboards & Reports',
      desc: 'Business-oriented dashboards and drill-through reports with consistent KPI definitions and visual storytelling.',
      imageSrc:
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Business dashboard development',
    },
    {
      title: 'Migration & Optimisation',
      desc: 'Legacy report migration, model optimization, and performance tuning to improve refresh speed and usability.',
      imageSrc:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'BI migration and optimization',
    },
  ],
  processTitle: 'Our Power BI delivery process',
  processIntro:
    'A practical model that aligns analytics implementation with stakeholder outcomes and user adoption.',
  processSteps: [
    { number: '01', title: 'Assess', description: 'Current BI landscape review, data source mapping, and reporting pain-point discovery.' },
    { number: '02', title: 'Design', description: 'Data model blueprint, KPI dictionary, and dashboard wireframes aligned to business priorities.' },
    { number: '03', title: 'Build', description: 'Data pipelines, semantic models, and dashboards delivered in sprint cycles with business demos.' },
    { number: '04', title: 'Validate', description: 'Data reconciliation, UAT, performance checks, and governance validation before rollout.' },
    { number: '05', title: 'Launch', description: 'Production deployment, access rollout, and training for reporting owners and consumers.' },
    { number: '06', title: 'Evolve', description: 'Managed support, enhancement backlog, and analytics roadmap iteration.' },
  ],
  comparisonTitle: 'BI tooling partner vs. MPC Power BI',
  comparisonIntro:
    'What enterprises typically find when comparing isolated report builders to MPC\'s analytics practice.',
  comparisonRows: [
    { criterion: 'Business alignment', values: ['Report-first approach', 'Outcome-first analytics tied to decisions'] },
    { criterion: 'Data trust', values: ['Inconsistent KPI definitions', 'Governed semantic models and common metrics'] },
    { criterion: 'Adoption', values: ['Dashboard delivery only', 'Enablement, training, and self-service framework'] },
    { criterion: 'Integration depth', values: ['Limited source coverage', 'Cross-platform integrations including Oracle data'] },
    { criterion: 'Scalability', values: ['Project-by-project reporting', 'Enterprise analytics operating model'] },
  ],
  related: [
    {
      icon: Users,
      title: 'Salesforce',
      description: 'Connect CRM data to Power BI for full-funnel customer intelligence.',
      to: SOLUTION_SALESFORCE,
    },
    {
      icon: Cloud,
      title: 'ServiceNow',
      description: 'Bring ITSM and HR service data into executive analytics dashboards.',
      to: SOLUTION_SERVICENOW,
    },
    {
      icon: BarChart3,
      title: 'Cloud Management',
      description: 'Cloud platform operations and governance for analytics workloads.',
      to: SOLUTION_CLOUD_MANAGEMENT,
    },
  ],
  faqs: [
    {
      q: 'Can MPC migrate reports from legacy BI tools to Power BI?',
      a: 'Yes. We run structured migration programs covering inventory, redesign, model conversion, validation, and user transition planning.',
    },
    {
      q: 'Do you support self-service BI with governance?',
      a: 'Yes. We set up role-based data access, curated datasets, and KPI governance so business users can create reports safely.',
    },
    {
      q: 'Can Power BI integrate with Oracle ERP and HCM data?',
      a: 'Yes. We routinely integrate Power BI with Oracle ecosystems and adjacent platforms for unified enterprise reporting.',
    },
    {
      q: 'Do you provide ongoing managed analytics support?',
      a: 'Yes. We offer managed support for model maintenance, performance tuning, report enhancements, and governance.',
    },
  ],
  faqTitle: 'Power BI. Frequently Asked Questions',
  ctaTitle: 'Scale your',
  ctaTitleAccent: 'Analytics Capability',
  ctaBody:
    'Tell us your reporting and data goals. We\'ll design a Power BI roadmap aligned to business outcomes.',
  ctaText: 'Talk to MPC',
};

export function PowerBI() {
  return <OracleSolutionLayout config={CONFIG} />;
}
