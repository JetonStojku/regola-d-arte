import type { Locale } from '@/lib/siteArchitecture';

export type SeoAlternateLink = {
  hreflang: Locale | 'x-default';
  href: string;
};

export function resolveCanonicalUrl(pathname: string, site?: URL | string | undefined): string {
  const base = site ?? 'http://localhost:4321';

  return new URL(pathname, base).href;
}

