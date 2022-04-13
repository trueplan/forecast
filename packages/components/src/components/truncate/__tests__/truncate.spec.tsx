import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Truncate } from "../src";

describe("Truncate", () => {
  render(
    <Truncate
      title="Some very long text to truncate"
      data-testid="test-truncate"
    >
      Some very long text to truncate
    </Truncate>
  );
  const TruncateElement = screen.getByTestId("test-truncate");

  it("should render truncate", () => {
    expect(TruncateElement).toBeDefined();
  });

  it("should render truncate with a title", () => {
    expect(TruncateElement.getAttribute("title")).toEqual(
      "Some very long text to truncate"
    );
  });
});
