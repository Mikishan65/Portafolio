## 2025-05-15 - [Accessibility & Affordance Harmony]
**Learning:** False affordances on non-interactive elements (e.g., `cursor: pointer` or hover scaling on static `article` tags) lead to user frustration and "click-bait" UI. Conversely, missing focus indicators on truly interactive elements isolates keyboard users. Combining the removal of misleading cues with the addition of high-visibility `:focus-visible` styles significantly clarifies the interface hierarchy.
**Action:** Perform an "Interaction Audit" on all components: ensure `cursor: pointer` and hover transforms are strictly reserved for functional elements (`<a>`, `<button>`), and always verify that these interactive elements have a visible, high-contrast focus ring.

## 2025-05-15 - [Decorative Icon Management]
**Learning:** FontAwesome icons within JavaScript template components are often overlooked by accessibility audits, causing screen readers to announce meaningless class names or "decorative" without context.
**Action:** Always include `aria-hidden="true"` on icons used purely for visual flair within JS components to maintain a clean accessibility tree.
