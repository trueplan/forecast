import { styled } from "@trueplan/forecast-theme";

export const StyledStack = styled("div", {
  boxSizing: "border-box",
  display: "flex",
  variants: {
    direction: {
      horizontal: {
        flexDirection: "row",
      },
      vertical: {
        flexDirection: "column",
      },
    },
    inline: {
      true: {
        display: "inline-flex",
      },
    },
  },
});
