import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, FileText, Lightbulb } from 'lucide-react';
import { StickyNav } from '../components/layout/StickyNav';
import { FooterDark } from '../components/sections/FooterDark';
import { ServiceHero } from '../components/sections/heroes/ServiceHero';
import { ContentGrid3Col } from '../components/sections/ContentGrid3Col';
import { FilterBar } from '../components/sections/FilterBar';
import { ResourceCard } from '../components/sections/ResourceCard';
import { CTABand } from '../components/sections/CTABand';
import { Heading } from '../components/ui/Heading';
import { SEO, ORGANIZATION_SCHEMA, WEB_SITE_SCHEMA } from '../components/seo/SEO';
import { buildBreadcrumbSchema } from '../components/sections/Breadcrumb';

const BREADCRUMB = [{ label: 'Resources' }];
const FORMAT_ITEMS = [
{
  imageSrc:
  'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80',
  title: 'Thought Leadership',
  description:
  'Strategic perspectives on Oracle Cloud, AI, and enterprise transformation — from practitioners who build these systems every day.',
  ctaText: 'Read thought leadership'
},
{
  imageSrc:
  'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=900&q=80',
  title: 'Case Studies',
  description:
  'Real Oracle Cloud transformation stories — outcomes, metrics, and lessons from 87+ engagements across five regions.',
  ctaText: 'Explore case studies',
  href: '/resources/case-studies/'
},
{
  imageSrc:
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80',
  title: 'Whitepapers & Guides',
  description:
  'In-depth Oracle Cloud and AI transformation guides from MPC consultants — practical, opinionated, and free to download.',
  ctaText: 'Browse whitepapers'
}];

const FILTERS = [
{
  id: 'all',
  label: 'All'
},
{
  id: 'hcm',
  label: 'Oracle HCM'
},
{
  id: 'erp',
  label: 'Oracle ERP'
},
{
  id: 'ai',
  label: 'AI'
},
{
  id: 'devops',
  label: 'DevOps'
},
{
  id: 'industry',
  label: 'Industry Insights'
}];

type Resource = {
  id: string;
  image: string;
  category: string;
  topic: string; // for filter matching
  title: string;
  description: string;
  date: string;
  readTime: string;
  href: string;
};
const ALL_RESOURCES: Resource[] = [
{
  id: '1',
  image:
  'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
  category: 'Oracle HCM',
  topic: 'hcm',
  title: 'Five HCM rollout mistakes we keep seeing — and how to avoid them',
  description:
  'A pattern-by-pattern breakdown of where Oracle HCM Cloud rollouts go wrong, drawn from 40+ engagements.',
  date: 'May 12, 2026',
  readTime: '7 min read',
  href: '/resources/blog/'
},
{
  id: '2',
  image:
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
  category: 'Oracle ERP',
  topic: 'erp',
  title: 'The CFO’s guide to a 9-month Oracle Cloud ERP rollout',
  description:
  'Sequencing, change control, and the four decisions every CFO needs to make before kick-off.',
  date: 'May 4, 2026',
  readTime: '11 min read',
  href: '/resources/whitepapers/'
},
{
  id: '3',
  image:
  'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80',
  category: 'AI',
  topic: 'ai',
  title: 'Where AI agents fit inside Oracle Cloud — without breaking it',
  description:
  'A grounded look at the integration patterns that actually work in production Oracle environments.',
  date: 'April 22, 2026',
  readTime: '9 min read',
  href: '/resources/thought-leadership/'
},
{
  id: '4',
  image:
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
  category: 'DevOps',
  topic: 'devops',
  title:
  'From quarterly releases to daily deploys: an Oracle Cloud DevOps story',
  description:
  'How one financial services client cut their release cycle from 90 days to 24 hours.',
  date: 'April 15, 2026',
  readTime: '8 min read',
  href: '/resources/case-studies/'
},
{
  id: '5',
  image:
  'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=80',
  category: 'Industry · Manufacturing',
  topic: 'industry',
  title: 'Closing the books in 7 days: a manufacturing finance playbook',
  description:
  'What it took to compress month-end from 11 days to under 7 across a 14-plant Oracle Cloud rollout.',
  date: 'April 8, 2026',
  readTime: '10 min read',
  href: '/resources/case-studies/'
},
{
  id: '6',
  image:
  'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=1200&q=80',
  category: 'Oracle HCM',
  topic: 'hcm',
  title: 'Oracle HCM payroll readiness: the checklist we use every time',
  description:
  'The pre-go-live payroll checklist that has kept our HCM rollouts on schedule for six straight years.',
  date: 'March 28, 2026',
  readTime: '6 min read',
  href: '/resources/whitepapers/'
},
{
  id: '7',
  image:
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
  category: 'AI',
  topic: 'ai',
  title: 'AI in HR: separating signal from noise for enterprise leaders',
  description:
  'A practical framework for deciding where AI belongs in your HR stack — and where it doesn’t.',
  date: 'March 19, 2026',
  readTime: '8 min read',
  href: '/resources/thought-leadership/'
},
{
  id: '8',
  image:
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
  category: 'Industry · Professional Services',
  topic: 'industry',
  title: 'Margin visibility for professional services on Oracle Cloud',
  description:
  'How to put project profitability, utilisation, and HR on one source of truth — without spreadsheet sprawl.',
  date: 'March 11, 2026',
  readTime: '7 min read',
  href: '/resources/blog/'
},
{
  id: '9',
  image:
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
  category: 'DevOps',
  topic: 'devops',
  title: 'Kubernetes for Oracle Cloud workloads: where it pays off',
  description:
  'When containerisation makes sense alongside Oracle Cloud — and when it absolutely does not.',
  date: 'March 3, 2026',
  readTime: '12 min read',
  href: '/resources/whitepapers/'
}];

