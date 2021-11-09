import * as React from 'react';
import { Box } from '../../../layout/box';
import { Label } from '../../label';
import { StyledRadio, StyledRadioIndicator } from './styles';
import type { RadioProps } from './types';

const Radio = React.forwardRef<HTMLButtonElement, RadioProps>(
  ({ children, disabled, id, required, value, ...props }, ref) => {
    return (
      <Box css={{ display: 'flex' }}>
        <Box css={{ flexShrink: 0 }}>
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
        </Box>
        <Box css={{ marginLeft: '$20' }}>
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

Radio.displayName = 'Radio';

export { Radio };
