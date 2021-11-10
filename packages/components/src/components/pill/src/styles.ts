import { styled, theme } from "@trueplan/forecast-theme";

export const StyledPill = styled("span", {
  borderStyle: "solid",
  borderRadius: theme.radii[30],
  borderWidth: theme.borderWidths[10],
  fontWeight: theme.fontWeights.semiBold,
  p: theme.space[10],
  variants: {
    color: {
      green: {
        color: theme.colors.green,
        borderColor: theme.colors.green,
      },
      blue: {
        color: theme.colors.blue,
        borderColor: theme.colors.blue,
      },
      lilac: {
        color: theme.colors.lilac,
        borderColor: theme.colors.lilac,
      },
      grey: {
        color: theme.colors.gray70,
        borderColor: theme.colors.gray70,
      },
      red: {
        color: theme.colors.red,
        borderColor: theme.colors.red,
      },
    },
    size: {
      small: {
        fontSize: "$10",
      },
      large: {
        fontSize: "$20",
      },
    },
    fontFamily: {
      roboto: {
        fontFamily: theme.fonts.roboto,
      },
    },
  },
});
