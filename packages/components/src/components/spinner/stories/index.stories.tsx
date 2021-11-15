import * as React from "react";
import { Box } from "../../../primitives/box";
import { Stack } from "../../../layout/stack";
import { Spinner } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Spinner",
  component: Spinner,
};

export const Sizes: React.FC = () => (
  <Stack direction="horizontal" spacing="$80">
    <Spinner label="Loading" size="small" />
    <Spinner label="Loading" size="medium" />
    <Spinner label="Loading" size="large" />
  </Stack>
);

export const Inverse: React.FC = () => (
  <Box css={{ backgroundColor: "$overlay", padding: "$40" }}>
    <Stack direction="horizontal" spacing="$80">
      <Spinner label="Loading" size="small" inverse />
      <Spinner label="Loading" size="medium" inverse />
      <Spinner label="Loading" size="large" inverse />
    </Stack>
  </Box>
);
