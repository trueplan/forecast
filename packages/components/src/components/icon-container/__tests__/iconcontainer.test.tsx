import * as React from "react";
import { render, screen } from "@testing-library/react";
import { IconContainer } from "../src";

describe("Icon Container", () => {
  it("should render an icon container", () => {
    render(<IconContainer>This is an icon container</IconContainer>);
    const renderedIconContainer = screen.getByText("This is an icon container");
    expect(renderedIconContainer).not.toBeNull();
  });
});
