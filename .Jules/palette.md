## 2025-05-15 - Focus Visibility on Overflown Elements
**Learning:** For interactive elements where `overflow: hidden` is used (often to contain background animations or decorative effects), standard focus outlines can be clipped by the container boundary, making keyboard navigation difficult to track visually.
**Action:** Use an inset `outline-offset` (e.g., `-3px`) for such elements to ensure the focus ring remains visible within the element's bounding box.

## 2025-05-15 - Decorative Icon Hygiene
**Learning:** Decorative FontAwesome icons in JS-rendered components are often missed by standard accessibility audits but still clutter the accessibility tree for screen reader users if not explicitly hidden.
**Action:** Always include `aria-hidden="true"` on `<i>` elements used for purely decorative purposes, and ensure icon-only buttons have a descriptive `aria-label` on the parent interactive element.
