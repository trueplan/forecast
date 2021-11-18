import * as React from "react";
import { StyledDrawerContent } from "./styles";
import type { DrawerContentProps } from "./types";

const DrawerContent = React.forwardRef<HTMLDivElement, DrawerContentProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledDrawerContent ref={ref} {...props}>
        {children}
      </StyledDrawerContent>
    );
  }
);

DrawerContent.displayName = "DrawerContent";

export { DrawerContent };
