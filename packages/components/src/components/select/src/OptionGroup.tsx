import * as React from "react";
import type { OptionGroupProps } from "./types";
import { SelectGroup } from ".";

const OptionGroup = React.forwardRef<HTMLDivElement, OptionGroupProps>(
  ({ children, ...props }, ref) => {
    return (
      <SelectGroup ref={ref} {...props}>
        {children}
      </SelectGroup>
    );
  }
);

OptionGroup.displayName = "OptionGroup";

export { OptionGroup };
