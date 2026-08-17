import React from 'react';
import {
  Landmark,
  Wallet,
  TrendingUp,
  ArrowLeftRight,
  Ship,
  CreditCard,
  Link2,
  Wheat,
  Database,
  LineChart,
  Building2,
} from 'lucide-react';
import { StickyNav } from '../../components/layout/StickyNav';
import { FooterDark } from '../../components/sections/FooterDark';
import { SEO, ORGANIZATION_SCHEMA } from '../../components/seo/SEO';
import { ServiceHero } from '../../components/sections/heroes/ServiceHero';
import { ServiceWhatIs } from '../../components/sections/ServiceWhatIs';
import { TableOfContents } from '../../components/sections/TableOfContents';
import { ServiceCapabilities } from '../../components/sections/ServiceCapabilities';
import { TreasuryModuleGrid } from '../../components/sections/TreasuryModuleGrid';
import { Heading } from '../../components/ui/Heading';
import { Card } from '../../components/ui/Card';
import { ComparisonTable } from '../../components/sections/ComparisonTable';
import {
  FAQAccordion,
  buildFAQSchema,
} from '../../components/sections/FAQAccordion';
import { CTABand } from '../../components/sections/CTABand';
import { buildBreadcrumbSchema } from '../../components/sections/Breadcrumb';
import {
  SERVICE_TREASURY,
  SOLUTION_IBS_FINTECH,
  SOLUTION_TREASURY_OPERATIONS,
} from '../../data/paths';

const TOC = [
  { label: 'Overview', hash: 'overview' },
  { label: 'Platform', hash: 'highlights' },
  { label: 'Modules', hash: 'modules' },
  { label: 'Integrations', hash: 'integrations' },
  { label: 'Comparison', hash: 'comparison' },
  { label: 'FAQ', hash: 'faq' },
];

const OVERVIEW_IMAGE =
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80';

const PLATFORM_IMAGE =
  'https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1600&auto=format&fit=crop';

const BREADCRUMB = [
  { label: 'Services' },
  { label: 'Treasury Management' },
];

const CAPABILITIES = [
  {
    title: 'IBS Fintech',
    body: 'All-in-one treasury tech platform, multi-company, multi-location, multi-currency, and multi-asset class with ERP, market data, and global bank integrations.',
    to: SOLUTION_IBS_FINTECH,
  },
  {
    title: 'All Aspects of Treasury Management',
    body: 'Cash and liquidity, payments, investments, currency and commodity risk, trade finance, debt, and supply chain finance, eight integrated modules.',
    to: SOLUTION_TREASURY_OPERATIONS,
  },
];

const PLATFORM_HIGHLIGHTS = [
  { label: 'Multi-Company' },
  { label: 'Multi-Location' },
  { label: 'Multi-Currency' },
  { label: 'Multi-Asset Class' },
];

