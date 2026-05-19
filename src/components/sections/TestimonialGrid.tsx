import React from 'react';
export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  country?: string;
  avatarSrc?: string;
}
export interface TestimonialGridProps {
  eyebrow?: string;
  title?: string;
  items: Testimonial[];
  /** 'light' is the default editorial style. 'dark' kept for backwards compatibility. */
  variant?: 'light' | 'dark';
  columns?: 2 | 3;
}
const PLACEHOLDER_AVATARS = [
'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80'];

export function TestimonialGrid({
  eyebrow,
  title,
  items,
  variant = 'light',
  columns = 2
}: TestimonialGridProps) {
  const isDark = variant === 'dark';
  const bgCls = isDark ? 'bg-primary text-white' : 'bg-white text-text-primary';
  const cardCls = isDark ?
  'bg-white/5 border-white/10' :
  'bg-bg-light border-transparent';
  const quoteCls = isDark ? 'text-white' : 'text-text-primary';
  const nameCls = isDark ? 'text-white' : 'text-text-primary';
  const roleCls = isDark ? 'text-white/65' : 'text-text-primary/65';
  const dividerCls = isDark ? 'border-white/10' : 'border-text-primary/10';
  const gridCols =
  columns === 3 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2';
  return (
    <section
      className={`w-full ${bgCls} px-4 py-16 md:px-10 md:py-20 lg:px-[60px] lg:py-[100px]`}>
      
      {(eyebrow || title) &&
      <div className="max-w-[1280px] mx-auto mb-12 text-center md:text-left">
          {eyebrow &&
        <span
          className={`inline-flex items-center gap-2 font-body text-[11px] uppercase tracking-[2px] font-semibold ${isDark ? 'text-white/80' : 'text-divider'} mb-4`}>
          
              <span
            className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-white/80' : 'bg-divider'}`} />
          
              {eyebrow}
            </span>
        }
          {title &&
        <h2
          className={`font-heading font-medium text-[32px] md:text-[44px] leading-[1.1] tracking-[-0.3px] max-w-[800px] ${isDark ? 'text-white' : 'text-text-primary'}`}>
          
              {title}
            </h2>
        }
        </div>
      }

      <div
        className={`max-w-[1280px] mx-auto grid grid-cols-1 ${gridCols} gap-4 md:gap-6`}>
        
        {items.map((t, i) =>
        <div
          key={i}
          className={`rounded-card border ${cardCls} p-7 md:p-8 flex flex-col`}>
          
            <p
            className={`font-body text-[17px] md:text-[18px] leading-[1.6] ${quoteCls} mb-7`}>
            
              "{t.quote}"
            </p>
            <div
            className={`mt-auto pt-5 border-t ${dividerCls} flex items-center gap-3`}>
            
              <img
              src={
              t.avatarSrc ||
              PLACEHOLDER_AVATARS[i % PLACEHOLDER_AVATARS.length]
              }
              alt={t.name}
              className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
            
              <div className="min-w-0">
                <p
                className={`font-heading font-medium text-[15px] ${nameCls}`}>
                
                  {t.name}
                </p>
                <p
                className={`font-body text-[12px] ${roleCls} mt-0.5 truncate`}>
                
                  {t.title}, {t.company}
                  {t.country ? ` · ${t.country}` : ''}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>);

}