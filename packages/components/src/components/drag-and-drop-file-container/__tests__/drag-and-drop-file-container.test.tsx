import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { DragAndDropFileContainer } from "../src";

const props = {
  uploadText: "Drag and drop your CSV file here or choose from your files",
  acceptedFileTypes: {
    "text/csv": [".csv"],
  },
  rejectText: "Wrong file type. Please import a CSV only.",
  onDrop: jest.fn(),
};

describe("Drag and Drop File Container", () => {
  it("should handle dropping a file", async () => {
    render(<DragAndDropFileContainer {...props} />);

    window.URL.createObjectURL = jest.fn().mockImplementation(() => "url");
    const inputEl = screen.getByTestId("dnd-input");
    const file = new File(["file"], "ping.csv", {
      type: "text/csv",
    });
    Object.defineProperty(inputEl, "files", {
      value: [file],
    });
    fireEvent.drop(inputEl);

    await waitFor(() => expect(props.onDrop).toBeCalled());
  });

  it("should display illustration", async () => {
    render(
      <DragAndDropFileContainer
        {...props}
        Illustration={<img src="" alt="test" />}
      />
    );

    expect(screen.getByRole("img")).toBeVisible();
  });

  it("should display loading", async () => {
    render(<DragAndDropFileContainer {...props} isLoading />);

    window.URL.createObjectURL = jest.fn().mockImplementation(() => "url");
    const inputEl = screen.getByTestId("dnd-input");
    const file = new File(["file"], "ping.csv", {
      type: "text/csv",
    });
    Object.defineProperty(inputEl, "files", {
      value: [file],
    });
    fireEvent.drop(inputEl);

    await waitFor(() =>
      expect(screen.getByText("Checking your file ping.csv")).toBeVisible()
    );
  });
});
