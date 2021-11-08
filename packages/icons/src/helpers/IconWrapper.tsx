import * as React from "react";
import { StyledIconWrapper } from "./styles";
import type { IconWrapperProps } from "./types";

const IconWrapper: React.FC<IconWrapperProps> = ({
  as = "span",
  color = "white",
  display = "block",
  size = "medium",
  ...props
}) => {
  return (
    <StyledIconWrapper
      as={as}
      color={color}
      display={display}
      size={size}
      {...props}
    />
  );
};

IconWrapper.displayName = "IconWrapper";
export { IconWrapper };
