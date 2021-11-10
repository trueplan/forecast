import * as React from "react";
import { InfoCircleIcon } from "@trueplan/forecast-icons";
import { Box } from "../../../layout/box";
import { Button } from "../../button";
import { Tooltip, TooltipTrigger, TooltipContent } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    chromatic: { delay: 1000 },
  },
};

export const Default: React.FC = () => (
  <Box css={{ padding: "5rem" }}>
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <Button size="iconSmall" variant="secondary">
          <InfoCircleIcon decorative size="small" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        When an owner approves, the request is completely approved.
      </TooltipContent>
    </Tooltip>
  </Box>
);

export const MultilineOpen: React.FC = () => (
  <Box
    css={{
      display: "grid",
      gridTemplateColumns: "repeat(3, max-content)",
      gridRowGap: "11rem",
      justifyContent: "space-between",
    }}
  >
    <div>
      <Tooltip open>
        <TooltipTrigger asChild>
          <Button size="iconSmall" variant="secondary">
            <InfoCircleIcon decorative size="small" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          When an owner approves, the request is completely approved.
        </TooltipContent>
      </Tooltip>
    </div>
    <div>
      <Tooltip open>
        <TooltipTrigger asChild>
          <Button size="iconSmall" variant="secondary">
            <InfoCircleIcon decorative size="small" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          When an owner approves, the request is completely approved.
        </TooltipContent>
      </Tooltip>
    </div>
    <div>
      <Tooltip open>
        <TooltipTrigger asChild>
          <Button size="iconSmall" variant="secondary">
            <InfoCircleIcon decorative size="small" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          When an owner approves, the request is completely approved.
        </TooltipContent>
      </Tooltip>
    </div>

    <div>
      <Tooltip open>
        <TooltipTrigger asChild>
          <Button size="iconSmall" variant="secondary">
            <InfoCircleIcon decorative size="small" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          When an owner approves, the request is completely approved.
        </TooltipContent>
      </Tooltip>
    </div>
    <div>
      <Tooltip open>
        <TooltipTrigger asChild>
          <Button size="iconSmall" variant="secondary">
            <InfoCircleIcon decorative size="small" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          When an owner approves, the request is completely approved.
        </TooltipContent>
      </Tooltip>
    </div>
    <div>
      <Tooltip open>
        <TooltipTrigger asChild>
          <Button size="iconSmall" variant="secondary">
            <InfoCircleIcon decorative size="small" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          When an owner approves, the request is completely approved.
        </TooltipContent>
      </Tooltip>
    </div>
  </Box>
);

export const SingleLineOpen: React.FC = () => (
  <Box
    css={{
      display: "grid",
      gridTemplateColumns: "repeat(3, max-content)",
      gridRowGap: "11rem",
      justifyContent: "space-between",
    }}
  >
    <div>
      <Tooltip open>
        <TooltipTrigger asChild>
          <Button size="iconSmall" variant="secondary">
            <InfoCircleIcon decorative size="small" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Approved</TooltipContent>
      </Tooltip>
    </div>
    <div>
      <Tooltip open>
        <TooltipTrigger asChild>
          <Button size="iconSmall" variant="secondary">
            <InfoCircleIcon decorative size="small" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Approved</TooltipContent>
      </Tooltip>
    </div>
    <div>
      <Tooltip open>
        <TooltipTrigger asChild>
          <Button size="iconSmall" variant="secondary">
            <InfoCircleIcon decorative size="small" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Approved</TooltipContent>
      </Tooltip>
    </div>

    <div>
      <Tooltip open>
        <TooltipTrigger asChild>
          <Button size="iconSmall" variant="secondary">
            <InfoCircleIcon decorative size="small" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Approved</TooltipContent>
      </Tooltip>
    </div>
    <div>
      <Tooltip open>
        <TooltipTrigger asChild>
          <Button size="iconSmall" variant="secondary">
            <InfoCircleIcon decorative size="small" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Approved</TooltipContent>
      </Tooltip>
    </div>
    <div>
      <Tooltip open>
        <TooltipTrigger asChild>
          <Button size="iconSmall" variant="secondary">
            <InfoCircleIcon decorative size="small" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Approved</TooltipContent>
      </Tooltip>
    </div>
  </Box>
);
