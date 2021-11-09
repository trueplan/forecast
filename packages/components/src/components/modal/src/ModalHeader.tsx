import * as React from "react";
import { StyledModalHeader } from "./styles";
import type { ModalHeaderProps } from "./types";

const ModalHeader = React.forwardRef<HTMLHeadElement, ModalHeaderProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledModalHeader ref={ref} {...props}>
        {children}
      </StyledModalHeader>
    );
  }
);

ModalHeader.displayName = "ModalHeader";

export { ModalHeader };
