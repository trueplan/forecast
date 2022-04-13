import * as React from "react";
import { InputBox } from "../../input-box";
import type { SelectProps } from "./types";
import { SelectPopover, StyledSelect } from ".";

const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      children,
      disabled,
      hasError,
      id,
      name,
      required,
      size = "small",
      state,
      ...props
    },
    ref
  ) => {
    return (
      <InputBox data-disabled={disabled} data-has-error={hasError} hasHover>
        <StyledSelect
          disabled={disabled}
          id={id}
          name={name}
          required={required}
          ref={ref}
          size={size}
          state={state}
          {...props}
        />
        <SelectPopover state={state}>{children}</SelectPopover>
      </InputBox>
    );
  }
);

Select.displayName = "Select";

export { Select };
