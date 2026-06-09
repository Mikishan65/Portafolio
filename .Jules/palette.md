## 2026-06-09 - Accessibility and Interaction Clarity
**Learning:** Decorative icons without `aria-hidden="true"` clutter the accessibility tree. Elements with `overflow: hidden` (often used for background animations) clip standard focus outlines. `cursor: pointer` on non-clickable rows creates false affordances.
**Action:** Always use `aria-hidden="true"` on decorative icons. Use inset `outline-offset` (negative values) for elements with `overflow: hidden` to ensure focus visibility. Use `cursor: default` for non-interactive elements even if they have hover effects.
