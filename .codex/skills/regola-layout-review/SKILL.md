---
name: regola-layout-review
description: Review or modify Regola D'arte website page layouts. Use when working on section balance, desktop/mobile composition, card density, header/footer spacing, or overall visual hierarchy in the Astro website.
---

# Regola Layout Review

Before editing a page layout:

1. Read `.codex/rules/regola-layout.md`.
2. Inspect the target page and its English/Italian counterpart.
3. Identify whether the issue is shared shell, page template, component, or content.
4. Prefer balanced content bands, stable grids, and purposeful visuals.
5. Avoid fixing one locale without mirroring the other.

Before finishing:

- Check that no column is mostly empty while another column carries stacked dense content.
- Check that cards are not nested inside larger card-like sections.
- Check that headings, buttons, and placeholders fit on mobile.
- Run `npm run build` in `website/` when code changed.
