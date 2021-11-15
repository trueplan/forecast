import * as React from "react";
import { CheckboxIcon, InterdeterminateIcon } from "@trueplan/forecast-icons";
import { Box } from "../../../primitives/box";
import { Label } from "../../label";
import { StyledCheckbox, StyledCheckboxIndicator } from "./styles";
import type { CheckboxProps } from "./types";

const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  (
    {
      checked,
      children,
      defaultChecked,
      disabled,
      id,
      name,
      onCheckedChange,
      required,
      value,
      ...props
    },
    ref
  ) => {
    return (
      <Box css={{ display: "flex" }}>
        <Box css={{ flexShrink: 0 }}>
          <StyledCheckbox
            checked={checked}
            defaultChecked={defaultChecked}
            disabled={disabled}
            id={id}
            name={name}
            onCheckedChange={onCheckedChange}
            required={required}
            value={value}
            ref={ref}
            {...props}
          >
            <StyledCheckboxIndicator>
              {checked === "indeterminate" && (
                <InterdeterminateIcon decorative size="xsmall" />
              )}
              {(checked === true || defaultChecked === true) && (
                <CheckboxIcon decorative size="xsmall" />
              )}
            </StyledCheckboxIndicator>
          </StyledCheckbox>
        </Box>
        <Box css={{ marginLeft: "$20" }}>
          <Label
            disabled={disabled}
            htmlFor={id}
            marginBottom="space0"
            radiocheckbox
          >
            {children}
          </Label>
        </Box>
      </Box>
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
