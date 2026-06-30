import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Activity, Workflow, ArrowRight } from 'lucide-react';
import { StickyNav } from '../../components/layout/StickyNav';
import { FooterDark } from '../../components/sections/FooterDark';
import { SEO } from '../../components/seo/SEO';
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
import {
  Breadcrumb,
  buildBreadcrumbSchema
} from '../../components/sections/Breadcrumb';
import { ORGANIZATION_SCHEMA } from '../../components/seo/SEO';
import {
  SERVICE_ORACLE,
  SERVICES_INDEX,
  SOLUTION_AAAS,
  SOLUTION_BPC,
  SOLUTION_HCAAS,
  SOLUTION_HCM,
} from '../../data/paths';
const FAQS = [
{
  q: 'What Oracle HCM modules does MPC implement?',
  a: 'Core HR, Talent Management, Workforce Management, Global Payroll, Oracle ME, Recruiting, Learning, and Benefits. We have certified consultants across all major HCM modules.'
},
{
  q: 'Can MPC support Oracle HCM if we already have a live system?',
  a: 'Yes. We offer managed support, health checks (HCaaS), upgrades, and adoption programmes for existing Oracle HCM environments.'
},
{
  q: 'How long does an Oracle HCM implementation take?',
  a: 'A Core HR implementation typically runs 12–16 weeks. Full HCM suite deployments including Payroll and Talent range from 6–12 months depending on complexity and data volume.'
},
{
  q: 'Do you support Global Payroll outside India?',
  a: "Yes. We've implemented Oracle Global Payroll across UAE, Singapore, Australia, and the UK — with full local compliance configuration."
}];

const TOC = [
{
  label: 'Overview',
  hash: 'overview'
},
{
  label: 'Modules',
  hash: 'modules'
},
{
  label: 'Process',
  hash: 'process'
},
{
  label: 'Comparison',
  hash: 'comparison'
},
{
  label: 'Case Study',
  hash: 'case-study'
},
{
  label: 'FAQ',
  hash: 'faq'
}];

const BREADCRUMB = [
{
  label: 'Services',
  to: SERVICES_INDEX
},
{
  label: 'Oracle (Fusion & EBS)',
  to: SERVICE_ORACLE
},
{
  label: 'HCM'
}];

const HERO_BG =
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=2400&q=80';

const MODULE_CHIPS = [
'Core HR',
'Talent',
'Workforce Management',
'Global Payroll',
'Oracle ME',
'Recruiting',
'Learning',
'Benefits'];

const CAPABILITIES = [
{
  title: 'Consulting & Design',
  body: 'Process mapping, solution design, and configuration planning before a single line is written.'
},
{
  title: 'Implementation',
  body: 'End-to-end Oracle HCM deployment — on time, within scope, with thorough testing and hypercare.'
},
{
  title: 'Upgrades',
  body: 'Managed upgrades and quarterly release readiness — so your Oracle HCM stays current and optimised.'
},
{
  title: 'Managed Support',
  body: 'Ongoing functional and technical support post-go-live. Fast response, experienced consultants.'
},
{
  title: 'Application Development',
  body: 'Custom Oracle HCM extensions, APEX builds, and integration development within the Oracle ecosystem.'
},
{
  title: 'Payroll as a Service',
  body: 'End-to-end Oracle Global Payroll delivery — implementation, managed run, and ongoing compliance management.'
}];

const MODULES = [
  {
    title: 'HR Core',
    desc: 'Employee records, organisational structure, positions, and HR self-service. The backbone of every Oracle HCM environment — designed for the way your organisation actually operates today and built to flex as you grow.',
    imageSrc:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'HR team reviewing core records',
  },
  {
    title: 'Talent Management',
    desc: 'Goal setting, performance reviews, succession planning, and career development. We configure Oracle Talent to connect individual performance to business outcomes — not to generate reports nobody reads.',
    imageSrc:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Performance review workshop',
  },
  {
    title: 'Global Payroll',
    desc: 'Oracle Payroll configured for your country, your rules, your people — with full compliance and audit capability across India, UAE, Singapore, Australia, and the UK. We run parallel payrolls before go-live so day-1 is uneventful.',
    imageSrc:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Payroll specialist reviewing global compliance',
  },
];

