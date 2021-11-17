import * as React from "react";
import { StyledTabContent } from "./styles";
import type { TabContentProps } from "./types";

const TabContent = React.forwardRef<HTMLDivElement, TabContentProps>(
  ({ children, value, ...props }, ref) => {
    return (
      <StyledTabContent value={value} ref={ref} {...props}>
        {children}
      </StyledTabContent>
    );
  }
);

TabContent.displayName = "TabContent";

export { TabContent };
