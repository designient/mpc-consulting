import React from 'react';
import { Bot, ClipboardList, Database } from 'lucide-react';
import {
  OracleSolutionLayout,
  type OracleSolutionPageConfig,
} from '../../components/layout/OracleSolutionLayout';
import {
  SERVICE_AI_COE,
  SOLUTION_ERP,
  SOLUTION_FINANCIAL_CLOSE_ASSISTANT,
  SOLUTION_PO_LIFECYCLE_ANALYZER,
} from '../../data/paths';

const AI_COE_PARENT = {
  label: 'AI CoE',
  to: SERVICE_AI_COE,
};

const CONFIG: OracleSolutionPageConfig = {
  canonicalPath: SOLUTION_PO_LIFECYCLE_ANALYZER,
  breadcrumbLabel: 'Purchase Order Lifecycle Analyzer',
  parentService: AI_COE_PARENT,
  seoTitle:
    'Purchase Order Lifecycle Analyzer — Procurement AI Agent | MPC',
  seoDescription:
    'MPC Purchase Order Lifecycle Analyzer is a virtual procurement assistant for Buyers and Procurement Managers — unified visibility across approvals, fulfillment, receipts, invoices, and supplier performance.',
  serviceType: 'Purchase Order Lifecycle Analyzer — AI Agent',
  serviceDescription:
    'An AI agent that monitors pending approvals, escalates bottlenecks, tracks GRNs and mismatches, and automates follow-ups across the purchase order lifecycle.',
  heroEyebrow: 'AI CoE · Out-of-Box AI Solution',
  heroHeadline: 'Introducing the MPC',
  heroHeadlineAccent: 'Purchase Order Lifecycle Analyzer',
  heroSubhead:
    'Built for Buyers and Procurement Managers — a virtual procurement assistant with unified visibility across approvals, fulfillment, receipts, and supplier performance.',
  heroCtaText: 'Talk to Our AI CoE Team',
  heroImageSrc:
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2400&auto=format&fit=crop',
  whatIsTitle: 'What is the MPC Purchase Order Lifecycle Analyzer?',
  whatIsBody:
    'The Purchase Order Lifecycle Analyzer AI Agent acts as a virtual procurement assistant, delivering unified visibility across approvals, fulfillment, receipts, and supplier performance. It proactively monitors pending approvals, escalates bottlenecks, tracks GRNs and mismatches, and automates follow-ups to ensure faster, insight-driven procurement decisions.',
  whatIsImageSrc:
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
  whatIsImageAlt:
    'Procurement team reviewing purchase order lifecycle status',
  toc: [
    { label: 'Overview', hash: 'overview' },
    { label: 'Capabilities', hash: 'capabilities' },
    { label: 'Modules', hash: 'modules' },
    { label: 'Process', hash: 'process' },
    { label: 'Comparison', hash: 'comparison' },
    { label: 'FAQ', hash: 'faq' },
  ],
  overviewTitle: 'End-to-end PO lifecycle under control',
  overviewParagraphs: [
    'Procurement is constrained by limited visibility into PO status across business units and buyers, approval bottlenecks, hard-to-track receipts and invoices, manual supplier follow-ups, and a lack of actionable insights. Creation and approval alone can add 2–5 days of delay without automated escalation.',
    'Receiving and invoicing compound the problem — opaque receipt tracking, labor-intensive verification, invoice holds from mismatches, and payment status that requires cross-department chasing. The result: +3–7 days average delay, cash-flow disruption risk, damaged supplier trust, and compliance exposure. Integrated PO automation restores real-time visibility.',
  ],
  moduleChips: [
    'Creation',
    'Approvals',
    'Fulfillment',
    'Receiving (GRN)',
    'Invoicing',
    'Payments',
    'Supplier Performance',
  ],
  capabilitiesTitle: 'Problem, Solution & Key Value Drivers',
  capabilities: [
    {
      title: 'The Problem',
      body: 'Procurement processes are constrained by limited PO status visibility across BUs and buyers, approval bottlenecks, difficulty tracking receipts, invoices, and payments, manual follow-ups with suppliers and internal teams, and a lack of actionable insights for decision making.',
    },
    {
      title: 'The Solution',
      body: 'The Purchase Order Lifecycle Analyzer AI Agent acts as a virtual procurement assistant — unified visibility across approvals, fulfillment, receipts, and supplier performance, with proactive monitoring, bottleneck escalation, GRN and mismatch tracking, and automated follow-ups.',
    },
    {
      title: 'Velocity',
      body: 'Reduces overall purchase order cycle time through proactive monitoring and escalation of bottlenecks.',
    },
    {
      title: 'Visibility',
      body: 'Provides unified, end-to-end insight across approvals, fulfillment, receipts, and payments.',
    },
    {
      title: 'Efficiency',
      body: 'Minimises manual follow-ups and cross-team coordination effort across buyers, approvers, and suppliers.',
    },
    {
      title: 'Performance & Intelligence',
      body: 'Improves supplier accountability through delay tracking and performance insights, and enables data-driven procurement decisions with real-time, actionable recommendations.',
    },
  ],
  modulesSectionTitle: 'Challenges across the PO lifecycle',
  modulesSectionSubtitle:
    'From creation and approvals through receiving and invoicing — where delays, visibility gaps, and manual work accumulate.',
  modules: [
    {
      title: 'Creation & Approvals',
      desc: 'Manual ERP data extraction, hard-to-track POs by BU or supplier, pending approval bottlenecks (+35% timeline impact), and no real-time approval visibility (+45% compliance risk). Desired state: automated aggregation, unified dashboards, routing, and escalation.',
      imageSrc:
        'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Purchase order creation and approval workflows',
    },
    {
      title: 'Receiving Challenges',
      desc: 'Receipt tracking lacks transparency; manual verification delays system updates for large PO volumes; inaccurate receipt data delays invoice matching and inventory accuracy — adding +3–7 days average delay.',
      imageSrc:
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Goods receipt and GRN validation',
    },
    {
      title: 'Invoicing Challenges',
      desc: 'Hard to track invoice creation and validation against POs; invoices held for mismatches, missing receipts, or incomplete supplier docs; payment status needs cross-department chase — cash-flow disruption risk.',
      imageSrc:
        'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Invoice validation and payment tracking',
    },
  ],
  processTitle: 'Real-world scenario: analysis and risk detection',
  processIntro:
    'A continuous sense–act–verify cycle that compresses multi-day manual chase into hours.',
  processSteps: [
    {
      number: '01',
      title: 'Detect',
      description:
        'T+0 — Agent flags issues during a real-time scan across the PO lifecycle (e.g. 23 issues detected).',
    },
    {
      number: '02',
      title: 'Notify',
      description:
        'T+2h — Automated alerts sent to stakeholders with assigned ownership (e.g. 8 notifications sent).',
    },
    {
      number: '03',
      title: 'Resolve',
      description:
        'T+24h — Teams resolve assigned issues with guided workflows (e.g. 18 issues resolved).',
    },
    {
      number: '04',
      title: 'Confirm',
      description:
        'T+26h — Agent confirms cycle complete and readiness (e.g. 78% resolution rate in first pass).',
    },
  ],
  comparisonTitle: 'Manual procurement chase vs. PO Lifecycle Analyzer',
  comparisonIntro:
    'From reactive follow-ups and spreadsheet tracking to continuous sensing, acting, and verifying across the PO lifecycle.',
  comparisonRows: [
    {
      criterion: 'Cycle time',
      values: ['3–5 days typical (often 8 days)', '26 hours / ~2 days typical'],
    },
    {
      criterion: 'Time reduction',
      values: ['Manual follow-ups dominate', '60% time reduction (8 → 2 days)'],
    },
    {
      criterion: 'Manual effort',
      values: ['~40 hours per month chasing', '~6 hours per month'],
    },
    {
      criterion: 'Effort reduction',
      values: ['Manual follow-up tasks everywhere', '85% effort reduction'],
    },
    {
      criterion: 'Compliance',
      values: [
        'Limited audit trail; +45% compliance risk when approvals stall',
        '100% compliance tracking with automated validation and audit trails',
      ],
    },
    {
      criterion: 'Visibility',
      values: [
        'Fragmented PO, GRN, and invoice status',
        'Unified end-to-end insight with real-time updates',
      ],
    },
  ],
  caseStudy: {
    tag: 'AI CoE · Procurement',
    headline:
      'Cut PO cycle time from days to hours — 85% less chase, 60% faster close',
    description:
      'Procurement teams replacing manual follow-ups and fragmented trackers with the MPC Purchase Order Lifecycle Analyzer gain continuous exception detection, automated escalation, and end-to-end visibility from approval through payment.',
    metadata: 'Oracle Fusion · PO · GRN · Invoice · Supplier Performance',
    imageSrc:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Procurement analytics and PO lifecycle dashboard',
    stat: '85%',
    statLabel: 'Effort reduction',
    statContext:
      'Elimination of manual follow-up tasks — with 60% time reduction (8 → 2 days) and 100% compliance tracking.',
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
      icon: ClipboardList,
      title: 'Financial Close Assistant',
      description:
        'Companion AI agent that orchestrates Oracle Fusion period close across finance modules.',
      to: SOLUTION_FINANCIAL_CLOSE_ASSISTANT,
    },
    {
      icon: Database,
      title: 'ERP (Oracle Cloud)',
      description:
        'Oracle Fusion procurement and financials — the systems the PO Lifecycle Analyzer monitors.',
      to: SOLUTION_ERP,
    },
  ],
  faqs: [
    {
      q: 'Who is the Purchase Order Lifecycle Analyzer for?',
      a: 'Buyers and Procurement Managers who need end-to-end visibility and faster cycle times across approvals, fulfillment, receipts, invoices, and supplier performance.',
    },
    {
      q: 'Which stages of the PO lifecycle does it cover?',
      a: 'Creation, approvals, fulfillment, receiving (GRN), invoicing, payments, and supplier performance — with continuous monitoring and exception handling across the chain.',
    },
    {
      q: 'How does escalation work for approval bottlenecks?',
      a: 'The agent monitors pending approvals in real time, flags stalls, auto-notifies stakeholders, and supports automated routing and escalation so POs do not sit unattended for days.',
    },
    {
      q: 'How quickly can we deploy it?',
      a: 'As an Out-of-Box AI Solution from MPC\'s AI CoE, focused deployments typically start in days, then expand across BUs and supplier cohorts with your procurement operating model.',
    },
    {
      q: 'Does it replace our ERP procurement module?',
      a: 'No. It orchestrates and monitors the lifecycle on top of Oracle Fusion — unifying status, automating follow-ups, and validating PO–GRN–invoice integrity without replacing core ERP transactions.',
    },
  ],
  faqTitle: 'Purchase Order Lifecycle Analyzer — Frequently Asked Questions',
  ctaTitle: 'Accelerate your',
  ctaTitleAccent: 'PO lifecycle',
  ctaBody:
    'Tell us how procurement runs today. We\'ll show how the Purchase Order Lifecycle Analyzer detects bottlenecks, escalates approvals, and drives faster, insight-led decisions.',
  ctaText: 'Talk to Our AI CoE Team',
};

export function PurchaseOrderLifecycleAnalyzer() {
  return <OracleSolutionLayout config={CONFIG} />;
}
