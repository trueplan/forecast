import * as React from "react";
import { CloseIcon } from "@trueplan/forecast-icons";
import { Box } from "../../../primitives/box";
import { Button } from "../../button";
import { DrawerClose } from "./styles";
import type { DrawerHeaderActionsProps } from "./types";

const DrawerHeaderActions = React.forwardRef<
  HTMLDivElement,
  DrawerHeaderActionsProps
>(({ children, ...props }, ref) => {
  return (
    <Box
      css={{ display: "flex", alignItems: "center", gap: "$20" }}
      ref={ref}
      {...props}
    >
      {children}
      <DrawerClose asChild>
        <Button variant="iconOnly" size="iconSmall">
          <CloseIcon decorative={false} title="Close Drawer" size="small" />
        </Button>
      </DrawerClose>
    </Box>
  );
});

DrawerHeaderActions.displayName = "DrawerHeaderActions";

export { DrawerHeaderActions };
