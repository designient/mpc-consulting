import React, { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  schema?: object | object[];
  noindex?: boolean;
}

export const ORIGIN = 'https://www.mpccloudconsulting.com';
export const DEFAULT_OG_IMAGE = `${ORIGIN}/og-default.svg`;

function setOrCreateMeta(
  name: string,
  content: string,
  attr: 'name' | 'property' = 'name'
) {
  let el = document.querySelector(
    `meta[${attr}="${name}"]`
  ) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
  return el;
}

function setOrCreateLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let el = document.querySelector(selector) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    if (hreflang) el.setAttribute('hreflang', hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
  return el;
}

function buildJsonLd(schema: object | object[]) {
  if (Array.isArray(schema)) {
    if (schema.length === 1) return schema[0];
    return {
      '@context': 'https://schema.org',
      '@graph': schema.map((item) => {
        const { '@context': _ctx, ...rest } = item as Record<string, unknown>;
        return rest;
      })
    };
  }
  return schema;
}

export function SEO({
  title,
  description,
  canonicalPath = '/',
  schema,
  noindex = false
}: SEOProps) {
  useEffect(() => {
    const prevTitle = document.title;
    const canonicalUrl = `${ORIGIN}${canonicalPath}`;

    document.title = title;
    setOrCreateMeta('description', description);
    setOrCreateMeta('og:title', title, 'property');
    setOrCreateMeta('og:description', description, 'property');
    setOrCreateMeta('og:type', 'website', 'property');
    setOrCreateMeta('og:url', canonicalUrl, 'property');
    setOrCreateMeta('og:image', DEFAULT_OG_IMAGE, 'property');
    setOrCreateMeta('twitter:card', 'summary_large_image');
    setOrCreateMeta('twitter:title', title);
    setOrCreateMeta('twitter:description', description);
    setOrCreateMeta('twitter:image', DEFAULT_OG_IMAGE);

    if (noindex) {
      setOrCreateMeta('robots', 'noindex, follow');
    } else {
      setOrCreateMeta('robots', 'index, follow');
    }

    setOrCreateLink('canonical', canonicalUrl);
    setOrCreateLink('alternate', canonicalUrl, 'en');
    setOrCreateLink('alternate', canonicalUrl, 'x-default');

    let scriptEl: HTMLScriptElement | null = null;
    if (schema) {
      scriptEl = document.createElement('script');
      scriptEl.type = 'application/ld+json';
      scriptEl.setAttribute('data-mpc-seo', 'true');
      scriptEl.textContent = JSON.stringify(buildJsonLd(schema));
      document.head.appendChild(scriptEl);
    }

    return () => {
      document.title = prevTitle;
      if (scriptEl?.parentNode) {
        scriptEl.parentNode.removeChild(scriptEl);
      }
    };
  }, [title, description, canonicalPath, noindex, JSON.stringify(schema)]);

  return null;
}

export const WEB_SITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'MPC Cloud Consulting',
  url: ORIGIN,
  description:
    'Oracle Cloud and AI transformation partner across India, UAE, Australia, and the UK.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${ORIGIN}/resources/?q={search_term_string}`
    },
    'query-input': 'required name=search_term_string'
  }
};

export interface OfficeLocation {
  city: string;
  country: string;
  addr: string;
  locale?: string;
}

export function buildLocalBusinessSchema(offices: OfficeLocation[]) {
  return offices.map((office) => ({
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `MPC Cloud Consulting — ${office.city}`,
    image: DEFAULT_OG_IMAGE,
    url: ORIGIN,
    telephone: '+91-000-000-0000',
    email: 'hello@mpccloudconsulting.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: office.addr,
      addressLocality: office.city,
      addressCountry: office.country
    },
    areaServed: office.country,
    parentOrganization: {
      '@type': 'Organization',
      name: 'MPC Cloud Consulting',
      url: ORIGIN
    }
  }));
}

export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'MPC Cloud Consulting',
  url: ORIGIN,
  logo: `${ORIGIN}/logo.png`,
  description:
    'Oracle Cloud and AI transformation partner across India, UAE, Australia, and the UK.',
  foundingDate: '2019',
  sameAs: [
    'https://www.linkedin.com/company/mpccloudconsulting',
    'https://twitter.com/mpccloudconsult'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@mpccloudconsulting.com',
    contactType: 'Customer Service',
    areaServed: ['IN', 'AE', 'AU', 'GB'],
    availableLanguage: ['English']
  }
};
