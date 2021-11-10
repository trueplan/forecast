import * as React from "react";
import {
  ArrowSwapIcon,
  CheckIcon,
  ChatIcon,
  HomeIcon,
  LocationIcon,
  SearchIcon,
  StarIcon,
} from "@trueplan/forecast-icons";
import { Stack } from "../../../layout/stack";
import { IconContainer } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Icon Container",
  component: IconContainer,
};

export const Default: React.FC = () => (
  <Stack spacing="$35">
    <IconContainer color="blue">
      <CheckIcon decorative={false} title="Check" size="small" />
    </IconContainer>
    <IconContainer color="green">
      <ChatIcon decorative={false} title="Chat" size="small" />
    </IconContainer>
    <IconContainer color="lilac">
      <HomeIcon decorative={false} title="Home" size="small" />
    </IconContainer>
    <IconContainer color="red">
      <SearchIcon decorative={false} title="Search" size="small" />
    </IconContainer>
    <IconContainer color="royal">
      <ArrowSwapIcon decorative={false} title="Swap" size="small" />
    </IconContainer>
    <IconContainer color="sky">
      <LocationIcon decorative={false} title="Location" size="small" />
    </IconContainer>
    <IconContainer color="yellow">
      <StarIcon decorative={false} title="Star" size="small" />
    </IconContainer>
  </Stack>
);

export const Small: React.FC = () => (
  <Stack spacing="$35">
    <IconContainer color="blue" size="small">
      <CheckIcon decorative={false} title="Check" size="xsmall" />
    </IconContainer>
    <IconContainer color="green" size="small">
      <ChatIcon decorative={false} title="Chat" size="xsmall" />
    </IconContainer>
    <IconContainer color="lilac" size="small">
      <HomeIcon decorative={false} title="Home" size="xsmall" />
    </IconContainer>
    <IconContainer color="red" size="small">
      <SearchIcon decorative={false} title="Search" size="xsmall" />
    </IconContainer>
    <IconContainer color="royal" size="small">
      <ArrowSwapIcon decorative={false} title="Swap" size="xsmall" />
    </IconContainer>
    <IconContainer color="sky" size="small">
      <LocationIcon decorative={false} title="Location" size="xsmall" />
    </IconContainer>
    <IconContainer color="yellow" size="small">
      <StarIcon decorative={false} title="Star" size="xsmall" />
    </IconContainer>
  </Stack>
);

export const Large: React.FC = () => (
  <Stack spacing="$35">
    <IconContainer color="blue" size="large">
      <CheckIcon decorative={false} title="Check" size="medium" />
    </IconContainer>
    <IconContainer color="green" size="large">
      <ChatIcon decorative={false} title="Chat" size="medium" />
    </IconContainer>
    <IconContainer color="lilac" size="large">
      <HomeIcon decorative={false} title="Home" size="medium" />
    </IconContainer>
    <IconContainer color="red" size="large">
      <SearchIcon decorative={false} title="Search" size="medium" />
    </IconContainer>
    <IconContainer color="royal" size="large">
      <ArrowSwapIcon decorative={false} title="Swap" size="medium" />
    </IconContainer>
    <IconContainer color="sky" size="large">
      <LocationIcon decorative={false} title="Location" size="medium" />
    </IconContainer>
    <IconContainer color="yellow" size="large">
      <StarIcon decorative={false} title="Star" size="medium" />
    </IconContainer>
  </Stack>
);
