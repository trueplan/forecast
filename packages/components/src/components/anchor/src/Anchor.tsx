import * as React from "react";
import { StyledAnchor } from "./styles";
import type { AnchorProps } from "./types";

const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ children, isExternal, noUnderline, size, ...props }, ref) => (
    <StyledAnchor
      noUnderline={noUnderline}
      size={size}
      rel={isExternal ? "noreferrer noopener" : undefined}
      ref={ref}
      target={isExternal ? "_blank" : undefined}
      {...props}
    >
      {children}
    </StyledAnchor>
  )
);

Anchor.displayName = "Anchor";

export { Anchor };
