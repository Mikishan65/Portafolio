## 2026-06-17 - Inset Focus Rings for Overflow Hidden
**Learning:** For interactive elements where `overflow: hidden` is used to contain animations (like background glimmers or slide effects), standard focus outlines are clipped by the container boundary, making them invisible to keyboard users.
**Action:** Use an inset `outline-offset` (e.g., `-3px`) to ensure the keyboard focus indicator remains visible within the element's layout box while maintaining high contrast.
