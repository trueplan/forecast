import * as React from "react";
import { InputBox } from "../../input-box";
import { ComboboxIconWrapper } from "./ComboboxIconWrapper";
import type { ComboboxProps } from "./types";
import { StyledCombobox } from "./styles";

const Combobox = React.forwardRef<HTMLInputElement, ComboboxProps>(
  (
    {
      borderless,
      centeredText,
      disabled,
      fontFamily,
      hasError,
      id,
      name,
      placeholder,
      readOnly,
      required,
      state,
      ...props
    },
    ref
  ) => {
    return (
      <InputBox
        borderless={borderless}
        centeredText={centeredText}
        data-disabled={disabled}
        data-has-error={hasError}
        data-read-only={readOnly}
        fontFamily={fontFamily}
        hasHover
      >
        <StyledCombobox
          aria-invalid={hasError}
          aria-readonly={readOnly}
          disabled={disabled}
          id={id}
          name={name}
          placeholder={placeholder}
          readOnly={readOnly}
          required={required}
          state={state}
          ref={ref}
          {...props}
        />
        <ComboboxIconWrapper />
      </InputBox>
    );
  }
);

Combobox.displayName = "Combobox";

export { Combobox };
