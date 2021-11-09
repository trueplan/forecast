import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Checkbox } from "../src";

describe("Checkbox", () => {
  it("should render a checkbox", () => {
    render(<Checkbox id="test">Unchecked</Checkbox>);
    const renderedCheckbox = screen.getByRole("checkbox");
    expect(renderedCheckbox).not.toBeNull();
  });

  it("should render a checked checkbox", () => {
    render(
      <Checkbox id="test" defaultChecked>
        Checked
      </Checkbox>
    );
    const renderedCheckbox = screen.getByRole("checkbox");
    expect(renderedCheckbox.getAttribute("aria-checked")).toBeTruthy();
    expect(renderedCheckbox.getAttribute("data-state")).toEqual("checked");
  });

  it("should render a disabled checkbox", () => {
    render(
      <Checkbox id="test" disabled>
        Disabled
      </Checkbox>
    );
    const renderedCheckbox = screen.getByRole("checkbox");
    expect(renderedCheckbox.getAttribute("disabled")).toEqual("");
  });

  it("should render a indeterminate checkbox", () => {
    render(
      <Checkbox id="test" checked="indeterminate">
        Indeterminate
      </Checkbox>
    );
    const renderedCheckbox = screen.getByRole("checkbox");
    expect(renderedCheckbox.getAttribute("aria-checked")).toEqual("mixed");
    expect(renderedCheckbox.getAttribute("data-state")).toEqual(
      "indeterminate"
    );
  });

  it("should render an id", () => {
    render(<Checkbox id="test">Checked</Checkbox>);
    const renderedCheckbox = screen.getByRole("checkbox");
    expect(renderedCheckbox.getAttribute("id")).toEqual("test");
  });

  it("should render a value", () => {
    render(
      <Checkbox id="test" value="test">
        Checked
      </Checkbox>
    );
    const renderedCheckbox = screen.getByRole("checkbox");
    expect(renderedCheckbox.getAttribute("value")).toEqual("test");
  });
});
