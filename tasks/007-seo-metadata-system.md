# SEO metadata system

## Goal
Implement reusable localized SEO metadata for titles, descriptions, Open Graph, canonical URLs, and hreflang links.

## Recommended model
GPT-5.4-mini

## Recommended reasoning
medium

## Context
Inspect the i18n content files, information architecture, and Astro layout/head implementation.

## Implementation plan
1. Define localized metadata fields for every page and service page.
2. Add helpers to generate canonical URLs and alternate-language URLs.
3. Render localized title, meta description, Open Graph, and Twitter card tags.
4. Add hreflang tags for `it`, `en`, and `x-default`.
5. Ensure one canonical URL per localized page.
6. Add safe defaults only for technical fallbacks, not page-specific SEO copy.

## Acceptance criteria
- [ ] Every localized page has a unique title and meta description.
- [ ] Open Graph metadata is localized.
- [ ] Canonical and hreflang tags are correct for `/it/` and `/en/`.
- [ ] SEO copy avoids keyword stuffing.
- [ ] Metadata is content-driven, not hardcoded in components.

## Verification
Inspect built HTML for at least one page in each language and one service page in each language.

## Notes / constraints
- Do not promise guaranteed rankings.
- Use Italian-first keyword strategy and natural English support.
- Use real clinic facts only.
