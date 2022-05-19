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
  const { value, setValue, ...selectProps } = combobox;
  const select = useSelectComboboxState({
    ...selectProps,
    defaultValue: "Apple",
  });

  if (!select.mounted && value) {
    setValue("");
  }

  const selectComboboxID = useUID();

  return (
    <SelectCombobox
      comboboxState={combobox}
      id={selectComboboxID}
      hasClearButton
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
  const { value, setValue, ...selectProps } = combobox;
  const select = useSelectComboboxState({
    ...selectProps,
    defaultValue: "Apple",
    visible: true,
  });

  if (!select.mounted && value) {
    setValue("");
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

export const EmptyValue: React.FC = () => {
  const combobox = useComboboxState({
    list,
    gutter: 4,
    sameWidth: true,
  });
  const { value, setValue, ...selectProps } = combobox;
  const select = useSelectComboboxState({
    ...selectProps,
    defaultValue: "",
  });

  if (!select.mounted && value) {
    setValue("");
  }

  const selectComboboxID = useUID();

  return (
    <SelectCombobox
      comboboxState={combobox}
      id={selectComboboxID}
      hasClearButton
      label="Select a fruit"
      selectState={select}
    />
  );
};
