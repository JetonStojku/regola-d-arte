# Performance and mobile polish

## Goal
Polish responsive behavior, loading performance, and core user flows across the static website.

## Recommended model
GPT-5.4-mini

## Recommended reasoning
medium

## Context
Inspect the built pages, layout shell, image handling, embeds, and contact form.

## Implementation plan
1. Test key pages at mobile, tablet, and desktop widths.
2. Fix overflow, cramped spacing, text wrapping, and navigation issues.
3. Defer or lazy-load heavy images, maps, video, and social embeds.
4. Confirm critical pages load quickly with minimal JavaScript.
5. Review CTAs and internal links for practical user flow.
6. Run Lighthouse or equivalent checks where available.

## Acceptance criteria
- [ ] No horizontal overflow on mobile.
- [ ] Header, language switcher, forms, cards, and embeds work on small screens.
- [ ] Heavy third-party embeds do not dominate initial load.
- [ ] Main pages are fast and stable.
- [ ] CTAs remain visible and useful.

## Verification
Run `npm run build`, preview the site, and check representative pages at multiple viewport sizes.

## Notes / constraints
- Prefer static HTML/CSS and minimal client-side JavaScript.
- Do not add animation or scripts that reduce clarity or performance.
