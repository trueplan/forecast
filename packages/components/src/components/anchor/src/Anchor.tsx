// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsdoc/require-description-complete-sentence */
import * as React from "react";
import { StyledAnchor } from "./styles";
import type { AnchorProps } from "./types";

/**
 * An Anchor is text that navigates the user from one webpage to another.
 */
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
