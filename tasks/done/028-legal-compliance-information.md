# Legal compliance information

## Goal

Add the legally required clinic information to the website footer and legal pages for the Italian market, using the confirmed clinic details provided by the user.

## Recommended model

GPT-5.4-mini

## Recommended reasoning

low

## Context

Inspect the shared layout, footer, contact page, privacy/cookie policy pages, social links area, and any content source files used for clinic facts.

## Implementation plan

1. Collect the required legal and contact details into a structured content source.
2. Add the clinic address, phone numbers, email, VAT number, medical director, and professional registration details to the visible site footer or legal contact section.
3. Add or confirm links to the Privacy Policy and Cookie Policy pages.
4. Add social links only for confirmed official profiles.
5. Make sure the information is shown consistently across Italian pages and in any site-wide legal footer.
6. Keep the wording natural, professional, and compliant with Italian web requirements.

## Acceptance criteria

- [ ] The site shows the clinic address: `Via Taranto 237, Lecce, CAP 73100, Italia`.
- [ ] The site shows the phone numbers: `+39 327 974 7044` and `0832 169 5809`.
- [ ] The site shows the email: `info@regola-darte.it`.
- [ ] The site shows the VAT number: `P.IVA 07173540480`.
- [ ] The site shows the medical director: `Dr. Genti Dylgjeri`.
- [ ] The site shows the dental register entry: `Iscritto all'Albo degli Odontoiatri di Firenze: 01900`.
- [ ] Privacy Policy and Cookie Policy links are present and accessible.
- [ ] Social links are included only if official profiles are confirmed.

## Verification

Check the rendered footer and legal/contact sections in the built site, then confirm the information is visible on mobile and desktop.

## Notes / constraints

- Do not invent missing legal text or social profiles.
- If Privacy Policy or Cookie Policy pages do not exist yet, create placeholders or link targets in a follow-up task.
- Keep this content separate from marketing copy so it can be updated independently.
