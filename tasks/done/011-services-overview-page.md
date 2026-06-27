# Services overview page

## Goal

Build localized services overview pages that introduce all confirmed dentistry services and guide users to individual service pages.

## Recommended model

GPT-5.4-mini

## Recommended reasoning

low

## Context

Inspect the services data model, layout shell, design system, and SEO metadata system.

## Implementation plan

1. Create `/it/servizi/` and `/en/services/`.
2. Add an introductory section about accurate diagnosis and multidisciplinary treatment planning.
3. Render service cards from the structured services data.
4. Add internal links to each localized service page.
5. Add a contact CTA for booking or requesting information.
6. Add localized SEO metadata.

## Acceptance criteria

- [ ] Overview pages exist in both languages.
- [ ] All confirmed services are listed.
- [ ] Cards link to localized individual service pages.
- [ ] Italian and English copy are complete.
- [ ] Heading hierarchy and internal links support SEO.

## Verification

Open both services overview pages and verify every service link resolves correctly.

## Notes / constraints

- Do not create a single long page instead of individual service pages.
- Keep copy natural and avoid keyword stuffing.
