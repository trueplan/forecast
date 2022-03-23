import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Default } from "../stories/index.stories";

it("should render a combobox", () => {
  render(<Default />);
  const renderedCombobox = screen.getByRole("combobox");
  expect(renderedCombobox).not.toBeNull();
});

it("should render an input with a placeholder", () => {
  render(<Default />);
  const renderedCombobox = screen.getByRole("combobox");
  expect(renderedCombobox.getAttribute("placeholder")).toEqual(
    "Placeholder text..."
  );
});

it("should render an input tied to a listbox popup", () => {
  render(<Default />);
  const renderedCombobox = screen.getByRole("combobox");
  expect(renderedCombobox.getAttribute("aria-haspopup")).toEqual("listbox");
});

it("should render listbox options", () => {
  render(<Default />);
  const renderedOptionOne = screen.getByText("Apple");
  const renderedOptionTwo = screen.getByText("Grape");
  const renderedOptionThree = screen.getByText("Orange");
  const renderedOptionFour = screen.getByText("Strawberry");
  const renderedOptionFive = screen.getByText("Watermelon");
  expect(renderedOptionOne).not.toBeNull();
  expect(renderedOptionTwo).not.toBeNull();
  expect(renderedOptionThree).not.toBeNull();
  expect(renderedOptionFour).not.toBeNull();
  expect(renderedOptionFive).not.toBeNull();
});
