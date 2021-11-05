import * as React from 'react';
import {theme} from '@forecast/theme';
import {Box} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Layout/Box',
  component: Box,
};

export const Default: React.FC = () => (
  <>
    <Box
      css={{
        backgroundColor: theme.colors.backgroundInverse,
        color: theme.colors.textDark,
        p: '$20',
        borderStyle: 'solid',
        borderWidth: theme.borderWidths[20],
        borderRadius: theme.radii[30],
        borderColor: '$blue150',
      }}
    >
      I'm a box and can take any styles as well as any of our theme styles.
    </Box>
  </>
);

export const Card: React.FC = () => (
  <Box css={{maxWidth: '280px'}}>
    <Box
      css={{
        backgroundColor: '$white',
        color: theme.colors.textLight,
        textAlign: 'center',
        p: '$20',
        borderStyle: 'solid',
        borderWidth: theme.borderWidths[10],
        btlr: theme.radii[30],
        btrr: theme.radii[30],
        borderColor: theme.colors.borderLight,
        textTransform: 'uppercase',
        fontSize: theme.fontSizes[10],
      }}
    >
      Requests
    </Box>
    <Box
      css={{
        backgroundColor: '$white',
        textAlign: 'center',
        p: '$40',
        borderLeftStyle: 'solid',
        borderLeftWidth: theme.borderWidths[10],
        borderLeftColor: theme.colors.borderLight,
        borderRightStyle: 'solid',
        borderRightWidth: theme.borderWidths[10],
        borderRightColor: theme.colors.borderLight,
        borderBottomStyle: 'solid',
        borderBottomWidth: theme.borderWidths[10],
        borderBottomColor: theme.colors.borderLight,
        bblr: theme.radii[30],
        bbrr: theme.radii[30],
      }}
    >
      <Box as="p" css={{color: theme.colors.textLight}}>
        You do not have any drafts created.
      </Box>
      <Box
        css={{
          color: theme.colors.textLight,
          fontSize: theme.fontSizes[80],
          lineHeight: theme.fontSizes[80],
          fw: '$medium',
          mt: '$40',
        }}
      >
        0
      </Box>
      <Box
        as="button"
        css={{
          backgroundColor: theme.colors.white,
          py: '$20',
          px: '$60',
          mt: '$60',
          fw: '$medium',
          borderColor: theme.colors.borderLight,
          borderWidth: '$10',
          br: '$30',
          borderStyle: 'solid',
          cursor: 'pointer',
          color: theme.colors.textMedium,
          fontFamily: 'inherit',
          fontSize: theme.fontSizes[30],
          '&:hover': {
            borderColor: theme.colors.borderDark,
          },
        }}
      >
        Add Requests
      </Box>
    </Box>
  </Box>
);

export const Grid: React.FC = () => (
  <>
    <Box
      css={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr);',
        gap: theme.space[20],
      }}
    >
      <Box
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.colors.backgroundDark,
          color: theme.colors.textInverse,
          p: '$20',
        }}
      >
        Column one
      </Box>
      <Box
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.colors.backgroundDark,
          color: theme.colors.textInverse,
          p: '$20',
        }}
      >
        Column two
      </Box>
      <Box
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.colors.backgroundDark,
          color: theme.colors.textInverse,
          p: '$20',
        }}
      >
        Column three
      </Box>
      <Box
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.colors.backgroundDark,
          color: theme.colors.textInverse,
          p: '$20',
        }}
      >
        Column four
      </Box>
      <Box
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.colors.backgroundDark,
          color: theme.colors.textInverse,
          p: '$20',
        }}
      >
        Column one
      </Box>
      <Box
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.colors.backgroundDark,
          color: theme.colors.textInverse,
          p: '$20',
        }}
      >
        Column two
      </Box>
      <Box
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.colors.backgroundDark,
          color: theme.colors.textInverse,
          p: '$20',
        }}
      >
        Column three
      </Box>
      <Box
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.colors.backgroundDark,
          color: theme.colors.textInverse,
          p: '$20',
        }}
      >
        Column four
      </Box>
    </Box>
  </>
);
