import React from 'react';
import { Database, Workflow, Activity } from 'lucide-react';
import {
  OracleSolutionLayout,
  type OracleSolutionPageConfig,
} from '../../components/layout/OracleSolutionLayout';
import {
  SOLUTION_BPC,
  SOLUTION_ERP,
  SOLUTION_EPM,
  SOLUTION_TECH,
} from '../../data/paths';

const CONFIG: OracleSolutionPageConfig = {
  canonicalPath: SOLUTION_EPM,
  breadcrumbLabel: 'Oracle EPM',
  seoTitle: 'Oracle EPM Consulting. Planning & Consolidation | MPC',
  seoDescription:
    'MPC delivers Oracle EPM Cloud, budgeting, forecasting, financial consolidation, and enterprise performance management.',
  serviceType: 'Oracle EPM Consulting',
  serviceDescription:
    'Enterprise Performance Management on Oracle EPM Cloud, budgeting, forecasting, consolidation, and narrative reporting.',
  heroEyebrow: 'Oracle Cloud · EPM',
  heroHeadline: 'Plan, forecast, and consolidate',
  heroHeadlineAccent: 'with Oracle EPM',
  heroSubhead:
    'Budgeting, forecasting, and financial consolidation on Oracle EPM Cloud, for finance teams that need one version of the truth across entities and currencies.',
  heroCtaText: 'Schedule an EPM Discovery Call',
  heroImageSrc:
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2400&auto=format&fit=crop',
  whatIsTitle: 'What is Oracle EPM?',
  whatIsBody:
    'Oracle EPM Cloud is Oracle\'s enterprise performance management platform, covering planning, budgeting, forecasting, financial consolidation, account reconciliation, and narrative reporting. MPC helps CFO teams replace spreadsheet chaos with governed, auditable planning and close processes on Oracle EPM.',
  whatIsImageSrc:
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
  whatIsImageAlt: 'Finance team reviewing planning and consolidation',
  toc: [
    { label: 'Overview', hash: 'overview' },
    { label: 'Capabilities', hash: 'capabilities' },
    { label: 'Modules', hash: 'modules' },
    { label: 'Process', hash: 'process' },
    { label: 'Comparison', hash: 'comparison' },
    { label: 'FAQ', hash: 'faq' },
  ],
  overviewTitle: 'Oracle EPM with MPC',
  overviewParagraphs: [
    'Finance teams spend too much time reconciling spreadsheets instead of analysing performance. Oracle EPM Cloud centralises planning and consolidation, but success depends on chart-of-accounts design, dimension modelling, and close process discipline.',
    'MPC implements Oracle EPM for multi-entity enterprises across India, UAE, Singapore, Australia, and the UK, integrated with Oracle Fusion Financials and EBS where required.',
  ],
  moduleChips: [
    'Planning',
    'Budgeting',
    'Forecasting',
    'Financial Consolidation',
    'Account Reconciliation',
    'Narrative Reporting',
    'Tax Reporting',
    'Profitability',
  ],
  capabilitiesTitle: 'Our EPM Capabilities',
  capabilities: [
    {
      title: 'EPM Strategy & Design',
      body: 'Planning hierarchy design, dimension modelling, and consolidation architecture before build.',
    },
    {
      title: 'Planning Implementation',
      body: 'Budgeting and forecasting on Oracle Planning, driver-based models and rolling forecasts.',
    },
    {
      title: 'Financial Consolidation',
      body: 'Multi-entity, multi-currency consolidation with intercompany eliminations and audit trails.',
    },
    {
      title: 'Account Reconciliation',
      body: 'Automated reconciliation workflows with exception management and compliance controls.',
    },
    {
      title: 'ERP Integration',
      body: 'Seamless data flows between Oracle EPM and Fusion / EBS General Ledger.',
    },
    {
      title: 'Managed Support',
      body: 'Ongoing EPM administration, model updates, and quarterly close support.',
    },
  ],
  modulesSectionTitle: 'Modules we implement',
  modulesSectionSubtitle:
    'Core Oracle EPM pillars where MPC helps finance teams close faster and plan with confidence.',
  modules: [
    {
      title: 'Planning & Budgeting',
      desc: 'Driver-based planning models, workforce planning, and capital planning, configured for how your FP&A team actually forecasts, not how a template assumes you should.',
      imageSrc:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Financial planning and budgeting analysis',
    },
    {
      title: 'Financial Consolidation',
      desc: 'Statutory and management consolidation across entities and currencies, with intercompany matching, eliminations, and journal adjustments built into the close cycle.',
      imageSrc:
        'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Financial consolidation and reporting',
    },
    {
      title: 'Narrative Reporting',
      desc: 'Management and statutory reporting packs generated from governed EPM data, reducing manual assembly and version-control risk before board submissions.',
      imageSrc:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Executive reviewing narrative financial reports',
    },
  ],
  processTitle: 'Our EPM delivery process',
  processIntro:
    'A proven six-stage approach for Oracle EPM implementations, from current-state assessment through hypercare and managed close support.',
  processSteps: [
    {
      number: '01',
      title: 'Assess',
      description:
        'Current planning and close process review, spreadsheet dependency analysis, and EPM fit assessment.',
    },
    {
      number: '02',
      title: 'Design',
      description:
        'Dimension model, planning templates, consolidation rules, and integration design with ERP.',
    },
    {
      number: '03',
      title: 'Build',
      description:
        'Iterative EPM configuration with finance stakeholder review at each milestone.',
    },
    {
      number: '04',
      title: 'Validate',
      description:
        'Parallel planning cycles, consolidation trial runs, and reconciliation testing.',
    },
    {
      number: '05',
      title: 'Go-Live',
      description:
        'First live planning cycle or close on Oracle EPM with command-centre support.',
    },
    {
      number: '06',
      title: 'Hypercare',
      description:
        'Dedicated post-go-live window before transition to managed EPM support.',
    },
  ],
  comparisonTitle: 'Spreadsheets vs. MPC Oracle EPM',
  comparisonIntro:
    'What finance teams typically encounter when comparing spreadsheet-led close processes against a governed Oracle EPM implementation.',
  comparisonRows: [
    {
      criterion: 'Close cycle time',
      values: [
        'Manual consolidation in spreadsheets',
        'Automated consolidation with audit trail on Oracle EPM',
      ],
    },
    {
      criterion: 'Version control',
      values: [
        'Multiple file versions, email chains',
        'Single governed planning and reporting model',
      ],
    },
    {
      criterion: 'Multi-entity complexity',
      values: [
        'Error-prone manual eliminations',
        'Rules-based intercompany and consolidation',
      ],
    },
    {
      criterion: 'ERP integration',
      values: [
        'Manual GL extracts and re-keying',
        'Automated data flows from Fusion / EBS',
      ],
    },
    {
      criterion: 'Ongoing support',
      values: [
        'Internal team maintains brittle models',
        'Managed EPM support from Oracle specialists',
      ],
    },
  ],
  related: [
    {
      icon: Database,
      title: 'Oracle Fusion ERP',
      description:
        'Financials and subledgers integrated with your EPM planning and consolidation.',
      to: SOLUTION_ERP,
    },
    {
      icon: Workflow,
      title: 'Business Process Consulting',
      description:
        'Redesign close and planning processes before your EPM implementation.',
      to: SOLUTION_BPC,
    },
    {
      icon: Activity,
      title: 'Tech',
      description:
        'Managed Oracle support, upgrades, and ongoing EPM optimisation.',
      to: SOLUTION_TECH,
    },
  ],
  faqs: [
    {
      q: 'Can Oracle EPM integrate with our existing ERP?',
      a: 'Yes. MPC integrates Oracle EPM with Oracle Fusion Financials, EBS, and third-party ERPs through FDMEE, Data Management, and OIC.',
    },
    {
      q: 'How long does an Oracle EPM implementation take?',
      a: 'Planning-only deployments typically run 10–14 weeks. Full planning plus consolidation programmes range from 4–8 months depending on entity count and complexity.',
    },
    {
      q: 'Do you migrate from Hyperion or other EPM tools?',
      a: 'Yes. We have experience migrating from on-premise Hyperion and spreadsheet-led processes to Oracle EPM Cloud.',
    },
    {
      q: 'Can MPC support our live EPM environment?',
      a: 'Yes. We provide managed EPM support, model enhancements, and close-cycle assistance post-go-live.',
    },
  ],
  faqTitle: 'Oracle EPM. Frequently Asked Questions',
  ctaTitle: 'Schedule an EPM',
  ctaTitleAccent: 'Discovery Call',
  ctaBody:
    'Tell us about your planning and close challenges. We\'ll show you how Oracle EPM can replace spreadsheet risk with governed finance.',
  ctaText: 'Book a Call',
};

export function EPM() {
  return <OracleSolutionLayout config={CONFIG} />;
}
