import React from 'react';
import { Database, Workflow, Activity } from 'lucide-react';
import {
  OracleSolutionLayout,
  type OracleSolutionPageConfig,
} from '../../components/layout/OracleSolutionLayout';
import {
  SOLUTION_BPC,
  SOLUTION_ERP,
  SOLUTION_HCM,
  SOLUTION_SCM,
  SOLUTION_TECH,
} from '../../data/paths';

const CONFIG: OracleSolutionPageConfig = {
  canonicalPath: SOLUTION_SCM,
  breadcrumbLabel: 'Oracle SCM',
  seoTitle: 'Oracle SCM Consulting & Implementation | MPC',
  seoDescription:
    'MPC delivers Oracle SCM Cloud and EBS supply chain — planning, procurement, logistics, and inventory across Fusion and EBS.',
  serviceType: 'Oracle SCM Consulting',
  serviceDescription:
    'End-to-end Oracle Supply Chain Management — demand planning, procurement, logistics, and inventory on Fusion and EBS.',
  heroEyebrow: 'Oracle Cloud · SCM',
  heroHeadline: 'Connect your supply chain',
  heroHeadlineAccent: 'with Oracle SCM',
  heroSubhead:
    'Demand planning, procurement, logistics, and inventory management on Oracle Fusion and EBS — implemented by specialists who understand manufacturing and distribution at scale.',
  heroCtaText: 'Schedule an SCM Discovery Call',
  heroImageSrc:
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2400&auto=format&fit=crop',
  whatIsTitle: 'What is Oracle SCM?',
  whatIsBody:
    'Oracle SCM Cloud unifies planning, procurement, manufacturing, logistics, and order management on a single platform. MPC implements Oracle SCM for enterprises that need end-to-end visibility from demand signal to fulfilment — on Fusion Cloud or EBS, with integrations to finance and manufacturing operations.',
  whatIsImageSrc:
    'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1200&auto=format&fit=crop',
  whatIsImageAlt: 'Manufacturing and supply chain operations',
  toc: [
    { label: 'Overview', hash: 'overview' },
    { label: 'Capabilities', hash: 'capabilities' },
    { label: 'Modules', hash: 'modules' },
    { label: 'Process', hash: 'process' },
    { label: 'Comparison', hash: 'comparison' },
    { label: 'FAQ', hash: 'faq' },
  ],
  overviewTitle: 'Oracle SCM with MPC',
  overviewParagraphs: [
    'Supply chain complexity grows with every new plant, supplier, and channel. Oracle SCM brings planning, procurement, and logistics onto one platform — but only if it is configured for how your network actually operates.',
    'MPC delivers Oracle SCM across Fusion and EBS — from demand and supply planning through procurement, inventory, and order fulfilment — with deep integration to Oracle Financials and manufacturing.',
  ],
  moduleChips: [
    'Demand Planning',
    'Supply Planning',
    'Procurement',
    'Inventory',
    'Order Management',
    'Logistics',
    'Manufacturing',
    'Product Lifecycle',
  ],
  capabilitiesTitle: 'Our SCM Capabilities',
  capabilities: [
    {
      title: 'Supply Chain Design',
      body: 'Network modelling, planning hierarchy design, and process mapping before configuration begins.',
    },
    {
      title: 'Fusion SCM Implementation',
      body: 'Cloud-native SCM deployments — planning, procurement, and logistics on Oracle Fusion.',
    },
    {
      title: 'EBS SCM Extension',
      body: 'Oracle EBS supply chain modules — implementations, customisations, and structured upgrades.',
    },
    {
      title: 'Planning & Inventory',
      body: 'Demand planning, supply planning, and inventory optimisation across multi-site networks.',
    },
    {
      title: 'Procurement & Sourcing',
      body: 'Strategic sourcing, supplier management, and procure-to-pay aligned with finance controls.',
    },
    {
      title: 'Managed Support',
      body: 'Post-go-live SCM support, release management, and continuous process improvement.',
    },
  ],
  modulesSectionTitle: 'Modules we implement',
  modulesSectionSubtitle:
    'Three pillars of Oracle SCM where MPC delivers measurable supply chain outcomes.',
  modules: [
    {
      title: 'Planning',
      desc: 'Demand planning, supply planning, and sales & operations planning (S&OP) configured for your product hierarchy and planning calendars — so forecasts drive procurement and production decisions.',
      imageSrc:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Supply chain planning dashboard',
    },
    {
      title: 'Procurement',
      desc: 'Strategic sourcing, supplier qualification, and purchase order management integrated with Oracle Financials — with approval workflows and compliance controls built in from day one.',
      imageSrc:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Procurement team reviewing supplier contracts',
    },
    {
      title: 'Logistics & Inventory',
      desc: 'Warehouse management, inventory optimisation, and order fulfilment across plants and distribution centres — with real-time visibility for operations and finance.',
      imageSrc:
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Warehouse logistics and inventory management',
    },
  ],
  processTitle: 'Our SCM delivery process',
  processIntro:
    'A six-stage methodology refined across Oracle SCM engagements — from network assessment through go-live and hypercare.',
  processSteps: [
    {
      number: '01',
      title: 'Assess',
      description:
        'Current supply chain process mapping, system landscape review, and Fusion / EBS suitability analysis.',
    },
    {
      number: '02',
      title: 'Design',
      description:
        'Future-state planning hierarchy, procurement workflows, and integration architecture with ERP and manufacturing.',
    },
    {
      number: '03',
      title: 'Configure',
      description:
        'Iterative SCM build by certified consultants with documented design decisions and client sign-off.',
    },
    {
      number: '04',
      title: 'Test',
      description:
        'End-to-end scenario testing — planning runs, procurement cycles, and inventory transactions with clear pass criteria.',
    },
    {
      number: '05',
      title: 'Go-Live',
      description:
        'Phased cutover, data migration, and command-centre support during critical supply chain cycles.',
    },
    {
      number: '06',
      title: 'Optimise',
      description:
        'Post-go-live stabilisation, planner enablement, and transition to managed SCM support.',
    },
  ],
  comparisonTitle: 'Generic SI vs. MPC for Oracle SCM',
  comparisonIntro:
    'What enterprises typically encounter when comparing generalist integrators against MPC\'s Oracle SCM practice.',
  comparisonRows: [
    {
      criterion: 'Supply chain depth',
      values: [
        'Finance-led ERP team learning SCM',
        'Certified SCM specialists across planning, procurement, and logistics',
      ],
    },
    {
      criterion: 'Fusion + EBS coverage',
      values: [
        'Single-platform focus',
        'Unified practice spanning Fusion SCM and EBS supply chain modules',
      ],
    },
    {
      criterion: 'Manufacturing integration',
      values: [
        'Siloed planning and production',
        'Integrated planning-to-production flows with Oracle manufacturing',
      ],
    },
    {
      criterion: 'Multi-site rollout',
      values: [
        'Template copied without localisation',
        'Phased rollout across plants with local process adaptation',
      ],
    },
    {
      criterion: 'Post-go-live support',
      values: ['Hand-over and gone', 'Managed service from the team that built it'],
    },
  ],
  related: [
    {
      icon: Database,
      title: 'Oracle Fusion ERP',
      description:
        'Financials, projects, and procurement integrated with your SCM backbone.',
      to: SOLUTION_ERP,
    },
    {
      icon: Workflow,
      title: 'Business Process Consulting',
      description:
        'Optimise supply chain workflows before and during your SCM rollout.',
      to: SOLUTION_BPC,
    },
    {
      icon: Activity,
      title: 'Tech',
      description:
        'Post-go-live Oracle support, upgrades, and ongoing SCM optimisation.',
      to: SOLUTION_TECH,
    },
  ],
  faqs: [
    {
      q: 'Does MPC implement Oracle SCM on Fusion and EBS?',
      a: 'Yes. We deliver Oracle SCM Cloud on Fusion and supply chain modules on Oracle EBS — including structured migration paths from EBS to Fusion SCM.',
    },
    {
      q: 'Can SCM be rolled out separately from Financials?',
      a: 'Yes, though most clients integrate SCM with Oracle Financials for procure-to-pay and cost management. We advise on sequencing during discovery.',
    },
    {
      q: 'Which industries does MPC serve for SCM?',
      a: 'Manufacturing, distribution, retail, and energy — anywhere multi-site planning, procurement, and inventory complexity demands Oracle SCM at depth.',
    },
    {
      q: 'Do you support existing Oracle SCM environments?',
      a: 'Yes. We provide health checks, upgrades, process optimisation, and managed support for live Oracle SCM estates.',
    },
  ],
  faqTitle: 'Oracle SCM — Frequently Asked Questions',
  ctaTitle: 'Schedule an SCM',
  ctaTitleAccent: 'Discovery Call',
  ctaBody:
    'Tell us about your supply chain challenges. We\'ll map how Oracle SCM can connect planning, procurement, and fulfilment.',
  ctaText: 'Book a Call',
};

export function SCM() {
  return <OracleSolutionLayout config={CONFIG} />;
}
