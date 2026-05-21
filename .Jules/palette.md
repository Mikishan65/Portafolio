## 2026-05-21 - False affordances and focus visibility
**Learning:** Reserved `cursor: pointer` strictly for interactive elements. Using it on rows that don't trigger actions (like navigation or expansion) creates a false affordance that frustrates users. Additionally, ensuring keyboard visibility by not suppressing `outline` (or using `:focus-visible`) is critical for accessibility.
**Action:** Always check if an element with `cursor: pointer` is actually interactive. Use `:focus-visible` to provide clear feedback for keyboard users without affecting mouse users.
