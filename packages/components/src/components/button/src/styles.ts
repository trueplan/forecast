import { styled, theme } from "@trueplan/forecast-theme";

export const StyledButtonContents = styled("span", {
  display: "flex",
  textDecoration: "inherit",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.space[15],
  variants: {
    loading: {
      true: {
        opacity: 0,
      },
    },
  },
});

export const StyledButton = styled("button", {
  appearance: "none",
  background: "none",
  display: "inline-block",
  borderStyle: "solid",
  borderWidth: theme.borderWidths[10],
  borderRadius: theme.radii[30],
  outline: "none",
  transition: "background-color 100ms ease-in, border-color 100ms ease-in",
  fontFamily: theme.fonts.inter,
  fontWeight: theme.fontWeights.semiBold,
  textDecoration: "none",
  position: "relative",
  margin: theme.space[0],
  cursor: "pointer",
  "&:hover": { textDecoration: "none" },
  "&:focus": { textDecoration: "none" },
  "&:active": { textDecoration: "none" },
  "&:disabled": { cursor: "not-allowed" },
  variants: {
    fullWidth: {
      true: {
        width: "100%",
      },
    },
    loading: {
      true: {
        cursor: "wait",
      },
    },
    size: {
      small: {
        fontSize: theme.fontSizes[10],
        lineHeight: theme.lineHeights[10],
        px: theme.space[25],
        py: theme.space[15],
      },
      medium: {
        fontSize: theme.fontSizes[20],
        lineHeight: theme.lineHeights[20],
        px: theme.space[30],
        py: theme.space[20],
      },
      large: {
        fontSize: theme.fontSizes[30],
        lineHeight: theme.lineHeights[30],
        px: theme.space[35],
        py: theme.space[25],
      },
      iconSmall: {
        // Breaking out of the theme here to make the icon only button heights match the text button heights.
        // Might change depending on final icon sizes.
        padding: "9px",
      },
      iconMedium: {
        // Breaking out of the theme here to make the icon only button heights match the text button heights.
        // Might change depending on final icon sizes.
        padding: "12px",
      },
      iconLarge: {
        // Breaking out of the theme here to make the icon only button heights match the text button heights.
        // Might change depending on final icon sizes.
        padding: "15px",
      },
    },
    variant: {
      primary: {
        backgroundColor: theme.colors.green,
        borderColor: theme.colors.green,
        color: theme.colors.white,
        "&:hover": {
          backgroundColor: theme.colors.green110,
          borderColor: theme.colors.green110,
          color: theme.colors.white,
        },
        "&:focus": {
          backgroundColor: theme.colors.green110,
          borderColor: theme.colors.white,
          color: theme.colors.white,
          outline: "$borderWidths$20 solid $colors$green50 !important",
          outlineOffset: "1px",
        },
        "&:active": {
          backgroundColor: theme.colors.green110,
          borderColor: theme.colors.green110,
          color: theme.colors.white,
        },
        "&:disabled": {
          backgroundColor: theme.colors.gray50,
          borderColor: theme.colors.gray50,
          color: theme.colors.white,
        },
      },
      secondary: {
        backgroundColor: theme.colors.white,
        borderColor: theme.colors.gray50,
        color: theme.colors.textMedium,
        "&:hover": {
          borderColor: theme.colors.borderDark,
          color: theme.colors.textMedium,
        },
        "&:focus": {
          borderColor: theme.colors.borderDark,
          color: theme.colors.textMedium,
          outline: "$borderWidths$20 solid $colors$gray40 !important",
          outlineOffset: "1px",
        },
        "&:active": {
          backgroundColor: theme.colors.gray20,
          borderColor: theme.colors.borderDark,
          color: theme.colors.textMedium,
        },
        "&:disabled": {
          borderColor: theme.colors.gray50,
          color: theme.colors.gray60,
        },
      },
      danger: {
        backgroundColor: theme.colors.white,
        borderColor: theme.colors.red,
        color: theme.colors.red,
        "&:hover": {
          backgroundColor: theme.colors.red,
          borderColor: theme.colors.red,
          color: theme.colors.white,
        },
        "&:focus": {
          backgroundColor: theme.colors.red,
          borderColor: theme.colors.red,
          color: theme.colors.white,
          outline: "$borderWidths$20 solid $colors$red !important",
          outlineOffset: "1px",
        },
        "&:active": {
          backgroundColor: theme.colors.red110,
          borderColor: theme.colors.red110,
          color: theme.colors.white,
        },
        "&:disabled": {
          backgroundColor: theme.colors.white,
          borderColor: theme.colors.gray50,
          color: theme.colors.gray60,
        },
      },
      ghost: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: theme.colors.gray80,
        "&:hover": {
          backgroundColor: theme.colors.gray20,
          borderColor: theme.colors.gray20,
          color: theme.colors.gray80,
        },
        "&:focus": {
          backgroundColor: theme.colors.gray20,
          borderColor: theme.colors.gray20,
          color: theme.colors.gray80,
          outline: "$borderWidths$20 solid $colors$gray20 !important",
          outlineOffset: "1px",
        },
        "&:active": {
          backgroundColor: theme.colors.gray30,
          borderColor: theme.colors.gray30,
          color: theme.colors.gray80,
        },
        "&:disabled": {
          backgroundColor: theme.colors.gray50,
          borderColor: theme.colors.gray50,
          color: theme.colors.white,
        },
      },
      iconOnly: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: theme.colors.gray60,
        "&:hover": {
          backgroundColor: theme.colors.gray20,
          borderColor: theme.colors.gray20,
          color: theme.colors.textMedium,
        },
        "&:focus": {
          backgroundColor: theme.colors.gray20,
          borderColor: theme.colors.gray20,
          color: theme.colors.textMedium,
          outline: "$borderWidths$20 solid $colors$gray20 !important",
          outlineOffset: "1px",
        },
        "&:active": {
          backgroundColor: theme.colors.gray30,
          borderColor: theme.colors.gray30,
          color: theme.colors.textMedium,
        },
        "&:disabled": {
          backgroundColor: theme.colors.gray50,
          borderColor: theme.colors.gray50,
          color: theme.colors.white,
        },
      },
      inverse: {
        backgroundColor: "transparent",
        borderColor: theme.colors.gray70,
        color: theme.colors.white,
        "&:hover": {
          borderColor: theme.colors.white,
          color: theme.colors.white,
        },
        "&:focus": {
          borderColor: theme.colors.white,
          color: theme.colors.white,
          outline: "$borderWidths$20 solid $colors$gray70 !important",
          outlineOffset: "1px",
        },
        "&:active": {
          backgroundColor: theme.colors.gray80,
          borderColor: theme.colors.white,
          color: theme.colors.white,
        },
        "&:disabled": {
          borderColor: theme.colors.gray70,
          color: theme.colors.gray70,
        },
      },
    },
  },
});
