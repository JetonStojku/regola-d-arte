# Task: Lumio Theme Audit

## Goal

Audit `theme/lumio-lite-astro-main/` and produce a practical migration map for using Lumio as a visual source while preserving the existing `website/` architecture.

The output should make clear which Lumio patterns are worth adapting, which files are reference-only, and which parts must not be ported.

## Recommended model

GPT-5.4-mini

## Recommended reasoning

medium

## Context

Inspect first:

* `theme/lumio-lite-astro-main/README.md`
* `theme/lumio-lite-astro-main/LICENSE.md`
* `theme/lumio-lite-astro-main/package.json`
* `theme/lumio-lite-astro-main/src/styles/`
* `theme/lumio-lite-astro-main/src/layouts/Base.astro`
* `theme/lumio-lite-astro-main/src/layouts/components/`
* `theme/lumio-lite-astro-main/src/pages/`
* `website/package.json`
* `website/src/layouts/BaseLayout.astro`
* `website/src/styles/global.css`
* `website/src/pages/it/`
* `website/src/pages/en/`

## Implementation plan

1. Compare the current website stack with Lumio's stack.
2. List Lumio visual patterns that are useful for this site:
   * full-bleed hero
   * split image/content section
   * numbered feature tiles
   * service row list
   * dark contact band
   * stronger footer rhythm
3. List Lumio implementation details that should stay reference-only:
   * generated TOML config
   * Markdown/MDX content collections
   * `[...lang]` routing
   * Preline dropdown runtime
   * AOS/smooth-scroll/motion scripts
   * full CSS bundle replacement
4. Map each reusable visual pattern to the current pages where it should be applied.
5. Identify dependency risks and confirm that no new dependency is required for the first migration pass.
6. Record the theme license constraints, including no redistribution or resale.
7. Write the audit summary in a short markdown note under `tasks/` or as an update inside this task if no separate artifact is needed.

## Acceptance criteria

* The audit identifies visual patterns to adapt from Lumio.
* The audit explicitly documents what must not be ported.
* The audit confirms that runtime imports from `theme/lumio-lite-astro-main/` are not allowed.
* The audit preserves the current bilingual route and TypeScript content architecture.
* License constraints are recorded.
* Follow-up tasks have enough context to implement without re-deciding the migration scope.

## Verification

* Confirm the audit references actual files from both `theme/lumio-lite-astro-main/` and `website/`.
* Confirm no website source files were changed by this audit task.
* If any code is changed accidentally, revert only the accidental changes from this task and run `npm run build` in `website/`.

## Notes / constraints

* Do not migrate to Lumio's full project architecture.
* Do not add dependencies during this audit.
* Do not edit `tasks/done/`.
* Treat Italian as the primary locale and English as the secondary locale in all recommendations.
