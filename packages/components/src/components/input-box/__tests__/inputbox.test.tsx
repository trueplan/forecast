import * as React from "react";
import { render } from "@testing-library/react";
import { InputBox } from "../src";
import type { InputBoxTypes } from "../src";

describe("InputBox", () => {
  const initialProps = {
    disabled: true,
    readOnly: true,
    hasError: true,
    type: "hidden" as InputBoxTypes,
    "data-testid": "input-box",
  };

  const { getByTestId } = render(
    <InputBox {...initialProps}>Input Box</InputBox>
  );
  const InputBoxElement = getByTestId("input-box");

  it("should render an input box", () => {
    expect(InputBoxElement).toBeDefined();
  });

  it("should render a disabled input box", () => {
    expect(InputBoxElement.getAttribute("data-disabled")).toEqual("true");
  });

  it("should render a disabled input box with an error", () => {
    expect(InputBoxElement.getAttribute("data-has-error")).toEqual("true");
  });

  it("should render a readonly input box", () => {
    expect(InputBoxElement.getAttribute("data-read-only")).toEqual("true");
  });

  it("should render a hidden input box", () => {
    expect(InputBoxElement.getAttribute("data-hidden")).toEqual("true");
  });
});
