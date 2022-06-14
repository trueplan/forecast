import React from "react";
import { StyledTD } from "./styles";

type TDProps = {
  children?: React.ReactNode;
};

/** A standard cell in the table, use within a <TR> */
const TD = React.forwardRef<HTMLTableCellElement, TDProps>(
  ({ children }, ref) => {
    return <StyledTD ref={ref}>{children}</StyledTD>;
  }
);

TD.displayName = "TD";

export { TD };
