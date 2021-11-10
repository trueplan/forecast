import { styled, theme } from '@trueplan/forecast-theme';

export const StyledIconContainer = styled('div', {
  alignItems: 'center',
  borderRadius: theme.radii.circle,
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  overflow: 'hidden',
  variants: {
    color: {
      blue: {
        backgroundColor: theme.colors.blue50,
        color: theme.colors.blue120,
      },
      green: {
        backgroundColor: theme.colors.green50,
        color: theme.colors.green120,
      },
      lilac: {
        backgroundColor: theme.colors.lilac50,
        color: theme.colors.lilac120,
      },
      sky: {
        backgroundColor: theme.colors.sky50,
        color: theme.colors.sky120,
      },
      yellow: {
        backgroundColor: theme.colors.yellow50,
        color: theme.colors.yellow120,
      },
      red: {
        backgroundColor: theme.colors.red50,
        color: theme.colors.red120,
      },
      royal: {
        backgroundColor: theme.colors.royal50,
        color: theme.colors.royal120,
      },
    },
    size: {
      small: {
        height: '24px',
        width: '24px',
      },
      medium: {
        height: '32px',
        width: '32px',
      },
      large: {
        height: '40px',
        width: '40px',
      },
    },
  },
});
