import { render } from "@testing-library/react";
import React from "react";
import { Table, TBody, TD, TH, THead, TR } from "../src";

describe("Table", () => {
  it("should render", async () => {
    const { container } = render(
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

    expect(container).toMatchSnapshot();
  });
});
