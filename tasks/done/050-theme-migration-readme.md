# Task: Theme Migration README

## Goal

Create or update a concise migration README that explains how the Lumio-inspired theme work should be executed, verified, and maintained.

## Recommended model

GPT-5.4-mini

## Recommended reasoning

low

## Context

Inspect first:

* `tasks/037-lumio-theme-audit.md`
* `tasks/038-theme-token-adaptation.md`
* `tasks/039-shared-shell-lumio-refresh.md`
* `tasks/040-lumio-inspired-section-components.md`
* `tasks/041-homepage-lumio-refresh.md`
* `tasks/042-about-page-lumio-refresh.md`
* `tasks/043-services-overview-lumio-refresh.md`
* `tasks/044-service-detail-lumio-refresh.md`
* `tasks/045-contact-page-lumio-refresh.md`
* `tasks/046-media-and-placeholder-cleanup.md`
* `tasks/047-animation-and-interaction-polish.md`
* `tasks/048-seo-accessibility-regression.md`
* `tasks/049-responsive-visual-qa.md`
* `tasks/README.md` if it exists
* `tasks/done/README.md`

## Implementation plan

1. Create or update a task README for the Lumio migration.
2. Include the recommended execution order:
   * audit
   * tokens
   * shell
   * components
   * pages
   * media
   * interactions
   * SEO/accessibility regression
   * responsive QA
3. Identify which tasks depend on earlier work.
4. Identify tasks that can run independently after components/tokens exist.
5. Record what is intentionally not ported from Lumio:
   * generated TOML config
   * Markdown/MDX collection architecture
   * `[...lang]` routes
   * Preline
   * AOS
   * smooth-scroll
   * motion/magnetic hover scripts
   * full Lumio CSS replacement
6. Include build and preview commands:
   * `npm run build`
   * `npm run preview`
7. Include final manual QA checklist.
8. Include deployment reminder for static hosting.

## Acceptance criteria

* README gives a clear execution order.
* Dependencies between tasks are explicit.
* The "not ported from Lumio" list is explicit.
* Verification commands are included.
* Final QA and deployment reminders are included.
* The README does not replace completed task history in `tasks/done/`.

## Verification

* Confirm all task numbers from `037` through `049` are referenced.
* Confirm command examples are run from `website/`.
* Confirm the README does not instruct implementers to use Lumio's full runtime architecture.
* No website build is required unless this task changes website source files.

## Notes / constraints

* Keep the README short and operational.
* Do not edit completed tasks unless explicitly required.
* Do not turn the README into a second full implementation spec.
