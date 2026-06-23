# Team section

## Goal

Create a team or doctor section only where supported by available materials, with clear placeholders for missing names and roles.

## Recommended model

GPT-5.4-mini

## Recommended reasoning

low

## Context

Inspect `materials/photos/01-owner-and-doctore-of-clinic/`, the content audit, and `materials/MISSING_CONTENT.md`.

## Implementation plan

1. Review available owner/doctor photos and any confirmed names or roles.
2. Create a reusable localized team section component.
3. Render confirmed team information only.
4. If names, roles, qualifications, or bios are missing, use generic section copy and track missing details.
5. Place the section on the about page and optionally homepage if enough content exists.
6. Add descriptive alt text without inventing identities.

## Acceptance criteria

- [ ] Team section does not invent names, titles, or credentials.
- [ ] Missing details are listed in `materials/MISSING_CONTENT.md`.
- [ ] Photos are used respectfully and with descriptive alt text.
- [ ] Section works in both languages.
- [ ] Layout remains polished even with partial data.

## Verification

Review rendered team section against confirmed materials.

## Notes / constraints

- Do not identify people in photos unless materials explicitly provide names/roles.
- Do not add medical credentials without source confirmation.
