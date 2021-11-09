import * as React from 'react';
import { StyledPill } from './styles';
import type { PillProps } from './types';

const Pill = React.forwardRef<HTMLSpanElement, PillProps>(
  (
    { children, color = 'green', fontFamily, size = 'small', ...props },
    ref
  ) => (
    <StyledPill
      color={color}
      fontFamily={fontFamily}
      size={size}
      ref={ref}
      {...props}
    >
      {children}
    </StyledPill>
  )
);

Pill.displayName = 'Pill';

export { Pill };
