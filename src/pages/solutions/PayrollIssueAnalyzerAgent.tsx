import React from 'react';
import { Bot, ClipboardCheck, Users } from 'lucide-react';
import {
  OracleSolutionLayout,
  type OracleSolutionPageConfig,
} from '../../components/layout/OracleSolutionLayout';
import {
  SERVICE_AI_COE,
  SOLUTION_HCM,
  SOLUTION_HR_ONBOARDING_ASSISTANT,
  SOLUTION_PAYROLL_ISSUE_ANALYZER,
} from '../../data/paths';

const AI_COE_PARENT = {
  label: 'AI CoE',
  to: SERVICE_AI_COE,
};

const CONFIG: OracleSolutionPageConfig = {
  canonicalPath: SOLUTION_PAYROLL_ISSUE_ANALYZER,
  breadcrumbLabel: 'Payroll Issue Analyzer Agent',
  parentService: AI_COE_PARENT,
  seoTitle:
    'Payroll Issue Analyzer Agent — Pre-Payroll Data Gap Detection | MPC',
  seoDescription:
    'MPC Payroll Issue Analyzer identifies missing critical employee data — Date of Birth, bank details, national ID, and payroll fields — before payroll processing for HR Specialists and Payroll teams.',
  serviceType: 'Payroll Issue Analyzer Agent — AI Agent',
  serviceDescription:
    'An AI agent that identifies missing critical employee data such as Date of Birth, bank account details, national ID, and payroll-related information before payroll processing — extensible to any payroll and legislation.',
  heroEyebrow: 'AI CoE · Out-of-Box AI Solution',
  heroHeadline: 'Introducing the',
  heroHeadlineAccent: 'Payroll Issue Analyzer Agent',
  heroSubhead:
    'Built for HR Specialists, Payroll Managers, and Payroll Administrators — detect critical data gaps before the payroll run, not after.',
  heroCtaText: 'Talk to Our AI CoE Team',
  heroImageSrc:
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2400&auto=format&fit=crop',
  whatIsTitle: 'What is the MPC Payroll Issue Analyzer?',
  whatIsBody:
    'The MPC Payroll Issue Analyzer identifies missing critical employee data such as Date of Birth, bank account details, national ID, and payroll-related information, helping teams quickly detect gaps before payroll processing. It can be extended to support any payroll, any legislation, and tailored to specific business requirements.',
  whatIsImageSrc:
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
  whatIsImageAlt: 'Payroll team reviewing employee data readiness',
  toc: [
    { label: 'Overview', hash: 'overview' },
    { label: 'Capabilities', hash: 'capabilities' },
    { label: 'Modules', hash: 'modules' },
    { label: 'Process', hash: 'process' },
    { label: 'Comparison', hash: 'comparison' },
    { label: 'FAQ', hash: 'faq' },
  ],
  overviewTitle: 'Payroll readiness before the cycle closes',
  overviewParagraphs: [
    'Payroll teams deal with high volumes of emails, spreadsheets, and manual validations. Critical data gaps — bank details, statutory info, and more — are often identified late in the cycle, when fixes are costly and stressful.',
    'Manual checks are time-consuming, error-prone, and difficult to scale. The Payroll Issue Analyzer surfaces missing fields early so HR Specialists and Payroll Administrators can remediate before processing.',
  ],
  moduleChips: [
    'Date of Birth',
    'Bank details',
    'National ID',
    'Statutory info',
    'Payroll readiness',
  ],
  capabilitiesTitle: 'Problem, Solution & Key Value Drivers',
  capabilities: [
    {
      title: 'The Problem',
      body: 'Payroll teams deal with high volumes of emails, spreadsheets, and manual validations. Critical data gaps are often identified late in the cycle. Manual checks are time-consuming, error-prone, and difficult to scale.',
    },
    {
      title: 'The Solution',
      body: 'The MPC Payroll Issue Analyzer identifies missing critical employee data — Date of Birth, bank account details, national ID, and payroll-related information — before payroll processing, and can extend to any payroll, legislation, or business rule set.',
    },
    {
      title: 'Efficiency',
      body: 'Reduction in manual effort by quickly identifying missing employee data before payroll processing.',
    },
    {
      title: 'Compliance',
      body: 'Ensures required employee data is complete, reducing risks related to statutory and payroll validations.',
    },
    {
      title: 'Control',
      body: 'Provides clear visibility into data gaps across the organization, enabling better payroll readiness and oversight.',
    },
  ],
  modulesSectionTitle: 'Where payroll data gaps hurt most',
  modulesSectionSubtitle:
    'From late-cycle surprises to scalable pre-run checks across the fields that block processing.',
  modules: [
    {
      title: 'High-volume manual validation',
      desc: 'Emails and spreadsheets cannot keep pace with headcount. The agent replaces scattershot checks with systematic gap detection.',
      imageSrc:
        'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Manual payroll validation with spreadsheets',
    },
    {
      title: 'Late-cycle data gaps',
      desc: 'Missing bank details, statutory fields, or IDs found at the last minute delay the run. Detect gaps early — before processing.',
      imageSrc:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Payroll calendar and cycle readiness review',
    },
    {
      title: 'Pre-payroll readiness checks',
      desc: 'Scan for Date of Birth, bank accounts, national ID, and payroll-related fields — tailored to legislation and business requirements.',
      imageSrc:
        'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Team confirming payroll data completeness',
    },
  ],
  processTitle: 'From scan to remediate — before the payroll run',
  processIntro:
    'A clear readiness loop so gaps are visible org-wide while there is still time to fix them.',
  processSteps: [
    {
      number: '01',
      title: 'Scan',
      description:
        'Assess employee records for critical payroll and statutory fields ahead of the cycle.',
    },
    {
      number: '02',
      title: 'Flag gaps',
      description:
        'Identify missing Date of Birth, bank details, national ID, and other payroll-related information.',
    },
    {
      number: '03',
      title: 'Surface visibility',
      description:
        'Give Payroll Managers and HR Specialists clear, org-wide visibility into outstanding data gaps.',
    },
    {
      number: '04',
      title: 'Remediate',
      description:
        'Close gaps before processing — reducing late-cycle fire drills and compliance risk.',
    },
  ],
  comparisonTitle: 'Manual payroll checks vs. Payroll Issue Analyzer',
  comparisonIntro:
    'What payroll teams experience when comparing email-and-spreadsheet validation with early, systematic gap detection.',
  comparisonRows: [
    {
      criterion: 'Effort',
      values: [
        'High volumes of emails, spreadsheets, and manual validations',
        'Quick identification of missing employee data before the run',
      ],
    },
    {
      criterion: 'Timing',
      values: [
        'Critical gaps identified late in the cycle',
        'Gaps detected early — before payroll processing',
      ],
    },
    {
      criterion: 'Scale',
      values: [
        'Manual checks that are difficult to scale',
        'Extensible across payrolls, legislations, and business rules',
      ],
    },
    {
      criterion: 'Compliance',
      values: [
        'Incomplete data raises statutory and payroll validation risk',
        'Required fields completeness reduces statutory and payroll risk',
      ],
    },
    {
      criterion: 'Oversight',
      values: [
        'Fragmented view of what is missing where',
        'Clear visibility into data gaps across the organization',
      ],
    },
  ],
  caseStudy: {
    tag: 'AI CoE · Payroll',
    headline:
      'Find missing payroll data before the run — not in the fire drill',
    description:
      'Payroll Managers and HR Specialists replacing late-cycle spreadsheet checks with the MPC Payroll Issue Analyzer gain early visibility into missing DOB, bank, national ID, and statutory fields — for better readiness and oversight.',
    metadata:
      'HR Specialists · Payroll Manager · Payroll Administrator · Data gaps',
    imageSrc:
      'https://images.unsplash.com/photo-1554224154-26032ffc0d62?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Payroll readiness dashboard and employee data checks',
    stat: 'Earlier',
    statLabel: 'Gap detection',
    statContext:
      'Efficiency, compliance, and control — less manual validation, complete required data, org-wide readiness visibility.',
  },
  related: [
    {
      icon: Bot,
      title: 'AI CoE',
      description:
        'Return to MPC\'s AI Centre of Excellence — Agentic Studio, custom agents, and out-of-box solutions.',
      to: SERVICE_AI_COE,
    },
    {
      icon: Users,
      title: 'HCM',
      description:
        'Oracle HCM Cloud — employee master data and payroll-related records this agent checks.',
      to: SOLUTION_HCM,
    },
    {
      icon: ClipboardCheck,
      title: 'HR Onboarding Assistant',
      description:
        'Companion HCM agent for journey task confirmations during new-hire onboarding.',
      to: SOLUTION_HR_ONBOARDING_ASSISTANT,
    },
  ],
  faqs: [
    {
      q: 'Who is the Payroll Issue Analyzer Agent for?',
      a: 'HR Specialists, Payroll Managers, and Payroll Administrators responsible for payroll readiness and employee data completeness before a run.',
    },
    {
      q: 'Which data gaps does it typically find?',
      a: 'Critical fields such as Date of Birth, bank account details, national ID, and other payroll-related or statutory information required before processing.',
    },
    {
      q: 'Can it support different payrolls and legislations?',
      a: 'Yes. It can be extended to support any payroll, any legislation, and tailored to specific business requirements.',
    },
    {
      q: 'When should we run it in the cycle?',
      a: 'Before payroll processing — so missing critical data is detected early, not late in the cycle when fixes are hardest.',
    },
    {
      q: 'How quickly can we deploy it?',
      a: 'As an Out-of-Box AI Solution from MPC\'s AI CoE, focused deployments typically start in days, then expand across entities, legislations, and payroll calendars.',
    },
  ],
  faqTitle: 'Payroll Issue Analyzer Agent — Frequently Asked Questions',
  ctaTitle: 'Close data gaps',
  ctaTitleAccent: 'before the run.',
  ctaBody:
    'Tell us how payroll readiness works today. We\'ll show how the Payroll Issue Analyzer flags missing DOB, bank, national ID, and statutory fields — before processing.',
  ctaText: 'Talk to Our AI CoE Team',
};

export function PayrollIssueAnalyzerAgent() {
  return <OracleSolutionLayout config={CONFIG} />;
}
