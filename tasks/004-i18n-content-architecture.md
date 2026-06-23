# Internationalization content architecture

## Goal
Create a content architecture that supports Italian and English from the start without hardcoded page copy inside components.

## Recommended model
GPT-5.4-mini

## Recommended reasoning
medium

## Context
Inspect `website/src/`, the information architecture task output, and the audited material copy.

## Implementation plan
1. Add a typed locale model for `it` and `en`.
2. Create structured content files for navigation, common labels, pages, services, metadata, and CTAs.
3. Store Italian content first and English content separately.
4. Add helpers for locale validation, localized paths, alternate-language paths, and language switcher data.
5. Ensure components receive content as props instead of embedding copy.
6. Add comments only where future language extension needs clarification.

## Acceptance criteria
- [ ] Italian and English content are stored separately.
- [ ] Components do not hardcode visible clinic copy.
- [ ] Locale helpers support `/it/` and `/en/`.
- [ ] Adding a future language would not require redesigning routing or components.
- [ ] Missing translations are explicit placeholders, not silent fallbacks.

## Verification
Search for visible Italian or English strings inside page components and confirm they belong in content files unless they are technical constants.

## Notes / constraints
- Italian source copy is authoritative.
- English translations should be complete but can be refined later.
- Do not let English replace Italian as the default content.