const PROCESS_STEPS = [
{
  number: '01',
  title: 'Discovery',
  description:
  'Stakeholder interviews, current-state process mapping, and a documented gap analysis against Oracle HCM Cloud best practice.'
},
{
  number: '02',
  title: 'Design',
  description:
  'Future-state HR process design. Module configuration plan. Integration architecture. Data migration approach.'
},
{
  number: '03',
  title: 'Configure',
  description:
  'System build by certified Oracle HCM consultants. Iterative client review checkpoints. Documented configuration.'
},
{
  number: '04',
  title: 'Test',
  description:
  'SIT, UAT, payroll parallel runs, and security testing — with clear pass/fail criteria and defect triage.'
},
{
  number: '05',
  title: 'Go-Live',
  description:
  'Cutover plan, data migration execution, command-centre support, and day-1 stabilisation.'
},
{
  number: '06',
  title: 'Hypercare',
  description:
  'Dedicated post-go-live support window. Issue resolution, user enablement, and transition to managed service.'
}];

const HCM_OVERVIEW_IMAGE =
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80';

const COMPARISON_ROWS = [
{
  criterion: 'Oracle module depth',
  values: [
  'Generalist team, learning on the job',
  'Oracle-certified specialists across every HCM module']

},
{
  criterion: 'Implementation speed',
  values: [
  '12–18+ months typical',
  '8–16 weeks Core HR, 6–12 months full suite']

},
{
  criterion: 'Compliance configuration',
  values: [
  'Reactive — fixed after audits',
  'Compliance-first design across IN, UAE, AU, UK']

},
{
  criterion: 'Post-go-live support',
  values: [
  'Internal team learns under pressure',
  'Managed service from the team that built it']

},
{
  criterion: '3-year total cost of ownership',
  values: [
  'High — rework, escalations, attrition risk',
  'Lower — accelerator packs, certified delivery, fewer reworks']

}];

