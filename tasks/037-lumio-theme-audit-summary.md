# Lumio Theme Audit Summary

## Scope

Audit source: [`theme/lumio-lite-astro-main/`](../theme/lumio-lite-astro-main/).
Target app: [`website/`](../website/).

Lumio is a much heavier Astro theme with its own generated config, content collections, runtime scripts, and route model. The current website already has a separate bilingual architecture, a custom layout system, and a custom visual language, so Lumio should be treated as a visual reference only.

## What Is Worth Adapting

These Lumio patterns are reusable as visual inspiration for the current site:

1. Full-bleed hero treatment
   - Lumio pattern: [`src/layouts/components/sections/HomeBannerTwo.astro`](../theme/lumio-lite-astro-main/src/layouts/components/sections/HomeBannerTwo.astro)
   - Good fit for: [`website/src/pages/it/index.astro`](../website/src/pages/it/index.astro), [`website/src/pages/en/index.astro`](../website/src/pages/en/index.astro)

2. Split image/content section
   - Lumio pattern: [`src/layouts/components/sections/AboutCompanySectionTwo.astro`](../theme/lumio-lite-astro-main/src/layouts/components/sections/AboutCompanySectionTwo.astro) and [`src/layouts/components/sections/ContactSection.astro`](../theme/lumio-lite-astro-main/src/layouts/components/sections/ContactSection.astro)
   - Good fit for: [`website/src/pages/it/chi-siamo/index.astro`](../website/src/pages/it/chi-siamo/index.astro), [`website/src/pages/en/about/index.astro`](../website/src/pages/en/about/index.astro), [`website/src/pages/it/contatti/index.astro`](../website/src/pages/it/contatti/index.astro), [`website/src/pages/en/contact/index.astro`](../website/src/pages/en/contact/index.astro)

3. Numbered feature tiles
   - Lumio pattern: [`src/layouts/components/sections/FeaturesGridTwo.astro`](../theme/lumio-lite-astro-main/src/layouts/components/sections/FeaturesGridTwo.astro)
   - Good fit for: the service preview rows and highlight blocks in [`website/src/pages/it/index.astro`](../website/src/pages/it/index.astro), [`website/src/pages/en/index.astro`](../website/src/pages/en/index.astro), and the service overview pages

4. Service row list
   - Lumio pattern: [`src/layouts/components/sections/ServiceListSection.astro`](../theme/lumio-lite-astro-main/src/layouts/components/sections/ServiceListSection.astro)
   - Good fit for: [`website/src/pages/it/servizi/index.astro`](../website/src/pages/it/servizi/index.astro), [`website/src/pages/en/services/index.astro`](../website/src/pages/en/services/index.astro)

5. Dark contact band
   - Lumio pattern: [`src/layouts/components/sections/ContactSection.astro`](../theme/lumio-lite-astro-main/src/layouts/components/sections/ContactSection.astro)
   - Good fit for: the bottom contact conversion band on home, services, and about pages in both locales

6. Stronger footer rhythm
   - Lumio pattern: [`src/layouts/components/global/Footer.astro`](../theme/lumio-lite-astro-main/src/layouts/components/global/Footer.astro)
   - Good fit for: [`website/src/layouts/BaseLayout.astro`](../website/src/layouts/BaseLayout.astro)

## Reference-Only In Lumio

These parts are useful to study, but should not be copied into the website architecture:

1. Generated TOML config and config-driven content loading
   - Evidence: `package.json` scripts in [`theme/lumio-lite-astro-main/package.json`](../theme/lumio-lite-astro-main/package.json)
   - Not a fit because the website already uses a direct TypeScript content model.

2. Markdown/MDX content collections and collection helpers
   - Evidence: [`README.md`](../theme/lumio-lite-astro-main/README.md) and Lumio content/parser imports in [`src/layouts/components/sections/ServiceListSection.astro`](../theme/lumio-lite-astro-main/src/layouts/components/sections/ServiceListSection.astro)
   - Keep the current website content architecture intact.

3. `[...lang]` routing model
   - Evidence: [`src/pages/[...lang]/index.astro`](../theme/lumio-lite-astro-main/src/pages/[...lang]/index.astro) and related service routes
   - The website should preserve its explicit `/it` and `/en` route trees.

