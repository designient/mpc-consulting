import React from 'react';
import { UserCheck, Workflow, Users } from 'lucide-react';
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
import { CheckCircle } from 'lucide-react';
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
  body: 'Board-ready summary of findings, risk rating, and strategic recommendations.'
},
{
  title: 'Detailed Technical Report',
  body: 'Module-by-module assessment with evidence, root cause analysis, and fix instructions.'
},
{
  title: 'Risk Register',
  body: 'Prioritised list of risks (Critical / High / Medium / Low) with owner recommendations.'
},
{
  title: 'Remediation Roadmap',
  body: 'Sequenced action plan — quick wins first, strategic improvements second.'
}];

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
  title: 'Report',
  description:
  'Draft findings, review workshop with your team, and refinement of recommendations.'
},
{
  number: 'WK4',
  title: 'Recommend',
  description:
  'Final report delivered with risk register and prioritised remediation roadmap.'
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
          eyebrow="HCaaS"
          headline="Know Exactly Where Your Oracle System Stands"
          subhead="An independent, expert review of your Oracle Cloud environment — with a clear, prioritised roadmap to fix what's wrong and optimise what's underperforming."
          primaryCtaText="Request a Health Check"
          primaryCtaTo="/contact/"
          imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop"
          imageAlt="Analytics dashboards under review"
          breadcrumb={BREADCRUMB} />
        
        <QuickAnswerCard
          question="What is Health Check as a Service?"
          answer="HCaaS is MPC's structured 4-week Oracle Cloud audit. Senior consultants review your Oracle environment across six dimensions — performance, configuration, security, data quality, integration health, and user adoption — and deliver an executive summary, technical report, risk register, and prioritised remediation roadmap." />
        

        <section className="w-full bg-white px-4 py-12 md:px-10 md:py-16 lg:px-[60px]">
          <div className="max-w-[820px]">
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
        </section>

        <section className="w-full bg-bg-light px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="mb-10">
            <p className="section-eyebrow mb-3">
              The Six Dimensions
            </p>
            <Heading level={2}>What we assess</Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {DIMENSIONS.map((d, i) =>
            <Card key={i} bg="white">
                <div className="font-heading font-semibold text-cta text-[14px] mb-2">
                  0{i + 1}
                </div>
                <Heading level={3} className="mb-3">
                  {d.title}
                </Heading>
                <p className="font-body text-[16px] leading-[1.65] text-text-primary opacity-80">
                  {d.body}
                </p>
              </Card>
            )}
          </div>
        </section>

        <section className="w-full bg-white px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="mb-10">
            <p className="section-eyebrow mb-3">
              Deliverables
            </p>
            <Heading level={2}>What you receive</Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {DELIVERABLES.map((d, i) =>
            <Card key={i} bg="bg-light">
                <Heading level={3} className="mb-3">
                  {d.title}
                </Heading>
                <p className="font-body text-[15px] leading-[1.6] text-text-primary opacity-80">
                  {d.body}
                </p>
              </Card>
            )}
          </div>
        </section>

        <ProcessSteps
          eyebrow="Engagement Timeline"
          title="From kick-off to roadmap in 4 weeks"
          steps={TIMELINE_STEPS}
          variant="light" />
        

        <ComparisonTable
          eyebrow="Comparison"
          title="Vendor self-audit vs. MPC HCaaS"
          headers={['Criterion', 'Vendor self-audit', 'With MPC HCaaS']}
          highlightIndex={2}
          rows={COMPARISON_ROWS}
          bg="soft" />
        

        <RelatedServices items={RELATED} />
        <FAQAccordion
          eyebrow="FAQs"
          title="HCaaS — Frequently Asked Questions"
          items={FAQS}
          layout="full"
          bg="soft" />
        
        <CTABand
          title="Request your Oracle Health Check"
          body="We'll tell you exactly what's working, what isn't, and what to do about it — in four weeks."
          ctaText="Request a Health Check"
          ctaTo="/contact/"
          variant="centered" />
        
      </main>
      <FooterDark />
    </div>);

}