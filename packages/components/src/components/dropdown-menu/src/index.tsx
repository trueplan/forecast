import { keyframes } from '@stitches/react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { styled, theme } from '@forecast/theme';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

export const DropdownMenuContent = styled(DropdownMenuPrimitive.Content, {
  backgroundColor: theme.colors.white,
  borderStyle: 'solid',
  borderWidth: theme.borderWidths[10],
  borderColor: theme.colors.borderLight,
  borderRadius: theme.radii[30],
  padding: theme.space[25],
  minWidth: '180px',
  marginTop: theme.space[10],
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="open"]': {
    animationName: slideUpAndFade,
  },
});

const dropdownMenuItemStyles = {
  all: 'unset',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  color: theme.colors.textMedium,
  fontSize: theme.fontSizes[20],
  lineHeight: theme.lineHeights[20],
  fontFamily: theme.fonts.inter,
  cursor: 'pointer',
  px: theme.space[20],
  py: theme.space[10],
  borderRadius: theme.radii[30],

  '&[data-disabled]': {
    color: theme.colors.textLight,
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },

  '&:hover': {
    backgroundColor: theme.colors.gray20,
  },

  '&:focus': {
    backgroundColor: theme.colors.gray20,
  },
};

export const DropdownMenuItem = styled(DropdownMenuPrimitive.Item, {
  ...dropdownMenuItemStyles,
});

export const DropdownMenuItemLeftSlot = styled('div', {
  paddingRight: theme.space[25],
  color: theme.colors.textMedium,
  '[data-disabled] &': { color: theme.colors.textLight },
});

export const DropdownMenuItemRightSlot = styled('div', {
  marginLeft: 'auto',
  paddingLeft: theme.space[25],
  color: theme.colors.textMedium,
  '[data-disabled] &': { color: theme.colors.textLight },
});

export const DropdownMenuLabel = styled(DropdownMenuPrimitive.Label, {
  all: 'unset',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  color: theme.colors.textLight,
  fontSize: theme.fontSizes[10],
  lineHeight: theme.lineHeights[10],
  fontFamily: theme.fonts.inter,
  px: theme.space[20],
  py: theme.space[10],
});

export const DropdownMenuSeparator = styled(DropdownMenuPrimitive.Separator, {
  height: '1px',
  backgroundColor: theme.colors.borderLight,
  margin: theme.space[10],
});

export const DropdownMenu = DropdownMenuPrimitive.Root;

export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

export const DropdownMenuGroup = DropdownMenuPrimitive.Group;

export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

export const DropdownMenuRadioItem = styled(DropdownMenuPrimitive.RadioItem, {
  ...dropdownMenuItemStyles,
  '&[aria-checked=true]': {
    backgroundColor: theme.colors.gray20,
  },
});
