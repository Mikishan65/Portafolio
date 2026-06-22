## 2025-06-22 - Accessibility and Interaction Clarity
**Learning:** UX Pattern: For interactive elements where overflow: hidden is used to contain animations (like background glimmers), use an inset outline-offset (e.g., -3px) to ensure keyboard focus visibility is not clipped by the container boundary. Also, ensure icon-only buttons include descriptive aria-labels while decorative icons are hidden from screen readers.
**Action:** Always check for overflow: hidden on buttons and links when defining :focus-visible styles, and audit icons for aria-hidden="true".
