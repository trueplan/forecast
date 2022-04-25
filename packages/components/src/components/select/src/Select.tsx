import * as React from "react";
import { SelectUnstyled } from "@mui/base";
import type { SelectUnstyledProps } from "@mui/base";
import { InputBox } from "../../input-box";
import type { SelectProps } from "./types";
import {
  StyledPopper,
  StyledSelect,
  StyledListbox,
  SelectIconWrapper,
} from ".";

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
