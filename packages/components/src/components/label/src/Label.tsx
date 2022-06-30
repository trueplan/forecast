import React from "react";
import { StyledLabel, StyledDot } from "./styles";
import type { LabelProps } from "./types";

/** A Label is text that provides a visible and accessible name to a form element. */
const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      children,
      disabled,
      marginBottom = "space10",
      required,
      radiocheckbox,
      ...rest
    },
    ref
  ): React.ReactElement => {
    return (
      <StyledLabel
        disabled={disabled}
        marginBottom={marginBottom}
        radiocheckbox={radiocheckbox}
        ref={ref}
        {...rest}
      >
        {children}
        {required && <StyledDot />}
      </StyledLabel>
    );
  }
);

Label.displayName = "Label";

export { Label };
