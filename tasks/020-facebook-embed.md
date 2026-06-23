# Facebook embed

## Goal
Add a free official Facebook page/posts embed if a confirmed Facebook page URL is available.

## Recommended model
GPT-5.4-mini

## Recommended reasoning
medium

## Context
Inspect the content audit, `materials/MISSING_CONTENT.md`, and any confirmed Facebook or Meta URL.

## Implementation plan
1. Confirm whether materials include an official Facebook page URL.
2. If available, use Meta's official free Page Plugin or embed tools.
3. Add a responsive embed section with localized heading and fallback link.
4. If no URL is available, create a clean placeholder path and track the missing URL.
5. Ensure the embed does not block page performance.
6. Add the section only where it supports the page experience.

## Acceptance criteria
- [ ] Only official free Meta/Facebook embed tools are used.
- [ ] No paid social widget is added.
- [ ] Missing Facebook URL is tracked if unavailable.
- [ ] Embed includes a fallback link.
- [ ] Section is localized.

## Verification
Run the site and confirm the embed or fallback link renders without layout breakage.

## Notes / constraints
- Do not invent or search for a page unless the project owner requests verification.
- Keep third-party scripts minimal.
