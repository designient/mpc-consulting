import React from 'react';
import { Lock, Shield, Globe } from 'lucide-react';
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
  canonicalPath: SOLUTION_INFRA_MANAGED_OPS,
  breadcrumbLabel: 'Infrastructure & Managed Operations',
  parentService: SECURITY_PARENT,
  seoTitle: 'Infrastructure & Managed Security Operations | MPC',
  seoDescription:
    'MPC delivers network and endpoint security, MSP/SI services, SOC/NOC 24×7 monitoring, onsite engineering, AV/war room, and PMO for enterprise security operations.',
  serviceType: 'Infrastructure & Managed Security Operations',
  serviceDescription:
    'Network and endpoint security, managed services, SOC/NOC operations, onsite engineering, and PMO for enterprise infrastructure.',
  heroEyebrow: 'Security & Zero Trust · Managed Ops',
  heroHeadline: 'Operate security',
  heroHeadlineAccent: 'around the clock',
  heroSubhead:
    'Network and endpoint security, MSP and systems integration, SOC/NOC 24×7 monitoring, onsite engineering, and PMO — keeping your infrastructure secure and resilient.',
  heroCtaText: 'Talk to Our Security Team',
  heroImageSrc:
    'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2400&auto=format&fit=crop',
  whatIsTitle: 'What is MPC Infrastructure & Managed Operations?',
  whatIsBody:
    'MPC runs and secures enterprise infrastructure through managed security services, SOC/NOC operations, and resident engineering support. From network and endpoint protection to war room setup and PMO governance, we keep security operations running 24×7.',
  whatIsImageSrc:
    'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
  whatIsImageAlt: 'Network infrastructure and managed security operations',
  toc: [
    { label: 'Overview', hash: 'overview' },
    { label: 'Capabilities', hash: 'capabilities' },
    { label: 'Services', hash: 'modules' },
    { label: 'Process', hash: 'process' },
    { label: 'Comparison', hash: 'comparison' },
    { label: 'FAQ', hash: 'faq' },
  ],
  overviewTitle: 'Managed Security Operations with MPC',
  overviewParagraphs: [
    'Security strategy and tooling only deliver value when operations teams can detect, respond, and recover at speed — especially across distributed infrastructure and hybrid environments.',
    'MPC provides managed security operations from network and endpoint protection through SOC/NOC monitoring, onsite engineering, and programme management.',
  ],
  moduleChips: [
    'Network Security',
    'Endpoint Security',
    'MSP & SI',
    'SOC/NOC 24×7',
    'Onsite Engineering',
    'AV & War Room',
    'PMO',
  ],
  capabilitiesTitle: 'Our Managed Operations Capabilities',
  capabilities: [
    {
      title: 'Network & Endpoint Security',
      body: 'Firewall, segmentation, EDR, and endpoint protection deployed and managed across enterprise infrastructure.',
    },
    {
      title: 'Managed Services (MSP)',
      body: 'Outsourced security operations with defined SLAs, incident handling, and service reporting.',
    },
    {
      title: 'Systems Integration (SI)',
      body: 'Integration of security tools, SIEM, and monitoring platforms into cohesive operational workflows.',
    },
    {
      title: 'SOC/NOC Operations',
      body: '24×7 security and network operations centre monitoring with incident triage and escalation.',
    },
    {
      title: 'Resident & Onsite Engineering',
      body: 'Dedicated engineers embedded with your teams for hands-on support and knowledge transfer.',
    },
    {
      title: 'PMO & Programme Governance',
      body: 'Project and programme management for security transformation, war room setup, and AV collaboration.',
    },
  ],
  modulesSectionTitle: 'Managed operations we deliver',
  modulesSectionSubtitle:
    'Three operational pillars for enterprise infrastructure security and resilience.',
  modules: [
    {
      title: 'Managed Security Operations',
      desc: 'MSP delivery, systems integration, and security tool orchestration with defined SLAs and executive reporting.',
      imageSrc:
        'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Managed security operations centre',
    },
    {
      title: 'SOC/NOC Monitoring',
      desc: 'Round-the-clock monitoring, incident detection, triage, and escalation with resident engineering support.',
      imageSrc:
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'SOC and NOC 24x7 monitoring',
    },
    {
      title: 'Infrastructure & Collaboration',
      desc: 'Network and endpoint security, AV and war room setup, and PMO services for security programmes.',
      imageSrc:
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Infrastructure and collaboration security',
    },
  ],
  processTitle: 'Our managed operations process',
  processIntro:
    'A proven operating model for onboarding, stabilising, and scaling managed security operations.',
  processSteps: [
    { number: '01', title: 'Onboard', description: 'Environment discovery, tool integration, and runbook development with knowledge transfer.' },
    { number: '02', title: 'Stabilise', description: 'Incident backlog triage, alert tuning, and baseline operational metrics.' },
    { number: '03', title: 'Monitor', description: '24×7 SOC/NOC monitoring with defined escalation paths and SLA tracking.' },
    { number: '04', title: 'Respond', description: 'Incident response, containment, and recovery coordination with stakeholder communication.' },
    { number: '05', title: 'Optimise', description: 'Alert refinement, automation, and process improvement based on operational data.' },
    { number: '06', title: 'Scale', description: 'Capacity planning, resident engineering expansion, and programme governance via PMO.' },
  ],
  comparisonTitle: 'Generic MSSP vs. MPC Managed Ops',
  comparisonIntro:
    'What enterprises typically encounter when comparing generic MSSPs against MPC\'s integrated managed operations practice.',
  comparisonRows: [
    { criterion: 'Coverage hours', values: ['Business-hours support', 'SOC/NOC 24×7 with defined SLAs'] },
    { criterion: 'Integration', values: ['Ticket queue only', 'SI across security, cloud, and application tools'] },
    { criterion: 'Onsite presence', values: ['Remote-only', 'Resident and onsite engineering available'] },
    { criterion: 'Programme governance', values: ['Ad-hoc projects', 'PMO and war room setup for major programmes'] },
    { criterion: 'Enterprise context', values: ['Generic playbooks', 'Oracle and cloud-aware operational model'] },
  ],
  related: [
    {
      icon: Shield,
      title: 'Cybersecurity & Zero Trust Strategy',
      description: 'Strategy and architecture that guides managed operations priorities.',
      to: SOLUTION_ZERO_TRUST_STRATEGY,
    },
    {
      icon: Lock,
      title: 'Application & Cloud Security',
      description: 'AppSec and CSPM findings integrated into SOC workflows.',
      to: SOLUTION_APP_CLOUD_SECURITY,
    },
    {
      icon: Globe,
      title: 'Cloud Management',
      description: 'Cloud infrastructure operations aligned with security monitoring.',
      to: SOLUTION_CLOUD_MANAGEMENT,
    },
  ],
  faqs: [
    {
      q: 'Do you provide 24×7 security monitoring?',
      a: 'Yes. Our Infrastructure & Managed Operations practice includes SOC/NOC operations with round-the-clock monitoring, incident response, and resident engineering support.',
    },
    {
      q: 'What SLAs do managed security operations include?',
      a: 'SLAs are tailored to criticality tiers — typically P1 response within 1–4 hours depending on engagement scope and coverage hours.',
    },
    {
      q: 'Can MPC provide onsite or resident engineers?',
      a: 'Yes. Resident and onsite engineering support is available for enterprises that need embedded security operations capability.',
    },
    {
      q: 'Do you support war room and PMO services?',
      a: 'Yes. AV and collaboration solutions, war room setup, and PMO governance are part of our infrastructure and managed operations offering.',
    },
  ],
  faqTitle: 'Infrastructure & Managed Operations — Frequently Asked Questions',
  ctaTitle: 'Secure your',
  ctaTitleAccent: 'Operations 24×7',
  ctaBody:
    'Tell us about your infrastructure and monitoring needs. We\'ll design a managed operations model that fits.',
  ctaText: 'Talk to MPC',
};

export function InfrastructureManagedOperations() {
  return <OracleSolutionLayout config={CONFIG} />;
}
