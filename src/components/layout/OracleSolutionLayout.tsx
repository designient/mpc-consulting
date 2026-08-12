import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { StickyNav } from '../layout/StickyNav';
import { FooterDark } from '../sections/FooterDark';
import { SEO, ORGANIZATION_SCHEMA } from '../seo/SEO';
import { TableOfContents } from '../sections/TableOfContents';
import { Heading } from '../ui/Heading';
import { Card } from '../ui/Card';
import { ProcessSteps } from '../sections/ProcessSteps';
import { ComparisonTable } from '../sections/ComparisonTable';
import { StatOverlayCaseStudy } from '../sections/StatOverlayCaseStudy';
import { RelatedServices } from '../sections/RelatedServices';
import {
  FAQAccordion,
  buildFAQSchema,
} from '../sections/FAQAccordion';
import { CTABand } from '../sections/CTABand';
import {
  Breadcrumb,
  BreadcrumbItem,
  buildBreadcrumbSchema,
} from '../sections/Breadcrumb';
import {
  SERVICE_AI_COE,
  SERVICE_ORACLE,
  SERVICES_INDEX,
} from '../../data/paths';
import {
  getCaseStudyForSolution,
  withCaseStudyToc,
} from '../../data/solutionCaseStudies';

type ModuleItem = {
  title: string;
  desc: string;
  imageSrc: string;
  imageAlt: string;
};

type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

type ComparisonRow = {
  criterion: string;
  values: [string, string];
};

type RelatedItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  to: string;
};

type FAQItem = {
  q: string;
  a: string;
};

type CaseStudyConfig = {
  tag: string;
  headline: string;
  description: string;
  metadata: string;
  imageSrc: string;
  imageAlt: string;
  stat: string;
  statLabel: string;
  statContext: string;
};

export type OracleSolutionPageConfig = {
  canonicalPath: string;
  breadcrumbLabel: string;
  /** Parent service in breadcrumb trail; defaults to Oracle (Fusion & EBS) */
  parentService?: { label: string; to: string };
  seoTitle: string;
  seoDescription: string;
  serviceType: string;
  serviceDescription: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroHeadlineAccent: string;
  heroSubhead: string;
  heroCtaText: string;
  heroImageSrc: string;
  whatIsTitle: string;
  whatIsBody: string;
  whatIsImageSrc: string;
  whatIsImageAlt: string;
  toc: { label: string; hash: string }[];
  overviewTitle: string;
  overviewParagraphs: string[];
  moduleChips: string[];
  capabilitiesTitle: string;
  capabilities: { title: string; body: string }[];
  modulesSectionTitle: string;
  modulesSectionSubtitle: string;
  modules: ModuleItem[];
  processTitle: string;
  processIntro: string;
  processSteps: ProcessStep[];
  comparisonTitle: string;
  comparisonIntro: string;
  comparisonRows: ComparisonRow[];
  /** Override mapped case study slug from solutionCaseStudies */
  caseStudySlug?: string;
  caseStudy?: CaseStudyConfig;
  related: RelatedItem[];
  faqs: FAQItem[];
  faqTitle: string;
  ctaTitle: string;
  ctaTitleAccent: string;
  ctaBody: string;
  ctaText: string;
};

function buildBreadcrumb(
  label: string,
  parent: { label: string; to: string } = {
    label: 'Oracle (Fusion & EBS)',
    to: SERVICE_ORACLE,
  },
): BreadcrumbItem[] {
  return [
    { label: 'Services', to: SERVICES_INDEX },
    { label: parent.label, to: parent.to },
    { label },
  ];
}

