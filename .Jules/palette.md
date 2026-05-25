## 2025-05-15 - Improving Interaction Clarity and Focus Visibility

**Learning:** Interactive cues such as `cursor: pointer` and hover effects (scaling, background shifts) must be strictly reserved for clickable elements. Non-interactive containers (e.g., project rows that aren't links) should use `cursor: default` to avoid false affordances. Additionally, `outline: none` on focus is an accessibility anti-pattern that must be replaced with `:focus-visible` styles.

**Action:** Always audit CSS for misleading `cursor: pointer` and hover states on static content. Ensure `:focus-visible` is applied globally to all interactive elements using the brand's primary color.

## 2025-05-15 - Decorative Icon Accessibility

**Learning:** Decorative FontAwesome icons in JS-rendered components are often overlooked by automated a11y tools but announced by screen readers.

**Action:** Manually ensure all decorative icons include `aria-hidden="true"`. Use `grep -r "fa-" assets/js/components/ | grep -v "aria-hidden=\"true\""` to verify compliance.
