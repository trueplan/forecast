import * as React from "react";
import { SelectItem as SelectComboboxItem } from "ariakit/select";
import type { SelectState } from "ariakit/select";
import type { ComboboxState } from "ariakit/combobox";
import { InputBox } from "../../input-box";
import { Box } from "../../../primitives/box";
import { Label } from "../../label";
import { VisuallyHidden } from "../../visually-hidden";
import { StyledComboboxItem, StyledCombobox } from "../../combobox";
import {
  StyledSelectElement as SelectComboboxElement,
  StyledSelectPopover as SelectComboboxPopover,
  StyledComboboxList as SelectComboboxList,
} from "./styles";

export interface SelectComoboxElementProps {
  comboboxState: ComboboxState;
  id: string;
  label: string;
  selectState: SelectState;
}

const SelectCombobox = React.forwardRef<
  HTMLButtonElement,
  SelectComoboxElementProps
>(({ comboboxState, id, label, selectState, ...props }, ref) => {
  return (
    <>
      <VisuallyHidden>
        <Label htmlFor={id}>{label}</Label>
      </VisuallyHidden>
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
