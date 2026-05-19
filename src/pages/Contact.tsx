import React, { useState } from 'react';
import {
  Mail,
  Globe,
  MapPin,
  ShieldCheck,
  Award,
  Clock,
  Calendar,
  FileText,
  Send } from
'lucide-react';
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
import {
  FAQAccordion,
  buildFAQSchema } from
'../components/sections/FAQAccordion';
import { CTABand } from '../components/sections/CTABand';
import {
  Breadcrumb,
  buildBreadcrumbSchema } from
'../components/sections/Breadcrumb';
const BREADCRUMB = [
{
  label: 'Contact'
}];

const COUNTRIES = ['India', 'UAE', 'Australia', 'UK', 'Other'];
const SERVICES = [
'HCM',
'ERP (Oracle Cloud)',
'Java Technologies',
'DevOps',
'Business Process Consulting',
'HCaaS',
'AaaS',
'MPC Tech Hub',
'General Enquiry'];

const OFFICES = [
{
  city: 'Gurugram',
  country: 'India',
  addr: '19th Floor, AIPL Business Club, Sector 62, Gurugram 122101',
  locale: 'en-IN'
},
{
  city: 'Hyderabad',
  country: 'India',
  addr: 'Level 1, N Heights, Plot 38, Hitech City Road, Hyderabad 500081',
  locale: 'en-IN'
},
{
  city: 'Bengaluru',
  country: 'India',
  addr: '4th Floor, Hanto Virgo Centre, 185/A, 22nd Cross Rd, HSR Layout',
  locale: 'en-IN'
},
{
  city: 'Dubai',
  country: 'UAE',
  addr: '25th Floor, The Citadel Tower, Marasi Drive, Business Bay',
  locale: 'en-AE'
},
{
  city: 'Abu Dhabi',
  country: 'UAE',
  addr: '13th Floor, Al Mansoor Tower, Al Salam Street',
  locale: 'en-AE'
},
{
  city: 'Melbourne',
  country: 'Australia',
  addr: 'Glen Waverley, Melbourne VIC 3150',
  locale: 'en-AU'
},
{
  city: 'London',
  country: 'UK',
  addr: '7 Benton Mews, Aylesbury',
  locale: 'en-GB'
}];

