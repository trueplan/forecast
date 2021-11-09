import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Badge } from "../src";

describe("Badge", () => {
  it("should render a badge", () => {
    render(<Badge data-testid="badge">8</Badge>);
    expect(screen.getByText("8")).toBeTruthy();
  });
});
