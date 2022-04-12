import * as React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@trueplan/forecast-icons";
import { Box } from "../../../primitives/box";
import { InputBox } from "../../input-box";
import type { SelectProps } from "./types";
import { SelectPopover, StyledSelect } from ".";

const SelectIconWrapper: React.FC = () => (
  <Box
    css={{
      position: "absolute",
      top: "50%",
      right: 12,
      marginTop: "-0.313rem",
    }}
  >
    <ChevronDownIcon decorative size="xxsmall" />
  </Box>
);

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
        {/* <SelectIconWrapper /> */}
        <SelectPopover state={state}>{children}</SelectPopover>
      </InputBox>
    );
  }
);

Select.displayName = "Select";

export { Select };
