import * as React from "react";
import { StyledModalBody } from "./styles";
import type { ModalBodyProps } from "./types";

const ModalBody = React.forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledModalBody ref={ref} {...props}>
        {children}
      </StyledModalBody>
    );
  }
);

ModalBody.displayName = "ModalBody";

export { ModalBody };
