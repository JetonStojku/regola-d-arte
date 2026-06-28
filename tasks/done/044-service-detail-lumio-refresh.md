# Task: Service Detail Lumio Refresh

## Goal

Refresh individual service detail pages with stronger Lumio-inspired hero, section, FAQ, and related-service layouts while preserving static generation and bilingual parity.

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
* `website/src/pages/it/servizi/[slug].astro`
* `website/src/pages/en/services/[slug].astro`
* `website/src/content/services.ts`
* `website/src/content/metadata.ts`
* `website/src/lib/schema.ts`
* `website/src/lib/siteArchitecture.ts`

## Implementation plan

1. Update Italian and English service detail templates together.
2. Preserve `getStaticPaths()` behavior for both locales.
3. Preserve invalid slug redirects to the localized services overview pages.
4. Refresh the hero using the existing service hero image and localized alt text.
5. Keep one H1 per service page.
6. Present `content.sections` in a stronger layout:
   * numbered blocks or feature tiles
   * clear headings
   * readable body copy
   * optional bullet lists
7. Restyle FAQs as accessible static Q&A blocks.
8. Restyle related service CTAs using current service data and localized paths.
9. Preserve clinic schema and service schema output.
10. Avoid hover-only or JS-required behavior for core service content.

## Acceptance criteria

* All service detail pages build statically in both locales.
* Canonical and hreflang links stay correct for localized service URLs.
* Service schema remains present.
* Sections, bullets, FAQs, and related services use existing content data.
* The design is visually consistent with the refreshed services overview.
* No unverified clinical claims are added.

## Verification

* Run `npm run build` in `website/`.
* Check at least:
  * `/it/servizi/odontoiatria-conservativa-endodonzia/`
  * `/en/services/conservative-dentistry-endodontics/`
* Check one more service in each locale if time allows.
* Confirm one H1 per page.
* Confirm related service links work.
* Confirm invalid slug redirects still behave as expected.

## Notes / constraints

* Do not duplicate service data inside page templates.
* Do not switch to Lumio's collection parser.
* Keep medical/dental wording conservative and source-backed.
