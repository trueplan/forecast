import * as React from "react";
import { ModalRoot, StyledModalOverlay } from "./styles";
import type { ModalProps } from "./types";

const Modal: React.FC<ModalProps> = ({ children, ...props }) => {
  return (
    <ModalRoot {...props}>
      <StyledModalOverlay />
      {children}
    </ModalRoot>
  );
};

Modal.displayName = "Modal";

export { Modal };
