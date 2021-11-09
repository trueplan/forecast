import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Heading } from "../src/Heading";

describe("Heading", () => {
  it("should render a h1 heading", () => {
    render(
      <Heading size="heading10" as="h1">
        This is a heading10 component
      </Heading>
    );
    const headingElement = screen.getByRole("heading", { level: 1 });
    expect(headingElement).not.toBeNull();
    expect(headingElement.textContent).toEqual("This is a heading10 component");
  });

  it("should render a h2 heading", () => {
    render(
      <Heading size="heading20" as="h2">
        This is a heading20 component
      </Heading>
    );
    const headingElement = screen.getByRole("heading", { level: 2 });
    expect(headingElement).not.toBeNull();
    expect(headingElement.textContent).toEqual("This is a heading20 component");
  });

  it("should render a h3 heading", () => {
    render(
      <Heading size="heading30" as="h3">
        This is a heading30 component
      </Heading>
    );
    const headingElement = screen.getByRole("heading", { level: 3 });
    expect(headingElement).not.toBeNull();
    expect(headingElement.textContent).toEqual("This is a heading30 component");
  });

  it("should render a h4 heading", () => {
    render(
      <Heading size="heading40" as="h4">
        This is a heading40 component
      </Heading>
    );
    const headingElement = screen.getByRole("heading", { level: 4 });
    expect(headingElement).not.toBeNull();
    expect(headingElement.textContent).toEqual("This is a heading40 component");
  });

  it("should render a h5 heading", () => {
    render(
      <Heading size="heading50" as="h5">
        This is a heading50 component
      </Heading>
    );
    const headingElement = screen.getByRole("heading", { level: 5 });
    expect(headingElement).not.toBeNull();
    expect(headingElement.textContent).toEqual("This is a heading50 component");
  });

  it("should render a h6 heading", () => {
    render(
      <Heading size="heading60" as="h6">
        This is a heading60 component
      </Heading>
    );
    const headingElement = screen.getByRole("heading", { level: 6 });
    expect(headingElement).not.toBeNull();
    expect(headingElement.textContent).toEqual("This is a heading60 component");
  });
});
