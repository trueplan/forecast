import React from "react";
import { StyledTR } from "./styles";

type TRProps = {
  children?: React.ReactNode;
};

/** A row in the table */
const TR = React.forwardRef<HTMLTableRowElement, TRProps>(
  ({ children }, ref) => {
    return <StyledTR ref={ref}>{children}</StyledTR>;
  }
);

TR.displayName = "TR";

export { TR };
