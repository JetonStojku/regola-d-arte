# Sitemap, robots, and 404

## Goal
Add sitemap generation, `robots.txt`, a localized 404 page, and language-aware URL coverage.

## Recommended model
GPT-5.4-mini

## Recommended reasoning
medium

## Context
Inspect the information architecture, localized routes, Astro configuration, and SEO metadata system.

## Implementation plan
1. Configure static sitemap generation for all `/it/` and `/en/` pages.
2. Include service pages in both languages.
3. Add `robots.txt` that references the sitemap.
4. Add a clean 404 page with localized navigation back to key pages.
5. Ensure canonical URLs and sitemap URLs use the configured production site URL.
6. Document where the production domain must be configured before deployment.

## Acceptance criteria
- [ ] Sitemap includes all localized pages.
- [ ] `robots.txt` exists and references the sitemap.
- [ ] 404 page exists and is user-friendly.
- [ ] Sitemap does not include missing or draft pages.
- [ ] Production domain configuration is documented.

## Verification
Run `npm run build` and inspect generated `sitemap.xml`, `robots.txt`, and 404 output.

## Notes / constraints
- Do not use placeholder production domains in final deploy configuration without documenting them.
- Keep sitemap language coverage aligned with actual routes.
