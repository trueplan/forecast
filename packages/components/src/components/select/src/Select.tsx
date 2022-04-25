import * as React from "react";
import { InputBox } from "../../input-box";
import type { SelectProps } from "./types";
import { CustomSelect } from "./CustomSelect";
import { SelectIconWrapper } from ".";

const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      defaultValue,
      disabled,
      hasError,
      children,
      id,
      name,
      value,
      onChange,
      required,
      size = "small",
    },
    ref
  ) => {
    return (
      <InputBox data-disabled={disabled} data-has-error={hasError} hasHover>
        <CustomSelect
          defaultValue={defaultValue}
          disabled={disabled}
          id={id}
          name={name}
          value={value}
          size={size}
          onChange={onChange}
          required={required}
          ref={ref}
        >
          {children}
        </CustomSelect>
        <SelectIconWrapper />
      </InputBox>
    );
  }
);

Select.displayName = "Select";

export { Select };
