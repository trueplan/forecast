import * as React from "react";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  SkipBackIcon,
  SkipForwardIcon,
} from "@trueplan/forecast-icons";
import {
  Pagination,
  PaginationList,
  PaginationButton,
  PaginationLabel,
} from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Pagination",
  component: Pagination,
};

export const Default: React.FC = () => (
  <Pagination label="Page navigation">
    <PaginationLabel>Showing page 3 of 10</PaginationLabel>
    <PaginationList>
      <PaginationButton label="Go to page 1">1</PaginationButton>
      <PaginationButton label="Go to page 2">2</PaginationButton>
      <PaginationButton label="Go to page 3" isCurrent>
        3
      </PaginationButton>
      <PaginationButton label="Go to page 4">4</PaginationButton>
      <PaginationButton label="Go to page 5">5</PaginationButton>
    </PaginationList>
  </Pagination>
);

export const Arrows: React.FC = () => (
  <Pagination label="Page navigation">
    <PaginationLabel>Showing page 3 of 10</PaginationLabel>
    <PaginationList>
      <PaginationButton label="Go to first page" hasIcon>
        <SkipBackIcon
          size="xsmall"
          decorative={false}
          title="Go to first page"
        />
      </PaginationButton>
      <PaginationButton label="Go to first page" hasIcon>
        <ChevronLeftIcon
          size="xsmall"
          decorative={false}
          title="Go to previous page"
        />
      </PaginationButton>
      <PaginationButton label="Go to page 1">1</PaginationButton>
      <PaginationButton label="Go to page 2">2</PaginationButton>
      <PaginationButton label="Go to page 3" isCurrent>
        3
      </PaginationButton>
      <PaginationButton label="Go to page 4">4</PaginationButton>
      <PaginationButton label="Go to page 5">5</PaginationButton>
      <PaginationButton label="Go to first page" hasIcon>
        <ChevronRightIcon
          size="xsmall"
          decorative={false}
          title="Go to next page"
        />
      </PaginationButton>
      <PaginationButton label="Go to first page" hasIcon>
        <SkipForwardIcon
          size="xsmall"
          decorative={false}
          title="Go to last page"
        />
      </PaginationButton>
    </PaginationList>
  </Pagination>
);

export const FirstPage: React.FC = () => (
  <Pagination label="Page navigation">
    <PaginationLabel>Showing rows 1 of 10</PaginationLabel>
    <PaginationList>
      <PaginationButton label="Go to page 1" isCurrent>
        1
      </PaginationButton>
      <PaginationButton label="Go to page 2">2</PaginationButton>
      <PaginationButton label="Go to page 3">3</PaginationButton>
      <PaginationButton label="Go to page 4">4</PaginationButton>
      <PaginationButton label="Go to page 5">5</PaginationButton>
      <PaginationButton label="Go to first page" hasIcon>
        <ChevronRightIcon
          size="xsmall"
          decorative={false}
          title="Go to next page"
        />
      </PaginationButton>
      <PaginationButton label="Go to first page" hasIcon>
        <SkipForwardIcon
          size="xsmall"
          decorative={false}
          title="Go to last page"
        />
      </PaginationButton>
    </PaginationList>
  </Pagination>
);

export const LastPage: React.FC = () => (
  <Pagination label="Page navigation">
    <PaginationLabel>Showing page 10 of 10</PaginationLabel>
    <PaginationList>
      <PaginationButton label="Go to first page" hasIcon>
        <SkipBackIcon
          size="xsmall"
          decorative={false}
          title="Go to first page"
        />
      </PaginationButton>
      <PaginationButton label="Go to first page" hasIcon>
        <ChevronLeftIcon
          size="xsmall"
          decorative={false}
          title="Go to previous page"
        />
      </PaginationButton>
      <PaginationButton label="Go to page 1">6</PaginationButton>
      <PaginationButton label="Go to page 2">7</PaginationButton>
      <PaginationButton label="Go to page 3">8</PaginationButton>
      <PaginationButton label="Go to page 4">9</PaginationButton>
      <PaginationButton label="Go to page 5" isCurrent>
        10
      </PaginationButton>
    </PaginationList>
  </Pagination>
);
