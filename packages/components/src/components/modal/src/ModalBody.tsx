import * as React from "react";
import { StyledModalBody } from "./styles";
import type { ModalBodyProps } from "./types";

const ModalBody = React.forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ children, padding = "space35", ...props }, ref) => {
    return (
      <StyledModalBody padding={padding} ref={ref} {...props}>
        {children}
      </StyledModalBody>
    );
  }
);

ModalBody.displayName = "ModalBody";

export { ModalBody };
