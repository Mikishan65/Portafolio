## 2025-05-14 - Accessibility and Interaction Clarity
**Learning:** Decorative icons in a component-based architecture often get overlooked in the accessibility tree, leading to redundant announcements. Interactive elements with `overflow: hidden` (often used for background animation effects) clip standard focus rings, necessitating inset outlines.
**Action:** Always audit icon usage with grep to ensure `aria-hidden="true"` is present on decorative elements. Use negative `outline-offset` for elements that contain animations with overflow: hidden to ensure focus visibility.
