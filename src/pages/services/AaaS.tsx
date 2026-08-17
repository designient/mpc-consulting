import React from 'react';
import { Workflow, Users, Sparkles } from 'lucide-react';
import { StickyNav } from '../../components/layout/StickyNav';
import { FooterDark } from '../../components/sections/FooterDark';
import { SEO, ORGANIZATION_SCHEMA } from '../../components/seo/SEO';
import { ServiceHero } from '../../components/sections/heroes/ServiceHero';
import { ServiceWhatIs } from '../../components/sections/ServiceWhatIs';
import { TableOfContents } from '../../components/sections/TableOfContents';
import { Heading } from '../../components/ui/Heading';
import { Card } from '../../components/ui/Card';
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
  SERVICE_ORACLE,
  SOLUTION_AAAS,
  SOLUTION_BPC,
  SOLUTION_HCM,
} from '../../data/paths';
import {
  getCaseStudyForSolution,
  withCaseStudyToc,
} from '../../data/solutionCaseStudies';

const CASE_STUDY = getCaseStudyForSolution(SOLUTION_AAAS);
const TOC_ITEMS = withCaseStudyToc([
  { label: 'Overview', hash: 'overview' },
  { label: 'Comparison', hash: 'comparison' },
  { label: 'FAQ', hash: 'faq' }
]);

const OVERVIEW_IMAGE =
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop';

const BREADCRUMB = [
{
  label: 'Services'
},
{
  label: 'Oracle (Fusion & EBS)',
  to: SERVICE_ORACLE
},
{
  label: 'AaaS'
}];

const FRAMEWORK = [
{
  title: 'Change Management',
  body: 'Stakeholder analysis, change impact assessment, communication planning, and resistance management.'
},
{
  title: 'Training Design & Delivery',
  body: 'Role-based training programmes, classroom, e-learning, and job aids. Tailored to how your people actually work.'
},
{
  title: 'Communication Strategy',
  body: 'Structured internal communications that build awareness, desire, and confidence before go-live.'
},
{
  title: 'Super-User Programme',
  body: 'Identify, train, and support internal champions, the people who sustain adoption after MPC leaves.'
},
{
  title: 'Ongoing Enablement',
  body: 'Post-go-live support, new joiner onboarding, quarterly refreshers, and adoption analytics monitoring.'
}];

const COMPARISON_ROWS = [
{
  criterion: 'Programme depth',
  values: [
  'Training videos and a UAT pass',
  'End-to-end change, training, comms, super-users, enablement']

},
{
  criterion: 'Adoption measurement',
  values: [
  'Login counts at best',
  'Feature-level adoption analytics with quarterly reviews']

},
{
  criterion: 'AI integration',
  values: ['Not considered', 'AI tools woven into role-based training']
},
{
  criterion: 'Sustainability',
  values: [
  'Drops off post-go-live',
  'New joiner onboarding + quarterly refreshers built in']

}];

const FAQS = [
{
  q: 'When should AaaS start in an Oracle programme?',
  a: 'At project kick-off, not at go-live. The most successful adoption programmes begin during design so change impact is shaped, not absorbed.'
},
{
  q: 'Does AaaS cover technical and functional training?',
  a: 'Yes. Role-based training covers both technical capability (how to do the task in Oracle) and functional context (why the task matters and how it fits the business process).'
},
{
  q: 'How do you measure adoption success?',
  a: 'Feature-level adoption analytics, super-user feedback, support ticket trends, and structured user surveys at 30/60/90 days post go-live.'
},
{
  q: 'Can AaaS run on existing Oracle environments?',
  a: 'Yes. Many enterprises engage AaaS post-go-live when adoption has stalled, we run a diagnostic, then build a recovery programme.'
}];

