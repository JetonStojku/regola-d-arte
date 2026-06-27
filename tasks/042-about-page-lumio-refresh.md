# Task: About Page Lumio Refresh

## Goal

Apply Lumio-inspired split-image and feature-grid patterns to the Italian and English about pages while preserving verified clinic, doctor, and team content.

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
* `website/src/pages/it/chi-siamo/index.astro`
* `website/src/pages/en/about/index.astro`
* `website/src/content/pages.ts`
* `website/src/content/metadata.ts`
* `website/src/lib/schema.ts`
* `website/public/brand/`

## Implementation plan

1. Update Italian and English about pages in the same task.
2. Use a Lumio-inspired split-image section for the opening content.
3. Keep one H1 per page.
4. Preserve current verified positioning:
   * precision
   * function
   * aesthetics
   * diagnosis
   * confirmed services
5. Use feature tiles for clinical approach points.
6. Keep team/doctor content cautious and source-backed.
7. Preserve the missing-content warning for unconfirmed team details.
8. Use real approved images from `website/public/brand/` where available.
9. Keep localized metadata, canonical, hreflang, and clinic schema intact.

## Acceptance criteria

* `/it/chi-siamo/` and `/en/about/` have matching structure and localized text.
* Doctor/team claims remain limited to verified content.
* The page has a stronger visual hierarchy without nested cards.
* Real imagery is used where available.
* Missing-content notes remain clear and visible.
* CTAs route to localized services and contact pages.

## Verification

* Run `npm run build` in `website/`.
* Check `/it/chi-siamo/` and `/en/about/` at mobile and desktop widths.
* Confirm one H1 per page.
* Confirm all images have accurate alt text.
* Confirm no unverified credentials or team roles were added.

## Notes / constraints

* Do not invent doctor qualifications, specialties, reviews, or team identities.
* Do not remove missing-content notices unless source materials now confirm the missing facts.
* Avoid sparse text columns beside overloaded card stacks.
