import { styled } from "@trueplan/forecast-theme";

export const StyledStack = styled("div", {
  boxSizing: "border-box",
  variants: {
    direction: {
      horizontal: {
        display: "flex",
        flexDirection: "row",
      },
      vertical: {
        display: "block",
      },
    },
    inline: {
      true: {
        display: "inline-flex",
      },
    },
  },
});
