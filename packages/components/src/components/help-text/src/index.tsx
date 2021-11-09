import * as React from 'react';
import { styled, theme } from '@forecast/theme';

const StyledHelpText = styled('span', {
  display: 'block',
  color: theme.colors.textLight,
  fontFamily: theme.fonts.inter,
  fontWeight: theme.fontWeights.normal,
  fontSize: theme.fontSizes[10],
  lineHeight: theme.lineHeights[10],
  marginTop: theme.space[10],
  variants: {
    hasError: {
      true: {
        color: theme.colors.red,
      },
    },
  },
});

export interface HelpTextProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'css'> {
  children: React.ReactNode;
  hasError?: boolean;
}

const HelpText = React.forwardRef<HTMLSpanElement, HelpTextProps>(
  ({ children, hasError, ...props }, ref) => (
    <StyledHelpText hasError={hasError} ref={ref} {...props}>
      {children}
    </StyledHelpText>
  )
);

HelpText.displayName = 'HelpText';

export { HelpText };