const FEATURED = ALL_RESOURCES.slice(0, 4);
export function Resources() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchValue, setSearchValue] = useState('');
  const filtered = useMemo(() => {
    return ALL_RESOURCES.filter((r) => {
      const matchesFilter = activeFilter === 'all' || r.topic === activeFilter;
      const q = searchValue.trim().toLowerCase();
      const matchesSearch =
      !q ||
      r.title.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q) ||
      r.category.toLowerCase().includes(q);
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchValue]);
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Resources & Insights | MPC Cloud Consulting"
        description="Practical guides, case studies, whitepapers, and thought leadership from MPC's Oracle Cloud and AI experts."
        canonicalPath="/resources/"
        schema={[
          ORGANIZATION_SCHEMA,
          WEB_SITE_SCHEMA,
          buildBreadcrumbSchema(BREADCRUMB)
        ]}
      />
      
      <StickyNav />

      <ServiceHero
        eyebrow="Resources"
        headline="Insights from people who build Oracle Cloud every day"
        subhead="Practical guides, case studies, whitepapers, and thought leadership from MPC consultants — written for leaders who have to make the decisions, not just attend the workshops."
        primaryCtaText="Subscribe to our digest"
        primaryCtaTo="#newsletter"
        secondaryCtaText="Talk to a consultant"
        secondaryCtaTo="/contact/"
        imageSrc="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?auto=format&fit=crop&w=1400&q=80"
        imageAlt="MPC Resources"
        breadcrumb={[
        {
          label: 'Resources'
        }]
        } />
      

      <ContentGrid3Col sectionTitle="Browse by format" items={FORMAT_ITEMS} />

      {/* Featured strip */}
      <section className="w-full bg-white px-4 py-16 md:px-10 md:py-20 lg:px-[60px]">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <p className="font-body text-[14px] uppercase tracking-[1.2px] text-divider mb-3 font-medium">
                Featured this month
              </p>
              <Heading level={2}>The pieces our team is recommending</Heading>
            </div>
            <Link
              to="/resources/blog/"
              className="inline-flex items-center gap-2 font-body text-[15px] font-medium text-divider hover:text-primary transition-colors group">
              
              See all articles
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
            <div className="grid grid-flow-col auto-cols-[85%] md:auto-cols-[45%] lg:auto-cols-[30%] gap-5 md:gap-6">
              {FEATURED.map((r) =>
              <ResourceCard
                key={r.id}
                image={r.image}
                category={r.category}
                title={r.title}
                description={r.description}
                date={r.date}
                readTime={r.readTime}
                href={r.href} />

              )}
            </div>
          </div>
        </div>
      </section>

      {/* Library + Filters */}
      <section className="w-full bg-bg-light pt-12 md:pt-16 pb-16 md:pb-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-[60px] mb-8">
          <Heading level={2}>The full library</Heading>
          <p className="font-body text-[17px] leading-[1.6] mt-4 max-w-[700px] text-text-primary opacity-80">
            Filter by topic or search by keyword. We add a new piece every other
            week.
          </p>
        </div>
        <FilterBar
          filters={FILTERS}
          activeId={activeFilter}
          onChange={setActiveFilter}
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          searchPlaceholder="Search resources…" />
        
        <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-[60px] mt-10">
          {filtered.length === 0 ?
          <div className="bg-white rounded-card py-16 text-center">
              <p className="font-heading text-[20px] text-text-primary mb-2">
                No matches yet
              </p>
              <p className="font-body text-[15px] text-text-primary opacity-70">
                Try a different filter or search term.
              </p>
            </div> :

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {filtered.map((r) =>
            <ResourceCard
              key={r.id}
              image={r.image}
              category={r.category}
              title={r.title}
              description={r.description}
              date={r.date}
              readTime={r.readTime}
              href={r.href} />

            )}
            </div>
          }
        </div>
      </section>

      <CTABand
        title="Need answers faster? Talk to a consultant."
        body="Skip the search. Tell us what you’re trying to solve and we’ll point you at the right people and the right reading in 24 hours."
        ctaText="Talk to MPC"
        ctaTo="/contact/"
        secondaryCtaText="See all services"
        secondaryCtaTo="/services/" />
      

      <FooterDark />
    </div>);

}