## 2025-05-15 - Accessible Focus for Clipping Containers
**Learning:** For interactive elements where `overflow: hidden` is used to contain animations (like background glimmers), standard focus outlines are clipped. Using an inset focus ring (negative `outline-offset`) ensures accessibility without breaking the visual design.
**Action:** When auditing focus visibility, check if components use `overflow: hidden` and apply `outline-offset: -3px` (or similar) to keep the indicator visible within the element's bounds.
