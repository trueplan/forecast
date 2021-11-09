import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Anchor } from "../src";

describe("Anchor", () => {
  it("should render an anchor", () => {
    render(<Anchor href="#">This is an anchor</Anchor>);
    const renderedAnchor = screen.getByRole("link");
    expect(renderedAnchor.getAttribute("href")).toEqual("#");
  });

  it("should render an external anchor", () => {
    render(
      <Anchor href="https://trueplan.io" isExternal>
        This is an anchor that links to TruePlan.io with an external target and
        rel
      </Anchor>
    );
    const renderedAnchor = screen.getByRole("link");
    expect(renderedAnchor.getAttribute("target")).toEqual("_blank");
    expect(renderedAnchor.getAttribute("rel")).toEqual("noreferrer noopener");
  });

  it("should render an external anchor with overwritten target and rel", () => {
    render(
      <Anchor href="https://trueplan.io" target="_self" rel="noopener">
        This is an anchor that links to TruePlan.io with the target and rel
        overwritten
      </Anchor>
    );
    const renderedAnchor = screen.getByRole("link");
    expect(renderedAnchor.getAttribute("target")).toEqual("_self");
    expect(renderedAnchor.getAttribute("rel")).toEqual("noopener");
  });
});
