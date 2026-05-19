import React from 'react';
import { Users, Database, Sparkles } from 'lucide-react';
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
  label: 'Business Process Consulting'
}];

const AREAS = [
{
  title: 'Finance',
  body: 'Chart of accounts design, period-end process redesign, approval workflows, and reconciliation automation.'
},
{
  title: 'HR & People Operations',
  body: 'HR workflow mapping, organisational design, position management, and HR service delivery models.'
},
{
  title: 'Supply Chain',
  body: 'Procurement-to-pay, order-to-cash, inventory management, and supplier relationship processes.'
},
{
  title: 'Sales & Marketing Operations',
  body: 'Lead-to-revenue process mapping, CRM integration, and pipeline management.'
},
{
  title: 'Customer Experience',
  body: 'Service delivery processes, case management workflows, and customer journey mapping.'
},
{
  title: 'Procurement',
  body: 'Sourcing strategy, purchase order workflows, supplier onboarding, and spend analytics.'
}];

const PROCESS_STEPS = [
{
  number: '01',
  title: 'Assess',
  description:
  'Current state process mapping. Documentation of pain points, bottlenecks, and workarounds. Stakeholder interviews and process observation.'
},
{
  number: '02',
  title: 'Design',
  description:
  'Future state process design. Alignment to Oracle Cloud capabilities. Gap analysis. Approval workflows and RACI matrices.'
},
{
  number: '03',
  title: 'Implement',
  description:
  'Configuration of Oracle to reflect redesigned processes. User acceptance testing. Training and change management.'
},
{
  number: '04',
  title: 'Optimise',
  description:
  'Post-go-live process review. KPI tracking. Continuous improvement cycles.'
}];

const COMPARISON_ROWS = [
{
  criterion: 'Discovery depth',
  values: [
  'Workshops only',
  'Workshops + process observation + system telemetry']

},
{
  criterion: 'Future-state design',
  values: [
  'Generic best practices',
  'Aligned to Oracle Cloud capabilities specifically']

},
{
  criterion: 'AI augmentation',
  values: [
  'Not considered',
  'AI CoE identifies automation opportunities in design']

},
{
  criterion: 'Post-go-live',
  values: ['Hand-over', 'KPI tracking + continuous improvement cycles']
}];

const FAQS = [
{
  q: 'When is the right time to engage BPC?',
  a: 'Ideally before an Oracle implementation begins — to ensure the platform is configured against improved processes, not legacy ones. We also engage post-go-live to optimise.'
},
{
  q: 'Do you work with non-Oracle systems?',
  a: 'Our BPC practice is platform-aware but not platform-locked. We map and redesign processes that will run on Oracle Cloud, but the discovery work is platform-agnostic.'
},
{
  q: 'How long does a BPC engagement take?',
  a: 'A focused functional-area engagement (Finance, HR, Supply Chain) typically runs 6–10 weeks. Enterprise-wide programmes run 12–20 weeks.'
},
{
  q: 'Can BPC include AI and automation analysis?',
  a: 'Yes. Our AI CoE works alongside the BPC practice to identify where intelligent automation, AI agents, and predictive analytics can transform processes.'
}];

