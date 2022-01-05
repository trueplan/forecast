import * as React from "react";
import { Box } from "../../../primitives/box";
import type { ModalFooterProps as AlertDialogFooterProps } from "../../modal";

const AlertDialogFooter = React.forwardRef<
  HTMLDivElement,
  AlertDialogFooterProps
>(({ children, ...props }, ref) => {
  return (
    <Box
      css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "$25",
        paddingTop: "$30",
        paddingRight: "$50",
        paddingBottom: "$50",
        paddingLeft: "$50",
      }}
      ref={ref}
      {...props}
    >
      {children}
    </Box>
  );
});

AlertDialogFooter.displayName = "AlertDialogFooter";

export { AlertDialogFooter };
