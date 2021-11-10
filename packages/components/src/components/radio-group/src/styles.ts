import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { styled, theme } from '@trueplan/forecast-theme';

export const StyledRadio = styled(RadioGroupPrimitive.Item, {
  all: 'unset',
  boxSizing: 'border-box',
  backgroundColor: theme.colors.white,
  borderColor: theme.colors.gray60,
  borderRadius: theme.radii.circle,
  borderStyle: 'solid',
  borderWidth: theme.borderWidths[10],
  height: '16px',
  marginTop: '4px',
  transition: 'border-color 100ms ease-in',
  width: '16px',
  '&:hover': {
    borderColor: theme.colors.borderMedium,
  },
  '&:focus': {
    borderColor: theme.colors.borderMedium,
    outline: '$borderWidths$20 solid $colors$green !important',
    outlineOffset: '1px',
  },
  '&:disabled': {
    backgroundColor: theme.colors.gray20,
    borderColor: theme.colors.borderLight,
    cursor: 'not-allowed',
  },
});

export const StyledRadioIndicator = styled(RadioGroupPrimitive.Indicator, {
  all: 'unset',
  boxSizing: 'border-box',
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  position: 'relative',
  width: '100%',
  '&::after': {
    content: '""',
    backgroundColor: theme.colors.green,
    borderRadius: theme.radii.circle,
    display: 'block',
    height: '10px',
    width: '10px',
  },
});

export const StyledRadioGroup = RadioGroupPrimitive.Root;