const RELATED = [
{
  icon: Users,
  title: 'Adoption as a Service',
  description:
  'Maximise HCM ROI through change management, training, and user enablement.',
  to: SOLUTION_AAAS
},
{
  icon: Activity,
  title: 'Health Check as a Service',
  description:
  'Independent audit of your live Oracle HCM environment with a remediation roadmap.',
  to: SOLUTION_HCAAS
},
{
  icon: Workflow,
  title: 'Business Process Consulting',
  description:
  'Optimise HR workflows before, during, and after your Oracle HCM implementation.',
  to: SOLUTION_BPC
}];

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Oracle HCM Cloud Consulting',
  provider: {
    '@type': 'Organization',
    name: 'MPC Cloud Consulting'
  },
  areaServed: ['India', 'United Arab Emirates', 'Singapore', 'Australia', 'United Kingdom'],
  description:
  'End-to-end Oracle HCM Cloud implementation, managed support, and innovation — HR, Talent, Workforce Management, Global Payroll, and Oracle ME.',
  url: `https://www.mpccloudconsulting.com${SOLUTION_HCM}`
};
export function HCM() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="Oracle HCM Cloud Consulting & Implementation | MPC"
        description="MPC delivers end-to-end Oracle HCM Cloud — HR, Talent, Workforce Management, Payroll and Oracle ME. 65+ clients globally."
        canonicalPath={SOLUTION_HCM}
        schema={[
        ORGANIZATION_SCHEMA,
        SERVICE_SCHEMA,
        buildBreadcrumbSchema(BREADCRUMB),
        buildFAQSchema(FAQS)]
        } />
      

      <StickyNav />

      <main className="flex-grow w-full">
        <section className="relative w-full min-h-[min(58svh,600px)] max-h-[600px] overflow-hidden flex items-center">
          <img
            src={HERO_BG}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover object-center lg:object-[70%_center]"
          />
          <div aria-hidden className="absolute inset-0 bg-cta/55" />

          <div className="relative w-full max-w-[1400px] mx-auto px-4 md:px-10 lg:px-[60px] py-12 md:py-14 lg:py-16 min-h-[inherit] flex flex-col justify-center text-text-inverse">
            <Breadcrumb
              items={BREADCRUMB}
              variant="dark"
              className="mb-6 md:mb-8 w-full max-w-[1100px] mx-auto lg:mx-0"
            />

            <div className="w-full max-w-[1100px] text-center lg:text-left flex flex-col items-center lg:items-start mx-auto lg:mx-0">
              <span className="section-eyebrow-inverse inline-flex items-center gap-2 tracking-[0.2em] mb-4 md:mb-5 text-text-inverse">
                <span className="w-1.5 h-1.5 rounded-full bg-text-inverse" />
                Oracle Cloud · HCM
              </span>

              <h1 className="type-h1 text-text-inverse">
                <span className="block">Transform your workforce</span>
                <span className="block font-body italic font-normal text-text-inverse mt-1 md:mt-2">
                  with Oracle HCM Cloud
                </span>
              </h1>

              <p className="font-body text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5] text-text-inverse/90 mt-4 md:mt-5 max-w-[640px] lg:max-w-[720px]">
                End-to-end Oracle HCM implementation, managed support, and
                innovation — for enterprises that need HR technology that
                actually works for their people.
              </p>

              <div className="flex items-center justify-center lg:justify-start mt-6 md:mt-8">
                <Link
                  to="/contact/"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary rounded-full font-body text-[15px] font-medium hover:bg-white/90 transition-colors group">
                  Schedule an HCM Discovery Call
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What is Oracle HCM Cloud */}
        <section className="w-full bg-bg-light px-4 py-14 md:px-10 md:py-16 lg:px-[60px] lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-[1280px] mx-auto">
            <div className="flex flex-col items-start">
              <p className="section-eyebrow mb-3">AI Overview-ready</p>
              <Heading level={2} className="mb-5">
                What is Oracle HCM Cloud?
              </Heading>
              <p className="font-body text-[17px] md:text-[18px] leading-[1.75] text-text-primary opacity-85">
                Oracle HCM Cloud is Oracle&apos;s complete enterprise HR platform —
                covering Core HR, Talent Management, Workforce Management, Global
                Payroll, and Oracle ME for employee experience. MPC delivers
                Oracle HCM end-to-end: design, implementation, managed support,
                and AI-augmented adoption — across 65+ enterprise clients in
                India, UAE, Singapore, Australia, and the UK.
              </p>
            </div>
            <div className="w-full">
              <img
                src={HCM_OVERVIEW_IMAGE}
                alt="HR professionals collaborating with Oracle HCM Cloud"
                className="w-full aspect-[4/3] object-cover rounded-card shadow-subtle"
              />
            </div>
          </div>
        </section>

        <TableOfContents items={TOC} variant="inline" />

        {/* Overview */}
        <section
          className="scroll-mt-[140px] w-full bg-white px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="max-w-[1280px] mx-auto">
            <div className="mb-10">
              <p className="section-eyebrow mb-3">Overview</p>
              <Heading level={2} className="mb-4">
                Oracle HCM Cloud with MPC
              </Heading>
            </div>
            <p className="font-body text-[17px] leading-[1.75] text-text-primary opacity-85 mb-5 max-w-[900px]">
              Oracle HCM Cloud is the most comprehensive HR platform in the
              enterprise market. But technology without expertise is just
              software. MPC brings both — Oracle-certified HCM consultants with
              real-world implementation experience across every major module and
              every major industry.
            </p>
            <p className="font-body text-[17px] leading-[1.75] text-text-primary opacity-85 mb-6 max-w-[900px]">
              We&apos;ve delivered Oracle HCM for 65+ organisations — from initial
              design and implementation to post-go-live managed support, payroll
              configuration, and custom Oracle ME builds.
            </p>
            <div className="flex flex-wrap gap-2">
              {MODULE_CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="inline-block px-3.5 py-1.5 rounded-full border border-divider/30 bg-divider/5 font-body text-[13px] font-medium text-text-primary">
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Overview / Capabilities */}
        <section
          id="overview"
          className="scroll-mt-[140px] w-full bg-bg-light px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          
          <div className="text-center mb-10 max-w-[800px] mx-auto">
            <p className="section-eyebrow mb-3">Overview</p>
            <Heading level={2}>Our HCM Capabilities</Heading>
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

        {/* Modules */}
        <section
          id="modules"
          className="scroll-mt-[140px] w-full bg-white px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="text-center mb-10 max-w-[800px] mx-auto">
            <p className="section-eyebrow mb-3">Modules</p>
            <Heading level={2} className="mb-4">
              Modules we implement
            </Heading>
            <p className="font-body text-[17px] leading-[1.7] text-text-primary opacity-80">
              Three core areas where MPC delivers measurable transformation —
              backed by certified specialists in every module.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {MODULES.map((mod) => (
              <article
                key={mod.title}
                className="flex flex-col h-full rounded-card border border-cta bg-white p-5 md:p-6">
                <img
                  src={mod.imageSrc}
                  alt={mod.imageAlt}
                  className="w-full aspect-[4/3] object-cover rounded-[10px] md:rounded-[12px] mb-5 md:mb-6"
                />
                <h3 className="type-h3 text-[20px] md:text-[22px] text-text-primary mb-3">
                  {mod.title}
                </h3>
                <p className="font-body text-[15px] leading-[1.65] text-text-primary opacity-80 flex-grow mb-6">
                  {mod.desc}
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

        {/* Process */}
        <div id="process" className="scroll-mt-[140px]">
          <ProcessSteps
            eyebrow="Delivery"
            title="Our HCM delivery process"
            intro="A six-stage methodology refined across 65+ enterprise Oracle HCM engagements. Every project tracks against this framework — adapted to your scale and complexity."
            steps={PROCESS_STEPS}
            variant="light"
            centerHeader
            accentStepTitles
          />
        </div>

        {/* Comparison */}
        <ComparisonTable
          id="comparison"
          className="scroll-mt-[140px]"
          eyebrow="Comparison"
          title="Doing HCM yourself vs. with MPC"
          intro="What enterprises typically encounter when comparing in-house or generic SI delivery against an Oracle specialist."
          headers={['Criterion', 'DIY / Generic SI', 'With MPC']}
          highlightIndex={2}
          rows={COMPARISON_ROWS}
          bg="white"
          centerHeader
        />
        

        {/* Case Study */}
        <StatOverlayCaseStudy
          id="case-study"
          className="scroll-mt-[140px]"
          eyebrow="Featured Case Study"
          tag="BFSI · 2024"
          headline="Global BFSI consolidates HR onto one system"
          description="A leading BFSI institution operating across three countries needed to consolidate four legacy HR systems into Oracle HCM Cloud — without disrupting payroll cycles or compliance reporting. MPC delivered a phased Core HR → Talent → Payroll implementation with a custom integration layer to legacy systems."
          metadata="Industry: BFSI · Geography: India, UAE, Singapore, UK · Modules: Core HR, Talent, Payroll"
          imageSrc="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop"
          imageAlt="Corporate finance and HR setting"
          stat="40%"
          statLabel="Reduction in HR admin time"
          statContext="4 legacy systems consolidated to one Oracle HCM environment across 3 countries"
          ctaText="Read the full case study"
          ctaTo="/resources/case-studies/"
          bg="soft" />
        

        {/* Spacer to allow stat card overlap to breathe */}
        <div className="w-full bg-bg-light h-[80px] lg:h-[120px]" />

        {/* Related Services */}
        <RelatedServices
          id="related"
          eyebrow="Related Services"
          title="Continue exploring"
          items={RELATED}
          bg="white"
          centerHeader
        />
        

        {/* FAQ */}
        <div id="faq" className="scroll-mt-[140px]">
          <FAQAccordion
            eyebrow="FAQs"
            title="Oracle HCM — Frequently Asked Questions"
            items={FAQS}
            layout="full"
            bg="soft"
          />
        </div>
        

        {/* CTA */}
        <CTABand
          title="Schedule an HCM"
          titleAccent="Discovery Call"
          body="Tell us about your Oracle HCM environment. We'll give you an honest assessment and a clear path forward."
          ctaText="Book a Call"
          ctaTo="/contact/"
          variant="split" />
        
      </main>

      <FooterDark />
    </div>);

}