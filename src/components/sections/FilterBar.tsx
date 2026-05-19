import React from 'react';
import { Search } from 'lucide-react';
type Filter = {
  id: string;
  label: string;
};
type Props = {
  filters: Filter[];
  activeId: string;
  onChange: (id: string) => void;
  searchValue?: string;
  onSearchChange?: (val: string) => void;
  searchPlaceholder?: string;
  sticky?: boolean;
};
export function FilterBar({
  filters,
  activeId,
  onChange,
  searchValue,
  onSearchChange,
  searchPlaceholder = 'Search…',
  sticky = false
}: Props) {
  const hasSearch = typeof onSearchChange === 'function';
  return (
    <div
      className={`w-full bg-white border-y border-text-primary/10 ${sticky ? 'sticky top-[72px] z-30' : ''}`}>
      
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-[60px] py-4 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div className="flex gap-2 overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap">
          {filters.map((f) => {
            const isActive = f.id === activeId;
            return (
              <button
                key={f.id}
                onClick={() => onChange(f.id)}
                className={`px-4 py-2 rounded-full font-body text-[14px] whitespace-nowrap transition-colors ${isActive ? 'bg-divider text-white' : 'bg-bg-light text-text-primary hover:bg-divider/10'}`}>
                
                {f.label}
              </button>);

          })}
        </div>
        {hasSearch &&
        <div className="relative w-full md:w-[280px] flex-shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-primary/40" />
            <input
            type="search"
            value={searchValue ?? ''}
            onChange={(e) => onSearchChange?.(e.target.value)}
            placeholder={searchPlaceholder}
            className="w-full pl-9 pr-3 py-2 rounded-button border border-text-primary/15 font-body text-[14px] text-text-primary placeholder:text-text-primary/40 focus:outline-none focus:border-cta focus:ring-2 focus:ring-cta/15 transition-all" />
          
          </div>
        }
      </div>
    </div>);

}