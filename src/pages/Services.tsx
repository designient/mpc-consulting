import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Database,
  Code2,
  Cloud,
  Workflow,
  Activity,
  UserCheck,
  Sparkles,
  ArrowRight } from
'lucide-react';
import { StickyNav } from '../components/layout/StickyNav';
import { FooterDark } from '../components/sections/FooterDark';
import { SEO, ORGANIZATION_SCHEMA, WEB_SITE_SCHEMA } from '../components/seo/SEO';
import { QuickAnswerCard } from '../components/sections/QuickAnswerCard';
import { Heading } from '../components/ui/Heading';
import { Card } from '../components/ui/Card';
import { ProcessSteps } from '../components/sections/ProcessSteps';
import { ComparisonTable } from '../components/sections/ComparisonTable';
import { StatOverlayCaseStudy } from '../components/sections/StatOverlayCaseStudy';
import {
  FAQAccordion,
  buildFAQSchema } from
'../components/sections/FAQAccordion';
import { CTABand } from '../components/sections/CTABand';
import {
  Breadcrumb,
  buildBreadcrumbSchema } from
'../components/sections/Breadcrumb';
const BREADCRUMB = [
{
  label: 'Services'
}];

const SERVICES = [
{
  icon: Users,
  title: 'HCM',
  desc: 'Oracle HCM Cloud — Transform HR, Talent, Payroll, and Workforce Management end-to-end.',
  to: '/services/hcm/'
},
{
  icon: Database,
  title: 'ERP (Oracle Cloud)',
  desc: 'Oracle Fusion & EBS — Financials, Projects, Procurement, Risk, and Compliance.',
  to: '/services/erp-oracle-cloud/'
},
{
  icon: Code2,
  title: 'Java Technologies',
  desc: 'Spring Boot, microservices, full-stack development, and legacy modernisation.',
  to: '/services/java-technologies/'
},
{
  icon: Cloud,
  title: 'DevOps Services',
  desc: 'CI/CD pipelines, Kubernetes, multi-cloud infrastructure, and automated delivery.',
  to: '/services/devops/'
},
{
  icon: Workflow,
  title: 'Business Process Consulting',
  desc: 'Map, redesign, and optimise Finance, HR, Supply Chain, and Sales processes.',
  to: '/services/business-process-consulting/'
},
{
  icon: Activity,
  title: 'HCaaS',
  desc: 'Health Check as a Service — an independent Oracle audit with a clear remediation roadmap.',
  to: '/services/health-check-as-a-service/'
},
{
  icon: UserCheck,
  title: 'AaaS',
  desc: 'Adoption as a Service — change management and training that maximises Oracle ROI.',
  to: '/services/adoption-as-a-service/'
},
{
  icon: Sparkles,
  title: 'AI CoE',
  desc: 'AI enablement, predictive AI, custom agents, and generative AI for the enterprise.',
  to: '/services/ai-coe/'
}];

const PORTFOLIO_TABS = {
  Oracle: [
  'Oracle HCM Cloud',
  'Oracle Fusion ERP',
  'Oracle EBS',
  'Oracle ME',
  'Oracle APEX',
  'Oracle OIC',
  'Oracle OCI',
  'Oracle EPM',
  'Oracle Unifier'],

  'Cloud & DevOps': [
  'CI/CD Pipelines',
  'Kubernetes & Docker',
  'AWS',
  'Azure',
  'GCP',
  'OCI',
  'Backup & DR',
  'GitLab',
  'GitHub Actions',
  'Jenkins'],

  'AI & Innovation': [
  'Agentic Studio',
  'Custom AI Agents',
  'AI CoE',
  'Digital Workers',
  'Internet of Agents',
  'AI-First Consulting'],

  'Java & Development': [
  'Java Spring Boot',
  'Microservices',
  'REST/GraphQL APIs',
  'React.js',
  'Angular',
  'Node.js',
  'PostgreSQL',
  'MySQL'],

  'Analytics & CX': [
  'Power BI',
  'Salesforce',
  'ServiceNow',
  'Oracle Analytics',
  'CX Strategy']

};
const TECH_STACK = [
'Oracle',
'OCI',
'AWS',
'Azure',
'GCP',
'Power BI',
'Salesforce',
'ServiceNow',
'Docker',
'Kubernetes',
'GitLab',
'GitHub'];

const WHY_MPC = [
{
  title: 'Full-Cycle Implementation',
  body: 'From business process mapping and solution design to go-live and hypercare — we own the entire delivery journey.'
},
{
  title: 'Managed Support',
  body: 'Post-go-live, we stay. Managed service contracts ensure your Oracle system keeps pace with your business.'
},
{
  title: 'Accelerator Packs',
  body: 'Pre-built templates, configuration accelerators, and documented methodologies — reducing implementation time and risk.'
}];

