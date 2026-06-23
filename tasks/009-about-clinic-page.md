# About clinic page

## Goal

Create localized about pages based on the confirmed "CHI SIAMO" material.

## Recommended model

GPT-5.4-mini

## Recommended reasoning

low

## Context

Inspect `materials/CHI SIAMO SERVIZI ( REGOLA DARTE ITALIA ).md`, the content audit, and selected clinic/doctor photos.

## Implementation plan

1. Create `/it/chi-siamo/` and `/en/about/`.
2. Structure the page around the clinic philosophy: precision, aesthetics, science, humanity, function, and durable results.
3. Use relevant clinic or owner/doctor imagery from materials.
4. Add internal links to services and contact.
5. Add localized metadata through the SEO system.
6. Keep English as a complete translation/adaptation, not a replacement for Italian.

## Acceptance criteria

- [ ] Italian about page reflects the source material accurately.
- [ ] English about page is complete and natural.
- [ ] No unsupported claims are added.
- [ ] Page has one H1 and proper heading hierarchy.
- [ ] Images have descriptive localized alt text.

## Verification

Review both localized pages against the original Italian source copy.

## Notes / constraints

- Do not invent team member names, credentials, opening year, or awards.
- Track missing details in `materials/MISSING_CONTENT.md`.
