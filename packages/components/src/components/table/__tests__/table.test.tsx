import { render, screen } from "@testing-library/react";
import React from "react";
import { Table, TBody, TD, TH, THead, TR } from "../src";

describe("Table", () => {
  it("should render", async () => {
    render(
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

    const rowHeaders = screen.getAllByRole("columnheader");
    expect(rowHeaders[0].textContent).toEqual("File Name");
    expect(rowHeaders[1].textContent).toEqual("Date Uploaded");
    expect(rowHeaders[2].textContent).toEqual("Imported By");
    expect(rowHeaders[3].textContent).toEqual("Import Status");

    const cells = screen.getAllByRole("cell");
    expect(cells[0].textContent).toEqual("trueplan2.csv");
    expect(cells[1].textContent).toEqual("May 24, 2022 at 3:23pm");
    expect(cells[2].textContent).toEqual("Olivia Smith");
    expect(cells[3].textContent).toEqual("Failed");
  });
});
