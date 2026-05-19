import React, { useState } from 'react';
import { Button } from '../ui/Button';
export interface NewsletterInlineProps {
  title?: string;
  subhead?: string;
  variant?: 'ocean' | 'dark';
  buttonText?: string;
}
export function NewsletterInline({
  title = 'Stay Ahead of Oracle',
  subhead = 'Monthly insights on Oracle Cloud, AI, and enterprise technology — direct to your inbox. No fluff.',
  variant = 'dark',
  buttonText = 'Subscribe'
}: NewsletterInlineProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const isDark = variant === 'dark';
  const bgCls = isDark ? 'bg-primary' : 'bg-divider';
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
  };
  return (
    <section
      className={`w-full ${bgCls} text-text-inverse px-4 py-12 md:px-10 md:py-14 lg:px-[60px] lg:py-16`}>
      
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-10">
        <div className="flex-1">
          <h3 className="font-heading font-medium text-[24px] md:text-[28px] leading-tight tracking-tight mb-2">
            {title}
          </h3>
          <p className="font-body text-[16px] leading-[1.6] opacity-90 max-w-[560px]">
            {subhead}
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 md:flex-shrink-0 w-full md:w-auto md:min-w-[420px]">
          
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="flex-1 rounded-button px-4 py-3 font-body text-[15px] text-text-primary bg-white border-none outline-none focus:ring-2 focus:ring-divider"
            aria-label="Email address" />
          
          <Button type="submit" variant="primary" size="md">
            {submitted ? '✓ Subscribed' : buttonText}
          </Button>
        </form>
      </div>
    </section>);

}