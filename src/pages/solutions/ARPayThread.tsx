import React from 'react';
import { Bot, Database, Receipt } from 'lucide-react';
import {
  OracleSolutionLayout,
  type OracleSolutionPageConfig,
} from '../../components/layout/OracleSolutionLayout';
import {
  SERVICE_AI_COE,
  SOLUTION_AR_PAYTHREAD,
  SOLUTION_ERP,
  SOLUTION_FINANCIAL_CLOSE_ASSISTANT,
} from '../../data/paths';

const AI_COE_PARENT = {
  label: 'AI CoE',
  to: SERVICE_AI_COE,
};

const CONFIG: OracleSolutionPageConfig = {
  canonicalPath: SOLUTION_AR_PAYTHREAD,
  breadcrumbLabel: 'AR PayThread',
  parentService: AI_COE_PARENT,
  seoTitle: 'AR PayThread. AI Accounts Receivable Reconciliation Agent | MPC',
  seoDescription:
    'MPC AR PayThread reads inbound payment emails, matches them to open invoices, and sends branded PDF receipts automatically, cutting AR handling from 20 to 40 minutes down to seconds.',
  serviceType: 'AR PayThread. AI Agent',
  serviceDescription:
    'An AI agent that reads inbound payment emails in any format, matches them to the right open invoice, issues a branded PDF receipt, and emails it back to the customer without a human in the loop.',
  heroEyebrow: 'AI CoE · Out-of-Box AI Solution',
  heroHeadline: 'From payment email to branded receipt,',
  heroHeadlineAccent: 'automatically',
  heroSubhead:
    'AR PayThread reads every inbound payment email, matches it to the right open invoice, and sends a branded PDF receipt back to the customer, in seconds.',
  heroCtaText: 'Talk to Our AI CoE Team',
  heroImageSrc:
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2400&auto=format&fit=crop',
  whatIsTitle: 'What is MPC AR PayThread?',
  whatIsBody:
    'MPC AR PayThread is an intelligent accounts receivable agent that closes the loop from payment email to branded receipt. It reads inbound mail in natural language, PDFs, and structured tables, scores open invoices on invoice number, amount, currency, and payment date, then auto-issues a branded PDF receipt and emails it back. High-confidence matches run without a human in the loop. Ambiguous or unmatched payments trigger a clarification or diagnostic reply instead.',
  whatIsImageSrc:
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop',
  whatIsImageAlt: 'Accounts receivable team reviewing payment matching',
  toc: [
    { label: 'Overview', hash: 'overview' },
    { label: 'Capabilities', hash: 'capabilities' },
    { label: 'Modules', hash: 'modules' },
    { label: 'Process', hash: 'process' },
    { label: 'Comparison', hash: 'comparison' },
    { label: 'FAQ', hash: 'faq' },
  ],
  overviewTitle: 'Close the AR loop without the copy-paste',
  overviewParagraphs: [
    'The old way is slow and brittle. The AR team opens each payment email by hand, searches spreadsheets or ERP for a matching invoice, then types a receipt or acknowledgement. Errors, delays, and duplicate effort pile up, and customers wait.',
    'AR PayThread replaces that chain with continuous reading, scored matching, and auto-receipt. Typical handling drops from 20 to 40 minutes per email to under 10 seconds, with a full audit trail on every event.',
  ],
  moduleChips: [
    'Email Agent',
    'Match Agent',
    'Decision Engine',
    'Branded receipt',
    'ERP update',
  ],
  capabilitiesTitle: 'Problem, Solution & Key Value Drivers',
  capabilities: [
    {
      title: 'The Problem',
      body: 'AR teams open payment emails manually, hunt for matching invoices, and type receipts by hand. Manual copy-paste drives high error rates, and delayed receipts damage customer trust.',
    },
    {
      title: 'The Solution',
      body: 'AR PayThread reads inbound payment emails in any format, matches them to open invoices with scored confidence, and sends a branded PDF receipt back, updating ERP when confidence is high.',
    },
    {
      title: 'Time saved',
      body: 'Reduces processing from 20 to 40 minutes per payment email to under 10 seconds.',
    },
    {
      title: 'Zero data entry',
      body: 'Eliminates manual copy-paste reconciliation and typing errors entirely.',
    },
    {
      title: 'Audit and trust',
      body: 'Every event is logged for compliance. Instant replies and polite automated clarifications improve the customer experience.',
    },
  ],
  modulesSectionTitle: 'Two agents, one seamless loop',
  modulesSectionSubtitle:
    'From the AR inbox to a branded receipt and ERP update, without a human in the loop on high-confidence matches.',
  modules: [
    {
      title: 'Email Agent',
      desc: 'Reads inbound payment mail from the AR inbox. Extracts payer, amount, currency, and references from natural language, PDFs, and structured tables.',
      imageSrc:
        'https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Payment emails arriving in an accounts receivable inbox',
    },
    {
      title: 'Match Agent',
      desc: 'Scores open invoices for the best match using invoice number, amount, currency, and payment date proximity.',
      imageSrc:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Invoice matching and scoring dashboard',
    },
    {
      title: 'Decision engine and receipt',
      desc: 'High confidence triggers auto-receipt. Ambiguous cases send a clarification. No match sends a diagnostic. The branded PDF is emailed and ERP is updated instantly.',
      imageSrc:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Branded payment receipt and ERP update',
    },
  ],
  processTitle: 'From inbound email to branded receipt',
  processIntro:
    'A closed loop so customers get a receipt in seconds, and AR keeps a full audit trail.',
  processSteps: [
    {
      number: '01',
      title: 'Customer email',
      description:
        'A payment email lands in the AR inbox and enters the agent loop.',
    },
    {
      number: '02',
      title: 'Extract',
      description:
        'The Email Agent pulls payer, amount, currency, and references from any format.',
    },
    {
      number: '03',
      title: 'Match',
      description:
        'The Match Agent scores open invoices for invoice number, amount, currency, and date proximity.',
    },
    {
      number: '04',
      title: 'Decide and reply',
      description:
        'High confidence auto-issues a branded PDF receipt. Ambiguous or unmatched payments get a clarification or diagnostic email. ERP updates on auto-receipt.',
    },
  ],
  comparisonTitle: 'Manual AR vs. AR PayThread',
  comparisonIntro:
    'What AR teams experience when comparing hand-built receipts with an email-to-receipt agent loop.',
  comparisonRows: [
    {
      criterion: 'Handling time',
      values: [
        '20 to 40 minutes of manual work per payment email',
        'Branded receipt emailed in under 10 seconds on a clean match',
      ],
    },
    {
      criterion: 'Matching',
      values: [
        'Search spreadsheets or ERP by hand for the invoice',
        'Scored matching across invoice number, amount, currency, and date',
      ],
    },
    {
      criterion: 'Exceptions',
      values: [
        'Ambiguous or unmatched payments stall in the inbox',
        'Clarification or diagnostic email sent automatically',
      ],
    },
    {
      criterion: 'Errors',
      values: [
        'Copy-paste and typed receipts drive a high error rate',
        'Zero manual data entry on high-confidence matches',
      ],
    },
    {
      criterion: 'Customer experience',
      values: [
        'Delayed receipts frustrate payers and damage trust',
        'Instant replies, polite clarifications, and a branded PDF receipt',
      ],
    },
  ],
  caseStudy: {
    tag: 'AI CoE · Accounts Receivable',
    headline: 'From 20 to 40 minutes per email to a receipt in seconds',
    description:
      'AR teams replacing inbox-and-spreadsheet reconciliation with MPC AR PayThread gain scored invoice matching, branded auto-receipts, and a logged trail on every payment email.',
    metadata: 'AR · Invoice matching · Branded receipt · ERP update',
    imageSrc:
      'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Accounts receivable receipt and invoice matching workflow',
    stat: '< 10s',
    statLabel: 'Clean-match receipt',
    statContext:
      'Time saved, zero data entry, full audit trail, and faster customer trust versus 20 to 40 minutes of manual handling.',
  },
  related: [
    {
      icon: Bot,
      title: 'AI CoE',
      description:
        "Return to MPC's AI Centre of Excellence. Agentic Studio, custom agents, and out-of-box solutions.",
      to: SERVICE_AI_COE,
    },
    {
      icon: Database,
      title: 'ERP (Oracle Cloud)',
      description:
        'Oracle Fusion and EBS financials, the systems AR PayThread matches invoices against and updates on receipt.',
      to: SOLUTION_ERP,
    },
    {
      icon: Receipt,
      title: 'Financial Close Assistant',
      description:
        'Companion finance agent that orchestrates Oracle Fusion period close across AR and other modules.',
      to: SOLUTION_FINANCIAL_CLOSE_ASSISTANT,
    },
  ],
  faqs: [
    {
      q: 'Who is AR PayThread for?',
      a: 'Accounts receivable teams that receive payment advice by email and currently match invoices and issue receipts by hand.',
    },
    {
      q: 'What formats can it read?',
      a: 'Natural language emails, PDFs, and structured tables. The Email Agent extracts payer, amount, currency, and references from all of them.',
    },
    {
      q: 'What happens when the match is not certain?',
      a: 'High-confidence matches trigger auto-receipt. If two candidates look plausible, a clarification email is sent. If nothing matches, a diagnostic email is sent instead of a silent fail.',
    },
    {
      q: 'Does it update ERP?',
      a: 'Yes. On a high-confidence auto-receipt, the branded PDF is emailed to the customer and ERP is updated as part of the same loop.',
    },
    {
      q: 'How quickly can we deploy it?',
      a: "As an Out-of-Box AI Solution from MPC's AI CoE, focused deployments typically start in days, then expand across inboxes, currencies, and AR operating models.",
    },
  ],
  faqTitle: 'AR PayThread. Frequently Asked Questions',
  ctaTitle: 'Close the loop',
  ctaTitleAccent: 'from payment to receipt.',
  ctaBody:
    'Tell us how AR handles payment emails today. We will show how AR PayThread reads, matches, receipts, and updates ERP, with exceptions handled in the open.',
  ctaText: 'Talk to Our AI CoE Team',
};

export function ARPayThread() {
  return <OracleSolutionLayout config={CONFIG} />;
}
