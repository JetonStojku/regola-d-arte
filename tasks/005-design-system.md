# Design system

## Goal

Define a clean, modern, premium dentistry visual system using the existing Regola D'arte brand assets.

## Recommended model

GPT-5.4-mini

## Recommended reasoning

medium

## Context

Inspect logo files in `materials/photos/02-website-logos/`, representative clinic photos, and the Astro/Tailwind setup.

## Implementation plan

1. Select the preferred logo asset for web use, favoring SVG or optimized PNG.
2. Define Tailwind theme tokens for colors, typography, spacing, borders, focus states, and shadows.
3. Create reusable button, link, badge, section, and card styles.
4. Keep the visual tone professional, premium, calm, and medical.
5. Ensure contrast and focus styles meet accessibility basics.
6. Avoid one-note color palettes and decorative clutter.

## Acceptance criteria

- [ ] Brand logo is available in the website assets.
- [ ] Global CSS and Tailwind tokens are configured.
- [ ] Reusable visual primitives exist for common UI patterns.
- [ ] Design choices support readability and trust.
- [ ] Mobile and desktop spacing scales cleanly.

## Verification

Run the dev server and inspect sample components or placeholder pages across mobile and desktop widths.

## Notes / constraints

- Do not use oversized marketing-only layouts where practical clinic information should be visible.
- Do not use paid fonts unless already available and licensed.
- Keep cards at modest border radius unless the brand assets strongly suggest otherwise.
