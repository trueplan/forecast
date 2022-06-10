import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Table, TBody, TD, TH, THead, TR } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Table",
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = () => {
  return (
    <Table tableLayout="fixed">
      <THead>
        <TH>File Name</TH>
        <TH>Date Uploaded</TH>
        <TH>Imported By</TH>
        <TH>Import Status</TH>
      </THead>
      <TBody>
        <TR>
          <TD>trueplan2.csv</TD>
          <TD>May 24, 2022 at 3:23pm</TD>
          <TD>Olivia Smith</TD>
          <TD>Failed</TD>
        </TR>
      </TBody>
    </Table>
  );
};

export const Default = Template.bind({});
Default.parameters = {
  docs: {
    storyDescription:
      "You can use the various table elements to make up your table without having to worry about the styling.",
  },
};
