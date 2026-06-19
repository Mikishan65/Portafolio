## 2026-06-19 - Accessibility and Interaction Clarity
**Learning:** For interactive elements where `overflow: hidden` is used to contain animations (like background glimmers), use an inset `outline-offset` (e.g., `-3px`) to ensure keyboard focus visibility is not clipped by the container boundary. Also, `outline: none` on focus should be avoided as it breaks keyboard navigation.
**Action:** Use `:focus-visible` with a consistent brand color and handle clipping with negative offset when necessary. Mark decorative icons with `aria-hidden="true"`.
