import { renderSitemapXml } from '@/lib/sitemap';

export function GET({ site }: { site?: URL }) {
  return new Response(renderSitemapXml(site), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
