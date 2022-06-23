import * as React from "react";
import { Stack } from "../../../layout/stack";
import { StyledToggle, StyledCircle, StyledLabel } from "./styles";
import type { ToggleProps } from "./types";

/** A control that allows the user to toggle between checked and not checked. */
const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  (
    {
      checked,
      defaultChecked,
      id,
      name,
      onCheckedChange,
      required,
      value = "Off",
      showLabelText = true,
      ...props
    },
    ref
  ) => {
    return (
      <Stack direction="horizontal" spacing="$20">
        <StyledToggle
          id={id}
          checked={checked}
          defaultChecked={defaultChecked}
          name={name}
          onCheckedChange={onCheckedChange}
          required={required}
          value={value}
          ref={ref}
          {...props}
        >
          <StyledCircle />
        </StyledToggle>
        {showLabelText && (
          <StyledLabel htmlFor={id}>
            {checked || defaultChecked ? "On" : "Off"}
          </StyledLabel>
        )}
      </Stack>
    );
  }
);

Toggle.displayName = "Toggle";

export { Toggle };
