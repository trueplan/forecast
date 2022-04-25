import * as React from "react";
import type { OptionProps } from "./types";
import { StyledItem } from ".";

const Option = React.forwardRef<HTMLDivElement, OptionProps>(
  ({ children, value, ...props }, ref) => {
    return (
      <StyledItem value={value} ref={ref} {...props}>
        {children}
      </StyledItem>
    );
  }
);

Option.displayName = "Option";

export { Option };
