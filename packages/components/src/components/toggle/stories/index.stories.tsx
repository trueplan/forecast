import * as React from "react";
import { useUID } from "react-uid";
import { Toggle } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Toggle",
  component: Toggle,
};

export const Default: React.FC = () => {
  const [checked, setChecked] = React.useState(false);
  const id = useUID();

  return (
    <Toggle
      id={id}
      checked={checked}
      onCheckedChange={() =>
        setChecked((prevIsChecked) => (prevIsChecked === true ? false : true))
      }
    />
  );
};

export const On: React.FC = () => {
  const [checked, setChecked] = React.useState(true);
  const id = useUID();
  return (
    <Toggle
      id={id}
      checked={checked}
      onCheckedChange={() =>
        setChecked((prevIsChecked) => (prevIsChecked === true ? false : true))
      }
    />
  );
};

export const HiddenLabelText: React.FC = () => {
  const [checked, setChecked] = React.useState(true);
  const id = useUID();
  return (
    <Toggle
      id={id}
      checked={checked}
      onCheckedChange={() =>
        setChecked((prevIsChecked) => (prevIsChecked === true ? false : true))
      }
      showLabelText={false}
    />
  );
};
