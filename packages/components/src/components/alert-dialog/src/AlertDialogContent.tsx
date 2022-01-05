import * as React from "react";
import { StyledModalContent as StyledAlertDialogContent } from "../../modal";
import type { ModalContentProps as AlertDialogContentProps } from "../../modal";

const AlertDialogContent = React.forwardRef<
  HTMLDivElement,
  AlertDialogContentProps
>(({ children, ...props }, ref) => {
  return (
    <StyledAlertDialogContent
      aria-modal={true}
      size="default"
      onPointerDownOutside={(event) => event.preventDefault()}
      onInteractOutside={(event) => event.preventDefault()}
      role="alertdialog"
      ref={ref}
      {...props}
    >
      {children}
    </StyledAlertDialogContent>
  );
});

AlertDialogContent.displayName = "AlertDialogContent";

export { AlertDialogContent };
