import React from 'react';
import { Cloud, Lock, Shield } from 'lucide-react';
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
  canonicalPath: SOLUTION_ZERO_TRUST_STRATEGY,
  breadcrumbLabel: 'Cybersecurity & Zero Trust Strategy',
  parentService: SECURITY_PARENT,
  seoTitle: 'Cybersecurity & Zero Trust Strategy | MPC',
  seoDescription:
    'MPC designs Zero Trust architectures, IAM and SASE integration, advanced threat protection, and AI-enabled cybersecurity for enterprise environments.',
  serviceType: 'Cybersecurity & Zero Trust Strategy Services',
  serviceDescription:
    'Zero Trust architecture, identity-centric security, IAM/SASE integration, threat protection, and AI-enabled cybersecurity.',
  heroEyebrow: 'Security & Zero Trust · Strategy',
  heroHeadline: 'Build security on',
  heroHeadlineAccent: 'Zero Trust principles',
  heroSubhead:
    'Identity-centric Zero Trust architecture, IAM and SASE integration, advanced threat protection, and AI-enabled cybersecurity — designed for modern enterprise risk.',
  heroCtaText: 'Talk to Our Security Team',
  heroImageSrc:
    'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2400&auto=format&fit=crop',
  whatIsTitle: 'What is MPC Cybersecurity & Zero Trust Strategy?',
  whatIsBody:
    'MPC helps enterprises move from perimeter-based security to identity-centric Zero Trust models. We design architectures where every user, device, and connection is verified continuously — integrating IAM, SASE, and AI-enabled threat detection into a cohesive security strategy.',
  whatIsImageSrc:
    'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
  whatIsImageAlt: 'Zero Trust cybersecurity strategy',
  toc: [
    { label: 'Overview', hash: 'overview' },
    { label: 'Capabilities', hash: 'capabilities' },
    { label: 'Services', hash: 'modules' },
    { label: 'Process', hash: 'process' },
    { label: 'Comparison', hash: 'comparison' },
    { label: 'FAQ', hash: 'faq' },
  ],
  overviewTitle: 'Zero Trust Strategy with MPC',
  overviewParagraphs: [
    'Traditional perimeter security no longer matches how enterprises work — remote users, cloud workloads, and SaaS applications require continuous verification and least-privilege access.',
    'MPC\'s strategy practice translates Zero Trust principles into actionable roadmaps — from identity architecture and SASE integration to threat modelling and AI-enabled detection.',
  ],
  moduleChips: [
    'Zero Trust Architecture',
    'Identity-Centric Security',
    'IAM',
    'SASE Integration',
    'Threat Protection',
    'AI-Enabled Cybersecurity',
  ],
  capabilitiesTitle: 'Our Zero Trust Strategy Capabilities',
  capabilities: [
    {
      title: 'Zero Trust Architecture',
      body: 'Target-state architecture design with phased adoption roadmaps aligned to business risk and compliance requirements.',
    },
    {
      title: 'Identity & Access Management',
      body: 'IAM strategy, privileged access controls, and identity governance for consistent access across cloud and on-premise.',
    },
    {
      title: 'SASE Integration',
      body: 'Secure access service edge design connecting users and branches to applications with policy-driven controls.',
    },
    {
      title: 'Advanced Threat Protection',
      body: 'Threat modelling, detection strategy, and digital risk mitigation across endpoints, networks, and cloud.',
    },
    {
      title: 'AI-Enabled Cybersecurity',
      body: 'AI-driven threat detection, behavioural analytics, and automated response workflows for faster incident handling.',
    },
    {
      title: 'Security Governance',
      body: 'Policy frameworks, risk registers, and executive reporting that align security investments to business outcomes.',
    },
  ],
  modulesSectionTitle: 'Strategy services we deliver',
  modulesSectionSubtitle:
    'Three workstreams that turn Zero Trust from concept into enterprise operating model.',
  modules: [
    {
      title: 'Strategy & Architecture',
      desc: 'Current-state assessment, Zero Trust maturity benchmarking, and target architecture blueprints with phased implementation plans.',
      imageSrc:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Security strategy and architecture planning',
    },
    {
      title: 'Identity & Access',
      desc: 'IAM design, SASE integration, and continuous verification models that reduce implicit trust across the enterprise.',
      imageSrc:
        'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Identity and access management security',
    },
    {
      title: 'Threat & Risk Management',
      desc: 'Advanced threat protection, digital risk mitigation, and AI-enabled detection strategies for proactive defence.',
      imageSrc:
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Threat detection and risk management',
    },
  ],
  processTitle: 'Our Zero Trust strategy process',
  processIntro:
    'A six-stage approach that moves enterprises from assessment to operational Zero Trust maturity.',
  processSteps: [
    { number: '01', title: 'Assess', description: 'Security posture review, risk landscape mapping, and Zero Trust maturity baseline.' },
    { number: '02', title: 'Design', description: 'Target architecture, IAM/SASE blueprint, and prioritised roadmap with business alignment.' },
    { number: '03', title: 'Implement', description: 'Phased rollout of identity controls, network segmentation, and policy enforcement.' },
    { number: '04', title: 'Validate', description: 'Control testing, red-team exercises, and compliance validation against defined outcomes.' },
    { number: '05', title: 'Operate', description: 'Runbooks, monitoring integration, and incident response alignment with new controls.' },
    { number: '06', title: 'Improve', description: 'Continuous maturity uplift, threat intelligence integration, and roadmap iteration.' },
  ],
  comparisonTitle: 'Perimeter security vs. MPC Zero Trust',
  comparisonIntro:
    'What enterprises typically encounter when comparing legacy perimeter models against MPC\'s Zero Trust strategy practice.',
  comparisonRows: [
    { criterion: 'Trust model', values: ['Implicit internal trust', 'Verify explicitly, least privilege everywhere'] },
    { criterion: 'Identity focus', values: ['Network-centric controls', 'Identity-centric access and continuous verification'] },
    { criterion: 'Cloud readiness', values: ['VPN-dependent remote access', 'SASE and policy-based secure access'] },
    { criterion: 'Threat response', values: ['Reactive incident handling', 'AI-enabled detection and proactive risk mitigation'] },
    { criterion: 'Roadmap clarity', values: ['Tool-led purchases', 'Business-aligned phased Zero Trust roadmap'] },
  ],
  related: [
    {
      icon: Lock,
      title: 'Application & Cloud Security',
      description: 'Secure applications and cloud workloads as part of your Zero Trust programme.',
      to: SOLUTION_APP_CLOUD_SECURITY,
    },
    {
      icon: Cloud,
      title: 'Infrastructure & Managed Operations',
      description: 'SOC/NOC operations and managed security for round-the-clock protection.',
      to: SOLUTION_INFRA_MANAGED_OPS,
    },
    {
      icon: Shield,
      title: 'Cloud Management',
      description: 'Cloud platform security and operations aligned to Zero Trust principles.',
      to: SOLUTION_CLOUD_MANAGEMENT,
    },
  ],
  faqs: [
    {
      q: 'What is Zero Trust and how does MPC implement it?',
      a: 'Zero Trust assumes no implicit trust — every user, device, and connection is verified. MPC designs identity-centric architectures with IAM, SASE integration, and continuous verification across your enterprise.',
    },
    {
      q: 'How long does a Zero Trust strategy engagement take?',
      a: 'Initial assessments typically run 4–8 weeks. Full architecture design and phased roadmaps range from 8–16 weeks depending on estate complexity.',
    },
    {
      q: 'Can MPC integrate with our existing security tools?',
      a: 'Yes. We design strategies that leverage your current investments while identifying gaps and integration paths for IAM, SASE, and threat detection.',
    },
    {
      q: 'Do you support AI-enabled cybersecurity?',
      a: 'Yes. AI-driven threat detection, behavioural analytics, and automated response are core parts of our strategy and operations offerings.',
    },
  ],
  faqTitle: 'Zero Trust Strategy — Frequently Asked Questions',
  ctaTitle: 'Strengthen your',
  ctaTitleAccent: 'Security Strategy',
  ctaBody:
    'Tell us about your security challenges. We\'ll design a Zero Trust roadmap that fits your enterprise.',
  ctaText: 'Talk to MPC',
};

export function CybersecurityZeroTrustStrategy() {
  return <OracleSolutionLayout config={CONFIG} />;
}
