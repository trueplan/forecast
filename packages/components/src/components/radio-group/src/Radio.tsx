import * as React from "react";
import { Box } from "../../../primitives/box";
import { Label } from "../../label";
import { StyledRadio, StyledRadioIndicator } from "./styles";
import type { RadioProps } from "./types";

const Radio = React.forwardRef<HTMLButtonElement, RadioProps>(
  ({ children, disabled, id, required, value, ...props }, ref) => {
    return (
      <Box
        css={{
          display: "flex",
          alignItems: "center",
          columnGap: ".5rem",
        }}
      >
        <StyledRadio
          disabled={disabled}
          id={id}
          value={value}
          required={required}
          ref={ref}
          {...props}
        >
          <StyledRadioIndicator />
        </StyledRadio>
        <Label
          disabled={disabled}
          htmlFor={id}
          marginBottom="space0"
          radiocheckbox
        >
          {children}
        </Label>
      </Box>
    );
  }
);

Radio.displayName = "Radio";

export { Radio };
