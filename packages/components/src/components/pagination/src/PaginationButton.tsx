import * as React from "react";
import { styled, theme } from "@trueplan/forecast-theme";
import { Box } from "../../../primitives/box";

export interface PaginationButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  hasIcon?: boolean;
  isCurrent?: boolean;
  label: string;
}

export const StyledPaginationButton = styled("button", {
  all: "reset",
  boxSizing: "border-box",
  appearance: "none",
  background: "none",
  color: theme.colors.textMedium,
  font: theme.fonts.inter,
  fontWeight: theme.fontWeights.medium,
  fontSize: theme.fontSizes[10],
  lineHeight: "14px",
  borderStyle: "solid",
  borderColor: theme.colors.gray50,
  borderWidth: theme.borderWidths[10],
  borderRadius: theme.radii[30],
  paddingTop: theme.space[10],
  paddingRight: theme.space[20],
  paddingBottom: theme.space[10],
  paddingLeft: theme.space[20],
  margin: theme.space[0],
  textDecoration: "none",
  outline: "none",
  transition: "background-color 100ms ease-in, border-color 100ms ease-in",
  "&:hover": {
    textDecoration: "none",
    cursor: "pointer",
    backgroundColor: theme.colors.backgroundInverse,
    borderColor: theme.colors.borderDark,
  },
  "&:focus": {
    textDecoration: "none",
    outline: "$borderWidths$10 solid $colors$gray60 !important",
    outlineOffset: "1px",
    backgroundColor: theme.colors.backgroundInverse,
    borderColor: theme.colors.borderDark,
  },
  "&:active": {
    textDecoration: "none",
    backgroundColor: theme.colors.gray20,
    borderColor: theme.colors.borderDark,
  },
  "&:disabled": { cursor: "not-allowed" },
  variants: {
    isCurrent: {
      true: {
        color: theme.colors.textInverse,
        backgroundColor: theme.colors.backgroundDark,
        borderColor: theme.colors.borderDark,
        "&:hover": {
          color: theme.colors.textInverse,
          backgroundColor: theme.colors.backgroundDark,
          borderColor: theme.colors.borderDark,
        },
        "&:focus": {
          outline: "$borderWidths$10 solid $colors$gray60 !important",
          outlineOffset: "1px",
          color: theme.colors.textInverse,
          backgroundColor: theme.colors.backgroundDark,
          borderColor: theme.colors.borderDark,
        },
        "&:active": {
          color: theme.colors.textInverse,
          backgroundColor: theme.colors.backgroundDark,
          borderColor: theme.colors.borderDark,
        },
      },
    },
    hasIcon: {
      true: {
        paddingTop: theme.space[15],
        paddingBottom: theme.space[15],
        lineHeight: theme.space[0],
        verticalAlign: "middle",
      },
    },
  },
});

const PaginationButton = React.forwardRef<
  HTMLButtonElement,
  PaginationButtonProps
>(({ children, isCurrent, label, ...props }, ref) => (
  <StyledPaginationButton
    aria-current={isCurrent}
    aria-label={label}
    isCurrent={isCurrent}
    ref={ref}
    {...props}
  >
    <Box as="span" aria-hidden="true">
      {children}
    </Box>
  </StyledPaginationButton>
));

PaginationButton.displayName = "PaginationButton";

export { PaginationButton };
