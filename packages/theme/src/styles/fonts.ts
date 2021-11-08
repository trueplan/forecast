import { globalCss } from "@stitches/react";

// separated font loading out for future use.
// font is loaded in the app via the index.scss file.
// font is loaded in storybook via the preview-head.html file.
export const globalFonts = globalCss({
  "@font-face": {
    fontFamily: "Inter var experimental",
    fontWeight: "100 900",
    fontDisplay: "swap",
    fontStyle: "oblique 0deg 10deg",
    src: 'url("static/media/Inter.var.woff2?v=3.19") format("woff2")',
  },
});
