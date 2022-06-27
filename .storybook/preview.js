import * as React from "react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
} from "@storybook/addon-docs";
import { globalStyles } from "../packages/theme";

export const decorators = [
  (Story) => {
    globalStyles();
    return (
      <>
        <Story />
      </>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
  docs: {
    page: () => (
      <>
        <Title />
        <Description />
        <Primary />
        <ArgsTable />
        <Stories />
      </>
    ),
    source: {
      state: "open",
    },
  },
};
