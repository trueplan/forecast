import * as React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Anchor } from "../../anchor";
import { Box } from "../../../primitives/box";
import { Paragraph } from "../../paragraph";
import { Alert } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Alert",
  component: Alert,
  args: {
    title: "Alert Title",
    onDismiss: (): void => void 0,
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = ({ onDismiss, ...props }) => (
  <Box css={{ display: "grid", gridRowGap: "$35", maxWidth: "434px" }}>
    <Alert onDismiss={onDismiss} {...props}>
      <Paragraph marginBottom="space0">
        Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet,
        consectetur.
      </Paragraph>
      <Box css={{ marginTop: "$10" }}>
        <Anchor href="#">Learn More</Anchor>
      </Box>
    </Alert>
    <Alert onDismiss={onDismiss} {...props} />
    <Alert {...props} />
    <Alert onDismiss={onDismiss} {...props}>
      <Paragraph marginBottom="space0">
        Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet,
        consectetur.
      </Paragraph>
    </Alert>
    <Alert {...props}>
      <Paragraph marginBottom="space0">
        Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet,
        consectetur.
      </Paragraph>
    </Alert>
  </Box>
);

export const Success = Template.bind({});
Success.args = { variant: "success" };
Success.parameters = {
  docs: {
    storyDescription:
      "Use a success alert to notify a user that their action was successful.",
  },
};

export const Warning = Template.bind({});
Warning.args = { variant: "warning" };
Warning.parameters = {
  docs: {
    storyDescription:
      "Use a warning alert to help a user avoid an issue. If the user can take an immediate action to avoid the issue, provide a way to do that.",
  },
};

export const Error = Template.bind({});
Error.args = { variant: "error" };
Error.parameters = {
  docs: {
    storyDescription:
      "Use an error alert to help a user understand a critical issue at the system level. Provide a way to resolve the issue in the alert.",
  },
};

export const Info = Template.bind({});
Info.args = { variant: "info" };
Info.parameters = {
  docs: {
    storyDescription:
      "Use an informational alert to notify a user of a change that's relevant for them.",
  },
};
