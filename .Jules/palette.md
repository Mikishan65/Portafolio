## 2026-05-18 - Focus Clipping and Inset Focus Rings
**Learning:** For interactive elements where `overflow: hidden` is used to contain animations (like background glimmers or ribbons), standard focus outlines are clipped by the element's boundary. Using a negative `outline-offset` (inset focus ring) ensures keyboard accessibility remains visible.
**Action:** When applying `:focus-visible` styles to elements with `overflow: hidden`, use a negative `outline-offset` (e.g., `-3px`) to keep the focus indicator within the visible area.
