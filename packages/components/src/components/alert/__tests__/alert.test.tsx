import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Alert } from "../src";

describe("Alert", () => {
  it("should render an dismissable alert", () => {
    render(
      <Alert title="Warning" onDismiss={() => void 0}>
        This is a warning
      </Alert>
    );
    const buttons = screen.queryAllByRole("button");
    expect(buttons.length).toEqual(1);
    expect(screen.getByRole("alert")).toBeTruthy();
  });

  it("should render an non-dismissable alert", () => {
    render(<Alert title="Warning">This is a warning</Alert>);
    const buttons = screen.queryAllByRole("button");
    expect(buttons.length).toEqual(0);
    expect(screen.getByRole("alert")).toBeTruthy();
  });

  it("should call dismiss event handler", () => {
    const onDismissMock: jest.Mock = jest.fn();
    render(<Alert title="warning" onDismiss={onDismissMock} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(onDismissMock).toHaveBeenCalled();
  });
});
