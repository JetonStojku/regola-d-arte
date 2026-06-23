# Location and Google Maps

## Goal

Add a localized location section and contact-page map using a free Google Maps iframe solution when the clinic address is confirmed.

## Recommended model

GPT-5.4-mini

## Recommended reasoning

medium

## Context

Inspect the content audit, `materials/MISSING_CONTENT.md`, and any confirmed address or map URL.

## Implementation plan

1. Confirm clinic address, city, area, and Google Maps URL from materials.
2. If confirmed, add a responsive Google Maps iframe with accessible title and lazy loading.
3. Add localized address and direction CTA content.
4. If address or map URL is missing, render a clean placeholder and track missing content.
5. Add map section to contact page and optionally footer/contact CTA area.
6. Avoid API-key-based map implementations.

## Acceptance criteria

- [ ] Map uses a free iframe solution, not a paid widget or API key.
- [ ] Address is not invented.
- [ ] Iframe is responsive and lazy-loaded.
- [ ] Section works in both languages.
- [ ] Missing address/map details are tracked if needed.

## Verification

Open the contact page and confirm the iframe loads or the placeholder appears cleanly.

## Notes / constraints

- Do not expose API keys.
- Do not guess the clinic location.
