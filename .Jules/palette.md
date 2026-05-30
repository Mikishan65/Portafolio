## 2025-05-15 - Interactive Affordance Clarity
**Learning:** Elements like `.project-row` and `.experience-row` that look like they should be interactive (via hover effects and `cursor: pointer`) but have no click action create a frustrating UX ("false affordance").
**Action:** Always verify if an element is truly interactive (has an `<a>` tag or JS listener) before adding hover animations or pointer cursors. If not interactive, use `cursor: auto` and static styles.

## 2025-05-15 - Focus Visibility Restoration
**Learning:** Removing default focus outlines with `outline: none` without providing a high-contrast alternative breaks keyboard navigation.
**Action:** Replace `outline: none` with `:focus-visible` styles that use the brand color and an appropriate `outline-offset` to ensure visibility.
