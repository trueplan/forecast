import * as React from "react";
import { render } from "@testing-library/react";
import { TextArea } from "../src";

describe("TextArea", () => {
  const initialProps = {
    id: "textarea",
    name: "cool",
    required: true,
    disabled: true,
    readOnly: true,
    hasError: true,
    placeholder: "Enter your name",
  };

  const { getByRole } = render(<TextArea {...initialProps} />);
  const TextAreaElement = getByRole("textbox");

  it("should render a textarea", () => {
    expect(TextAreaElement).toBeDefined();
  });

  it("should render a required textarea", () => {
    expect(TextAreaElement.getAttribute("required")).toEqual("");
  });

  it("should render a disabled textarea", () => {
    expect(TextAreaElement.getAttribute("disabled")).toEqual("");
  });

  it("should render a readonly textarea", () => {
    expect(TextAreaElement.getAttribute("readonly")).toEqual("");
  });

  it("should render a textarea id", () => {
    expect(TextAreaElement.getAttribute("id")).toEqual("textarea");
  });

  it("should render a textarea name", () => {
    expect(TextAreaElement.getAttribute("name")).toEqual("cool");
  });

  it("should render a textarea placeholder", () => {
    expect(TextAreaElement.getAttribute("placeholder")).toEqual(
      "Enter your name"
    );
  });
});
