import * as React from "react";
import { StyledModalContent } from "./styles";
import type { ModalContentProps } from "./types";

const ModalContent = React.forwardRef<HTMLDivElement, ModalContentProps>(
  ({ children, size = "default", ...props }, ref) => {
    return (
      <StyledModalContent size={size} ref={ref} {...props}>
        {children}
      </StyledModalContent>
    );
  }
);

ModalContent.displayName = "ModalContent";

export { ModalContent };
