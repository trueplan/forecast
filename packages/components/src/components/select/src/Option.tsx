import * as React from "react";
import { styled, theme } from "@trueplan/forecast-theme";

export const StyledOption = styled("option", {
  color: "inherit",
  fontFamily: "inherit",
  fontSize: "inherit",
  fontWeight: "inherit",
  lineHeight: "inherit",
  paddingTop: theme.space[20],
  paddingBottom: theme.space[20],
  paddingLeft: theme.space[20],
});

export interface OptionProps
  extends Omit<React.OptionHTMLAttributes<HTMLOptionElement>, "css"> {
  children: React.ReactNode;
  value: string;
}

const Option = React.forwardRef<HTMLOptionElement, OptionProps>(
  ({ children, value, ...props }, ref) => {
    return (
      <StyledOption value={value} ref={ref} {...props}>
        {children}
      </StyledOption>
    );
  }
);

Option.displayName = "Option";

export { Option };
