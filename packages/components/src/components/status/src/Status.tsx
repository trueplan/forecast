import * as React from 'react';
import { Box } from '../../../layout/box';
import { StyledStatus } from './styles';
import type { StatusProps } from './types';

const Status = React.forwardRef<HTMLDivElement, StatusProps>(
  ({ children, color = 'default', ...props }, ref) => (
    <StyledStatus color={color} ref={ref} {...props}>
      <Box as="span">{children}</Box>
    </StyledStatus>
  )
);

Status.displayName = 'Status';

export { Status };
