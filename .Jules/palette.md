## 2026-07-03 - [Accessibility and Interaction Clarity]
**Learning:** Decorative icons and purely visual markers like .focus-index and .rail-number should be marked with aria-hidden="true" to reduce screen reader noise. Additionally, interactive elements with overflow: hidden require inset focus rings (negative outline-offset) to prevent clipping.
**Action:** Always audit icons for aria-hidden="true" and use inset outline-offset for elements with overflow: hidden.
