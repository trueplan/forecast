import * as React from "react";
import { Heading } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Heading",
  component: Heading,
};

export const Default: React.FC = () => <Heading>I'm a Heading</Heading>;

export const Heading10: React.FC = () => (
  <Heading size="heading10" as="h1">
    I'm a h1 element with heading10 styles
  </Heading>
);

export const Heading20: React.FC = () => (
  <Heading size="heading20" as="h2">
    I'm a h2 element with heading20 styles
  </Heading>
);

export const Heading30: React.FC = () => (
  <Heading size="heading30" as="h3">
    I'm a h3 element with heading30 styles
  </Heading>
);

export const Heading40: React.FC = () => (
  <Heading size="heading40" as="h4">
    I'm a h4 element with heading40 styles
  </Heading>
);

export const Heading50: React.FC = () => (
  <Heading size="heading50" as="h5">
    I'm a h5 element with heading50 styles
  </Heading>
);
export const Heading60: React.FC = () => (
  <Heading size="heading60" as="h6">
    I'm a h6 element with heading60 styles
  </Heading>
);
export const Heading30withHeading10styles: React.FC = () => (
  <Heading size="heading10" as="h3">
    I'm a h3 element with heading10 styles
  </Heading>
);

export const Heading10withNoBottomMargin: React.FC = () => (
  <Heading size="heading10" as="h1" marginBottom="space0">
    I'm a h1 element with heading10 styles and no margin bottom
  </Heading>
);
