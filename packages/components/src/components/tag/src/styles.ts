import { styled, theme } from "@trueplan/forecast-theme";

export const StyledTag = styled("span", {
  boxSizing: "border-box",
  display: "inline-flex",
  backgroundColor: theme.colors.gray30,
  color: theme.colors.textMedium,
  fontFamily: theme.fonts.inter,
  fontWeight: theme.fontWeights.medium,
  alignItems: "center",
  gap: "$15",
  borderRadius: theme.radii[100],
  variants: {
    size: {
      default: {
        fontSize: theme.fontSizes[10],
        lineHeight: theme.lineHeights[5],
        paddingTop: theme.space[10],
        paddingRight: theme.space[25],
        paddingBottom: theme.space[10],
        paddingLeft: theme.space[25],
      },
      medium: {
        fontSize: theme.fontSizes[20],
        lineHeight: theme.lineHeights[5],
        paddingTop: theme.space[20],
        paddingRight: theme.space[25],
        paddingBottom: theme.space[20],
        paddingLeft: theme.space[25],
      },
    },
  },
});

export const StyledTagClose = styled("button", {
  padding: 0,
  appearance: "none",
  border: "none",
  background: "none",
  cursor: "pointer",
  color: theme.colors.gray70,
  margin: 0,
  "&:hover": {
    color: theme.colors.gray80,
  },
  "&:focus": {
    outline: "$borderWidths$20 solid $colors$gray60 !important",
    outlineOffset: "1px",
  },
});
