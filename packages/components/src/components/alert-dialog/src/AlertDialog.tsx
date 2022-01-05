import * as React from "react";
import {
  ModalRoot as AlertDialogRoot,
  StyledModalOverlay as StyledAlertDialogOverlay,
} from "../../modal";
import type { ModalProps as AlertDialogProps } from "../../modal";

const AlertDialog: React.FC<AlertDialogProps> = ({ children, ...props }) => {
  return (
    <AlertDialogRoot {...props}>
      <StyledAlertDialogOverlay />
      {children}
    </AlertDialogRoot>
  );
};

AlertDialog.displayName = "AlertDialog";

export { AlertDialog };
