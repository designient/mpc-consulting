import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Youtube, Mail } from 'lucide-react';
import { Logo } from '../ui/Logo';

const SERVICES_LINKS = [
  { label: 'HCM', to: '/services/hcm/' },
  { label: 'ERP (Oracle Cloud)', to: '/services/erp-oracle-cloud/' },
  { label: 'Java Technologies', to: '/services/java-technologies/' },
  { label: 'DevOps Services', to: '/services/devops/' },
  { label: 'Business Process Consulting', to: '/services/business-process-consulting/' },
  { label: 'HCaaS', to: '/services/health-check-as-a-service/' },
  { label: 'AaaS', to: '/services/adoption-as-a-service/' },
  { label: 'MPC Tech Hub', to: '/services/mpc-tech-hub/' }
];

const COMPANY_LINKS = [
  { label: 'About Us', to: '/about/' },
  { label: 'Leadership Team', to: '/team/' },
  { label: 'Partners', to: '/partners/' },
  { label: 'Careers', to: '/careers/' },
  { label: 'News', to: '/news/' },
  { label: 'Contact Us', to: '/contact/' }
];

const SITEMAP_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services/' },
  { label: 'Industries', to: '/industries/' },
  { label: 'Resources', to: '/resources/' },
  { label: 'About', to: '/about/' },
  { label: 'Contact', to: '/contact/' }
];

const columnHeading =
  'font-body text-[13px] uppercase tracking-[0.12em] opacity-55 mb-5';
const linkCls =
  'font-body text-[15px] opacity-80 hover:opacity-100 hover:text-stat transition-colors block py-1';

export function FooterDark() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <footer className="w-full bg-primary text-text-inverse">
      <div className="w-full h-[2px] bg-divider-bright" />

      {/* Newsletter band */}
      <div className="border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 py-10 md:py-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-[480px]">
              <p className={columnHeading}>Newsletter</p>
              <h3 className="font-heading font-medium text-[22px] md:text-[26px] leading-tight tracking-tight mb-2">
                Stay ahead of Oracle Cloud
              </h3>
              <p className="font-body text-[15px] leading-[1.6] opacity-80">
                Monthly insights on Oracle Cloud, AI, and enterprise technology — direct to your inbox.
              </p>
            </div>
            {submitted ? (
              <p className="font-body text-[15px] text-stat font-medium">
                Thank you — you&apos;re subscribed.
              </p>
            ) : (
              <form
                onSubmit={handleNewsletter}
                className="flex flex-col sm:flex-row gap-3 w-full lg:max-w-[440px]">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your work email"
                  aria-label="Email address"
                  className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 font-body text-[14px] text-white placeholder:text-white/50 focus:outline-none focus:border-stat transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-stat text-white font-body text-[14px] font-medium hover:opacity-90 transition-opacity whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          <div className="flex flex-col">
            <div className="mb-6">
              <Logo tone="white" height={36} />
            </div>
            <p className="font-body text-[15px] leading-[1.6] opacity-80 mb-6">
              Your Oracle Cloud and AI transformation partner — across India, UAE, Australia, and the UK.
            </p>
            <p className="font-body text-[12px] uppercase tracking-[0.8px] opacity-55">
              © {new Date().getFullYear()} MPC Cloud Consulting. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col">
            <h4 className={columnHeading}>Services</h4>
            <ul>
              {SERVICES_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className={columnHeading}>Company</h4>
            <ul>
              {COMPANY_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className={columnHeading}>Connect</h4>
            <a
              href="mailto:hello@mpccloudconsulting.com"
              className={`${linkCls} flex items-center gap-2 mb-3`}>
              <Mail className="w-4 h-4 shrink-0" />
              hello@mpccloudconsulting.com
            </a>
            <p className="font-body text-[14px] opacity-70 leading-[1.7] mb-6">
              Gurugram · Hyderabad · Bengaluru
              <br />
              Dubai · Abu Dhabi · Melbourne · London
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/mpccloudconsulting"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-white/20 hover:border-stat hover:text-stat flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/mpccloudconsult"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full border border-white/20 hover:border-stat hover:text-stat flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full border border-white/20 hover:border-stat hover:text-stat flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* HTML sitemap */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className={`${columnHeading} mb-4`}>Site map</p>
          <nav
            aria-label="Footer site map"
            className="flex flex-wrap gap-x-6 gap-y-2 font-body text-[13px] opacity-70">
            {SITEMAP_LINKS.map((l) => (
              <Link key={l.to} to={l.to} className="hover:text-stat transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Legal */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="font-body text-[12px] leading-[1.7] opacity-50 max-w-[900px]">
            MPC Cloud Consulting is incorporated in India (Reg. No. placeholder). Licensed to deliver Oracle Cloud consulting services across India, UAE, Australia, and the United Kingdom. Information on this site is for general guidance and does not constitute legal or financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
