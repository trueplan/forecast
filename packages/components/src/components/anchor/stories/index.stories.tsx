import * as React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Heading } from "../../heading";
import { Paragraph } from "../../paragraph";
import { Anchor } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Anchor",
  component: Anchor,
} as ComponentMeta<typeof Anchor>;

const Template: ComponentStory<typeof Anchor> = (args) => (
  <Anchor href="https://trueplan.io" {...args}>
    I'm an anchor
  </Anchor>
);

export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  size: "small",
};
Small.parameters = {
  docs: {
    storyDescription: "Use the small size prop for a smaller font size.",
  },
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
};
Medium.parameters = {
  docs: {
    storyDescription:
      "Use the medium size prop for the base Trueplan font size.",
  },
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};
Large.parameters = {
  docs: {
    storyDescription: "Use the large size prop for a larger font size.",
  },
};

export const NoUnderline = Template.bind({});
NoUnderline.args = {
  noUnderline: true,
};
NoUnderline.parameters = {
  docs: {
    storyDescription:
      "Use the `noUnderline` prop when you want to remove the underline style. The underline will still appear on hover.",
  },
};

export const External = Template.bind({});
External.args = {
  isExternal: true,
};
External.parameters = {
  docs: {
    storyDescription:
      "Setting the `isExternal` prop will sets the `target` to `_blank` and the `rel` to `noreferrer noopener`.",
  },
};

export const InHeading: ComponentStory<typeof Anchor> = () => (
  <Heading size="heading20" as="h2">
    <Anchor href="#">
      I'm an anchor which inherits font size from the heading
    </Anchor>
  </Heading>
);
InHeading.parameters = {
  docs: {
    storyDescription: "The Anchor will inherit its parents font size.",
  },
};

export const InParagraph: ComponentStory<typeof Anchor> = () => (
  <>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec erat
      id nisi tristique dignissim. Phasellus a sem a ligula sollicitudin dictum
      et quis lacus. <Anchor href="#">I'm an anchor</Anchor> Lorem ipsum dolor
      sit amet, consectetur adipiscing elit. Mauris nec erat id nisi tristique
      dignissim. Phasellus a sem a ligula sollicitudin dictum et quis lacus.
    </Paragraph>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec erat
      id nisi tristique dignissim. Phasellus a sem a ligula sollicitudin dictum
      et quis lacus.{" "}
      <Anchor href="#" noUnderline>
        I'm an anchor
      </Anchor>{" "}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec erat
      id nisi tristique dignissim. Phasellus a sem a ligula sollicitudin dictum
      et quis lacus.
    </Paragraph>
  </>
);
InParagraph.parameters = {
  docs: {
    storyDescription: "Anchors should be clearly visible in paragraphs.",
  },
};
