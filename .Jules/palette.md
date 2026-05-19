# Palette's Journal - UX & Accessibility Learnings

## 2025-05-14 - Misleading Cursors and Missing Focus Indicators
**Learning:** Using `cursor: pointer` on non-interactive elements like layout rows (`.project-row`, `.experience-row`) creates false expectations of interactivity, leading to user frustration. Additionally, explicit `outline: none` on interactive elements like `.nav-toggle` without a replacement focus style breaks keyboard accessibility.

**Action:** Always reserve `cursor: pointer` for truly clickable elements (links, buttons). Ensure every interactive element has a visible focus indicator, preferably using `:focus-visible` to respect user preference and matching the brand's aesthetic.
