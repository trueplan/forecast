import * as React from "react";
import { InputBox } from "../../input-box";
import { StyledTextArea } from "./styles";
import type { TextAreaProps } from "./types";

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      children,
      disabled,
      hasError,
      id,
      name,
      placeholder,
      readOnly,
      required,
      ...props
    },
    ref
  ) => (
    <InputBox
      data-disabled={disabled}
      data-has-error={hasError}
      data-read-only={readOnly}
    >
      <StyledTextArea
        aria-invalid={hasError}
        disabled={disabled}
        id={id}
        name={name}
        placeholder={placeholder}
        readOnly={readOnly}
        required={required}
        rows={3}
        spellCheck
        ref={ref}
        {...props}
      >
        {children}
      </StyledTextArea>
    </InputBox>
  )
);

TextArea.displayName = "TextArea";

export { TextArea };
export * from "./types";
