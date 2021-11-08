import * as React from "react";
import { Paragraph } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Paragraph",
  component: Paragraph,
};

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et imperdiet erat. Mauris tempus ligula eros, sed elementum leo imperdiet at. Suspendisse potenti. Phasellus eleifend facilisis urna sit amet lobortis. Cras et pulvinar quam. ";

export const Small: React.FC = () => <Paragraph size="small">{text}</Paragraph>;
export const Default: React.FC = () => <Paragraph>{text}</Paragraph>;
export const Dark: React.FC = () => <Paragraph color="dark">{text}</Paragraph>;
export const Inverse: React.FC = () => (
  <Paragraph color="inverse">{text}</Paragraph>
);
