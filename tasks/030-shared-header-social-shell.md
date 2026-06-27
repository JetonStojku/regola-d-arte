# Shared header and social shell

## Goal

Maintain the shared header, language switcher, CTA, mobile menu, footer, and persistent social links.

## Required rules / skills

- Read `.codex/rules/regola-layout.md`.
- Use `.codex/skills/regola-mobile-nav/SKILL.md`.

## Implementation plan

1. Keep desktop navigation, language switcher, and booking CTA visually separated.
2. Keep mobile header to logo, compact booking CTA, and menu button.
3. Put language choices and secondary links inside the mobile menu.
4. Keep social links visible through desktop rail and mobile floating actions.
5. Ensure social links do not cover content, anchors, or important controls.

## Acceptance criteria

- [ ] Mobile top nav stays one compact row.
- [ ] Language switcher is visually distinct from primary navigation.
- [ ] Social links are visible on every page.
- [ ] Header and menu remain keyboard accessible.

## Verification

Run `npm run build` in `website/`, then inspect header and floating social links at mobile and desktop widths.
