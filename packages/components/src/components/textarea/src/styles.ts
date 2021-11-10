import { styled, theme } from "@trueplan/forecast-theme";

export const StyledTextArea = styled("textarea", {
  backgroundColor: "transparent",
  border: "none",
  borderRadius: theme.radii[30],
  boxShadow: "none",
  color: "inherit",
  cursor: "auto",
  display: "block",
  fontFamily: "inherit",
  fontSize: "inherit",
  fontWeight: "inherit",
  lineHeight: "inherit",
  margin: theme.space[0],
  minHeight: "88px",
  outline: "none",
  padding: theme.space[20],
  resize: "vertical",
  width: "100%",
  "&:disabled": {
    cursor: "not-allowed",
    "-webkit-text-fill-color": theme.colors.gray70,
    "-webkit-opacity": "1",
  },
  "&::placeholder": {
    color: theme.colors.textLight,
  },
});
