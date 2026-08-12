import React from 'react';
import { Database, Workflow, Activity } from 'lucide-react';
import {
  OracleSolutionLayout,
  type OracleSolutionPageConfig,
} from '../../components/layout/OracleSolutionLayout';
import {
  SOLUTION_ERP,
  SOLUTION_EPM,
  SOLUTION_TECH,
  SOLUTION_UNIFIER,
} from '../../data/paths';

const CONFIG: OracleSolutionPageConfig = {
  canonicalPath: SOLUTION_UNIFIER,
  breadcrumbLabel: 'Oracle Unifier',
  seoTitle: 'Oracle Unifier Consulting. Project Lifecycle | MPC',
  seoDescription:
    'MPC implements Oracle Unifier for capital projects, document control, cost management, and portfolio delivery.',
  serviceType: 'Oracle Unifier Consulting',
  serviceDescription:
    'Oracle Unifier project lifecycle management, capital projects, document control, cost management, and portfolio delivery.',
  heroEyebrow: 'Oracle Cloud · Unifier',
  heroHeadline: 'Deliver capital projects',
  heroHeadlineAccent: 'with Oracle Unifier',
  heroSubhead:
    'Project lifecycle management for capital programmes, document control, cost management, and portfolio visibility on Oracle Unifier.',
  heroCtaText: 'Schedule an Unifier Discovery Call',
  heroImageSrc:
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2400&auto=format&fit=crop',
  whatIsTitle: 'What is Oracle Unifier?',
  whatIsBody:
    'Oracle Unifier is Oracle\'s project lifecycle management platform for capital construction and infrastructure programmes. It manages documents, costs, schedules, and contracts across the project lifecycle, giving owners and contractors a single system of record from feasibility through handover.',
  whatIsImageSrc:
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop',
  whatIsImageAlt: 'Capital construction project site',
  toc: [
    { label: 'Overview', hash: 'overview' },
    { label: 'Capabilities', hash: 'capabilities' },
    { label: 'Modules', hash: 'modules' },
    { label: 'Process', hash: 'process' },
    { label: 'Comparison', hash: 'comparison' },
    { label: 'FAQ', hash: 'faq' },
  ],
  overviewTitle: 'Oracle Unifier with MPC',
  overviewParagraphs: [
    'Capital projects fail when document control, cost tracking, and schedule data live in disconnected systems. Oracle Unifier unifies project information, but only when configured for your contract structures, approval workflows, and reporting needs.',
    'MPC implements Oracle Unifier for real estate, infrastructure, energy, and public sector clients, integrated with Oracle ERP and Primavera where required.',
  ],
  moduleChips: [
    'Document Control',
    'Cost Management',
    'Contract Management',
    'Field Management',
    'Portfolio Management',
    'Design Management',
    'Safety & Quality',
    'Reporting',
  ],
  capabilitiesTitle: 'Our Unifier Capabilities',
  capabilities: [
    {
      title: 'Project Setup & Design',
      body: 'Shell hierarchy, permission models, and workflow design aligned to your project governance.',
    },
    {
      title: 'Document Management',
      body: 'Controlled document registers, transmittals, and revision management across project teams.',
    },
    {
      title: 'Cost & Contract Control',
      body: 'Budget tracking, change orders, commitments, and actuals linked to ERP where required.',
    },
    {
      title: 'Portfolio Delivery',
      body: 'Multi-project dashboards and portfolio reporting for programme owners and PMOs.',
    },
    {
      title: 'Integration',
      body: 'Connections to Oracle ERP, Primavera P6, and third-party systems via OIC and APIs.',
    },
    {
      title: 'Managed Support',
      body: 'Ongoing Unifier administration, workflow updates, and user enablement post-go-live.',
    },
  ],
  modulesSectionTitle: 'Modules we implement',
  modulesSectionSubtitle:
    'Core Unifier capabilities where MPC helps project organisations gain control and visibility.',
  modules: [
    {
      title: 'Document Control',
      desc: 'Centralised document registers with revision control, transmittals, and approval workflows, so teams work from one controlled source instead of email attachments.',
      imageSrc:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Project document control and collaboration',
    },
    {
      title: 'Cost Management',
      desc: 'Budget baselines, commitments, change orders, and actuals tracked against project WBS, with integration to Oracle Financials for enterprise reporting.',
      imageSrc:
        'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Project cost management and budgeting',
    },
    {
      title: 'Portfolio & Reporting',
      desc: 'Programme-level dashboards across multiple capital projects, status, risk, and spend visibility for executives and PMOs without manual consolidation.',
      imageSrc:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Portfolio management dashboard',
    },
  ],
  processTitle: 'Our Unifier delivery process',
  processIntro:
    'A structured six-stage approach for Oracle Unifier, from governance design through go-live and adoption.',
  processSteps: [
    {
      number: '01',
      title: 'Discover',
      description:
        'Project governance review, current tool assessment, and Unifier fit analysis.',
    },
    {
      number: '02',
      title: 'Design',
      description:
        'Shell structure, workflows, document numbering, and integration architecture.',
    },
    {
      number: '03',
      title: 'Configure',
      description:
        'Iterative Unifier build with project team validation at each milestone.',
    },
    {
      number: '04',
      title: 'Test',
      description:
        'End-to-end workflow testing, document transmittals, cost workflows, and reporting.',
    },
    {
      number: '05',
      title: 'Deploy',
      description:
        'Phased rollout across project teams with training and hypercare support.',
    },
    {
      number: '06',
      title: 'Adopt',
      description:
        'Usage monitoring, workflow refinement, and transition to managed support.',
    },
  ],
  comparisonTitle: 'Point tools vs. MPC Oracle Unifier',
  comparisonIntro:
    'What project organisations typically encounter when comparing disconnected tools against a unified Oracle Unifier platform.',
  comparisonRows: [
    {
      criterion: 'Document control',
      values: [
        'Email and shared drives',
        'Controlled registers with audit trail',
      ],
    },
    {
      criterion: 'Cost visibility',
      values: [
        'Spreadsheets updated weekly',
        'Real-time budget vs. Actual on Unifier',
      ],
    },
    {
      criterion: 'Portfolio view',
      values: [
        'Manual consolidation across projects',
        'Programme dashboards from one platform',
      ],
    },
    {
      criterion: 'ERP integration',
      values: [
        'Manual journal entries',
        'Structured flows to Oracle Financials',
      ],
    },
    {
      criterion: 'Ongoing support',
      values: [
        'Internal admin without Oracle depth',
        'Managed Unifier support from MPC',
      ],
    },
  ],
  related: [
    {
      icon: Database,
      title: 'Oracle Fusion ERP',
      description:
        'Project financials and procurement integrated with Unifier cost data.',
      to: SOLUTION_ERP,
    },
    {
      icon: Workflow,
      title: 'Oracle EPM',
      description:
        'Capital planning and portfolio financial consolidation on Oracle EPM.',
      to: SOLUTION_EPM,
    },
    {
      icon: Activity,
      title: 'Tech',
      description:
        'Managed Oracle support, upgrades, and Unifier optimisation.',
      to: SOLUTION_TECH,
    },
  ],
  faqs: [
    {
      q: 'Who uses Oracle Unifier?',
      a: 'Capital project owners, contractors, and PMOs in real estate, infrastructure, energy, and public sector, anywhere document control and cost management must be auditable.',
    },
    {
      q: 'Does Unifier integrate with Primavera?',
      a: 'Yes. MPC configures integrations between Oracle Unifier and Primavera P6 for schedule and cost alignment.',
    },
    {
      q: 'Can Unifier connect to Oracle ERP?',
      a: 'Yes. We integrate Unifier cost and commitment data with Oracle Fusion Financials and EBS for enterprise reporting.',
    },
    {
      q: 'Do you support existing Unifier environments?',
      a: 'Yes. We provide health checks, workflow optimisation, upgrades, and managed support for live Unifier estates.',
    },
  ],
  faqTitle: 'Oracle Unifier. Frequently Asked Questions',
  ctaTitle: 'Schedule an Unifier',
  ctaTitleAccent: 'Discovery Call',
  ctaBody:
    'Tell us about your capital project challenges. We\'ll show you how Oracle Unifier can unify document control, cost, and portfolio delivery.',
  ctaText: 'Book a Call',
};

export function Unifier() {
  return <OracleSolutionLayout config={CONFIG} />;
}
