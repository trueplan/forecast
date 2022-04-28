import {
  Select as SelectPrimitive,
  SelectPopover as SelectPopoverPrimitive,
} from "ariakit/select";
import { styled, theme } from "@trueplan/forecast-theme";

export const StyledSelect = styled(SelectPrimitive, {
  appearance: "none",
  backgroundColor: "transparent",
  border: "none",
  borderRadius: theme.radii[30],
  boxShadow: "none",
  color: "inherit",
  cursor: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontFamily: "inherit",
  fontSize: "inherit",
  fontWeight: "inherit",
  lineHeight: "inherit",
  margin: theme.space[0],
  outline: "none",
  padding: theme.space[20],
  textAlign: "inherit",
  width: "100%",
  "&:disabled": {
    color: theme.colors.gray70,
    cursor: "not-allowed",
    "-webkit-text-fill-color": theme.colors.gray70,
    "-webkit-opacity": "1",
  },
});

export const StyledSelectPopover = styled(SelectPopoverPrimitive, {
  backgroundColor: theme.colors.backgroundInverse,
  borderColor: theme.colors.borderLight,
  borderRadius: theme.radii[30],
  borderStyle: "solid",
  borderWidth: theme.borderWidths[10],
  boxSizing: "border-box",
  color: theme.colors.textMedium,
  display: "flex",
  flexDirection: "column",
  fontFamily: "inherit",
  fontSize: theme.fontSizes[20],
  lineHeight: theme.lineHeights[20],
  maxHeight: "300px",
  minWidth: "180px",
  overflow: "auto",
  padding: theme.space[25],
  position: "relative",
  zIndex: 50,
});