export function OracleSolutionLayout({ config }: { config: OracleSolutionPageConfig }) {
  const breadcrumb = buildBreadcrumb(
    config.breadcrumbLabel,
    config.parentService,
  );
  const isAiCoeAgent = config.parentService?.to === SERVICE_AI_COE;
  const caseStudyResolved = getCaseStudyForSolution(
    config.canonicalPath,
    config.caseStudySlug,
  );
  const caseStudy = config.caseStudy ?? caseStudyResolved.config;
  const caseStudyCtaTo = caseStudyResolved.ctaTo;
  const tocItems = withCaseStudyToc(
    isAiCoeAgent
      ? config.toc.filter((item) => item.hash !== 'process' && item.hash !== 'related')
      : config.toc,
  );
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: config.serviceType,
    provider: {
      '@type': 'Organization',
      name: 'MPC Cloud Consulting',
    },
    areaServed: ['India', 'United Arab Emirates', 'Singapore', 'Australia', 'United Kingdom'],
    description: config.serviceDescription,
    url: `https://www.mpccloudconsulting.com${config.canonicalPath}`,
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title={config.seoTitle}
        description={config.seoDescription}
        canonicalPath={config.canonicalPath}
        schema={[
          ORGANIZATION_SCHEMA,
          serviceSchema,
          buildBreadcrumbSchema(breadcrumb),
          buildFAQSchema(config.faqs),
        ]}
      />

      <StickyNav />

      <main className="flex-grow w-full">
        <section className="relative w-full min-h-[min(58svh,600px)] max-h-[600px] overflow-hidden flex items-center">
          <img
            src={config.heroImageSrc}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover object-center lg:object-[70%_center]"
          />
          <div aria-hidden className="absolute inset-0 bg-cta/55" />

          <div className="relative w-full max-w-[1400px] mx-auto px-4 md:px-10 lg:px-[60px] py-12 md:py-14 lg:py-16 min-h-[inherit] flex flex-col justify-center text-text-inverse">
            <Breadcrumb
              items={breadcrumb}
              variant="dark"
              className="mb-6 md:mb-8 w-full max-w-[1100px] mx-auto lg:mx-0"
            />

            <div className="w-full max-w-[1100px] text-center lg:text-left flex flex-col items-center lg:items-start mx-auto lg:mx-0">
              <span className="section-eyebrow-inverse inline-flex items-center gap-2 tracking-[0.2em] mb-4 md:mb-5 text-text-inverse">
                <span className="w-1.5 h-1.5 rounded-full bg-text-inverse" />
                {config.heroEyebrow}
              </span>

              <h1 className="type-h1 text-text-inverse">
                <span className="block">{config.heroHeadline}</span>
                <span className="block font-body italic font-normal text-text-inverse mt-1 md:mt-2">
                  {config.heroHeadlineAccent}
                </span>
              </h1>

              <p className="font-body text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5] text-text-inverse/90 mt-4 md:mt-5 max-w-[640px] lg:max-w-[720px]">
                {config.heroSubhead}
              </p>

              <div className="flex items-center justify-center lg:justify-start mt-6 md:mt-8">
                <Link
                  to="/contact/"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary rounded-full font-body text-[15px] font-medium hover:bg-white/90 transition-colors group">
                  {config.heroCtaText}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-bg-light px-4 py-14 md:px-10 md:py-16 lg:px-[60px] lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-[1280px] mx-auto">
            <div className="flex flex-col items-start">
              {!isAiCoeAgent && (
                <p className="section-eyebrow mb-3">AI Overview</p>
              )}
              <Heading level={2} className="mb-5">
                {config.whatIsTitle}
              </Heading>
              <p className="font-body text-[17px] md:text-[18px] leading-[1.75] text-text-primary opacity-85">
                {config.whatIsBody}
              </p>
            </div>
            <div className="w-full">
              <img
                src={config.whatIsImageSrc}
                alt={config.whatIsImageAlt}
                className="w-full aspect-[4/3] object-cover rounded-card shadow-subtle"
              />
            </div>
          </div>
        </section>

        <TableOfContents items={tocItems} variant="inline" />

        <section
          id="overview"
          className="scroll-mt-[140px] w-full bg-white px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="max-w-[1280px] mx-auto">
            <div className="mb-10">
              <p className="section-eyebrow mb-3">Overview</p>
              <Heading level={2} className="mb-4">
                {config.overviewTitle}
              </Heading>
            </div>
            {config.overviewParagraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="font-body text-[17px] leading-[1.75] text-text-primary opacity-85 mb-5 max-w-[900px]">
                {paragraph}
              </p>
            ))}
            <div className="flex flex-wrap gap-2">
              {config.moduleChips.map((chip) => (
                <span
                  key={chip}
                  className="inline-block px-3.5 py-1.5 rounded-full border border-divider/30 bg-divider/5 font-body text-[13px] font-medium text-text-primary">
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section
          id="capabilities"
          className="scroll-mt-[140px] w-full bg-bg-light px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="text-center mb-10 max-w-[800px] mx-auto">
            <p className="section-eyebrow mb-3">Capabilities</p>
            <Heading level={2}>{config.capabilitiesTitle}</Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-[1280px] mx-auto">
            {config.capabilities.map((cap) => (
              <Card key={cap.title} bg="white">
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

        <section
          id="modules"
          className="scroll-mt-[140px] w-full bg-white px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="text-center mb-10 max-w-[800px] mx-auto">
            <p className="section-eyebrow mb-3">Modules</p>
            <Heading level={2} className="mb-4">
              {config.modulesSectionTitle}
            </Heading>
            <p className="font-body text-[17px] leading-[1.7] text-text-primary opacity-80">
              {config.modulesSectionSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-[1280px] mx-auto">
            {config.modules.map((mod) => (
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

        {!isAiCoeAgent && (
          <div id="process" className="scroll-mt-[140px]">
            <ProcessSteps
              eyebrow="Delivery"
              title={config.processTitle}
              intro={config.processIntro}
              steps={config.processSteps}
              variant="light"
              centerHeader
              accentStepTitles
            />
          </div>
        )}

        <ComparisonTable
          id="comparison"
          className="scroll-mt-[140px]"
          eyebrow="Comparison"
          title={config.comparisonTitle}
          intro={config.comparisonIntro}
          headers={['Criterion', 'DIY / Generic SI', 'With MPC']}
          highlightIndex={2}
          rows={config.comparisonRows}
          bg="white"
          centerHeader
        />

        <StatOverlayCaseStudy
          id="case-study"
          className="scroll-mt-[140px]"
          eyebrow="Featured Case Study"
          tag={caseStudy.tag}
          headline={caseStudy.headline}
          description={caseStudy.description}
          metadata={caseStudy.metadata}
          imageSrc={caseStudy.imageSrc}
          imageAlt={caseStudy.imageAlt}
          stat={caseStudy.stat}
          statLabel={caseStudy.statLabel}
          statContext={caseStudy.statContext}
          ctaText="Read the full case study"
          ctaTo={caseStudyCtaTo}
          bg="soft"
        />
        <div className="w-full bg-bg-light h-[80px] lg:h-[120px]" />

        {!isAiCoeAgent && (
          <RelatedServices
            id="related"
            eyebrow="Related Solutions"
            title="Continue exploring"
            items={config.related}
            bg="white"
            centerHeader
          />
        )}

        <div id="faq" className="scroll-mt-[140px]">
          <FAQAccordion
            eyebrow="FAQs"
            title={config.faqTitle}
            items={config.faqs}
            layout="full"
            bg="soft"
          />
        </div>

        <CTABand
          title={config.ctaTitle}
          titleAccent={config.ctaTitleAccent}
          body={config.ctaBody}
          ctaText={config.ctaText}
          ctaTo="/contact/"
          variant="split"
        />
      </main>

      <FooterDark />
    </div>
  );
}
