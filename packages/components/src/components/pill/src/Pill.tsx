import * as React from "react";
import { StyledPill } from "./styles";
import type { PillProps } from "./types";

/** Pills are used to highlight important information in a list or form. */
const Pill = React.forwardRef<HTMLSpanElement, PillProps>(
  (
    { children, color = "green", fontFamily, size = "small", ...props },
    ref
  ) => (
    <StyledPill
      color={color}
      fontFamily={fontFamily}
      size={size}
      ref={ref}
      {...props}
    >
      {children}
    </StyledPill>
  )
);

Pill.displayName = "Pill";

export { Pill };
