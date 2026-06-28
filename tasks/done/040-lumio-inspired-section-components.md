# Task: Lumio-Inspired Section Components

## Goal

Create local reusable Astro section components inspired by Lumio patterns. These components must consume the current website's TypeScript content and route helpers, not Lumio collections or config.

## Recommended model

GPT-5.4-mini

## Recommended reasoning

medium

## Context

Inspect first:

* `tasks/037-lumio-theme-audit.md`
* `tasks/038-theme-token-adaptation.md`
* `website/src/components/ui/Button.astro`
* `website/src/components/ui/Card.astro`
* `website/src/components/ui/ResponsiveImage.astro`
* `website/src/components/PhotoPlaceholder.astro`
* `website/src/content/pages.ts`
* `website/src/content/services.ts`
* `website/src/lib/siteArchitecture.ts`
* `theme/lumio-lite-astro-main/src/layouts/components/sections/HomeBannerTwo.astro`
* `theme/lumio-lite-astro-main/src/layouts/components/sections/AboutCompanySectionTwo.astro`
* `theme/lumio-lite-astro-main/src/layouts/components/sections/FeaturesGridTwo.astro`
* `theme/lumio-lite-astro-main/src/layouts/components/sections/OurServicesSection.astro`
* `theme/lumio-lite-astro-main/src/layouts/components/sections/ContactSection.astro`

## Implementation plan

1. Add small local components under `website/src/components/sections/`.
2. Implement only the components needed by later page tasks:
   * full-bleed or image-led hero
   * split image/content section
   * numbered feature tile grid
   * service row list
   * dark contact CTA band
3. Keep component props simple and typed.
4. Use existing primitives where practical:
   * `Button`
   * `ResponsiveImage`
   * `PhotoPlaceholder`
   * `Icon`
5. Keep images based on public paths and the existing `ResponsiveImage` contract.
6. Ensure components support localized copy passed from current content files.
7. Avoid importing anything from `theme/lumio-lite-astro-main/` at runtime.
8. Avoid adding animation libraries in this task.

## Acceptance criteria

* New components live in `website/src/components/sections/`.
* Components are reusable across Italian and English pages.
* Components do not depend on Lumio config, Markdown collections, MDX, Preline, AOS, motion, or smooth-scroll.
* Components are responsive by default.
* Text and buttons fit on mobile.
* Components do not create cards inside cards.

## Verification

* Run `npm run build` in `website/`.
* Temporarily or actually use each component in a page touched by later tasks, then confirm it renders.
* Check components at 360px, 390px, 768px, and 1280px.
* Confirm TypeScript/Astro build errors are resolved.

## Notes / constraints

* Keep this task about component creation, not full page redesign.
* If a component is not needed by a later task, do not build it.
* Prefer boring, typed props over recreating Lumio's schema layer.
