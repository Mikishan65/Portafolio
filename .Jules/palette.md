## 2025-01-24 - Focus Ring Clipping and Decorative Icons
**Learning:** Elements using `overflow: hidden` to contain background animations or complex layouts will clip standard external focus rings. Additionally, decorative FontAwesome icons in JS-driven components often miss `aria-hidden="true"`, causing redundant screen reader announcements.
**Action:** Use an inset focus ring (`outline-offset` with negative value) for elements with `overflow: hidden`. Always audit JS components for decorative icons and ensure they are hidden from the accessibility tree.