4. Preline dropdown runtime and menu machinery
   - Evidence: [`src/layouts/components/global/header/Header.astro`](../theme/lumio-lite-astro-main/src/layouts/components/global/header/Header.astro), [`src/layouts/components/global/header/DropdownMenu.astro`](../theme/lumio-lite-astro-main/src/layouts/components/global/header/DropdownMenu.astro), [`src/layouts/components/global/header/LanguageSwitcher.astro`](../theme/lumio-lite-astro-main/src/layouts/components/global/header/LanguageSwitcher.astro)
   - The current site already has a working custom header and mobile menu.

5. AOS, smooth scroll, and motion scripts
   - Evidence: [`src/layouts/Base.astro`](../theme/lumio-lite-astro-main/src/layouts/Base.astro), [`src/layouts/components/widgets/GlobalScripts.astro`](../theme/lumio-lite-astro-main/src/layouts/components/widgets/GlobalScripts.astro), [`src/styles/animation.css`](../theme/lumio-lite-astro-main/src/styles/animation.css)
   - These runtime dependencies are not needed for the first migration pass.

6. Full CSS bundle replacement
   - Evidence: [`src/styles/global.css`](../theme/lumio-lite-astro-main/src/styles/global.css) plus the imported style layers in [`src/styles/`](../theme/lumio-lite-astro-main/src/styles/)
   - The website should keep its own `website/src/styles/global.css`.

## What Must Not Be Ported

- Do not import or runtime-reference files from `theme/lumio-lite-astro-main/` inside the website.
- Do not replace the website's bilingual route structure with Lumio's locale-catchall routing.
- Do not replace the website's TypeScript content and schema layer with Lumio's generated TOML/content-collection system.
- Do not copy Lumio's Preline-based dropdown behavior, AOS motion layer, or smooth-scroll script stack.
- Do not swap out the website's global stylesheet wholesale.
- Do not migrate Lumio's generated config files or build scripts into the website.

## Current Website Surfaces

Relevant current implementation files:

- [`website/src/layouts/BaseLayout.astro`](../website/src/layouts/BaseLayout.astro)
- [`website/src/styles/global.css`](../website/src/styles/global.css)
- [`website/src/pages/index.astro`](../website/src/pages/index.astro)
- [`website/src/pages/it/index.astro`](../website/src/pages/it/index.astro)
- [`website/src/pages/en/index.astro`](../website/src/pages/en/index.astro)
- [`website/src/pages/it/servizi/index.astro`](../website/src/pages/it/servizi/index.astro)
- [`website/src/pages/en/services/index.astro`](../website/src/pages/en/services/index.astro)
- [`website/src/pages/it/chi-siamo/index.astro`](../website/src/pages/it/chi-siamo/index.astro)
- [`website/src/pages/en/about/index.astro`](../website/src/pages/en/about/index.astro)
- [`website/src/pages/it/contatti/index.astro`](../website/src/pages/it/contatti/index.astro)
- [`website/src/pages/en/contact/index.astro`](../website/src/pages/en/contact/index.astro)

## Dependency Risk

No new dependency is required for the first migration pass.

Reason: the website already has Astro, Tailwind, and TypeScript in place, and the first pass can be implemented by adjusting page composition and existing CSS tokens instead of importing Lumio's runtime stack.

## License Constraint

Lumio Lite is free to use and modify, but the license prohibits redistribution or resale of the theme, modified or unmodified. Attribution is optional, but the theme cannot be repackaged or published as a theme asset.

## Migration Map

Priority order for follow-up work:

1. Refresh the hero treatment on the home pages to borrow Lumio's visual energy without changing page structure.
2. Rework service overview sections into stronger list/grid rhythm inspired by Lumio's service and feature blocks.
3. Strengthen about and contact pages with split-layout and dark-band treatments.
4. Improve footer balance and section spacing in the shared layout.
5. Keep the current route tree, bilingual content model, and custom form/embed behavior unchanged.

## Verification Notes

- This audit only adds a note under `tasks/`.
- No website source files are changed.
- The Lumio files referenced above are used as design references only.
