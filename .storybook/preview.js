import * as React from 'react';
import {globalStyles} from '../packages/theme';

export const decorators = [
  (Story) => {
    globalStyles();
    return (
      <>
        <Story />
      </>
    );
  },
];

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {expanded: true},
};
