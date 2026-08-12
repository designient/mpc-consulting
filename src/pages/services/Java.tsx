import React from 'react';
import { Cloud, Database, Sparkles } from 'lucide-react';
import { StickyNav } from '../../components/layout/StickyNav';
import { FooterDark } from '../../components/sections/FooterDark';
import { SEO, ORGANIZATION_SCHEMA } from '../../components/seo/SEO';
import { ServiceHero } from '../../components/sections/heroes/ServiceHero';
import { ServiceWhatIs } from '../../components/sections/ServiceWhatIs';
import { TableOfContents } from '../../components/sections/TableOfContents';
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

const CASE_STUDY = getCaseStudyForSolution(SOLUTION_JAVA);
const TOC_ITEMS = withCaseStudyToc([
  { label: 'Overview', hash: 'overview' },
  { label: 'Process', hash: 'process' },
  { label: 'Comparison', hash: 'comparison' },
  { label: 'FAQ', hash: 'faq' }
]);

const OVERVIEW_IMAGE =
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop';

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
  label: 'Java Technologies'
}];

const TECH = [
'Java',
'Spring Boot',
'Spring Cloud',
'React.js',
'Angular',
'Node.js',
'PostgreSQL',
'MySQL',
'Oracle DB',
'Docker',
'Kubernetes',
'REST',
'GraphQL',
'GitLab',
'GitHub'];

const CAPABILITIES = [
{
  title: 'Spring Boot & Microservices',
  body: 'Decomposed, independently deployable services for complex enterprise applications.'
},
{
  title: 'REST & GraphQL APIs',
  body: 'API-first design, clean, documented, versioned interfaces that connect your systems.'
},
{
  title: 'Full-Stack Development',
  body: 'Java backend with React.js, Angular, or Node.js front-ends, complete application delivery.'
},
{
  title: 'Legacy Modernisation',
  body: 'Re-platform ageing Java monoliths into cloud-native microservices, without business disruption.'
},
{
  title: 'Oracle Integration',
  body: 'Custom Java applications designed to work with Oracle Cloud APIs, OIC, and OCI.'
},
{
  title: 'Database Engineering',
  body: 'PostgreSQL, MySQL, and Oracle DB, data modelling, query optimisation, and migration.'
}];

const PROCESS_STEPS = [
{
  number: '01',
  title: 'Discover',
  description:
  'Architecture review, dependency mapping, and clear definition of build vs. Integrate boundaries.'
},
{
  number: '02',
  title: 'Design',
  description:
  'API-first design, service boundaries, data model, and CI/CD pipeline blueprint.'
},
{
  number: '03',
  title: 'Develop',
  description:
  'Sprint-based delivery with code review, automated testing, and continuous integration.'
},
{
  number: '04',
  title: 'Deploy',
  description:
  'Containerised deployment to AWS, Azure, GCP, or OCI with observability built in.'
}];

const COMPARISON_ROWS = [
{
  criterion: 'Oracle ecosystem fit',
  values: [
  'Generic web shops',
  'Java services designed for Oracle Cloud integration']

},
{
  criterion: 'Architecture discipline',
  values: [
  'Pragmatic, often monolithic',
  'Microservices done deliberately, not by default']

},
{
  criterion: 'API quality',
  values: [
  'Documentation as an afterthought',
  'OpenAPI-first, versioned, contract-tested']

},
{
  criterion: 'Modernisation track record',
  values: ['Talks about it', 'Has migrated production Java monoliths']
}];

const FAQS = [
{
  q: 'What Java frameworks does MPC specialise in?',
  a: 'Spring Boot, Spring Cloud, and the broader Spring ecosystem. We build microservices, REST and GraphQL APIs, and full-stack Java applications.'
},
{
  q: 'Can MPC integrate Java applications with Oracle Cloud?',
  a: 'Yes. Our Java services are designed to integrate with Oracle Cloud APIs, Oracle Integration Cloud (OIC), and OCI, built by engineers who understand both worlds.'
},
{
  q: 'Do you handle legacy Java modernisation?',
  a: 'Yes. We re-platform ageing Java monoliths into cloud-native microservices using strangler-fig patterns to avoid business disruption.'
},
{
  q: 'What front-end stacks do you work with?',
  a: 'React.js, Angular, and Node.js. We build full-stack Java + JavaScript applications end-to-end.'
}];

