import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Default, DefaultOpen, EmptyValue } from "../stories/index.stories";

describe("SelectCombobox", () => {
  it("should render a SelectCombobox with a default value", () => {
    render(<Default />);
    expect(screen.getByRole("combobox")).toHaveTextContent("Apple");
  });

  it("should render a SelectCombobox with an empty value", () => {
    render(<EmptyValue />);
    expect(screen.getByRole("combobox")).toHaveTextContent("");
  });

  it("should render a dialog with a listbox", () => {
    render(<Default />);
    expect(screen.getByRole("dialog", { hidden: true })).toBeDefined();
    expect(screen.getByRole("listbox", { hidden: true })).toBeDefined();
  });

  it("should render a combobox within the dialog", () => {
    render(<DefaultOpen />);
    expect(
      screen.getByRole("combobox", { name: "", expanded: true })
    ).toBeDefined();
  });

  it("should change the value when selecting an item from the listbox", () => {
    render(<Default />);
    expect(screen.getByRole("combobox")).toHaveTextContent("Apple");
    const baconOptions = screen.getAllByRole("option", {
      hidden: true,
      name: "Bacon",
    });
    fireEvent.click(baconOptions[1]);
    expect(screen.getByRole("combobox")).toHaveTextContent("Bacon");
  });

  it("should change the value when typing text in the combobox within the dialog", async () => {
    render(<DefaultOpen />);
    const comboboxes = screen.getAllByRole("combobox");
    expect(comboboxes[0]).toHaveTextContent("Apple");
    fireEvent.change(comboboxes[1], { target: { value: "Bacon" } });
    expect(comboboxes[1]).toHaveDisplayValue("Bacon");
  });

  it("should clear a SelectCombobox value", () => {
    render(<Default />);
    const clearButton = screen.getByRole("img");
    expect(clearButton).toBeDefined();
    fireEvent.click(clearButton);
    expect(screen.getByRole("combobox")).toHaveTextContent("");
  });
});
