import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Label } from "../src";

const text = "Label";
const requiredText = "Required Label";

describe("Label", () => {
  it("should render a label", () => {
    render(<Label htmlFor="input-id">{text}</Label>);

    expect(screen.getByText(text)).toBeTruthy();
  });

  it("should render a required label", () => {
    render(
      <Label htmlFor="required-input-id" required>
        {requiredText}
      </Label>
    );

    expect(screen.getByText(requiredText)).toBeTruthy();
  });
});
