import * as React from "react";
import { render, screen } from "@testing-library/react";
import {
  Pagination,
  PaginationLabel,
  PaginationList,
  PaginationButton,
} from "../src";

describe("Pagination", () => {
  it("should render pagination", () => {
    render(<Pagination label="page navigation">pagination</Pagination>);
    const renderedPagination = screen.getByText("pagination");
    expect(renderedPagination).not.toBeNull();
    expect(renderedPagination.getAttribute("aria-label")).toEqual(
      "page navigation"
    );
  });

  it("should render a pagination list", () => {
    render(
      <Pagination label="page navigation">
        <PaginationList>
          <PaginationButton label="Go to page 1">1</PaginationButton>
        </PaginationList>
      </Pagination>
    );
    const renderedPaginationList = screen.getByRole("list");
    expect(renderedPaginationList).not.toBeNull();
    const renderedPaginationListItem = screen.getByRole("listitem");
    expect(renderedPaginationListItem).not.toBeNull();
  });

  it("should render a pagination label", () => {
    render(<PaginationLabel>Page 1 of 10</PaginationLabel>);
    const renderedPaginationLabel = screen.getByText("Page 1 of 10");
    expect(renderedPaginationLabel).not.toBeNull();
  });

  it("should render a pagination button", () => {
    render(<PaginationButton label="Go to page 1">1</PaginationButton>);
    const renderedPaginationButton = screen.getByRole("button");
    expect(renderedPaginationButton).not.toBeNull();
    expect(renderedPaginationButton.getAttribute("aria-label")).toEqual(
      "Go to page 1"
    );
  });
});
