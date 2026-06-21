## 2026-06-21 - Accessibility and Interaction Clarity
**Learning:** Decorative icons should always have `aria-hidden="true"` to avoid redundant screen reader announcements. Interactive elements with `overflow: hidden` require inset focus rings (negative `outline-offset`) to prevent clipping. Non-interactive elements should not use `cursor: pointer` to avoid "false affordances".
**Action:** Audit icons for `aria-hidden`, implement inset focus rings for animated buttons, and ensure cursor styles correctly reflect interactivity.
