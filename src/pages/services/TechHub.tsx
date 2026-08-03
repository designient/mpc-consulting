import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Workflow, Database, ArrowRight } from 'lucide-react';
import { StickyNav } from '../../components/layout/StickyNav';
import { FooterDark } from '../../components/sections/FooterDark';
import { SEO, ORGANIZATION_SCHEMA } from '../../components/seo/SEO';
import { ServiceHero } from '../../components/sections/heroes/ServiceHero';
import { ServiceWhatIs } from '../../components/sections/ServiceWhatIs';
import { TableOfContents } from '../../components/sections/TableOfContents';
import { Heading } from '../../components/ui/Heading';
import { Card } from '../../components/ui/Card';
import { ComparisonTable } from '../../components/sections/ComparisonTable';
import { RelatedServices } from '../../components/sections/RelatedServices';
import { ServiceCapabilities } from '../../components/sections/ServiceCapabilities';
import {
  FAQAccordion,
  buildFAQSchema } from
'../../components/sections/FAQAccordion';
import { CTABand } from '../../components/sections/CTABand';
import { buildBreadcrumbSchema } from '../../components/sections/Breadcrumb';
import {
  SERVICE_AI_COE,
  SERVICES_INDEX,
  SOLUTION_BPC,
  SOLUTION_ERP,
  SOLUTION_FINANCIAL_CLOSE_ASSISTANT,
  SOLUTION_HCM,
  SOLUTION_PO_LIFECYCLE_ANALYZER,
  SOLUTION_CV_SCREENING_AGENT,
  SOLUTION_HR_ONBOARDING_ASSISTANT,
  SOLUTION_HR_PROBATION_ASSIST,
  SOLUTION_PAYROLL_ISSUE_ANALYZER,
} from '../../data/paths';
const TOC = [
  { label: 'Overview', hash: 'overview' },
  { label: 'Agents', hash: 'agents' },
  { label: 'Focus Areas', hash: 'focus' },
  { label: 'Extensions', hash: 'extensions' },
  { label: 'Comparison', hash: 'comparison' },
  { label: 'FAQ', hash: 'faq' }
];

const OVERVIEW_IMAGE =
  'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop';

const BREADCRUMB = [
{
  label: 'Services',
  to: SERVICES_INDEX
},
{
  label: 'AI CoE'
}];

const AI_COE = [
{
  title: 'Agentic Studio',
  body: 'Our proprietary framework for designing, building, and deploying AI agents within Oracle Cloud environments.'
},
{
  title: 'Out-of-Box AI Solutions',
  body: 'Pre-built AI accelerators for common Oracle use cases — including the Financial Close Assistant — deployed in days, not months.'
},
{
  title: 'Custom AI Agents',
  body: 'Bespoke AI agents designed around your processes — not generic tools retrofitted to your context.'
},
{
  title: 'Internet of Agents',
  body: 'Multi-agent architectures where specialised AI agents collaborate to complete complex enterprise tasks.'
},
{
  title: 'Digital Workers',
  body: 'AI-powered automation that operates alongside your Oracle users — handling routine processes so people can focus on decisions.'
}];

const FEATURED_AGENTS = [
  {
    title: 'Financial Close Assistant',
    body: 'Orchestrates Oracle Fusion period close across GL, AP, AR, FA, Cash Management, and Projects — detect, notify, revalidate, and close with approvals.',
    to: SOLUTION_FINANCIAL_CLOSE_ASSISTANT,
  },
  {
    title: 'Purchase Order Lifecycle Analyzer',
    body: 'Virtual procurement assistant for Buyers and Procurement Managers — unified visibility across approvals, fulfillment, receipts, invoices, and supplier performance.',
    to: SOLUTION_PO_LIFECYCLE_ANALYZER,
  },
  {
    title: 'CV Screening Agent',
    body: 'For Recruiters — automatically analyze resumes against the job description, categorize fitment, and deliver a summarized screening view for faster shortlisting.',
    to: SOLUTION_CV_SCREENING_AGENT,
  },
  {
    title: 'HR Onboarding Assistant',
    body: 'Built into Fusion Cloud HCM — identifies journey tasks needing confirmation and updates status on verified criteria for HR Specialists and Shared Services.',
    to: SOLUTION_HR_ONBOARDING_ASSISTANT,
  },
  {
    title: 'HR Probation Assist Agent',
    body: 'Automates probation status updates, letters, and employee communication — Confirm or Extend probation with policy-driven validation and org-wide visibility.',
    to: SOLUTION_HR_PROBATION_ASSIST,
  },
  {
    title: 'Payroll Issue Analyzer Agent',
    body: 'Identifies missing critical employee data — Date of Birth, bank details, national ID, and payroll fields — before payroll processing for HR Specialists and Payroll teams.',
    to: SOLUTION_PAYROLL_ISSUE_ANALYZER,
  },
];

