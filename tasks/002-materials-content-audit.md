# Materials content audit

## Goal

Audit `materials/` and document all available clinic facts, assets, service copy, missing content, and usage recommendations.

## Recommended model

GPT-5.4-mini

## Recommended reasoning

low

## Context

Inspect `materials/CHI SIAMO SERVIZI ( REGOLA DARTE ITALIA ).md`, `materials/photos/`, and `materials/A regola d' Arte spot.mp4`.

## Implementation plan

1. List confirmed clinic facts from materials only.
2. Extract the Italian about text and the available dentistry services.
3. Inventory logo files, doctor/owner photos, clinic photos, before-after photos, and video assets.
4. Identify missing contact details, location, opening hours, social URLs, reviews, and team names.
5. Create or update `materials/MISSING_CONTENT.md` with unanswered questions.
6. Recommend which assets should be used for hero, about, team, service, gallery, and social preview sections.

## Acceptance criteria

- [ ] Confirmed facts are separated from assumptions.
- [ ] Missing facts are listed in `materials/MISSING_CONTENT.md`.
- [ ] Services match the source material.
- [ ] No clinic details are invented.
- [ ] Asset recommendations reference real files in `materials/`.

## Verification

Review `materials/MISSING_CONTENT.md` and confirm each missing item is actionable.

## Notes / constraints

- Italian source content is primary.
- Do not translate or rewrite long content in this task except for short labels needed for the audit.
- Before-after dental photos may be sensitive; mark them for careful, consent-aware use.
