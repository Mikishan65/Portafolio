## 2025-05-15 - Accessibility and Interaction Clarity
**Learning:** For interactive elements where overflow: hidden is used to contain animations (like background glimmers), use an inset outline-offset (e.g., -3px) to ensure keyboard focus visibility is not clipped by the container boundary. Decorative icons and markers should be marked with aria-hidden="true" to reduce screen reader noise.
**Action:** Use negative outline-offset for clipped focus rings and audit icons for aria-hidden in future UI tasks.