const ENGAGEMENT_STEPS = [
{
  number: '01',
  title: 'Assess',
  description:
  'Current state diagnostic across processes, systems, and people. Clear definition of scope.'
},
{
  number: '02',
  title: 'Design',
  description:
  'Future-state design aligned to Oracle Cloud capabilities. Architecture, integrations, and change plan.'
},
{
  number: '03',
  title: 'Implement',
  description:
  'Certified delivery by Oracle specialists. Iterative checkpoints. Documented configuration.'
},
{
  number: '04',
  title: 'Optimise',
  description:
  'Post-go-live hypercare transitions to managed service. KPI tracking. Continuous improvement.'
}];

const COMPARISON = [
{
  criterion: 'Oracle specialisation',
  values: ['Generalist platform', 'Oracle from day one']
},
{
  criterion: 'Industry depth',
  values: ['Single vertical', 'Eight industries served']
},
{
  criterion: 'Time-to-value',
  values: ['Long, learning curves', 'Accelerator packs from 87+ engagements']
},
{
  criterion: 'Post go-live support',
  values: [
  'Hand-over and gone',
  'Managed service from the team that built it']

},
{
  criterion: 'AI tooling',
  values: ['Generic plug-ins', 'AI CoE — purpose-built for Oracle']
},
{
  criterion: 'Regional coverage',
  values: [
  'Single region',
  'India, UAE, Singapore, Australia, and the UK with local compliance']

}];

const FAQS = [
{
  q: 'Which service should I start with?',
  a: "If you have an existing Oracle environment, HCaaS gives an independent diagnosis. If you're starting fresh, BPC + HCM/ERP is the typical entry point. Not sure? Contact us for a 30-minute fit conversation."
},
{
  q: 'Can MPC handle multi-service engagements?',
  a: 'Yes. Most enterprise engagements blend two or more services — e.g. BPC + HCM + AaaS, or DevOps + Java + ERP. We scope and deliver as one integrated programme.'
},
{
  q: 'Do all services come with managed support?',
  a: 'Managed support is offered across all 8 services. We treat it as a long-term commitment, not a hand-off.'
}];

