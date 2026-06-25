import React from 'react';
import { Users, Code2, Activity } from 'lucide-react';
import { StickyNav } from '../../components/layout/StickyNav';
import { FooterDark } from '../../components/sections/FooterDark';
import { SEO, ORGANIZATION_SCHEMA } from '../../components/seo/SEO';
import { ServiceHero } from '../../components/sections/heroes/ServiceHero';
import { ServiceWhatIs } from '../../components/sections/ServiceWhatIs';
import { TableOfContents } from '../../components/sections/TableOfContents';
import { Heading } from '../../components/ui/Heading';
import { Card } from '../../components/ui/Card';
import { ProcessSteps } from '../../components/sections/ProcessSteps';
import { StatCalloutGrid } from '../../components/sections/StatCalloutGrid';
import { ComparisonTable } from '../../components/sections/ComparisonTable';
import { StatOverlayCaseStudy } from '../../components/sections/StatOverlayCaseStudy';
import { RelatedServices } from '../../components/sections/RelatedServices';
import {
  FAQAccordion,
  buildFAQSchema } from
'../../components/sections/FAQAccordion';
import { CTABand } from '../../components/sections/CTABand';
import { buildBreadcrumbSchema } from '../../components/sections/Breadcrumb';
const TOC = [
  { label: 'Overview', hash: 'overview' },
  { label: 'Capabilities', hash: 'capabilities' },
  { label: 'Process', hash: 'process' },
  { label: 'Comparison', hash: 'comparison' },
  { label: 'Case Study', hash: 'case-study' },
  { label: 'FAQ', hash: 'faq' }
];

const OVERVIEW_IMAGE =
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop';

const BREADCRUMB = [
{
  label: 'Services',
  to: '/services/'
},
{
  label: 'Oracle (Fusion & EBS)',
  to: '/services/oracle-fusion-ebs/'
},
{
  label: 'ERP (Oracle Cloud)'
}];

const TECH_CHIPS = [
'Oracle Fusion',
'Oracle EBS',
'Oracle APEX',
'OIC',
'OCI',
'Oracle Redwood',
'FDIP',
'Oracle EPM',
'Oracle Unifier',
'IBS Fintech'];

const CAPABILITIES = [
{
  title: 'Oracle Fusion Implementation',
  body: 'New Oracle Cloud Financials deployments — designed for the cloud from the ground up.'
},
{
  title: 'EBS Implementation & Extension',
  body: 'Oracle E-Business Suite — implementations, customisations, and extensions for complex ERP environments.'
},
{
  title: 'EBS to Fusion Migration',
  body: 'Structured migration programmes from Oracle EBS to Oracle Fusion Cloud — with proven data migration and process redesign methodology.'
},
{
  title: 'Oracle APEX & PaaS',
  body: 'Custom business applications built on Oracle APEX and Platform as a Service — extending ERP capability without breaking it.'
},
{
  title: 'Oracle EPM',
  body: 'Enterprise Performance Management — budgeting, forecasting, and financial consolidation on Oracle EPM Cloud.'
},
{
  title: 'Managed Service',
  body: 'Post-go-live support, system administration, and ongoing Oracle ERP optimisation — so you stay current and compliant.'
}];

const PROCESS_STEPS = [
{
  number: '01',
  title: 'Assess',
  description:
  'Current ERP estate audit, process pain-point mapping, and Fusion / EBS suitability analysis.'
},
{
  number: '02',
  title: 'Design',
  description:
  'Chart of accounts, subledger accounting, multi-entity structure, and integration architecture.'
},
{
  number: '03',
  title: 'Build',
  description:
  'Iterative configuration by Oracle-certified consultants with documented design decisions.'
},
{
  number: '04',
  title: 'Validate',
  description:
  'SIT, UAT, financial parallel runs, period-end simulations, and audit trail verification.'
},
{
  number: '05',
  title: 'Go-Live',
  description:
  'Phased cutover, command-centre support, and stabilisation of month-end and reporting cycles.'
},
{
  number: '06',
  title: 'Optimise',
  description:
  'Quarterly release readiness, continuous improvement, and managed support transition.'
}];

const STATS = [
{
  number: '65+',
  label: 'ERP Clients Globally'
},
{
  number: '350+',
  label: 'Years Combined Oracle Expertise'
},
{
  number: '8',
  label: 'Industries Served'
},
{
  number: '4',
  label: 'Global Delivery Locations'
}];

