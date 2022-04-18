import * as React from "react";
import { render, screen } from "@testing-library/react";
import type { InputTypes } from "../src";
import { Input } from "../src";

describe("Input", () => {
  const initialProps = {
    id: "input",
    name: "cool",
    type: "password" as InputTypes,
    value: "value",
    required: true,
    disabled: true,
    readOnly: true,
    hasError: true,
    placeholder: "Enter your name",
  };

  render(<Input {...initialProps} />);

  const InputElement = screen.getByPlaceholderText(initialProps.placeholder);

  it("should render an input", () => {
    expect(InputElement).toBeDefined();
  });

  it("should render a required input", () => {
    expect(InputElement.getAttribute("required")).toEqual("");
  });

  it("should render a disabled input", () => {
    expect(InputElement.getAttribute("disabled")).toEqual("");
  });

  it("should render a readonly input", () => {
    expect(InputElement.getAttribute("aria-readonly")).toEqual("true");
    expect(InputElement.getAttribute("readonly")).toEqual("");
  });

  it("should render an input value", () => {
    expect(InputElement.getAttribute("value")).toEqual("value");
  });

  it("should render an input id", () => {
    expect(InputElement.getAttribute("id")).toEqual("input");
  });

  it("should render an input name", () => {
    expect(InputElement.getAttribute("name")).toEqual("cool");
  });

  it("should render an input type", () => {
    expect(InputElement.getAttribute("type")).toEqual("password");
  });

  it("should render an input placeholder", () => {
    expect(InputElement.getAttribute("placeholder")).toEqual("Enter your name");
  });
});
