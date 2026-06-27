# Task: Media And Placeholder Cleanup

## Goal

Replace placeholders where approved images already exist, keep explicit placeholders where content is still missing, and ensure all responsive image references remain valid.

## Recommended model

GPT-5.4-mini

## Recommended reasoning

low

## Context

Inspect first:

* `website/public/brand/`
* `website/src/components/PhotoPlaceholder.astro`
* `website/src/components/ui/ResponsiveImage.astro`
* `website/src/pages/it/`
* `website/src/pages/en/`
* `website/src/content/pages.ts`
* `website/src/content/services.ts`
* `materials/` if additional approved images are available

## Implementation plan

1. Inventory all `PhotoPlaceholder` usage across the website.
2. Identify placeholders that can be replaced with approved images from `website/public/brand/` or `materials/`.
3. Keep placeholders where no approved image exists, but make the placeholder text specific and useful.
4. Confirm every `ResponsiveImage` uses valid:
   * `src`
   * `width`
   * `height`
   * `widths`
   * `sizes`
   * `alt`
5. Ensure referenced resized files actually exist for every `srcset` candidate.
6. Keep clinical before/after placeholders unless patient consent and final images are confirmed.
7. Avoid stock-like or unrelated imagery.

## Acceptance criteria

* Approved real images are used where available.
* Remaining placeholders clearly state what image is missing.
* No broken image paths or missing `srcset` candidates remain.
* All images have localized or context-accurate alt text.
* Before/after placeholders are not replaced without explicit approved material.
* Mobile image crops remain usable.

## Verification

* Run `npm run build` in `website/`.
* Open all page types and check image rendering.
* Check browser console for missing image requests.
* Check mobile image crops around 360px and 390px.
* Confirm before/after content does not imply unapproved patient results.

## Notes / constraints

* Do not invent photos or clinical cases.
* Do not add remote image dependencies.
* Do not change the `ResponsiveImage` contract unless necessary.
* If content is missing, keep a clear placeholder instead of hiding the gap.
