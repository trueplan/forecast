import { ComboboxItem as ComboboxItemPrimitive } from "ariakit/combobox";
import { styled, theme } from "@trueplan/forecast-theme";

const StyledComboboxItem = styled(ComboboxItemPrimitive, {
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

export { StyledComboboxItem as ComboboxItem };
