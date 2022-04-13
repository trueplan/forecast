import * as React from "react";
import { useUID } from "react-uid";
import { useSelectState } from "ariakit/select";
import { HelpText } from "../../help-text";
import { Label } from "../../label";
import { Select, Option, OptionGroup, OptionGroupLabel } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Select",
  component: Select,
};

export const Default: React.FC = () => {
  const selectID = useUID();
  const selectState = useSelectState({
    gutter: 8,
    sameWidth: true,
  });
  return (
    <>
      <Label htmlFor={selectID}>Select</Label>
      <Select id={selectID} name="select" state={selectState}>
        <Option value="Option One">Option One</Option>
        <Option value="Option Two">Option Two</Option>
        <Option value="Option Three">Option Three</Option>
      </Select>
    </>
  );
};

export const Required: React.FC = () => {
  const selectID = useUID();
  const selectState = useSelectState({
    gutter: 8,
    sameWidth: true,
  });
  return (
    <>
      <Label htmlFor={selectID} required>
        Select
      </Label>
      <Select id={selectID} name="select" required state={selectState}>
        <Option value="Option One">Option One</Option>
        <Option value="Option Two">Option Two</Option>
        <Option value="Option Three">Option Three</Option>
      </Select>
    </>
  );
};

export const Disabled: React.FC = () => {
  const selectID = useUID();
  const selectState = useSelectState({
    gutter: 8,
    sameWidth: true,
  });
  return (
    <>
      <Label htmlFor={selectID}>Select</Label>
      <Select id={selectID} name="select" disabled state={selectState}>
        <Option value="Option One">Option One</Option>
        <Option value="Option Two">Option Two</Option>
        <Option value="Option Three">Option Three</Option>
      </Select>
    </>
  );
};

export const Error: React.FC = () => {
  const selectID = useUID();
  const helpTextID = useUID();
  const selectState = useSelectState({
    gutter: 8,
    sameWidth: true,
  });
  return (
    <>
      <Label htmlFor={selectID}>Select</Label>
      <Select id={selectID} name="select" hasError state={selectState}>
        <Option value="Option One">Option One</Option>
        <Option value="Option Two">Option Two</Option>
        <Option value="Option Three">Option Three</Option>
      </Select>
      <HelpText hasError id={helpTextID}>
        This is an error message.
      </HelpText>
    </>
  );
};

export const OptionGroups: React.FC = () => {
  const selectID = useUID();
  const selectState = useSelectState({
    gutter: 8,
    sameWidth: true,
  });
  return (
    <>
      <Label htmlFor={selectID}>Select</Label>
      <Select id={selectID} name="select" state={selectState}>
        <OptionGroup>
          <OptionGroupLabel>Group One</OptionGroupLabel>
          <Option value="Group One - Option One">Option One</Option>
          <Option value="Group One - Option Two">Option Two</Option>
          <Option value="Group One - Option Three">Option Three</Option>
        </OptionGroup>
        <OptionGroup>
          <OptionGroupLabel>Group Two</OptionGroupLabel>
          <Option value="Group Two - Option One">Option One</Option>
          <Option value="Group Two - Option Two">Option Two</Option>
          <Option value="Group Two - Option Three">Option Three</Option>
        </OptionGroup>
      </Select>
    </>
  );
};
