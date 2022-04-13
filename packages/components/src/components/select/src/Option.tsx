import * as React from "react";
import type { OptionProps } from "./types";
import { SelectItem } from ".";

const Option = React.forwardRef<HTMLDivElement, OptionProps>(
  ({ children, value, ...props }, ref) => {
    return (
      <SelectItem value={value} ref={ref} {...props}>
        {children}
      </SelectItem>
    );
  }
);

Option.displayName = "Option";

export { Option };
