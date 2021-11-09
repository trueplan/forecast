import * as React from "react";
import { render, screen } from "@testing-library/react";
import { HelpText } from "../src";

describe("HelpText", () => {
  it("should render help text", () => {
    render(<HelpText>This is help text</HelpText>);
    const renderedHelpText = screen.getByText("This is help text");
    expect(renderedHelpText).not.toBeNull();
    expect(renderedHelpText.textContent).toEqual("This is help text");
  });
});
