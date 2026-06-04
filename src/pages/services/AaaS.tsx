import React from 'react';
import { Workflow, Users, Sparkles } from 'lucide-react';
import { StickyNav } from '../../components/layout/StickyNav';
import { FooterDark } from '../../components/sections/FooterDark';
import { SEO, ORGANIZATION_SCHEMA } from '../../components/seo/SEO';
import { ServiceHero } from '../../components/sections/heroes/ServiceHero';
import { QuickAnswerCard } from '../../components/sections/QuickAnswerCard';
import { Heading } from '../../components/ui/Heading';
import { Card } from '../../components/ui/Card';
import { StatCalloutGrid } from '../../components/sections/StatCalloutGrid';
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
  label: 'AaaS'
}];

const FRAMEWORK = [
{
  title: 'Change Management',
  body: 'Stakeholder analysis, change impact assessment, communication planning, and resistance management.'
},
{
  title: 'Training Design & Delivery',
  body: 'Role-based training programmes — classroom, e-learning, and job aids. Tailored to how your people actually work.'
},
{
  title: 'Communication Strategy',
  body: 'Structured internal communications that build awareness, desire, and confidence before go-live.'
},
{
  title: 'Super-User Programme',
  body: 'Identify, train, and support internal champions — the people who sustain adoption after MPC leaves.'
},
{
  title: 'Ongoing Enablement',
  body: 'Post-go-live support, new joiner onboarding, quarterly refreshers, and adoption analytics monitoring.'
}];

const STATS = [
{
  number: '70%',
  label: 'Transformations Fall Short'
},
{
  number: '3x',
  label: 'ROI With Structured Adoption'
},
{
  number: '45%',
  label: 'Reduction in Support Tickets'
},
{
  number: '90d',
  label: 'Time to Steady-State'
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
  a: 'At project kick-off — not at go-live. The most successful adoption programmes begin during design so change impact is shaped, not absorbed.'
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
  a: 'Yes. Many enterprises engage AaaS post-go-live when adoption has stalled — we run a diagnostic, then build a recovery programme.'
}];

const RELATED = [
{
  icon: Workflow,
  title: 'Business Process Consulting',
  description: 'Optimise the processes that adoption is enabling.',
  to: '/services/business-process-consulting/'
},
{
  icon: Users,
  title: 'HCM',
  description: 'Pair AaaS with HCM go-live for maximum HR adoption.',
  to: '/services/hcm/'
},
{
  icon: Sparkles,
  title: 'MPC Tech Hub',
  description:
  'AI training programmes that future-proof your workforce skills.',
  to: '/services/mpc-tech-hub/'
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
  url: 'https://www.mpccloudconsulting.com/services/adoption-as-a-service/'
};
export function AaaS() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="Adoption as a Service (AaaS) | Oracle Cloud User Enablement | MPC"
        description="MPC AaaS maximises your Oracle Cloud ROI through change management, training and user enablement programmes."
        canonicalPath="/services/adoption-as-a-service/"
        schema={[
        ORGANIZATION_SCHEMA,
        SERVICE_SCHEMA,
        buildBreadcrumbSchema(BREADCRUMB),
        buildFAQSchema(FAQS)]
        } />
      
      <StickyNav />
      <main className="flex-grow w-full">
        <ServiceHero
          eyebrow="AaaS"
          headline="Turn Deployment Into True Adoption"
          subhead="Going live is not the finish line. The ROI of Oracle Cloud only arrives when your people actually use it — confidently, correctly, and consistently."
          primaryCtaText="Book a Conversation"
          primaryCtaTo="/contact/"
          imageSrc="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop"
          imageAlt="Training workshop with engaged participants"
          breadcrumb={BREADCRUMB} />
        
        <QuickAnswerCard
          question="What is Adoption as a Service?"
          answer="AaaS is MPC's structured user-enablement service for Oracle Cloud — covering change management, training, communications, super-user programmes, and ongoing enablement. It exists because implementation isn't enough: 70% of technology transformations fail to deliver intended benefits, and the cause is almost always human, not technical." />
        

        <section className="w-full bg-white px-4 py-12 md:px-10 md:py-16 lg:px-[60px]">
          <div className="max-w-[820px]">
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
              — and the primary cause is not technical. It is human.
            </p>
            <p className="font-body text-[17px] leading-[1.7] text-text-primary opacity-80">
              Systems go live, but users revert to old habits, workarounds
              proliferate, and the business benefits that justified the
              investment never materialise. AaaS exists because implementation
              is not enough.
            </p>
          </div>
        </section>

        <section className="w-full bg-bg-light px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="mb-10">
            <p className="section-eyebrow mb-3">
              The Framework
            </p>
            <Heading level={2}>The AaaS framework</Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {FRAMEWORK.map((f, i) =>
            <Card key={i} bg="white">
                <Heading level={3} className="mb-3">
                  {f.title}
                </Heading>
                <p className="font-body text-[16px] leading-[1.65] text-text-primary opacity-80">
                  {f.body}
                </p>
              </Card>
            )}
          </div>
        </section>

        <section className="w-full bg-white px-4 py-12 md:px-10 md:py-16 lg:px-[60px]">
          <div className="max-w-[820px]">
            <p className="section-eyebrow mb-3">
              AI-First Adoption
            </p>
            <Heading level={2} className="mb-5">
              Train people. Train people to use AI.
            </Heading>
            <p className="font-body text-[17px] leading-[1.7] text-text-primary opacity-85">
              MPC's AI CoE designs AI adoption programmes alongside standard
              Oracle enablement — so your teams don't just learn the system,
              they learn to use AI tools that make them faster and more
              effective within it.
            </p>
          </div>
        </section>

        <section className="w-full bg-primary text-text-inverse px-4 pt-12 md:px-10 md:pt-16 lg:px-[60px] lg:pt-[80px]">
          <div className="mb-6">
            <p className="section-eyebrow mb-3">
              ROI of Adoption
            </p>
            <Heading level={2} color="text-inverse">
              The cost of low adoption is measurable
            </Heading>
          </div>
          <StatCalloutGrid
            stats={STATS}
            variant="dark"
            className="!px-0 !py-0 pb-12 md:pb-16 lg:pb-[40px]" />
          
        </section>

        <ComparisonTable
          eyebrow="Comparison"
          title="Training-only vs. MPC AaaS"
          headers={['Criterion', 'Training-only vendor', 'With MPC AaaS']}
          highlightIndex={2}
          rows={COMPARISON_ROWS} />
        

        <RelatedServices items={RELATED} />
        <FAQAccordion
          eyebrow="FAQs"
          title="AaaS — Frequently Asked Questions"
          items={FAQS}
          layout="full"
          bg="soft" />
        
        <CTABand
          title="Discuss your adoption programme"
          body="Tell us about your Oracle environment and your adoption challenges. We'll design a programme that fits."
          ctaText="Book a Conversation"
          ctaTo="/contact/"
          variant="centered" />
        
      </main>
      <FooterDark />
    </div>);

}