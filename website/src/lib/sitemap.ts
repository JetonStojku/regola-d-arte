import { serviceCatalog } from '@/content/services';
import {
  getSeoAlternateLinks,
  sectionRoutes,
  type Locale,
} from '@/lib/siteArchitecture';
import { resolveCanonicalUrl } from '@/lib/seo';

export type SitemapEntry = {
  path: string;
  alternates: Record<Locale, string>;
};

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export function getPublishedSitemapEntries(): SitemapEntry[] {
  const entries: SitemapEntry[] = [
    {
      path: sectionRoutes.home.it,
      alternates: sectionRoutes.home,
    },
    {
      path: sectionRoutes.about.it,
      alternates: sectionRoutes.about,
    },
    {
      path: sectionRoutes.servicesOverview.it,
      alternates: sectionRoutes.servicesOverview,
    },
    {
      path: sectionRoutes.beforeAfter.it,
      alternates: sectionRoutes.beforeAfter,
    },
    {
      path: sectionRoutes.contact.it,
      alternates: sectionRoutes.contact,
    },
  ];

  for (const service of Object.values(serviceCatalog)) {
    entries.push({
      path: service.paths.it,
      alternates: service.paths,
    });
  }

  return entries;
}

export function renderSitemapXml(site?: URL | string): string {
  const entries = getPublishedSitemapEntries();

  const urlNodes = entries
    .map((entry) => {
      const loc = resolveCanonicalUrl(entry.path, site);
      const alternates = getSeoAlternateLinks(entry.alternates, 'it', {
        includeXDefault: true,
      })
        .map(
          (alternate) =>
            `    <xhtml:link rel="alternate" hreflang="${escapeXml(String(alternate.hreflang))}" href="${escapeXml(
              resolveCanonicalUrl(alternate.href, site),
            )}" />`,
        )
        .join('\n');

      return [
        '  <url>',
        `    <loc>${escapeXml(loc)}</loc>`,
        alternates,
        '  </url>',
      ]
        .filter(Boolean)
        .join('\n');
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urlNodes}\n</urlset>\n`;
}
