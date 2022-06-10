import { styled, theme } from "@trueplan/forecast-theme";

export const StyledParagraph = styled("p", {
  fontFamily: theme.fonts.inter,
  fontWeight: theme.fontWeights.normal,
  color: theme.colors.gray70,
  marginBottom: theme.space[40],
  variants: {
    size: {
      small: {
        fontSize: theme.fontSizes[10],
        lineHeight: theme.lineHeights[10],
      },
      medium: {
        fontSize: theme.fontSizes[20],
        lineHeight: theme.lineHeights[20],
      },
    },
    color: {
      default: {
        color: theme.colors.gray70,
      },
      dark: {
        color: theme.colors.gray80,
      },
      inverse: {
        color: theme.colors.gray60,
      },
    },
    marginBottom: {
      space0: {
        marginBottom: theme.space[0],
      },
      space10: {
        marginBottom: theme.space[10],
      },
      space20: {
        marginBottom: theme.space[20],
      },
      space25: {
        marginBottom: theme.space[25],
      },
      space30: {
        marginBottom: theme.space[30],
      },
      space40: {
        marginBottom: theme.space[40],
      },
    },
  },
});
