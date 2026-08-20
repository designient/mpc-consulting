import React from 'react';
import { StickyNav } from '../components/layout/StickyNav';
import { FooterDark } from '../components/sections/FooterDark';
import { SEO, ORGANIZATION_SCHEMA } from '../components/seo/SEO';
import {
  buildBreadcrumbSchema,
} from '../components/sections/Breadcrumb';

const BREADCRUMB = [{ label: 'Leadership' }];

const HERO_BG = '/leadership-hero.png';

const MANAGEMENT_TEAM = [
  {
    name: 'Amit Garg',
    title: 'Founder & CEO',
    image: '/mpc-leadership/Amit.png',
    linkedin: 'https://www.linkedin.com/in/amitgargi/',
  },
  {
    name: 'Kishore Nerella',
    title: 'Co-Founder & COO',
    image: '/mpc-leadership/Kishore.png',
    linkedin: 'https://www.linkedin.com/in/kishorenerella/',
  },
  {
    name: 'Siva Prakya',
    title: 'Director & CTO',
    image: '/mpc-leadership/siva-prakya.png',
    linkedin: 'https://www.linkedin.com/in/siva-prakya-99b4361b1/',
  },
  {
    name: 'Abhay Singh',
    title: 'Chief Business Office',
    image: '/mpc-leadership/abhay-singh.png',
    linkedin: 'https://www.linkedin.com/in/abhay-singh-05982910/',
  },
  {
    name: 'Mukund Moorthy',
    title: 'Head of Strategy',
    image: '/mpc-leadership/mukund-moorthy.png',
    linkedin: 'https://www.linkedin.com/in/mukund-moorthy-82293972/',
  },
  {
    name: 'Gurbir Soi',
    title: 'Head of Strategic Accounts',
    image: '/mpc-leadership/gurbir-soi.png',
    linkedin: 'https://www.linkedin.com/in/gurbir-soi-b1247026/',
  },
  {
    name: 'Pushyamy Arapirala',
    title: 'Head of HCM',
    image: '/mpc-leadership/pushyamy-arapirala.png',
    linkedin: 'https://www.linkedin.com/in/pushyamy-arapirala-577a8043/',
  },
  {
    name: 'Vikas Basantani',
    title: 'P&L Leader - ANZ',
    image: '/mpc-leadership/vikas-basantani.png',
    linkedin: 'https://www.linkedin.com/in/vikas-basantani-7432365/',
  },
  {
    name: 'Vikas Chaudhary',
    title: 'Head of ERP',
    image: '/mpc-leadership/vikas-chaudhary.png',
    linkedin: 'https://www.linkedin.com/in/vikas-chaudhary-6a034126/',
  },
  {
    name: 'Aditya Tiruveedhula',
    title: 'Head of Tech',
    image: '/mpc-leadership/aditya-tiruveedhula.png',
    linkedin: 'https://www.linkedin.com/in/tadityachandra/',
  },
  {
    name: 'Arup Das',
    title: 'Program Director',
    image: '/mpc-leadership/arup-das.png',
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
            <div className="w-full max-w-[1100px] text-center lg:text-left flex flex-col items-center lg:items-start mx-auto lg:mx-0">
              <h1 className="type-h1 text-text-inverse">MPC Leadership</h1>

              <p className="font-body text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5] text-text-inverse/90 mt-4 md:mt-5 max-w-[640px] lg:max-w-[720px]">
                11 leaders. 700+ Oracle Cloud experts. One unified team across
                India, UAE, Singapore, Australia, and the UK.
              </p>
            </div>
          </div>
        </section>

        {/* Management Team */}
        <section className="w-full bg-white py-16 md:py-24 px-4 md:px-10 lg:px-[60px]">
          <div className="max-w-[1280px] mx-auto">
            <p className="section-eyebrow mb-8 md:mb-10">Management Team</p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 justify-items-stretch">
              {MANAGEMENT_TEAM.map((member) => (
                <article key={member.name} className="group relative w-full min-w-0 pb-14 md:pb-16">
                  <div className="relative w-full">
                    <div className="overflow-hidden rounded-[20px] shadow-medium w-full">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full aspect-[4/5] object-cover object-top origin-top transition-transform duration-500 ease-out group-hover:scale-110"
                      />
                    </div>

                    <div className="absolute left-3 right-3 top-full -translate-y-[30%] z-10 min-w-0 flex items-center gap-2.5 md:gap-3 rounded-full bg-black shadow-medium pl-1.5 pr-3 py-1.5 md:pl-2 md:pr-4 md:py-2.5">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 w-9 h-9 md:w-11 md:h-11 rounded-full bg-[#0A66C2] text-white hover:opacity-90 flex items-center justify-center transition-opacity"
                        aria-label={`${member.name} on LinkedIn`}>
                        <svg
                          viewBox="0 0 24 24"
                          className="w-4 h-4 md:w-5 md:h-5"
                          fill="currentColor"
                          aria-hidden>
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                      <div className="min-w-0 flex-1 py-0.5">
                        <h3 className="font-heading font-semibold text-[13px] md:text-[15px] text-white leading-tight truncate">
                          {member.name}
                        </h3>
                        <p className="font-body text-[11px] md:text-[12px] leading-snug text-white/90 mt-0.5 truncate">
                          {member.title}
                        </p>
                      </div>
                    </div>
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
