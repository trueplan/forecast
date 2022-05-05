import * as React from "react";
import { SelectItem as SelectComboboxItem } from "ariakit/select";
import type { SelectState } from "ariakit/select";
import type { ComboboxState } from "ariakit/combobox";
import { InputBox } from "../../input-box";
import { Box } from "../../../primitives/box";
import { StyledComboboxItem, StyledCombobox } from "../../combobox";
import {
  StyledSelectElement as SelectComboboxElement,
  StyledSelectPopover as SelectComboboxPopover,
  StyledComboboxList as SelectComboboxList,
} from "./styles";

export interface SelectComoboxElementProps {
  selectState: SelectState;
  comboboxState: ComboboxState;
  id: string;
}

const SelectCombobox = React.forwardRef<
  HTMLButtonElement,
  SelectComoboxElementProps
>(({ selectState, comboboxState, id, ...props }, ref) => {
  return (
    <>
      <InputBox hasHover {...props}>
        <SelectComboboxElement state={selectState} id={id} ref={ref} />
      </InputBox>
      <SelectComboboxPopover state={selectState} composite={false}>
        <Box css={{ marginBottom: "$25" }}>
          <InputBox>
            <StyledCombobox
              state={comboboxState}
              autoSelect
              placeholder="Search..."
            />
          </InputBox>
        </Box>
        <SelectComboboxList state={comboboxState}>
          {comboboxState.matches.map((itemValue, i) => (
            <StyledComboboxItem key={itemValue + i} focusOnHover>
              {(itemProps) => (
                <SelectComboboxItem {...itemProps} value={itemValue} />
              )}
            </StyledComboboxItem>
          ))}
        </SelectComboboxList>
      </SelectComboboxPopover>
    </>
  );
});

SelectCombobox.displayName = "SelectComobox";

export { SelectCombobox };
