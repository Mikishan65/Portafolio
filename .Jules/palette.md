## 2025-01-24 - Inset Focus Indicators for Clipped Containers
**Learning:** Elements with `overflow: hidden` (like buttons with glimmer effects) clip standard focus outlines. Using an inset `outline-offset` (e.g., `-3px`) ensures the focus ring remains visible within the element's boundary.
**Action:** Always check for `overflow: hidden` on interactive elements and use negative `outline-offset` for their `:focus-visible` styles.
