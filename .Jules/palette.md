## 2024-05-27 - Focus Outlines and Overflow
**Learning:** In design systems using `overflow: hidden` for buttons (often to contain shimmer or fill animations), standard external focus outlines will be clipped.
**Action:** Use an inset outline (`outline-offset` with a negative value) for these specific components to maintain accessibility without compromising visual animations.
