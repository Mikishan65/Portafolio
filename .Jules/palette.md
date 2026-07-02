# Palette's Journal - Critical UX/Accessibility Learnings

## 2026-07-02 - Icon accessibility audit and false affordance fix
**Learning:** For interactive elements where overflow: hidden is used to contain animations (like background glimmers), use an inset outline-offset (e.g., -3px) to ensure keyboard focus visibility is not clipped by the container boundary. Also, decorative icons should always be hidden from the accessibility tree to reduce noise.
**Action:** Always audit icons for aria-hidden="true" and use negative outline-offset for elements with overflow: hidden.
