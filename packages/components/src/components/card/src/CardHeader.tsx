import * as React from "react";
import { StyledCardHeader } from "./styles";
import type { CardHeaderProps } from "./types";

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, ...props }, ref) => (
    <StyledCardHeader ref={ref} {...props}>
      {children}
    </StyledCardHeader>
  )
);

CardHeader.displayName = "CardHeader";

export { CardHeader };
