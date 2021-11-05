import * as React from 'react';
import {render, screen} from '@testing-library/react';
import {Card, CardHeader, CardFooter} from '../src';

describe('Card', () => {
  it('should render a card', () => {
    render(<Card>This is a card</Card>);
    const renderedCard = screen.getByText('This is a card');
    expect(renderedCard).not.toBeNull();
  });

  it('should render a card header', () => {
    render(<CardHeader>This is a card header</CardHeader>);
    const renderedCardHeader = screen.getByText('This is a card header');
    expect(renderedCardHeader).not.toBeNull();
  });

  it('should render a card footer', () => {
    render(<CardFooter>This is a card footer</CardFooter>);
    const renderedCardFooter = screen.getByText('This is a card footer');
    expect(renderedCardFooter).not.toBeNull();
  });
});
