import * as React from "react";
import { Box } from "../../../primitives/box";
import type { ModalBodyProps as AlertDialogBodyProps } from "../../modal";

const AlertDialogBody = React.forwardRef<HTMLDivElement, AlertDialogBodyProps>(
  ({ children, ...props }, ref) => {
    return (
      <Box
        css={{
          paddingTop: "$0",
          paddingRight: "$50",
          paddingBottom: "$30",
          paddingLeft: "$50",
          overflowY: "auto",
        }}
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

AlertDialogBody.displayName = "AlertDialogBody";

export { AlertDialogBody };
