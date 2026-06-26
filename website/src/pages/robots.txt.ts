export function GET({ site }: { site?: URL }) {
  const base = site ?? new URL('http://localhost:4321');
  const sitemapUrl = new URL('/sitemap.xml', base).href;

  return new Response(`User-agent: *\nAllow: /\nSitemap: ${sitemapUrl}\n`, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
