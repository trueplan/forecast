import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Stat, StatName, StatNumber, StatInformation } from "../src";

describe("Stat", () => {
  it("should render a stat container", () => {
    render(<Stat data-testid="stat">stat</Stat>);
    const renderedStat = screen.getByTestId("stat");
    expect(renderedStat).not.toBeNull();
  });

  it("should render a stat name", () => {
    render(<StatName data-testid="stat-name">stat-name</StatName>);
    const renderedStat = screen.getByTestId("stat-name");
    expect(renderedStat).not.toBeNull();
  });

  it("should render a stat number", () => {
    render(<StatNumber data-testid="stat-number">stat-number</StatNumber>);
    const renderedStat = screen.getByTestId("stat-number");
    expect(renderedStat).not.toBeNull();
  });

  it("should render a stat information", () => {
    render(
      <StatInformation data-testid="stat-information">
        stat-information
      </StatInformation>
    );
    const renderedStat = screen.getByTestId("stat-information");
    expect(renderedStat).not.toBeNull();
  });
});