export function Services() {
  const tabKeys = Object.keys(PORTFOLIO_TABS) as (keyof typeof PORTFOLIO_TABS)[];
  const [tab, setTab] = useState<keyof typeof PORTFOLIO_TABS>(tabKeys[0]);
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="Cloud Consulting Services | Oracle HCM, ERP, DevOps & AI | MPC"
        description="MPC delivers Oracle HCM, ERP, DevOps, Java, AI and business process consulting services across India, UAE, Singapore, the UK, and Australia."
        canonicalPath="/services/"
        schema={[
          ORGANIZATION_SCHEMA,
          WEB_SITE_SCHEMA,
          buildBreadcrumbSchema(BREADCRUMB),
          buildFAQSchema(FAQS)
        ]}
      />
      
      <StickyNav />
      <main className="flex-grow w-full">
        {/* Hero */}
        <section className="w-full bg-primary text-text-inverse px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="mb-6">
            <Breadcrumb items={BREADCRUMB} variant="dark" />
          </div>
          <div className="w-[60px] h-[3px] bg-divider mb-6" />
          <Heading level={1} color="text-inverse">
            End-to-End Cloud Services, Powered by AI
          </Heading>
          <p className="font-body text-[18px] md:text-[20px] leading-[1.6] text-text-inverse opacity-90 mt-6 max-w-[760px]">
            From Oracle HCM and ERP to DevOps, Java, and AI innovation — MPC
            delivers the full spectrum of cloud consulting for enterprises that
            demand more than a standard implementation.
          </p>
          <div className="mt-8">
            <Link to="/contact/">
              <button className="bg-cta hover:opacity-90 transition-opacity text-text-inverse rounded-button px-9 py-4 font-body font-semibold text-[16px] shadow-subtle">
                Talk to a Specialist
              </button>
            </Link>
          </div>
        </section>

        <QuickAnswerCard
          question="What does MPC Cloud Consulting do?"
          answer="MPC is an Oracle Cloud and AI transformation partner delivering HCM, ERP, DevOps, Java, business process consulting, health checks, adoption services, and AI innovation — with 700+ specialists across India, UAE, Singapore, Australia, and the UK."
        />

        {/* Services hub grid */}
        <section className="w-full bg-white px-4 py-14 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="mb-10 max-w-[700px]">
            <p className="section-eyebrow mb-3">
              What We Offer
            </p>
            <Heading level={2}>Eight services. Deep expertise in each.</Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.to}
                  to={s.to}
                  className="group flex flex-col rounded-card border border-black/8 bg-white hover:border-divider hover:shadow-subtle transition-all p-6">
                  
                  <div className="w-11 h-11 rounded-md bg-divider/10 flex items-center justify-center text-divider mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-semibold text-[20px] leading-tight text-text-primary mb-2 group-hover:text-divider transition-colors">
                    {s.title}
                  </h3>
                  <p className="font-body text-[14px] leading-[1.6] text-text-primary opacity-75 mb-5 flex-grow">
                    {s.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-body text-[13px] font-semibold text-cta">
                    Learn more{' '}
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>);

            })}
          </div>
        </section>

        {/* Portfolio Tabs */}
        <section className="w-full bg-bg-light px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="mb-8 max-w-[700px]">
            <p className="section-eyebrow mb-3">
              Solutions Portfolio
            </p>
            <Heading level={2}>The full stack we work with</Heading>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {tabKeys.map((k) =>
            <button
              key={k}
              onClick={() => setTab(k)}
              className={`px-4 py-2 rounded-full font-body text-[14px] font-medium transition-colors ${tab === k ? 'bg-cta text-text-inverse' : 'bg-white text-text-primary border border-black/10 hover:border-divider'}`}>
              
                {k}
              </button>
            )}
          </div>
          <div className="bg-white rounded-card p-6 md:p-8 shadow-subtle">
            <div className="flex flex-wrap gap-2">
              {PORTFOLIO_TABS[tab].map((item) =>
              <span
                key={item}
                className="px-3.5 py-1.5 rounded-full border border-divider/30 bg-divider/5 font-body text-[13px] font-medium">
                
                  {item}
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="w-full bg-white px-4 py-12 md:px-10 md:py-16 lg:px-[60px]">
          <p className="text-center font-body text-[14px] uppercase tracking-[0.8px] font-semibold text-divider mb-6">
            Platforms We Work With
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-5 max-w-[1000px] mx-auto items-center justify-items-center">
            {TECH_STACK.map((t) =>
            <div
              key={t}
              className="font-body italic text-[18px] md:text-[20px] text-text-primary opacity-50 hover:opacity-80 transition-opacity select-none">
              
                {t}
              </div>
            )}
          </div>
        </section>

        {/* Why MPC */}
        <section className="w-full bg-bg-light px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="mb-10">
            <p className="section-eyebrow mb-3">
              Why MPC
            </p>
            <Heading level={2}>Why enterprises choose MPC</Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {WHY_MPC.map((w, i) =>
            <Card key={i} bg="white">
                <Heading level={3} className="mb-3">
                  {w.title}
                </Heading>
                <p className="font-body text-[16px] leading-[1.7] text-text-primary opacity-80">
                  {w.body}
                </p>
              </Card>
            )}
          </div>
        </section>

        <ProcessSteps
          eyebrow="Engagement Model"
          title="How an MPC engagement runs"
          intro="A consistent four-stage methodology — adapted to your scope, refined across 87+ engagements."
          steps={ENGAGEMENT_STEPS}
          variant="light" />
        

        <ComparisonTable
          eyebrow="Comparison"
          title="MPC vs. typical SI vs. in-house"
          headers={['Criterion', 'Typical SI', 'With MPC']}
          highlightIndex={2}
          rows={COMPARISON}
          bg="soft" />
        

        <StatOverlayCaseStudy
          tag="Global BFSI · 2024"
          headline="$48M saved across an Oracle consolidation programme"
          description="A multinational BFSI institution operating across three countries consolidated four legacy HR systems and modernised their Oracle ERP with MPC."
          metadata="BFSI · India, UAE, Singapore, UK · HCM + ERP"
          imageSrc="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000&auto=format&fit=crop"
          stat="$48M"
          statLabel="Delivered savings"
          statContext="Across 18 months of phased Oracle consolidation and optimisation."
          ctaTo="/resources/case-studies/"
          bg="soft" />
        
        <div className="w-full bg-bg-light h-[80px] lg:h-[120px]" />

        <FAQAccordion
          eyebrow="FAQs"
          title="Services — Frequently Asked Questions"
          items={FAQS}
          layout="full"
          bg="soft" />
        

        <CTABand
          title="Not sure where to start?"
          body="Tell us about your current Oracle setup and your goals. We'll tell you exactly where we can help."
          ctaText="Contact Us"
          ctaTo="/contact/"
          variant="centered" />
        
      </main>
      <FooterDark />
    </div>);

}