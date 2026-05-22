## 2025-05-15 - Fixing False Affordances and Improving Focus Visibility

**Learning:** Interactive cursors (`cursor: pointer`) and hover effects (like scaling or color changes) on non-clickable elements like content rows or static tags create "false affordances" that frustrate users. Additionally, custom-styled dark themes often lack sufficient focus indicators, making keyboard navigation difficult.

**Action:** Ensure `cursor: pointer` is strictly reserved for interactive elements. Implement a global `:focus-visible` style using a high-contrast theme color (e.g., `--brand`) to guarantee accessibility across all interactive components without relying on browser defaults.
