## 2026-06-05 - Accessibility Audit & Interaction Clarity
**Learning:** Suppressing focus outlines (`outline: none`) without providing a visible `:focus-visible` alternative severely degrades keyboard navigation. Additionally, using `cursor: pointer` on non-interactive elements creates a false affordance that confuses users.
**Action:** Always implement a high-contrast `:focus-visible` outline using theme variables. Use inset `outline-offset` for elements with `overflow: hidden` to prevent clipping. Reserve `cursor: pointer` strictly for interactive elements.
