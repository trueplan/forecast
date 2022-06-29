import * as React from "react";
import { StyledCardFooter } from "./styles";
import type { CardFooterProps } from "./types";

/** The footer area for a card. */
const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, ...props }, ref) => (
    <StyledCardFooter ref={ref} {...props}>
      {children}
    </StyledCardFooter>
  )
);

CardFooter.displayName = "CardFooter";

export { CardFooter };
