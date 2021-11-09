import * as React from 'react';
import { Box } from '../../../layout/box';
import { HelpText } from '../../help-text';
import { StyledModalFooter } from './styles';
import type { ModalFooterProps } from './types';

const ModalFooter = React.forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ children, helpText, ...props }, ref) => {
    return (
      <StyledModalFooter ref={ref} {...props}>
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            flexGrow: 1,
            gap: '$40',
          }}
        >
          {helpText && <HelpText>{helpText}</HelpText>}
        </Box>
        <Box css={{ display: 'flex', alignItems: 'center', gap: '$25' }}>
          {children}
        </Box>
      </StyledModalFooter>
    );
  }
);

ModalFooter.displayName = 'ModalFooter';

export { ModalFooter };
