import * as React from "react";
import { SelectUnstyled } from "@mui/base";
import type { SelectUnstyledProps } from "@mui/base";
import { StyledPopper, StyledSelect, StyledListbox } from ".";

const CustomSelect = React.forwardRef(function CustomSelect<TValue>(
  props: SelectUnstyledProps<TValue>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const components: SelectUnstyledProps<TValue>["components"] = {
    Root: StyledSelect,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };
  return <SelectUnstyled {...props} ref={ref} components={components} />;
}) as <TValue>(
  props: SelectUnstyledProps<TValue> & React.RefAttributes<HTMLButtonElement>
) => JSX.Element;

export { CustomSelect };
