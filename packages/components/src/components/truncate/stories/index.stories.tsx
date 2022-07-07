import * as React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "../../../primitives/box";
import { Text } from "../../../primitives/text";
import { Truncate } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Truncate",
  component: Truncate,
} as ComponentMeta<typeof Truncate>;

export const Default: ComponentStory<typeof Truncate> = () => {
  return (
    <Box css={{ maxWidth: "150px" }}>
      <Text as="p">
        <Truncate title="Some very long text to truncate">
          Some very long text to truncate
        </Truncate>
      </Text>
    </Box>
  );
};

export const Multiline: ComponentStory<typeof Truncate> = () => {
  return (
    <Box css={{ maxWidth: "250px" }}>
      <Text as="p">
        <Truncate
          title="Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet,
          consectetur. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum
          dolor sit amet, consectetur."
          lines={3}
        >
          Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet,
          consectetur. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum
          dolor sit amet, consectetur.
        </Truncate>
      </Text>
    </Box>
  );
};
