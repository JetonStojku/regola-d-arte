# Task: Theme Token Adaptation

## Goal

Adapt Lumio-inspired design tokens into the current website stylesheet while preserving the Regola D'arte clinic brand.

This task should improve the global visual foundation before page-specific refresh work starts.

## Recommended model

GPT-5.4-mini

## Recommended reasoning

medium

## Context

Inspect first:

* `tasks/037-lumio-theme-audit.md`
* `website/src/styles/global.css`
* `website/tailwind.config.mjs`
* `theme/lumio-lite-astro-main/src/styles/theme.css`
* `theme/lumio-lite-astro-main/src/styles/base.css`
* `theme/lumio-lite-astro-main/src/styles/components.css`
* `theme/lumio-lite-astro-main/src/styles/navigation.css`

## Implementation plan

1. Extend the current `@theme` tokens in `website/src/styles/global.css`; do not replace them wholesale.
2. Add or refine tokens for:
   * dark section background
   * inverse text
   * muted inverse text
   * light section background
   * stronger borders
   * section spacing
   * container widths inspired by Lumio's `container` and `container-2xl`
3. Keep the current clinic green/gold identity and avoid turning the site into Lumio's default blue/black agency palette.
4. Add reusable classes for:
   * full-width bands
   * dark bands
   * image-led sections
   * numbered feature tiles
   * service list rows
   * restrained hover states
5. Preserve existing classes used by current pages, including `content-band`, `info-tile`, `card`, `button`, `display-title`, `section-title`, `page-shell`, and social link classes.
6. Remove or reduce decorative radial backgrounds if they conflict with the Lumio-inspired direction, but keep the page warm and clinical.
7. Check mobile text sizing and avoid viewport-width font scaling.

## Acceptance criteria

* Current CSS classes still work.
* New tokens and classes support later Lumio-inspired sections.
* The palette still reads as Regola D'arte, not a generic tech agency theme.
* Dark sections have accessible contrast.
* No Preline, AOS, motion, or smooth-scroll CSS is imported.
* No full Lumio stylesheet is copied into the website.

## Verification

* Run `npm run build` in `website/`.
* Check `/it/` and `/en/` at mobile and desktop widths.
* Confirm header, footer, buttons, cards, social links, and existing pages are not visually broken.
* Confirm no text overflows on 360px and 390px widths.

## Notes / constraints

* Keep edits scoped mainly to `website/src/styles/global.css`.
* Do not change content, routes, schema, or page structure in this task.
* Do not add new dependencies.
* Avoid nested card-like styling for whole page sections.
