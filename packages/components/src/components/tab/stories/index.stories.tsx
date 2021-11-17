import * as React from "react";
import { Box } from "../../../primitives/box";
import { Badge } from "../../badge";
import { Heading } from "../../heading";
import { Paragraph } from "../../paragraph";
import { Tabs, TabsList, TabTrigger, TabContent } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Tabs",
  component: Tabs,
};

export const Default: React.FC = () => {
  return (
    <Tabs defaultValue="tab1">
      <TabsList aria-label="List of tabs">
        <TabTrigger value="tab1">Tab One</TabTrigger>
        <TabTrigger value="tab2">Tab Two</TabTrigger>
      </TabsList>
      <TabContent value="tab1">
        <Box css={{ padding: "$35" }}>
          <Heading as="h2" size="heading20">
            Tab One
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            accumsan ac turpis a elementum. Proin ligula nisl, aliquet at
            condimentum et, sodales vel purus.
          </Paragraph>
        </Box>
      </TabContent>
      <TabContent value="tab2">
        <Box css={{ padding: "$35" }}>
          <Heading as="h2" size="heading20">
            Tab Two
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            accumsan ac turpis a elementum. Proin ligula nisl, aliquet at
            condimentum et, sodales vel purus.
          </Paragraph>
        </Box>
      </TabContent>
    </Tabs>
  );
};

export const Centered: React.FC = () => {
  return (
    <Tabs defaultValue="tab1">
      <TabsList aria-label="List of tabs" centered>
        <TabTrigger value="tab1">Tab One</TabTrigger>
        <TabTrigger value="tab2">Tab Two</TabTrigger>
      </TabsList>
      <TabContent value="tab1">
        <Box css={{ padding: "$35" }}>
          <Heading as="h2" size="heading20">
            Tab One
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            accumsan ac turpis a elementum. Proin ligula nisl, aliquet at
            condimentum et, sodales vel purus.
          </Paragraph>
        </Box>
      </TabContent>
      <TabContent value="tab2">
        <Box css={{ padding: "$35" }}>
          <Heading as="h2" size="heading20">
            Tab Two
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            accumsan ac turpis a elementum. Proin ligula nisl, aliquet at
            condimentum et, sodales vel purus.
          </Paragraph>
        </Box>
      </TabContent>
    </Tabs>
  );
};

export const ReallyLongTab: React.FC = () => {
  return (
    <Tabs defaultValue="tab1">
      <TabsList aria-label="List of tabs">
        <TabTrigger value="tab1">Tab One</TabTrigger>
        <TabTrigger value="tab2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </TabTrigger>
      </TabsList>
      <TabContent value="tab1">
        <Box css={{ padding: "$35" }}>
          <Heading as="h2" size="heading20">
            Tab One
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            accumsan ac turpis a elementum. Proin ligula nisl, aliquet at
            condimentum et, sodales vel purus.
          </Paragraph>
        </Box>
      </TabContent>
      <TabContent value="tab2">
        <Box css={{ padding: "$35" }}>
          <Heading as="h2" size="heading20">
            Tab Two
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            accumsan ac turpis a elementum. Proin ligula nisl, aliquet at
            condimentum et, sodales vel purus.
          </Paragraph>
        </Box>
      </TabContent>
    </Tabs>
  );
};

export const TabWithBadge: React.FC = () => {
  return (
    <Tabs defaultValue="tab1">
      <TabsList aria-label="List of tabs">
        <TabTrigger value="tab1">Tab One</TabTrigger>
        <TabTrigger value="tab2">
          Tab Two{" "}
          <Box as="span" css={{ marginLeft: "$15" }}>
            <Badge fontFamily="roboto">0</Badge>
          </Box>
        </TabTrigger>
      </TabsList>
      <TabContent value="tab1">
        <Box css={{ padding: "$35" }}>
          <Heading as="h2" size="heading20">
            Tab One
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            accumsan ac turpis a elementum. Proin ligula nisl, aliquet at
            condimentum et, sodales vel purus.
          </Paragraph>
        </Box>
      </TabContent>
      <TabContent value="tab2">
        <Box css={{ padding: "$35" }}>
          <Heading as="h2" size="heading20">
            Tab Two
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            accumsan ac turpis a elementum. Proin ligula nisl, aliquet at
            condimentum et, sodales vel purus.
          </Paragraph>
        </Box>
      </TabContent>
    </Tabs>
  );
};
