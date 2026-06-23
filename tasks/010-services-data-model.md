# Services data model

## Goal

Create a structured, localized services data model for the services confirmed in materials.

## Recommended model

GPT-5.4-mini

## Recommended reasoning

medium

## Context

Inspect `materials/CHI SIAMO SERVIZI ( REGOLA DARTE ITALIA ).md`, i18n architecture, and information architecture.

## Implementation plan

1. Define service entries for conservative dentistry/endodontics, oral surgery/implantology, orthodontics, dental aesthetics, and professional hygiene/prevention.
2. Include localized names, slugs, summaries, detailed sections, FAQs where source material supports them, metadata, and image references.
3. Add CTA labels and related-service references through localized content.
4. Keep medical wording accurate and cautious.
5. Add placeholders for missing images or unsupported details only when tracked in missing content.
6. Export typed service helpers for overview and individual pages.

## Acceptance criteria

- [ ] Service list matches the source material.
- [ ] Each service has Italian and English content fields.
- [ ] Slugs are localized and stable.
- [ ] Page metadata fields are included per service.
- [ ] Components can render services without hardcoded service copy.

## Verification

Type-check the service data and confirm each planned service page can be generated from it.

## Notes / constraints

- Do not add unsupported service pages such as pediatric dentistry unless materials later confirm them.
- Avoid medical guarantees and exaggerated outcome claims.
