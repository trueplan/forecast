import * as React from "react";
import { StyledTabs } from "./styles";
import type { TabsProps } from "./types";

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ children, defaultValue, onValueChange, value, ...props }, ref) => {
    return (
      <StyledTabs
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        value={value}
        ref={ref}
        {...props}
      >
        {children}
      </StyledTabs>
    );
  }
);

Tabs.displayName = "Tabs";

export { Tabs };
