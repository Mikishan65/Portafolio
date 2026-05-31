## 2026-05-31 - Focus clipping with overflow: hidden
**Learning:** Interactive elements using `overflow: hidden` (often for background animations or glimmers) will clip the default focus ring, making it invisible to keyboard users.
**Action:** Use `:focus-visible` with a negative `outline-offset` (e.g., `-3px`) to render the focus ring inside the element's boundary.

## 2026-05-31 - False affordances on non-interactive rows
**Learning:** Using `cursor: pointer` and hover animations on non-clickable elements (like project description rows) creates a "false affordance" that leads to user frustration when clicking has no effect.
**Action:** Reserve `cursor: pointer` and hover feedback strictly for elements with defined click actions or links. Use `cursor: auto` for static content.

## 2026-05-31 - Decorative icon noise
**Learning:** FontAwesome icons without `aria-hidden="true"` are often announced by screen readers as their class names or ignored inconsistently, creating noise in the accessibility tree.
**Action:** Always add `aria-hidden="true"` to purely decorative icons, especially those within buttons or section titles.
