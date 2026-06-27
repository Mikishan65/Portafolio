## 2027-06-27 - Focus rings and overflow hidden
**Learning:** For interactive elements where `overflow: hidden` is used to contain animations (like background glimmers), use an inset `outline-offset` (e.g., -3px) to ensure keyboard focus visibility is not clipped by the container boundary.
**Action:** Use negative `outline-offset` for elements with `overflow: hidden` in CSS.

## 2027-06-27 - False affordance on non-interactive rows
**Learning:** Animated rows that respond to hover but aren't clickable links (like experience or project summaries) should use `cursor: default` to avoid signaling clickability.
**Action:** Signal non-clickability by using `cursor: default` on animated container elements that lack link functionality.
