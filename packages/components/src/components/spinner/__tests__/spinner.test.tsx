import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Spinner } from "../src";

describe("Spinner", () => {
  describe("Render", () => {
    it("should render a spinner", () => {
      render(<Spinner label="Loading" />);
      const renderedSpinner = screen.getByText("Loading");
      expect(renderedSpinner).toBeDefined();
    });
  });
});
