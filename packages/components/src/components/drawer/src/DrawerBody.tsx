import * as React from "react";
import { StyledDrawerBody } from "./styles";
import type { DrawerBodyProps } from "./types";

const DrawerBody = React.forwardRef<HTMLDivElement, DrawerBodyProps>(
  ({ children, padding = "space35", ...props }, ref) => {
    return (
      <StyledDrawerBody padding={padding} ref={ref} {...props}>
        {children}
      </StyledDrawerBody>
    );
  }
);

DrawerBody.displayName = "DrawerBody";

export { DrawerBody };
