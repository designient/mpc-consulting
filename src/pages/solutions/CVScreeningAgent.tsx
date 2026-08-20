import React from 'react';
import { Bot, ScanSearch, Users } from 'lucide-react';
import {
  OracleSolutionLayout,
  type OracleSolutionPageConfig,
} from '../../components/layout/OracleSolutionLayout';
import {
  SERVICE_AI_COE,
  SOLUTION_CV_SCREENING_AGENT,
  SOLUTION_HCM,
  SOLUTION_RESOURCESYNCX,
} from '../../data/paths';

const AI_COE_PARENT = {
  label: 'AI CoE',
  to: SERVICE_AI_COE,
};

const CONFIG: OracleSolutionPageConfig = {
  canonicalPath: SOLUTION_CV_SCREENING_AGENT,
  breadcrumbLabel: 'CV Screening Agent',
  parentService: AI_COE_PARENT,
  seoTitle: 'CV Screening Agent. Recruiter AI for Resume Fitment | MPC',
  seoDescription:
    'MPC CV Screening Agent automatically analyzes resumes against the job description, categorizes applicants by fitment, and gives recruiters a summarized screening view for faster shortlisting.',
  serviceType: 'CV Screening Agent. AI Agent',
  serviceDescription:
    'An AI agent that screens candidate resumes against job descriptions, categorizes fitment, and provides a summarized view so recruiters can shortlist faster with consistent evaluation.',
  heroEyebrow: 'AI CoE · Out-of-Box AI Solution',
  heroHeadline: 'Introducing the MPC',
  heroHeadlineAccent: 'CV Screening Agent',
  heroSubhead:
    'Built for Recruiters, automatically analyze resumes against the job description, categorize applicants by fitment, and shortlist with a clear screening summary.',
  heroCtaText: 'Talk to Our AI CoE Team',
  heroImageSrc:
    'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2400&auto=format&fit=crop',
  whatIsTitle: 'What is the MPC CV Screening Agent?',
  whatIsBody:
    'MPC’s CV Screening Agent automatically analyzes candidate resumes against the job description, categorizes applicants by fitment, and provides a summarized screening view to support faster recruiter decisions. Recruiters spend less time on high-volume manual review and more time on meaningful candidate engagement.',
  whatIsImageSrc:
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop',
  whatIsImageAlt: 'Recruiter reviewing candidate screening summary',
  toc: [
    { label: 'Overview', hash: 'overview' },
    { label: 'Capabilities', hash: 'capabilities' },
    { label: 'Modules', hash: 'modules' },
    { label: 'Process', hash: 'process' },
    { label: 'Comparison', hash: 'comparison' },
    { label: 'FAQ', hash: 'faq' },
  ],
  overviewTitle: 'Faster, consistent shortlisting for recruiters',
  overviewParagraphs: [
    'Recruiters often spend significant time manually reviewing large volumes of resumes, making it difficult to quickly identify the most suitable candidates for a role. That manual effort delays shortlisting and reduces the time available for meaningful candidate engagement.',
    'The CV Screening Agent turns high-volume intake into a structured screening workflow, match to the JD, categorize fitment, and present a summarized view so recruiters can decide faster with objective, standardized evaluation.',
  ],
  moduleChips: [
    'Resume parse',
    'JD match',
    'Fitment scoring',
    'Shortlist summary',
    'Recruiter review',
  ],
  capabilitiesTitle: 'Problem, Solution & Key Value Drivers',
  capabilities: [
    {
      title: 'The Problem',
      body: 'Recruiters spend significant time manually reviewing large volumes of resumes, making it hard to identify the best-fit candidates quickly. Manual effort delays shortlisting and reduces time for meaningful candidate engagement.',
    },
    {
      title: 'The Solution',
      body: 'MPC’s CV Screening Agent automatically analyzes resumes against the job description, categorizes applicants by fitment, and provides a summarized screening view to support faster recruiter decisions.',
    },
    {
      title: 'Efficiency',
      body: 'Significant reduction in manual resume screening and initial candidate evaluation effort.',
    },
    {
      title: 'Consistency',
      body: 'Standardized, objective screening of candidates against job requirements, less variance across reviewers.',
    },
    {
      title: 'Speed',
      body: 'Faster identification of strong-fit candidates, enabling quicker shortlisting and hiring decisions.',
    },
  ],
  modulesSectionTitle: 'Where manual screening breaks down',
  modulesSectionSubtitle:
    'High volume, delayed shortlists, and inconsistent evaluation, and how the agent changes the outcome.',
  modules: [
    {
      title: 'High-volume manual screening',
      desc: 'Large applicant pools force hours of resume reading before a shortlist emerges. The agent parses and evaluates at scale so recruiters start from a prioritized view.',
      imageSrc:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Stack of resumes and applications under review',
    },
    {
      title: 'Delayed shortlisting',
      desc: 'Manual review pushes engagement later in the funnel. Fitment categorization and summarized screening views accelerate who to contact first.',
      imageSrc:
        'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Hiring team reviewing shortlist of candidates',
    },
    {
      title: 'Inconsistent evaluation',
      desc: 'Different reviewers apply different criteria. Standardized JD matching creates objective, repeatable screening against role requirements.',
      imageSrc:
        'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Structured evaluation of candidate fit against job requirements',
    },
  ],
  processTitle: 'From application intake to recruiter-ready shortlist',
  processIntro:
    'A clear screening loop, ingest, match, categorize, and summarize, so recruiters decide with confidence.',
  processSteps: [
    {
      number: '01',
      title: 'Ingest',
      description:
        'Bring in candidate applications and resumes for the open role.',
    },
    {
      number: '02',
      title: 'Match to JD',
      description:
        'Automatically analyze each resume against the job description and role requirements.',
    },
    {
      number: '03',
      title: 'Categorize fitment',
      description:
        'Group applicants by fitment so strong matches surface first.',
    },
    {
      number: '04',
      title: 'Summarize for recruiter',
      description:
        'Deliver a summarized screening view that supports faster shortlisting and hiring decisions.',
    },
  ],
  comparisonTitle: 'Manual resume review vs. CV Screening Agent',
  comparisonIntro:
    'What recruiting teams typically experience when comparing high-volume manual screening with automated JD-based fitment.',
  comparisonRows: [
    {
      criterion: 'Recruiter effort',
      values: [
        'Hours reading large volumes of resumes',
        'Significant reduction in manual screening and initial evaluation',
      ],
    },
    {
      criterion: 'Consistency',
      values: [
        'Subjective, reviewer-dependent decisions',
        'Standardized, objective screening against the JD',
      ],
    },
    {
      criterion: 'Time to shortlist',
      values: [
        'Delayed shortlisting and slower candidate engagement',
        'Faster identification of strong-fit candidates',
      ],
    },
    {
      criterion: 'Decision support',
      values: [
        'Unstructured notes and ad-hoc ranking',
        'Summarized screening view with fitment categories',
      ],
    },
  ],
  caseStudy: {
    tag: 'AI CoE · Talent',
    headline:
      'Give recruiters a summarized screening view, less manual review, faster shortlists',
    description:
      'Recruiting teams replacing high-volume manual resume review with the MPC CV Screening Agent gain JD-aligned fitment categorization and a clear screening summary so they can engage strong candidates sooner.',
    metadata: 'Recruiters · Resume · JD match · Fitment · Shortlist',
    imageSrc:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Recruiting team collaborating on candidate shortlist',
    stat: 'Faster',
    statLabel: 'Shortlisting',
    statContext:
      'Efficiency, consistency, and speed, less manual screening, objective JD match, quicker strong-fit identification.',
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
      icon: Users,
      title: 'HCM',
      description:
        'Oracle HCM and talent workflows that sit alongside recruiter screening and hiring.',
      to: SOLUTION_HCM,
    },
    {
      icon: ScanSearch,
      title: 'ResourceSyncX',
      description:
        'Full screen-and-sync platform: scored shortlists, talent pool reuse, and outbound sync to Oracle Cloud HCM.',
      to: SOLUTION_RESOURCESYNCX,
    },
  ],
  faqs: [
    {
      q: 'Who is the CV Screening Agent for?',
      a: 'Recruiters who need to screen large volumes of resumes quickly and consistently against a job description.',
    },
    {
      q: 'How does fitment categorization work?',
      a: 'The agent analyzes each resume against the job description and groups applicants by fitment so strong matches are easier to identify and shortlist.',
    },
    {
      q: 'Does it replace recruiter judgment?',
      a: 'No. It provides a summarized screening view and objective JD alignment so recruiters can decide faster, final shortlisting and engagement remain with the recruiter.',
    },
    {
      q: 'How quickly can we deploy it?',
      a: 'As an Out-of-Box AI Solution from MPC\'s AI CoE, focused deployments typically start in days, then expand across roles and recruiting teams.',
    },
  ],
  faqTitle: 'CV Screening Agent. Frequently Asked Questions',
  ctaTitle: 'Screen smarter.',
  ctaTitleAccent: 'Shortlist faster.',
  ctaBody:
    'Tell us how your recruiting team screens today. We\'ll show how the CV Screening Agent matches resumes to the JD and delivers a recruiter-ready summary.',
  ctaText: 'Talk to Our AI CoE Team',
};

export function CVScreeningAgent() {
  return <OracleSolutionLayout config={CONFIG} />;
}
