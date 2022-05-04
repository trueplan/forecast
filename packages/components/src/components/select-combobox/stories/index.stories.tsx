import * as React from "react";
import { InputBox } from "../../input-box";
import { Box } from "../../../primitives/box";
import {
  StyledComboboxItem,
  StyledCombobox,
  useComboboxState,
} from "../../combobox";
import {
  SelectComboboxItem,
  useSelectComboboxState,
  SelectCombobox,
  SelectComboboxPopover,
  SelectComboboxList,
} from "../index";
import { itemList as list } from "../../combobox/__fixtures__/item-list";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/SelectCombobox",
  // component: Example,
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

  return (
    <>
      <InputBox hasHover>
        <SelectCombobox state={select} />
      </InputBox>
      <SelectComboboxPopover state={select} composite={false}>
        <Box css={{ marginBottom: "$25" }}>
          <InputBox>
            <StyledCombobox
              state={combobox}
              autoSelect
              placeholder="Search..."
            />
          </InputBox>
        </Box>
        <SelectComboboxList state={combobox}>
          {combobox.matches.map((itemValue, i) => (
            <StyledComboboxItem key={itemValue + i} focusOnHover>
              {(props) => <SelectComboboxItem {...props} value={itemValue} />}
            </StyledComboboxItem>
          ))}
        </SelectComboboxList>
      </SelectComboboxPopover>
    </>
  );
};
