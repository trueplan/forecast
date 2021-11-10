import { styled, theme } from "@trueplan/forecast-theme";

export const StyledStatus = styled("div", {
  borderRadius: theme.radii[100],
  display: "inline-block",
  fontFamily: theme.fonts.inter,
  fontSize: theme.fontSizes[10],
  fontWeight: theme.fontWeights.medium,
  lineHeight: theme.lineHeights[10],
  padding: theme.space[25],
  // Setting as 1px so it matches the height set by design.
  // This padding works well with the text line-height.
  paddingTop: "1px",
  paddingBottom: "1px",
  variants: {
    color: {
      default: {
        color: theme.colors.textMedium,
      },
      gray: {
        color: theme.colors.gray70,
      },
      blue: {
        color: theme.colors.blue130,
      },
      lilac: {
        color: theme.colors.lilac130,
      },
      green: {
        color: theme.colors.green130,
      },
      yellow: {
        color: theme.colors.yellow140,
      },
      red: {
        color: theme.colors.red130,
      },
    },
    filled: {
      true: {
        backgroundColor: theme.colors.gray20,
      },
    },
  },
  compoundVariants: [
    {
      color: "default",
      filled: true,
      css: {
        backgroundColor: theme.colors.gray20,
      },
    },
    {
      color: "gray",
      filled: true,
      css: {
        backgroundColor: theme.colors.gray20,
      },
    },
    {
      color: "blue",
      filled: true,
      css: {
        backgroundColor: theme.colors.blue10,
      },
    },
    {
      color: "lilac",
      filled: true,
      css: {
        backgroundColor: theme.colors.lilac10,
      },
    },
    {
      color: "green",
      filled: true,
      css: {
        backgroundColor: theme.colors.green10,
      },
    },
    {
      color: "yellow",
      filled: true,
      css: {
        backgroundColor: theme.colors.yellow10,
      },
    },
    {
      color: "red",
      filled: true,
      css: {
        backgroundColor: theme.colors.red10,
      },
    },
  ],
});
