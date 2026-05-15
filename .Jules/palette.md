## 2025-05-15 - [Accessible Focus States]
**Learning:** Found a common accessibility anti-pattern where focus outlines were explicitly suppressed (`outline: none`) on interactive components, which blocks keyboard navigation.
**Action:** Always replace `outline: none` with a visible, high-contrast `:focus-visible` state using the `--brand` color to ensure the app is navigable by keyboard without affecting mouse users.
