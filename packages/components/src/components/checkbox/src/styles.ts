import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { styled, theme } from '@forecast/theme';

export const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  alignItems: 'center',
  backgroundColor: theme.colors.white,
  borderColor: theme.colors.gray60,
  borderRadius: theme.radii[30],
  borderStyle: 'solid',
  borderWidth: theme.borderWidths[10],
  boxSizing: 'border-box',
  display: 'flex',
  height: '16px',
  justifyContent: 'center',
  marginTop: '4px',
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
  '&[data-state="checked"]': {
    backgroundColor: theme.colors.green,
    borderColor: theme.colors.green,
  },
  '&[data-state="checked"]:hover': {
    borderColor: theme.colors.green,
  },
  '&[data-state="checked"]:focus': {
    borderColor: theme.colors.green,
  },
  '&[data-state="indeterminate"]': {
    backgroundColor: theme.colors.green,
    borderColor: theme.colors.green,
  },
  '&[data-state="indeterminate"]:hover': {
    borderColor: theme.colors.green,
  },
  '&[data-state="indeterminate"]:focus': {
    borderColor: theme.colors.green,
  },
});

export const StyledCheckboxIndicator = styled(CheckboxPrimitive.Indicator, {
  color: theme.colors.white,
});
