import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Pill } from "../src";

describe("Pill", () => {
  it("should render a pill", () => {
    render(<Pill>I'm a pill</Pill>);
    const renderedPill = screen.getByText("I'm a pill");
    expect(renderedPill).not.toBeNull();
  });
});
