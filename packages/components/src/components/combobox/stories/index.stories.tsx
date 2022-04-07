import * as React from "react";
import { useUID } from "react-uid";
import { HelpText } from "../../help-text";
import { Label } from "../../label";
import { Text } from "../../../primitives/text";
import {
  Combobox,
  ComboboxItem,
  ComboboxPopover,
  useComboboxState,
  ComboboxMultiple,
  ComboboxMultipleItem,
} from "../src";
import { itemList as list } from "../__fixtures__/item-list";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Combobox",
  component: Combobox,
};

export const Default: React.FC = () => {
  const comboboxID = useUID();
  const comboboxState = useComboboxState({ gutter: 8, sameWidth: true });
  return (
    <>
      <Label htmlFor={comboboxID}>Combobox</Label>
      <Combobox
        id={comboboxID}
        name="combobox"
        state={comboboxState}
        placeholder="Placeholder text..."
      />
      <ComboboxPopover state={comboboxState}>
        <ComboboxItem value="Apple">Apple</ComboboxItem>
        <ComboboxItem value="Grape">Grape</ComboboxItem>
        <ComboboxItem value="Orange">Orange</ComboboxItem>
        <ComboboxItem value="Strawberry">Strawberry</ComboboxItem>
        <ComboboxItem value="Watermelon">Watermelon</ComboboxItem>
      </ComboboxPopover>
    </>
  );
};

export const Matches: React.FC = () => {
  const comboboxID = useUID();
  const comboboxState = useComboboxState({ gutter: 8, sameWidth: true, list });
  return (
    <>
      <Label htmlFor={comboboxID}>Combobox</Label>
      <Combobox
        id={comboboxID}
        name="combobox"
        state={comboboxState}
        placeholder="Placeholder text..."
      />
      <ComboboxPopover state={comboboxState}>
        {comboboxState.matches.length > 0 ? (
          comboboxState.matches.map((value) => (
            <ComboboxItem key={value} value={value}>
              {value}
            </ComboboxItem>
          ))
        ) : (
          <Text>No results found</Text>
        )}
      </ComboboxPopover>
    </>
  );
};

export const Multiple: React.FC = () => {
  const comboboxID = useUID();
  const [values, setValues] = React.useState<string[]>([]);
  const [matches, setMatches] = React.useState<string[]>([]);
  const printedValues = JSON.stringify(values);
  return (
    <>
      <Label htmlFor={comboboxID}>Combobox</Label>
      <ComboboxMultiple
        id={comboboxID}
        defaultList={list}
        onFilter={setMatches}
        values={values}
        onValuesChange={setValues}
        placeholder="Placeholder text..."
      >
        {matches.length > 0 ? (
          matches.map((value) => (
            <ComboboxMultipleItem key={value} value={value} />
          ))
        ) : (
          <Text>No results found</Text>
        )}
      </ComboboxMultiple>
      {printedValues && <pre>{printedValues}</pre>}
    </>
  );
};

export const Required: React.FC = () => {
  const comboboxID = useUID();
  const comboboxState = useComboboxState({ gutter: 8, sameWidth: true });
  return (
    <>
      <Label htmlFor={comboboxID} required>
        Combobox
      </Label>
      <Combobox
        id={comboboxID}
        name="combobox"
        state={comboboxState}
        placeholder="Placeholder text..."
        required
      />
      <ComboboxPopover state={comboboxState}>
        <ComboboxItem value="Apple">Apple</ComboboxItem>
        <ComboboxItem value="Grape">Grape</ComboboxItem>
        <ComboboxItem value="Orange">Orange</ComboboxItem>
        <ComboboxItem value="Strawberry">Strawberry</ComboboxItem>
        <ComboboxItem value="Watermelon">Watermelon</ComboboxItem>
      </ComboboxPopover>
    </>
  );
};

export const ReadOnly: React.FC = () => {
  const comboboxID = useUID();
  const comboboxState = useComboboxState({ gutter: 8, sameWidth: true });
  return (
    <>
      <Label htmlFor={comboboxID}>Combobox</Label>
      <Combobox
        id={comboboxID}
        name="combobox"
        state={comboboxState}
        value="Read only text"
        readOnly
      />
    </>
  );
};

export const Disabled: React.FC = () => {
  const comboboxID = useUID();
  const comboboxState = useComboboxState({ gutter: 8, sameWidth: true });
  return (
    <>
      <Label htmlFor={comboboxID}>Combobox</Label>
      <Combobox
        id={comboboxID}
        name="combobox"
        state={comboboxState}
        placeholder="Placeholder text..."
        disabled
      />
    </>
  );
};

export const Error: React.FC = () => {
  const comboboxID = useUID();
  const comboboxState = useComboboxState({ gutter: 8, sameWidth: true });
  const helpTextID = useUID();
  return (
    <>
      <Label htmlFor={comboboxID}>Combobox</Label>
      <Combobox
        aria-describedby={helpTextID}
        id={comboboxID}
        name="combobox"
        state={comboboxState}
        placeholder="Placeholder text..."
        hasError
      />
      <ComboboxPopover state={comboboxState}>
        <ComboboxItem value="Apple">Apple</ComboboxItem>
        <ComboboxItem value="Grape">Grape</ComboboxItem>
        <ComboboxItem value="Orange">Orange</ComboboxItem>
        <ComboboxItem value="Strawberry">Strawberry</ComboboxItem>
        <ComboboxItem value="Watermelon">Watermelon</ComboboxItem>
      </ComboboxPopover>
      <HelpText hasError id={helpTextID}>
        This is an error message.
      </HelpText>
    </>
  );
};
