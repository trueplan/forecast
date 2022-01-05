import * as React from "react";
import { Box } from "../../../primitives/box";
import { Heading } from "../../heading";
import { ModalTitle as AlertDialogTitle } from "../../modal";
import type { ModalHeadingProps } from "../../modal";

interface AlertDialogHeadingProps extends Omit<ModalHeadingProps, "subtitle"> {
  children: React.ReactNode;
}

const AlertDialogHeading = React.forwardRef<
  HTMLHeadingElement,
  AlertDialogHeadingProps
>(({ as = "h2", children, ...props }, ref) => {
  return (
    <Box css={{ textAlign: "center", marginTop: "$30" }}>
      <AlertDialogTitle asChild>
        <Heading
          as={as}
          marginBottom="space0"
          size="heading40"
          ref={ref}
          {...props}
        >
          {children}
        </Heading>
      </AlertDialogTitle>
    </Box>
  );
});

AlertDialogHeading.displayName = "AlertDialogHeading";

export { AlertDialogHeading };
