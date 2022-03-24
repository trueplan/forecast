import * as React from "react";
import { Box } from "../../../primitives/box";
import { Button } from "../../button";
import { Heading } from "../../heading";
import { Paragraph } from "../../paragraph";
import { Text } from "../../../primitives/text";
import { Popover, PopoverTrigger, PopoverContent } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    chromatic: { delay: 1000 },
  },
};

export const Default: React.FC = () => (
  <Box css={{ padding: "10rem" }}>
    <Popover defaultOpen>
      <PopoverTrigger asChild>
        <Button size="iconSmall" variant="secondary">
          Open popover
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Text>When an owner approves, the request is completely approved.</Text>
      </PopoverContent>
    </Popover>
  </Box>
);

export const AdditionalContent: React.FC = () => (
  <Box css={{ padding: "10rem" }}>
    <Popover defaultOpen>
      <PopoverTrigger asChild>
        <Button size="iconSmall" variant="secondary">
          Open popover
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Heading as="h4" size="heading40" marginBottom="space0">
          Additional content header
        </Heading>
        <Paragraph>
          When an owner approves, the request is completely approved. When an
          owner approves, the request is completely approved.
        </Paragraph>
        <Button variant="primary">Click here</Button>
      </PopoverContent>
    </Popover>
  </Box>
);

export const AllDirectionsOpen: React.FC = () => (
  <Box
    css={{
      display: "grid",
      gridTemplateColumns: "repeat(3, max-content)",
      gridRowGap: "11rem",
      justifyContent: "space-between",
    }}
  >
    <div>
      <Popover open>
        <PopoverTrigger asChild>
          <Button size="iconSmall" variant="secondary">
            Open popover
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Text>
            When an owner approves, the request is completely approved.
          </Text>
        </PopoverContent>
      </Popover>
    </div>
    <div>
      <Popover open>
        <PopoverTrigger asChild>
          <Button size="iconSmall" variant="secondary">
            Open popover
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Text>
            When an owner approves, the request is completely approved.
          </Text>
        </PopoverContent>
      </Popover>
    </div>
    <div>
      <Popover open>
        <PopoverTrigger asChild>
          <Button size="iconSmall" variant="secondary">
            Open popover
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Text>
            When an owner approves, the request is completely approved.
          </Text>
        </PopoverContent>
      </Popover>
    </div>

    <div>
      <Popover open>
        <PopoverTrigger asChild>
          <Button size="iconSmall" variant="secondary">
            Open popover
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Text>
            When an owner approves, the request is completely approved.
          </Text>
        </PopoverContent>
      </Popover>
    </div>
    <div>
      <Popover open>
        <PopoverTrigger asChild>
          <Button size="iconSmall" variant="secondary">
            Open popover
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Text>
            When an owner approves, the request is completely approved.
          </Text>
        </PopoverContent>
      </Popover>
    </div>
    <div>
      <Popover open>
        <PopoverTrigger asChild>
          <Button size="iconSmall" variant="secondary">
            Open popover
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Text>
            When an owner approves, the request is completely approved.
          </Text>
        </PopoverContent>
      </Popover>
    </div>
  </Box>
);
