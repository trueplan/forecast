import * as React from "react";
import { Stack } from "../../../layout/stack";
import { Priority } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Priority",
  component: Priority,
};

export const Default: React.FC = () => (
  <Stack direction="vertical" spacing="$30">
    <Priority variant="one">P1</Priority>
    <Priority variant="two">P2</Priority>
    <Priority variant="three">P3</Priority>
    <Priority variant="four">P4</Priority>
  </Stack>
);

export const PriorityOne: React.FC = () => (
  <Priority variant="one">P1</Priority>
);

export const PriorityTwo: React.FC = () => (
  <Priority variant="two">P2</Priority>
);

export const PriorityThree: React.FC = () => (
  <Priority variant="three">P3</Priority>
);

export const PriorityFour: React.FC = () => (
  <Priority variant="four">P4</Priority>
);
