## 2025-05-14 - Accessibility and Interaction Clarity
**Learning:** Interactive elements in this codebase often use `overflow: hidden` to contain background animations, which clips standard focus rings. Additionally, some non-interactive components used `cursor: pointer`, creating false affordances.
**Action:** Use an inset focus ring (`outline-offset: -3px`) for elements with hidden overflow. Always verify if an element with a hover effect is actually clickable before applying a pointer cursor.
