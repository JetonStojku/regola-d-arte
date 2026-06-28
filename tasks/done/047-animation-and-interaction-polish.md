# Task: Animation And Interaction Polish

## Goal

Add minimal Lumio-inspired interaction polish using CSS and small local scripts only where useful. Keep the site fast, accessible, and dependency-light.

## Recommended model

GPT-5.4-mini

## Recommended reasoning

medium

## Context

Inspect first:

* `tasks/037-lumio-theme-audit.md`
* `tasks/038-theme-token-adaptation.md`
* `website/src/styles/global.css`
* `website/src/layouts/BaseLayout.astro`
* `website/src/components/ui/Button.astro`
* `website/src/components/ui/Card.astro`
* `website/src/components/sections/` if created
* `theme/lumio-lite-astro-main/src/layouts/components/widgets/GlobalScripts.astro`
* `theme/lumio-lite-astro-main/src/styles/animation.css`

## Implementation plan

1. Identify where motion would improve comprehension or feedback:
   * button hover
   * service row hover
   * focus states
   * subtle section reveal
2. Prefer CSS transitions and `prefers-reduced-motion` handling.
3. If reveal effects are added, use a tiny local IntersectionObserver script in the shared shell or a small component script.
4. Ensure content remains visible without JavaScript.
5. Respect `prefers-reduced-motion: reduce`.
6. Avoid importing Lumio's `GlobalScripts.astro`.
7. Avoid AOS, Preline, smooth-scroll, motion, magnetic hover, and complex text animation.
8. Keep focus styles stronger than hover styles.

## Acceptance criteria

* Interactions feel consistent with the refreshed theme.
* The site remains fully usable with JavaScript disabled.
* Reduced-motion users do not get reveal or movement-heavy effects.
* Keyboard focus states are visible.
* No new animation dependency is added.
* No layout shifts are introduced by hover or reveal states.

## Verification

* Run `npm run build` in `website/`.
* Check homepage, services overview, service detail, and contact pages.
* Test keyboard navigation.
* Test or emulate reduced motion.
* Check mobile touch behavior.
* Confirm important content is visible before any JS runs.

## Notes / constraints

* Keep animation subtle and professional for a dental clinic.
* Do not copy Lumio's full global script.
* Do not use hover-only access for important content.
