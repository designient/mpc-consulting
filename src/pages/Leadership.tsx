import React from 'react';
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
    image: '/mpc-leadership/Amit-garg.png',
    linkedin: 'https://www.linkedin.com/in/amitgargi/',
  },
  {
    name: 'Kishore Nerella',
    title: 'Co-Founder & COO',
    image: '/mpc-leadership/Kishore-Nerella.png',
    linkedin: 'https://www.linkedin.com/in/kishorenerella/',
  },
  {
    name: 'Siva Prakya',
    title: 'Director & CTO',
    image: '/mpc-leadership/Siva-Prakya.png',
    linkedin: 'https://www.linkedin.com/in/siva-prakya-99b4361b1/',
  },
  {
    name: 'Abhay Singh',
    title: 'Chief Business Office',
    image: '/mpc-leadership/Abhay-Singh.png',
    linkedin: 'https://www.linkedin.com/in/abhay-singh-05982910/',
  },
  {
    name: 'Mukund Moorthy',
    title: 'Head of Strategy',
    image: '/mpc-leadership/Mukund-Moorthy.png',
    linkedin: 'https://www.linkedin.com/in/mukund-moorthy-82293972/',
  },
  {
    name: 'Gurbir Soi',
    title: 'Head of Strategic Accounts',
    image: '/mpc-leadership/Gurbir-Soi.png',
    linkedin: 'https://www.linkedin.com/in/gurbir-soi-b1247026/',
  },
  {
    name: 'Pushyamy Arapirala',
    title: 'Head of HCM',
    image: '/mpc-leadership/Pushyamy-Arapirala.png',
    linkedin: 'https://www.linkedin.com/in/pushyamy-arapirala-577a8043/',
  },
  {
    name: 'Vikas Basantani',
    title: 'P&L Leader - ANZ',
    image: '/mpc-leadership/Vikas-Basantani.png',
    linkedin: 'https://www.linkedin.com/in/vikas-basantani-7432365/',
  },
  {
    name: 'Vikas Chaudhary',
    title: 'Head of ERP',
    image: '/mpc-leadership/Vikas-Chaudhary.png',
    linkedin: 'https://www.linkedin.com/in/vikas-chaudhary-6a034126/',
  },
  {
    name: 'Aditya Tiruveedhula',
    title: 'Head of Tech',
    image: '/mpc-leadership/Aditya-Tiruveedhula.png',
    linkedin: 'https://www.linkedin.com/in/tadityachandra/',
  },
  {
    name: 'Arup Das',
    title: 'Program Director',
    image: '/mpc-leadership/Arup-Das.png',
    linkedin: 'https://www.linkedin.com/in/arup-das-9a84b884/',
  },
];

export function Leadership() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="MPC Leadership | Oracle Cloud & AI Transformation Leaders"
        description="Meet MPC's leadership team, 11 leaders and 700+ Oracle Cloud experts united across India, UAE, Singapore, Australia, and the UK."
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

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
              {MANAGEMENT_TEAM.map((member) => (
                <article
                  key={member.name}
                  className="flex flex-col items-start rounded-card border border-cta bg-white p-4 md:p-5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[4/5] object-cover rounded-card"
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

                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 text-cta hover:text-stat transition-colors"
                    aria-label={`${member.name} on LinkedIn`}>
                    <Linkedin className="w-4 h-4" strokeWidth={1.75} />
                  </a>
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
