# Layout shell

## Goal

Build the shared page shell with header, footer, navigation, mobile menu, language switcher, and reusable layout slots.

## Recommended model

GPT-5.4-mini

## Recommended reasoning

medium

## Context

Inspect the i18n content architecture, information architecture, and design system files.

## Implementation plan

1. Create a base layout that accepts locale, metadata, alternate links, and page content.
2. Add a responsive header with logo, localized navigation, CTA, and language switcher.
3. Add an accessible mobile navigation pattern.
4. Add a footer with localized navigation, contact placeholders, legal links, and language links.
5. Ensure active navigation states work for localized routes.
6. Keep all visible labels sourced from i18n content.

## Acceptance criteria

- [ ] Header and footer render on all main pages.
- [ ] Mobile navigation is keyboard accessible.
- [ ] Language switcher links to the matching page when available.
- [ ] Italian and English navigation labels are localized.
- [ ] Layout does not require page components to duplicate shell markup.

## Verification

Run the site locally and test header, footer, mobile menu, keyboard tab order, and language switcher on `/it/` and `/en/`.

## Notes / constraints

- Do not hardcode clinic contact facts if missing from materials.
- Use placeholders only when also tracked in `materials/MISSING_CONTENT.md`.
