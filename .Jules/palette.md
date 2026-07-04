## 2025-05-14 - Interaction and Accessibility Clarity

**Learning:** When using `overflow: hidden` on interactive elements to contain animations (like background glimmers or glitch effects), standard focus outlines are clipped and become invisible. Additionally, Bootstrap 5 may suppress focus rings on navigation toggles using `outline: 0`.

**Action:** For elements with `overflow: hidden`, implement focus indicators using a negative `outline-offset` (e.g., -3px) to ensure they remain visible within the element's boundaries. Always use `:focus-visible` with `!important` to override framework defaults and guarantee accessible keyboard navigation without affecting mouse users.
