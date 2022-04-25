import * as React from "react";
import { render, screen } from "@testing-library/react";
import { useSelectState } from "ariakit/select";
import { Select, Option, OptionGroup } from "../src";

interface MockSelectProps {
  required?: boolean;
  disabled?: boolean;
}

const MockSelect: React.FC<MockSelectProps> = ({ ...props }) => {
  const selectState = useSelectState({
    gutter: 8,
    sameWidth: true,
  });
  return (
    <Select id="select-id" name="select" {...props} state={selectState}>
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
  });
});

describe("OptionGroup", () => {
  it("should render an option group with options", () => {
    render(
      <OptionGroup label="Group One" data-testid="option-group">
        <Option value="option1">Option One</Option>
      </OptionGroup>
    );
    const renderedOptionGroup = screen.getByTestId("option-group");
    const renderedOptionOne = screen.getByText("Option One");
    expect(renderedOptionGroup).not.toBeNull();
    expect(renderedOptionGroup.getAttribute("role")).toEqual("group");
    expect(renderedOptionOne).not.toBeNull();
  });
});
