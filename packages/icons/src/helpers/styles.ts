import { styled, theme } from "@trueplan/forecast-theme";

export const StyledIconWrapper = styled("span", {
  display: "block",
  lineHeight: theme.lineHeights[0],
  variants: {
    color: {
      current: {
        color: "currentColor",
      },
      red: {
        color: theme.colors.red,
      },
      lilac: {
        color: theme.colors.lilac,
      },
      blue: {
        color: theme.colors.blue,
      },
      white: {
        color: theme.colors.white,
      },
      gray70: {
        color: theme.colors.gray70,
      },
      gray80: {
        color: theme.colors.gray80,
      },
      green: {
        color: theme.colors.green,
      },
      green120: {
        color: theme.colors.green120,
      },
      sky120: {
        color: theme.colors.sky120,
      },
      blue120: {
        color: theme.colors.blue120,
      },
      lilac120: {
        color: theme.colors.lilac120,
      },
      royal120: {
        color: theme.colors.royal120,
      },
      yellow110: {
        color: theme.colors.yellow110,
      },
      yellow120: {
        color: theme.colors.yellow120,
      },
      red120: {
        color: theme.colors.red120,
      },
    },
    display: {
      inlineBlock: {
        display: "inline-block",
      },
      block: {
        display: "block",
      },
      flex: {
        display: "flex",
      },
      inlineFlex: {
        display: "inline-flex",
      },
    },
    size: {
      xxsmall: {
        height: "0.625rem",
        width: "0.625rem",
      },
      xsmall: {
        height: "0.75rem",
        width: "0.75rem",
      },
      small: {
        height: "1rem",
        width: "1rem",
      },
      medium: {
        height: "1.25rem",
        width: "1.25rem",
      },
    },
  },
});
