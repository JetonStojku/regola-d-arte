# Task: Contact Page Lumio Refresh

## Goal

Apply a Lumio-inspired dark contact treatment to the contact pages while preserving the current form fallback, map embed, Facebook embed, legal anchors, contact details, and accessibility.

## Recommended model

GPT-5.4-mini

## Recommended reasoning

medium

## Context

Inspect first:

* `tasks/037-lumio-theme-audit.md`
* `tasks/038-theme-token-adaptation.md`
* `tasks/040-lumio-inspired-section-components.md`
* `.codex/rules/regola-layout.md`
* `website/src/pages/it/contatti/index.astro`
* `website/src/pages/en/contact/index.astro`
* `website/src/components/ContactForm.astro`
* `website/src/components/ui/DeferredEmbed.astro`
* `website/src/content/pages.ts`
* `website/src/content/metadata.ts`
* `website/src/lib/schema.ts`
* `theme/lumio-lite-astro-main/src/layouts/components/sections/ContactSection.astro`

## Implementation plan

1. Update Italian and English contact pages together.
2. Keep current metadata, canonical, hreflang, and clinic schema.
3. Use a dark contact band for the main contact/form area.
4. Preserve `ContactForm.astro` behavior:
   * `PUBLIC_CONTACT_FORM_ACTION` support
   * `mailto:` fallback
   * required fields
   * privacy/sensitive-data notes
5. Preserve quick action links:
   * directions
   * phone
   * WhatsApp
   * email
6. Preserve deferred Google Maps and Facebook embeds.
7. Preserve legal detail, privacy policy, and cookie policy anchors.
8. Ensure dark backgrounds have accessible contrast and visible focus states.
9. Keep third-party embeds lazy/deferred and with fallbacks.

## Acceptance criteria

* `/it/contatti/` and `/en/contact/` share the same structure with localized copy.
* Form submission and mailto fallback still work.
* Map and Facebook embeds remain deferred and have fallback links.
* Legal anchors continue to work from footer links.
* All form labels remain programmatically associated with inputs.
* No backend, paid widget, or API key is introduced.

## Verification

* Run `npm run build` in `website/`.
* Check `/it/contatti/` and `/en/contact/`.
* Test form rendering with and without `PUBLIC_CONTACT_FORM_ACTION`.
* Click mailto fallback, directions, phone, WhatsApp, email, Google Maps listing, and Facebook listing links.
* Check privacy and cookie anchor links from the footer.
* Check mobile and desktop layouts.

## Notes / constraints

* Do not collect sensitive health details.
* Do not remove fallback links for third-party embeds.
* Do not add analytics or tracking scripts.
* Do not import Lumio's contact form widget directly.
