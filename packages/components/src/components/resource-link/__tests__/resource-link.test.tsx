import * as React from "react";
import { render, screen } from "@testing-library/react";
import {
  ResourceLink,
  ResourceLinkTitle,
  ResourceLinkCategory,
  ResourceLinkTimeStamp,
} from "../src";

describe("ResourceLink", () => {
  it("should render a resource link", () => {
    render(<ResourceLink href="#">Resource</ResourceLink>);
    expect(screen.getByRole("link")).toBeDefined();
  });

  it("should render an external resource link", () => {
    render(
      <ResourceLink href="https://trueplan.io" isExternal>
        Resource
      </ResourceLink>
    );
    const renderedResourceLink = screen.getByRole("link");
    expect(renderedResourceLink.getAttribute("target")).toEqual("_blank");
    expect(renderedResourceLink.getAttribute("rel")).toEqual(
      "noreferrer noopener"
    );
  });

  it("should render an external anchor with overwritten target and rel", () => {
    render(
      <ResourceLink href="https://trueplan.io" target="_self" rel="noopener">
        Resource
      </ResourceLink>
    );
    const renderedResourceLink = screen.getByRole("link");
    expect(renderedResourceLink.getAttribute("target")).toEqual("_self");
    expect(renderedResourceLink.getAttribute("rel")).toEqual("noopener");
  });
});

describe("ResourceLinkTitle", () => {
  it("should render a resource link title", () => {
    render(<ResourceLinkTitle>Resource Title</ResourceLinkTitle>);
    expect(screen.getByText("Resource Title")).toBeDefined();
  });
});

describe("ResourceLinkCategory", () => {
  it("should render a resource link category", () => {
    render(<ResourceLinkCategory>Resource Category</ResourceLinkCategory>);
    expect(screen.getByText("Resource Category")).toBeDefined();
  });
});

describe("ResourceLinkTimeStamp", () => {
  it("should render a resource link timestamp", () => {
    render(<ResourceLinkTimeStamp>Resource Timestamp</ResourceLinkTimeStamp>);
    expect(screen.getByText("Resource Timestamp")).toBeDefined();
  });
});
