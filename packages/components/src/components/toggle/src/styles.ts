import * as SwitchPrimitive from "@radix-ui/react-switch";
import { styled, theme } from "@trueplan/forecast-theme";

export const StyledToggle = styled(SwitchPrimitive.Root, {
  all: "unset",
  width: "3.125rem",
  height: "1.75rem",
  backgroundColor: theme.colors.gray40,
  borderRadius: theme.radii[100],
  position: "relative",
  "&:hover": {
    backgroundColor: theme.colors.gray60,
  },
  "&:focus": {
    backgroundColor: theme.colors.gray60,
    outline: "$borderWidths$20 solid $colors$gray60 !important",
    outlineOffset: "1px",
  },
  '&[data-state="checked"]': { backgroundColor: theme.colors.green },
  '&[data-state="checked"]:hover': { backgroundColor: theme.colors.green120 },
  '&[data-state="checked"]:focus': {
    backgroundColor: theme.colors.green120,
    outline: "$borderWidths$20 solid $colors$green120 !important",
    outlineOffset: "1px",
  },
});

export const StyledCircle = styled(SwitchPrimitive.Thumb, {
  display: "block",
  width: "1.25rem",
  height: "1.25rem",
  backgroundColor: theme.colors.white,
  borderRadius: theme.radii.circle,
  transition: "transform 100ms",
  transform: "translateX(0.313rem)",
  willChange: "transform",
  '&[data-state="checked"]': { transform: "translateX(1.563rem)" },
});

export const StyledLabel = styled("label", {
  fontFamily: theme.fonts.inter,
  fontWeight: theme.fontWeights.medium,
  fontSize: theme.fontSizes[10],
  lineHeight: theme.lineHeights[10],
  color: theme.colors.textMedium,
  userSelect: "none",
});
