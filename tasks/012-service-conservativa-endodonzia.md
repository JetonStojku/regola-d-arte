# Service page: conservative dentistry and endodontics

## Goal
Create localized SEO-focused service pages for odontoiatria conservativa ed endodonzia.

## Recommended model
GPT-5.4-mini

## Recommended reasoning
low

## Context
Inspect the conservative dentistry/endodontics section in the source material and the services data model.

## Implementation plan
1. Generate the Italian route under `/it/servizi/`.
2. Generate the English route under `/en/services/`.
3. Explain prevention, caries/trauma treatment, minimally invasive care, fillings, and root canal treatment using source-supported wording.
4. Add a localized CTA to contact the clinic.
5. Add related links to services overview and relevant services.
6. Add localized metadata, canonical, and hreflang through the SEO system.

## Acceptance criteria
- [ ] Page exists in both languages.
- [ ] Content reflects only source-supported treatment details.
- [ ] One H1 and logical H2 sections are used.
- [ ] CTA and internal links use localized routes.
- [ ] Metadata is unique per language.

## Verification
Inspect both localized built pages and compare copy against the source service section.

## Notes / constraints
- Do not provide diagnosis or clinical instructions beyond general service information.
- Do not guarantee treatment outcomes.
