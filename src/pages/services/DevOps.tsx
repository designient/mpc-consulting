import React from 'react';
import { Code2, Database, Sparkles } from 'lucide-react';
import { StickyNav } from '../../components/layout/StickyNav';
import { FooterDark } from '../../components/sections/FooterDark';
import { SEO, ORGANIZATION_SCHEMA } from '../../components/seo/SEO';
import { ServiceHero } from '../../components/sections/heroes/ServiceHero';
import { ServiceWhatIs } from '../../components/sections/ServiceWhatIs';
import { TableOfContents } from '../../components/sections/TableOfContents';
import { LifecyclePath } from '../../components/sections/LifecyclePath';
import { Heading } from '../../components/ui/Heading';
import { Card } from '../../components/ui/Card';
import { ProcessSteps } from '../../components/sections/ProcessSteps';
import { ComparisonTable } from '../../components/sections/ComparisonTable';
import { StatOverlayCaseStudy } from '../../components/sections/StatOverlayCaseStudy';
import { RelatedServices } from '../../components/sections/RelatedServices';
import {
  FAQAccordion,
  buildFAQSchema } from
'../../components/sections/FAQAccordion';
import { CTABand } from '../../components/sections/CTABand';
import { buildBreadcrumbSchema } from '../../components/sections/Breadcrumb';
import {
  SERVICE_AI_COE,
  SERVICE_CLOUD_DT,
  SERVICES_INDEX,
  SOLUTION_DEVOPS,
  SOLUTION_ERP,
  SOLUTION_JAVA,
} from '../../data/paths';
import {
  getCaseStudyForSolution,
  withCaseStudyToc,
} from '../../data/solutionCaseStudies';

const CASE_STUDY = getCaseStudyForSolution(SOLUTION_DEVOPS);
const TOC_ITEMS = withCaseStudyToc([
  { label: 'Overview', hash: 'overview' },
  { label: 'Process', hash: 'process' },
  { label: 'Comparison', hash: 'comparison' },
  { label: 'FAQ', hash: 'faq' }
]);

const OVERVIEW_IMAGE =
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop';

