## 2025-05-15 - Focus Visibility and Decorative Icons
**Learning:** Standard UI patterns in this project used `outline: none` on interactive elements like the navigation toggle, which is a major accessibility barrier for keyboard users. Additionally, decorative icons were not hidden from screen readers, creating unnecessary noise.
**Action:** Always audit for `outline: none` and ensure it's replaced with a consistent `:focus-visible` style. Use `aria-hidden="true"` for icons that don't convey essential information.
