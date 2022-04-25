import { OptionUnstyled, PopperUnstyled } from "@mui/base";
import { styled, theme } from "@trueplan/forecast-theme";

export const StyledSelect = styled("button", {
  appearance: "none",
  backgroundColor: "transparent",
  border: "none",
  borderRadius: theme.radii[30],
  boxShadow: "none",
  color: "inherit",
  cursor: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontFamily: "inherit",
  fontSize: "inherit",
  fontWeight: "inherit",
  lineHeight: "inherit",
  margin: theme.space[0],
  outline: "none",
  padding: "0.6875rem",
  textAlign: "inherit",
  width: "100%",
  "&:disabled": {
    color: theme.colors.gray70,
    cursor: "not-allowed",
    "-webkit-text-fill-color": theme.colors.gray70,
    "-webkit-opacity": "1",
  },
  variants: {
    size: {
      small: {
        fontSize: theme.fontSizes[10],
        lineHeight: theme.lineHeights[5],
        padding: "0.6875rem",
      },
      medium: {
        fontSize: theme.fontSizes[20],
        lineHeight: theme.lineHeights[20],
        padding: "0.8125rem",
      },
    },
  },
});

export const StyledPopper = styled(PopperUnstyled, {
  width: "100%",
  zIndex: 1,
});

export const StyledListbox = styled("ul", {
  backgroundColor: theme.colors.white,
  borderColor: theme.colors.gray50,
  borderRadius: theme.radii[30],
  borderStyle: "solid",
  borderWidth: theme.borderWidths[10],
  fontSize: theme.fontSizes[20],
  fontWeight: theme.fontWeights.normal,
  lineHeight: theme.lineHeights[20],
  padding: theme.space[20],
  marginTop: theme.space[20],
});

export const StyledItem = styled(OptionUnstyled, {
  color: "inherit",
  cursor: "pointer",
  fontFamily: "inherit",
  fontSize: "inherit",
  fontWeight: "inherit",
  lineHeight: "inherit",
  listStyle: "none",
  "&:hover": {
    backgroundColor: theme.colors.gray20,
  },
  "&:focus": {
    backgroundColor: theme.colors.gray20,
    outline: "none",
  },
  padding: theme.space[20],
});

export const StyledOptionGroupRoot = styled("li", {
  listStyle: "none",
});

export const StyledOptionGroupLabel = styled("span", {
  all: "unset",
  color: theme.colors.textLight,
  fontSize: theme.fontSizes[10],
  lineHeight: theme.lineHeights[10],
  px: theme.space[20],
});

export const StyledOptionGroup = styled("ul", {
  color: "inherit",
  fontFamily: "inherit",
  fontSize: "inherit",
  fontWeight: "inherit",
  lineHeight: "inherit",
  listStyle: "none",
});
