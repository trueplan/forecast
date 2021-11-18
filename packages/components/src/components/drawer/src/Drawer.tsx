import * as React from "react";
import { DrawerRoot, StyledDrawerOverlay } from "./styles";
import type { DrawerProps } from "./types";

const Drawer: React.FC<DrawerProps> = ({ children, ...props }) => {
  return (
    <DrawerRoot {...props}>
      <StyledDrawerOverlay />
      {children}
    </DrawerRoot>
  );
};

Drawer.displayName = "Drawer";

export { Drawer };
