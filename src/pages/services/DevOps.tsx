import React from 'react';
import { Code2, Database, Sparkles } from 'lucide-react';
import { StickyNav } from '../../components/layout/StickyNav';
import { FooterDark } from '../../components/sections/FooterDark';
import { SEO, ORGANIZATION_SCHEMA } from '../../components/seo/SEO';
import { ServiceHero } from '../../components/sections/heroes/ServiceHero';
import { QuickAnswerCard } from '../../components/sections/QuickAnswerCard';
import { Heading } from '../../components/ui/Heading';
import { Card } from '../../components/ui/Card';
import { ProcessSteps } from '../../components/sections/ProcessSteps';
import { ComparisonTable } from '../../components/sections/ComparisonTable';
import { RelatedServices } from '../../components/sections/RelatedServices';
import {
  FAQAccordion,
  buildFAQSchema } from
'../../components/sections/FAQAccordion';
import { CTABand } from '../../components/sections/CTABand';
import { buildBreadcrumbSchema } from '../../components/sections/Breadcrumb';
const BREADCRUMB = [
{
  label: 'Services',
  to: '/services/'
},
{
  label: 'DevOps Services'
}];

const CAPABILITIES = [
{
  title: 'CI/CD Pipelines',
  body: 'Automated build, test, and deployment pipelines using GitLab CI, Jenkins, or GitHub Actions.'
},
{
  title: 'Container Orchestration',
  body: 'Docker containerisation and Kubernetes cluster management for scalable, resilient deployments.'
},
{
  title: 'Multi-Cloud Infrastructure',
  body: 'AWS, Azure, GCP, and OCI — managed, monitored, and optimised.'
},
{
  title: 'Infrastructure as Code',
  body: 'Terraform, Ansible, and cloud-native IaC — repeatable, version-controlled infrastructure.'
},
{
  title: 'Backup & Disaster Recovery',
  body: 'Enterprise DR strategies with documented RTO/RPO targets and tested recovery procedures.'
},
{
  title: 'DevSecOps',
  body: 'Security integrated into the pipeline — not bolted on at the end.'
}];

const LIFECYCLE = [
'Plan',
'Code',
'Build',
'Test',
'Release',
'Deploy',
'Operate',
'Monitor'];

const PROCESS_STEPS = [
{
  number: '01',
  title: 'Assess',
  description:
  'Current pipeline audit, deployment frequency baseline, and DORA metrics establishment.'
},
{
  number: '02',
  title: 'Design',
  description:
  'Target architecture: pipelines, environments, IaC, observability, and security gates.'
},
{
  number: '03',
  title: 'Implement',
  description:
  'Build out CI/CD, containers, IaC, and monitoring — with developer enablement workshops.'
},
{
  number: '04',
  title: 'Operate',
  description:
  'Managed operations, incident response, SLO tracking, and continuous optimisation.'
}];

const COMPARISON_ROWS = [
{
  criterion: 'Cloud coverage',
  values: [
  'Usually one cloud',
  'AWS, Azure, GCP, and OCI — including Oracle ecosystem']

},
{
  criterion: 'Toolchain breadth',
  values: [
  'Whatever they know',
  'GitLab, Jenkins, GitHub Actions, Terraform, Ansible']

},
{
  criterion: 'Security posture',
  values: ['Bolted on at the end', 'DevSecOps from day one']
},
{
  criterion: 'Outcome focus',
  values: [
  'Tools delivered',
  'DORA metrics moved — deploy freq, lead time, MTTR, change failure rate']

}];

const FAQS = [
{
  q: 'Which CI/CD platforms does MPC work with?',
  a: 'GitLab CI, Jenkins, GitHub Actions, and Oracle DevOps. We choose based on your existing toolchain and team preferences.'
},
{
  q: 'Can MPC manage Kubernetes in production?',
  a: 'Yes. We deliver Kubernetes cluster design, deployment, ongoing operations, and incident response across AWS EKS, Azure AKS, GCP GKE, and OCI OKE.'
},
{
  q: 'Do you support multi-cloud strategies?',
  a: 'Yes. We design and operate multi-cloud architectures with consistent IaC and observability across AWS, Azure, GCP, and OCI.'
},
{
  q: 'How do you measure DevOps success?',
  a: 'We track DORA metrics — deployment frequency, lead time for changes, mean time to recovery, and change failure rate — and report against them quarterly.'
}];

