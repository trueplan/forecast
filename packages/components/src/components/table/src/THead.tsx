import React from "react";
import { StyledTHead } from "./styles";

type THeadProps = {
  children?: React.ReactNode;
};

/** Used to group header content in a table */
const THead = React.forwardRef<HTMLTableSectionElement, THeadProps>(
  ({ children }, ref) => {
    return <StyledTHead ref={ref}>{children}</StyledTHead>;
  }
);

THead.displayName = "THead";

export { THead };
