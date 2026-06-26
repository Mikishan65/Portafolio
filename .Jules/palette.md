# Palette Journal

## 2025-05-15 - Accessibility and Interaction Clarity
**Learning:** Decorative icons should always have `aria-hidden="true"` to avoid screen reader noise. Non-interactive elements with hover animations should use `cursor: default` to avoid false affordance. Focus indicators must be visible and consistent across all interactive elements.
**Action:** Audit all components for icons without `aria-hidden`, ensure rows with hover effects are actually clickable before using `cursor: pointer`, and verify `:focus-visible` styles on all custom toggles.
