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
  buildFAQSchema,
} from '../../components/sections/FAQAccordion';
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
  { label: 'Comparison', hash: 'comparison' },
  { label: 'FAQ', hash: 'faq' },
];

const OVERVIEW_IMAGE =
  'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop';

const BREADCRUMB = [
  { label: 'Services', to: SERVICES_INDEX },
  { label: 'AI CoE' },
];

const AI_COE = [
  {
    title: 'Oracle AI Agents',
    body: 'Design and build AI agents using Oracle AI Agent Studio to address business use cases across HCM, ERP, SCM and other Oracle applications.',
  },
  {
    title: 'MPC AI Solutions',
    body: 'Build tailored AI solutions for unique business needs, leveraging Oracle OCI as our primary platform, with capabilities extending across Microsoft Azure and AWS environments.',
  },
  {
    title: 'AI Accelerators & Tools',
    body: 'Develop reusable AI accelerators and tools that help teams deliver Oracle implementations faster, improve quality and enhance consulting productivity.',
  },
  {
    title: 'AI Innovation & Enablement',
    body: 'Explore emerging AI capabilities through prototypes, proof-of-concepts and real-world use cases, turning new ideas into practical enterprise solutions.',
  },
  {
    title: 'AI Skills & Capability Building',
    body: 'Build an AI-first workforce through structured learning, hands-on labs, certifications, hackathons and continuous upskilling of our consultants.',
  },
];

const FEATURED_AGENTS = [
  {
    title: 'Financial Close Assistant',
    body: 'Orchestrates Oracle Fusion period close across GL, AP, AR, FA, Cash Management, and Projects. Detect, notify, revalidate, and close with approvals.',
    to: SOLUTION_FINANCIAL_CLOSE_ASSISTANT,
  },
  {
    title: 'Purchase Order Lifecycle Analyzer',
    body: 'Virtual procurement assistant for Buyers and Procurement Managers with unified visibility across approvals, fulfillment, receipts, invoices, and supplier performance.',
    to: SOLUTION_PO_LIFECYCLE_ANALYZER,
  },
  {
    title: 'CV Screening Agent',
    body: 'For Recruiters: automatically analyze resumes against the job description, categorize fitment, and deliver a summarized screening view for faster shortlisting.',
    to: SOLUTION_CV_SCREENING_AGENT,
  },
  {
    title: 'HR Onboarding Assistant',
    body: 'Built into Fusion Cloud HCM. Identifies journey tasks needing confirmation and updates status on verified criteria for HR Specialists and Shared Services.',
    to: SOLUTION_HR_ONBOARDING_ASSISTANT,
  },
  {
    title: 'HR Probation Assist Agent',
    body: 'Automates probation status updates, letters, and employee communication. Confirm or Extend probation with policy-driven validation and org-wide visibility.',
    to: SOLUTION_HR_PROBATION_ASSIST,
  },
  {
    title: 'Payroll Issue Analyzer Agent',
    body: 'Identifies missing critical employee data such as Date of Birth, bank details, national ID, and payroll fields before payroll processing for HR Specialists and Payroll teams.',
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
    desc: 'AI-powered tools that reduce the Oracle expertise bottleneck, enabling less experienced users to operate complex configurations confidently.',
    imageSrc:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Team collaborating on Oracle skills development',
  },
  {
    title: 'Revenue Dimension',
    desc: 'AI capabilities that create new value through predictive analytics, customer intelligence, and opportunity identification within Oracle data.',
    imageSrc:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Business team reviewing revenue growth insights',
  },
];

const COMPARISON_ROWS = [
  {
    criterion: 'Understanding Your Enterprise',
    values: [
      'Starts with the AI use case and technology',
      'Starts with your business process, application landscape and desired outcome',
    ],
  },
  {
    criterion: 'Oracle Context',
    values: [
      'Requires additional Oracle functional and technical expertise',
      'AI is backed by consultants who understand Oracle applications, configurations, data and business processes',
    ],
  },
  {
    criterion: 'Beyond Oracle',
    values: [
      'Solutions may be tied to a specific technology stack',
      'Oracle-first, with the flexibility to build custom AI solutions across OCI, Azure and AWS',
    ],
  },
  {
    criterion: 'Implementation Reality',
    values: [
      'Designed around the stated requirement',
      'Designed with real-world considerations such as integrations, security, data, roles, approvals and existing processes',
    ],
  },
  {
    criterion: 'Sustainable AI Adoption',
    values: [
      'Focuses primarily on delivering the AI solution',
      'Combines delivery with knowledge transfer and capability building so AI becomes part of how the organisation works',
    ],
  },
];