const TREASURY_MODULES = [
  {
    icon: Wallet,
    title: 'Cash & Liquidity Management',
    items: [
      'Cash visibility',
      'Cash forecasting v/s actual',
      'Bank statement analysis',
    ],
  },
  {
    icon: CreditCard,
    title: 'Payments',
    items: [
      'Bank account maintenance',
      'MFU payments',
      'Inter-company transfer',
      'Inter-bank transfer',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Investment Management',
    items: [
      'Term deposits, bonds, mutual funds, CP, T-bills, equity, PMS, MLD',
      'Preference shares and alternate investments',
    ],
  },
  {
    icon: ArrowLeftRight,
    title: 'Currency Risk Management',
    items: [
      'Currency derivatives, forwards, futures, options, swaps',
      'IFRS-9 hedge accounting',
      'Valuation engine',
    ],
  },
  {
    icon: Ship,
    title: 'Trade Finance Management',
    items: [
      'Import process management: LC, BC, SC',
      'Export process management: LC maintenance, pre-shipment, post-shipment, regularisation',
      'Bank guarantee, both inwards and outwards',
    ],
  },
  {
    icon: Landmark,
    title: 'Debt Management',
    items: [
      'Market borrowings (CP, bonds, NCD, MLD)',
      'Bank borrowing (term loans, ECBs, WCDL)',
      'Inter-company loan',
    ],
  },
  {
    icon: Link2,
    title: 'Supply Chain Finance',
    items: [
      'Covers the entire lifecycle for supply chain including AP & AR',
      'Digitizes the process flow and gives analytical insights',
    ],
  },
  {
    icon: Wheat,
    title: 'Commodity Risk Management',
    items: [
      'Agri, metal, and precious metal commodities',
      'Exposures, physical and paper trades',
      'Complete hedge cycle of futures & options',
      'Brokers & margin management',
    ],
  },
];

const INTEGRATIONS = [
  {
    icon: Database,
    title: 'ERP',
    description: 'SAP, Oracle, or any third-party ERP solution.',
    imageSrc:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'ERP system integration',
  },
  {
    icon: LineChart,
    title: 'Market Data & Dealing Platforms',
    description: 'Bloomberg, 360T, LSEG (Refinitiv), and other dealing platforms.',
    imageSrc:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Market data and trading platforms',
  },
  {
    icon: Building2,
    title: 'Global Banks',
    description: 'Seamless connectivity with global banking partners.',
    imageSrc:
      'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Global banking connectivity',
  },
];

const COMPARISON_ROWS = [
  {
    criterion: 'Platform breadth',
    values: [
      'Spreadsheets and point solutions',
      'All-in-one treasury platform across 8 capability modules',
    ],
  },
  {
    criterion: 'Multi-entity support',
    values: [
      'Single entity only',
      'Multi-company, multi-location, multi-currency, multi-asset class',
    ],
  },
  {
    criterion: 'Risk management',
    values: [
      'Manual FX and commodity tracking',
      'Currency and commodity risk with IFRS-9 hedge accounting',
    ],
  },
  {
    criterion: 'ERP integration',
    values: [
      'Manual data entry',
      'Native integration with SAP, Oracle, and third-party ERP',
    ],
  },
  {
    criterion: 'Trade finance',
    values: [
      'Offline LC/BG tracking',
      'End-to-end import/export and bank guarantee management',
    ],
  },
];

const FAQS = [
  {
    q: 'What is IBS Fintech?',
    a: 'IBS Fintech is MPC\'s treasury technology platform, an all-in-one product supporting multi-company, multi-location, multi-currency, and multi-asset class treasury operations.',
  },
  {
    q: 'Which treasury modules does the platform cover?',
    a: 'Eight modules: Cash & Liquidity, Payments, Investment Management, Currency Risk, Trade Finance, Debt Management, Supply Chain Finance, and Commodity Risk Management.',
  },
  {
    q: 'Can IBS Fintech integrate with our ERP?',
    a: 'Yes. The platform integrates seamlessly with SAP, Oracle, and other third-party ERP systems, as well as market data providers like Bloomberg and LSEG (Refinitiv).',
  },
  {
    q: 'Does the platform support hedge accounting?',
    a: 'Yes. Currency risk management includes IFRS-9 hedge accounting and a built-in valuation engine for derivatives.',
  },
];

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Treasury Management. IBS Fintech',
  provider: {
    '@type': 'Organization',
    name: 'MPC Cloud Consulting',
  },
  areaServed: ['India', 'UAE', 'Singapore', 'Australia', 'United Kingdom'],
  description:
    'IBS Fintech treasury platform, cash, payments, investments, FX, trade finance, debt, supply chain finance, and commodity risk.',
  url: `https://www.mpccloudconsulting.com${SERVICE_TREASURY}`,
};

