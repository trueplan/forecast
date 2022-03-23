import { ComboboxPopover as ComboboxPopoverPrimitive } from "ariakit/combobox";
import { styled, theme } from "@trueplan/forecast-theme";

const StyledComboboxPopover = styled(ComboboxPopoverPrimitive, {
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

export { StyledComboboxPopover as ComboboxPopover };
