# Task: Shared Shell Lumio Refresh

## Goal

Refresh the shared header and footer with a cleaner Lumio-inspired presentation while preserving the current bilingual navigation, SEO, structured data, contact/social access, and mobile behavior.

## Recommended model

GPT-5.4-mini

## Recommended reasoning

medium

## Context

Inspect first:

* `tasks/037-lumio-theme-audit.md`
* `tasks/038-theme-token-adaptation.md`
* `.codex/rules/regola-layout.md`
* `website/src/layouts/BaseLayout.astro`
* `website/src/components/BrandLockup.astro`
* `website/src/components/SocialLinks.astro`
* `website/src/components/ui/Button.astro`
* `website/src/components/ui/Icon.astro`
* `website/src/content/navigation.ts`
* `website/src/content/common.ts`
* `website/src/content/ctas.ts`
* `website/src/lib/siteArchitecture.ts`
* `theme/lumio-lite-astro-main/src/layouts/components/global/header/Header.astro`
* `theme/lumio-lite-astro-main/src/layouts/components/global/Footer.astro`

## Implementation plan

1. Preserve the current `<head>` behavior, including title, description, canonical, hreflang, Open Graph, Twitter metadata, favicon links, robots, and JSON-LD.
2. Refresh the desktop header layout with clearer separation between:
   * brand lockup
   * primary navigation
   * language switcher
   * booking CTA
3. Keep the mobile header to one compact row:
   * logo
   * short booking CTA
   * menu button
4. Keep language choices inside the mobile menu.
5. Keep persistent social/contact links outside the mobile header.
6. Refresh the footer toward Lumio's stronger information bands while retaining:
   * footer navigation
   * contact CTA
   * social links
   * legal details
   * privacy/cookie anchors
   * language switcher
7. Keep the existing deferred embed initialization script unless a later task replaces it safely.
8. Verify keyboard reachability for the menu and links.

## Acceptance criteria

* The shared shell works for both Italian and English pages.
* Desktop navigation, language switcher, CTA, and social links are visually separated.
* Mobile header stays compact and does not wrap awkwardly.
* Language links are labeled and separated from primary nav.
* Floating social links do not block footer legal anchors or main CTAs.
* SEO and structured data output remains intact.
* No Preline dropdown runtime is introduced.

## Verification

* Run `npm run build` in `website/`.
* Manually check `/it/`, `/en/`, `/it/chi-siamo/`, `/en/about/`, `/it/contatti/`, and `/en/contact/`.
* Check mobile widths around 360px, 390px, and 768px.
* Check desktop around 1280px.
* Tab through header, mobile menu, footer links, and language links.

## Notes / constraints

* Do not change route definitions.
* Do not move social links into an overloaded header row.
* Do not replace the current shell with Lumio's `Header.astro` or `Footer.astro`.
* Mirror shell behavior across locales.
