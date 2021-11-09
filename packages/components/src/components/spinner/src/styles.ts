import { keyframes } from "@stitches/react";
import { styled, theme } from "@forecast/theme";

const spin = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

export const StyledSpinner = styled("div", {
  display: "inline-block",
  borderColor: "currentColor",
  borderStyle: "solid",
  borderRadius: "99999px",
  borderWidth: theme.borderWidths[20],
  borderBottomColor: "transparent",
  borderLeftColor: "transparent",
  animation: `${spin} 0.45s linear infinite`,
  variants: {
    size: {
      small: {
        width: "12px",
        height: "12px",
      },
      medium: {
        width: "20px",
        height: "20px",
      },
      large: {
        width: "32px",
        height: "32px",
      },
    },
    inverse: {
      true: {
        color: theme.colors.white,
      },
    },
  },
});
