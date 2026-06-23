# Contact page and form

## Goal
Create localized contact pages with safe contact details, a simple static form strategy, and a `mailto:` fallback.

## Recommended model
GPT-5.4-mini

## Recommended reasoning
medium

## Context
Inspect the content audit, `materials/MISSING_CONTENT.md`, layout shell, location task, and any confirmed email/phone details.

## Implementation plan
1. Create `/it/contatti/` and `/en/contact/`.
2. Render confirmed phone, email, address, opening hours, and social links only.
3. Add a simple contact form prepared for a free static form provider.
4. If no provider endpoint is configured, use a visible `mailto:` fallback.
5. Add privacy-conscious copy and validation for name, email, phone, and message.
6. Include localized CTAs, map section, and SEO metadata.

## Acceptance criteria
- [ ] Contact pages exist in Italian and English.
- [ ] No private API keys or secrets are committed.
- [ ] Missing contact facts are not invented.
- [ ] Form works with configured free endpoint or gracefully falls back to `mailto:`.
- [ ] Basic client-side validation is present.

## Verification
Test form rendering, validation, fallback link, and localized contact links.

## Notes / constraints
- Do not add a backend unless absolutely necessary.
- Do not store submissions in the static site.
- Avoid collecting sensitive health details through the form.