export function TreasuryManagement() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="Treasury Management | IBS Fintech Treasury Platform | MPC"
        description="MPC's IBS Fintech treasury platform, cash, liquidity, payments, investments, FX, trade finance, and commodity risk for multi-entity enterprises."
        canonicalPath={SERVICE_TREASURY}
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
          eyebrow="Treasury Management"
          headline="Treasury Management:"
          headlineAccent="IBS Fintech"
          subhead="An all-in-one treasury tech platform supporting multi-company, multi-location, multi-currency, and multi-asset class operations."
          primaryCtaText="Request a Demo"
          primaryCtaTo="/contact/"
          secondaryCtaText="Explore Overview"
          secondaryCtaTo="#overview"
          imageSrc="/treasury-management-hero.png"
          imageAlt="Treasury management and financial analytics"
          breadcrumb={BREADCRUMB}
        />

        <ServiceWhatIs
          title="What is MPC's Treasury Management practice?"
          body="MPC delivers treasury management through IBS Fintech, a comprehensive treasury tech platform that unifies cash, payments, investments, FX risk, trade finance, debt, supply chain finance, and commodity risk. Built for complex, multi-entity enterprises that need real-time visibility and control across their treasury operations."
          imageSrc={OVERVIEW_IMAGE}
          imageAlt="Treasury management and financial analytics"
        />

        <TableOfContents items={TOC} variant="inline" />

        <ServiceCapabilities
          title="Full treasury management portfolio"
          intro="From the IBS Fintech platform to end-to-end treasury operations, one partner for your entire treasury estate."
          capabilities={CAPABILITIES}
        />

        <section
          id="highlights"
          className="scroll-mt-[140px] w-full bg-white px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="text-center mb-8 max-w-[800px] mx-auto">
            <p className="section-eyebrow mb-3">Platform</p>
            <Heading level={2}>An all-in-one product supporting</Heading>
          </div>
          <div className="relative overflow-hidden rounded-card mb-8 max-w-[1000px] mx-auto aspect-[21/9] min-h-[180px]">
            <img
              src={PLATFORM_IMAGE}
              alt="IBS Fintech treasury tech platform"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div aria-hidden className="absolute inset-0 bg-cta/40" />
            <div className="relative z-10 flex h-full items-center justify-center px-6">
              <p className="font-heading text-[22px] md:text-[28px] font-semibold text-white text-center tracking-tight">
                Treasury Tech Platform. IBS Fintech
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 max-w-[1000px] mx-auto">
            {PLATFORM_HIGHLIGHTS.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center rounded-card border border-cta bg-bg-light px-4 py-6 md:py-8 text-center">
                <span className="font-heading font-semibold text-[18px] md:text-[20px] text-stat tracking-tight">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        <TreasuryModuleGrid id="modules" modules={TREASURY_MODULES} />

        <section
          id="integrations"
          className="scroll-mt-[140px] w-full bg-white px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="text-center mb-10 max-w-[800px] mx-auto">
            <p className="section-eyebrow mb-3">Integrations</p>
            <Heading level={2}>Seamlessly integrates with</Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-[1280px] mx-auto">
            {INTEGRATIONS.map((item, i) => {
              const Icon = item.icon;
              return (
                <Card key={i} bg="white" className="p-0 min-h-0 overflow-hidden">
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="w-full aspect-[16/10] object-cover"
                  />
                  <div className="p-6 md:p-7">
                  <div className="w-11 h-11 rounded-md bg-stat/10 flex items-center justify-center text-stat mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <Heading level={3} className="mb-3">
                    {item.title}
                  </Heading>
                  <p className="font-body text-[15px] leading-[1.6] text-text-primary opacity-80">
                    {item.description}
                  </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        <ComparisonTable
          id="comparison"
          className="scroll-mt-[140px]"
          eyebrow="Comparison"
          title="Manual treasury vs. IBS Fintech"
          intro="What treasury teams typically encounter when comparing spreadsheet-based processes against MPC's IBS Fintech platform."
          headers={['Criterion', 'Manual / point solutions', 'With IBS Fintech']}
          highlightIndex={2}
          rows={COMPARISON_ROWS}
          bg="soft"
          centerHeader
        />

        <div id="faq" className="scroll-mt-[140px]">
          <FAQAccordion
            eyebrow="FAQs"
            title="Treasury Management. Frequently Asked Questions"
            items={FAQS}
            layout="full"
            bg="white"
          />
        </div>

        <CTABand
          title="Modernise your"
          titleAccent="Treasury Operations"
          body="See how IBS Fintech can unify cash, risk, and trade finance across your enterprise."
          ctaText="Request a Demo"
          ctaTo="/contact/"
          variant="split"
        />
      </main>
      <FooterDark />
    </div>
  );
}
