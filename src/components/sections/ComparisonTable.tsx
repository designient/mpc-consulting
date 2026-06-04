import React from 'react';
import { Check, X } from 'lucide-react';
import { Heading } from '../ui/Heading';
export interface ComparisonRow {
  criterion: string;
  values: (string | boolean)[];
}
export interface ComparisonTableProps {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  headers: string[];
  highlightIndex?: number;
  rows: ComparisonRow[];
  bg?: 'white' | 'soft';
}
export function ComparisonTable({
  id,
  eyebrow,
  title,
  intro,
  headers,
  highlightIndex = headers.length - 1,
  rows,
  bg = 'white'
}: ComparisonTableProps) {
  const bgClass = bg === 'soft' ? 'bg-bg-light' : 'bg-white';
  return (
    <section
      id={id}
      className={`w-full ${bgClass} px-4 py-12 md:px-10 md:py-16 lg:px-[60px] lg:py-[80px]`}>
      
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-10">
          {eyebrow &&
          <p className="font-body text-[14px] uppercase tracking-[0.8px] font-medium text-divider mb-3">
              {eyebrow}
            </p>
          }
          <Heading level={2}>{title}</Heading>
          {intro &&
          <p className="font-body text-[18px] leading-[1.6] mt-5 max-w-[700px] text-text-primary opacity-80">
              {intro}
            </p>
          }
        </div>

        <div className="overflow-x-auto -mx-4 px-4">
          <table className="w-full border-collapse min-w-[640px]">
            <thead>
              <tr>
                {headers.map((h, i) => {
                  const isHighlight = i === highlightIndex;
                  const isFirst = i === 0;
                  return (
                    <th
                      key={i}
                      className={`text-left p-5 font-heading font-semibold text-[15px] md:text-[16px] border-b-2 ${isHighlight ? 'bg-divider/8 border-divider text-text-primary' : 'border-black/10 text-text-primary opacity-80'} ${isFirst ? 'sticky left-0 bg-inherit' : ''}`}
                      style={
                      isFirst ?
                      {
                        background: bg === 'soft' ? '#F1F1F1' : '#FFFFFF'
                      } :
                      undefined
                      }>
                      
                      {h}
                    </th>);

                })}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) =>
              <tr key={ri} className="border-b border-black/5">
                  <td
                  className="p-5 font-body text-[15px] text-text-primary font-medium sticky left-0"
                  style={{
                    background: bg === 'soft' ? '#F1F1F1' : '#FFFFFF'
                  }}>
                  
                    {row.criterion}
                  </td>
                  {row.values.map((v, vi) => {
                  const colIndex = vi + 1;
                  const isHighlight = colIndex === highlightIndex;
                  return (
                    <td
                      key={vi}
                      className={`p-5 font-body text-[15px] leading-[1.5] ${isHighlight ? 'bg-divider/8 text-text-primary' : 'text-text-primary opacity-80'}`}>
                      
                        {typeof v === 'boolean' ?
                      v ?
                      <Check className="w-5 h-5 text-divider" /> :

                      <X className="w-5 h-5 text-text-primary opacity-30" /> :


                      v
                      }
                      </td>);

                })}
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>);

}