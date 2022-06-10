import React from "react";
import { Box } from "../../..";

type TBodyProps = {
  children?: React.ReactNode;
};

/** Used to group the body content in a table */
const TBody = React.forwardRef<HTMLTableSectionElement, TBodyProps>(
  ({ children }, ref) => {
    return (
      <Box ref={ref} as="tbody">
        {children}
      </Box>
    );
  }
);

TBody.displayName = "TBody";

export { TBody };
