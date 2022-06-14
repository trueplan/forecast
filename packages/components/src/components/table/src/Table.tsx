import React from "react";
import { StyledTable } from "./styles";

type TableProps = {
  /** Determines how to layout the cells, rows, and columns=*/
  tableLayout?: "fixed" | "auto";
  children?: React.ReactNode;
};

/** Represent your data in rows and columns */
const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ children, tableLayout = "auto" }, ref) => {
    return (
      <StyledTable ref={ref} tableLayout={tableLayout}>
        {children}
      </StyledTable>
    );
  }
);

Table.displayName = "Table";

export { Table };
