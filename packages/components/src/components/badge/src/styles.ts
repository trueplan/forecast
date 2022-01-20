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
        minWidth: "$space$30",
        height: "$space$30",
      },
      medium: {
        fontSize: "$10",
        minWidth: "$space$35",
        height: "$space$35",
      },
      large: {
        fontSize: "$20",
        minWidth: "$space$40",
        height: "$space$40",
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
