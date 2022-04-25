import * as React from "react";
import { useUID } from "react-uid";
import { HelpText } from "../../help-text";
import { Label } from "../../label";
import { Select, Option, OptionGroup } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Select",
  component: Select,
};

export const Default: React.FC = () => {
  const selectID = useUID();
  const [value, setValue] = React.useState("option1");
  return (
    <>
      <Label htmlFor={selectID}>Select</Label>
      <Select
        id={selectID}
        name="select"
        defaultValue={value}
        onChange={() => setValue}
      >
        <Option value="option1">Option One</Option>
        <Option value="option2">Option Two</Option>
        <Option value="option3">Option Three</Option>
      </Select>
    </>
  );
};

export const Required: React.FC = () => {
  const selectID = useUID();
  const [value, setValue] = React.useState("option1");
  return (
    <>
      <Label htmlFor={selectID} required>
        Select
      </Label>
      <Select
        id={selectID}
        name="select"
        required
        defaultValue={value}
        onChange={() => setValue}
      >
        <Option value="option1">Option One</Option>
        <Option value="option2">Option Two</Option>
        <Option value="option3">Option Three</Option>
      </Select>
    </>
  );
};

export const Disabled: React.FC = () => {
  const selectID = useUID();
  const [value, setValue] = React.useState("option1");
  return (
    <>
      <Label htmlFor={selectID}>Select</Label>
      <Select
        id={selectID}
        name="select"
        disabled
        defaultValue={value}
        onChange={() => setValue}
      >
        <Option value="option1">Option One</Option>
        <Option value="option2">Option Two</Option>
        <Option value="option3">Option Three</Option>
      </Select>
    </>
  );
};

export const Error: React.FC = () => {
  const selectID = useUID();
  const helpTextID = useUID();
  const [value, setValue] = React.useState("option1");
  return (
    <>
      <Label htmlFor={selectID}>Select</Label>
      <Select
        id={selectID}
        name="select"
        hasError
        defaultValue={value}
        onChange={() => setValue}
      >
        <Option value="option1">Option One</Option>
        <Option value="option2">Option Two</Option>
        <Option value="option3">Option Three</Option>
      </Select>
      <HelpText hasError id={helpTextID}>
        This is an error message.
      </HelpText>
    </>
  );
};

export const OptionGroups: React.FC = () => {
  const selectID = useUID();
  const [value, setValue] = React.useState("one-option1");
  return (
    <>
      <Label htmlFor={selectID}>Select</Label>
      <Select
        id={selectID}
        name="select"
        defaultValue={value}
        onChange={() => setValue}
      >
        <OptionGroup label="Group One">
          <Option value="one-option1">Option One</Option>
          <Option value="one-option2">Option Two</Option>
          <Option value="one-option3">Option Three</Option>
        </OptionGroup>
        <OptionGroup label="Group One">
          <Option value="two-option1">Option One</Option>
          <Option value="two-option2">Option Two</Option>
          <Option value="two-option3">Option Three</Option>
        </OptionGroup>
      </Select>
    </>
  );
};
