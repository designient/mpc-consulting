import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import { StickyNav } from '../components/layout/StickyNav';
import { FooterDark } from '../components/sections/FooterDark';
import { SEO, ORGANIZATION_SCHEMA } from '../components/seo/SEO';
import {
  Breadcrumb,
  buildBreadcrumbSchema,
} from '../components/sections/Breadcrumb';

const BREADCRUMB = [{ label: 'Leadership' }];

const HERO_BG =
  'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2400&q=80';

const MANAGEMENT_TEAM = [
  {
    name: 'Amit Garg',
    title: 'Founder & CEO',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop',
    linkedin: 'https://www.linkedin.com/company/mpccloudconsulting',
  },
  {
    name: 'Kishore Nerella',
    title: 'Co-Founder & COO',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop',
    linkedin: 'https://www.linkedin.com/company/mpccloudconsulting',
  },
  {
    name: 'Siva Prakya',
    title: 'Director & CTO',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
    linkedin: 'https://www.linkedin.com/company/mpccloudconsulting',
  },
  {
    name: 'Abhay Singh',
    title: 'Chief Business Office',
    image:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop',
    linkedin: 'https://www.linkedin.com/company/mpccloudconsulting',
  },
  {
    name: 'Mukund Moorthy',
    title: 'Head of Strategy',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    linkedin: 'https://www.linkedin.com/company/mpccloudconsulting',
  },
  {
    name: 'Gurbir Soi',
    title: 'Head of Strategic Accounts',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
    linkedin: 'https://www.linkedin.com/company/mpccloudconsulting',
  },
  {
    name: 'Pushyamy Arapirala',
    title: 'Head of HCM',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
    linkedin: 'https://www.linkedin.com/company/mpccloudconsulting',
  },
  {
    name: 'Vikas Basantani',
    title: 'P&L Leader - ANZ',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&auto=format&fit=crop',
    linkedin: 'https://www.linkedin.com/company/mpccloudconsulting',
  },
  {
    name: 'Vikas Chaudhary',
    title: 'Head of ERP',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop',
    linkedin: 'https://www.linkedin.com/company/mpccloudconsulting',
  },
  {
    name: 'Aditya Tiruveedhula',
    title: 'Head of Tech',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop',
    linkedin: 'https://www.linkedin.com/company/mpccloudconsulting',
  },
  {
    name: 'Arup Das',
    title: 'Program Director',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    linkedin: 'https://www.linkedin.com/company/mpccloudconsulting',
  },
];

export function Leadership() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="MPC Leadership | Oracle Cloud & AI Transformation Leaders"
        description="Meet MPC's leadership team — 11 leaders and 700+ Oracle Cloud experts united across India, UAE, Singapore, Australia, and the UK."
        canonicalPath="/leadership/"
        schema={[ORGANIZATION_SCHEMA, buildBreadcrumbSchema(BREADCRUMB)]}
      />

      <StickyNav />
      <main className="flex-grow w-full">
        {/* Hero */}
        <section className="relative w-full min-h-[min(58svh,600px)] max-h-[600px] overflow-hidden flex items-center">
          <img
            src={HERO_BG}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover"
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
                Leadership
              </span>

              <h1 className="type-h1 text-text-inverse">MPC Leadership</h1>

              <p className="font-body text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5] text-text-inverse/90 mt-4 md:mt-5 max-w-[640px] lg:max-w-[720px]">
                11 leaders. 700+ Oracle Cloud experts. One unified team across
                India, UAE, Singapore, Australia, and the UK.
              </p>
            </div>
          </div>
        </section>

        {/* Management Team */}
        <section className="w-full bg-white px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="max-w-[1400px] mx-auto">
            <p className="section-eyebrow mb-8 md:mb-10">Management Team</p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-10 md:gap-x-6 md:gap-y-12">
              {MANAGEMENT_TEAM.map((member) => (
                <article key={member.name} className="flex flex-col items-start">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[4/5] object-cover"
                  />

                  <img
                    src="/mpc-main-logo.svg"
                    alt=""
                    aria-hidden
                    className="h-5 md:h-6 w-auto mt-4 object-contain object-left"
                  />

                  <h3 className="font-heading font-semibold text-[16px] md:text-[17px] text-text-primary mt-3 leading-snug">
                    {member.name}
                  </h3>
                  <p className="font-body text-[13px] md:text-[14px] leading-[1.5] text-text-primary/75 mt-1">
                    {member.title}
                  </p>

                  <div className="flex items-center gap-4 mt-3">
                    <Link
                      to="/contact/"
                      className="font-body text-[13px] font-semibold text-stat hover:text-cta transition-colors">
                      Bio
                    </Link>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cta hover:text-stat transition-colors"
                      aria-label={`${member.name} on LinkedIn`}>
                      <Linkedin className="w-4 h-4" strokeWidth={1.75} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterDark />
    </div>
  );
}
