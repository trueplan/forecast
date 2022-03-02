import { keyframes, styled, theme } from "@trueplan/forecast-theme";
import * as ToastPrimitive from "@radix-ui/react-toast";

// theme.space[40]
const VIEWPORT_PADDING = 24;

const hide = keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 },
});

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: "translateX(0)" },
});

const StyledToastViewport = styled(ToastPrimitive.Viewport, {
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: theme.space[25],
  listStyle: "none",
  margin: theme.space[0],
  maxWidth: "100vw",
  padding: theme.space[40],
  position: "fixed",
  right: 0,
  top: 0,
  width: 390,
  zIndex: 50,
});

const StyledToastRoot = styled(ToastPrimitive.Root, {
  alignItems: "center",
  backgroundColor: theme.colors.backgroundInverse,
  borderStyle: "solid",
  borderWidth: theme.borderWidths[10],
  boxSizing: "border-box",
  padding: theme.space[40],
  display: "grid",
  gridTemplateColumns: "min-content 1fr",
  gridColumnGap: "$30",
  variants: {
    variant: {
      success: {
        borderColor: theme.colors.green,
      },
      warning: {
        borderColor: theme.colors.yellow110,
      },
      error: {
        borderColor: theme.colors.red,
      },
      info: {
        borderColor: theme.colors.gray40,
      },
    },
  },

  "@media (prefers-reduced-motion: no-preference)": {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in forwards`,
    },
  },
});

const StyledToastTitle = styled(ToastPrimitive.Title, {
  alignItems: "center",
  color: theme.colors.textMedium,
  display: "flex",
  fontFamily: theme.fonts.inter,
  fontSize: theme.fontSizes[20],
  fontWeight: theme.fontWeights.semiBold,
  justifyContent: "space-between",
});

const StyledToastDescription = styled(ToastPrimitive.Description, {
  color: theme.colors.textMedium,
  fontFamily: theme.fonts.inter,
});

const StyledToastAction = styled(ToastPrimitive.Action, {
  display: "inline-block",
  marginTop: theme.space[10],
});

export const StyledToastClose = styled(ToastPrimitive.Close, {
  padding: theme.space[0],
  border: "none",
  background: "none",
  cursor: "pointer",
  color: theme.colors.gray70,
  "&:hover": {
    color: theme.colors.gray80,
  },
  "&:focus": {
    outline: "$borderWidths$20 solid $colors$gray40 !important",
    outlineOffset: "1px",
  },
});

export const ToastProvider = ToastPrimitive.Provider;
export const ToastViewport = StyledToastViewport;
export const ToastRoot = StyledToastRoot;
export const ToastTitle = StyledToastTitle;
export const ToastDescription = StyledToastDescription;
export const ToastAction = StyledToastAction;
export const ToastClose = StyledToastClose;
