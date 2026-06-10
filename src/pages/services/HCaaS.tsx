import React from 'react';
import { Link } from 'react-router-dom';
import { UserCheck, Workflow, Users, ArrowRight } from 'lucide-react';
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
import { RelatedServices } from '../../components/sections/RelatedServices';
import {
  FAQAccordion,
  buildFAQSchema } from
'../../components/sections/FAQAccordion';
import { CTABand } from '../../components/sections/CTABand';
import { buildBreadcrumbSchema } from '../../components/sections/Breadcrumb';
import { CheckCircle } from 'lucide-react';
const TOC = [
  { label: 'Overview', hash: 'overview' },
  { label: 'Capabilities', hash: 'capabilities' },
  { label: 'Process', hash: 'process' },
  { label: 'Comparison', hash: 'comparison' },
  { label: 'FAQ', hash: 'faq' }
];

const OVERVIEW_IMAGE =
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop';

const BREADCRUMB = [
{
  label: 'Services',
  to: '/services/'
},
{
  label: 'HCaaS'
}];

const ELIGIBILITY = [
'Your Oracle system has been live 12+ months with no formal review',
"You're experiencing performance issues, reporting problems, or user complaints",
"You're preparing for an Oracle upgrade or extension programme",
'A CFO or CIO needs independent assurance that Oracle investment is performing'];

const DIMENSIONS = [
{
  title: 'Performance',
  body: 'System response times, batch job performance, concurrent request analysis, and query optimisation opportunities.'
},
{
  title: 'Configuration',
  body: 'Setups reviewed against Oracle best practices. Identification of misconfigurations causing downstream problems.'
},
{
  title: 'Security',
  body: 'User access review, role and responsibility analysis, segregation of duties assessment, and data security controls.'
},
{
  title: 'Data Quality',
  body: 'Master data review — Customers, Suppliers, Employees, Chart of Accounts. Duplicate and integrity analysis.'
},
{
  title: 'Integration Health',
  body: 'OIC and middleware review — interface error rates, performance, and integration architecture assessment.'
},
{
  title: 'User Adoption',
  body: 'Login rates, feature utilisation, and user feedback analysis. Identifying where low adoption is limiting ROI.'
}];

const DELIVERABLES = [
  {
    title: 'Executive Summary',
    desc: 'Board-ready summary of findings, risk rating, and strategic recommendations.',
    imageSrc:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Executive team reviewing health check findings',
  },
  {
    title: 'Detailed Technical Report',
    desc: 'Module-by-module assessment with evidence, root cause analysis, and fix instructions.',
    imageSrc:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Technical consultant reviewing Oracle system report',
  },
  {
    title: 'Risk Register',
    desc: 'Prioritised list of risks (Critical / High / Medium / Low) with owner recommendations.',
    imageSrc:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Risk assessment dashboard on screen',
  },
  {
    title: 'Remediation Roadmap',
    desc: 'Sequenced action plan — quick wins first, strategic improvements second.',
    imageSrc:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Team planning remediation roadmap on whiteboard',
  },
];

const TIMELINE_STEPS = [
{
  number: 'WK1',
  title: 'Discover',
  description:
  'Access provisioning, stakeholder interviews, documentation review.'
},
{
  number: 'WK2-3',
  title: 'Analyse',
  description:
  'System analysis, configuration review, and performance testing across all six dimensions.'
},
{
  number: 'WK4',
  title: 'Report & Recommend',
  description:
  'Draft findings, review workshop with your team, and refinement of recommendations. Final report delivered with risk register and prioritised remediation roadmap.'
}];

const COMPARISON_ROWS = [
{
  criterion: 'Independence',
  values: [
  'Your implementation partner reviews their own work',
  'Truly independent — we audit any Oracle environment']

},
{
  criterion: 'Assessment dimensions',
  values: [
  '1–2 areas',
  'All six: performance, config, security, data, integration, adoption']

},
{
  criterion: 'Deliverable quality',
  values: [
  'Slide deck',
  'Exec summary + technical report + risk register + roadmap']

},
{
  criterion: 'Timeline',
  values: ['Open-ended', 'Fixed 4-week engagement']
}];

const FAQS = [
{
  q: 'What is included in an HCaaS engagement?',
  a: 'Independent audit of your Oracle environment across six dimensions — performance, configuration, security, data quality, integration health, and user adoption — followed by an executive summary, technical report, risk register, and remediation roadmap.'
},
{
  q: 'How long does HCaaS take?',
  a: '4 weeks from access provisioning to final report.'
},
{
  q: 'Do we need to give you full system access?',
  a: 'Yes, read-only access for the duration of the engagement. All access is logged, time-bound, and revoked at completion.'
},
{
  q: 'Can MPC fix what we find?',
  a: 'Yes. After delivery, you can engage MPC for remediation work — but the audit itself is independent and not contingent on remediation engagement.'
}];

