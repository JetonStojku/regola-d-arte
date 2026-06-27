# Task: Responsive Visual QA

## Goal

Run a focused responsive QA pass after the Lumio-inspired redesign and fix layout issues that affect usability, readability, or visual hierarchy.

## Recommended model

GPT-5.4-mini

## Recommended reasoning

low

## Context

Inspect first:

* `.codex/rules/regola-layout.md`
* `website/src/styles/global.css`
* `website/src/layouts/BaseLayout.astro`
* refreshed components under `website/src/components/`
* all refreshed page templates under `website/src/pages/it/` and `website/src/pages/en/`

## Implementation plan

1. Start the local dev server or use a preview build.
2. Check these viewports:
   * 360px mobile
   * 390px mobile
   * 768px tablet
   * 1024px small desktop
   * 1280px desktop
3. Check all page types:
   * homepage
   * about
   * services overview
   * one Italian service detail
   * one English service detail
   * contact
   * 404 if affected
4. Fix issues with:
   * header wrapping
   * mobile menu overflow
   * social mobile bar blocking CTAs or footer links
   * text overflowing buttons/cards
   * oversized headings inside compact panels
   * sparse columns beside dense columns
   * nested card-like sections
   * image crops hiding important content
   * dark section contrast
5. Keep fixes scoped and avoid unrelated redesign.

## Acceptance criteria

* Layout is usable and polished at all target viewport widths.
* Header remains a compact row on mobile.
* Text does not overlap or overflow UI elements.
* Buttons remain readable and tappable.
* Image crops are intentional.
* Cards are not nested inside larger card-like sections.
* Footer legal links remain reachable.

## Verification

* Run `npm run build` in `website/`.
* Manually inspect the target viewport widths.
* If browser automation is available, capture screenshots for the checked pages.
* Confirm no horizontal scrolling appears on mobile.
* Confirm no layout shift is caused by hover states or lazy-loaded embeds.

## Notes / constraints

* Prioritize fixes that improve real use over decorative refinements.
* Do not hide content on mobile just to avoid layout work.
* Mirror fixes across Italian and English counterparts.
