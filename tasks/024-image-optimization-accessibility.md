# Image optimization and accessibility

## Goal

Optimize images for performance and complete an accessibility pass across key templates and pages.

## Recommended model

GPT-5.4-mini

## Recommended reasoning

medium

## Context

Inspect all used assets from `materials/photos/`, page components, layout shell, and built pages.

## Implementation plan

1. Copy only selected web-ready assets into the website source/public asset structure.
2. Convert or resize large images to efficient web formats where the stack supports it.
3. Add width, height, lazy loading, and responsive image behavior.
4. Write localized, descriptive alt text for meaningful images.
5. Mark decorative images appropriately.
6. Check headings, landmarks, labels, contrast, focus states, and keyboard navigation.

## Acceptance criteria

- [ ] Large source images are not shipped unoptimized.
- [ ] Meaningful images have localized alt text.
- [ ] Decorative images do not create screen reader noise.
- [ ] Layout does not shift heavily as images load.
- [ ] Basic accessibility issues are addressed.

## Verification

Run a production build, inspect image output sizes, and test keyboard navigation on main pages.

## Notes / constraints

- Do not publish sensitive before-after images unless the project owner confirms they are appropriate for website use.
- Do not overwrite original materials.
