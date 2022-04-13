import * as React from "react";
import { StyledIconWrapper } from "./styles";
import type { IconWrapperProps } from "./types";

const IconWrapper = React.forwardRef<HTMLElement, IconWrapperProps>(
  (
    {
      as = "span",
      color = "white",
      display = "block",
      size = "medium",
      ...props
    },
    ref
  ) => {
    return (
      <StyledIconWrapper
        as={as}
        color={color}
        display={display}
        size={size}
        ref={ref}
        {...props}
      />
    );
  }
);

IconWrapper.displayName = "IconWrapper";
export { IconWrapper };
