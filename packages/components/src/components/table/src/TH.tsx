import React from "react";
import { StyledTH } from "./styles";

type THProps = {
  children?: React.ReactNode;
  /** To make a cell span over multiple rows. */
  rowSpan?: number;
  /** To make a cell span over multiple columns */
  colSpan?: number;
};

/** A header cell in the table, use within a <THead>. */
const TH = React.forwardRef<HTMLTableCellElement, THProps>(
  ({ children, rowSpan, colSpan }, ref) => {
    return (
      <StyledTH ref={ref} rowSpan={rowSpan} colSpan={colSpan}>
        {children}
      </StyledTH>
    );
  }
);

TH.displayName = "TH";

export { TH };
