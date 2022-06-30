import * as React from "react";
import { styled, theme } from "@trueplan/forecast-theme";

const StyledHelpText = styled("span", {
  display: "block",
  color: theme.colors.textLight,
  fontFamily: theme.fonts.inter,
  fontWeight: theme.fontWeights.normal,
  fontSize: theme.fontSizes[10],
  lineHeight: theme.lineHeights[10],
  marginTop: theme.space[10],
  variants: {
    hasError: {
      true: {
        color: theme.colors.red,
      },
    },
  },
});

export interface HelpTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** The text to be displayed. */
  children: React.ReactNode;
  /** Changes the help text to its error state. The color changes to the theme red color. */
  hasError?: boolean;
}

/** Help Text is paired with a form element to give users information to prevent or correct formatting errors. */
const HelpText = React.forwardRef<HTMLSpanElement, HelpTextProps>(
  ({ children, hasError, ...props }, ref) => (
    <StyledHelpText hasError={hasError} ref={ref} {...props}>
      {children}
    </StyledHelpText>
  )
);

HelpText.displayName = "HelpText";

export { HelpText };