const RELATED = [
{
  icon: Code2,
  title: 'Java Technologies',
  description: 'Java microservices delivered through MPC DevOps pipelines.',
  to: '/services/java-technologies/'
},
{
  icon: Database,
  title: 'ERP (Oracle Cloud)',
  description:
  'Cloud infrastructure for Oracle ERP deployments and managed services.',
  to: '/services/erp-oracle-cloud/'
},
{
  icon: Sparkles,
  title: 'MPC Tech Hub',
  description:
  'AI agents and automation that operate within your DevOps platform.',
  to: '/services/mpc-tech-hub/'
}];

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'DevOps Services',
  provider: {
    '@type': 'Organization',
    name: 'MPC Cloud Consulting'
  },
  areaServed: ['India', 'UAE', 'Australia', 'United Kingdom'],
  description:
  'CI/CD pipelines, Kubernetes orchestration, multi-cloud infrastructure, DR, and DevSecOps.',
  url: 'https://www.mpccloudconsulting.com/services/devops/'
};
export function DevOps() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="DevOps Services — CI/CD, Cloud & Containers | MPC Cloud"
        description="MPC DevOps: CI/CD pipelines (GitLab, Jenkins, GitHub Actions), Docker & Kubernetes, multi-cloud (AWS, Azure, GCP, OCI) and DR."
        canonicalPath="/services/devops/"
        schema={[
        ORGANIZATION_SCHEMA,
        SERVICE_SCHEMA,
        buildBreadcrumbSchema(BREADCRUMB),
        buildFAQSchema(FAQS)]
        } />
      
      <StickyNav />
      <main className="flex-grow w-full">
        <ServiceHero
          eyebrow="DevOps Services"
          headline="Accelerate Delivery with Enterprise-Grade DevOps"
          subhead="CI/CD pipelines, Kubernetes orchestration, and multi-cloud infrastructure — built to accelerate your software delivery and reduce operational risk."
          primaryCtaText="Talk to Our DevOps Team"
          primaryCtaTo="/contact/"
          imageSrc="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop"
          imageAlt="Modern data centre infrastructure"
          breadcrumb={BREADCRUMB} />
        
        <QuickAnswerCard
          question="What does enterprise DevOps look like?"
          answer="DevOps is not a toolset — it is an operating model. MPC helps enterprises build the practices, pipelines, and platforms that allow development and operations to work as one — shipping faster, failing less, and recovering quicker. We deliver CI/CD, containers, multi-cloud infra, IaC, DR, and DevSecOps." />
        

        <section className="w-full bg-white px-4 py-12 md:px-10 md:py-16 lg:px-[60px]">
          <Heading level={2} className="mb-5">
            DevOps as a transformation enabler
          </Heading>
          <p className="font-body text-[17px] leading-[1.75] text-text-primary opacity-85 mb-8 max-w-[820px]">
            DevOps is not a toolset — it is an operating model. We help
            enterprises build the practices, pipelines, and platforms that allow
            development and operations to work as one.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-[900px]">
            {LIFECYCLE.map((stage, i) =>
            <div
              key={stage}
              className="rounded-card border border-divider/20 bg-divider/5 p-4 text-center">
              
                <div className="font-heading font-semibold text-cta text-[14px] uppercase tracking-[0.8px] mb-1">
                  0{i + 1}
                </div>
                <div className="font-body text-[14px] font-medium text-text-primary">
                  {stage}
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="w-full bg-bg-light px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="mb-10">
            <p className="font-body text-[12px] uppercase tracking-[0.8px] font-semibold text-divider mb-3">
              Capabilities
            </p>
            <Heading level={2}>What we deliver</Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {CAPABILITIES.map((cap, i) =>
            <Card key={i} bg="white">
                <Heading level={3} className="mb-3">
                  {cap.title}
                </Heading>
                <p className="font-body text-[16px] leading-[1.65] text-text-primary opacity-80">
                  {cap.body}
                </p>
              </Card>
            )}
          </div>
        </section>

        <ProcessSteps
          eyebrow="Delivery"
          title="Our DevOps engagement model"
          steps={PROCESS_STEPS}
          variant="light" />
        

        <ComparisonTable
          eyebrow="Comparison"
          title="Generic cloud vendor vs. MPC DevOps"
          headers={['Criterion', 'Generic cloud vendor', 'With MPC']}
          highlightIndex={2}
          rows={COMPARISON_ROWS}
          bg="soft" />
        

        <RelatedServices items={RELATED} />
        <FAQAccordion
          eyebrow="FAQs"
          title="DevOps — Frequently Asked Questions"
          items={FAQS}
          layout="full"
          bg="soft" />
        
        <CTABand
          title="Start your DevOps journey"
          body="Whether you're starting fresh or modernising an existing platform — we'll architect the right path."
          ctaText="Talk to Our DevOps Team"
          ctaTo="/contact/"
          variant="centered" />
        
      </main>
      <FooterDark />
    </div>);

}