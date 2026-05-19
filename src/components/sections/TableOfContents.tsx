import React, { useEffect, useState } from 'react';
import { List, X } from 'lucide-react';
export interface TOCItem {
  label: string;
  hash: string;
}
export interface TableOfContentsProps {
  items: TOCItem[];
  title?: string;
}
export function TableOfContents({
  items,
  title = 'On this page'
}: TableOfContentsProps) {
  const [activeHash, setActiveHash] = useState(items[0]?.hash || '');
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const elements = items.
    map((it) => document.getElementById(it.hash)).
    filter(Boolean) as HTMLElement[];
    if (!elements.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.
        filter((e) => e.isIntersecting).
        sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveHash(visible[0].target.id);
        }
      },
      {
        rootMargin: '-100px 0px -60% 0px',
        threshold: 0
      }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);
  const handleClick = (e: React.MouseEvent, hash: string) => {
    e.preventDefault();
    const el = document.getElementById(hash);
    if (el) {
      const yOffset = -96;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
      setActiveHash(hash);
      setMobileOpen(false);
    }
  };
  return (
    <>
      {/* Desktop sticky */}
      <aside className="hidden lg:block lg:sticky lg:top-[96px] lg:self-start">
        <p className="font-body text-[12px] uppercase tracking-[0.8px] font-semibold text-text-primary opacity-60 mb-3">
          {title}
        </p>
        <ul className="border-l border-black/10 pl-4 space-y-2.5">
          {items.map((it) => {
            const isActive = activeHash === it.hash;
            return (
              <li key={it.hash}>
                <a
                  href={`#${it.hash}`}
                  onClick={(e) => handleClick(e, it.hash)}
                  className={`font-body text-[14px] block transition-colors ${isActive ? 'text-divider font-semibold' : 'text-text-primary opacity-70 hover:text-divider hover:opacity-100'}`}>
                  
                  {it.label}
                </a>
              </li>);

          })}
        </ul>
      </aside>

      {/* Mobile toggle button */}
      <div className="lg:hidden sticky top-[72px] z-30 bg-white border-b border-black/5 -mx-4 px-4 py-3 md:-mx-10 md:px-10">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center gap-2 font-body text-[13px] font-semibold text-text-primary">
          
          {mobileOpen ?
          <X className="w-4 h-4" /> :

          <List className="w-4 h-4" />
          }
          {title}
          <span className="text-divider">
            · {items.find((i) => i.hash === activeHash)?.label}
          </span>
        </button>
        {mobileOpen &&
        <ul className="mt-3 pb-3 space-y-2 border-l border-black/10 pl-4">
            {items.map((it) => {
            const isActive = activeHash === it.hash;
            return (
              <li key={it.hash}>
                  <a
                  href={`#${it.hash}`}
                  onClick={(e) => handleClick(e, it.hash)}
                  className={`font-body text-[14px] block transition-colors ${isActive ? 'text-divider font-semibold' : 'text-text-primary opacity-70'}`}>
                  
                    {it.label}
                  </a>
                </li>);

          })}
          </ul>
        }
      </div>
    </>);

}