const FAQS = [
{
  q: 'What is the typical timeline for an Oracle Cloud implementation?',
  a: 'Timelines vary based on scope and complexity. A focused HCM or ERP module can go live in 8–12 weeks. Full enterprise deployments typically run 6–18 months. We scope all engagements clearly in our initial assessment.'
},
{
  q: 'Do you work with companies that already have Oracle but need support?',
  a: 'Yes. We work at every stage — new implementations, upgrades, managed support, and health checks on existing Oracle environments.'
},
{
  q: 'Can MPC work with clients outside India, UAE, Australia, and the UK?',
  a: 'Yes. While our physical offices are in these four countries, we deliver projects globally. Our consultants are experienced with remote and hybrid delivery models.'
}];

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
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>

  {
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
        description="Reach MPC across offices in Gurugram, Hyderabad, Bengaluru, Dubai, Abu Dhabi, Melbourne and London."
        canonicalPath="/contact/"
        schema={[
          ORGANIZATION_SCHEMA,
          buildBreadcrumbSchema(BREADCRUMB),
          buildFAQSchema(FAQS),
          ...buildLocalBusinessSchema(OFFICES)
        ]}
      />
      
      <StickyNav />
      <main className="flex-grow w-full">
        {/* Hero */}
        <section className="w-full bg-primary text-text-inverse px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="mb-6">
            <Breadcrumb items={BREADCRUMB} variant="dark" />
          </div>
          <div className="w-[60px] h-[3px] bg-divider mb-6" />
          <Heading level={1} color="text-inverse">
            Let's Talk Transformation
          </Heading>
          <p className="font-body text-[18px] md:text-[20px] leading-[1.6] text-text-inverse opacity-90 mt-6 max-w-[760px]">
            Whether you're starting an Oracle Cloud programme or need expert
            support on an existing one — our team is ready to help.
          </p>
        </section>

        {/* Form + Info */}
        <section className="w-full bg-white px-4 py-14 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              <p className="font-body text-[12px] uppercase tracking-[0.8px] font-semibold text-divider mb-3">
                Enquiry
              </p>
              <Heading level={2} className="mb-8">
                Send us a message
              </Heading>

              {submitted ?
              <div className="bg-divider/10 border border-divider rounded-card p-8">
                  <h3 className="font-heading font-medium text-[22px] text-text-primary mb-2">
                    Thanks — we've received your message.
                  </h3>
                  <p className="font-body text-[16px] text-text-primary opacity-80">
                    A consultant will be in touch within one business day.
                  </p>
                </div> :

              <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Input
                    label="Full Name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Doe" />
                  
                    <Input
                    label="Company Name"
                    name="company"
                    required
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Corp" />
                  
                    <Input
                    label="Work Email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@acme.com" />
                  
                    <Input
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 ..." />
                  
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="font-body font-medium text-[12px] uppercase tracking-[0.8px] text-text-primary mb-2 block">
                        Country
                      </label>
                      <select
                      name="country"
                      value={form.country}
                      onChange={handleChange}
                      className="w-full rounded-button px-4 py-2.5 font-body text-[16px] text-text-primary bg-white border border-[#E8E8E8] outline-none focus:border-divider focus:border-2 focus:px-[15px] focus:py-[9px]">
                      
                        {COUNTRIES.map((c) =>
                      <option key={c}>{c}</option>
                      )}
                      </select>
                    </div>
                    <div>
                      <label className="font-body font-medium text-[12px] uppercase tracking-[0.8px] text-text-primary mb-2 block">
                        Service Interest
                      </label>
                      <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full rounded-button px-4 py-2.5 font-body text-[16px] text-text-primary bg-white border border-[#E8E8E8] outline-none focus:border-divider focus:border-2 focus:px-[15px] focus:py-[9px]">
                      
                        {SERVICES.map((s) =>
                      <option key={s}>{s}</option>
                      )}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-body font-medium text-[12px] uppercase tracking-[0.8px] text-text-primary mb-2 block">
                      Message
                    </label>
                    <textarea
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your Oracle environment, your goals, and how we can help."
                    className="w-full rounded-button px-4 py-2.5 font-body text-[16px] text-text-primary bg-white border border-[#E8E8E8] outline-none focus:border-divider focus:border-2 focus:px-[15px] focus:py-[9px] resize-vertical" />
                  
                  </div>

                  <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="!inline-flex gap-2">
                  
                    Send Message <Send className="w-4 h-4" />
                  </Button>
                </form>
              }
            </div>

            {/* Info rail */}
            <div className="lg:col-span-5">
              <div className="bg-bg-light rounded-card p-6 md:p-7 mb-5">
                <h3 className="font-heading font-medium text-[20px] text-text-primary mb-4">
                  Or reach us directly
                </h3>
                <a
                  href="mailto:hello@mpccloudconsulting.com"
                  className="flex items-center gap-3 mb-3 hover:text-divider transition-colors">
                  
                  <Mail className="w-4 h-4 text-divider" />
                  <span className="font-body text-[15px]">
                    hello@mpccloudconsulting.com
                  </span>
                </a>
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-divider" />
                  <span className="font-body text-[15px]">
                    mpccloudconsulting.com
                  </span>
                </div>
              </div>

              <div className="bg-primary text-text-inverse rounded-card p-6 md:p-7 mb-5">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-divider" />
                  <span className="font-body text-[12px] uppercase tracking-[0.8px] font-semibold text-divider">
                    Response SLA
                  </span>
                </div>
                <p className="font-heading font-medium text-[20px] mb-2">
                  We reply within 1 business day
                </p>
                <p className="font-body text-[14px] opacity-80">
                  Across all 4 regions. Urgent? Mark it in your message.
                </p>
              </div>

              <div className="border border-black/10 rounded-card p-6 md:p-7">
                <h3 className="font-heading font-medium text-[18px] text-text-primary mb-4">
                  Quick Actions
                </h3>
                <ul className="space-y-2.5">
                  <li>
                    <a
                      href="#"
                      className="flex items-center gap-3 font-body text-[15px] text-text-primary hover:text-divider">
                      
                      <Calendar className="w-4 h-4 text-divider" /> Book a Demo
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center gap-3 font-body text-[15px] text-text-primary hover:text-divider">
                      
                      <FileText className="w-4 h-4 text-divider" /> Download
                      Company Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center gap-3 font-body text-[15px] text-text-primary hover:text-divider">
                      
                      <Send className="w-4 h-4 text-divider" /> Request a Quote
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Offices */}
        <section className="w-full bg-bg-light px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
          <div className="mb-10">
            <p className="font-body text-[12px] uppercase tracking-[0.8px] font-semibold text-divider mb-3">
              Global Offices
            </p>
            <Heading level={2}>Our offices</Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {OFFICES.map((o) =>
            <div
              key={o.city}
              className="bg-white rounded-card p-6 shadow-subtle flex items-start gap-4">
              
                <div className="w-11 h-11 rounded-md bg-divider/10 flex items-center justify-center text-divider flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-1">
                    <h3 className="font-heading font-medium text-[20px] text-text-primary">
                      {o.city}
                    </h3>
                    <span className="font-body text-[11px] uppercase tracking-[0.8px] font-medium text-divider">
                      {o.country} · {o.locale}
                    </span>
                  </div>
                  <p className="font-body text-[14px] leading-[1.6] text-text-primary opacity-75">
                    {o.addr}
                  </p>
                </div>
              </div>
            )}
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

        <FAQAccordion
          eyebrow="FAQs"
          title="Common questions"
          items={FAQS}
          layout="full"
          bg="soft" />
        

        <CTABand
          title="Prefer to book directly?"
          body="Pick a time that suits — our calendar is open across IN, UAE, AU, and UK time zones."
          ctaText="Book a Call"
          ctaTo="/contact/"
          variant="centered" />
        
      </main>
      <FooterDark />
    </div>);

}