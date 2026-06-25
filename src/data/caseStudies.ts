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
];

export const FEATURED_CASE_STUDIES = CASE_STUDIES.filter((s) => s.featured);

export function getCaseStudyAnchor(slug: string) {
  return `#case-study-${slug}`;
}
