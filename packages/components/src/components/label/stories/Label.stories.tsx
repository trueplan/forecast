import * as React from "react";
import { useUID } from "react-uid";
import { Label } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Label",
  component: Label,
};

const text = "Label";

export const Default: React.FC = () => <Label htmlFor="input-id">{text}</Label>;

export const Required: React.FC = () => (
  <Label htmlFor={useUID()} required>
    {text}
  </Label>
);

export const RadioCheckbox: React.FC = () => (
  <Label htmlFor={useUID()} radiocheckbox>
    {text}
  </Label>
);

export const DisabledRadioCheckbox: React.FC = () => (
  <Label htmlFor={useUID()} radiocheckbox disabled>
    {text}
  </Label>
);
