import { styled, theme } from "@trueplan/forecast-theme";

export const StyledHeading = styled("h1", {
  color: theme.colors.gray80,
  fontFamily: theme.fonts.inter,
  fontWeight: theme.fontWeights.semiBold,
  variants: {
    marginBottom: {
      space0: {
        marginBottom: theme.space[0],
      },
      space40: {
        marginBottom: theme.space[40],
      },
    },
    size: {
      heading60: {
        fontSize: "$10",
        lineHeight: "$10",
      },
      heading50: {
        fontSize: "$20",
        lineHeight: "$20",
      },
      heading40: {
        fontSize: "$30",
        lineHeight: "$30",
      },
      heading30: {
        fontSize: "$40",
        lineHeight: "$40",
      },
      heading20: {
        fontSize: "$50",
        lineHeight: "$50",
      },
      heading10: {
        fontSize: "$60",
        lineHeight: "$60",
      },
    },
  },
});
