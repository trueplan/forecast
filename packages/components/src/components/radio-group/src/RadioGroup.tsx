import * as React from "react";
import { Stack } from "../../../layout/stack";
import { StyledRadioGroup } from "./styles";
import type { RadioGroupProps } from "./types";

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      children,
      defaultValue,
      dir = "ltr",
      label,
      name,
      onValueChange,
      required,
      value,
      ...props
    },
    ref
  ) => {
    return (
      <StyledRadioGroup
        aria-label={label}
        defaultValue={defaultValue}
        dir={dir}
        name={name}
        onValueChange={onValueChange}
        required={required}
        value={value}
        ref={ref}
        {...props}
      >
        <Stack direction="vertical" spacing="$10">
          {children}
        </Stack>
      </StyledRadioGroup>
    );
  }
);

RadioGroup.displayName = "RadioGroup";

export { RadioGroup };
