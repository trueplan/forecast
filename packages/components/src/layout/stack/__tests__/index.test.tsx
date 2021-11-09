import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Stack } from "../src";

describe("Stack", () => {
  it("should render a Stack as a div", () => {
    render(<Stack data-testid="stack">This is a stacked div</Stack>);
    const renderedStack = screen.getByTestId("stack");
    expect(renderedStack).toBeDefined();
  });

  it("should render a Stack as a heading", () => {
    render(<Stack as="header">This is a stacked header</Stack>);
    const renderedStack = screen.getByRole("banner");
    expect(renderedStack.tagName).toEqual("HEADER");
    expect(renderedStack).toBeDefined();
  });
});
