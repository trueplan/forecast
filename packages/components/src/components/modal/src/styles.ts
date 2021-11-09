import * as DialogPrimitive from "@radix-ui/react-dialog";
import { keyframes } from "@stitches/react";
import { styled, theme } from "@forecast/theme";

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

export const StyledModalOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: theme.colors.overlay,
  position: "fixed",
  inset: 0,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

export const StyledModalContent = styled(DialogPrimitive.Content, {
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.colors.white,
  borderRadius: theme.radii[30],
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxHeight: "90vh",
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    willChange: "transform",
  },
  "&:focus": { outline: "none" },
  variants: {
    size: {
      default: {
        maxWidth: "424px",
      },
      wide: {
        maxWidth: "1170px",
      },
    },
  },
});

export const StyledModalHeader = styled("header", {
  borderBottomColor: theme.colors.borderLight,
  borderBottomStyle: "solid",
  borderBottomWidth: theme.borderWidths[10],
  display: "flex",
  justifyContent: "space-between",
  px: theme.space[35],
  py: theme.space[30],
});

export const StyledSubTitle = styled("span", {
  color: theme.colors.textLight,
  display: "block",
  fontFamily: theme.fonts.inter,
  fontSize: theme.fontSizes[10],
  fontWeight: theme.fontWeights.normal,
  lineHeight: theme.lineHeights[10],
});

export const StyledModalBody = styled("div", {
  overflowY: "auto",
  padding: theme.space[35],
});

export const StyledModalFooter = styled("footer", {
  borderTopColor: theme.colors.borderLight,
  borderTopStyle: "solid",
  borderTopWidth: theme.borderWidths[10],
  display: "flex",
  justifyContent: "space-between",
  px: theme.space[35],
  py: theme.space[30],
});

export const ModalRoot = DialogPrimitive.Root;

export const ModalTrigger = DialogPrimitive.Trigger;

export const ModalClose = DialogPrimitive.Close;

export const ModalTitle = DialogPrimitive.Title;
