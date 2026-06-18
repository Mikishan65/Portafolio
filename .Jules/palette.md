## 2024-05-24 - Accessibility and Interaction Clarity
**Learning:** Elements with `overflow: hidden` used for background animations (like the glimmers in `.nav-cta` or `.btn-main`) will clip standard focus outlines. Using a negative `outline-offset` (e.g., -3px) ensures the focus ring is visible inside the element's boundary.
**Action:** Audit interactive elements for `overflow: hidden` and use inset focus rings where necessary. Also, ensure decorative icons and structural markers (like section indexes) are hidden from screen readers using `aria-hidden="true"`.
