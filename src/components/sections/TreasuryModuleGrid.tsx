import React from 'react';
import { BoxIcon } from 'lucide-react';
import { Heading } from '../ui/Heading';
import { Card } from '../ui/Card';

export interface TreasuryModule {
  icon: BoxIcon;
  title: string;
  items: string[];
}

export interface TreasuryModuleGridProps {
  id?: string;
  platformTitle?: string;
  platformSubtitle?: string;
  modules: TreasuryModule[];
}

export function TreasuryModuleGrid({
  id,
  platformTitle = 'Treasury Tech Platform',
  platformSubtitle = 'IBS Fintech',
  modules,
}: TreasuryModuleGridProps) {
  return (
    <section
      id={id}
      className="scroll-mt-[140px] w-full bg-bg-light px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]">
      <div className="text-center mb-10 max-w-[800px] mx-auto">
        <p className="section-eyebrow mb-3">Platform Modules</p>
        <Heading level={2} className="mb-2">
          {platformTitle}
        </Heading>
        <p className="font-body text-[17px] leading-[1.7] text-text-primary opacity-80">
          {platformSubtitle} — an all-in-one treasury platform supporting multi-company,
          multi-location, multi-currency, and multi-asset class operations.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-[1280px] mx-auto">
        {modules.map((mod, i) => {
          const Icon = mod.icon;
          return (
            <Card key={i} bg="white" className="p-6 md:p-7 min-h-0">
              <div className="w-11 h-11 rounded-md bg-stat/10 flex items-center justify-center text-stat mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <Heading level={3} className="mb-4">
                {mod.title}
              </Heading>
              <ul className="space-y-2">
                {mod.items.map((item) => (
                  <li
                    key={item}
                    className="font-body text-[15px] leading-[1.6] text-text-primary opacity-80 flex gap-2">
                    <span className="text-stat shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-stat" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
