import * as React from "react";
import { Box } from "../../../primitives/box";
import type { ModalHeaderProps as AlertDialogHeaderProps } from "../../modal";

const AlertDialogHeader = React.forwardRef<
  HTMLHeadElement,
  AlertDialogHeaderProps
>(({ children, ...props }, ref) => {
  return (
    <Box
      as="header"
      css={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "$50",
        paddingRight: "$30",
        paddingBottom: "$30",
        paddingLeft: "$30",
      }}
      ref={ref}
      {...props}
    >
      {children}
    </Box>
  );
});

AlertDialogHeader.displayName = "AlertDialogHeader";

export { AlertDialogHeader };