const RELATED = [
{
  icon: Workflow,
  title: 'Business Process Consulting',
  description: 'Optimise the processes that adoption is enabling.',
  to: SOLUTION_BPC
},
{
  icon: Users,
  title: 'HCM',
  description: 'Pair AaaS with HCM go-live for maximum HR adoption.',
  to: SOLUTION_HCM
},
{
  icon: Sparkles,
  title: 'AI CoE',
  description:
  'AI training programmes that future-proof your workforce skills.',
  to: SERVICE_AI_COE
}];

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Adoption as a Service (AaaS)',
  provider: {
    '@type': 'Organization',
    name: 'MPC Cloud Consulting'
  },
  areaServed: ['India', 'UAE', 'Singapore', 'Australia', 'United Kingdom'],
  description:
  'Change management, training, communications, super-user programmes and ongoing enablement to maximise Oracle Cloud ROI.',
  url: `https://www.mpccloudconsulting.com${SOLUTION_AAAS}`
};
export function AaaS() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="Adoption as a Service (AaaS) | Oracle Cloud User Enablement | MPC"
        description="MPC AaaS maximises your Oracle Cloud ROI through change management, training and user enablement programmes."
        canonicalPath={SOLUTION_AAAS}
        schema={[
        ORGANIZATION_SCHEMA,
        SERVICE_SCHEMA,
        buildBreadcrumbSchema(BREADCRUMB),
        buildFAQSchema(FAQS)]
        } />
      
      <StickyNav />
      <main className="flex-grow w-full">
        <ServiceHero
          eyebrow="Oracle Cloud · AaaS"
          headline="Turn Deployment Into"
          headlineAccent="True Adoption"
          subhead="Going live is not the finish line. The ROI of Oracle Cloud only arrives when your people actually use it, confidently, correctly, and consistently."
          primaryCtaText="Book a Conversation"
          primaryCtaTo="/contact/"
          imageSrc="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop"
          imageAlt="Training workshop with engaged participants"
          breadcrumb={BREADCRUMB} />

        <ServiceWhatIs
          title="What is Adoption as a Service?"
          body="AaaS is MPC's structured user-enablement service for Oracle Cloud, covering change management, training, communications, super-user programmes, and ongoing enablement. It exists because implementation isn't enough: 70% of technology transformations fail to deliver intended benefits, and the cause is almost always human, not technical."
          imageSrc={OVERVIEW_IMAGE}
          imageAlt="Training workshop with engaged participants"
        />

        <TableOfContents items={TOC_ITEMS} variant="inline" />

        <section
          className="scroll-mt-[140px] w-full bg-white px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="max-w-[1280px] mx-auto">
          <div className="mb-10 max-w-[820px]">
            <p className="section-eyebrow mb-3">
              The Challenge
            </p>
            <Heading level={2} className="mb-5">
              Why most go-lives underdeliver
            </Heading>
            <p className="font-body text-[18px] leading-[1.7] text-text-primary opacity-85 mb-5">
              Research consistently shows that{' '}
              <span className="font-semibold text-cta">
                70% of technology transformations fail to deliver their intended
                benefits
              </span>{' '}
              and the primary cause is not technical. It is human.
            </p>
            <p className="font-body text-[17px] leading-[1.7] text-text-primary opacity-80">
              Systems go live, but users revert to old habits, workarounds
              proliferate, and the business benefits that justified the
              investment never materialise. AaaS exists because implementation
              is not enough.
            </p>
          </div>
          </div>
        </section>

        <section
          id="overview"
          className="scroll-mt-[140px] w-full bg-bg-light px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="text-center mb-10 max-w-[800px] mx-auto">
            <p className="section-eyebrow mb-3">Overview</p>
            <Heading level={2}>The AaaS framework</Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {FRAMEWORK.map((f, i) => (
              <Card key={i} bg="white">
                <div className="w-10 h-1 bg-divider mb-5" />
                <Heading level={3} className="mb-3">
                  {f.title}
                </Heading>
                <p className="font-body text-[16px] leading-[1.7] text-text-primary opacity-80">
                  {f.body}
                </p>
              </Card>
            ))}
          </div>
        </section>

        <ComparisonTable
          id="comparison"
          className="scroll-mt-[140px]"
          eyebrow="Comparison"
          title="Training-only vs. MPC AaaS"
          intro="What enterprises typically encounter when comparing training-only vendors against MPC's structured AaaS programme."
          headers={['Criterion', 'Training-only vendor', 'With MPC AaaS']}
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
            title="AaaS. Frequently Asked Questions"
            items={FAQS}
            layout="full"
            bg="soft"
          />
        </div>

        <CTABand
          title="Discuss your adoption"
          titleAccent="Programme"
          body="Tell us about your Oracle environment and your adoption challenges. We'll design a programme that fits."
          ctaText="Book a Conversation"
          ctaTo="/contact/"
          variant="split"
        />
        
      </main>
      <FooterDark />
    </div>);

}