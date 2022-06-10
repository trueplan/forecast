import React from "react";
import { StyledTH } from "./styles";

type THProps = {
  children?: React.ReactNode;
};

/** A header cell in the table, use within a <THead> */
const TH = React.forwardRef<HTMLTableCellElement, THProps>(
  ({ children }, ref) => {
    return <StyledTH ref={ref}>{children}</StyledTH>;
  }
);

TH.displayName = "TH";

export { TH };
