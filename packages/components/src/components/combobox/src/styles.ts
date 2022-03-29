import {
  Combobox as ComboboxPrimitive,
  ComboboxPopover as ComboboxPopoverPrimitive,
  ComboboxItem as ComboboxItemPrimitive,
} from "ariakit/combobox";
import { styled, theme } from "@trueplan/forecast-theme";

export const StyledCombobox = styled(ComboboxPrimitive, {
  appearance: "none",
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
  outline: "none",
  padding: theme.space[20],
  paddingRight: theme.space[50],
  resize: "none",
  textAlign: "inherit",
  width: "100%",
  "&::placeholder": {
    color: theme.colors.textLight,
  },
});

export const StyledComboboxItem = styled(ComboboxItemPrimitive, {
  boxSizing: "border-box",
  alignItems: "center",
  borderRadius: theme.radii[30],
  cursor: "default",
  display: "flex",
  outline: "none",
  px: theme.space[20],
  py: theme.space[10],
  scrollMargin: theme.space[10],
  "&:hover": {
    backgroundColor: theme.colors.gray20,
  },
  "&:focus": {
    backgroundColor: theme.colors.gray20,
  },
  "&[data-active-item]": {
    backgroundColor: theme.colors.gray20,
  },
});

export const StyledComboboxPopover = styled(ComboboxPopoverPrimitive, {
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
