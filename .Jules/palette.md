## 2026-06-10 - Accessibility and Interaction Clarity
**Learning:** For interactive elements where `overflow: hidden` is used to contain animations (like background glimmers), standard focus rings are clipped. Additionally, non-interactive elements with hover animations can create a false affordance that they are clickable.
**Action:** Use an inset `outline-offset` (e.g., `-3px`) for elements with `overflow: hidden` to ensure focus visibility. Explicitly set `cursor: default` for non-link elements with hover effects to manage user expectations.