const RELATED = [
{
  icon: Users,
  title: 'HCM',
  description: 'Configure Oracle HCM against redesigned HR processes.',
  to: '/services/hcm/'
},
{
  icon: Database,
  title: 'ERP (Oracle Cloud)',
  description:
  'Implement Oracle Fusion or EBS on top of process foundations.',
  to: '/services/erp-oracle-cloud/'
},
{
  icon: Sparkles,
  title: 'MPC Tech Hub',
  description:
  'AI agents and automation that bring redesigned processes to life.',
  to: '/services/mpc-tech-hub/'
}];

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Business Process Consulting',
  provider: {
    '@type': 'Organization',
    name: 'MPC Cloud Consulting'
  },
  areaServed: ['India', 'UAE', 'Australia', 'United Kingdom'],
  description:
  'Map, redesign and optimise Finance, HR, Supply Chain and Sales operations for cloud-ready enterprises.',
  url: 'https://www.mpccloudconsulting.com/services/business-process-consulting/'
};
export function BPC() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="Business Process Consulting | MPC Cloud Consulting"
        description="MPC BPC maps, optimises and transforms Finance, HR, Supply Chain and Sales operations for cloud-ready enterprises."
        canonicalPath="/services/business-process-consulting/"
        schema={[
        ORGANIZATION_SCHEMA,
        SERVICE_SCHEMA,
        buildBreadcrumbSchema(BREADCRUMB),
        buildFAQSchema(FAQS)]
        } />
      
      <StickyNav />
      <main className="flex-grow w-full">
        <ServiceHero
          eyebrow="Business Process Consulting"
          headline="Optimise Operations. Enable Growth."
          subhead="Before you transform your technology, you need to understand your processes. MPC BPC helps you map, redesign, and optimise operations — so your Oracle implementation succeeds on a solid foundation."
          primaryCtaText="Book a Process Assessment"
          primaryCtaTo="/contact/"
          imageSrc="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop"
          imageAlt="Strategy session with whiteboard process maps"
          breadcrumb={BREADCRUMB} />
        
        <QuickAnswerCard
          question="What is Business Process Consulting?"
          answer="BPC is the discipline of mapping, redesigning, and optimising business operations — Finance, HR, Supply Chain, Sales — so your Oracle Cloud implementation succeeds on a solid process foundation. MPC's BPC practice runs assessments, designs future-state processes aligned to Oracle Cloud capabilities, and identifies AI augmentation opportunities." />
        

        <section className="w-full bg-white px-4 py-12 md:px-10 md:py-16 lg:px-[60px]">
          <p className="font-body text-[12px] uppercase tracking-[0.8px] font-semibold text-divider mb-3">
            The Principle
          </p>
          <Heading level={2} className="mb-5">
            Process before platform
          </Heading>
          <p className="font-body text-[17px] leading-[1.75] text-text-primary opacity-85 mb-5 max-w-[820px]">
            Most Oracle implementations that struggle do so because of process
            problems disguised as technology problems. A poorly designed
            workflow, configured into Oracle, is a poorly designed workflow at
            scale.
          </p>
          <p className="font-body text-[17px] leading-[1.75] text-text-primary opacity-85 max-w-[820px]">
            MPC's BPC practice brings order, clarity, and improvement to your
            operations before implementation begins — and continues to optimise
            after go-live.
          </p>
        </section>

        <section className="w-full bg-bg-light px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="mb-10">
            <p className="font-body text-[12px] uppercase tracking-[0.8px] font-semibold text-divider mb-3">
              Functional Areas
            </p>
            <Heading level={2}>Areas we cover</Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {AREAS.map((area, i) =>
            <Card key={i} bg="white">
                <Heading level={3} className="mb-3">
                  {area.title}
                </Heading>
                <p className="font-body text-[16px] leading-[1.65] text-text-primary opacity-80">
                  {area.body}
                </p>
              </Card>
            )}
          </div>
        </section>

        <ProcessSteps
          eyebrow="Our Approach"
          title="The MPC BPC method"
          intro="A four-stage methodology refined across enterprise transformations."
          steps={PROCESS_STEPS}
          variant="light" />
        

        <section className="w-full bg-bg-light px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="max-w-[900px]">
            <p className="font-body text-[12px] uppercase tracking-[0.8px] font-semibold text-divider mb-3">
              AI Enablement
            </p>
            <Heading level={2} className="mb-5">
              AI-augmented process consulting
            </Heading>
            <p className="font-body text-[18px] leading-[1.7] text-text-primary opacity-85 mb-6">
              MPC's AI CoE works alongside our BPC practice to identify where
              intelligent automation, AI agents, and predictive analytics can
              transform your processes — not just streamline them.
            </p>
          </div>
        </section>

        <ComparisonTable
          eyebrow="Comparison"
          title="Workshop-only BPC vs. MPC's approach"
          headers={['Criterion', 'Workshop-only consulting', 'With MPC']}
          highlightIndex={2}
          rows={COMPARISON_ROWS} />
        

        <RelatedServices items={RELATED} />
        <FAQAccordion
          eyebrow="FAQs"
          title="BPC — Frequently Asked Questions"
          items={FAQS}
          layout="full"
          bg="soft" />
        
        <CTABand
          title="Book a Process Assessment"
          body="Tell us where your processes feel friction. We'll diagnose root causes and design a path forward."
          ctaText="Talk to MPC"
          ctaTo="/contact/"
          variant="centered" />
        
      </main>
      <FooterDark />
    </div>);

}