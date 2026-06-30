import React from 'react';
import { Landmark, TrendingUp, Wallet } from 'lucide-react';
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
  canonicalPath: SOLUTION_TREASURY_OPERATIONS,
  breadcrumbLabel: 'All Aspects of Treasury Management',
  parentService: TREASURY_PARENT,
  seoTitle: 'Treasury Operations — Cash, FX, Trade Finance & Risk | MPC',
  seoDescription:
    'MPC delivers end-to-end treasury management — cash and liquidity, payments, investments, currency risk, trade finance, debt, supply chain finance, and commodity risk.',
  serviceType: 'Treasury Operations Services',
  serviceDescription:
    'Comprehensive treasury management across cash, payments, investments, FX, trade finance, debt, supply chain finance, and commodity risk on IBS Fintech.',
  heroEyebrow: 'Treasury Management · Operations',
  heroHeadline: 'Every aspect of',
  heroHeadlineAccent: 'treasury management',
  heroSubhead:
    'Cash and liquidity, payments, investments, currency and commodity risk, trade finance, debt, and supply chain finance — unified on IBS Fintech.',
  heroCtaText: 'Talk to Our Treasury Team',
  heroImageSrc:
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2400&auto=format&fit=crop',
  whatIsTitle: 'What are all aspects of treasury management?',
  whatIsBody:
    'Enterprise treasury spans far beyond cash balances — it includes liquidity forecasting, payment operations, investment portfolios, FX and commodity hedging, trade finance instruments, debt facilities, and supply chain finance. MPC delivers all eight capability areas on the IBS Fintech platform.',
  whatIsImageSrc:
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop',
  whatIsImageAlt: 'Treasury operations and financial management',
  toc: [
    { label: 'Overview', hash: 'overview' },
    { label: 'Capabilities', hash: 'capabilities' },
    { label: 'Services', hash: 'modules' },
    { label: 'Process', hash: 'process' },
    { label: 'Comparison', hash: 'comparison' },
    { label: 'FAQ', hash: 'faq' },
  ],
  overviewTitle: 'Treasury Operations with MPC',
  overviewParagraphs: [
    'Treasury teams need end-to-end coverage — from daily cash visibility and payment execution to complex derivatives, trade finance, and commodity hedging programmes.',
    'MPC implements and supports all aspects of treasury management on IBS Fintech — eight integrated modules with IFRS-9 hedge accounting, valuation engines, and analytical insights.',
  ],
  moduleChips: [
    'Cash & Liquidity',
    'Payments',
    'Investments',
    'Currency Risk',
    'Trade Finance',
    'Debt Management',
    'Supply Chain Finance',
    'Commodity Risk',
  ],
  capabilitiesTitle: 'Our Treasury Management Capabilities',
  capabilities: [
    {
      title: 'Cash & Liquidity Management',
      body: 'Cash visibility, forecasting vs actual analysis, and bank statement reconciliation across entities.',
    },
    {
      title: 'Payments',
      body: 'Bank account maintenance, MFU payments, inter-company and inter-bank transfers with approval workflows.',
    },
    {
      title: 'Investment Management',
      body: 'Term deposits, bonds, mutual funds, CP, T-bills, equity, PMS, MLD, preference shares, and alternate investments.',
    },
    {
      title: 'Currency Risk Management',
      body: 'Forwards, futures, options, swaps with IFRS-9 hedge accounting and valuation engine.',
    },
    {
      title: 'Trade Finance Management',
      body: 'Import/export LC, BC, SC processes, bank guarantees — both inwards and outwards.',
    },
    {
      title: 'Debt & Supply Chain Finance',
      body: 'Market and bank borrowings, inter-company loans, and full AP/AR supply chain finance lifecycle.',
    },
  ],
  modulesSectionTitle: 'Treasury modules we deliver',
  modulesSectionSubtitle:
    'Eight integrated capability areas on the IBS Fintech platform.',
  modules: [
    {
      title: 'Cash, Payments & Investments',
      desc: 'Cash visibility and forecasting, payment operations, and money-market investment management across all asset classes.',
      imageSrc:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Cash liquidity and investment management',
    },
    {
      title: 'FX & Commodity Risk',
      desc: 'Currency derivatives with IFRS-9 hedge accounting, commodity exposure management, and complete futures and options hedge cycles.',
      imageSrc:
        'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Currency and commodity risk management',
    },
    {
      title: 'Trade Finance & Debt',
      desc: 'Import/export trade finance, bank guarantees, market borrowings, bank facilities, and supply chain finance with analytical insights.',
      imageSrc:
        'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Trade finance and debt management',
    },
  ],
  processTitle: 'Our treasury operations delivery process',
  processIntro:
    'A module-by-module approach to implementing treasury capabilities on IBS Fintech.',
  processSteps: [
    { number: '01', title: 'Assess', description: 'Treasury maturity review, module prioritisation, and gap analysis against current processes.' },
    { number: '02', title: 'Design', description: 'Process design per module — cash, payments, FX, trade finance — aligned to controls and compliance.' },
    { number: '03', title: 'Implement', description: 'Module configuration, workflow setup, and integration with ERP and banking partners.' },
    { number: '04', title: 'Validate', description: 'Parallel runs, reconciliation testing, and hedge accounting validation.' },
    { number: '05', title: 'Go-Live', description: 'Phased module rollout with treasury team enablement and hypercare support.' },
    { number: '06', title: 'Optimise', description: 'Continuous improvement, reporting enhancements, and additional module adoption.' },
  ],
  comparisonTitle: 'Point solutions vs. MPC Treasury',
  comparisonIntro:
    'What treasury teams typically experience when comparing fragmented tools against MPC\'s integrated treasury practice.',
  comparisonRows: [
    { criterion: 'Module coverage', values: ['Cash-only or FX-only tools', 'All 8 treasury modules on one platform'] },
    { criterion: 'Hedge accounting', values: ['Manual spreadsheets', 'IFRS-9 hedge accounting and valuation engine'] },
    { criterion: 'Trade finance', values: ['Offline LC/BG tracking', 'End-to-end import/export and guarantee management'] },
    { criterion: 'Commodity risk', values: ['Not supported', 'Agri, metal, precious metal with full hedge cycle'] },
    { criterion: 'Insights', values: ['Static reports', 'Digitised workflows with analytical insights'] },
  ],
  related: [
    {
      icon: Wallet,
      title: 'IBS Fintech',
      description: 'The treasury technology platform powering all capability modules.',
      to: SOLUTION_IBS_FINTECH,
    },
    {
      icon: TrendingUp,
      title: 'Oracle Fusion ERP',
      description: 'Financials and treasury integration with Oracle ERP Cloud.',
      to: SOLUTION_ERP,
    },
    {
      icon: Landmark,
      title: 'Treasury Management',
      description: 'Return to the full Treasury Management service overview.',
      to: SERVICE_TREASURY,
    },
  ],
  faqs: [
    {
      q: 'Which treasury modules does the platform cover?',
      a: 'Eight modules: Cash & Liquidity, Payments, Investment Management, Currency Risk, Trade Finance, Debt Management, Supply Chain Finance, and Commodity Risk Management.',
    },
    {
      q: 'Does the platform support hedge accounting?',
      a: 'Yes. Currency risk management includes IFRS-9 hedge accounting and a built-in valuation engine for derivatives.',
    },
    {
      q: 'Can we implement modules in phases?',
      a: 'Yes. Most clients start with cash and payments, then expand to FX, trade finance, and commodity risk in phased rollouts.',
    },
    {
      q: 'Does supply chain finance cover AP and AR?',
      a: 'Yes. Supply chain finance covers the entire lifecycle including accounts payable and receivable with digitised process flows and analytical insights.',
    },
  ],
  faqTitle: 'Treasury Operations — Frequently Asked Questions',
  ctaTitle: 'Unify your',
  ctaTitleAccent: 'Treasury Operations',
  ctaBody:
    'Tell us which treasury modules you need. We\'ll design an implementation roadmap on IBS Fintech.',
  ctaText: 'Talk to MPC',
};

export function TreasuryOperations() {
  return <OracleSolutionLayout config={CONFIG} />;
}
