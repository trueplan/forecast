import * as React from "react";
import { StyledTabTrigger } from "./styles";
import type { TabTriggerProps } from "./types";

const TabTrigger = React.forwardRef<HTMLDivElement, TabTriggerProps>(
  ({ children, disabled, value, ...props }, ref) => {
    return (
      <StyledTabTrigger disabled={disabled} value={value} ref={ref} {...props}>
        {children}
      </StyledTabTrigger>
    );
  }
);

TabTrigger.displayName = "TabTrigger";

export { TabTrigger };
