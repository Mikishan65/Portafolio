## 2025-05-14 - Accessibility and Interaction Clarity
**Learning:** For interactive elements where overflow: hidden is used to contain animations (like background glimmers), use an inset outline-offset (e.g., -3px) to ensure keyboard focus visibility is not clipped by the container boundary. Also, non-interactive elements with hover animations should use cursor: default to avoid false affordances.
**Action:** Always check for overflow: hidden on buttons and use negative outline-offset for focus rings. Audit cursor usage on animated rows to ensure they accurately reflect clickability.
