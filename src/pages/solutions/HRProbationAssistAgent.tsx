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
  SOLUTION_HR_PROBATION_ASSIST,
} from '../../data/paths';

const AI_COE_PARENT = {
  label: 'AI CoE',
  to: SERVICE_AI_COE,
};

const CONFIG: OracleSolutionPageConfig = {
  canonicalPath: SOLUTION_HR_PROBATION_ASSIST,
  breadcrumbLabel: 'HR Probation Assist Agent',
  parentService: AI_COE_PARENT,
  seoTitle:
    'HR Probation Assist Agent — Confirm & Extend Probation AI | MPC',
  seoDescription:
    'MPC HR Probation Assist Agent automates probation status updates, letter generation, and employee communication — Confirm or Extend probation instantly for HR Specialists and Shared Services.',
  serviceType: 'HR Probation Assist Agent — AI Agent',
  serviceDescription:
    'An intelligent agent that automates probation monitoring, status updates, letter generation, and employee communication — with seamless Confirm and Extend actions across the hire-to-confirmation lifecycle.',
  heroEyebrow: 'AI CoE · Out-of-Box AI Solution',
  heroHeadline: 'Introducing the MPC',
  heroHeadlineAccent: 'HR Probation Assist Agent',
  heroSubhead:
    'Built for HR Specialists, HR Coordinators, and Shared Services Administrators — from probation check-in to confirmation or extension, without the manual chase.',
  heroCtaText: 'Talk to Our AI CoE Team',
  heroImageSrc:
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2400&auto=format&fit=crop',
  whatIsTitle: 'What is the MPC HR Probation Assist Agent?',
  whatIsBody:
    'The MPC HR Probation Assistant is an intelligent agent designed to automate status updates, letter generation, and employee communication across the probation lifecycle. It enables seamless, instant execution of key actions — Confirm probation or Extend probation — as the natural continuation from onboarding through final assessment to confirmation.',
  whatIsImageSrc:
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
  whatIsImageAlt: 'HR team reviewing probation status and assessments',
  toc: [
    { label: 'Overview', hash: 'overview' },
    { label: 'Capabilities', hash: 'capabilities' },
    { label: 'Modules', hash: 'modules' },
    { label: 'Process', hash: 'process' },
    { label: 'Comparison', hash: 'comparison' },
    { label: 'FAQ', hash: 'faq' },
  ],
  overviewTitle: 'From onboarding to confirmation: a unified probation flow',
  overviewParagraphs: [
    'HR teams currently face a repetitive, time-consuming, and error-prone process when monitoring probation completion and validating manager assessments. Follow-ups stall; status stays opaque across the organization.',
    'The Probation Assist Agent sits on the same hire-to-confirmation journey as onboarding — Hire Date, Onboarding, Probation Check-in, Final Assessment, then Confirmation or Extension — with instant Confirm / Extend actions and structured visibility into pending work.',
  ],
  moduleChips: [
    'Hire Date',
    'Onboarding',
    'Probation Check-in',
    'Final Assessment',
    'Confirmation / Extension',
  ],
  capabilitiesTitle: 'Problem, Solution & Key Value Drivers',
  capabilities: [
    {
      title: 'The Problem',
      body: 'HR teams face a repetitive, time-consuming, and error-prone process when monitoring probation completion and validating manager assessments.',
    },
    {
      title: 'The Solution',
      body: 'The MPC HR Probation Assistant automates status updates, letter generation, and employee communication — with seamless Confirm and Extend actions across the probation lifecycle.',
    },
    {
      title: 'Efficiency',
      body: 'Significant reduction in manual HR coordination and follow-ups around probation milestones.',
    },
    {
      title: 'Compliance',
      body: 'Policy-driven validation of assessments and outcomes before confirmation or extension.',
    },
    {
      title: 'Control',
      body: 'Structured visibility into probation status and pending actions across the organization.',
    },
  ],
  modulesSectionTitle: 'Probation lifecycle actions that matter',
  modulesSectionSubtitle:
    'Monitor, validate, and execute — Confirm or Extend — without the manual coordination tax.',
  modules: [
    {
      title: 'Probation monitoring pain',
      desc: 'Repetitive tracking of probation completion and manager assessments burns specialist time and invites missed deadlines.',
      imageSrc:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'HR coordinating probation timelines and follow-ups',
    },
    {
      title: 'Manager assessment validation',
      desc: 'Policy-driven checks before outcomes land — reducing error-prone manual validation of assessments ahead of confirmation.',
      imageSrc:
        'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Manager and HR reviewing employee assessment',
    },
    {
      title: 'Confirm & Extend actions',
      desc: 'Instant execution: Confirm probation for a named employee or Extend probation — plus status updates, letters, and employee communication.',
      imageSrc:
        'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Confirming employment status after probation',
    },
  ],
  processTitle: 'Hire date to confirmation — in five stages',
  processIntro:
    'A unified flow from hire through onboarding into probation check-ins, final assessment, and confirm or extend.',
  processSteps: [
    {
      number: '01',
      title: 'Hire Date',
      description: 'Employee enters the organization — probation clock and milestones begin.',
    },
    {
      number: '02',
      title: 'Onboarding',
      description:
        'Handoff from onboarding journeys (companion Onboarding Assistant) into the probation track.',
    },
    {
      number: '03',
      title: 'Probation Check-in',
      description:
        'Monitor progress and pending actions; reduce manual chase for status and assessments.',
    },
    {
      number: '04',
      title: 'Final Assessment',
      description:
        'Validate manager assessments with policy-driven checks before an outcome is recorded.',
    },
    {
      number: '05',
      title: 'Confirm or Extend',
      description:
        'Execute Confirm probation or Extend probation instantly — with letters and employee communication.',
    },
  ],
  comparisonTitle: 'Manual probation chase vs. Probation Assist Agent',
  comparisonIntro:
    'What HR and Shared Services experience when comparing repetitive monitoring and follow-ups with an agent that confirms, extends, and communicates.',
  comparisonRows: [
    {
      criterion: 'Coordination effort',
      values: [
        'Repetitive, time-consuming follow-ups on probation completion',
        'Significant reduction in manual HR coordination',
      ],
    },
    {
      criterion: 'Assessment handling',
      values: [
        'Error-prone manual validation of manager assessments',
        'Policy-driven validation before confirm or extend',
      ],
    },
    {
      criterion: 'Visibility',
      values: [
        'Fragmented status across teams and trackers',
        'Structured visibility into probation status and pending actions org-wide',
      ],
    },
    {
      criterion: 'Key actions',
      values: [
        'Slow, ticket-heavy confirm / extend workflows',
        'Seamless instant Confirm or Extend probation execution',
      ],
    },
    {
      criterion: 'Communication',
      values: [
        'Ad-hoc letters and employee updates',
        'Automated status updates, letter generation, and employee communication',
      ],
    },
  ],
  caseStudy: {
    tag: 'AI CoE · HCM',
    headline:
      'Confirm or extend probation in one flow — less chase, more control',
    description:
      'HR Specialists and Shared Services teams replacing repetitive probation monitoring with the MPC HR Probation Assist Agent gain policy-driven validation, org-wide visibility, and instant Confirm / Extend actions with letters and employee communication.',
    metadata:
      'HR Specialists · Probation · Confirm · Extend · Shared Services',
    imageSrc:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'HR shared services team managing probation outcomes',
    stat: 'Confirm',
    statLabel: 'Or extend',
    statContext:
      'Efficiency, compliance, and control — less manual coordination, policy-driven validation, structured visibility.',
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
      icon: ClipboardCheck,
      title: 'HR Onboarding Assistant',
      description:
        'Companion agent for journey task confirmations — the handoff into the probation flow.',
      to: SOLUTION_HR_ONBOARDING_ASSISTANT,
    },
    {
      icon: Users,
      title: 'HCM',
      description:
        'Oracle HCM Cloud — talent and employee lifecycle processes this agent supports.',
      to: SOLUTION_HCM,
    },
  ],
  faqs: [
    {
      q: 'Who is the HR Probation Assist Agent for?',
      a: 'HR Specialists, HR Coordinators, and Shared Services Administrators who monitor probation completion, validate manager assessments, and execute confirm or extend outcomes.',
    },
    {
      q: 'What do Confirm and Extend do?',
      a: 'The agent enables seamless, instant execution of Confirm probation or Extend probation for a named employee — including related status updates and communication as designed in your process.',
    },
    {
      q: 'Does it generate letters and employee communication?',
      a: 'Yes. The solution is designed to automate status updates, letter generation, and employee communication as part of the probation lifecycle.',
    },
    {
      q: 'How does it relate to the HR Onboarding Assistant?',
      a: 'They form a unified flow from hire through onboarding into probation check-ins, final assessment, and confirmation or extension. Onboarding handles journey task confirmations; Probation Assist owns the probation outcomes.',
    },
    {
      q: 'How quickly can we deploy it?',
      a: 'As an Out-of-Box AI Solution from MPC\'s AI CoE, focused deployments typically start in days, then expand across entities and Shared Services teams.',
    },
  ],
  faqTitle: 'HR Probation Assist Agent — Frequently Asked Questions',
  ctaTitle: 'Confirm or extend.',
  ctaTitleAccent: 'Without the chase.',
  ctaBody:
    'Tell us how probation monitoring works today. We\'ll show how the Probation Assist Agent validates assessments, updates status, and executes Confirm or Extend — with letters and employee communication.',
  ctaText: 'Talk to Our AI CoE Team',
};

export function HRProbationAssistAgent() {
  return <OracleSolutionLayout config={CONFIG} />;
}
