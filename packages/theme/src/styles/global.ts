import { globalCss } from '@stitches/react';
import { theme } from '../themes/default';

export const globalStyles = globalCss({
  '*': {
    margin: theme.space[0],
    padding: theme.space[0],
  },
  html: {
    fontSize: '100%',
  },
  body: {
    backgroundColor: theme.colors.backgroundLight,
    color: theme.colors.textMedium,
    fontFamily: theme.fonts.inter,
    fontSize: theme.fontSizes[20],
    fontVariantNumeric: 'tabular-nums',
    fontWeight: theme.fontWeights.normal,
    lineHeight: theme.lineHeights[30],
    margin: theme.space[0],
  },
  '*, *::after, *::before': {
    boxSizing: 'border-box',
  },
  '@media (prefers-reduced-motion: reduce)': {
    '*': {
      animationDuration: '0 !important',
      animationIterationCount: '1 !important',
      transitionDuration: '0 !important',
      scrollBehavior: 'auto !important',
    },
  },
});
