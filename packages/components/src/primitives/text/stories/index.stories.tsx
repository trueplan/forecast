import * as React from "react";
import { Text } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Primitives/Text",
  component: Text,
};

export const Default: React.FC = () => <Text>This is the text component.</Text>;

export const Heading: React.FC = () => (
  <Text
    as="h2"
    fontWeight="semiBold"
    fontSize="fontSize40"
    lineHeight="lineHeight40"
  >
    This is the text component as a heading.
  </Text>
);

export const Paragraph: React.FC = () => (
  <Text as="p">This is the text component as a paragraph.</Text>
);

export const ErrorText: React.FC = () => (
  <Text color="textRed">This is the text component as an error.</Text>
);

export const Underlined: React.FC = () => (
  <Text textDecoration="underline">This is underlined text.</Text>
);
