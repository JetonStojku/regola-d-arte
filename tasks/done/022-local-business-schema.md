# Local business schema

## Goal

Add localized structured data for the clinic using Schema.org LocalBusiness/Dentist where supported by confirmed materials.

## Recommended model

GPT-5.4-mini

## Recommended reasoning

medium

## Context

Inspect the content audit, SEO metadata system, contact details, location details, and service data.

## Implementation plan

1. Create a schema helper that outputs JSON-LD per locale.
2. Use `Dentist` or an appropriate local business type when source facts support it.
3. Include name, URL, logo, image, address, phone, email, opening hours, sameAs links, and services only when confirmed.
4. Localize description fields.
5. Add page-specific schema where appropriate for service pages.
6. Validate generated JSON-LD syntax.

## Acceptance criteria

- [ ] JSON-LD is valid and localized.
- [ ] Unsupported facts are omitted, not guessed.
- [ ] Clinic logo and images reference real optimized assets.
- [ ] Service schema aligns with confirmed service pages.
- [ ] Schema is included in built pages where appropriate.

## Verification

Inspect built HTML and validate JSON-LD with a structured data validator.

## Notes / constraints

- Do not add fake ratings, reviews, prices, geo coordinates, or opening hours.
- Keep schema consistent with visible page content.
