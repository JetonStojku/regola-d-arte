# Information architecture

## Goal

Define the multilingual page structure, URL map, navigation, and service slug strategy for the static website.

## Recommended model

GPT-5.4-mini

## Recommended reasoning

medium

## Context

Inspect `materials/MISSING_CONTENT.md` if present, the content audit, and Astro routing conventions in `website/`.

## Implementation plan

1. Define Italian default routes under `/it/` and English routes under `/en/`.
2. Include homepage, about, services overview, individual service pages, contact, and 404.
3. Create clean localized slugs for each service.
4. Define primary navigation and footer navigation for both languages.
5. Specify internal links between services, about, contact, and homepage sections.
6. Decide how the root `/` redirects or links to `/it/`.

## Acceptance criteria

- [ ] URL map includes all required Italian and English pages.
- [ ] Italian remains the primary/default experience.
- [ ] Service slugs are readable and localized.
- [ ] Navigation labels are language-specific.
- [ ] The root route has a clear static-friendly behavior.

## Verification

Compare the URL map against all planned page tasks and confirm no required page is missing.

## Notes / constraints

- Use `/it/` and `/en/` as the route prefixes.
- Do not create duplicate English pages that reuse Italian metadata.
- Avoid changing URLs later unless required by content gaps.
