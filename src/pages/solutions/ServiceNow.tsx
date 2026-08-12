import React from 'react';
import { BarChart3, Shield, Users } from 'lucide-react';
import {
  OracleSolutionLayout,
  type OracleSolutionPageConfig,
} from '../../components/layout/OracleSolutionLayout';
import {
  SERVICE_CX_ANALYTICS,
  SERVICE_SECURITY,
  SOLUTION_POWER_BI,
  SOLUTION_SALESFORCE,
  SOLUTION_SERVICENOW,
} from '../../data/paths';

const CX_PARENT = {
  label: 'CX & Analytics',
  to: SERVICE_CX_ANALYTICS,
};

const CONFIG: OracleSolutionPageConfig = {
  canonicalPath: SOLUTION_SERVICENOW,
  breadcrumbLabel: 'ServiceNow',
  parentService: CX_PARENT,
  seoTitle: 'ServiceNow Consulting | HRSD, ITAM, ITOM, ITSM | MPC',
  seoDescription:
    'MPC implements ServiceNow solutions across HRSD, ITAM, ITOM, and ITSM to improve service delivery and enterprise operations.',
  serviceType: 'ServiceNow Implementation Services',
  serviceDescription:
    'ServiceNow consulting and implementation for HRSD, ITAM, ITOM, and ITSM with enterprise integration and managed support.',
  heroEyebrow: 'CX & Analytics · ServiceNow',
  heroHeadline: 'Modernize enterprise',
  heroHeadlineAccent: 'service operations',
  heroSubhead:
    'ServiceNow implementation across HRSD, ITAM, ITOM, and ITSM to deliver responsive service experiences and operational control.',
  heroCtaText: 'Talk to Our ServiceNow Team',
  heroImageSrc:
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2400&auto=format&fit=crop',
  whatIsTitle: 'What is MPC ServiceNow consulting?',
  whatIsBody:
    'MPC helps enterprises deploy ServiceNow as a unified service management platform. We streamline employee and IT service workflows, improve asset visibility, and reduce operational friction through process-led implementation.',
  whatIsImageSrc:
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop',
  whatIsImageAlt: 'ServiceNow process and IT operations management',
  toc: [
    { label: 'Overview', hash: 'overview' },
    { label: 'Capabilities', hash: 'capabilities' },
    { label: 'Services', hash: 'modules' },
    { label: 'Process', hash: 'process' },
    { label: 'Comparison', hash: 'comparison' },
    { label: 'FAQ', hash: 'faq' },
  ],
  overviewTitle: 'ServiceNow with MPC',
  overviewParagraphs: [
    'Service management platforms create value only when workflows reflect real operating behaviors. MPC combines platform implementation with operating model design to improve responsiveness, auditability, and end-user satisfaction.',
    'From HR service delivery to IT operations and asset management, we build ServiceNow programs that scale beyond ticketing into enterprise service transformation.',
  ],
  moduleChips: [
    'HRSD',
    'ITAM',
    'ITOM',
    'ITSM',
    'Workflow Automation',
    'Service Catalog',
    'Integration',
    'Managed Support',
  ],
  capabilitiesTitle: 'Our ServiceNow Capabilities',
  capabilities: [
    {
      title: 'HR Service Delivery',
      body: 'Design and deployment of HRSD workflows to improve employee case handling and internal service experience.',
    },
    {
      title: 'IT Asset Management',
      body: 'Asset lifecycle visibility, governance controls, and process automation for software and hardware estates.',
    },
    {
      title: 'IT Operations Management',
      body: 'Operational monitoring, event workflows, and service health controls aligned to reliability goals.',
    },
    {
      title: 'IT Service Management',
      body: 'Incident, request, and change workflows with SLA-driven service management practices.',
    },
    {
      title: 'Platform Integration',
      body: 'Integration with enterprise systems for seamless ticketing, data enrichment, and reporting.',
    },
    {
      title: 'Run & Optimise',
      body: 'Managed support and continuous optimization to improve platform value after go-live.',
    },
  ],
  modulesSectionTitle: 'ServiceNow services we deliver',
  modulesSectionSubtitle:
    'Three core workstreams for enterprise service and operations modernization.',
  modules: [
    {
      title: 'HRSD & Employee Services',
      desc: 'Employee-facing service workflows, case lifecycle design, and HR service catalog models for better responsiveness.',
      imageSrc:
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'HR service delivery workflows',
    },
    {
      title: 'ITSM & ITAM',
      desc: 'Incident, problem, and change processes with asset lifecycle governance and compliance-friendly controls.',
      imageSrc:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'IT service and asset management',
    },
    {
      title: 'ITOM & Operations Visibility',
      desc: 'Operational observability workflows and service health controls to improve issue detection and resolution time.',
      imageSrc:
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'IT operations management and monitoring',
    },
  ],
  processTitle: 'Our ServiceNow delivery process',
  processIntro:
    'A service-operations-first delivery model for practical and scalable ServiceNow adoption.',
  processSteps: [
    { number: '01', title: 'Diagnose', description: 'Current workflow maturity assessment and pain-point mapping across HR and IT service teams.' },
    { number: '02', title: 'Blueprint', description: 'Target process design, platform architecture, and phased implementation roadmap.' },
    { number: '03', title: 'Implement', description: 'Module configuration, workflow automation, and integration delivery in iterative sprints.' },
    { number: '04', title: 'Validate', description: 'Functional and SLA validation with user acceptance and operational readiness checks.' },
    { number: '05', title: 'Roll Out', description: 'Controlled launch with stakeholder communication, training, and governance setup.' },
    { number: '06', title: 'Improve', description: 'Ongoing tuning, adoption measurement, and service excellence optimization.' },
  ],
  comparisonTitle: 'Ticketing setup vs. MPC ServiceNow',
  comparisonIntro:
    'What organizations typically experience when comparing basic ticketing deployments with MPC\'s service transformation model.',
  comparisonRows: [
    { criterion: 'Scope', values: ['Incident ticketing only', 'HRSD, ITAM, ITOM, and ITSM operating model'] },
    { criterion: 'Process design', values: ['Tool-led workflow design', 'Business-led service workflow architecture'] },
    { criterion: 'Integration', values: ['Minimal data exchange', 'Integrated enterprise service ecosystem'] },
    { criterion: 'Governance', values: ['Limited controls', 'SLA, audit, and lifecycle governance built in'] },
    { criterion: 'Outcome focus', values: ['Platform deployment complete', 'Continuous service quality improvement'] },
  ],
  related: [
    {
      icon: Users,
      title: 'Salesforce',
      description: 'Connect customer-facing workflows with downstream enterprise service delivery.',
      to: SOLUTION_SALESFORCE,
    },
    {
      icon: BarChart3,
      title: 'Power BI',
      description: 'Expose service and operations KPIs in executive dashboards.',
      to: SOLUTION_POWER_BI,
    },
    {
      icon: Shield,
      title: 'Security & Zero Trust',
      description: 'Strengthen governance and control posture across service operations.',
      to: SERVICE_SECURITY,
    },
  ],
  faqs: [
    {
      q: 'Which ServiceNow areas does MPC support?',
      a: 'We implement and optimize HRSD, ITAM, ITOM, and ITSM, including process design, integration, and managed support.',
    },
    {
      q: 'Can MPC connect ServiceNow with other enterprise platforms?',
      a: 'Yes. We integrate ServiceNow with CRM, ERP, and analytics systems to improve data flow and operational visibility.',
    },
    {
      q: 'Do you provide post-go-live support?',
      a: 'Yes. Our managed support model includes issue resolution, enhancement delivery, and continuous process optimization.',
    },
    {
      q: 'Is ServiceNow only for IT teams?',
      a: 'No. We deploy ServiceNow for broader enterprise service use cases including HR service delivery and cross-functional operations.',
    },
  ],
  faqTitle: 'ServiceNow. Frequently Asked Questions',
  ctaTitle: 'Elevate your',
  ctaTitleAccent: 'Service Operations',
  ctaBody:
    'Tell us where your service workflows are slowing down. We\'ll map a ServiceNow roadmap that improves speed and control.',
  ctaText: 'Talk to MPC',
};

export function ServiceNow() {
  return <OracleSolutionLayout config={CONFIG} />;
}
