import * as React from 'react';
import { Stack } from '../../../layout/stack';
import { Status } from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Status',
  component: Status,
};

export const Default: React.FC = () => (
  <Stack align="flex-start" direction="vertical" spacing="$30">
    <Status>Status</Status>
    <Status color="blue">Status</Status>
    <Status color="gray">Status</Status>
    <Status color="green">Status</Status>
    <Status color="lilac">Status</Status>
    <Status color="red">Status</Status>
    <Status color="yellow">Status</Status>
  </Stack>
);

export const Filled: React.FC = () => (
  <Stack align="flex-start" direction="vertical" spacing="$30">
    <Status filled>Status</Status>
    <Status color="blue" filled>
      Status
    </Status>
    <Status color="gray" filled>
      Status
    </Status>
    <Status color="green" filled>
      Status
    </Status>
    <Status color="lilac" filled>
      Status
    </Status>
    <Status color="red" filled>
      Status
    </Status>
    <Status color="yellow" filled>
      Status
    </Status>
  </Stack>
);

export const LongText: React.FC = () => (
  <Status filled>This is a really really really really long status</Status>
);
