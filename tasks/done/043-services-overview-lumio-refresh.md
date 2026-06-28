# Task: Services Overview Lumio Refresh

## Goal

Refresh the services overview pages with a Lumio-inspired service list layout using the existing service catalog data.

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
* `website/src/pages/it/servizi/index.astro`
* `website/src/pages/en/services/index.astro`
* `website/src/content/services.ts`
* `website/src/content/pages.ts`
* `website/src/content/metadata.ts`
* `website/src/lib/siteArchitecture.ts`
* `theme/lumio-lite-astro-main/src/layouts/components/cards/ServiceCard.astro`

## Implementation plan

1. Update Italian and English services overview pages together.
2. Keep current route paths and metadata.
3. Replace the grid of service cards with a Lumio-inspired service row/list layout.
4. Source all service labels, summaries, details, images, and hrefs from `getLocalizedServices(locale)`.
5. Add numbering similar to Lumio's service list, but keep it accessible and readable on mobile.
6. Keep a concise opening hero with one H1.
7. Keep or restyle the before/after section so it remains useful and visually balanced.
8. Add a localized contact CTA after the service list.
9. Ensure every service row is keyboard reachable and has a clear accessible link target.

## Acceptance criteria

* `/it/servizi/` and `/en/services/` use existing service data.
* All service links route to the correct localized service detail pages.
* The list works without hover-only content on touch devices.
* No service content is duplicated manually in page templates.
* The page keeps current SEO/schema behavior.
* Mobile rows do not become cramped or unreadable.

## Verification

* Run `npm run build` in `website/`.
* Check `/it/servizi/` and `/en/services/`.
* Check each service link in both locales.
* Check 360px, 390px, 768px, and 1280px layouts.
* Confirm one H1 per page.

## Notes / constraints

* Do not migrate services to Lumio's Markdown/MDX content collection.
* Do not copy Lumio's `ServiceCard.astro` directly if it brings collection, icon, or image-helper dependencies.
* Avoid hover-only disclosure for important service descriptions.
