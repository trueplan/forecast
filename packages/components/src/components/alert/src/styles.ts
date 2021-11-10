import { styled } from '@trueplan/forecast-theme';

export const StyledAlert = styled('div', {
  position: 'relative',
  padding: '$40',
  background: '$white',
  borderWidth: '$10',
  borderStyle: 'solid',
  display: 'grid',
  gridTemplateColumns: 'min-content 1fr',
  alignItems: 'center',
  gridColumnGap: '$30',
  variants: {
    variant: {
      success: {
        borderColor: '$green',
      },
      warning: {
        borderColor: '$yellow110',
      },
      error: {
        borderColor: '$red',
      },
      info: {
        borderColor: '$gray40',
      },
    },
  },
});

export const StyledAlertTitle = styled('div', {
  fontWeight: '$semiBold',
  fontSize: '$20',
  color: '$gray80',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const StyledAlertClose = styled('button', {
  padding: 0,
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  color: '$gray70',
  '&:hover': {
    color: '$gray80',
  },
  '&:focus': {
    outline: '$borderWidths$20 solid $colors$gray40 !important',
    outlineOffset: '1px',
  },
});

export const StyledAlertBody = styled('div', {
  paddingTop: '$10',
  gridColumn: 2,
});
