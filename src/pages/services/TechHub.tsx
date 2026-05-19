import React from 'react';
import { Users, Workflow, Database } from 'lucide-react';
import { StickyNav } from '../../components/layout/StickyNav';
import { FooterDark } from '../../components/sections/FooterDark';
import { SEO, ORGANIZATION_SCHEMA } from '../../components/seo/SEO';
import { ServiceHero } from '../../components/sections/heroes/ServiceHero';
import { QuickAnswerCard } from '../../components/sections/QuickAnswerCard';
import { Heading } from '../../components/ui/Heading';
import { Card } from '../../components/ui/Card';
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
  label: 'MPC Tech Hub'
}];

const AI_COE = [
{
  title: 'Agentic Studio',
  body: 'Our proprietary framework for designing, building, and deploying AI agents within Oracle Cloud environments.'
},
{
  title: 'Out-of-Box AI Solutions',
  body: 'Pre-built AI accelerators for common Oracle use cases — deployed in days, not months.'
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

const FOCUS = [
{
  title: 'Delivery Efficiency',
  body: 'AI tools that accelerate implementation timelines, automate testing, and reduce manual configuration effort.'
},
{
  title: 'Margin Improvement',
  body: 'Intelligent process automation that reduces operational costs and eliminates low-value manual work.'
},
{
  title: 'Talent Sustainability',
  body: 'AI-powered tools that reduce the Oracle expertise bottleneck — enabling less experienced users to operate complex configurations confidently.'
},
{
  title: 'Revenue Dimension',
  body: 'AI capabilities that create new value — predictive analytics, customer intelligence, and opportunity identification within Oracle data.'
}];

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
  q: 'What does MPC Tech Hub deliver?',
  a: 'Custom AI agents, Oracle extensions, and innovation accelerators — built to enterprise standards. Agentic Studio is our agent framework; we also offer pre-built solutions, custom agents, multi-agent architectures, and AI-powered digital workers.'
},
{
  q: 'Is MPC Tech Hub a separate practice or part of consulting?',
  a: 'Tech Hub is embedded within our Oracle consulting practice. AI agents and extensions are built by people who understand Oracle Cloud, not generalists.'
},
{
  q: 'Can MPC Tech Hub work with our existing AI investments?',
  a: 'Yes. We integrate with major LLM providers and AI platforms, and we connect AI agents to Oracle through OIC and OCI.'
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
  to: '/services/hcm/'
},
{
  icon: Database,
  title: 'ERP (Oracle Cloud)',
  description:
  'AI extensions for Oracle Fusion and EBS — predictive analytics, automation.',
  to: '/services/erp-oracle-cloud/'
},
{
  icon: Workflow,
  title: 'Business Process Consulting',
  description: 'Identify where AI augmentation transforms your processes.',
  to: '/services/business-process-consulting/'
}];

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'MPC Tech Hub — AI Innovation',
  provider: {
    '@type': 'Organization',
    name: 'MPC Cloud Consulting'
  },
  areaServed: ['India', 'UAE', 'Australia', 'United Kingdom'],
  description:
  'Custom AI agents, Oracle extensions, and innovation accelerators built for enterprise Oracle Cloud environments.',
  url: 'https://www.mpccloudconsulting.com/services/mpc-tech-hub/'
};
export function TechHub() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="MPC Tech Hub — AI Innovation, Custom Extensions & Agentic Studio"
        description="MPC Tech Hub builds custom AI agents, Oracle extensions and innovation accelerators — Agentic Studio to out-of-box AI solutions."
        canonicalPath="/services/mpc-tech-hub/"
        schema={[
        ORGANIZATION_SCHEMA,
        SERVICE_SCHEMA,
        buildBreadcrumbSchema(BREADCRUMB),
        buildFAQSchema(FAQS)]
        } />
      
      <StickyNav />
      <main className="flex-grow w-full">
        {/* Hero with radial Ocean Blue glow */}
        <section className="relative w-full bg-primary text-text-inverse overflow-hidden">
          <div
            className="absolute inset-0 opacity-50 pointer-events-none"
            style={{
              background:
              'radial-gradient(circle at 30% 40%, rgba(3, 105, 161, 0.4), transparent 60%)'
            }} />
          
          <div className="relative">
            <ServiceHero
              eyebrow="MPC Tech Hub"
              headline="Where Innovation Meets Enterprise Cloud"
              subhead="MPC Tech Hub is our AI innovation centre — building custom AI agents, Oracle extensions, and next-generation accelerators that turn your Oracle investment into a competitive advantage."
              primaryCtaText="Start the Conversation"
              primaryCtaTo="/contact/"
              imageSrc="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop"
              imageAlt="Futuristic AI and data visualisation"
              breadcrumb={BREADCRUMB} />
            
          </div>
        </section>

        <QuickAnswerCard
          question="What is MPC Tech Hub?"
          answer="MPC Tech Hub is a production-grade AI innovation capability embedded within MPC's Oracle consulting practice. We build custom AI agents, Oracle extensions, and automation accelerators that extend Oracle Cloud — to enterprise standards: documented, supported, and scalable." />
        

        <section className="w-full bg-bg-light px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="mb-10">
            <p className="font-body text-[12px] uppercase tracking-[0.8px] font-semibold text-divider mb-3">
              AI CoE
            </p>
            <Heading level={2}>Agentic AI for Enterprise Oracle</Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {AI_COE.map((c, i) =>
            <Card key={i} bg="white">
                <Heading level={3} className="mb-3">
                  {c.title}
                </Heading>
                <p className="font-body text-[16px] leading-[1.65] text-text-primary opacity-80">
                  {c.body}
                </p>
              </Card>
            )}
          </div>
        </section>

        <section className="w-full bg-white px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="mb-10">
            <p className="font-body text-[12px] uppercase tracking-[0.8px] font-semibold text-divider mb-3">
              Focus Areas
            </p>
            <Heading level={2}>What we optimise</Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {FOCUS.map((f, i) =>
            <Card key={i} bg="bg-light">
                <div className="font-heading font-semibold text-cta text-[14px] mb-2">
                  0{i + 1}
                </div>
                <Heading level={3} className="mb-3">
                  {f.title}
                </Heading>
                <p className="font-body text-[15px] leading-[1.6] text-text-primary opacity-80">
                  {f.body}
                </p>
              </Card>
            )}
          </div>
        </section>

        <section className="w-full bg-bg-light px-4 py-12 md:px-10 md:py-16 lg:px-[60px]">
          <p className="font-body text-[12px] uppercase tracking-[0.8px] font-semibold text-divider mb-3">
            Oracle Extensions
          </p>
          <Heading level={2} className="mb-6">
            Custom Oracle extensions we build
          </Heading>
          <div className="flex flex-wrap gap-2">
            {EXTENSIONS.map((e) =>
            <span
              key={e}
              className="px-4 py-2 rounded-full border border-divider/30 bg-white font-body text-[14px] font-medium">
              
                {e}
              </span>
            )}
          </div>
        </section>

        <ComparisonTable
          eyebrow="Comparison"
          title="Generic AI vendor vs. MPC Tech Hub"
          headers={['Criterion', 'Generic AI vendor', 'With MPC Tech Hub']}
          highlightIndex={2}
          rows={COMPARISON_ROWS} />
        

        <RelatedServices items={RELATED} />
        <FAQAccordion
          eyebrow="FAQs"
          title="MPC Tech Hub — Frequently Asked Questions"
          items={FAQS}
          layout="full"
          bg="soft" />
        
        <CTABand
          title="Explore an innovation partnership"
          body="Tell us your biggest Oracle constraint. We'll show you how AI and custom engineering can remove it."
          ctaText="Start the Conversation"
          ctaTo="/contact/"
          variant="centered" />
        
      </main>
      <FooterDark />
    </div>);

}