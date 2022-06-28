import * as React from "react";
import { styled, theme } from "@trueplan/forecast-theme";

export const StyledOptionGroup = styled("optgroup", {
  color: "inherit",
  fontFamily: "inherit",
  fontSize: "inherit",
  fontWeight: theme.fontWeights.semiBold,
  lineHeight: "inherit",
  margin: theme.space[10],
});

export interface OptionGroupProps
  extends React.OptgroupHTMLAttributes<HTMLOptGroupElement> {
  children: React.ReactNode;
  label: string;
}

const OptionGroup = React.forwardRef<HTMLOptGroupElement, OptionGroupProps>(
  ({ children, label, ...props }, ref) => {
    return (
      <StyledOptionGroup label={label} ref={ref} {...props}>
        {children}
      </StyledOptionGroup>
    );
  }
);

OptionGroup.displayName = "OptionGroup";

export { OptionGroup };
