import * as React from 'react';
import {render, screen} from '@testing-library/react';
import {Box} from '../src';

describe('Box', () => {
  it('should render a Box as a div', () => {
    render(<Box data-testid="box">This is a div</Box>);
    const renderedBox = screen.getByTestId('box');
    expect(renderedBox).toBeDefined();
  });

  it('should render a Box as a button', () => {
    render(<Box as="button">This is a button</Box>);
    const renderedBox = screen.getByRole('button');
    expect(renderedBox).toBeDefined();
  });
});