const COMPARISON_ROWS = [
{
  criterion: 'Fusion + EBS coverage',
  values: [
  'One or the other, rarely both',
  'Deep specialists in both platforms']

},
{
  criterion: 'Migration methodology',
  values: [
  'Ad-hoc, learn as you go',
  'Repeatable accelerators across 87+ engagements']

},
{
  criterion: 'Compliance configuration',
  values: [
  'Reactive — fixed post-audit',
  'Designed in across IN, UAE, AU, UK']

},
{
  criterion: 'Month-end performance',
  values: [
  'Often regresses after go-live',
  'Engineered for faster close cycles']

},
{
  criterion: 'Post-go-live ownership',
  values: ['Hand-over and gone', 'Managed service from the build team']
}];

const FAQS = [
{
  q: 'Does MPC work with Oracle EBS as well as Fusion?',
  a: 'Yes. We have deep expertise in both Oracle EBS (R12 and earlier) and Oracle Fusion Cloud. We help clients extend EBS, migrate to Fusion, or manage both in hybrid environments.'
},
{
  q: 'What is Oracle APEX and can MPC build with it?',
  a: "Oracle APEX is Oracle's low-code application development platform. MPC uses APEX to build custom business applications within the Oracle ecosystem — extending ERP functionality without third-party tools."
},
{
  q: 'Can MPC handle EBS to Fusion migration?',
  a: "Yes. We've delivered structured EBS→Fusion migration programmes with documented data migration, process redesign, and minimal disruption to financial close cycles."
},
{
  q: 'Do you support multi-entity, multi-currency Oracle ERP?',
  a: 'Yes. Our Oracle ERP practice supports global enterprises with complex multi-entity, multi-currency, multi-GAAP requirements across India, UAE, Singapore, Australia, and the UK.'
}];

