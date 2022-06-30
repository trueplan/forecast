import * as React from "react";
import { StyledHeading } from "./styles";
import type { HeadingProps } from "./types";

/** A Heading is text that gives hierarchical structure to a page. */
const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    { children, marginBottom = "space40", size = "heading20", ...props },
    ref
  ) => (
    <StyledHeading marginBottom={marginBottom} size={size} ref={ref} {...props}>
      {children}
    </StyledHeading>
  )
);

Heading.displayName = "Heading";

export { Heading };
