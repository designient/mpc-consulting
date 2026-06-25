import React from 'react';
import { Shield, Lock, Globe } from 'lucide-react';
import { StickyNav } from '../../components/layout/StickyNav';
import { FooterDark } from '../../components/sections/FooterDark';
import { SEO, ORGANIZATION_SCHEMA } from '../../components/seo/SEO';
import { ServiceHero } from '../../components/sections/heroes/ServiceHero';
import { ServiceWhatIs } from '../../components/sections/ServiceWhatIs';
import { TableOfContents } from '../../components/sections/TableOfContents';
import { SolutionColumns } from '../../components/sections/SolutionColumns';
import { LifecyclePath } from '../../components/sections/LifecyclePath';
import { Heading } from '../../components/ui/Heading';
import { ComparisonTable } from '../../components/sections/ComparisonTable';
import {
  FAQAccordion,
  buildFAQSchema,
} from '../../components/sections/FAQAccordion';
import { CTABand } from '../../components/sections/CTABand';
import { buildBreadcrumbSchema } from '../../components/sections/Breadcrumb';

const TOC = [
  { label: 'Overview', hash: 'overview' },
  { label: 'Solutions', hash: 'solutions' },
  { label: 'Services', hash: 'services' },
  { label: 'Comparison', hash: 'comparison' },
  { label: 'FAQ', hash: 'faq' },
];

const OVERVIEW_IMAGE =
  'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop';

const BREADCRUMB = [
  { label: 'Services', to: '/services/' },
  { label: 'Security & Zero Trust' },
];

const SOLUTIONS = [
  {
    icon: Shield,
    title: 'Cybersecurity & Zero Trust Strategy',
    imageSrc:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Zero Trust cybersecurity strategy',
    items: [
      'Zero Trust Architecture & Identity-Centric Security',
      'Identity & Access Management (IAM), SASE Integration',
      'Advanced Threat Protection & Digital Risk Mitigation',
      'AI enabled cyber security',
    ],
  },
  {
    icon: Lock,
    title: 'Application & Cloud Security',
    imageSrc:
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Application and cloud security engineering',
    items: [
      'Application Security (AppSec) & Vulnerability Assessment',
      'Cloud Security Posture Management (CSPM)',
      'Penetration Testing & Compliance Readiness',
      'AI driven insights and analytics',
    ],
  },
  {
    icon: Globe,
    title: 'Infrastructure & Managed Operations',
    imageSrc:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Network infrastructure and managed security operations',
    items: [
      'Network & Endpoint Security Solutions',
      'Managed Services (MSP) & Systems Integration (SI)',
      'SOC/NOC Operations & 24×7 Monitoring',
      'Resident & Onsite Engineering Support',
      'AV & Collaboration Solutions | War Room Setup',
      'Project and program management office (PMO) services',
    ],
  },
];

const SERVICE_LIFECYCLE = [
  'Consulting',
  'Transformation Architecture',
  'Zero Trust Strategy',
  'Managed Services',
  'Environment Hosting',
  'Infra Management',
];

const COMPARISON_ROWS = [
  {
    criterion: 'Zero Trust maturity',
    values: [
      'Perimeter-only security',
      'Identity-centric Zero Trust architecture and SASE integration',
    ],
  },
  {
    criterion: 'Cloud-native security',
    values: [
      'On-premise tooling retrofitted',
      'CSPM, AppSec, and cloud-native posture management',
    ],
  },
  {
    criterion: '24×7 operations',
    values: [
      'Business-hours support',
      'SOC/NOC operations with round-the-clock monitoring',
    ],
  },
  {
    criterion: 'AI-enabled detection',
    values: [
      'Rule-based alerting only',
      'AI-driven threat detection, insights, and analytics',
    ],
  },
  {
    criterion: 'Enterprise integration',
    values: [
      'Standalone security tools',
      'Integrated with cloud, applications, and infrastructure',
    ],
  },
];

