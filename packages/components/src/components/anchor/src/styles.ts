import { styled, theme } from '@forecast/theme';

export const StyledAnchor = styled('a', {
  borderBottomColor: theme.colors.royal,
  borderBottomStyle: 'dashed',
  bbw: '$10',
  boxSizing: 'border-box',
  color: '$royal',
  cursor: 'pointer',
  display: 'inline-block',
  lineHeight: 'inherit',
  fontFamily: 'inherit',
  fontWeight: 'inherit',
  fontSize: 'inherit',
  textDecoration: 'none',
  outline: 'none',
  '&:active': {
    borderBottomStyle: 'solid',
    textDecoration: 'none',
  },
  '&:focus': {
    borderBottomStyle: 'solid',
    textDecoration: 'none',
    outline: '$borderWidths$20 solid $royal50 !important',
    outlineOffset: theme.space[5],
  },
  '&:hover': {
    borderBottomStyle: 'solid',
    textDecoration: 'none',
  },
  variants: {
    size: {
      small: {
        fontSize: '$10',
        lineHeight: '$10',
      },
      medium: {
        fontSize: '$20',
        lineHeight: '$20',
      },
      large: {
        fontSize: '$30',
        lineHeight: '$30',
      },
    },
    noUnderline: {
      true: {
        borderBottomColor: 'transparent',
        '&:active': {
          borderBottomColor: theme.colors.royal,
          borderBottomStyle: 'dashed',
        },
        '&:focus': {
          borderBottomColor: theme.colors.royal,
          borderBottomStyle: 'dashed',
        },
        '&:hover': {
          borderBottomColor: theme.colors.royal,
          borderBottomStyle: 'dashed',
        },
      },
    },
  },
});
