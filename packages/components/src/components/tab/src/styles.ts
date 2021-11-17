import * as TabsPrimitive from "@radix-ui/react-tabs";
import { styled, theme } from "@trueplan/forecast-theme";

export const StyledTabs = styled(TabsPrimitive.Root, {
  display: "block",
});

export const StyledTabsList = styled(TabsPrimitive.List, {
  display: "flex",
  borderBottomColor: theme.colors.borderLight,
  borderBottomStyle: "solid",
  borderBottomWidth: theme.borderWidths[10],
  variants: {
    centered: {
      true: {
        justifyContent: "center",
      },
    },
  },
});

export const StyledTabTrigger = styled(TabsPrimitive.Trigger, {
  all: "unset",
  boxSizing: "border-box",
  borderBottomColor: "transparent",
  borderBottomStyle: "solid",
  borderBottomWidth: theme.borderWidths[20],
  color: theme.colors.textLight,
  fontFamily: theme.fonts.inter,
  fontSize: theme.fontSizes[20],
  lineHeight: theme.lineHeights[20],
  px: theme.space[25],
  py: theme.space[20],
  textAlign: "center",
  transition: "border-color 100ms ease-in, color 100ms ease-in",
  userSelect: "none",
  "&:hover": {
    color: theme.colors.royal,
    borderBottomColor: theme.colors.royal,
  },
  "&:focus": {
    color: theme.colors.royal,
    outline: "$borderWidths$10 solid $colors$royal50 !important",
  },
  '&[data-state="active"]': {
    color: theme.colors.royal,
    borderBottomColor: theme.colors.royal,
  },
});

export const StyledTabContent = styled(TabsPrimitive.Content, {
  "&:focus": {
    outline: "$borderWidths$10 solid $colors$royal50 !important",
  },
});
