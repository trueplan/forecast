import * as React from "react";
import { useUIDSeed } from "react-uid";
import { Radio, RadioGroup } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/RadioGroup",
  component: RadioGroup,
};

export const Default: React.FC = () => {
  const radioIDs = useUIDSeed();
  return (
    <form>
      <RadioGroup defaultValue="default" label="View density">
        <Radio value="default" id={radioIDs("default")}>
          Default
        </Radio>
        <Radio value="comfortable" id={radioIDs("comfortable")}>
          Comfortable
        </Radio>
        <Radio value="compact" id={radioIDs("compact")}>
          Compact
        </Radio>
      </RadioGroup>
    </form>
  );
};

export const Disabled: React.FC = () => {
  const radioIDs = useUIDSeed();
  return (
    <form>
      <RadioGroup defaultValue="default" label="View density">
        <Radio value="default" id={radioIDs("default")}>
          Default
        </Radio>
        <Radio value="comfortable" id={radioIDs("comfortable")}>
          Comfortable
        </Radio>
        <Radio disabled value="disabled" id={radioIDs("disabled")}>
          Disabled
        </Radio>
        <Radio value="compact" id={radioIDs("compact")}>
          Compact
        </Radio>
      </RadioGroup>
    </form>
  );
};