const RELATED = [
{
  icon: UserCheck,
  title: 'Adoption as a Service',
  description:
  'If user adoption is the issue, AaaS programmes can dramatically lift ROI.',
  to: '/services/adoption-as-a-service/'
},
{
  icon: Workflow,
  title: 'Business Process Consulting',
  description:
  'If process issues underlie technical problems, BPC addresses the root cause.',
  to: '/services/business-process-consulting/'
},
{
  icon: Users,
  title: 'HCM',
  description: 'For HCM-specific health checks and remediation.',
  to: '/services/hcm/'
}];

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Health Check as a Service (HCaaS)',
  provider: {
    '@type': 'Organization',
    name: 'MPC Cloud Consulting'
  },
  areaServed: ['India', 'UAE', 'Singapore', 'Australia', 'United Kingdom'],
  description:
  'Independent Oracle Cloud audit across performance, configuration, security, data quality, integration health and user adoption.',
  url: 'https://www.mpccloudconsulting.com/services/health-check-as-a-service/'
};
export function HCaaS() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="Health Check as a Service (HCaaS) | Oracle Cloud Review | MPC"
        description="MPC HCaaS delivers a comprehensive Oracle Cloud audit — performance, configuration, security and optimisation recommendations."
        canonicalPath="/services/health-check-as-a-service/"
        schema={[
        ORGANIZATION_SCHEMA,
        SERVICE_SCHEMA,
        buildBreadcrumbSchema(BREADCRUMB),
        buildFAQSchema(FAQS)]
        } />
      
      <StickyNav />
      <main className="flex-grow w-full">
        <ServiceHero
          eyebrow="Oracle Cloud · HCaaS"
          headline="Know Exactly Where"
          headlineAccent="Your Oracle System Stands"
          subhead="An independent, expert review of your Oracle Cloud environment — with a clear, prioritised roadmap to fix what's wrong and optimise what's underperforming."
          primaryCtaText="Request a Health Check"
          primaryCtaTo="/contact/"
          imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop"
          imageAlt="Analytics dashboards under review"
          breadcrumb={BREADCRUMB} />

        <ServiceWhatIs
          title="What is Health Check as a Service?"
          body="HCaaS is MPC's structured 4-week Oracle Cloud audit. Senior consultants review your Oracle environment across six dimensions — performance, configuration, security, data quality, integration health, and user adoption — and deliver an executive summary, technical report, risk register, and prioritised remediation roadmap."
          imageSrc={OVERVIEW_IMAGE}
          imageAlt="Analytics dashboards under review"
        />

        <TableOfContents items={TOC} variant="inline" />

        <section
          id="overview"
          className="scroll-mt-[140px] w-full bg-white px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="max-w-[1280px] mx-auto">
          <div className="mb-10 max-w-[820px]">
            <p className="section-eyebrow mb-3">
              Who Needs It
            </p>
            <Heading level={2} className="mb-6">
              Is HCaaS right for you?
            </Heading>
            <ul className="space-y-3">
              {ELIGIBILITY.map((item, i) =>
              <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-divider mt-1 flex-shrink-0" />
                  <span className="font-body text-[17px] leading-[1.6] text-text-primary opacity-85">
                    {item}
                  </span>
                </li>
              )}
            </ul>
          </div>
          </div>
        </section>

        <section
          id="capabilities"
          className="scroll-mt-[140px] w-full bg-bg-light px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="text-center mb-10 max-w-[800px] mx-auto">
            <p className="section-eyebrow mb-3">Capabilities</p>
            <Heading level={2}>What we assess</Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {DIMENSIONS.map((d, i) => (
              <Card key={i} bg="white">
                <div className="w-10 h-1 bg-divider mb-5" />
                <Heading level={3} className="mb-3">
                  {d.title}
                </Heading>
                <p className="font-body text-[16px] leading-[1.7] text-text-primary opacity-80">
                  {d.body}
                </p>
              </Card>
            ))}
          </div>
        </section>

        <section
          id="deliverables"
          className="scroll-mt-[140px] w-full bg-white px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="text-center mb-10 max-w-[800px] mx-auto">
            <p className="section-eyebrow mb-3">Deliverables</p>
            <Heading level={2} className="mb-4">
              What you receive
            </Heading>
            <p className="font-body text-[17px] leading-[1.7] text-text-primary opacity-80">
              Four structured outputs from every HCaaS engagement — designed for
              board visibility, technical clarity, and a prioritised path to
              remediation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {DELIVERABLES.map((item) => (
              <article
                key={item.title}
                className="flex flex-col h-full rounded-card border border-cta bg-white p-5 md:p-6">
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  className="w-full aspect-[4/3] object-cover rounded-[10px] md:rounded-[12px] mb-5 md:mb-6"
                />
                <h3 className="type-h3 text-[20px] md:text-[22px] text-text-primary mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-[15px] leading-[1.65] text-text-primary opacity-80 flex-grow mb-6">
                  {item.desc}
                </p>
                <Link
                  to="/contact/"
                  className="inline-flex items-center gap-1.5 font-body text-[13px] font-semibold uppercase tracking-[0.06em] text-cta border-b-2 border-cta pb-0.5 w-fit hover:gap-2 transition-all mt-auto">
                  Explore
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <div id="process" className="scroll-mt-[140px]">
          <ProcessSteps
            eyebrow="Engagement Timeline"
            title="From kick-off to roadmap in 4 weeks"
            intro="A fixed four-week engagement timeline — from access provisioning through to a prioritised remediation roadmap."
            steps={TIMELINE_STEPS}
            variant="light"
            centerHeader
            accentStepTitles
          />
        </div>

        <ComparisonTable
          id="comparison"
          className="scroll-mt-[140px]"
          eyebrow="Comparison"
          title="Vendor self-audit vs. MPC HCaaS"
          intro="What enterprises typically encounter when comparing vendor self-audits against MPC's independent HCaaS engagement."
          headers={['Criterion', 'Vendor self-audit', 'With MPC HCaaS']}
          highlightIndex={2}
          rows={COMPARISON_ROWS}
          bg="white"
          centerHeader
        />

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
            title="HCaaS — Frequently Asked Questions"
            items={FAQS}
            layout="full"
            bg="soft"
          />
        </div>

        <CTABand
          title="Request your Oracle"
          titleAccent="Health Check"
          body="We'll tell you exactly what's working, what isn't, and what to do about it — in four weeks."
          ctaText="Request a Health Check"
          ctaTo="/contact/"
          variant="split"
        />
        
      </main>
      <FooterDark />
    </div>);

}