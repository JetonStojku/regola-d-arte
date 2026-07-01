# Regola d'Arte website task set

This folder contains the implementation tasks for building the static multilingual dentistry clinic website in `website/`.

## Recommended execution order

1. `001-project-setup.md`
2. `002-materials-content-audit.md`
3. `003-information-architecture.md`
4. `004-i18n-content-architecture.md`
5. `005-design-system.md`
6. `006-layout-shell.md`
7. `007-seo-metadata-system.md`
8. `010-services-data-model.md`
9. `008-homepage.md`
10. `009-about-clinic-page.md`
11. `011-services-overview-page.md`
12. `012-service-conservativa-endodonzia.md`
13. `013-service-chirurgia-orale-implantologia.md`
14. `014-service-ortodonzia.md`
15. `015-service-estetica-dentale.md`
16. `016-service-igiene-prevenzione.md`
17. `017-team-section.md`
18. `018-reviews-testimonials.md`
19. `019-location-google-maps.md`
20. `020-facebook-embed.md`
21. `021-contact-page-form.md`
22. `022-local-business-schema.md`
23. `023-sitemap-robots-404.md`
24. `024-image-optimization-accessibility.md`
25. `025-performance-mobile-polish.md`
26. `026-interserver-deployment-notes.md`
27. `027-final-qa.md`
28. `028-legal-compliance-information.md`
29. `029-layout-refresh-audit.md`
30. `030-shared-header-social-shell.md`
31. `031-photo-placeholder-system.md`
32. `032-page-layout-refresh.md`
33. `033-before-after-section.md`
34. `034-layout-qa-mobile-accessibility.md`
35. `035-codex-rules-and-skills.md`

## Dependencies

- Setup dependency: all website-building tasks depend on `001-project-setup.md`.
- Content dependency: page, service, team, review, contact, map, Facebook, and schema tasks depend on `002-materials-content-audit.md`.
- Multilingual dependency: routes, page content, navigation, metadata, sitemap, and service pages depend on `003-information-architecture.md` and `004-i18n-content-architecture.md`.
- SEO dependency: page tasks should use `007-seo-metadata-system.md`; schema and sitemap tasks depend on final routes and content.
- Design dependency: page and component tasks should follow `005-design-system.md` and `006-layout-shell.md`.

## Tasks that can run independently after dependencies

- The five individual service page tasks can run in parallel after `010-services-data-model.md`, `006-layout-shell.md`, and `007-seo-metadata-system.md`.
- `017-team-section.md`, `018-reviews-testimonials.md`, `019-location-google-maps.md`, and `020-facebook-embed.md` can run independently after the content audit.
- `026-interserver-deployment-notes.md` can start once project setup and build output are known, then be finalized near the end.
- `029` through `035` should be used for layout refreshes and future owner preference updates after the first complete website pass.

## Model and reasoning guide

- Use `GPT-5.4-mini low` for straightforward page/component/content tasks:
  `002`, `008`, `009`, `011`, `012`, `013`, `014`, `015`, `016`, `017`, `018`.
- Use `GPT-5.4-mini medium` for setup, architecture, SEO, schema, forms, image optimization, performance, deployment, and final QA:
  `001`, `003`, `004`, `005`, `006`, `007`, `010`, `019`, `020`, `021`, `022`, `023`, `024`, `025`, `026`, `027`, `029`, `030`, `031`, `032`, `033`, `034`, `035`.

## Multilingual and SEO notes

- Italian is the primary language and must remain the default experience under `/it/`.
- English is secondary and must be complete under `/en/`.
- Do not hardcode visible content in components; use localized content files.
- Every localized page needs unique title, description, Open Graph metadata, canonical URL, and hreflang alternates.
- Sitemap output must include both Italian and English URLs.
- Missing translations or missing clinic facts must be explicit and tracked.

## Final deployment checklist

- [ ] `npm run build` succeeds in `website/`.
- [ ] Built output contains static HTML/CSS/JS and optimized assets.
- [ ] `/it/` and `/en/` pages work.
- [ ] Language switcher, navigation, service pages, contact page, map, reviews/fallback, and Facebook fallback/embed work.
- [ ] Titles, descriptions, canonical URLs, hreflang, JSON-LD, sitemap, robots, and 404 are verified.
- [ ] No invented clinic facts, reviews, ratings, credentials, prices, or opening hours are published.
- [ ] `materials/MISSING_CONTENT.md` contains any unresolved launch content gaps.
- [ ] Deployment notes for InterServer Windows shared hosting are complete.
