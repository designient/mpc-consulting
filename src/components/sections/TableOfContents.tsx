import React, { useEffect, useRef, useState } from 'react';
import { List, X } from 'lucide-react';

export interface TOCItem {
  label: string;
  hash: string;
}

export interface TableOfContentsProps {
  items: TOCItem[];
  title?: string;
  /** Sidebar list (default) or horizontal sticky bar below the hero */
  variant?: 'sidebar' | 'inline';
  /** Scroll offset when jumping to a section (px). Inline variant auto-measures if omitted. */
  scrollOffset?: number;
}

const DEFAULT_SCROLL_OFFSET = 96;

function getSiteHeaderHeight() {
  const header = document.querySelector('header');
  return header?.getBoundingClientRect().height ?? 80;
}

export function TableOfContents({
  items,
  title = 'On this page',
  variant = 'sidebar',
  scrollOffset,
}: TableOfContentsProps) {
  const [activeHash, setActiveHash] = useState(items[0]?.hash || '');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(80);
  const [navHeight, setNavHeight] = useState(56);

  const navRef = useRef<HTMLElement>(null);

  const inlineOffset =
    scrollOffset ?? Math.round(headerHeight + navHeight + 8);

  useEffect(() => {
    if (variant !== 'inline') return;

    const updateMeasurements = () => {
      setHeaderHeight(getSiteHeaderHeight());
      if (navRef.current) {
        setNavHeight(navRef.current.getBoundingClientRect().height);
      }
    };

    updateMeasurements();
    window.addEventListener('resize', updateMeasurements);

    const header = document.querySelector('header');
    const resizeObserver = new ResizeObserver(updateMeasurements);
    if (header) resizeObserver.observe(header);
    if (navRef.current) resizeObserver.observe(navRef.current);

    return () => {
      window.removeEventListener('resize', updateMeasurements);
      resizeObserver.disconnect();
    };
  }, [variant]);

  useEffect(() => {
    const elements = items
      .map((it) => document.getElementById(it.hash))
      .filter(Boolean) as HTMLElement[];
    if (!elements.length) return;

    const offset =
      variant === 'inline' ? inlineOffset : scrollOffset ?? DEFAULT_SCROLL_OFFSET;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveHash(visible[0].target.id);
        }
      },
      {
        rootMargin: `-${offset}px 0px -50% 0px`,
        threshold: 0,
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items, variant, inlineOffset, scrollOffset]);

  const handleClick = (e: React.MouseEvent, hash: string) => {
    e.preventDefault();
    const el = document.getElementById(hash);
    if (!el) return;

    const offset =
      variant === 'inline' ? inlineOffset : scrollOffset ?? DEFAULT_SCROLL_OFFSET;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top: y, behavior: 'smooth' });
    setActiveHash(hash);
    setMobileOpen(false);
  };

  if (variant === 'inline') {
    return (
      <nav
        ref={navRef}
        aria-label="Page sections"
        style={{ top: headerHeight }}
        className="sticky z-40 w-full bg-bg-minimal border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex items-center gap-1 overflow-x-auto h-14 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {items.map((it) => {
              const isActive = activeHash === it.hash;
              return (
                <a
                  key={it.hash}
                  href={`#${it.hash}`}
                  onClick={(e) => handleClick(e, it.hash)}
                  className={`shrink-0 px-3 py-1.5 rounded-full font-body text-[13px] font-medium whitespace-nowrap transition-colors ${
                    isActive
                      ? 'bg-cta text-white'
                      : 'text-text-primary/75 hover:text-cta hover:bg-white'
                  }`}>
                  {it.label}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    );
  }

  return (
    <>
      <aside className="hidden lg:block lg:sticky lg:top-[96px] lg:self-start">
        <p className="font-body text-[14px] uppercase tracking-[0.8px] font-semibold text-text-primary opacity-60 mb-3">
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
              </li>
            );
          })}
        </ul>
      </aside>

      <div className="lg:hidden sticky top-[72px] z-30 bg-white border-b border-black/5 -mx-4 px-4 py-3 md:-mx-10 md:px-10">
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center gap-2 font-body text-[13px] font-semibold text-text-primary">
          {mobileOpen ? <X className="w-4 h-4" /> : <List className="w-4 h-4" />}
          {title}
          <span className="text-divider">
            · {items.find((i) => i.hash === activeHash)?.label}
          </span>
        </button>
        {mobileOpen && (
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
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}
