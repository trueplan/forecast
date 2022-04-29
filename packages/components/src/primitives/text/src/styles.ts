import { styled, theme } from "@trueplan/forecast-theme";

export const StyledText = styled("span", {
  color: theme.colors.textMedium,
  fontFamily: theme.fonts.inter,
  fontWeight: theme.fontWeights.medium,
  fontSize: theme.fontSizes[20],
  lineHeight: theme.lineHeights[20],
  variants: {
    color: {
      textDark: {
        color: theme.colors.textDark,
      },
      textMedium: {
        color: theme.colors.textMedium,
      },
      textLight: {
        color: theme.colors.textLight,
      },
      textInverse: {
        color: theme.colors.textInverse,
      },
      textGreen: {
        color: theme.colors.textGreen,
      },
      textRed: {
        color: theme.colors.textRed,
      },
      textBlue: {
        color: theme.colors.textBlue,
      },
    },
    cursor: {
      notAllowed: {
        cursor: "not-allowed",
      },
      pointer: {
        cursor: "pointer",
      },
      wait: {
        cursor: "wait",
      },
    },
    display: {
      block: {
        display: "block",
      },
      inline: {
        display: "inline",
      },
      inlineBlock: {
        display: "inline-block",
      },
    },
    lineHeight: {
      lineHeight5: {
        lineHeight: theme.lineHeights[5],
      },
      lineHeight10: {
        lineHeight: theme.lineHeights[10],
      },
      lineHeight20: {
        lineHeight: theme.lineHeights[20],
      },
      lineHeight30: {
        lineHeight: theme.lineHeights[30],
      },
      lineHeight40: {
        lineHeight: theme.lineHeights[40],
      },
      lineHeight50: {
        lineHeight: theme.lineHeights[50],
      },
      lineHeight60: {
        lineHeight: theme.lineHeights[60],
      },
      lineHeight70: {
        lineHeight: theme.lineHeights[70],
      },
      lineHeight80: {
        lineHeight: theme.lineHeights[80],
      },
      normal: {
        lineHeight: "normal",
      },
    },
    fontFamily: {
      inter: {
        fontFamily: theme.fonts.inter,
      },
      roboto: {
        fontFamily: theme.fonts.roboto,
      },
    },
    fontSize: {
      fontSize10: {
        fontSize: theme.fontSizes[10],
      },
      fontSize20: {
        fontSize: theme.fontSizes[20],
      },
      fontSize30: {
        fontSize: theme.fontSizes[30],
      },
      fontSize40: {
        fontSize: theme.fontSizes[40],
      },
      fontSize50: {
        fontSize: theme.fontSizes[50],
      },
      fontSize60: {
        fontSize: theme.fontSizes[60],
      },
      fontSize70: {
        fontSize: theme.fontSizes[70],
      },
      fontSize80: {
        fontSize: theme.fontSizes[80],
      },
    },
    fontWeight: {
      normal: {
        fontWeight: theme.fontWeights.normal,
      },
      medium: {
        fontWeight: theme.fontWeights.medium,
      },
      semiBold: {
        fontWeight: theme.fontWeights.semiBold,
      },
    },
    textDecoration: {
      none: {
        textDecoration: "none",
      },
      underline: {
        textDecoration: "underline",
      },
    },
    textTransform: {
      none: {
        textTransform: "none",
      },
      uppercase: {
        textTransform: "uppercase",
      },
      lowercase: {
        textTransform: "lowercase",
      },
      capitalize: {
        textTransform: "capitalize",
      },
    },
  },
});