const BREADCRUMB = [
{
  label: 'Services',
  to: SERVICES_INDEX
},
{
  label: 'Cloud & Digital Transformation',
  to: SERVICE_CLOUD_DT
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
  to: SOLUTION_JAVA
},
{
  icon: Database,
  title: 'ERP (Oracle Cloud)',
  description:
  'Cloud infrastructure for Oracle ERP deployments and managed services.',
  to: SOLUTION_ERP
},
{
  icon: Sparkles,
  title: 'AI CoE',
  description:
  'AI agents and automation that operate within your DevOps platform.',
  to: SERVICE_AI_COE
}];

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'DevOps Services',
  provider: {
    '@type': 'Organization',
    name: 'MPC Cloud Consulting'
  },
  areaServed: ['India', 'UAE', 'Singapore', 'Australia', 'United Kingdom'],
  description:
  'CI/CD pipelines, Kubernetes orchestration, multi-cloud infrastructure, DR, and DevSecOps.',
  url: `https://www.mpccloudconsulting.com${SOLUTION_DEVOPS}`
};
export function DevOps() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="DevOps Services — CI/CD, Cloud & Containers | MPC Cloud"
        description="MPC DevOps: CI/CD pipelines (GitLab, Jenkins, GitHub Actions), Docker & Kubernetes, multi-cloud (AWS, Azure, GCP, OCI) and DR."
        canonicalPath={SOLUTION_DEVOPS}
        schema={[
        ORGANIZATION_SCHEMA,
        SERVICE_SCHEMA,
        buildBreadcrumbSchema(BREADCRUMB),
        buildFAQSchema(FAQS)]
        } />
      
      <StickyNav />
      <main className="flex-grow w-full">
        <ServiceHero
          eyebrow="Oracle Cloud · DevOps"
          headline="Accelerate Delivery"
          headlineAccent="with Enterprise-Grade DevOps"
          subhead="CI/CD pipelines, Kubernetes orchestration, and multi-cloud infrastructure — built to accelerate your software delivery and reduce operational risk."
          primaryCtaText="Talk to Our DevOps Team"
          primaryCtaTo="/contact/"
          imageSrc="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop"
          imageAlt="Modern data centre infrastructure"
          breadcrumb={BREADCRUMB} />

        <ServiceWhatIs
          title="What does enterprise DevOps look like?"
          body="DevOps is not a toolset — it is an operating model. MPC helps enterprises build the practices, pipelines, and platforms that allow development and operations to work as one — shipping faster, failing less, and recovering quicker. We deliver CI/CD, containers, multi-cloud infra, IaC, DR, and DevSecOps."
          imageSrc={OVERVIEW_IMAGE}
          imageAlt="Modern data centre infrastructure"
        />

        <TableOfContents items={TOC_ITEMS} variant="inline" />

        <section
          className="scroll-mt-[140px] w-full bg-white px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="max-w-[1280px] mx-auto">
          <div className="mb-10">
          <p className="section-eyebrow mb-3">Overview</p>
          <Heading level={2} className="mb-5">
            DevOps as a transformation enabler
          </Heading>
          <p className="font-body text-[17px] leading-[1.75] text-text-primary opacity-85 mb-8 max-w-[820px]">
            DevOps is not a toolset — it is an operating model. We help
            enterprises build the practices, pipelines, and platforms that allow
            development and operations to work as one.
          </p>
          <LifecyclePath stages={LIFECYCLE} />
          </div>
          </div>
        </section>

        <section
          id="overview"
          className="scroll-mt-[140px] w-full bg-bg-light px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="text-center mb-10 max-w-[800px] mx-auto">
            <p className="section-eyebrow mb-3">Overview</p>
            <Heading level={2}>What we deliver</Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {CAPABILITIES.map((cap, i) => (
              <Card key={i} bg="white">
                <div className="w-10 h-1 bg-divider mb-5" />
                <Heading level={3} className="mb-3">
                  {cap.title}
                </Heading>
                <p className="font-body text-[16px] leading-[1.7] text-text-primary opacity-80">
                  {cap.body}
                </p>
              </Card>
            ))}
          </div>
        </section>

        <div id="process" className="scroll-mt-[140px]">
          <ProcessSteps
            eyebrow="Delivery"
            title="Our DevOps engagement model"
            intro="A four-stage engagement model refined across enterprise cloud and platform transformations."
            steps={PROCESS_STEPS}
            variant="light"
            centerHeader
            accentStepTitles
          />
        </div>

        <ComparisonTable
          id="comparison"
          className="scroll-mt-[140px]"
          eyebrow="Comparison"
          title="Generic cloud vendor vs. MPC DevOps"
          intro="What enterprises typically encounter when comparing generic cloud vendors against MPC's Oracle-aware DevOps practice."
          headers={['Criterion', 'Generic cloud vendor', 'With MPC']}
          highlightIndex={2}
          rows={COMPARISON_ROWS}
          bg="white"
          centerHeader
        />

        <StatOverlayCaseStudy
          id="case-study"
          className="scroll-mt-[140px]"
          eyebrow="Featured Case Study"
          tag={CASE_STUDY.config.tag}
          headline={CASE_STUDY.config.headline}
          description={CASE_STUDY.config.description}
          metadata={CASE_STUDY.config.metadata}
          imageSrc={CASE_STUDY.config.imageSrc}
          imageAlt={CASE_STUDY.config.imageAlt}
          stat={CASE_STUDY.config.stat}
          statLabel={CASE_STUDY.config.statLabel}
          statContext={CASE_STUDY.config.statContext}
          ctaText="Read the full case study"
          ctaTo={CASE_STUDY.ctaTo}
          bg="soft"
        />

        <div className="w-full bg-bg-light h-[80px] lg:h-[120px]" />

        <RelatedServices
          id="related"
          eyebrow="Related Services"
          title="Continue exploring"
          items={RELATED}
          bg="white"
          centerHeader
        />

        <div id="faq" className="scroll-mt-[140px]">
          <FAQAccordion
            eyebrow="FAQs"
            title="DevOps — Frequently Asked Questions"
            items={FAQS}
            layout="full"
            bg="soft"
          />
        </div>

        <CTABand
          title="Start your DevOps"
          titleAccent="Journey"
          body="Whether you're starting fresh or modernising an existing platform — we'll architect the right path."
          ctaText="Talk to Our DevOps Team"
          ctaTo="/contact/"
          variant="split"
        />
        
      </main>
      <FooterDark />
    </div>);

}