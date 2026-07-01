export type CaseStudyFilter =
  | 'all'
  | 'hcm'
  | 'erp'
  | 'ai'
  | 'devops'
  | 'manufacturing'
  | 'bfsi'
  | 'professional-services';

export type CaseStudy = {
  slug: string;
  tag: string;
  headline: string;
  description: string;
  metadata: string;
  imageSrc: string;
  imageAlt: string;
  stat: string;
  statLabel: string;
  statContext: string;
  quote?: string;
  quoteAttribution?: string;
  services: string[];
  industries: string[];
  topics: CaseStudyFilter[];
  region: string;
  featured: boolean;
};

export const CASE_STUDY_FILTERS: { id: CaseStudyFilter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'hcm', label: 'HCM' },
  { id: 'erp', label: 'ERP' },
  { id: 'ai', label: 'AI' },
  { id: 'devops', label: 'DevOps' },
  { id: 'manufacturing', label: 'Manufacturing' },
  { id: 'bfsi', label: 'BFSI' },
  { id: 'professional-services', label: 'Professional Services' },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'global-bfsi-consolidation',
    tag: 'Global BFSI · 2024',
    headline: '$48M saved across an Oracle Cloud consolidation programme',
    description:
      'A leading multinational BFSI institution operating across three countries needed to consolidate four legacy HR systems and modernise their Oracle ERP. MPC delivered phased Core HR → Talent → Payroll alongside an ERP optimisation programme.',
    metadata: 'BFSI · India, UAE, Singapore, UK · HCM + ERP',
    imageSrc:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Enterprise team reviewing transformation outcomes',
    stat: '$48M',
    statLabel: 'Delivered savings',
    statContext:
      'Across 18 months of phased Oracle consolidation and optimisation.',
    quote:
      'Their team didn\'t just implement ERP. They redesigned our finance processes. The business impact was immediate.',
    quoteAttribution: 'CFO, Energy Major',
    services: ['HCM', 'ERP'],
    industries: ['BFSI'],
    topics: ['bfsi', 'hcm', 'erp'],
    region: 'India, UAE, Singapore, UK',
    featured: true,
  },
  {
    slug: 'global-bfsi-hcm',
    tag: 'BFSI · 2024',
    headline: 'Global BFSI consolidates HR onto one system',
    description:
      'A leading BFSI institution operating across three countries needed to consolidate four legacy HR systems into Oracle HCM Cloud — without disrupting payroll cycles or compliance reporting. MPC delivered a phased Core HR → Talent → Payroll implementation with a custom integration layer to legacy systems.',
    metadata:
      'Industry: BFSI · Geography: India, UAE, Singapore, UK · Modules: Core HR, Talent, Payroll',
    imageSrc:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Corporate finance and HR setting',
    stat: '40%',
    statLabel: 'Reduction in HR admin time',
    statContext:
      '4 legacy systems consolidated to one Oracle HCM environment across 3 countries',
    quote:
      'MPC delivered our Oracle HCM transformation on time and on budget — with measurable improvements in HR efficiency from day one.',
    quoteAttribution: 'CHRO, Global BFSI Group',
    services: ['HCM'],
    industries: ['BFSI'],
    topics: ['bfsi', 'hcm'],
    region: 'India, UAE, Singapore, UK',
    featured: true,
  },
  {
    slug: 'manufacturing-ebs-fusion',
    tag: 'Manufacturing · 2024',
    headline: 'Manufacturer migrates EBS R12 → Fusion with zero close disruption',
    description:
      'A global manufacturing client needed to migrate from Oracle EBS R12 to Oracle Fusion Cloud with zero disruption to month-end financial close. MPC delivered a phased migration with parallel close cycles.',
    metadata: 'Manufacturing · Global · EBS → Fusion',
    imageSrc:
      'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Manufacturing facility operations',
    stat: '8d → 3d',
    statLabel: 'Financial close cycle',
    statContext:
      'Full GL reconciliation automated. Zero disruption to month-end during cutover.',
    services: ['ERP'],
    industries: ['Manufacturing'],
    topics: ['manufacturing', 'erp'],
    region: 'Global',
    featured: true,
  },
  {
    slug: 'manufacturing-month-end',
    tag: 'Manufacturing · 2024',
    headline: '38% faster month-end close for a global auto components leader',
    description:
      'A unified Oracle Cloud ERP and HCM rollout across 14 plants — designed around the realities of multi-entity manufacturing, with industry-specific reporting from day one.',
    metadata: '14 plants · 4 countries · 9 months',
    imageSrc:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop',
    imageAlt: 'Manufacturing operations dashboard',
    stat: '38%',
    statLabel: 'Faster month-end close',
    statContext: 'Closing the books dropped from 11 days to under 7.',
    quote:
      'The post-go-live support from MPC has been outstanding. They treat our system like it\'s their own.',
    quoteAttribution: 'CTO, Manufacturing Leader',
    services: ['ERP', 'HCM'],
    industries: ['Manufacturing'],
    topics: ['manufacturing', 'erp', 'hcm'],
    region: '4 countries',
    featured: true,
  },
  {
    slug: 'manufacturing-finance-playbook',
    tag: 'Manufacturing · 2024',
    headline: 'Closing the books in 7 days: a manufacturing finance playbook',
    description:
      'What it took to compress month-end from 11 days to under 7 across a 14-plant Oracle Cloud rollout — with multi-entity consolidation and automated reconciliation built in from the start.',
    metadata: 'Manufacturing · 14 plants · Oracle Cloud ERP',
    imageSrc:
      'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Manufacturing finance operations',
    stat: '11d → 7d',
    statLabel: 'Month-end close cycle',
    statContext:
      'Automated GL reconciliation and standardised close processes across all plants.',
    services: ['ERP'],
    industries: ['Manufacturing'],
    topics: ['manufacturing', 'erp'],
    region: 'Global',
    featured: false,
  },
  {
    slug: 'devops-daily-deploys',
    tag: 'Financial Services · 2024',
    headline: 'From quarterly releases to daily deploys: an Oracle Cloud DevOps story',
    description:
      'How one financial services client cut their release cycle from 90 days to 24 hours — with CI/CD pipelines, container orchestration, and DevSecOps gates woven into their Oracle Cloud delivery model.',
    metadata: 'Financial Services · Oracle Cloud · DevOps',
    imageSrc:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'DevOps pipeline and cloud infrastructure',
    stat: '90d → 24h',
    statLabel: 'Release cycle',
    statContext:
      'From quarterly batch releases to daily deploys with automated testing and rollback.',
    quote:
      'Their Oracle depth is genuinely rare — they navigated configuration edge cases our previous SI never even surfaced.',
    quoteAttribution: 'VP IT, Public Sector Body',
    services: ['DevOps', 'Cloud'],
    industries: ['BFSI'],
    topics: ['devops', 'bfsi'],
    region: 'India',
    featured: false,
  },
  {
    slug: 'cx-analytics-power-bi',
    tag: 'Retail · 2024',
    headline: 'Self-service BI rollout cuts reporting time by 60%',
    description:
      'A multi-region retailer replaced fragmented Excel reporting with a governed Power BI programme — semantic models, executive dashboards, and self-service analytics adopted by finance and operations teams.',
    metadata: 'Retail · India, UAE · Power BI · Data modelling',
    imageSrc:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Business intelligence dashboards and analytics',
    stat: '60%',
    statLabel: 'Faster reporting cycles',
    statContext:
      'Month-end reporting compressed from 5 days to 2 with governed self-service BI.',
    services: ['Power BI', 'CX & Analytics'],
    industries: ['Retail'],
    topics: ['bfsi', 'professional-services'],
    region: 'India, UAE',
    featured: false,
  },
  {
    slug: 'cx-salesforce-rollout',
    tag: 'Professional Services · 2024',
    headline: 'Global Salesforce rollout across 12 countries in 9 months',
    description:
      'A professional services firm unified B2B sales and service on Salesforce — phased rollouts across 12 countries with localisation, integration to Oracle ERP, and adoption programmes built in.',
    metadata: 'Professional Services · 12 countries · Sales & Service Cloud',
    imageSrc:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Sales team using CRM platform',
    stat: '12',
    statLabel: 'Countries live',
    statContext:
      'Phased Salesforce rollout with ERP integration and local compliance.',
    services: ['Salesforce', 'CX & Analytics'],
    industries: ['Professional Services'],
    topics: ['professional-services'],
    region: 'Global',
    featured: false,
  },
  {
    slug: 'cx-servicenow-itsm',
    tag: 'Technology · 2024',
    headline: 'ITSM modernisation reduces incident resolution time by 45%',
    description:
      'An enterprise technology group replaced legacy ticketing with ServiceNow ITSM — automated workflows, SLA governance, and integration with monitoring tools for faster incident resolution.',
    metadata: 'Technology · ITSM · ServiceNow',
    imageSrc:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'IT service management operations',
    stat: '45%',
    statLabel: 'Faster incident resolution',
    statContext:
      'Mean time to resolve dropped with automated triage and SLA workflows.',
    services: ['ServiceNow', 'CX & Analytics'],
    industries: ['Professional Services'],
    topics: ['professional-services'],
    region: 'India',
    featured: false,
  },
  {
    slug: 'cloud-app-modernization',
    tag: 'Financial Services · 2024',
    headline: 'Legacy monolith rewritten as cloud-native APIs in 6 months',
    description:
      'A financial services client modernised a legacy Java monolith into microservices on Spring Boot — API-first architecture, CI/CD pipelines, and integration with Oracle Cloud without big-bang cutover.',
    metadata: 'Financial Services · Java · Microservices',
    imageSrc:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Application development and modernisation',
    stat: '6mo',
    statLabel: 'To production APIs',
    statContext:
      'Strangler pattern delivery with phased cutover and zero downtime.',
    services: ['Application Development', 'Java'],
    industries: ['BFSI'],
    topics: ['devops', 'bfsi'],
    region: 'India',
    featured: false,
  },
  {
    slug: 'cloud-database-migration',
    tag: 'Manufacturing · 2024',
    headline: 'Oracle database migration to cloud with 99.9% uptime',
    description:
      'A manufacturing enterprise migrated Oracle and SQL Server workloads to cloud-native databases — schema refactoring, zero-downtime cutover, and data lake engineering for analytics.',
    metadata: 'Manufacturing · Oracle · PostgreSQL · Data lake',
    imageSrc:
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Database migration and cloud infrastructure',
    stat: '99.9%',
    statLabel: 'Migration uptime',
    statContext:
      'Phased migration with parallel validation and automated reconciliation.',
    services: ['Database Migration', 'Cloud'],
    industries: ['Manufacturing'],
    topics: ['manufacturing', 'devops'],
    region: 'Global',
    featured: false,
  },
  {
    slug: 'cloud-multi-cloud-ops',
    tag: 'Energy · 2024',
    headline: 'Multi-cloud operations unified across AWS, Azure, and OCI',
    description:
      'An energy sector client consolidated cloud operations across three providers — IaC standards, observability, backup/DR, and DevOps pipelines delivering consistent governance.',
    metadata: 'Energy · AWS · Azure · OCI · DevOps',
    imageSrc:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Multi-cloud infrastructure operations',
    stat: '3',
    statLabel: 'Clouds unified',
    statContext:
      'Single operations model across AWS, Azure, and OCI with shared IaC.',
    services: ['Cloud Management', 'DevOps'],
    industries: ['Manufacturing'],
    topics: ['devops'],
    region: 'India, UAE',
    featured: false,
  },
  {
    slug: 'security-zero-trust-program',
    tag: 'BFSI · 2024',
    headline: 'Zero Trust programme cuts security incidents by 52%',
    description:
      'A BFSI institution implemented identity-centric Zero Trust architecture — IAM, SASE integration, SOC/NOC 24×7 monitoring, and AI-enabled threat detection across hybrid infrastructure.',
    metadata: 'BFSI · Zero Trust · SOC/NOC · AppSec',
    imageSrc:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Cybersecurity and Zero Trust operations',
    stat: '52%',
    statLabel: 'Fewer security incidents',
    statContext:
      'Year-one reduction after Zero Trust rollout and SOC operationalisation.',
    services: ['Security & Zero Trust'],
    industries: ['BFSI'],
    topics: ['bfsi'],
    region: 'India, UAE',
    featured: false,
  },
  {
    slug: 'treasury-ibs-fintech',
    tag: 'Conglomerate · 2024',
    headline: 'Treasury platform unifies 8 entities on IBS Fintech',
    description:
      'A multi-entity conglomerate consolidated cash, payments, FX risk, and trade finance onto IBS Fintech — multi-currency operations with ERP and global bank integrations.',
    metadata: 'Conglomerate · 8 entities · IBS Fintech · Treasury',
    imageSrc:
      'https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Treasury management platform dashboard',
    stat: '8',
    statLabel: 'Entities unified',
    statContext:
      'Cash, FX, and trade finance on one platform with real-time visibility.',
    services: ['Treasury Management', 'IBS Fintech'],
    industries: ['BFSI'],
    topics: ['bfsi', 'erp'],
    region: 'India',
    featured: false,
  },
];

export const FEATURED_CASE_STUDIES = CASE_STUDIES.filter((s) => s.featured);

export function getCaseStudyAnchor(slug: string) {
  return `#case-study-${slug}`;
}
