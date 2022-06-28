---
"@trueplan/forecast-components": major
---

[components]: The `css` prop has been removed from all components, except for Box. It was an error allowing it on other components as those styles should have already been set. If you need to escape the system and adjust a components style, there are two available methods:

- `style` prop as provided by React
- `styled` function provided from Stitches
