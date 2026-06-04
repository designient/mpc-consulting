import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
export interface BreadcrumbItem {
  label: string;
  to?: string;
}
export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  variant?: 'light' | 'dark';
  className?: string;
}
export function Breadcrumb({
  items,
  variant = 'light',
  className = ''
}: BreadcrumbProps) {
  const isDark = variant === 'dark';
  const baseColor = isDark ? 'text-text-inverse' : 'text-text-primary';
  const dimColor = isDark ?
  'text-text-inverse opacity-60' :
  'text-text-primary opacity-60';
  return (
    <nav
      aria-label="Breadcrumb"
      className={`font-body text-[14px] uppercase tracking-[0.8px] font-medium ${baseColor} ${className}`}>
      
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link
            to="/"
            className={`${dimColor} hover:opacity-100 hover:text-divider transition-colors`}>
            
            Home
          </Link>
        </li>
        {items.map((item, i) =>
        <li key={i} className="flex items-center gap-2">
            <ChevronRight className={`w-3 h-3 ${dimColor}`} />
            {item.to && i < items.length - 1 ?
          <Link
            to={item.to}
            className={`${dimColor} hover:opacity-100 hover:text-divider transition-colors`}>
            
                {item.label}
              </Link> :

          <span className={baseColor}>{item.label}</span>
          }
          </li>
        )}
      </ol>
    </nav>);

}
export function buildBreadcrumbSchema(
items: BreadcrumbItem[],
origin = 'https://www.mpccloudconsulting.com')
{
  const elements = [
  {
    '@type': 'ListItem',
    position: 1,
    name: 'Home',
    item: `${origin}/`
  },
  ...items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 2,
    name: it.label,
    ...(it.to ?
    {
      item: `${origin}${it.to}`
    } :
    {})
  }))];

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: elements
  };
}