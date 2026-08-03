import React from 'react';
import { Bot, FileSearch, Users } from 'lucide-react';
import {
  OracleSolutionLayout,
  type OracleSolutionPageConfig,
} from '../../components/layout/OracleSolutionLayout';
import {
  SERVICE_AI_COE,
  SOLUTION_CV_SCREENING_AGENT,
  SOLUTION_HCM,
  SOLUTION_HR_ONBOARDING_ASSISTANT,
} from '../../data/paths';

const AI_COE_PARENT = {
  label: 'AI CoE',
  to: SERVICE_AI_COE,
};

const CONFIG: OracleSolutionPageConfig = {
  canonicalPath: SOLUTION_HR_ONBOARDING_ASSISTANT,
  breadcrumbLabel: 'HR Onboarding Assistant',
  parentService: AI_COE_PARENT,
  seoTitle:
    'HR Onboarding Assistant — Oracle Fusion HCM Journey AI Agent | MPC',
  seoDescription:
    'MPC HR Onboarding Assistant is built into Oracle Fusion Cloud HCM via AI Agent Studio — identifies journey tasks needing confirmation and updates status on verified criteria for HR Specialists and Shared Services.',
  serviceType: 'HR Onboarding Assistant — AI Agent',
  serviceDescription:
    'An intelligent agent that identifies onboarding journey tasks requiring manual confirmation and performs status updates based on verified criteria — native on Oracle AI Agent Studio and Fusion Cloud HCM.',
  heroEyebrow: 'AI CoE · Out-of-Box AI Solution',
  heroHeadline: 'Introducing the MPC',
  heroHeadlineAccent: 'HR Onboarding Assistant',
  heroSubhead:
    'Built for HR Specialists, HR Coordinators, and Shared Services Administrators — built-in on Oracle Fusion Cloud HCM, not bolted on.',
  heroCtaText: 'Talk to Our AI CoE Team',
  heroImageSrc:
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2400&auto=format&fit=crop',
  whatIsTitle: 'What is the MPC HR Onboarding Assistant?',
  whatIsBody:
    'The MPC HR Onboarding Assistant is an intelligent agent that identifies relevant journey tasks requiring manual confirmation and performs status updates based on verified criteria. It runs natively on Oracle AI Agent Studio atop Oracle Fusion Cloud HCM infrastructure — inheriting HR Specialist RBAC, with real-time access to new hire and journey data on a single data model.',
  whatIsImageSrc:
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop',
  whatIsImageAlt: 'HR team welcoming new hires during onboarding',
  toc: [
    { label: 'Overview', hash: 'overview' },
    { label: 'Capabilities', hash: 'capabilities' },
    { label: 'Modules', hash: 'modules' },
    { label: 'Process', hash: 'process' },
    { label: 'Comparison', hash: 'comparison' },
    { label: 'FAQ', hash: 'faq' },
  ],
  overviewTitle: 'Built-in, not bolted on',
  overviewParagraphs: [
    'HR teams are overwhelmed by the manual effort required to mark onboarding tasks as Complete for multiple new joiners. During bulk hiring waves, that work leads to delays and data inconsistency.',
    'The assistant sits on Oracle AI Agent Studio above Fusion Cloud HCM infrastructure — unified security (inherits HR Specialist RBAC), zero latency to new hire and journey data, and data integrity via a single data model with no complex API mapping.',
  ],
  moduleChips: [
    'Journey tasks',
    'New hire data',
    'Bulk onboarding',
    'AI Agent Studio',
    'Fusion HCM RBAC',
  ],
  capabilitiesTitle: 'Problem, Solution & Key Value Drivers',
  capabilities: [
    {
      title: 'The Problem',
      body: 'HR teams are overwhelmed by the manual effort required to mark onboarding tasks as Complete for multiple new joiners — leading to delays and data inconsistency during bulk hiring waves.',
    },
    {
      title: 'The Solution',
      body: 'The MPC HR Onboarding Assistant identifies relevant tasks requiring manual confirmation and performs status updates on journey tasks based on verified criteria — native to Fusion HCM.',
    },
    {
      title: 'Efficiency',
      body: 'Drastic reduction in manual clicks and admin hours across onboarding journeys.',
    },
    {
      title: 'Velocity',
      body: 'Accelerates time-to-productivity for new hires by clearing confirmations faster.',
    },
    {
      title: 'Accuracy',
      body: 'Eliminates human error and ensures consistent audit trails on journey completions.',
    },
    {
      title: 'Unified Security',
      body: 'Inherits RBAC of the HR Specialist — no new security holes from bolted-on tools.',
    },
    {
      title: 'Zero Latency',
      body: 'Real-time access to new hire and journey data inside Fusion Cloud HCM.',
    },
    {
      title: 'Data Integrity',
      body: 'Single data model — no complex API mapping between disconnected systems.',
    },
  ],
  modulesSectionTitle: 'From manual Complete clicks to native HCM automation',
  modulesSectionSubtitle:
    'Where bulk onboarding breaks down — and how a built-in agent on AI Agent Studio changes the outcome.',
  modules: [
    {
      title: 'Manual Complete overhead',
      desc: 'Marking journey tasks Complete one-by-one across many new joiners burns specialist time and invites missed updates.',
      imageSrc:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'HR administrator updating onboarding task status',
    },
    {
      title: 'Bulk hiring waves',
      desc: 'High-volume starts amplify delays and inconsistent task status — the agent identifies confirmation-ready tasks and updates on verified criteria.',
      imageSrc:
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Group of new hires during bulk onboarding',
    },
    {
      title: 'Built-in Oracle stack',
      desc: 'MPC HR Onboarding Assistant → Oracle AI Agent Studio → Fusion Cloud HCM — RBAC inheritance, real-time journey data, single data model.',
      imageSrc:
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Enterprise cloud platform and integration architecture',
    },
  ],
  processTitle: 'From pending confirmation to audit-ready completion',
  processIntro:
    'A controlled loop — detect, verify, update, and leave a consistent trail — without leaving Fusion HCM.',
  processSteps: [
    {
      number: '01',
      title: 'Detect',
      description:
        'Identify journey tasks that still require manual confirmation across new hires.',
    },
    {
      number: '02',
      title: 'Verify',
      description:
        'Evaluate verified criteria before any status change — accuracy over blind auto-complete.',
    },
    {
      number: '03',
      title: 'Update',
      description:
        'Perform journey task status updates where criteria are met, reducing admin clicks.',
    },
    {
      number: '04',
      title: 'Audit',
      description:
        'Leave consistent audit trails so Shared Services and HR Specialists stay compliant.',
    },
  ],
  comparisonTitle: 'Bolted-on tools vs. built-in HR Onboarding Assistant',
  comparisonIntro:
    'What HR teams experience when comparing manual Complete clicks or external integrations with a native AI Agent Studio solution on Fusion Cloud HCM.',
  comparisonRows: [
    {
      criterion: 'Admin effort',
      values: [
        'Manual Complete clicks per joiner, especially in bulk waves',
        'Drastic reduction in manual clicks and admin hours',
      ],
    },
    {
      criterion: 'Time-to-productivity',
      values: [
        'Delayed journey progress and inconsistent task status',
        'Faster clearance of confirmations — velocity for new hires',
      ],
    },
    {
      criterion: 'Security',
      values: [
        'New tools introduce new security holes and role models',
        'Inherits HR Specialist RBAC — no new security holes',
      ],
    },
    {
      criterion: 'Data access',
      values: [
        'Latency and mapping across APIs and trackers',
        'Real-time new hire and journey data on a single data model',
      ],
    },
    {
      criterion: 'Audit trail',
      values: [
        'Human error and uneven completion records',
        'Consistent, criteria-based updates with audit integrity',
      ],
    },
  ],
  caseStudy: {
    tag: 'AI CoE · HCM',
    headline:
      'Cut onboarding admin clicks — built into Fusion HCM, not bolted on',
    description:
      'HR Specialists and Shared Services teams replacing manual Complete workflows with the MPC HR Onboarding Assistant gain criteria-based journey updates, inherited RBAC, and real-time access to new hire data on Oracle AI Agent Studio.',
    metadata: 'HR Specialists · Journey tasks · Fusion Cloud HCM · AI Agent Studio',
    imageSrc:
      'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'HR shared services team managing onboarding journeys',
    stat: 'Built-in',
    statLabel: 'On Fusion HCM',
    statContext:
      'Efficiency, velocity, and accuracy — fewer admin clicks, faster time-to-productivity, consistent audit trails.',
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
        'Oracle HCM Cloud — journeys, new hire processes, and the platform this assistant runs on.',
      to: SOLUTION_HCM,
    },
    {
      icon: FileSearch,
      title: 'CV Screening Agent',
      description:
        'Companion talent agent — JD-based resume fitment and recruiter shortlist summaries.',
      to: SOLUTION_CV_SCREENING_AGENT,
    },
  ],
  faqs: [
    {
      q: 'Who is the HR Onboarding Assistant for?',
      a: 'HR Specialists, HR Coordinators, and Shared Services Administrators who manage onboarding journey task completion — especially during bulk hiring waves.',
    },
    {
      q: 'How do journey task updates work?',
      a: 'The agent identifies tasks that still need manual confirmation and updates status only when verified criteria are met — reducing clicks while protecting accuracy and audit trails.',
    },
    {
      q: 'How does security work?',
      a: 'It is built-in on Oracle AI Agent Studio and Fusion Cloud HCM infrastructure, inheriting the HR Specialist RBAC model — no new security holes from bolted-on tools.',
    },
    {
      q: 'How is this different from an external onboarding bot?',
      a: 'Native integration means real-time new hire and journey data on a single data model — no complex API mapping, and zero-latency access inside Fusion HCM.',
    },
    {
      q: 'How quickly can we deploy it?',
      a: 'As an Out-of-Box AI Solution from MPC\'s AI CoE, focused deployments on AI Agent Studio typically start in days, then expand across journey templates and Shared Services teams.',
    },
  ],
  faqTitle: 'HR Onboarding Assistant — Frequently Asked Questions',
  ctaTitle: 'Onboard faster.',
  ctaTitleAccent: 'Built into HCM.',
  ctaBody:
    'Tell us how your team completes journey tasks today. We\'ll show how the HR Onboarding Assistant detects confirmations, verifies criteria, and updates status — with Fusion HCM security intact.',
  ctaText: 'Talk to Our AI CoE Team',
};

export function HROnboardingAssistant() {
  return <OracleSolutionLayout config={CONFIG} />;
}