const RELATED = [
{
  icon: Cloud,
  title: 'DevOps Services',
  description:
  'CI/CD pipelines and infrastructure that ship Java microservices reliably.',
  to: SOLUTION_DEVOPS
},
{
  icon: Database,
  title: 'ERP (Oracle Cloud)',
  description: 'Custom Java extensions that integrate with Oracle ERP.',
  to: SOLUTION_ERP
},
{
  icon: Sparkles,
  title: 'AI CoE',
  description:
  'AI agents and custom Oracle extensions built with Java and APEX.',
  to: SERVICE_AI_COE
}];

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Java Technologies & Application Development',
  provider: {
    '@type': 'Organization',
    name: 'MPC Cloud Consulting'
  },
  areaServed: ['India', 'UAE', 'Singapore', 'Australia', 'United Kingdom'],
  description:
  'Enterprise Java development. Spring Boot, microservices, REST/GraphQL APIs, full-stack, and legacy modernisation.',
  url: `https://www.mpccloudconsulting.com${SOLUTION_JAVA}`
};
export function Java() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="Java Technologies & Application Development | MPC Cloud"
        description="MPC delivers Java Spring Boot, microservices, REST/GraphQL APIs, full-stack and legacy modernisation for cloud transformation."
        canonicalPath={SOLUTION_JAVA}
        schema={[
        ORGANIZATION_SCHEMA,
        SERVICE_SCHEMA,
        buildBreadcrumbSchema(BREADCRUMB),
        buildFAQSchema(FAQS)]
        } />
      
      <StickyNav />
      <main className="flex-grow w-full">
        <ServiceHero
          eyebrow="Oracle Cloud · Java"
          headline="Enterprise Java Development"
          headlineAccent="for the Cloud Era"
          subhead="Custom Java applications, microservices architecture, and full-stack development built to integrate with Oracle Cloud and scale with your business."
          primaryCtaText="Discuss Your Build"
          primaryCtaTo="/contact/"
          imageSrc="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000&auto=format&fit=crop"
          imageAlt="Software engineering team at work"
          breadcrumb={BREADCRUMB} />

        <ServiceWhatIs
          title="What does MPC's Java practice deliver?"
          body="MPC builds production-grade enterprise Java applications using Spring Boot, microservices patterns, and API-first architectures, designed to integrate cleanly with Oracle Cloud and other enterprise platforms. We deliver full-stack development, REST and GraphQL APIs, legacy modernisation, and database engineering."
          imageSrc={OVERVIEW_IMAGE}
          imageAlt="Software engineering team at work"
        />

        <TableOfContents items={TOC_ITEMS} variant="inline" />

        <section
          className="scroll-mt-[140px] w-full bg-white px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="max-w-[1280px] mx-auto">
          <div className="mb-10">
          <p className="section-eyebrow mb-3">Overview</p>
          <Heading level={2} className="mb-5">
            Java development at enterprise scale
          </Heading>
          <p className="font-body text-[17px] leading-[1.75] text-text-primary opacity-85 mb-6 max-w-[820px]">
            Modern enterprises need custom applications that extend their Oracle
            Cloud investments, without introducing complexity or fragility.
            MPC's Java practice builds production-grade applications using
            Spring Boot, microservices patterns, and API-first architectures
            that integrate cleanly with Oracle and other enterprise platforms.
          </p>
          <div className="flex flex-wrap gap-2">
            {TECH.map((t) =>
            <span
              key={t}
              className="px-3.5 py-1.5 rounded-full border border-divider/30 bg-divider/5 font-body text-[13px] font-medium">
              
                {t}
              </span>
            )}
          </div>
          </div>
          </div>
        </section>

        <section
          id="overview"
          className="scroll-mt-[140px] w-full bg-bg-light px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="text-center mb-10 max-w-[800px] mx-auto">
            <p className="section-eyebrow mb-3">Overview</p>
            <Heading level={2}>What we build</Heading>
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
            title="How a Java engagement runs"
            intro="A four-stage delivery model for enterprise Java builds, from architecture through production deployment."
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
          title="Generic dev shop vs. MPC's Java practice"
          intro="What enterprises typically encounter when comparing generic development shops against MPC's Oracle-integrated Java practice."
          headers={['Criterion', 'Generic dev shop', 'With MPC']}
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
            title="Java. Frequently Asked Questions"
            items={FAQS}
            layout="full"
            bg="soft"
          />
        </div>

        <CTABand
          title="Discuss your development"
          titleAccent="Requirements"
          body="Tell us about your build, your stack, and your timeline. We'll design a Java engagement that fits."
          ctaText="Get in Touch"
          ctaTo="/contact/"
          variant="split"
        />
        
      </main>
      <FooterDark />
    </div>);

}