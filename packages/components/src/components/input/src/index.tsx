import * as React from 'react';
import { InputBox } from '../../input-box';
import { StyledInput } from './styles';
import type { InputProps, InputTypeProps } from './types';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
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
      type,
      value,
      ...props
    },
    ref
  ) => {
    const typeProps: InputTypeProps = { type };

    // https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/
    if (type === 'number') {
      typeProps.type = 'text';
      typeProps.inputmode = 'numeric';
      typeProps.pattern = '[0-9]*';
      fontFamily = 'roboto';
    }

    return (
      <InputBox
        borderless={borderless}
        centeredText={centeredText}
        data-disabled={disabled}
        data-has-error={hasError}
        data-hidden={type === 'hidden' ? true : null}
        data-read-only={readOnly}
        fontFamily={fontFamily}
        type={type}
      >
        <StyledInput
          aria-invalid={hasError}
          aria-readonly={readOnly}
          disabled={disabled}
          id={id}
          name={name}
          placeholder={placeholder}
          readOnly={readOnly}
          required={required}
          {...typeProps}
          value={value}
          ref={ref}
          {...props}
        />
      </InputBox>
    );
  }
);

Input.displayName = 'Input';

export { Input };
export * from './types';