const FAQS = [
  {
    q: 'What is Zero Trust and how does MPC implement it?',
    a: 'Zero Trust assumes no implicit trust — every user, device, and connection is verified. MPC designs identity-centric Zero Trust architectures with IAM, SASE integration, and continuous verification across your enterprise.',
  },
  {
    q: 'Do you provide 24×7 security monitoring?',
    a: 'Yes. Our Infrastructure & Managed Operations practice includes SOC/NOC operations with round-the-clock monitoring, incident response, and resident engineering support.',
  },
  {
    q: 'Can MPC assess our application and cloud security posture?',
    a: 'Yes. We deliver AppSec assessments, vulnerability testing, CSPM, penetration testing, and compliance readiness reviews — with AI-driven insights where applicable.',
  },
  {
    q: 'Do you support compliance and audit readiness?',
    a: 'Yes. Penetration testing, compliance readiness, and PMO services are part of our security offering — helping you meet regulatory and audit requirements.',
  },
];

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Security & Zero Trust Consulting',
  provider: {
    '@type': 'Organization',
    name: 'MPC Cloud Consulting',
  },
  areaServed: ['India', 'UAE', 'Singapore', 'Australia', 'United Kingdom'],
  description:
    'Cybersecurity strategy, application and cloud security, Zero Trust architecture, and managed SOC/NOC operations.',
  url: 'https://www.mpccloudconsulting.com/services/security-zero-trust/',
};

export function SecurityZeroTrust() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="Security & Zero Trust | Cybersecurity & Managed Operations | MPC"
        description="MPC delivers Zero Trust architecture, AppSec, CSPM, SOC/NOC 24×7 monitoring, and AI-enabled cybersecurity for enterprise environments."
        canonicalPath="/services/security-zero-trust/"
        schema={[
          ORGANIZATION_SCHEMA,
          SERVICE_SCHEMA,
          buildBreadcrumbSchema(BREADCRUMB),
          buildFAQSchema(FAQS),
        ]}
      />

      <StickyNav />
      <main className="flex-grow w-full">
        <ServiceHero
          eyebrow="Security & Zero Trust"
          headline="Secure by Design."
          headlineAccent="Trusted by Default."
          subhead="Cybersecurity strategy, application and cloud security, and managed operations — built on Zero Trust principles and AI-enabled threat protection."
          primaryCtaText="Talk to Our Security Team"
          primaryCtaTo="/contact/"
          secondaryCtaText="Explore Solutions"
          secondaryCtaTo="#solutions"
          imageSrc="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000&auto=format&fit=crop"
          imageAlt="Cybersecurity and network protection"
          breadcrumb={BREADCRUMB}
        />

        <ServiceWhatIs
          id="overview"
          title="What is MPC's Security & Zero Trust practice?"
          body="MPC's Security & Zero Trust practice protects enterprise environments from strategy through operations. We design Zero Trust architectures, secure applications and cloud workloads, and run SOC/NOC operations with 24×7 monitoring — combining traditional security expertise with AI-enabled detection and analytics."
          imageSrc={OVERVIEW_IMAGE}
          imageAlt="Cybersecurity and network protection"
        />

        <TableOfContents items={TOC} variant="inline" />

        <SolutionColumns id="solutions" columns={SOLUTIONS} />

        <section
          id="services"
          className="scroll-mt-[140px] w-full bg-white px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-10 max-w-[800px] mx-auto">
              <p className="section-eyebrow mb-3">Services</p>
              <Heading level={2}>Security services lifecycle</Heading>
              <p className="font-body text-[17px] leading-[1.7] text-text-primary opacity-80 mt-4">
                From Zero Trust strategy through managed infrastructure and
                round-the-clock operations.
              </p>
            </div>
            <LifecyclePath stages={SERVICE_LIFECYCLE} />
          </div>
        </section>

        <ComparisonTable
          id="comparison"
          className="scroll-mt-[140px]"
          eyebrow="Comparison"
          title="Generic MSSP vs. MPC"
          intro="What enterprises typically encounter when comparing generic managed security providers against MPC's integrated Zero Trust practice."
          headers={['Criterion', 'Generic MSSP', 'With MPC']}
          highlightIndex={2}
          rows={COMPARISON_ROWS}
          bg="soft"
          centerHeader
        />

        <div id="faq" className="scroll-mt-[140px]">
          <FAQAccordion
            eyebrow="FAQs"
            title="Security & Zero Trust — Frequently Asked Questions"
            items={FAQS}
            layout="full"
            bg="white"
          />
        </div>

        <CTABand
          title="Strengthen your"
          titleAccent="Security Posture"
          body="Tell us about your security challenges. We'll design a Zero Trust approach that fits your enterprise."
          ctaText="Talk to Our Security Team"
          ctaTo="/contact/"
          variant="split"
        />
      </main>
      <FooterDark />
    </div>
  );
}
