import * as DialogPrimitive from "@radix-ui/react-dialog";
import { keyframes } from "@stitches/react";
import { styled, theme } from "@trueplan/forecast-theme";

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translateX(100%)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

export const StyledDrawerOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: "transparent",
  inset: 0,
  position: "fixed",
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

export const StyledDrawerContent = styled(DialogPrimitive.Content, {
  backgroundColor: theme.colors.white,
  borderLeftColor: theme.colors.borderLight,
  borderLeftStyle: "solid",
  borderLeftWidth: theme.borderWidths[10],
  bottom: "0",
  display: "flex",
  flexDirection: "column",
  maxWidth: "28.125rem",
  position: "fixed",
  right: "0",
  top: "0",
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${contentShow} 500ms cubic-bezier(0.16, 1, 0.3, 1)`,
    willChange: "transform",
  },
  "&:focus": { outline: "none" },
});

export const StyledDrawerHeader = styled("header", {
  borderBottomColor: theme.colors.borderLight,
  borderBottomStyle: "solid",
  borderBottomWidth: theme.borderWidths[10],
  display: "flex",
  justifyContent: "space-between",
  px: theme.space[35],
  py: theme.space[30],
});

export const StyledDrawerBody = styled("div", {
  overflowY: "auto",
  variants: {
    padding: {
      space0: {
        padding: theme.space[0],
      },
      space35: {
        padding: theme.space[35],
      },
    },
  },
});

export const DrawerRoot = DialogPrimitive.Root;

export const DrawerTrigger = DialogPrimitive.Trigger;

export const DrawerClose = DialogPrimitive.Close;

export const DrawerTitle = DialogPrimitive.Title;
