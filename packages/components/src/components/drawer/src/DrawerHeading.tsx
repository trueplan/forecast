import * as React from "react";
import { Box } from "../../../primitives/box";
import { Heading } from "../../heading";
import { DrawerTitle } from "./styles";
import type { DrawerHeadingProps } from "./types";

const DrawerHeading = React.forwardRef<HTMLHeadingElement, DrawerHeadingProps>(
  ({ as = "h2", children, ...props }, ref) => {
    return (
      <Box
        css={{
          display: "flex",
          alignItems: "center",
          flexGrow: 1,
          marginRight: "$40",
        }}
      >
        <Box>
          <DrawerTitle asChild>
            <Heading
              as={as}
              marginBottom="space0"
              size="heading50"
              ref={ref}
              {...props}
            >
              {children}
            </Heading>
          </DrawerTitle>
        </Box>
      </Box>
    );
  }
);

DrawerHeading.displayName = "DrawerHeading";

export { DrawerHeading };
