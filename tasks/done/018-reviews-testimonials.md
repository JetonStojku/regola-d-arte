# Reviews and testimonials

## Goal

Add a free reviews/testimonials section using static/manual reviews if available, or a Google reviews/profile link fallback.

## Recommended model

GPT-5.4-mini

## Recommended reasoning

low

## Context

Inspect the content audit, `materials/MISSING_CONTENT.md`, and any available review or Google Business Profile details.

## Implementation plan

1. Check whether materials include review quotes, names, ratings, or Google Business Profile URL.
2. If static reviews are confirmed, create localized review cards.
3. If no reviews are confirmed, add a tasteful section linking to the Google Business Profile if available.
4. If neither exists, create a placeholder content path and list the missing item.
5. Add the section to homepage and optionally contact page.
6. Keep all review text source-backed.

## Acceptance criteria

- [ ] No fake reviews, ratings, names, or counts are created.
- [ ] Free/static approach is used.
- [ ] Paid review widgets are not added.
- [ ] Section works in Italian and English.
- [ ] Missing review data is tracked.

## Verification

Inspect the rendered reviews section and confirm every claim is source-backed.

## Notes / constraints

- Do not scrape Google reviews.
- Do not embed paid review widgets.
- Use official links or static content only.
