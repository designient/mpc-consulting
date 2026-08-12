import React from 'react';
import { Database, Users, Activity } from 'lucide-react';
import {
  OracleSolutionLayout,
  type OracleSolutionPageConfig,
} from '../../components/layout/OracleSolutionLayout';
import {
  SOLUTION_ERP,
  SOLUTION_HCAAS,
  SOLUTION_HCM,
  SOLUTION_TECH,
} from '../../data/paths';

const CONFIG: OracleSolutionPageConfig = {
  canonicalPath: SOLUTION_TECH,
  breadcrumbLabel: 'Tech',
  seoTitle: 'Oracle Tech. Managed Support & Optimisation | MPC',
  seoDescription:
    'MPC Tech delivers post-go-live Oracle support, health checks, upgrades, and ongoing optimisation across Fusion and EBS.',
  serviceType: 'Oracle Tech Managed Services',
  serviceDescription:
    'Post-go-live Oracle support, health checks, upgrades, release management, and ongoing optimisation. Fusion and EBS.',
  heroEyebrow: 'Oracle Cloud · Tech',
  heroHeadline: 'Keep Oracle running',
  heroHeadlineAccent: 'at peak performance',
  heroSubhead:
    'Post-go-live support, health checks, upgrades, and ongoing Oracle optimisation, so your Fusion and EBS estate stays current, compliant, and performant.',
  heroCtaText: 'Talk to Our Tech Team',
  heroImageSrc:
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2400&auto=format&fit=crop',
  whatIsTitle: 'What is MPC Tech?',
  whatIsBody:
    'MPC Tech is our Oracle managed services and optimisation practice, the team that keeps your Oracle environment healthy after go-live. From health checks and quarterly release readiness to incident response, upgrades, and continuous improvement, we treat your Oracle estate as if it were our own.',
  whatIsImageSrc:
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
  whatIsImageAlt: 'Oracle systems monitoring and support',
  toc: [
    { label: 'Overview', hash: 'overview' },
    { label: 'Capabilities', hash: 'capabilities' },
    { label: 'Services', hash: 'modules' },
    { label: 'Process', hash: 'process' },
    { label: 'Comparison', hash: 'comparison' },
    { label: 'FAQ', hash: 'faq' },
  ],
  overviewTitle: 'Oracle Tech with MPC',
  overviewParagraphs: [
    'Go-live is not the finish line, it is where operational reality begins. Oracle environments need ongoing care: quarterly patches, performance tuning, integration monitoring, and users who know how to get help when something breaks.',
    'MPC Tech provides managed Oracle support from the same consultants who implement Fusion and EBS, across HCM, ERP, SCM, EPM, and Unifier modules.',
  ],
  moduleChips: [
    'Managed Support',
    'Health Checks',
    'Upgrades',
    'Release Management',
    'Performance Tuning',
    'Integration Monitoring',
    'Security Reviews',
    'Hypercare',
  ],
  capabilitiesTitle: 'Our Tech Capabilities',
  capabilities: [
    {
      title: 'Managed Application Support',
      body: 'Functional and technical support with defined SLAs, incident triage, root cause analysis, and resolution.',
    },
    {
      title: 'Health Check as a Service',
      body: 'Independent Oracle audits with prioritised remediation roadmaps, performance, security, and configuration.',
    },
    {
      title: 'Upgrade & Patch Management',
      body: 'Quarterly Fusion release readiness, EBS patch cycles, and regression testing.',
    },
    {
      title: 'Performance Optimisation',
      body: 'Concurrent program tuning, SQL optimisation, and batch job performance improvement.',
    },
    {
      title: 'Integration Support',
      body: 'OIC and middleware monitoring, interface error resolution, and integration enhancements.',
    },
    {
      title: 'Continuous Improvement',
      body: 'Process refinement, configuration optimisation, and feature adoption to maximise Oracle ROI.',
    },
  ],
  modulesSectionTitle: 'Services we deliver',
  modulesSectionSubtitle:
    'How MPC Tech keeps your Oracle environment stable, current, and optimised.',
  modules: [
    {
      title: 'Managed Support',
      desc: 'Dedicated Oracle support desk with functional and technical consultants, incident management, change requests, and proactive monitoring for your live environment.',
      imageSrc:
        'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Support team managing Oracle environment',
    },
    {
      title: 'Health Checks',
      desc: 'Structured Oracle health assessments across performance, security, configuration, and data quality, with executive summaries and sequenced remediation roadmaps.',
      imageSrc:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Oracle health check analysis',
    },
    {
      title: 'Upgrades & Releases',
      desc: 'Quarterly Fusion release testing, EBS patch application, and regression validation, so your team stays current without disrupting business cycles.',
      imageSrc:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Oracle upgrade and release management',
    },
  ],
  processTitle: 'How MPC Tech works',
  processIntro:
    'A structured engagement model for managed Oracle support, from onboarding through continuous improvement.',
  processSteps: [
    {
      number: '01',
      title: 'Onboard',
      description:
        'Environment discovery, support process setup, and knowledge transfer from implementation or incumbent teams.',
    },
    {
      number: '02',
      title: 'Stabilise',
      description:
        'Incident backlog triage, critical issue resolution, and baseline performance assessment.',
    },
    {
      number: '03',
      title: 'Monitor',
      description:
        'Proactive monitoring, scheduled health reviews, and integration error tracking.',
    },
    {
      number: '04',
      title: 'Improve',
      description:
        'Prioritised remediation from health checks and recurring issue pattern analysis.',
    },
    {
      number: '05',
      title: 'Upgrade',
      description:
        'Release planning, test execution, and cutover support for Fusion and EBS updates.',
    },
    {
      number: '06',
      title: 'Optimise',
      description:
        'Continuous configuration refinement, automation, and ROI-focused enhancements.',
    },
  ],
  comparisonTitle: 'Internal team only vs. MPC Tech',
  comparisonIntro:
    'What enterprises typically encounter when relying solely on internal Oracle support versus MPC\'s dedicated Tech practice.',
  comparisonRows: [
    {
      criterion: 'Oracle depth',
      values: [
        'Small internal team, broad responsibilities',
        'Oracle-certified specialists across modules',
      ],
    },
    {
      criterion: 'Incident resolution',
      values: [
        'Escalation to Oracle support, long wait times',
        'First-line resolution by consultants who know your config',
      ],
    },
    {
      criterion: 'Release readiness',
      values: [
        'Reactive patching after issues emerge',
        'Proactive quarterly release testing and planning',
      ],
    },
    {
      criterion: 'Health visibility',
      values: [
        'Problems discovered during audits or outages',
        'Scheduled health checks with remediation roadmaps',
      ],
    },
    {
      criterion: 'Continuity',
      values: [
        'Key person dependency risk',
        'Team-based support with documented knowledge',
      ],
    },
  ],
  related: [
    {
      icon: Activity,
      title: 'Health Check as a Service',
      description:
        'Independent Oracle audit with prioritised remediation roadmap.',
      to: SOLUTION_HCAAS,
    },
    {
      icon: Database,
      title: 'Oracle Fusion ERP',
      description:
        'ERP implementation and migration, supported by Tech post-go-live.',
      to: SOLUTION_ERP,
    },
    {
      icon: Users,
      title: 'Oracle HCM Cloud',
      description:
        'HCM implementation and payroll, with ongoing Tech managed support.',
      to: SOLUTION_HCM,
    },
  ],
  faqs: [
    {
      q: 'What is the difference between Tech and HCaaS?',
      a: 'HCaaS is a point-in-time independent health audit with a remediation roadmap. Tech is ongoing managed support, incident resolution, upgrades, and continuous optimisation of your live Oracle environment.',
    },
    {
      q: 'Does MPC Tech support both Fusion and EBS?',
      a: 'Yes. Our Tech practice supports Oracle Fusion Cloud and E-Business Suite across HCM, ERP, SCM, EPM, and integrated modules.',
    },
    {
      q: 'Can MPC Tech take over from our current support provider?',
      a: 'Yes. We run structured transition programmes, knowledge transfer, environment discovery, and parallel support before full handover.',
    },
    {
      q: 'What SLAs does MPC Tech offer?',
      a: 'SLAs are tailored to your criticality tiers, typically P1 response within 1–4 hours depending on engagement scope and coverage hours.',
    },
  ],
  faqTitle: 'Oracle Tech. Frequently Asked Questions',
  ctaTitle: 'Talk to our',
  ctaTitleAccent: 'Tech Team',
  ctaBody:
    'Tell us about your Oracle environment. We\'ll assess support needs and outline a managed services path that fits.',
  ctaText: 'Get in Touch',
};

export function Tech() {
  return <OracleSolutionLayout config={CONFIG} />;
}
