import * as React from "react";
import { Heading } from "../../heading";
import { Paragraph } from "../../paragraph";
import { Anchor } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Anchor",
  component: Anchor,
};

export const Default: React.FC = () => <Anchor href="#">I'm an anchor</Anchor>;

export const Small: React.FC = () => (
  <Anchor href="#" size="small">
    I'm an small anchor
  </Anchor>
);

export const Medium: React.FC = () => (
  <Anchor href="#" size="medium">
    I'm an medium anchor
  </Anchor>
);

export const Large: React.FC = () => (
  <Anchor href="#" size="large">
    I'm an large anchor
  </Anchor>
);

export const NoUnderline: React.FC = () => (
  <Anchor href="#" noUnderline>
    I'm an anchor with no underline
  </Anchor>
);

export const External: React.FC = () => (
  <Anchor href="#" isExternal>
    I'm an anchor that opens an external url
  </Anchor>
);

export const InHeading: React.FC = () => (
  <Heading size="heading20" as="h2">
    <Anchor href="#">
      I'm an anchor which inherits font size from the heading
    </Anchor>
  </Heading>
);

export const InParagraph: React.FC = () => (
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
