# Homepage

## Goal

Build localized homepages that present Regola D'arte as a modern, trustworthy, premium dentistry clinic.

## Recommended model

GPT-5.4-mini

## Recommended reasoning

low

## Context

Inspect the content audit, design system, layout shell, selected hero assets, and services data.

## Implementation plan

1. Create `/it/` and `/en/` homepage routes.
2. Build a strong first viewport using real clinic or brand imagery.
3. Add sections for clinic positioning, trust signals, services preview, about preview, reviews or review fallback, and contact CTA.
4. Use Italian source content as the primary copy.
5. Add complete English content through the i18n content system.
6. Link services and contact CTAs to localized routes.

## Acceptance criteria

- [ ] Homepage exists in Italian and English.
- [ ] Italian homepage is the default primary experience.
- [ ] All visible copy comes from localized content files.
- [ ] The page has one clear H1 per language.
- [ ] CTAs link to localized services and contact pages.

## Verification

Run the dev server and inspect `/it/` and `/en/` on mobile and desktop.

## Notes / constraints

- Do not use stock-like abstract visuals when real clinic assets are available.
- Keep content polished and professional without inventing awards, years, ratings, or credentials.
