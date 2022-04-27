import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Select, Option, OptionGroup } from "../src";

interface MockSelectProps {
  required?: boolean;
  disabled?: boolean;
}

const MockSelect: React.FC<MockSelectProps> = ({ ...props }) => {
  return (
    <Select id="select-id" name="select" {...props}>
      <Option value="option1">Option One</Option>
      <Option value="option2">Option Two</Option>
      <Option value="option3">Option Three</Option>
    </Select>
  );
};

describe("Select", () => {
  it("should render a select", () => {
    render(<MockSelect data-testid="select" />);
    const renderedSelect = screen.getByTestId("select");
    expect(renderedSelect).not.toBeNull();
  });

  it("should render a required select", () => {
    render(<MockSelect data-testid="select" required />);
    const renderedSelect = screen.getByTestId("select");
    expect(renderedSelect.getAttribute("required")).toEqual("");
  });

  it("should render a disabled select", () => {
    render(<MockSelect data-testid="select" disabled />);
    const renderedSelect = screen.getByTestId("select");
    expect(renderedSelect.getAttribute("disabled")).toEqual("");
  });

  it("should render a select id", () => {
    render(<MockSelect data-testid="select" disabled />);
    const renderedSelect = screen.getByTestId("select");
    expect(renderedSelect.getAttribute("id")).toEqual("select-id");
  });

  it("should render a select name", () => {
    render(<MockSelect data-testid="select" disabled />);
    const renderedSelect = screen.getByTestId("select");
    expect(renderedSelect.getAttribute("name")).toEqual("select");
  });
});

describe("Option", () => {
  it("should render an option", () => {
    render(
      <Option data-testid="option" value="option one">
        option one
      </Option>
    );
    const renderedOption = screen.getByTestId("option");
    expect(renderedOption).not.toBeNull();
    expect(renderedOption.getAttribute("value")).toEqual("option one");
  });
});

describe("OptionGroup", () => {
  it("should render an option group", () => {
    render(
      <OptionGroup data-testid="option-group" label="group one">
        group one
      </OptionGroup>
    );
    const renderedOptionGroup = screen.getByTestId("option-group");
    expect(renderedOptionGroup).not.toBeNull();
    expect(renderedOptionGroup.getAttribute("label")).toEqual("group one");
  });
});
