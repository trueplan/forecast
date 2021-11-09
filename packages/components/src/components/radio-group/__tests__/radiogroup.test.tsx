import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Radio, RadioGroup } from "../src";

describe("RadioGroup", () => {
  it("should render a radio group", () => {
    render(
      <RadioGroup label="View density">
        <Radio value="default" id="default">
          Default
        </Radio>
      </RadioGroup>
    );
    const renderedRadioGroup = screen.getByRole("radiogroup");
    const renderedRadio = screen.getByRole("radio");
    expect(renderedRadioGroup).not.toBeNull();
    expect(renderedRadio).not.toBeNull();
  });

  it("should render a radio group with an accessible label", () => {
    render(
      <RadioGroup label="View density">
        <Radio value="default" id="default">
          Default
        </Radio>
      </RadioGroup>
    );
    const renderedRadioGroup = screen.getByRole("radiogroup");
    expect(renderedRadioGroup.getAttribute("aria-label")).toEqual(
      "View density"
    );
  });

  it("should render a unchecked radio", () => {
    render(
      <RadioGroup label="View density">
        <Radio value="default" id="default">
          Default
        </Radio>
      </RadioGroup>
    );
    const renderedRadio = screen.getByRole("radio");
    expect(renderedRadio.getAttribute("aria-checked")).toEqual("false");
    expect(renderedRadio.getAttribute("data-state")).toEqual("unchecked");
  });

  it("should render a checked radio", () => {
    render(
      <RadioGroup label="View density" defaultValue="default">
        <Radio value="default" id="default">
          Default
        </Radio>
      </RadioGroup>
    );
    const renderedRadio = screen.getByRole("radio");
    expect(renderedRadio.getAttribute("aria-checked")).toEqual("true");
    expect(renderedRadio.getAttribute("data-state")).toEqual("checked");
  });

  it("should render a disabled radio", () => {
    render(
      <RadioGroup label="View density">
        <Radio value="default" id="default" disabled>
          Default
        </Radio>
      </RadioGroup>
    );
    const renderedRadio = screen.getByRole("radio");
    expect(renderedRadio.getAttribute("disabled")).toEqual("");
  });

  it("should render an id", () => {
    render(
      <RadioGroup label="View density">
        <Radio value="default" id="default">
          Default
        </Radio>
      </RadioGroup>
    );
    const renderedCheckbox = screen.getByRole("radio");
    expect(renderedCheckbox.getAttribute("id")).toEqual("default");
  });

  it("should render a value", () => {
    render(
      <RadioGroup label="View density">
        <Radio value="default" id="default">
          Default
        </Radio>
      </RadioGroup>
    );
    const renderedRadio = screen.getByRole("radio");
    expect(renderedRadio.getAttribute("value")).toEqual("default");
  });
});
