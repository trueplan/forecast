import * as React from "react";
import { StyledInputBox } from "./styles";
import type { InputBoxProps } from "./types";

/** Input box is the visual outer container used for text based form elements. */
const InputBox = React.forwardRef<HTMLDivElement, InputBoxProps>(
  (
    {
      borderless,
      centeredText,
      children,
      disabled,
      fontFamily,
      hasError,
      hasHover,
      readOnly,
      type,
      ...props
    },
    ref
  ) => (
    <StyledInputBox
      borderless={borderless}
      centeredText={centeredText}
      data-disabled={disabled}
      data-has-error={hasError}
      data-hidden={type === "hidden" ? true : null}
      data-read-only={readOnly}
      fontFamily={fontFamily}
      hasHover={hasHover}
      ref={ref}
      {...props}
    >
      {children}
    </StyledInputBox>
  )
);

InputBox.displayName = "InputBox";

export { InputBox };
export * from "./types";
