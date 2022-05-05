import * as React from "react";
import { useUID } from "react-uid";
import { useComboboxState } from "../../combobox";
import { SelectCombobox, useSelectComboboxState } from "../index";
import { itemList as list } from "../../combobox/__fixtures__/item-list";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/SelectCombobox",
  component: SelectCombobox,
};

export const Default: React.FC = () => {
  const combobox = useComboboxState({ list, gutter: 4, sameWidth: true });
  // value and setValue shouldn't be passed to the select state because the
  // select value and the combobox value are different things.
  // value and setValue are in the combobox state
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { value, setValue, ...selectProps } = combobox;
  const select = useSelectComboboxState({
    ...selectProps,
    defaultValue: "Apple",
  });

  // Resets combobox value when popover is collapsed
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // eslint-disable-next-line unicorn/consistent-destructuring
  if (!select.mounted && combobox.value) {
    combobox.setValue("");
  }

  const selectComboboxID = useUID();

  return (
    <SelectCombobox
      comboboxState={combobox}
      id={selectComboboxID}
      label="Select a fruit"
      selectState={select}
    />
  );
};

export const DefaultOpen: React.FC = () => {
  const combobox = useComboboxState({
    list,
    gutter: 4,
    sameWidth: true,
    visible: true,
  });
  // value and setValue shouldn't be passed to the select state because the
  // select value and the combobox value are different things.
  // value and setValue are in the combobox state
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { value, setValue, ...selectProps } = combobox;
  const select = useSelectComboboxState({
    ...selectProps,
    defaultValue: "Apple",
    visible: true,
  });

  // Resets combobox value when popover is collapsed
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // eslint-disable-next-line unicorn/consistent-destructuring
  if (!select.mounted && combobox.value) {
    combobox.setValue("");
  }

  const selectComboboxID = useUID();

  return (
    <SelectCombobox
      comboboxState={combobox}
      id={selectComboboxID}
      label="Select a fruit"
      selectState={select}
    />
  );
};
