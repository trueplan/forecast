import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Priority } from "../src";

describe("Priority", () => {
  it("should render as priority one", () => {
    render(<Priority variant="one">P1</Priority>);
    expect(screen.getByRole("img", { hidden: true })).toBeDefined();
    expect(screen.getByText("P1")).toBeDefined();
  });

  it("should render as priority two", () => {
    render(<Priority variant="two">P2</Priority>);
    expect(screen.getByRole("img", { hidden: true })).toBeDefined();
    expect(screen.getByText("P2")).toBeDefined();
  });

  it("should render as priority three", () => {
    render(<Priority variant="three">P3</Priority>);
    expect(screen.getByRole("img", { hidden: true })).toBeDefined();
    expect(screen.getByText("P3")).toBeDefined();
  });

  it("should render as priority four", () => {
    render(<Priority variant="four">P4</Priority>);
    expect(screen.getByRole("img", { hidden: true })).toBeDefined();
    expect(screen.getByText("P4")).toBeDefined();
  });
});
