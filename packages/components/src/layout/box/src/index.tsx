import * as React from 'react';
import {styled} from '@forecast/theme';
import type {CSS} from '@forecast/theme';

const StyledBox = styled('div', {
  boxSizing: 'border-box',
});

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ReactNode;
  children?: React.ReactNode;
  css?: CSS;
  decorative?: boolean;
}

const Box = React.forwardRef<HTMLDivElement, BoxProps>(({children, ...props}, ref) => {
  return (
    <StyledBox ref={ref} {...props}>
      {children}
    </StyledBox>
  );
});

Box.displayName = 'Box';

export {Box};
