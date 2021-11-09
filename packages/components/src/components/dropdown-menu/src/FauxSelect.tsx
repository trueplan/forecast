import * as React from 'react';
import { ChevronDownIcon } from '@forecast/icons';
import { styled, theme } from '@forecast/theme';
import { Box } from '../../../layout/box';

const StyledFauxSelectButton = styled('button', {
  all: 'unset',
  backgroundColor: theme.colors.white,
  borderColor: theme.colors.gray50,
  borderRadius: theme.radii[30],
  borderStyle: 'solid',
  borderWidth: theme.borderWidths[10],
  boxSizing: 'border-box',
  color: theme.colors.textMedium,
  fontFamily: theme.fonts.inter,
  fontWeight: theme.fontWeights.semiBold,
  minWidth: '200px',
  overflow: 'hidden',
  position: 'relative',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  width: '100%',
  '&:hover': {
    borderColor: theme.colors.borderDark,
  },
  '&:active': {
    borderColor: theme.colors.borderDark,
  },
  '&[data-state="open"]': {
    borderColor: theme.colors.borderDark,
  },
  '&:focus': {
    borderColor: theme.colors.borderDark,
    outline: '$borderWidths$20 solid $colors$gray40 !important',
    outlineOffset: '1px',
  },
  variants: {
    size: {
      small: {
        fontSize: theme.fontSizes[10],
        lineHeight: theme.lineHeights[10],
        px: theme.space[25],
        py: theme.space[15],
        paddingRight: '35px',
      },
      medium: {
        fontSize: theme.fontSizes[20],
        lineHeight: theme.lineHeights[20],
        px: theme.space[30],
        py: theme.space[20],
        paddingRight: '35px',
      },
    },
  },
});

const FauxSelectIconWrapper: React.FC = () => (
  <Box
    css={{
      position: 'absolute',
      top: '50%',
      right: 12,
      marginTop: '-0.313rem',
    }}
  >
    <ChevronDownIcon decorative size="xsmall" />
  </Box>
);

export interface FauxSelectProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'css'> {
  children?: React.ReactNode;
  size?: 'small' | 'medium';
}

const FauxSelectBox = React.forwardRef<HTMLButtonElement, FauxSelectProps>(
  ({ children, size = 'medium', ...props }, ref) => {
    return (
      <StyledFauxSelectButton size={size} ref={ref} {...props}>
        {children}
        <FauxSelectIconWrapper />
      </StyledFauxSelectButton>
    );
  }
);

FauxSelectBox.displayName = 'FauxSelectBox';

export { FauxSelectBox };
