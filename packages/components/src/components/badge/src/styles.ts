import { styled } from "@trueplan/forecast-theme";

export const StyledBadge = styled("span", {
  borderRadius: "$30",
  color: "$white",
  fontWeight: "$semiBold",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  lineHeight: "1",
  paddingLeft: "0.25em",
  paddingRight: "0.25em",
  variants: {
    size: {
      small: {
        fontSize: "$10",
        minWidth: "1rem",
        height: "1rem",
      },
      medium: {
        fontSize: "$10",
        minWidth: "1.25rem",
        height: "1.25rem",
      },
      large: {
        fontSize: "$20",
        minWidth: "1.5rem",
        height: "1.5rem",
      },
    },
    color: {
      lilac: {
        backgroundColor: "$lilac",
      },
      green: {
        backgroundColor: "$green",
      },
      red: {
        backgroundColor: "$red",
      },
      gray: {
        backgroundColor: "$gray50",
      },
    },
    fontFamily: {
      inter: {
        fontFamily: "$inter",
      },
      roboto: {
        fontFamily: "$roboto",
      },
    },
  },
});
