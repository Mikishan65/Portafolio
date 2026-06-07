## 2025-05-14 - Interaction Clarity and Focus Visibility
**Learning:** Elements with 'overflow: hidden' (common for background animations) clip standard focus outlines. Additionally, static elements with hover effects and 'cursor: pointer' create false affordances that confuse keyboard and screen reader users.
**Action:** Use negative 'outline-offset' for focus rings on 'overflow: hidden' containers and ensure 'cursor: pointer' is reserved for truly interactive (clickable) elements.
