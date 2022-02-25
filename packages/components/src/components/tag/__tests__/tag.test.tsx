import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Tag } from "../src";

describe("Tag", () => {
  it("should render a tag", () => {
    render(<Tag data-testid="tag">tag</Tag>);
    const renderedTag = screen.getByTestId("tag");
    expect(renderedTag).not.toBeNull();
  });

  it("should render a dismissable tag", () => {
    render(<Tag onDismiss={() => void 0}>tag</Tag>);
    const renderedDismissableTagButton = screen.getByRole("button");
    expect(renderedDismissableTagButton).not.toBeNull();
  });
});
