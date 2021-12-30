import * as React from "react";
import { render, screen } from "@testing-library/react";
import { BriefcaseIcon } from "@trueplan/forecast-icons";
import { StatusIcon } from "../src";

describe("Status Icon", () => {
  it("should render a status icon", () => {
    render(
      <StatusIcon status="lilac" data-testid="status-icon">
        <BriefcaseIcon
          decorative={false}
          title="Recruiter Tools"
          size="xsmall"
        />
      </StatusIcon>
    );
    const renderedStatusIcon = screen.getByTestId("status-icon");
    expect(renderedStatusIcon).not.toBeNull();
  });
});
