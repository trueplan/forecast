import { styled, theme } from '@forecast/theme';

export const StyledInputBox = styled('div', {
  backgroundColor: theme.colors.white,
  borderColor: theme.colors.gray50,
  borderRadius: theme.radii[30],
  borderStyle: 'solid',
  borderWidth: theme.borderWidths[10],
  color: theme.colors.textMedium,
  fontFamily: theme.fonts.inter,
  fontSize: theme.fontSizes[20],
  fontWeight: theme.fontWeights.medium,
  lineHeight: theme.lineHeights[20],
  transition: 'border-color 100ms ease-in',
  cursor: 'auto',
  '&:active': {
    borderColor: theme.colors.borderMedium,
  },
  '&:focus-within': {
    borderColor: theme.colors.borderMedium,
    outline: '$borderWidths$10 solid $colors$gray60 !important',
    outlineOffset: '1px',
  },
  '&[data-disabled="true"]': {
    backgroundColor: theme.colors.gray20,
    color: theme.colors.gray70,
    cursor: 'not-allowed',
  },
  '&[data-has-error="true"]': {
    borderColor: theme.colors.red,
  },
  '&[data-hidden="true"]': {
    border: 'none',
  },
  '&[data-read-only="true"]': {
    backgroundColor: theme.colors.gray20,
  },
  variants: {
    fontFamily: {
      roboto: {
        fontFamily: theme.fonts.roboto,
      },
    },
    borderless: {
      true: {
        borderColor: 'transparent',
      },
    },
    centeredText: {
      true: {
        textAlign: 'center',
      },
    },
  },
});
