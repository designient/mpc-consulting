import React from 'react';
import { Globe, Lock, Shield } from 'lucide-react';
import {
  OracleSolutionLayout,
  type OracleSolutionPageConfig,
} from '../../components/layout/OracleSolutionLayout';
import {
  SERVICE_SECURITY,
  SOLUTION_APP_CLOUD_SECURITY,
  SOLUTION_CLOUD_MANAGEMENT,
  SOLUTION_INFRA_MANAGED_OPS,
  SOLUTION_ZERO_TRUST_STRATEGY,
} from '../../data/paths';

const SECURITY_PARENT = {
  label: 'Security & Zero Trust',
  to: SERVICE_SECURITY,
};

const CONFIG: OracleSolutionPageConfig = {
  canonicalPath: SOLUTION_APP_CLOUD_SECURITY,
  breadcrumbLabel: 'Application & Cloud Security',
  parentService: SECURITY_PARENT,
  seoTitle: 'Application & Cloud Security | AppSec & CSPM | MPC',
  seoDescription:
    'MPC delivers application security, vulnerability assessment, CSPM, penetration testing, compliance readiness, and AI-driven security analytics.',
  serviceType: 'Application & Cloud Security Services',
  serviceDescription:
    'Application security, cloud security posture management, penetration testing, compliance readiness, and AI-driven security insights.',
  heroEyebrow: 'Security & Zero Trust · App & Cloud',
  heroHeadline: 'Secure applications',
  heroHeadlineAccent: 'and cloud workloads',
  heroSubhead:
    'AppSec assessments, CSPM, penetration testing, and compliance readiness — with AI-driven insights to protect your application and cloud estate.',
  heroCtaText: 'Talk to Our Security Team',
  heroImageSrc:
    'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2400&auto=format&fit=crop',
  whatIsTitle: 'What is MPC Application & Cloud Security?',
  whatIsBody:
    'MPC secures enterprise applications and cloud environments through structured AppSec programmes, continuous posture management, and compliance-ready testing. We combine manual expertise with AI-driven analytics to find vulnerabilities before attackers do.',
  whatIsImageSrc:
    'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop',
  whatIsImageAlt: 'Application and cloud security engineering',
  toc: [
    { label: 'Overview', hash: 'overview' },
    { label: 'Capabilities', hash: 'capabilities' },
    { label: 'Services', hash: 'modules' },
    { label: 'Process', hash: 'process' },
    { label: 'Comparison', hash: 'comparison' },
    { label: 'FAQ', hash: 'faq' },
  ],
  overviewTitle: 'Application & Cloud Security with MPC',
  overviewParagraphs: [
    'Applications and cloud workloads are primary attack surfaces — yet many enterprises lack consistent AppSec practices and cloud posture visibility across multi-cloud estates.',
    'MPC delivers end-to-end application and cloud security — from vulnerability assessment and CSPM through penetration testing and audit-ready compliance programmes.',
  ],
  moduleChips: [
    'AppSec',
    'Vulnerability Assessment',
    'CSPM',
    'Penetration Testing',
    'Compliance Readiness',
    'AI-Driven Analytics',
  ],
  capabilitiesTitle: 'Our App & Cloud Security Capabilities',
  capabilities: [
    {
      title: 'Application Security (AppSec)',
      body: 'Secure SDLC integration, code review, and application vulnerability assessment across web and API tiers.',
    },
    {
      title: 'Vulnerability Assessment',
      body: 'Structured scanning and manual validation to identify and prioritise exploitable weaknesses.',
    },
    {
      title: 'Cloud Security Posture Management',
      body: 'CSPM across AWS, Azure, GCP, and OCI — misconfiguration detection, policy enforcement, and drift monitoring.',
    },
    {
      title: 'Penetration Testing',
      body: 'External, internal, and application pen tests with executive summaries and remediation guidance.',
    },
    {
      title: 'Compliance Readiness',
      body: 'Gap assessments and control validation aligned to regulatory and audit requirements.',
    },
    {
      title: 'AI-Driven Insights',
      body: 'AI-powered analytics for threat prioritisation, anomaly detection, and security operations efficiency.',
    },
  ],
  modulesSectionTitle: 'App & cloud services we deliver',
  modulesSectionSubtitle:
    'Three delivery tracks for securing applications and cloud workloads at enterprise scale.',
  modules: [
    {
      title: 'Application Security',
      desc: 'AppSec assessments, secure coding practices, API security testing, and integration into CI/CD pipelines for continuous protection.',
      imageSrc:
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Application security engineering',
    },
    {
      title: 'Cloud Posture Management',
      desc: 'CSPM deployment, cloud configuration baselines, and ongoing posture monitoring across multi-cloud environments.',
      imageSrc:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Cloud security posture management',
    },
    {
      title: 'Compliance & Testing',
      desc: 'Penetration testing, compliance readiness reviews, and audit support with prioritised remediation roadmaps.',
      imageSrc:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Penetration testing and compliance',
    },
  ],
  processTitle: 'Our App & cloud security process',
  processIntro:
    'A structured delivery model from discovery through continuous monitoring and reporting.',
  processSteps: [
    { number: '01', title: 'Discover', description: 'Application and cloud estate inventory, attack surface mapping, and risk prioritisation.' },
    { number: '02', title: 'Test', description: 'Vulnerability scanning, pen testing, and CSPM baseline assessment.' },
    { number: '03', title: 'Remediate', description: 'Prioritised fix plans, developer guidance, and cloud configuration corrections.' },
    { number: '04', title: 'Harden', description: 'Secure SDLC integration, policy enforcement, and control hardening.' },
    { number: '05', title: 'Monitor', description: 'Continuous posture monitoring, alerting, and recurring assessment cadence.' },
    { number: '06', title: 'Report', description: 'Executive dashboards, compliance evidence, and improvement roadmaps.' },
  ],
  comparisonTitle: 'Point-in-time testing vs. MPC AppSec',
  comparisonIntro:
    'What organisations typically experience when comparing ad-hoc security testing against MPC\'s integrated App & cloud practice.',
  comparisonRows: [
    { criterion: 'Coverage', values: ['Annual pen test only', 'Continuous AppSec and CSPM programme'] },
    { criterion: 'Cloud visibility', values: ['Manual config reviews', 'Automated CSPM with policy enforcement'] },
    { criterion: 'Remediation', values: ['Report delivered, no follow-through', 'Prioritised remediation with developer support'] },
    { criterion: 'Compliance', values: ['Scramble before audits', 'Ongoing compliance readiness and evidence'] },
    { criterion: 'Intelligence', values: ['Rule-based alerts', 'AI-driven prioritisation and analytics'] },
  ],
  related: [
    {
      icon: Shield,
      title: 'Cybersecurity & Zero Trust Strategy',
      description: 'Identity-centric architecture that underpins application and cloud security.',
      to: SOLUTION_ZERO_TRUST_STRATEGY,
    },
    {
      icon: Globe,
      title: 'Infrastructure & Managed Operations',
      description: 'SOC/NOC monitoring and managed operations for detected threats.',
      to: SOLUTION_INFRA_MANAGED_OPS,
    },
    {
      icon: Lock,
      title: 'Cloud Management',
      description: 'Secure cloud operations and DevSecOps integration for workloads.',
      to: SOLUTION_CLOUD_MANAGEMENT,
    },
  ],
  faqs: [
    {
      q: 'Can MPC assess our application and cloud security posture?',
      a: 'Yes. We deliver AppSec assessments, vulnerability testing, CSPM, penetration testing, and compliance readiness reviews — with AI-driven insights where applicable.',
    },
    {
      q: 'Which cloud platforms does CSPM cover?',
      a: 'We support CSPM across AWS, Azure, GCP, and OCI — including multi-cloud posture management with consistent policy baselines.',
    },
    {
      q: 'Do you integrate AppSec into CI/CD pipelines?',
      a: 'Yes. We help embed security scanning, policy gates, and developer workflows into your delivery pipelines for shift-left protection.',
    },
    {
      q: 'Do you support compliance and audit readiness?',
      a: 'Yes. Penetration testing, compliance gap assessments, and evidence collection are part of our application and cloud security offering.',
    },
  ],
  faqTitle: 'Application & Cloud Security — Frequently Asked Questions',
  ctaTitle: 'Harden your',
  ctaTitleAccent: 'App & Cloud Estate',
  ctaBody:
    'Tell us about your application and cloud security needs. We\'ll outline an assessment and remediation approach.',
  ctaText: 'Talk to MPC',
};

export function ApplicationCloudSecurity() {
  return <OracleSolutionLayout config={CONFIG} />;
}
