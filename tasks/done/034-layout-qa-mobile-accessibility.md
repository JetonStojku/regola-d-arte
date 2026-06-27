# Layout QA, mobile, and accessibility

## Goal

Verify the refreshed layout across screen sizes and interaction states.

## Required rules / skills

- Read `.codex/rules/regola-layout.md`.
- Use `.codex/skills/regola-layout-review/SKILL.md`.
- Use `.codex/skills/regola-mobile-nav/SKILL.md`.

## Implementation plan

1. Run `npm run build` in `website/`.
2. Check desktop, tablet, and mobile widths.
3. Verify keyboard focus, skip link, menu interaction, CTA links, social links, and anchors.
4. Confirm placeholders and images do not cause layout shifts.

## Acceptance criteria

- [ ] Production build succeeds.
- [ ] Mobile header is not dense or multi-row.
- [ ] Text does not overlap controls or images.
- [ ] Persistent social links stay usable without blocking content.

## Verification

Use browser screenshots or manual inspection after a production build.
