import * as React from "react";
import { Tag } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Tag",
  component: Tag,
};

export const Default: React.FC = () => <Tag>Tag Name</Tag>;

export const Dismissable: React.FC = () => (
  <Tag onDismiss={() => console.log("clicked")}>Tag Name</Tag>
);

export const Medium: React.FC = () => <Tag size="medium">Tag Name</Tag>;

export const MediumDismissable: React.FC = () => (
  <Tag onDismiss={() => console.log("clicked")} size="medium">
    Tag Name
  </Tag>
);
