import React from "react";
import { StyledTD } from "./styles";

type TDProps = {
  children?: React.ReactNode;
  /** To make a cell span over multiple rows. */
  rowSpan?: number;
  /** To make a cell span over multiple columns. */
  colSpan?: number;
};

/** A standard cell in the table, use within a <TR>. */
const TD = React.forwardRef<HTMLTableCellElement, TDProps>(
  ({ children, rowSpan, colSpan }, ref) => {
    return (
      <StyledTD ref={ref} rowSpan={rowSpan} colSpan={colSpan}>
        {children}
      </StyledTD>
    );
  }
);

TD.displayName = "TD";

export { TD };
