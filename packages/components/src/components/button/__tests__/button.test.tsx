import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../src";

describe("Button", () => {
  describe("Render", () => {
    it("should render a primary button", () => {
      render(<Button variant="primary">Primary Button</Button>);
      const renderedButton = screen.getByRole("button");
      expect(renderedButton).toBeDefined();
    });

    it("should render as an anchor", () => {
      render(
        <Button as="a" href="#" variant="primary">
          Primary Button
        </Button>
      );
      const renderedButton = screen.getByRole("link");
      expect(renderedButton).toBeDefined();
    });

    it("should render disabled set on HTML when disabled", () => {
      render(
        <Button variant="primary" disabled>
          Primary Button
        </Button>
      );
      const renderedButton = screen.getByRole("button");
      expect(renderedButton.getAttribute("disabled")).toBeDefined();
    });
  });

  describe("Event handlers", () => {
    it("should call the appropriate event handlers", () => {
      const onClickMock: jest.Mock = jest.fn();
      const onMouseDownMock: jest.Mock = jest.fn();
      const onMouseUpMock: jest.Mock = jest.fn();
      const onMouseEnterMock: jest.Mock = jest.fn();
      const onMouseLeaveMock: jest.Mock = jest.fn();
      const onFocusMock: jest.Mock = jest.fn();
      const onBlurMock: jest.Mock = jest.fn();

      render(
        <Button
          variant="secondary"
          onClick={onClickMock}
          onMouseDown={onMouseDownMock}
          onMouseUp={onMouseUpMock}
          onMouseEnter={onMouseEnterMock}
          onMouseLeave={onMouseLeaveMock}
          onFocus={onFocusMock}
          onBlur={onBlurMock}
        >
          button
        </Button>
      );

      const button = screen.getByRole("button");

      fireEvent.click(button);
      expect(onClickMock).toHaveBeenCalledTimes(1);
      fireEvent.mouseDown(button);
      expect(onMouseDownMock).toHaveBeenCalledTimes(1);
      fireEvent.mouseUp(button);
      expect(onMouseUpMock).toHaveBeenCalledTimes(1);
      fireEvent.mouseEnter(button);
      expect(onMouseEnterMock).toHaveBeenCalledTimes(1);
      fireEvent.mouseLeave(button);
      expect(onMouseLeaveMock).toHaveBeenCalledTimes(1);
      fireEvent.focus(button);
      expect(onFocusMock).toHaveBeenCalledTimes(1);
      fireEvent.blur(button);
      expect(onBlurMock).toHaveBeenCalledTimes(1);
    });
  });
});
