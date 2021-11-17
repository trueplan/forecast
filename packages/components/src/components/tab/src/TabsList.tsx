import * as React from "react";
import { StyledTabsList } from "./styles";
import type { TabsListProps } from "./types";

const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ centered, children, loop, ...props }, ref) => {
    return (
      <StyledTabsList centered={centered} loop={loop} ref={ref} {...props}>
        {children}
      </StyledTabsList>
    );
  }
);

TabsList.displayName = "TabsList";

export { TabsList };
