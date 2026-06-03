# Palette's UX Journal

## 2025-05-14 - Inset Focus Rings for Overflow Hidden
**Learning:** Interactive elements using `overflow: hidden` to contain animations (like background glimmers) clip standard focus outlines, making them invisible to keyboard users.
**Action:** When `overflow: hidden` is present on a clickable element, use an inset focus ring by applying a negative `outline-offset` (e.g., `-3px`) to ensure the indicator remains visible within the element's bounds.
