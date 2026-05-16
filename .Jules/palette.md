# Palette's Journal - Critical UX/Accessibility Learnings

## 2025-05-14 - [Focus Indicators in Dark Themed Modular Portfolios]
**Learning:** In highly customized dark-themed interfaces with modular components, a global `:focus-visible` indicator using the primary brand color (`--brand`) provides essential orientation for keyboard users without compromising the aesthetic. Using `outline-offset` ensures the indicator doesn't overlap with the element's border or background.
**Action:** Always implement a global `:focus-visible` rule targeting `a` and `button` as a baseline accessibility measure in these types of projects.
