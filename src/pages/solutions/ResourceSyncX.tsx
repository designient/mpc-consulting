import React from 'react';
import { Bot, Users, ScanSearch } from 'lucide-react';
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
  canonicalPath: SOLUTION_RESOURCESYNCX,
  breadcrumbLabel: 'ResourceSyncX',
  parentService: AI_COE_PARENT,
  seoTitle: 'ResourceSyncX. AI Resume Screening and Oracle HCM Sync | MPC',
  seoDescription:
    'MPC ResourceSyncX is a custom AI agent for high-volume resume screening, precision scoring, talent pool reuse, and automated sync to Oracle Cloud HCM.',
  serviceType: 'ResourceSyncX. AI Agent',
  serviceDescription:
    'A custom AI agent that delivers high-volume resume screening with actionables, a searchable talent pool, and automated outbound synchronization with Oracle Cloud HCM.',
  heroEyebrow: 'AI CoE · Out-of-Box AI Solution',
  heroHeadline: 'Screen smarter.',
  heroHeadlineAccent: 'Sync faster.',
  heroSubhead:
    'ResourceSyncX replaces manual, bias-prone screening with AI parsing, 0 to 100 scoring, a reusable talent pool, and one-click sync to Oracle Cloud HCM.',
  heroCtaText: 'Talk to Our AI CoE Team',
  heroImageSrc:
    'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2400&auto=format&fit=crop',
  whatIsTitle: 'What is MPC ResourceSyncX?',
  whatIsBody:
    'MPC ResourceSyncX is a custom AI agent for high-volume resume screening with actionables, built to integrate with Oracle ecosystems so talent is instantly actionable. It parses and structures candidate data, scores fit against the job description, tracks every screening run live, stores results in a searchable talent pool, and pushes shortlisted candidates to Oracle Cloud HCM. Recruiters work in role-based workspaces with granular controls on sync and export.',
  whatIsImageSrc:
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
  whatIsImageAlt: 'Recruiters reviewing AI-scored candidate shortlists',
  toc: [
    { label: 'Overview', hash: 'overview' },
    { label: 'Capabilities', hash: 'capabilities' },
    { label: 'Modules', hash: 'modules' },
    { label: 'Process', hash: 'process' },
    { label: 'Comparison', hash: 'comparison' },
    { label: 'FAQ', hash: 'faq' },
  ],
  overviewTitle: 'Bridging the gap between talent and opportunity',
  overviewParagraphs: [
    'Manual screening is slow, inconsistent, and hard to reuse. Recruiters re-read the same resumes, re-key data into Oracle, and lose warm talent between requisitions.',
    'ResourceSyncX turns each run into a strategic asset: scored shortlists, a searchable pool, hiring analytics, and automated outbound sync to Oracle Cloud HCM. Typical outcomes include an 80% faster time-to-shortlist, 70% recruiter productivity gain, and 95% signal accuracy versus noise in the pipeline.',
  ],
  moduleChips: [
    'AI parsing',
    '0 to 100 scoring',
    'Talent pool',
    'Oracle HCM sync',
    'Hiring analytics',
  ],
  capabilitiesTitle: 'Problem, Solution & Key Value Drivers',
  capabilities: [
    {
      title: 'The Problem',
      body: 'High-volume hiring still depends on manual, bias-prone screening and re-keying into the ATS. Warm talent is lost between cycles, and recruiters spend time on admin instead of engagement.',
    },
    {
      title: 'The Solution',
      body: 'ResourceSyncX parses resumes, scores candidates against the JD, tracks every run, stores a searchable talent pool, and syncs shortlists to Oracle Cloud HCM with recruiter RBAC and connection tests before push.',
    },
    {
      title: 'Accelerated cycles',
      body: 'Reduce time-to-shortlist by 80%, so the business can secure top talent before competitors.',
    },
    {
      title: 'Recruiter productivity',
      body: 'Shift effort from administrative data entry and manual screening to candidate engagement, typically a 70% productivity lift.',
    },
    {
      title: 'Quality of hire signal',
      body: 'Objective 0 to 100 scoring and standardized evaluation improve the signal-to-noise ratio in the pipeline, with 95% signal accuracy in typical deployments.',
    },
  ],
  modulesSectionTitle: 'From JD context to Oracle sync',
  modulesSectionSubtitle:
    'Intake, score, reuse, and sync, with live progress and an audit trail on every decision.',
  modules: [
    {
      title: 'JD intake and candidate volume',
      desc: 'Anchor each run to a job description from text, a web link, a local file, or an Oracle Requisition ID. Pull candidates from configured sources, upload ZIP batches, or add people ad hoc.',
      imageSrc:
        'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Job description intake and resume batch upload',
    },
    {
      title: 'Scoring, tracking, and talent pool',
      desc: 'Every candidate gets a 0 to 100 score against the JD. Live run status, historical Progress IDs, and shortlist versus reject breakdowns sit beside a searchable pool with skill snippets for reuse.',
      imageSrc:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Candidate scoring dashboard and talent pool search',
    },
    {
      title: 'Oracle Cloud HCM sync and analytics',
      desc: 'Push shortlisted candidates to Oracle Cloud HCM with a connection test first. KPI tiles, score distribution, and skill intelligence keep hiring leaders on the pulse of each requisition.',
      imageSrc:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Oracle HCM candidate sync and hiring analytics',
    },
  ],
  processTitle: 'Screen, reuse, and sync',
  processIntro:
    'A recruiter workspace that turns each screening run into a shortlist, a reusable pool, and an Oracle update.',
  processSteps: [
    {
      number: '01',
      title: 'Define JD context',
      description:
        'Select or create the job description from text, link, file, or Oracle Requisition ID so scoring is anchored to the role.',
    },
    {
      number: '02',
      title: 'Intake candidates',
      description:
        'Fetch from configured sources, upload a ZIP of resumes, or add individuals. Structured intake keeps profiles consistent.',
    },
    {
      number: '03',
      title: 'Score and shortlist',
      description:
        'AI scoring ranks fit 0 to 100. Filter, triage, and open rich summaries. Every decision is logged.',
    },
    {
      number: '04',
      title: 'Reuse and sync',
      description:
        'Search the talent pool for later requisitions, then push shortlists to Oracle Cloud HCM after a connection test.',
    },
  ],
  comparisonTitle: 'Manual screening vs. ResourceSyncX',
  comparisonIntro:
    'What recruiting teams experience when comparing inbox-and-spreadsheet screening with scored runs and Oracle sync.',
  comparisonRows: [
    {
      criterion: 'Time to shortlist',
      values: [
        'Manual resume-by-resume review that stretches hiring cycles',
        '80% faster time-to-shortlist with batch AI scoring',
      ],
    },
    {
      criterion: 'Evaluation',
      values: [
        'Inconsistent, bias-prone human reading of each CV',
        'Standardized 0 to 100 JD alignment on every applicant',
      ],
    },
    {
      criterion: 'Reuse',
      values: [
        'Warm talent lost between requisitions',
        'Searchable talent pool with snippets, scores, and bulk export',
      ],
    },
    {
      criterion: 'Oracle handoff',
      values: [
        'Hours of re-keying shortlisted candidates into the ATS',
        'One-click sync to Oracle Cloud HCM after a connection test',
      ],
    },
    {
      criterion: 'Oversight',
      values: [
        'Little visibility into run progress or why someone was rejected',
        'Live tracking, historical Progress IDs, and a full decision audit trail',
      ],
    },
  ],
  caseStudy: {
    tag: 'AI CoE · Talent',
    headline: 'Screen smarter, then sync to Oracle in one motion',
    description:
      'Recruiting teams replacing manual screening and ATS re-keying with MPC ResourceSyncX gain scored shortlists, a reusable talent pool, and automated outbound sync to Oracle Cloud HCM.',
    metadata: 'Recruiters · Oracle Cloud HCM · Talent pool · Screening runs',
    imageSrc:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Recruiting team reviewing AI-screened shortlists for Oracle HCM',
    stat: '80%',
    statLabel: 'Faster time-to-shortlist',
    statContext:
      'Typical outcomes also include 70% recruiter productivity and 95% signal accuracy versus noise in the hiring pipeline.',
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
      icon: Users,
      title: 'HCM',
      description:
        'Oracle HCM Cloud, the system ResourceSyncX syncs shortlisted candidates into.',
      to: SOLUTION_HCM,
    },
    {
      icon: ScanSearch,
      title: 'CV Screening Agent',
      description:
        'Companion recruiter agent for JD fitment categorization and a summarized screening view.',
      to: SOLUTION_CV_SCREENING_AGENT,
    },
  ],
  faqs: [
    {
      q: 'Who is ResourceSyncX for?',
      a: 'Recruiters and talent teams running high-volume or niche screening who need scored shortlists, a reusable pool, and a clean handoff into Oracle Cloud HCM.',
    },
    {
      q: 'How is this different from the CV Screening Agent?',
      a: 'The CV Screening Agent focuses on JD fitment categorization and a recruiter-ready summary. ResourceSyncX is the full screen-and-sync platform: batch intake, 0 to 100 scoring, talent pool reuse, hiring analytics, and Oracle HCM outbound sync.',
    },
    {
      q: 'How do job descriptions get into a run?',
      a: 'Import or create JDs from text, web links, local files, or directly from Oracle Requisition IDs so results map to the correct enterprise entity.',
    },
    {
      q: 'How does Oracle sync work?',
      a: 'Shortlisted candidates can be pushed to Oracle Cloud HCM with a Test Connection step first. Recruiters can monitor each synchronization task for data integrity.',
    },
    {
      q: 'How quickly can we deploy it?',
      a: "As an Out-of-Box AI Solution from MPC's AI CoE, focused deployments typically start in days, then expand across requisitions, recruiter workspaces, and Oracle sync paths.",
    },
  ],
  faqTitle: 'ResourceSyncX. Frequently Asked Questions',
  ctaTitle: 'Screen smarter.',
  ctaTitleAccent: 'Sync faster.',
  ctaBody:
    'Tell us how screening and Oracle handoff work today. We will show how ResourceSyncX scores, pools, and syncs talent, with recruiter controls intact.',
  ctaText: 'Talk to Our AI CoE Team',
};

export function ResourceSyncX() {
  return <OracleSolutionLayout config={CONFIG} />;
}