const RELATED = [
{
  icon: Code2,
  title: 'Java Technologies',
  description:
  'Custom Java applications and APIs that integrate with Oracle ERP.',
  to: '/services/java-technologies/'
},
{
  icon: Users,
  title: 'HCM',
  description:
  'Oracle HCM Cloud — pairs naturally with Oracle ERP for unified back office.',
  to: '/services/hcm/'
},
{
  icon: Activity,
  title: 'Health Check as a Service',
  description:
  'Independent audit of your live Oracle ERP environment with a fix roadmap.',
  to: '/services/health-check-as-a-service/'
}];

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Oracle ERP Cloud (Fusion & EBS) Consulting',
  provider: {
    '@type': 'Organization',
    name: 'MPC Cloud Consulting'
  },
  areaServed: ['India', 'UAE', 'Singapore', 'Australia', 'United Kingdom'],
  description:
  'End-to-end Oracle Fusion and EBS ERP — Financials, Projects, Procurement, Risk, and Compliance.',
  url: 'https://www.mpccloudconsulting.com/services/erp-oracle-cloud/'
};
export function ERP() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="Oracle ERP Cloud (Fusion & EBS) Consulting | MPC Cloud"
        description="MPC specialises in Oracle Fusion & EBS ERP — Financials, Projects, Risk & Compliance. End-to-end implementation globally."
        canonicalPath="/services/erp-oracle-cloud/"
        schema={[
        ORGANIZATION_SCHEMA,
        SERVICE_SCHEMA,
        buildBreadcrumbSchema(BREADCRUMB),
        buildFAQSchema(FAQS)]
        } />
      
      <StickyNav />
      <main className="flex-grow w-full">
        <ServiceHero
          eyebrow="Oracle Cloud · ERP"
          headline="Oracle ERP Cloud"
          headlineAccent="Finance, Projects & Compliance at Scale"
          subhead="Oracle Fusion and EBS implementation, migration, and managed service — for enterprises that need ERP that performs at the pace of their business."
          primaryCtaText="Talk to Our ERP Team"
          primaryCtaTo="/contact/"
          secondaryCtaText="See the Comparison"
          secondaryCtaTo="#comparison"
          imageSrc="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop"
          imageAlt="Finance team reviewing ERP dashboards"
          breadcrumb={BREADCRUMB} />

        <ServiceWhatIs
          title="What is Oracle ERP Cloud?"
          body="Oracle ERP Cloud — comprising Oracle Fusion Financials and Oracle E-Business Suite — is the financial backbone of enterprise operations, covering Financials, Projects, Procurement, Risk & Compliance, Treasury, and Performance Management. MPC delivers Oracle ERP across both platforms — implementation, EBS→Fusion migration, APEX extensions, and managed service."
          imageSrc={OVERVIEW_IMAGE}
          imageAlt="Finance team reviewing ERP dashboards"
        />

        <TableOfContents items={TOC} variant="inline" />

        <section
          id="overview"
          className="scroll-mt-[140px] w-full bg-white px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="max-w-[1280px] mx-auto">
          <div className="mb-10">
          <p className="section-eyebrow mb-3">
            Overview
          </p>
          <Heading level={2} className="mb-5">
            Oracle ERP Cloud with MPC
          </Heading>
          <p className="font-body text-[17px] leading-[1.75] text-text-primary opacity-85 mb-5 max-w-[820px]">
            Oracle ERP Cloud is the financial backbone of enterprise operations.
            MPC has deep, certified expertise across both platforms: Fusion for
            modern cloud deployments and EBS for complex legacy environments
            requiring upgrade, extension, or migration.
          </p>
          <p className="font-body text-[17px] leading-[1.75] text-text-primary opacity-85 mb-6 max-w-[820px]">
            Our Oracle-first DNA means we understand the platform at depth —
            from Chart of Accounts design and Subledger Accounting to complex
            multi-entity consolidations and treasury management with IBS
            Fintech.
          </p>
          <div className="flex flex-wrap gap-2">
            {TECH_CHIPS.map((c) =>
            <span
              key={c}
              className="px-3.5 py-1.5 rounded-full border border-divider/30 bg-divider/5 font-body text-[13px] font-medium">
              
                {c}
              </span>
            )}
          </div>
          </div>
          </div>
        </section>

        <section
          id="capabilities"
          className="scroll-mt-[140px] w-full bg-bg-light px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="text-center mb-10 max-w-[800px] mx-auto">
            <p className="section-eyebrow mb-3">Capabilities</p>
            <Heading level={2}>Our ERP Capabilities</Heading>
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

        <div id="process" className="scroll-mt-[140px]">
          <ProcessSteps
            eyebrow="Delivery"
            title="Our ERP delivery process"
            intro="A six-stage Oracle ERP methodology proven across Fusion implementations and EBS→Fusion migrations."
            steps={PROCESS_STEPS}
            variant="light"
            centerHeader
            accentStepTitles
          />
        </div>
        

        <section className="w-full bg-bg-light px-4 pt-12 md:px-10 md:pt-16 lg:px-[60px] lg:pt-[80px]">
          <div className="mb-6">
            <p className="section-eyebrow mb-3">
              Why MPC
            </p>
            <Heading level={2}>Oracle ERP done by Oracle specialists</Heading>
          </div>
          <StatCalloutGrid
            stats={STATS}
            variant="light"
            className="!px-0 !py-0 pb-12 md:pb-16 lg:pb-[40px]" />
          
        </section>

        <ComparisonTable
          id="comparison"
          className="scroll-mt-[140px]"
          eyebrow="Comparison"
          title="In-house / generic SI vs. MPC"
          intro="What enterprises typically encounter when comparing in-house or generic SI delivery against an Oracle ERP specialist."
          headers={['Criterion', 'DIY / Generic SI', 'With MPC']}
          highlightIndex={2}
          rows={COMPARISON_ROWS}
          bg="white"
          centerHeader
        />

        <StatOverlayCaseStudy
          id="case-study"
          className="scroll-mt-[140px]"
          eyebrow="Featured Case Study"
          tag="Manufacturing · 2024"
          headline="Manufacturer migrates EBS R12 → Fusion with zero close disruption"
          description="A global manufacturing client needed to migrate from Oracle EBS R12 to Oracle Fusion Cloud with zero disruption to month-end financial close. MPC delivered a phased migration with parallel close cycles."
          metadata="Manufacturing · Global · EBS → Fusion"
          imageSrc="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=2000&auto=format&fit=crop"
          imageAlt="Manufacturing facility operations"
          stat="8d → 3d"
          statLabel="Financial close cycle"
          statContext="Full GL reconciliation automated. Zero disruption to month-end during cutover."
          ctaText="Read the full case study"
          ctaTo="/resources/case-studies/"
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
            title="Oracle ERP — Frequently Asked Questions"
            items={FAQS}
            layout="full"
            bg="soft"
          />
        </div>

        <CTABand
          title="Talk to Our"
          titleAccent="ERP Team"
          body="Tell us about your current Oracle setup and your goals. We'll tell you exactly where we can help."
          ctaText="Get in Touch"
          ctaTo="/contact/"
          variant="split"
        />
        
      </main>
      <FooterDark />
    </div>);

}