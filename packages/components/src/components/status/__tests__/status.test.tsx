import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Status } from "../src";

describe("Status", () => {
  it("should render a status", () => {
    render(<Status>Status</Status>);
    const renderedStatus = screen.getByText("Status");
    expect(renderedStatus).not.toBeNull();
  });
});
