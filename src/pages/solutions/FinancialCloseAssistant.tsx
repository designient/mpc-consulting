import React from 'react';
import { Bot, Database, Receipt } from 'lucide-react';
import {
  OracleSolutionLayout,
  type OracleSolutionPageConfig,
} from '../../components/layout/OracleSolutionLayout';
import {
  SERVICE_AI_COE,
  SOLUTION_ERP,
  SOLUTION_AR_PAYTHREAD,
  SOLUTION_FINANCIAL_CLOSE_ASSISTANT,
} from '../../data/paths';

const AI_COE_PARENT = {
  label: 'AI CoE',
  to: SERVICE_AI_COE,
};

const CONFIG: OracleSolutionPageConfig = {
  canonicalPath: SOLUTION_FINANCIAL_CLOSE_ASSISTANT,
  breadcrumbLabel: 'Financial Close Assistant',
  parentService: AI_COE_PARENT,
  seoTitle:
    'Financial Close Assistant. Oracle Fusion Period Close AI Agent | MPC',
  seoDescription:
    'MPC Financial Close Assistant orchestrates Oracle Fusion period close across GL, AP, AR, FA, Cash Management, and Projects, detect, notify, revalidate, and close.',
  serviceType: 'Financial Close Assistant. AI Agent',
  serviceDescription:
    'An AI agent that actively orchestrates Oracle Fusion period close, detecting pending transactions, triggering corrective actions, revalidating completion, and driving close with required approvals.',
  heroEyebrow: 'AI CoE · Out-of-Box AI Solution',
  heroHeadline: 'Introducing the MPC',
  heroHeadlineAccent: 'Financial Close Assistant',
  heroSubhead:
    'Built for Financial Managers and Controllers, an AI agent that orchestrates Oracle Fusion period close across six critical finance modules, not just reports status.',
  heroCtaText: 'Talk to Our AI CoE Team',
  heroImageSrc:
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2400&auto=format&fit=crop',
  whatIsTitle: 'What is the MPC Financial Close Assistant?',
  whatIsBody:
    'The MPC Financial Close Assistant actively orchestrates the Oracle Fusion period close, not just reports status. It detects pending transactions, triggers corrective actions, revalidates completion, and drives the period close to execution with required approvals. Built for Financial Managers and Financial Controllers who need predictable, milestone-driven close cycles.',
  whatIsImageSrc:
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
  whatIsImageAlt:
    'Finance team reviewing Oracle Fusion period close orchestration',
  toc: [
    { label: 'Overview', hash: 'overview' },
    { label: 'Capabilities', hash: 'capabilities' },
    { label: 'Modules', hash: 'modules' },
    { label: 'Process', hash: 'process' },
    { label: 'Comparison', hash: 'comparison' },
    { label: 'FAQ', hash: 'faq' },
  ],
  overviewTitle: 'Oracle Financial Module Coordination',
  overviewParagraphs: [
    'Period close fails when six critical Oracle Financial modules. General Ledger, Accounts Payable, Accounts Receivable, Fixed Assets, Cash Management, and Projects, cannot coordinate seamlessly. Sequential dependencies, multiple stakeholders, time-zone handoffs, and error propagation turn close into reactive firefighting.',
    'Manual close means running validation reports per module, chasing stakeholders by email and phone, tracking status in spreadsheets, and executing close in a brittle defined order. The Financial Close Assistant replaces that chain with continuous detection, guided action, and automated re-validation.',
  ],
  moduleChips: [
    'General Ledger',
    'Accounts Payable',
    'Accounts Receivable',
    'Fixed Assets',
    'Cash Management',
    'Projects',
  ],
  capabilitiesTitle: 'Problem, Solution & Key Value Drivers',
  capabilities: [
    {
      title: 'The Problem',
      body: 'Finance teams struggle with limited real-time visibility into pending journals and reconciliation exceptions, high dependency on manual coordination across subledgers, no automated re-validation after corrections, and fragmented spreadsheet tracking that delays close management.',
    },
    {
      title: 'The Solution',
      body: 'The MPC Financial Close Assistant orchestrates Oracle Fusion period close end-to-end, detecting pending transactions, triggering corrective actions, revalidating completion, and driving close execution with required approvals.',
    },
    {
      title: 'Predictability',
      body: 'Transforms close from reactive firefighting to controlled, milestone-driven execution with clear readiness signals across modules.',
    },
    {
      title: 'Efficiency',
      body: 'Minimises manual effort and dependency on emails, calls, and trackers, so finance teams focus on exceptions that matter.',
    },
    {
      title: 'Automation',
      body: 'Continuously validates and re-validates exceptions until resolution, no more one-shot checks that go stale after a correction.',
    },
    {
      title: 'Control',
      body: 'Offers unified visibility across GL, AP, AR, FA, Cash Management, and Projects so Controllers see the full close picture in one place.',
    },
  ],
  modulesSectionTitle: 'Six modules that must close together',
  modulesSectionSubtitle:
    'Complex dependencies across Oracle Financial modules, each with its own steps, coordination needs, and failure modes.',
  modules: [
    {
      title: 'General Ledger',
      desc: 'Post journals, reconcile accounts, close periods. Depends on all subledgers, challenged by unposted journals and reconciliation delays.',
      imageSrc:
        'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'General Ledger period close and reconciliation',
    },
    {
      title: 'Accounts Payable',
      desc: 'Invoice validation, payment processing, period close. Feeds GL and depends on PO, challenged by pending invoices and unaccounted invoices.',
      imageSrc:
        'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Accounts Payable invoice and payment processing',
    },
    {
      title: 'Accounts Receivable',
      desc: 'Transactions, receipt application, dispute resolution, period close. Feeds GL and customer data, challenged by unaccounted transactions and unapplied receipts.',
      imageSrc:
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Accounts Receivable transactions and receipts',
    },
    {
      title: 'Fixed Assets',
      desc: 'Asset additions, depreciation, period close. Feeds GL and links to AP for additions, challenged by depreciation errors and pending asset additions.',
      imageSrc:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Fixed Assets and depreciation management',
    },
    {
      title: 'Cash Management',
      desc: 'Bank reconciliation, statement processing, period close. Feeds GL and bank data, challenged by reconciliation delays and statement errors.',
      imageSrc:
        'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Cash Management and bank reconciliation',
    },
    {
      title: 'Projects',
      desc: 'Cost collection, revenue recognition, period close. Feeds GL and links to AP, AR, and FA, challenged by cost collection and revenue recognition issues.',
      imageSrc:
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Projects cost collection and revenue recognition',
    },
  ],
  processTitle: 'From days of manual chase to hours of orchestrated close',
  processIntro:
    'A proactive AI agent cycle, detect, notify, re-check, and close, instead of an 8–10 day reactive sequence.',
  processSteps: [
    {
      number: '01',
      title: 'Detect',
      description:
        'Hour 0. Agent continuously scans all modules 24/7 and identifies issues in real time before they become critical.',
    },
    {
      number: '02',
      title: 'Notify & Act',
      description:
        'Hour 1–2. Auto-notify stakeholders and assign tasks. Users resolve issues with guided workflows.',
    },
    {
      number: '03',
      title: 'Re-check',
      description:
        'Hour 3–24. Agent automatically re-validates completed tasks and confirms all prerequisites are met.',
    },
    {
      number: '04',
      title: 'Close',
      description:
        'Hour 25–26. Confirm readiness, trigger period close, and execute the close sequence with required approvals.',
    },
  ],
  comparisonTitle: 'Manual close vs. Financial Close Assistant',
  comparisonIntro:
    'Revolutionary transformation from manual processes to intelligent automation, reactive multi-day close versus proactive agent-led execution.',
  comparisonRows: [
    {
      criterion: 'Close time',
      values: ['8–10 days average', '26 hours total close time'],
    },
    {
      criterion: 'Manual effort',
      values: ['~40 hours per month', '~6 hours per month'],
    },
    {
      criterion: 'Error rate',
      values: ['15–20%', '<2%'],
    },
    {
      criterion: 'Visibility',
      values: [
        'Spreadsheet trackers and email status',
        'Unified real-time readiness across GL, AP, AR, FA, CM, Projects',
      ],
    },
    {
      criterion: 'Coordination',
      values: [
        'Email/call stakeholders; chase approvers manually',
        'Auto-notify, assign tasks, and guided resolution',
      ],
    },
    {
      criterion: 'Re-validation',
      values: [
        'One-shot reports that go stale after corrections',
        'Continuous detect → act → re-check until ready',
      ],
    },
  ],
  caseStudy: {
    tag: 'AI CoE · Financial Close',
    headline:
      'Cut Oracle Fusion period close from multi-day firefighting to a 26-hour orchestrated cycle',
    description:
      'Finance teams replacing spreadsheet trackers and manual module coordination with the MPC Financial Close Assistant gain continuous exception detection, guided remediation, and automated re-validation through close execution.',
    metadata: 'Oracle Fusion · GL · AP · AR · FA · CM · Projects',
    imageSrc:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Financial close dashboard and orchestration metrics',
    stat: '26 hrs',
    statLabel: 'Total close time',
    statContext:
      'Versus 8–10 days average, with ~6 hours manual effort per month and under 2% error rate.',
  },
  related: [
    {
      icon: Bot,
      title: 'AI CoE',
      description:
        'Return to MPC\'s AI Centre of Excellence. Agentic Studio, custom agents, and out-of-box solutions.',
      to: SERVICE_AI_COE,
    },
    {
      icon: Database,
      title: 'ERP (Oracle Cloud)',
      description:
        'Oracle Fusion and EBS financials, the systems the Close Assistant orchestrates.',
      to: SOLUTION_ERP,
    },
    {
      icon: Receipt,
      title: 'AR PayThread',
      description:
        'Companion AR agent that matches payment emails to invoices and issues branded receipts automatically.',
      to: SOLUTION_AR_PAYTHREAD,
    },
  ],
  faqs: [
    {
      q: 'Which Oracle Fusion modules does the Financial Close Assistant cover?',
      a: 'Six critical finance modules: General Ledger, Accounts Payable, Accounts Receivable, Fixed Assets, Cash Management, and Projects, coordinating dependencies across the close sequence.',
    },
    {
      q: 'How is this different from a status dashboard?',
      a: 'The agent actively orchestrates close, detecting pending transactions, triggering corrective actions, revalidating after corrections, and driving period close with approvals. It does not only report status.',
    },
    {
      q: 'Who is the target audience?',
      a: 'Financial Managers and Financial Controllers responsible for Oracle Fusion period close across subledgers and GL.',
    },
    {
      q: 'How quickly can we deploy the Financial Close Assistant?',
      a: 'As an Out-of-Box AI Solution from MPC\'s AI CoE, typical deployments start in days for a focused module set, then expand across the full close scope with your finance operating model.',
    },
    {
      q: 'Does it replace our existing close checklist?',
      a: 'It replaces fragmented spreadsheet tracking and manual chase with continuous validation and guided workflows, while preserving your required close sequence and approval controls.',
    },
  ],
  faqTitle: 'Financial Close Assistant. Frequently Asked Questions',
  ctaTitle: 'Orchestrate your next',
  ctaTitleAccent: 'period close',
  ctaBody:
    'Tell us how your Oracle Fusion close works today. We\'ll show how the Financial Close Assistant detects, notifies, revalidates, and closes, with your approvals intact.',
  ctaText: 'Talk to Our AI CoE Team',
};

export function FinancialCloseAssistant() {
  return <OracleSolutionLayout config={CONFIG} />;
}
