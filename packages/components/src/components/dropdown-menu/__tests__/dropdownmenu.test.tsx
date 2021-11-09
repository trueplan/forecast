import * as React from "react";
import { render, screen } from "@testing-library/react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../src";
import { Button } from "../../Button/src";

// Since all of the dropdown functionality is tested via Radix,
// I'm only testing that our button renders as a child of DropdownTrigger.
const MockDropdown: React.FC = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="primary">Open Menu</Button>
    </DropdownMenuTrigger>

    <DropdownMenuContent>
      <DropdownMenuItem>All Activities</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

describe("DropdownMenu", () => {
  describe("Render", () => {
    it("should render a menu with a button", () => {
      render(<MockDropdown />);
      const renderedMenuButton = screen.getByRole("button");
      expect(renderedMenuButton.getAttribute("aria-haspopup")).toEqual("menu");
      expect(renderedMenuButton.tagName).toBe("BUTTON");
    });
  });
});
