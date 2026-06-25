import React, { useState } from 'react';
import { Mail, Globe, ShieldCheck, Award, Send } from 'lucide-react';
import { StickyNav } from '../components/layout/StickyNav';
import { FooterDark } from '../components/sections/FooterDark';
import {
  SEO,
  ORGANIZATION_SCHEMA,
  buildLocalBusinessSchema
} from '../components/seo/SEO';
import { Heading } from '../components/ui/Heading';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { buildBreadcrumbSchema } from '../components/sections/Breadcrumb';
import { OFFICES } from '../data/offices';

const BREADCRUMB = [{ label: 'Contact' }];

const HERO_BG =
  'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=2400&q=80';

const COUNTRIES = ['India', 'UAE', 'Singapore', 'Australia', 'UK', 'Other'];
const SERVICES = [
  'Oracle (Fusion & EBS)',
  'AI CoE',
  'Cloud & Database',
  'CX & Analytics',
  'Security & Zero Trust',
  'Treasury Management',
  'HCM',
  'ERP (Oracle Cloud)',
  'Java Technologies',
  'DevOps',
  'Business Process Consulting',
  'HCaaS',
  'AaaS',
  'General Enquiry'
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: 'India',
    service: 'General Enquiry',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="Contact MPC Cloud Consulting | Get in Touch"
        description="Reach MPC across offices in Gurugram, Hyderabad, Bengaluru, Singapore, Dubai, Abu Dhabi, Melbourne and London."
        canonicalPath="/contact/"
        schema={[
          ORGANIZATION_SCHEMA,
          buildBreadcrumbSchema(BREADCRUMB),
          ...buildLocalBusinessSchema(OFFICES)
        ]}
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
              <span className="section-eyebrow-inverse inline-flex items-center gap-2 tracking-[0.2em] mb-4 md:mb-5 text-text-inverse">
                <span className="w-1.5 h-1.5 rounded-full bg-text-inverse" />
                Contact
              </span>

              <h1 className="type-h1 text-text-inverse">
                Let&apos;s talk{' '}
                <span className="font-body italic font-normal text-text-inverse">
                  transformation
                </span>
              </h1>

              <p className="font-body text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5] text-text-inverse/90 mt-4 md:mt-5 max-w-[640px] lg:max-w-[720px]">
                Whether you&apos;re starting an Oracle Cloud programme or need
                expert support on an existing one — our team is ready to help.
              </p>
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="w-full bg-white px-4 py-14 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="max-w-[900px] mx-auto text-center">
            <p className="section-eyebrow mb-3">Enquiry</p>
            <Heading level={2} className="mb-8">
              Send us a message
            </Heading>

            {submitted ? (
              <div className="bg-divider/10 border border-divider rounded-card p-8 text-left">
                <h3 className="font-heading font-semibold text-[22px] text-text-primary mb-2">
                  Thanks — we&apos;ve received your message.
                </h3>
                <p className="font-body text-[16px] text-text-primary opacity-80">
                  A consultant will be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Input
                    label="Full Name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                  />
                  <Input
                    label="Company Name"
                    name="company"
                    required
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Corp"
                  />
                  <Input
                    label="Work Email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@acme.com"
                  />
                  <Input
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 ..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body font-medium text-[14px] uppercase tracking-[0.8px] text-text-primary mb-2 block">
                      Country
                    </label>
                    <select
                      name="country"
                      value={form.country}
                      onChange={handleChange}
                      className="w-full rounded-button px-4 py-2.5 font-body text-[16px] text-text-primary bg-white border border-[#E8E8E8] outline-none focus:border-divider focus:border-2 focus:px-[15px] focus:py-[9px]">
                      {COUNTRIES.map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="font-body font-medium text-[14px] uppercase tracking-[0.8px] text-text-primary mb-2 block">
                      Service Interest
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full rounded-button px-4 py-2.5 font-body text-[16px] text-text-primary bg-white border border-[#E8E8E8] outline-none focus:border-divider focus:border-2 focus:px-[15px] focus:py-[9px]">
                      {SERVICES.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-body font-medium text-[14px] uppercase tracking-[0.8px] text-text-primary mb-2 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your Oracle environment, your goals, and how we can help."
                    className="w-full rounded-button px-4 py-2.5 font-body text-[16px] text-text-primary bg-white border border-[#E8E8E8] outline-none focus:border-divider focus:border-2 focus:px-[15px] focus:py-[9px] resize-vertical"
                  />
                </div>

                <div className="flex justify-center pt-1">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="!inline-flex gap-2">
                    Send Message <Send className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            )}

            <div className="mt-10 pt-8 border-t border-black/10">
              <p className="font-heading font-semibold text-[18px] text-text-primary mb-4">
                Or reach us directly
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                <a
                  href="mailto:hello@mpccloudconsulting.com"
                  className="inline-flex items-center gap-2.5 font-body text-[15px] text-text-primary hover:text-cta transition-colors">
                  <Mail className="w-4 h-4 text-cta shrink-0" />
                  hello@mpccloudconsulting.com
                </a>
                <a
                  href="https://mpccloudconsulting.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 font-body text-[15px] text-text-primary hover:text-cta transition-colors">
                  <Globe className="w-4 h-4 text-cta shrink-0" />
                  mpccloudconsulting.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Global Offices */}
        <section className="w-full bg-bg-light px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="text-center mb-10 max-w-[800px] mx-auto">
            <p className="section-eyebrow mb-3">Global Offices</p>
            <Heading level={2} className="mb-4">
              Our offices
            </Heading>
            <p className="font-body text-[17px] leading-[1.7] text-text-primary opacity-80">
              Eight locations across India, UAE, Singapore, Australia, and the
              UK — one connected team delivering Oracle Cloud and AI
              transformation worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {OFFICES.map((office) => (
              <article
                key={office.city}
                className="flex flex-col h-full rounded-card border border-cta bg-white p-5 md:p-6">
                <img
                  src={office.imageSrc}
                  alt={office.imageAlt}
                  className="w-full aspect-[4/3] object-cover rounded-[10px] md:rounded-[12px] mb-5 md:mb-6"
                />
                <p className="font-body text-[13px] uppercase tracking-[0.06em] font-semibold text-cta mb-2">
                  {office.country}
                </p>
                <h3 className="type-h3 text-[20px] md:text-[22px] text-text-primary mb-3">
                  {office.city}
                </h3>
                <p className="font-body text-[15px] leading-[1.65] text-text-primary opacity-80">
                  {office.addr}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Trust strip */}
        <section className="w-full bg-white px-4 py-10 md:px-10 lg:px-[60px]">
          <div className="max-w-[1100px] mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-text-primary opacity-75">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-divider" />
              <span className="font-body text-[14px]">ISO 27001 Aligned</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-black/10" />
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-divider" />
              <span className="font-body text-[14px]">Oracle Partner</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-black/10" />
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-divider" />
              <span className="font-body text-[14px]">
                SOC 2-aligned processes
              </span>
            </div>
          </div>
        </section>
      </main>
      <FooterDark />
    </div>
  );
}
