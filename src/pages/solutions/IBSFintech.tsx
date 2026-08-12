import React from 'react';
import { Building2, Database, Landmark } from 'lucide-react';
import {
  OracleSolutionLayout,
  type OracleSolutionPageConfig,
} from '../../components/layout/OracleSolutionLayout';
import {
  SERVICE_TREASURY,
  SOLUTION_ERP,
  SOLUTION_IBS_FINTECH,
  SOLUTION_TREASURY_OPERATIONS,
} from '../../data/paths';

const TREASURY_PARENT = {
  label: 'Treasury Management',
  to: SERVICE_TREASURY,
};

const CONFIG: OracleSolutionPageConfig = {
  canonicalPath: SOLUTION_IBS_FINTECH,
  breadcrumbLabel: 'IBS Fintech',
  parentService: TREASURY_PARENT,
  seoTitle: 'IBS Fintech Treasury Tech Platform | MPC',
  seoDescription:
    'IBS Fintech is MPC\'s all-in-one treasury technology platform, multi-company, multi-location, multi-currency, and multi-asset class treasury operations.',
  serviceType: 'IBS Fintech Treasury Platform',
  serviceDescription:
    'All-in-one treasury tech platform supporting multi-company, multi-location, multi-currency, and multi-asset class operations with ERP and market data integrations.',
  heroEyebrow: 'Treasury Management · IBS Fintech',
  heroHeadline: 'The treasury tech',
  heroHeadlineAccent: 'platform built for scale',
  heroSubhead:
    'IBS Fintech unifies treasury operations on one platform, multi-company, multi-location, multi-currency, and multi-asset class, with seamless ERP and market data connectivity.',
  heroCtaText: 'Request a Demo',
  heroImageSrc:
    'https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=2400&auto=format&fit=crop',
  whatIsTitle: 'What is IBS Fintech?',
  whatIsBody:
    'IBS Fintech is MPC\'s treasury technology platform, an all-in-one product that replaces spreadsheets and point solutions with a unified treasury operating environment. Built for complex enterprises that need real-time visibility across cash, risk, investments, and trade finance.',
  whatIsImageSrc:
    'https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1200&auto=format&fit=crop',
  whatIsImageAlt: 'IBS Fintech treasury tech platform',
  toc: [
    { label: 'Overview', hash: 'overview' },
    { label: 'Capabilities', hash: 'capabilities' },
    { label: 'Services', hash: 'modules' },
    { label: 'Process', hash: 'process' },
    { label: 'Comparison', hash: 'comparison' },
    { label: 'FAQ', hash: 'faq' },
  ],
  overviewTitle: 'IBS Fintech with MPC',
  overviewParagraphs: [
    'Treasury teams struggle when data lives in spreadsheets, bank portals, and disconnected systems. IBS Fintech brings cash, payments, investments, FX, trade finance, and risk onto one governed platform.',
    'Modern, personalised, and connected. IBS Fintech supports the full treasury lifecycle with native integrations to ERP, market data providers, and global banks.',
  ],
  moduleChips: [
    'Multi-Company',
    'Multi-Location',
    'Multi-Currency',
    'Multi-Asset Class',
    'ERP Integration',
    'Market Data',
    'Global Banks',
  ],
  capabilitiesTitle: 'Our IBS Fintech Platform Capabilities',
  capabilities: [
    {
      title: 'Multi-Entity Architecture',
      body: 'Multi-company and multi-location treasury operations with consolidated and entity-level reporting.',
    },
    {
      title: 'Multi-Currency Operations',
      body: 'Cross-currency cash visibility, payments, and FX risk management on a single platform.',
    },
    {
      title: 'Multi-Asset Class Support',
      body: 'Money-market investments, derivatives, commodities, and debt instruments in one system.',
    },
    {
      title: 'ERP Integration',
      body: 'Native connectivity with SAP, Oracle, and third-party ERP solutions for seamless data flow.',
    },
    {
      title: 'Market Data & Dealing',
      body: 'Integration with Bloomberg, 360T, LSEG (Refinitiv), and other dealing platforms.',
    },
    {
      title: 'Global Banking Connectivity',
      body: 'Bank statement ingestion, payment execution, and trade finance workflows with global banks.',
    },
  ],
  modulesSectionTitle: 'Platform services we deliver',
  modulesSectionSubtitle:
    'Three pillars of the IBS Fintech treasury technology platform.',
  modules: [
    {
      title: 'Treasury Tech Platform',
      desc: 'Unified platform core supporting multi-company, multi-location, multi-currency, and multi-asset class treasury operations.',
      imageSrc:
        'https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Treasury technology platform',
    },
    {
      title: 'ERP & Data Integration',
      desc: 'Seamless integration with SAP, Oracle, market data providers, and dealing platforms for accurate, timely treasury data.',
      imageSrc:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'ERP and data integration',
    },
    {
      title: 'Global Bank Connectivity',
      desc: 'Connectivity with global banking partners for payments, statements, trade finance, and cash management.',
      imageSrc:
        'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Global banking connectivity',
    },
  ],
  processTitle: 'Our IBS Fintech implementation process',
  processIntro:
    'A structured approach to deploying IBS Fintech across your treasury organisation.',
  processSteps: [
    { number: '01', title: 'Discover', description: 'Treasury process assessment, entity structure mapping, and integration requirements.' },
    { number: '02', title: 'Design', description: 'Platform configuration blueprint, chart of accounts alignment, and bank/ERP connectivity design.' },
    { number: '03', title: 'Configure', description: 'Module setup, user roles, workflows, and approval hierarchies across entities.' },
    { number: '04', title: 'Integrate', description: 'ERP, market data, and banking integrations with reconciliation and validation.' },
    { number: '05', title: 'Deploy', description: 'Phased go-live with treasury team training and parallel run support.' },
    { number: '06', title: 'Support', description: 'Ongoing platform support, enhancements, and treasury operations optimisation.' },
  ],
  comparisonTitle: 'Spreadsheets vs. IBS Fintech',
  comparisonIntro:
    'What treasury teams typically encounter when comparing manual processes against the IBS Fintech platform.',
  comparisonRows: [
    { criterion: 'Data consolidation', values: ['Manual spreadsheet consolidation', 'Real-time multi-entity platform visibility'] },
    { criterion: 'Integration', values: ['Manual ERP and bank data entry', 'Automated ERP, market data, and bank feeds'] },
    { criterion: 'Risk controls', values: ['Offline FX and commodity tracking', 'Built-in risk modules with hedge accounting'] },
    { criterion: 'Scalability', values: ['Single entity limitations', 'Multi-company, multi-currency at scale'] },
    { criterion: 'Audit trail', values: ['Fragmented records', 'Governed workflows with full audit history'] },
  ],
  related: [
    {
      icon: Landmark,
      title: 'All Aspects of Treasury Management',
      description: 'Eight treasury modules, cash, payments, investments, FX, trade finance, and more.',
      to: SOLUTION_TREASURY_OPERATIONS,
    },
    {
      icon: Database,
      title: 'Oracle Fusion ERP',
      description: 'ERP integration for unified financial and treasury operations.',
      to: SOLUTION_ERP,
    },
    {
      icon: Building2,
      title: 'Treasury Management',
      description: 'Return to the full Treasury Management service overview.',
      to: SERVICE_TREASURY,
    },
  ],
  faqs: [
    {
      q: 'What is IBS Fintech?',
      a: 'IBS Fintech is MPC\'s treasury technology platform, an all-in-one product supporting multi-company, multi-location, multi-currency, and multi-asset class treasury operations.',
    },
    {
      q: 'Can IBS Fintech integrate with our ERP?',
      a: 'Yes. The platform integrates seamlessly with SAP, Oracle, and other third-party ERP systems, as well as market data providers like Bloomberg and LSEG (Refinitiv).',
    },
    {
      q: 'Is IBS Fintech suitable for multi-entity groups?',
      a: 'Yes. Multi-company, multi-location, and multi-currency support is core to the platform architecture.',
    },
    {
      q: 'How long does implementation take?',
      a: 'Typical deployments range from 12–24 weeks depending on module scope, entity count, and integration complexity.',
    },
  ],
  faqTitle: 'IBS Fintech. Frequently Asked Questions',
  ctaTitle: 'See IBS Fintech',
  ctaTitleAccent: 'in Action',
  ctaBody:
    'Request a demo to see how IBS Fintech unifies treasury operations across your enterprise.',
  ctaText: 'Request a Demo',
};

export function IBSFintech() {
  return <OracleSolutionLayout config={CONFIG} />;
}
