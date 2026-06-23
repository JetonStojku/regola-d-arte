# Final QA

## Goal
Run the final quality assurance checklist before deployment.

## Recommended model
GPT-5.4-mini

## Recommended reasoning
medium

## Context
Inspect the complete built website, all localized pages, SEO output, forms, embeds, and deployment notes.

## Implementation plan
1. Build and preview the site locally.
2. Check every Italian and English route.
3. Verify language switcher, canonical URLs, hreflang, sitemap, robots, and 404.
4. Verify service pages, contact page, map, Facebook fallback/embed, reviews/fallback, and forms.
5. Check accessibility basics and mobile responsiveness.
6. Confirm no placeholder facts remain without being listed in `materials/MISSING_CONTENT.md`.

## Acceptance criteria
- [ ] `npm run build` completes successfully.
- [ ] All expected localized routes work.
- [ ] No unsupported clinic facts are published.
- [ ] Metadata and structured data are valid enough for launch.
- [ ] Contact and location flows are usable.
- [ ] Deployment checklist is complete.

## Verification
Run from `website/`:

```sh
npm run build
npm run preview
```

Then manually inspect representative pages in both languages.

## Notes / constraints
- Fix critical QA issues before deployment.
- Non-critical content gaps should remain documented in `materials/MISSING_CONTENT.md`.
