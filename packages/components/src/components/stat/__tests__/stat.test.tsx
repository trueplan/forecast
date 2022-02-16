import * as React from "react";
import { render, screen } from "@testing-library/react";
import {
  Stat,
  StatButton,
  StatName,
  StatNumber,
  StatInformation,
} from "../src";

describe("Stat", () => {
  it("should render a stat container", () => {
    render(<Stat data-testid="stat">stat</Stat>);
    const renderedStat = screen.getByTestId("stat");
    expect(renderedStat).not.toBeNull();
  });

  it("should render a stat button container", () => {
    render(<StatButton>stat</StatButton>);
    const renderedStatButton = screen.getByRole("button");
    expect(renderedStatButton).not.toBeNull();
  });

  it("should render a stat name", () => {
    render(<StatName data-testid="stat-name">stat-name</StatName>);
    const renderedStatName = screen.getByTestId("stat-name");
    expect(renderedStatName).not.toBeNull();
  });

  it("should render a stat number", () => {
    render(<StatNumber data-testid="stat-number">stat-number</StatNumber>);
    const renderedStatNumber = screen.getByTestId("stat-number");
    expect(renderedStatNumber).not.toBeNull();
  });

  it("should render a stat information", () => {
    render(
      <StatInformation data-testid="stat-information">
        stat-information
      </StatInformation>
    );
    const renderedStatInformation = screen.getByTestId("stat-information");
    expect(renderedStatInformation).not.toBeNull();
  });
});