const FOCUS = [
  {
    title: 'Delivery Efficiency',
    desc: 'AI tools that accelerate implementation timelines, automate testing, and reduce manual configuration effort.',
    imageSrc:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Team optimising delivery workflows with AI analytics',
  },
  {
    title: 'Margin Improvement',
    desc: 'Intelligent process automation that reduces operational costs and eliminates low-value manual work.',
    imageSrc:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Financial performance dashboard on laptop',
  },
  {
    title: 'Talent Sustainability',
    desc: 'AI-powered tools that reduce the Oracle expertise bottleneck — enabling less experienced users to operate complex configurations confidently.',
    imageSrc:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Team collaborating on Oracle skills development',
  },
  {
    title: 'Revenue Dimension',
    desc: 'AI capabilities that create new value — predictive analytics, customer intelligence, and opportunity identification within Oracle data.',
    imageSrc:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Business team reviewing revenue growth insights',
  },
];

const EXTENSIONS = [
'Oracle APEX',
'PaaS Integrations',
'OIC Interfaces',
'OCI Deployments',
'Oracle Redwood UI',
'FDIP Custom Builds'];

const COMPARISON_ROWS = [
{
  criterion: 'AI fit for Oracle',
  values: [
  'Generic AI tools retrofitted',
  'AI agents purpose-built for Oracle Cloud workflows']

},
{
  criterion: 'Production readiness',
  values: [
  'Demos and prototypes',
  'Documented, supported, scalable enterprise builds']

},
{
  criterion: 'Multi-agent capability',
  values: [
  'Single chat assistant',
  'Internet of Agents — collaborating specialised agents']

},
{
  criterion: 'Adoption support',
  values: [
  'Tools dropped on users',
  'AI training woven into AaaS programmes']

}];

const FAQS = [
{
  q: 'What does MPC\'s AI CoE deliver?',
  a: 'AI enablement, predictive AI, custom agents, and generative AI for the enterprise — all built to production standards. Agentic Studio is our agent framework; we also offer pre-built solutions, custom agents, multi-agent architectures, and AI-powered digital workers.'
},
{
  q: 'Is the AI CoE a separate practice or part of consulting?',
  a: 'The AI CoE is embedded within our Oracle consulting practice. AI agents and extensions are built by practitioners who understand Oracle Cloud — not generalist AI vendors.'
},
{
  q: 'Can the AI CoE work with our existing AI investments?',
  a: 'Yes. We integrate with major LLM providers and AI platforms, and connect AI agents to Oracle through OIC and OCI.'
},
{
  q: 'How quickly can we deploy an AI agent?',
  a: 'Out-of-Box AI Solutions deploy in days. Custom agents typically run 4–12 weeks from design to production deployment.'
}];

