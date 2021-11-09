import * as React from "react";
import { useUID } from "react-uid";
import { Box } from "../../../layout/box";
import { Checkbox } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Checkbox",
  component: Checkbox,
};

export const Default: React.FC = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <form>
      <Checkbox
        checked={checked}
        id={useUID()}
        onCheckedChange={() =>
          setChecked((prevIsChecked) => (prevIsChecked === true ? false : true))
        }
      >
        Default
      </Checkbox>
    </form>
  );
};

export const Checked: React.FC = () => (
  <form>
    <Checkbox id={useUID()} defaultChecked>
      Checked
    </Checkbox>
  </form>
);

export const Indeterminate: React.FC = () => {
  return (
    <form>
      <Checkbox id={useUID()} checked="indeterminate">
        Select all
      </Checkbox>
    </form>
  );
};

export const Disabled: React.FC = () => (
  <form>
    <Checkbox disabled id={useUID()}>
      Disabled
    </Checkbox>
  </form>
);

export const MultipleLine: React.FC = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <Box css={{ width: "300px" }}>
      <form>
        <Checkbox
          checked={checked}
          id={useUID()}
          onCheckedChange={() =>
            setChecked((prevIsChecked) =>
              prevIsChecked === true ? false : true
            )
          }
        >
          This content should wrap to multiple lines. This content should wrap
          to multiple lines.
        </Checkbox>
      </form>
    </Box>
  );
};
