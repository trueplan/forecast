import * as React from 'react';
import { Box } from '../../../layout/box';
import { Card, CardHeader, CardFooter } from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Card',
  component: Card,
};

export const Default: React.FC = () => <Card>This is the content.</Card>;

export const Padding: React.FC = () => (
  <Card padding="space60">This is the content.</Card>
);

export const TopPadding: React.FC = () => (
  <Card paddingTop="space60">This is the content.</Card>
);

export const RightPadding: React.FC = () => (
  <Card paddingRight="space60">
    <Box css={{ textAlign: 'right' }}>This is the content.</Box>
  </Card>
);

export const BottomPadding: React.FC = () => (
  <Card paddingBottom="space60">This is the content.</Card>
);

export const LeftPadding: React.FC = () => (
  <Card paddingLeft="space60">This is the content.</Card>
);

export const Header: React.FC = () => (
  <Card>
    <CardHeader>Card header content.</CardHeader>
    <Card borderless padding="space40">
      This is the content.
    </Card>
  </Card>
);

export const Footer: React.FC = () => (
  <Card>
    <Card borderless padding="space40">
      This is the content.
    </Card>
    <CardFooter>Card footer content.</CardFooter>
  </Card>
);

export const HeaderAndFooter: React.FC = () => (
  <Card>
    <CardHeader>Card header content.</CardHeader>
    <Card borderless padding="space40">
      This is the content.
    </Card>
    <CardFooter>Card footer content.</CardFooter>
  </Card>
);
