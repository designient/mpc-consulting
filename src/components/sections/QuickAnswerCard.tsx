import React from 'react';
import { Sparkles } from 'lucide-react';
export interface QuickAnswerCardProps {
  question: string;
  answer: string;
  eyebrow?: string;
}
export function QuickAnswerCard({
  question,
  answer,
  eyebrow = 'Quick Answer'
}: QuickAnswerCardProps) {
  return (
    <section className="w-full bg-white px-4 py-10 md:px-10 md:py-12 lg:px-[60px] lg:py-14">
      <div className="max-w-[900px] mx-auto bg-bg-light rounded-card shadow-subtle p-8 md:p-10">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-4 h-4 text-divider" />
          <p className="font-body text-[12px] uppercase tracking-[0.8px] font-semibold text-divider">
            {eyebrow}
          </p>
        </div>
        <h2 className="font-heading font-medium text-[24px] md:text-[28px] leading-tight tracking-tight text-text-primary mb-4">
          {question}
        </h2>
        <p className="font-body text-[18px] leading-[1.7] text-text-primary opacity-85">
          {answer}
        </p>
      </div>
    </section>);

}