# Task: SEO And Accessibility Regression

## Goal

Verify that the Lumio-inspired redesign did not regress SEO, localization, schema, accessibility, or core static-site behavior.

## Recommended model

GPT-5.4-mini

## Recommended reasoning

medium

## Context

Inspect first:

* `website/src/layouts/BaseLayout.astro`
* `website/src/lib/seo.ts`
* `website/src/lib/schema.ts`
* `website/src/lib/siteArchitecture.ts`
* `website/src/content/metadata.ts`
* `website/src/pages/sitemap.xml.ts`
* `website/src/pages/robots.txt.ts`
* all page templates under `website/src/pages/it/` and `website/src/pages/en/`

## Implementation plan

1. Verify every public page has exactly one H1.
2. Verify localized titles and meta descriptions still come from content data.
3. Verify canonicals use the correct localized routes.
4. Verify hreflang alternates include Italian, English, and `x-default` where expected.
5. Verify Open Graph locale values remain correct.
6. Verify clinic JSON-LD remains present on main pages.
7. Verify service JSON-LD remains present on service detail pages.
8. Verify all meaningful images have alt text.
9. Verify form labels, required fields, and notes remain accessible.
10. Verify language switchers are labeled and keyboard reachable.
11. Verify map/Facebook embeds have accessible titles and fallback links.
12. Fix any regressions found.

## Acceptance criteria

* No SEO metadata regression is found.
* No missing canonical or hreflang links are found.
* Structured data still renders on relevant pages.
* Keyboard navigation works for header, menu, footer, CTAs, forms, and embeds.
* Forms have labels and useful validation constraints.
* Third-party embeds remain deferred and have fallback links.

## Verification

* Run `npm run build` in `website/`.
* Inspect built HTML for one Italian page, one English page, and one service detail page.
* Manually check:
   * `/it/`
   * `/en/`
   * `/it/chi-siamo/`
   * `/en/about/`
   * `/it/servizi/`
   * `/en/services/`
   * one service detail per locale
   * `/it/contatti/`
   * `/en/contact/`
* Check keyboard navigation from top to bottom on at least one mobile-width and one desktop-width page.

## Notes / constraints

* Do not change page copy unless needed to fix accessibility or SEO regression.
* Do not add fake review snippets or unverified schema data.
* Do not remove legal/privacy/cookie anchors.
