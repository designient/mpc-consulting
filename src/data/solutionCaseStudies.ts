import {
  CASE_STUDIES,
  type CaseStudy,
  getCaseStudyAnchor,
} from './caseStudies';
import {
  SOLUTION_AAAS,
  SOLUTION_APP_CLOUD_SECURITY,
  SOLUTION_APP_DEV,
  SOLUTION_BPC,
  SOLUTION_CLOUD_MANAGEMENT,
  SOLUTION_DB_MIGRATION,
  SOLUTION_DEVOPS,
  SOLUTION_EPM,
  SOLUTION_ERP,
  SOLUTION_HCAAS,
  SOLUTION_HCM,
  SOLUTION_IBS_FINTECH,
  SOLUTION_INFRA_MANAGED_OPS,
  SOLUTION_JAVA,
  SOLUTION_POWER_BI,
  SOLUTION_SALESFORCE,
  SOLUTION_SCM,
  SOLUTION_SERVICENOW,
  SOLUTION_TECH,
  SOLUTION_TREASURY_OPERATIONS,
  SOLUTION_UNIFIER,
  SOLUTION_ZERO_TRUST_STRATEGY,
} from './paths';

export type FeaturedCaseStudyConfig = {
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

export const DEFAULT_CASE_STUDY_SLUG = 'global-bfsi-consolidation';

export const SOLUTION_CASE_STUDY_MAP: Record<string, string> = {
  [SOLUTION_HCM]: 'global-bfsi-hcm',
  [SOLUTION_ERP]: 'manufacturing-ebs-fusion',
  [SOLUTION_JAVA]: 'cloud-app-modernization',
  [SOLUTION_DEVOPS]: 'devops-daily-deploys',
  [SOLUTION_BPC]: 'manufacturing-month-end',
  [SOLUTION_HCAAS]: 'manufacturing-ebs-fusion',
  [SOLUTION_AAAS]: 'global-bfsi-hcm',
  [SOLUTION_SCM]: 'manufacturing-month-end',
  [SOLUTION_EPM]: 'manufacturing-finance-playbook',
  [SOLUTION_UNIFIER]: 'manufacturing-month-end',
  [SOLUTION_TECH]: 'manufacturing-ebs-fusion',
  [SOLUTION_APP_DEV]: 'cloud-app-modernization',
  [SOLUTION_DB_MIGRATION]: 'cloud-database-migration',
  [SOLUTION_CLOUD_MANAGEMENT]: 'cloud-multi-cloud-ops',
  [SOLUTION_POWER_BI]: 'cx-analytics-power-bi',
  [SOLUTION_SALESFORCE]: 'cx-salesforce-rollout',
  [SOLUTION_SERVICENOW]: 'cx-servicenow-itsm',
  [SOLUTION_ZERO_TRUST_STRATEGY]: 'security-zero-trust-program',
  [SOLUTION_APP_CLOUD_SECURITY]: 'security-zero-trust-program',
  [SOLUTION_INFRA_MANAGED_OPS]: 'security-zero-trust-program',
  [SOLUTION_IBS_FINTECH]: 'treasury-ibs-fintech',
  [SOLUTION_TREASURY_OPERATIONS]: 'treasury-ibs-fintech',
};

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((study) => study.slug === slug);
}

export function caseStudyToFeaturedConfig(study: CaseStudy): FeaturedCaseStudyConfig {
  return {
    tag: study.tag,
    headline: study.headline,
    description: study.description,
    metadata: study.metadata,
    imageSrc: study.imageSrc,
    imageAlt: study.imageAlt,
    stat: study.stat,
    statLabel: study.statLabel,
    statContext: study.statContext,
  };
}

export function getCaseStudyCtaTo(slug: string): string {
  return `/resources/case-studies/${getCaseStudyAnchor(slug)}`;
}

export function resolveCaseStudySlug(
  canonicalPath: string,
  overrideSlug?: string,
): string {
  if (overrideSlug) return overrideSlug;
  return SOLUTION_CASE_STUDY_MAP[canonicalPath] ?? DEFAULT_CASE_STUDY_SLUG;
}

export function getCaseStudyForSolution(
  canonicalPath: string,
  overrideSlug?: string,
): { slug: string; config: FeaturedCaseStudyConfig; ctaTo: string } {
  const slug = resolveCaseStudySlug(canonicalPath, overrideSlug);
  const study =
    getCaseStudyBySlug(slug) ?? getCaseStudyBySlug(DEFAULT_CASE_STUDY_SLUG)!;
  return {
    slug: study.slug,
    config: caseStudyToFeaturedConfig(study),
    ctaTo: getCaseStudyCtaTo(study.slug),
  };
}

export function withCaseStudyToc(
  toc: { label: string; hash: string }[],
): { label: string; hash: string }[] {
  if (toc.some((item) => item.hash === 'case-study')) {
    return toc;
  }
  const faqIndex = toc.findIndex((item) => item.hash === 'faq');
  const caseStudyItem = { label: 'Case Study', hash: 'case-study' };
  if (faqIndex === -1) {
    return [...toc, caseStudyItem];
  }
  return [
    ...toc.slice(0, faqIndex),
    caseStudyItem,
    ...toc.slice(faqIndex),
  ];
}
