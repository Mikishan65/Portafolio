# 🎨 Palette's UX Journal

## 2026-05-17 - Global focus indicators and interaction clarity

**Learning:** Interactive elements must always have a clear, high-contrast focus indicator for keyboard accessibility. Conversely, non-interactive elements should never use a `cursor: pointer`, as this misleads users into thinking they can click or interact with them, causing frustration.

**Action:**
1. Always apply global `:focus-visible` styles with the brand's primary color.
2. Avoid disabling default outlines unless a better accessible alternative is provided.
3. Reserved `cursor: pointer` strictly for elements that perform an action (links, buttons, inputs).
