import * as React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "../../../primitives/box";
import { Card, CardHeader, CardFooter } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

export const Default: ComponentStory<typeof Card> = () => (
  <Card>This is the content.</Card>
);

export const Padding: ComponentStory<typeof Card> = () => (
  <Card padding="space60">This is the content.</Card>
);

export const TopPadding: ComponentStory<typeof Card> = () => (
  <Card paddingTop="space60">This is the content.</Card>
);

export const RightPadding: ComponentStory<typeof Card> = () => (
  <Card paddingRight="space60">
    <Box css={{ textAlign: "right" }}>This is the content.</Box>
  </Card>
);

export const BottomPadding: ComponentStory<typeof Card> = () => (
  <Card paddingBottom="space60">This is the content.</Card>
);

export const LeftPadding: ComponentStory<typeof Card> = () => (
  <Card paddingLeft="space60">This is the content.</Card>
);

export const Header: ComponentStory<typeof Card> = () => (
  <Card>
    <CardHeader>Card header content.</CardHeader>
    <Card borderless padding="space40">
      This is the content.
    </Card>
  </Card>
);

export const Footer: ComponentStory<typeof Card> = () => (
  <Card>
    <Card borderless padding="space40">
      This is the content.
    </Card>
    <CardFooter>Card footer content.</CardFooter>
  </Card>
);

export const HeaderAndFooter: ComponentStory<typeof Card> = () => (
  <Card>
    <CardHeader>Card header content.</CardHeader>
    <Card borderless padding="space40">
      This is the content.
    </Card>
    <CardFooter>Card footer content.</CardFooter>
  </Card>
);
