import * as React from "react";
import { SelectItem as SelectComboboxItem } from "ariakit/select";
import type { SelectState } from "ariakit/select";
import type { ComboboxState } from "ariakit/combobox";
import { CloseIcon } from "@trueplan/forecast-icons";
import { InputBox } from "../../input-box";
import { Box } from "../../../primitives/box";
import { Label } from "../../label";
import { VisuallyHidden } from "../../visually-hidden";
import { StyledComboboxItem, StyledCombobox } from "../../combobox";
import {
  StyledSelectElement as SelectComboboxElement,
  StyledSelectPopover as SelectComboboxPopover,
  StyledComboboxList as SelectComboboxList,
  StyledSelectClearButton,
} from "./styles";

export interface SelectComoboxElementProps {
  comboboxState: ComboboxState;
  id: string;
  isClearable?: boolean;
  label: string;
  selectState: SelectState;
}

const SelectCombobox = React.forwardRef<
  HTMLButtonElement,
  SelectComoboxElementProps
>(({ comboboxState, id, isClearable, label, selectState, ...props }, ref) => {
  return (
    <>
      <VisuallyHidden>
        <Label htmlFor={id}>{label}</Label>
      </VisuallyHidden>
      <InputBox hasHover {...props}>
        <SelectComboboxElement state={selectState} id={id} ref={ref} />
        {isClearable && selectState.value !== ("" as SelectState["value"]) && (
          <StyledSelectClearButton onClick={() => selectState.setValue("")}>
            <CloseIcon
              decorative={false}
              title="Remove selection"
              color="current"
              size="xxsmall"
            />
          </StyledSelectClearButton>
        )}
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
          {comboboxState.matches.map((itemValue) => (
            <StyledComboboxItem key={itemValue} focusOnHover>
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
