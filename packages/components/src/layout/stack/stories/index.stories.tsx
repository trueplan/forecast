// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable sonarjs/no-duplicate-string */
import * as React from 'react';
import { Box } from '../../box';
import { Stack } from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Layout/Stack',
  component: Stack,
};

export const Default: React.FC = () => (
  <Stack spacing="$35">
    <Box
      css={{
        borderStyle: 'solid',
        borderWidth: '$20',
        borderColor: '$borderMedium',
        padding: '$50',
      }}
    >
      Card one
    </Box>
    <Box
      css={{
        borderStyle: 'solid',
        borderWidth: '$20',
        borderColor: '$borderMedium',
        padding: '$50',
      }}
    >
      Card two
    </Box>
    <Box
      css={{
        borderStyle: 'solid',
        borderWidth: '$20',
        borderColor: '$borderMedium',
        padding: '$50',
      }}
    >
      Card three
    </Box>
  </Stack>
);

export const Vertical: React.FC = () => (
  <Stack direction="vertical" spacing="$35">
    <Box
      css={{
        borderStyle: 'solid',
        borderWidth: '$20',
        borderColor: '$borderMedium',
        padding: '$50',
      }}
    >
      Card one
    </Box>
    <Box
      css={{
        borderStyle: 'solid',
        borderWidth: '$20',
        borderColor: '$borderMedium',
        padding: '$50',
      }}
    >
      Card two
    </Box>
    <Box
      css={{
        borderStyle: 'solid',
        borderWidth: '$20',
        borderColor: '$borderMedium',
        padding: '$50',
      }}
    >
      Card three
    </Box>
  </Stack>
);

export const SingleChild: React.FC = () => (
  <Stack spacing="$35">
    <Box
      css={{
        borderStyle: 'solid',
        borderWidth: '$20',
        borderColor: '$borderMedium',
        padding: '$50',
      }}
    >
      Card one
    </Box>
  </Stack>
);

export const List: React.FC = () => (
  <Stack as="ul" direction="vertical" spacing="$35">
    <Box
      as="li"
      css={{
        borderStyle: 'solid',
        borderWidth: '$20',
        borderColor: '$borderMedium',
        padding: '$50',
      }}
    >
      Card one
    </Box>
    <Box
      as="li"
      css={{
        borderStyle: 'solid',
        borderWidth: '$20',
        borderColor: '$borderMedium',
        padding: '$50',
      }}
    >
      Card two
    </Box>
  </Stack>
);
