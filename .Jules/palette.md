## 2025-05-14 - Accessibility and Interaction Clarity

**Learning:** Interactive elements using `overflow: hidden` (e.g., for background animations) will clip standard focus outlines. Additionally, Bootstrap's default focus suppression on togglers requires high-specificity overrides for custom focus indicators.

**Action:** Use negative `outline-offset` (e.g., `-3px`) to create inset focus rings for elements with `overflow: hidden`. Always ensure decorative icons and list markers are marked with `aria-hidden="true"` to minimize screen reader noise.
