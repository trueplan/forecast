import * as React from "react";
import { CloseIcon } from "@trueplan/forecast-icons";
import { Box } from "../../../primitives/box";
import { Button } from "../../button";
import { ModalClose } from "./styles";
import type { ModalHeaderActionsProps } from "./types";

const ModalHeaderActions = React.forwardRef<
  HTMLDivElement,
  ModalHeaderActionsProps
>(({ children, customCloseButton = false, ...props }, ref) => {
  return (
    <Box
      css={{ display: "flex", alignItems: "center", gap: "$20" }}
      ref={ref}
      {...props}
    >
      {children}
      {!customCloseButton && (
        <ModalClose asChild>
          <Button variant="iconOnly" size="iconSmall">
            <CloseIcon decorative={false} title="Close modal" size="small" />
          </Button>
        </ModalClose>
      )}
    </Box>
  );
});

ModalHeaderActions.displayName = "ModalHeaderActions";

export { ModalHeaderActions };
