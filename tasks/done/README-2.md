# Lumio Migration README

Use this as the short execution guide for tasks `037`–`049`. Keep the existing `tasks/done/` history untouched.

## Order

1. `037-lumio-theme-audit.md`
2. `038-theme-token-adaptation.md`
3. `039-shared-shell-lumio-refresh.md`
4. `040-lumio-inspired-section-components.md`
5. `041-homepage-lumio-refresh.md`
6. `042-about-page-lumio-refresh.md`
7. `043-services-overview-lumio-refresh.md`
8. `044-service-detail-lumio-refresh.md`
9. `045-contact-page-lumio-refresh.md`
10. `046-media-and-placeholder-cleanup.md`
11. `047-animation-and-interaction-polish.md`
12. `048-seo-accessibility-regression.md`
13. `049-responsive-visual-qa.md`

## Dependencies

- `037` is the scope check and must come first.
- `038` depends on `037` and should land before page work.
- `039` depends on `038` because the shell uses the shared tokens.
- `040` depends on `038` and provides the reusable section patterns.
- `041`–`045` depend on `038`, `039`, and `040`.
- `044` also depends on the service data already established by the earlier content work.
- `046` can run after approved image inventory is available and can overlap with `041`–`045` once the components exist.
- `047` depends on the refreshed shell/components and can run after the page layouts are in place.
- `048` should run after the page refreshes and before final QA.
- `049` is the final visual pass after the responsive fixes are in place.

## What can run in parallel

After `040`, these can move independently when their local page prerequisites are ready:

- `041` and `042`
- `043` and `045`
- `044` for each locale/detail page set
- `046` alongside page refresh work

## Not ported from Lumio

Do **not** migrate any of these runtime pieces from `theme/lumio-lite-astro-main/`:

- generated TOML config
- Markdown/MDX collection architecture
- `[...lang]` routes
- Preline
- AOS
- smooth-scroll
- motion / magnetic hover scripts
- full Lumio CSS replacement

Keep the current `website/` architecture, TypeScript content files, bilingual routes, and local Astro components.

## Commands

Run commands from `website/`:

- `npm run build`
- `npm run preview`

## Final QA checklist

- Build succeeds in `website/`.
- Italian and English pages both render correctly.
- One H1 per public page.
- Canonical, hreflang, Open Graph, and JSON-LD still render.
- Social/contact links remain reachable.
- No horizontal scrolling on mobile widths.
- No text overflow in buttons, cards, or headers.
- Image crops are intentional.
- Footer legal links and privacy/cookie anchors work.
- No unverified clinic facts, reviews, or credentials were added.

## Deployment reminder

This site is static. After the final build, deploy the contents of `website/` build output to the static host and verify the published `/it/` and `/en/` routes.