const RELATED = [
{
  icon: Users,
  title: 'HCM',
  description:
  'AI agents that augment Oracle HCM workflows and employee experience.',
  to: SOLUTION_HCM
},
{
  icon: Database,
  title: 'ERP (Oracle Cloud)',
  description:
  'AI extensions for Oracle Fusion and EBS — predictive analytics, automation.',
  to: SOLUTION_ERP
},
{
  icon: Workflow,
  title: 'Business Process Consulting',
  description: 'Identify where AI augmentation transforms your processes.',
  to: SOLUTION_BPC
}];

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'AI CoE — Oracle AI Centre of Excellence',
  provider: {
    '@type': 'Organization',
    name: 'MPC Cloud Consulting'
  },
  areaServed: ['India', 'UAE', 'Singapore', 'Australia', 'United Kingdom'],
  description:
  'MPC\'s AI CoE delivers AI enablement, predictive AI, custom agents, generative AI, and Oracle extensions — built for enterprise Oracle Cloud environments.',
  url: `https://www.mpccloudconsulting.com${SERVICE_AI_COE}`
};
export function TechHub() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="AI CoE — Oracle AI Agents, Custom Extensions & Agentic Studio | MPC"
        description="MPC's AI CoE delivers AI enablement, predictive AI, custom agents, and generative AI — from Agentic Studio to out-of-box Oracle solutions."
        canonicalPath={SERVICE_AI_COE}
        schema={[
        ORGANIZATION_SCHEMA,
        SERVICE_SCHEMA,
        buildBreadcrumbSchema(BREADCRUMB),
        buildFAQSchema(FAQS)]
        } />
      
      <StickyNav />
      <main className="flex-grow w-full">
        <ServiceHero
          eyebrow="Oracle Cloud · AI CoE"
          headline="Centre of Excellence for"
          headlineAccent="Enterprise AI"
          subhead="MPC's AI CoE is our dedicated Centre of Excellence for AI — delivering AI enablement, predictive AI, custom agents, and generative AI that turn your Oracle investment into measurable advantage."
          primaryCtaText="Start the Conversation"
          primaryCtaTo="/contact/"
          imageSrc="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop"
          imageAlt="AI Centre of Excellence — enterprise AI innovation"
          breadcrumb={BREADCRUMB}
        />

        <ServiceWhatIs
          title="What is MPC's AI CoE?"
          body="MPC's AI CoE (Centre of Excellence) is a production-grade AI capability embedded within our Oracle consulting practice. We deliver AI enablement, predictive AI, custom agents, and generative AI — plus Oracle extensions and automation accelerators — all built to enterprise standards: documented, supported, and scalable."
          imageSrc={OVERVIEW_IMAGE}
          imageAlt="MPC AI CoE — enterprise AI and Oracle innovation"
        />

        <TableOfContents items={TOC} variant="inline" />

        <section
          id="overview"
          className="scroll-mt-[140px] w-full bg-bg-light px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="text-center mb-10 max-w-[800px] mx-auto">
            <p className="section-eyebrow mb-3">Overview</p>
            <Heading level={2}>AI CoE Capabilities for Oracle</Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {AI_COE.map((c, i) => (
              <Card key={i} bg="white">
                <div className="w-10 h-1 bg-divider mb-5" />
                <Heading level={3} className="mb-3">
                  {c.title}
                </Heading>
                <p className="font-body text-[16px] leading-[1.7] text-text-primary opacity-80">
                  {c.body}
                </p>
              </Card>
            ))}
          </div>
        </section>

        <ServiceCapabilities
          id="agents"
          eyebrow="Out-of-Box AI Solutions"
          title="Featured AI agents"
          intro="Pre-built agents for high-impact Oracle workflows — ready to deploy and expand with your operating model."
          capabilities={FEATURED_AGENTS}
        />

        <section
          id="focus"
          className="scroll-mt-[140px] w-full bg-white px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="text-center mb-10 max-w-[800px] mx-auto">
            <p className="section-eyebrow mb-3">Focus Areas</p>
            <Heading level={2} className="mb-4">
              What we optimise
            </Heading>
            <p className="font-body text-[17px] leading-[1.7] text-text-primary opacity-80">
              Four dimensions where MPC's AI CoE delivers measurable impact —
              from faster delivery to new revenue opportunities inside Oracle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {FOCUS.map((item) => (
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

        <section
          id="extensions"
          className="scroll-mt-[140px] w-full bg-white px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="w-full">
            <div className="relative overflow-hidden rounded-2xl md:rounded-[24px] border border-cta bg-white min-h-[300px] md:min-h-[360px]">
              <img
                src="/pattern-bg.png"
                alt=""
                aria-hidden
                className="absolute inset-0 w-full h-full object-cover object-right"
              />

              <div className="relative z-10 flex flex-col justify-center px-8 py-10 md:px-12 md:py-14 lg:px-16 lg:py-16 max-w-[920px]">
                <p className="section-eyebrow mb-3">Oracle Extensions</p>
                <h2 className="type-h2 text-text-primary mb-4 md:mb-5 md:whitespace-nowrap">
                  Custom Oracle extensions we build
                </h2>
                <p className="font-body text-[16px] md:text-[17px] leading-[1.65] text-text-primary opacity-85 mb-6 md:mb-8">
                  From Oracle APEX and PaaS integrations to OCI deployments —
                  extensions engineered to enterprise standards within your
                  Oracle ecosystem.
                </p>
                <div className="flex flex-wrap gap-2.5 mb-8">
                  {EXTENSIONS.map((e) => (
                    <span
                      key={e}
                      className="inline-block px-3.5 py-1.5 rounded-full border border-divider/30 bg-divider/5 font-body text-[13px] md:text-[14px] font-medium text-text-primary">
                      {e}
                    </span>
                  ))}
                </div>
                <Link
                  to="/contact/"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-cta text-white rounded-full font-body text-[15px] font-medium hover:opacity-90 transition-opacity w-fit group">
                  Start a Conversation
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ComparisonTable
          id="comparison"
          className="scroll-mt-[140px]"
          eyebrow="Comparison"
          title="Generic AI vendor vs. MPC AI CoE"
          intro="What enterprises typically encounter when comparing generic AI vendors against MPC's Oracle-native AI Centre of Excellence."
          headers={['Criterion', 'Generic AI vendor', 'With MPC AI CoE']}
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
            title="AI CoE — Frequently Asked Questions"
            items={FAQS}
            layout="full"
            bg="soft"
          />
        </div>

        <CTABand
          title="Start your AI CoE"
          titleAccent="Engagement"
          body="Tell us your biggest Oracle constraint. We'll show you how AI enablement, custom agents, and generative AI can remove it."
          ctaText="Start the Conversation"
          ctaTo="/contact/"
          variant="split"
        />
        
      </main>
      <FooterDark />
    </div>);

}