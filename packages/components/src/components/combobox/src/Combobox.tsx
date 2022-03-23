import * as React from "react";
import type { ComboboxProps as ComboboxPrimitiveProps } from "ariakit/combobox";
import { Combobox as ComboboxPrimitive } from "ariakit/combobox";
import { styled, theme } from "@trueplan/forecast-theme";
import { InputBox } from "../../input-box";
import { ComboboxIconWrapper } from "./ComboboxIconWrapper";

export const StyledCombobox = styled(ComboboxPrimitive, {
  appearance: "none",
  backgroundColor: "transparent",
  border: "none",
  borderRadius: theme.radii[30],
  boxShadow: "none",
  color: "inherit",
  cursor: "auto",
  display: "block",
  fontFamily: "inherit",
  fontSize: "inherit",
  fontWeight: "inherit",
  lineHeight: "inherit",
  margin: theme.space[0],
  outline: "none",
  padding: theme.space[20],
  paddingRight: theme.space[50],
  resize: "none",
  textAlign: "inherit",
  width: "100%",
  "&::placeholder": {
    color: theme.colors.textLight,
  },
});

export interface ComboboxProps
  extends Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      "css" | "autoComplete" | "children"
    >,
    Omit<ComboboxPrimitiveProps, "css"> {
  borderless?: boolean;
  centeredText?: boolean;
  disabled?: boolean;
  fontFamily?: "roboto";
  hasError?: boolean;
  id?: string;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
}

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
