import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Paragraph } from "../src";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et imperdiet erat. Mauris tempus ligula eros, sed elementum leo imperdiet at. Suspendisse potenti. Phasellus eleifend facilisis urna sit amet lobortis. Cras et pulvinar quam.";

describe("Paragraph", () => {
  it("should render a paragraph", () => {
    render(<Paragraph>{text}</Paragraph>);

    expect(screen.getByText(text)).toBeTruthy();
  });
});
