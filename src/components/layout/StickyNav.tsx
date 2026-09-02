import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Logo } from '../ui/Logo';

const SERVICES = [
  { label: 'Oracle (Fusion & EBS)', to: '/services/oracle-fusion-ebs/' },
  { label: 'AI CoE', to: '/services/ai-coe/' },
  { label: 'Cloud & Digital Transformation', to: '/services/cloud-digital-transformation/' },
  { label: 'CX & Analytics', to: '/services/cx-analytics/' },
  { label: 'Security & Zero Trust', to: '/services/security-zero-trust/' },
  { label: 'Treasury Management', to: '/services/treasury-management/' },
];

const RESOURCES = [
  { label: 'Resources Hub', to: '/resources/' },
  { label: 'Case Studies', to: '/resources/case-studies/' },
  { label: 'Events', to: '/resources/events/' },
  { label: 'Blog', to: '/resources/blog/' },
];

const COMPANY = [
  { label: 'About', to: '/about/' },
  { label: 'Leadership', to: '/leadership/' },
  { label: 'Values', to: '/values/' },
  { label: 'Careers', to: '/careers/' },
];

function navLinkClass(isActive: boolean) {
  const base =
    'relative py-1 font-body text-[15px] font-medium tracking-[-0.01em] transition-colors';
  return isActive
    ? `${base} text-primary after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-stat after:rounded-full`
    : `${base} text-text-primary/75 hover:text-primary`;
}

export function StickyNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bannerDismissed, setBannerDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 w-full">
      {!bannerDismissed && (
        <div className="w-full bg-bg-minimal border-b border-black/5">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 h-9 flex items-center justify-between gap-4">
            <p className="font-body text-[12px] md:text-[13px] text-text-primary/70 truncate">
              Oracle Cloud &amp; AI partner · India · UAE · Singapore · UK · Australia
            </p>
            <button
              type="button"
              onClick={() => setBannerDismissed(true)}
              className="shrink-0 text-text-primary/50 hover:text-primary transition-colors"
              aria-label="Dismiss announcement">
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      <nav
        className={`w-full bg-white/95 backdrop-blur-md border-b transition-shadow ${
          scrolled ? 'border-black/5 shadow-subtle' : 'border-black/5'
        }`}
        aria-label="Main navigation">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 h-[80px] flex items-center justify-between">
          <Link
            to="/"
            aria-label="MPC Cloud Consulting Home"
            className="flex items-center shrink-0">
            <Logo height={44} />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <NavLink to="/" end className={({ isActive }) => navLinkClass(isActive)}>
              Home
            </NavLink>

            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-1.5 py-1 font-body text-[15px] font-medium tracking-[-0.01em] text-text-primary/75 hover:text-primary transition-colors"
                aria-haspopup="true">
                Services
                <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all pointer-events-none group-hover:pointer-events-auto">
                <div className="bg-white rounded-2xl shadow-medium border border-black/8 p-4 w-[480px]">
                  <p className="font-body text-[14px] uppercase tracking-[0.12em] text-text-primary/45 px-2 mb-2">
                    Services
                  </p>
                  <div className="grid grid-cols-2 gap-0.5">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.to}
                        to={s.to}
                        className="px-3 py-2.5 rounded-xl hover:bg-bg-minimal font-body text-[13px] text-text-primary hover:text-stat transition-colors">
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <NavLink to="/industries/" className={({ isActive }) => navLinkClass(isActive)}>
              Industries
            </NavLink>

            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-1.5 py-1 font-body text-[15px] font-medium tracking-[-0.01em] text-text-primary/75 hover:text-primary transition-colors"
                aria-haspopup="true">
                Insights
                <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all pointer-events-none group-hover:pointer-events-auto">
                <div className="bg-white rounded-2xl shadow-medium border border-black/8 p-4 w-[240px]">
                  <p className="font-body text-[14px] uppercase tracking-[0.12em] text-text-primary/45 px-2 mb-2">
                    Insights
                  </p>
                  {RESOURCES.map((r) => (
                    <Link
                      key={r.to}
                      to={r.to}
                      className="block px-3 py-2.5 rounded-xl hover:bg-bg-minimal font-body text-[13px] text-text-primary hover:text-stat transition-colors">
                      {r.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-1.5 py-1 font-body text-[15px] font-medium tracking-[-0.01em] text-text-primary/75 hover:text-primary transition-colors"
                aria-haspopup="true">
                Company
                <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all pointer-events-none group-hover:pointer-events-auto">
                <div className="bg-white rounded-2xl shadow-medium border border-black/8 p-4 w-[240px]">
                  <p className="font-body text-[14px] uppercase tracking-[0.12em] text-text-primary/45 px-2 mb-2">
                    Company
                  </p>
                  {COMPANY.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block px-3 py-2.5 rounded-xl hover:bg-bg-minimal font-body text-[13px] text-text-primary hover:text-stat transition-colors">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center shrink-0">
            <Link
              to="/contact/"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-cta text-white rounded-full font-body text-[13px] font-medium hover:opacity-90 transition-opacity shadow-subtle">
              Contact
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-text-primary rounded-lg hover:bg-bg-minimal transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div
            className="lg:hidden border-t border-black/5 bg-white max-h-[calc(100vh-80px)] overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation">
            <div className="px-4 py-5 flex flex-col gap-1 font-body text-[15px] max-w-[1400px] mx-auto">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 rounded-xl hover:bg-bg-minimal font-medium">
                Home
              </Link>
              <p className="px-3 pt-4 pb-1 text-[14px] uppercase tracking-[0.12em] text-text-primary/45">
                Services
              </p>
              {SERVICES.map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 rounded-xl hover:bg-bg-minimal text-text-primary/80">
                  {s.label}
                </Link>
              ))}
              <Link
                to="/industries/"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 rounded-xl hover:bg-bg-minimal font-medium mt-2">
                Industries
              </Link>
              <p className="px-3 pt-4 pb-1 text-[14px] uppercase tracking-[0.12em] text-text-primary/45">
                Insights
              </p>
              {RESOURCES.map((r) => (
                <Link
                  key={r.to}
                  to={r.to}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 rounded-xl hover:bg-bg-minimal text-text-primary/80">
                  {r.label}
                </Link>
              ))}
              <p className="px-3 pt-4 pb-1 text-[14px] uppercase tracking-[0.12em] text-text-primary/45">
                Company
              </p>
              {COMPANY.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 rounded-xl hover:bg-bg-minimal text-text-primary/80">
                  {item.label}
                </Link>
              ))}
              <div className="mt-5 px-3">
                <Link
                  to="/contact/"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex w-full items-center justify-center px-5 py-3 bg-cta text-white rounded-full font-medium hover:opacity-90 transition-opacity shadow-subtle">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