const FAQS = [
  {
    q: "What does MPC's AI CoE deliver?",
    a: "MPC's AI CoE helps enterprises identify, design and implement practical AI solutions, from Oracle AI agents to custom AI solutions, backed by our Oracle, technology and domain expertise.",
  },
  {
    q: "Is MPC's AI CoE focused only on Oracle?",
    a: 'Oracle is our primary ecosystem, with deep expertise across Oracle applications, AI Agent Studio and OCI. For custom AI requirements, we can also design solutions that work with broader enterprise technology landscapes, including Microsoft Azure and AWS.',
  },
  {
    q: 'Can MPC work with our existing AI investments?',
    a: 'Yes. We can design solutions that complement your existing AI platforms, LLMs, enterprise data and cloud investments rather than requiring you to replace them.',
  },
  {
    q: 'How does MPC identify the right AI use cases?',
    a: 'We start with the business problem and desired outcome, then assess process, data, technology, integration and feasibility to identify AI use cases that can deliver meaningful business value.',
  },
  {
    q: 'Can MPC build AI solutions beyond AI Agent Studio?',
    a: 'Yes. Oracle AI Agent Studio is a key part of our Oracle AI capability, while our AI CoE can also design and build custom AI solutions using OCI and, where required, Azure or AWS technologies.',
  },
];

const RELATED = [
  {
    icon: Users,
    title: 'HCM',
    description:
      'AI agents that augment Oracle HCM workflows and employee experience.',
    to: SOLUTION_HCM,
  },
  {
    icon: Database,
    title: 'ERP (Oracle Cloud)',
    description:
      'AI extensions for Oracle Fusion and EBS, including predictive analytics and automation.',
    to: SOLUTION_ERP,
  },
  {
    icon: Workflow,
    title: 'Business Process Consulting',
    description: 'Identify where AI augmentation transforms your processes.',
    to: SOLUTION_BPC,
  },
];

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'AI CoE. Oracle AI Centre of Excellence',
  provider: {
    '@type': 'Organization',
    name: 'MPC Cloud Consulting',
  },
  areaServed: ['India', 'UAE', 'Singapore', 'Australia', 'United Kingdom'],
  description:
    "MPC's AI CoE combines deep Oracle expertise with intelligent solutions, custom AI agents, and generative AI to transform Oracle investments into measurable business outcomes.",
  url: `https://www.mpccloudconsulting.com${SERVICE_AI_COE}`,
};

export function TechHub() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="AI CoE | Oracle AI Agents, Solutions & Accelerators | MPC"
        description="MPC's AI CoE combines deep Oracle expertise with intelligent solutions, custom AI agents, and generative AI to transform your Oracle investment into measurable business outcomes."
        canonicalPath={SERVICE_AI_COE}
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
          eyebrow="Oracle Cloud · AI CoE"
          headline="Centre of Excellence for"
          headlineAccent="Enterprise AI"
          subhead="MPC's AI CoE is our dedicated Centre of Excellence for AI, combining deep Oracle expertise with intelligent solutions, custom AI agents, and generative AI to transform your Oracle investment into measurable business outcomes."
          primaryCtaText="Start the Conversation"
          primaryCtaTo="/contact/"
          imageSrc="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop"
          imageAlt="AI Centre of Excellence, enterprise AI innovation"
          breadcrumb={BREADCRUMB}
        />

        <ServiceWhatIs
          title="What is MPC's AI CoE?"
          body="MPC's AI CoE (Centre of Excellence) is a production-grade AI capability embedded within our Oracle consulting practice. We design Oracle AI Agents, build tailored AI solutions, develop reusable accelerators, explore emerging capabilities through prototypes and PoCs, and upskill our consultants so AI lands in real business processes."
          imageSrc={OVERVIEW_IMAGE}
          imageAlt="MPC AI CoE, enterprise AI and Oracle innovation"
        />

        <TableOfContents items={TOC} variant="inline" />

        <section
          id="overview"
          className="scroll-mt-[140px] w-full bg-white px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="text-center mb-10 max-w-[800px] mx-auto">
            <p className="section-eyebrow mb-3">Overview</p>
            <Heading level={2}>AI CoE Capabilities for Oracle</Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {AI_COE.map((c) => (
              <Card key={c.title} bg="white">
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
          intro="Pre-built agents for high-impact Oracle workflows, ready to deploy and expand with your operating model."
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
              Four dimensions where MPC's AI CoE delivers measurable impact,
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

        <ComparisonTable
          id="comparison"
          className="scroll-mt-[140px]"
          eyebrow="Comparison"
          title="Why MPC for Enterprise AI?"
          intro="Deep Oracle expertise, enterprise AI capabilities and a business-first approach, bringing together technology, domain knowledge and implementation experience to deliver AI that works in the real world."
          headers={['What Matters', 'Typical AI Approach', 'With MPC AI CoE']}
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
            title="AI CoE. Frequently Asked Questions"
            items={FAQS}
            layout="full"
            bg="soft"
          />
        </div>

        <CTABand
          title="Start your AI CoE"
          titleAccent="Engagement"
          body="Tell us your biggest Oracle constraint. We'll show you how Oracle AI Agents, tailored solutions and accelerators can remove it."
          ctaText="Start the Conversation"
          ctaTo="/contact/"
          variant="split"
        />
      </main>
      <FooterDark />
    </div>
  );
}
