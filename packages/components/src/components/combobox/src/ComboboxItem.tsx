import * as React from "react";
import type { ComboboxItemProps } from "./types";
import { StyledComboboxItem } from "./styles";

const ComboboxItem = React.forwardRef<HTMLDivElement, ComboboxItemProps>(
  ({ ...props }, ref) => {
    return (
      <StyledComboboxItem ref={ref} {...props}>
        {props.children}
      </StyledComboboxItem>
    );
  }
);

ComboboxItem.displayName = "ComboboxItem";

export { ComboboxItem };
