import { styled, theme } from "@trueplan/forecast-theme";

const baseBorderColor = theme.colors.gray70;

export const StyledContainer = styled("div", {
  alignItems: "center",
  border: `1px dashed`,
  borderRadius: "5px",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "center",
  padding: theme.space[40],
  variants: {
    state: {
      neutral: {
        borderColor: baseBorderColor,
      },
      accepted: {
        backgroundColor: theme.colors.gray20,
        borderColor: baseBorderColor,
        "*": {
          pointerEvents: "none",
        },
      },
      rejected: {
        borderColor: theme.colors.red,
        backgroundColor: theme.colors.red10,
        "*": {
          pointerEvents: "none",
        },
      },
    },
  },
});
