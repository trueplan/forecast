import * as React from "react";
import { Box } from "../../../primitives/box";
import {
  ResourceLink,
  ResourceLinkCategory,
  ResourceLinkTitle,
  ResourceLinkTimeStamp,
} from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Resource Link",
  component: ResourceLink,
};

export const Default: React.FC = () => (
  <ResourceLink href="/">
    <ResourceLinkCategory>Get Started</ResourceLinkCategory>
    <ResourceLinkTitle>Product Overview</ResourceLinkTitle>
  </ResourceLink>
);

export const Video: React.FC = () => (
  <ResourceLink href="/" variant="video">
    <ResourceLinkCategory>Get Started</ResourceLinkCategory>
    <ResourceLinkTitle>Product Overview</ResourceLinkTitle>
    <ResourceLinkTimeStamp>4:40</ResourceLinkTimeStamp>
  </ResourceLink>
);

export const SetWidth: React.FC = () => (
  <Box css={{ maxWidth: "250px" }}>
    <ResourceLink href="/">
      <ResourceLinkCategory>Get Started</ResourceLinkCategory>
      <ResourceLinkTitle>Product Overview</ResourceLinkTitle>
    </ResourceLink>
  </Box>
);

export const Multiline: React.FC = () => (
  <Box css={{ maxWidth: "250px" }}>
    <ResourceLink href="/" variant="video">
      <ResourceLinkCategory>Get Started</ResourceLinkCategory>
      <ResourceLinkTitle>
        This is a longer multiline resource link title that should be four lines
        in this storybook example
      </ResourceLinkTitle>
      <ResourceLinkTimeStamp>4:40</ResourceLinkTimeStamp>
    </ResourceLink>
  </Box>
);

export const Grid: React.FC = () => (
  <Box
    css={{
      maxWidth: "412px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "$30",
    }}
  >
    <Box>
      <ResourceLink href="/" variant="video">
        <ResourceLinkCategory>Get Started</ResourceLinkCategory>
        <ResourceLinkTitle>Product Overview</ResourceLinkTitle>
        <ResourceLinkTimeStamp>4:40</ResourceLinkTimeStamp>
      </ResourceLink>
    </Box>
    <Box>
      <ResourceLink href="/">
        <ResourceLinkCategory>Get Started</ResourceLinkCategory>
        <ResourceLinkTitle>Product Overview</ResourceLinkTitle>
      </ResourceLink>
    </Box>
    <Box>
      <ResourceLink href="/">
        <ResourceLinkCategory>Get Started</ResourceLinkCategory>
        <ResourceLinkTitle>Product Overview</ResourceLinkTitle>
      </ResourceLink>
    </Box>
    <Box>
      <ResourceLink href="/" variant="video">
        <ResourceLinkCategory>Get Started</ResourceLinkCategory>
        <ResourceLinkTitle>
          This is a longer multiline resource link title that should be four
          lines in this storybook example
        </ResourceLinkTitle>
        <ResourceLinkTimeStamp>4:40</ResourceLinkTimeStamp>
      </ResourceLink>
    </Box>
  </Box>
);
