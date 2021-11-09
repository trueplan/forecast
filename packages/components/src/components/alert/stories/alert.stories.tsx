import * as React from "react";
import type { Story } from "@storybook/react";
import { Anchor } from "../../anchor";
import { Box } from "../../../layout/box";
import { Paragraph } from "../../paragraph";
// import { Anchor } from "../../Anchor/src";
import type { AlertProps } from "../src";
import { Alert } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Alert",
  component: Alert,
  args: {
    title: "Alert Title",
    onDismiss: (): void => void 0,
  },
};

const Template: Story<AlertProps> = ({ onDismiss, ...props }) => (
  <Box css={{ display: "grid", gridRowGap: "$35", maxWidth: "434px" }}>
    {console.log(props)}
    <Alert onDismiss={onDismiss} {...props}>
      <Paragraph marginBottom="space0">
        Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet,
        consectetur.
      </Paragraph>
      <Box css={{ marginTop: "$10" }}>
        <Anchor>Learn More</Anchor>
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

export const Warning = Template.bind({});
Warning.args = { variant: "warning" };

export const Error = Template.bind({});
Error.args = { variant: "error" };

export const Info = Template.bind({});
Info.args = { variant: "info" };
