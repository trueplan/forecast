import * as React from "react";
import { Box } from "../../../primitives/box";
import { Text } from "../../../primitives/text";
import { Truncate } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Truncate",
  component: Truncate,
};

export const Default = (): React.ReactNode => {
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
