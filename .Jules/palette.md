# Palette's Journal

## 2025-05-14 - Standardizing Focus and Icon Accessibility
**Learning:** Modern accessible interfaces require clear visual focus indicators and proper screen reader handling for decorative elements. The default 'outline: none' on interactive elements (like mobile toggles) is a common accessibility barrier.
**Action:** Always remove 'outline: none' from focus states and implement a global ':focus-visible' style using the project's brand color. Ensure all decorative icons in JS-rendered components include 'aria-hidden="true"'.
