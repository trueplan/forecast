import * as React from "react";
import type { Story } from "@storybook/react";
import type { BadgeProps } from "../src";
import { Badge } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Badge",
  component: Badge,
  args: {},
};

const Template: Story<BadgeProps> = (props) => (
  <div style={{ display: "flex", gap: "10px" }}>
    <Badge color="lilac" {...props}>
      0
    </Badge>
    <Badge color="green" {...props}>
      1
    </Badge>
    <Badge color="red" {...props}>
      2
    </Badge>
    <Badge color="gray" {...props}>
      3
    </Badge>
    <Badge {...props}>100</Badge>
  </div>
);

export const Small = Template.bind({});
Small.args = { size: "small" };

export const Medium = Template.bind({});
Medium.args = { size: "medium" };

export const Large = Template.bind({});
Large.args = { size: "large" };
