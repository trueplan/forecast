import * as React from "react";
import { Stack } from "../../../layout/stack";
import { InputBox } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Input Box",
  component: InputBox,
};

export const Default: React.FC = () => {
  return (
    <Stack direction="vertical" spacing="$35">
      <InputBox>Input Box</InputBox>
      <InputBox disabled>Input Box</InputBox>
      <InputBox readOnly>Input Box</InputBox>
      <InputBox hasError>Input Box</InputBox>
    </Stack>
  );
};

export const Borderless: React.FC = () => {
  return (
    <Stack direction="vertical" spacing="$35">
      <InputBox borderless>Input Box</InputBox>
      <InputBox borderless disabled>
        Input Box
      </InputBox>
      <InputBox borderless readOnly>
        Input Box
      </InputBox>
      <InputBox borderless hasError>
        Input Box
      </InputBox>
    </Stack>
  );
};

export const CenteredText: React.FC = () => {
  return (
    <Stack direction="vertical" spacing="$35">
      <InputBox centeredText>Input Box</InputBox>
      <InputBox centeredText disabled>
        Input Box
      </InputBox>
      <InputBox centeredText readOnly>
        Input Box
      </InputBox>
      <InputBox centeredText hasError>
        Input Box
      </InputBox>
    </Stack>
  );
};

export const Roboto: React.FC = () => {
  return (
    <Stack direction="vertical" spacing="$35">
      <InputBox fontFamily="roboto">430/500</InputBox>
      <InputBox fontFamily="roboto" disabled>
        430/500
      </InputBox>
      <InputBox fontFamily="roboto" readOnly>
        430/500
      </InputBox>
      <InputBox fontFamily="roboto" hasError>
        430/500
      </InputBox>
    </Stack>
  );
};
