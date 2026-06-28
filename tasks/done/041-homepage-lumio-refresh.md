# Task: Homepage Lumio Refresh

## Goal

Rebuild the Italian and English homepages around Lumio-inspired section patterns while preserving current content, SEO, schema, routes, and CTAs.

## Recommended model

GPT-5.4-mini

## Recommended reasoning

medium

## Context

Inspect first:

* `tasks/037-lumio-theme-audit.md`
* `tasks/038-theme-token-adaptation.md`
* `tasks/040-lumio-inspired-section-components.md`
* `.codex/rules/regola-layout.md`
* `website/src/pages/it/index.astro`
* `website/src/pages/en/index.astro`
* `website/src/content/pages.ts`
* `website/src/content/navigation.ts`
* `website/src/content/services.ts`
* `website/src/components/BeforeAfterSection.astro`
* `website/src/lib/schema.ts`
* `website/src/lib/siteArchitecture.ts`

## Implementation plan

1. Update both homepages together; do not redesign only one locale.
2. Replace the current card-heavy hero with a Lumio-inspired image-led hero using real clinic imagery.
3. Keep one clear H1 per homepage.
4. Preserve current metadata, canonical URL, hreflang links, language switcher links, and clinic schema.
5. Add a services preview using the new service row/list or feature tile component.
6. Convert story/trust/contact content into balanced full-width bands or feature tiles.
7. Keep `BeforeAfterSection` available, but restyle or place it so it fits the new rhythm.
8. Add a strong contact CTA band near the bottom.
9. Remove or reduce placeholders where real approved images already exist.
10. Verify that buttons route to the localized services and contact pages.

## Acceptance criteria

* `/it/` and `/en/` share the same layout structure with localized copy.
* The first viewport clearly signals Regola D'arte and the clinic offer.
* The hero is not a generic marketing split card.
* Existing SEO/schema wiring remains intact.
* Service links use `getLocalizedServices(locale)` data.
* No invented reviews, credentials, or clinic facts are added.
* Mobile layout is balanced and readable.

## Verification

* Run `npm run build` in `website/`.
* Check `/it/` and `/en/` at 360px, 390px, 768px, and 1280px.
* Confirm one H1 per page.
* Confirm localized CTAs and service links are correct.
* Confirm no text overlaps images or buttons.

## Notes / constraints

* Do not move homepage content into Markdown or MDX.
* Do not add Lumio runtime dependencies.
* Keep Italian as the primary source of UX quality.
* Avoid decorative placeholder sections when approved real images exist.
