import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Text } from "../src";

describe("Text", () => {
  it("should render a Text as a span", () => {
    render(<Text data-testid="text">This is a span</Text>);
    const renderedText = screen.getByTestId("text");
    expect(renderedText).toBeDefined();
  });

  it("should render a Text as a heading", () => {
    render(<Text as="h1">This is a heading</Text>);
    const renderedText = screen.getByRole("heading", { level: 1 });
    expect(renderedText).toBeDefined();
  });
});
