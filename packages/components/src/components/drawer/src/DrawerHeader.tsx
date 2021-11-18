import * as React from "react";
import { StyledDrawerHeader } from "./styles";
import type { DrawerHeaderProps } from "./types";

const DrawerHeader = React.forwardRef<HTMLHeadElement, DrawerHeaderProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledDrawerHeader ref={ref} {...props}>
        {children}
      </StyledDrawerHeader>
    );
  }
);

DrawerHeader.displayName = "DrawerHeader";

export { DrawerHeader };
