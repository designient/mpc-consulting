import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Mail } from 'lucide-react';
import { Logo } from '../ui/Logo';
import {
  SERVICE_AI_COE,
  SERVICE_CLOUD_DT,
  SERVICE_CX_ANALYTICS,
  SERVICE_ORACLE,
  SERVICE_SECURITY,
  SERVICE_TREASURY,
} from '../../data/paths';

const SERVICES_LINKS = [
  { label: 'Oracle (Fusion & EBS)', to: SERVICE_ORACLE },
  { label: 'AI CoE', to: SERVICE_AI_COE },
  { label: 'Cloud & Digital Transformation', to: SERVICE_CLOUD_DT },
  { label: 'CX & Analytics', to: SERVICE_CX_ANALYTICS },
  { label: 'Security & Zero Trust', to: SERVICE_SECURITY },
  { label: 'Treasury Management', to: SERVICE_TREASURY },
];

const COMPANY_LINKS = [
  { label: 'About Us', to: '/about/' },
  { label: 'Leadership Team', to: '/leadership/' },
  { label: 'Values', to: '/values/' },
  { label: 'Careers', to: '/careers/' },
  { label: 'Contact Us', to: '/contact/' }
];

const columnHeading =
  'type-caption uppercase tracking-[0.12em] text-white mb-5 block';
const linkCls =
  'font-body text-[15px] text-white hover:text-white/90 transition-colors block py-1';

function FooterWaveBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      <svg
        className="absolute bottom-0 left-0 w-full h-[55%] min-h-[200px]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill="white"
          fillOpacity="0.06"
          d="M0,192L48,197.3C96,203,192,213,288,218.7C384,224,480,224,576,208C672,192,768,160,864,154.7C960,149,1056,171,1152,181.3C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
        <path
          fill="white"
          fillOpacity="0.1"
          d="M0,224L60,229.3C120,235,240,245,360,250.7C480,256,600,256,720,240C840,224,960,192,1080,186.7C1200,181,1320,203,1380,213.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>
      <svg
        className="absolute top-0 left-0 w-full h-[40%] min-h-[120px]"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill="white"
          fillOpacity="0.05"
          d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        />
        <path
          fill="white"
          fillOpacity="0.08"
          d="M0,96L48,90.7C96,85,192,75,288,74.7C384,75,480,85,576,90.7C672,96,768,96,864,85.3C960,75,1056,53,1152,48C1248,43,1344,53,1392,58.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </svg>
    </div>
  );
}

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
    <footer className="relative w-full overflow-hidden bg-cta text-text-inverse">
      <FooterWaveBackground />

      <div className="relative z-10">
        {/* Newsletter band */}
        <div id="newsletter" className="border-b border-white/15">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 py-10 md:py-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="max-w-[480px]">
                <p className={columnHeading}>Newsletter</p>
                <h3 className="type-h3 text-[22px] md:text-[26px] leading-tight tracking-tight mb-2 text-white">
                  Stay Ahead of What’s Next
                </h3>
                <p className="font-body text-[15px] leading-[1.6] text-white">
                  Monthly insights on AI, cloud, SaaS, automation, digital transformation, and enterprise technology, delivered straight to your inbox.
                </p>
              </div>
              {submitted ? (
                <p className="font-body text-[15px] text-white font-medium">
                  Thank you. You&apos;re subscribed.
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
                <Logo tone="white" height={44} />
              </div>
              <p className="font-body text-[15px] leading-[1.6] text-white mb-6">
                Your global partner for digital transformation across India, UAE, Singapore, Australia, and the UK.
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
                href="mailto:info@mpccloudconsulting.com"
                className={`${linkCls} flex items-center gap-2 mb-3`}>
                <Mail className="w-4 h-4 shrink-0" />
                info@mpccloudconsulting.com
              </a>
              <p className="font-body text-[14px] text-white leading-[1.7] mb-6">
                Gurugram · Hyderabad · Bengaluru
                <br />
                Dubai · Abu Dhabi · Melbourne · London
              </p>
              <div className="flex gap-3 text-white">
                <a
                  href="https://www.linkedin.com/company/mpccloudconsulting"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full border border-white/30 text-white hover:border-white hover:bg-white/10 flex items-center justify-center transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/MPCCloudConsulting"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full border border-white/30 text-white hover:border-white hover:bg-white/10 flex items-center justify-center transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/15">
            <p className="font-body text-[14px] text-white text-center md:text-left">
              © 2026 MPC Cloud Consulting Private Limited. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
