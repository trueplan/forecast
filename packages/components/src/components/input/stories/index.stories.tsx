import * as React from 'react';
import { useUID } from 'react-uid';
import { HelpText } from '../../help-text';
import { Label } from '../../label';
import { Input } from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Input',
  component: Input,
};

export const Default: React.FC = () => {
  const inputID = useUID();
  return (
    <>
      <Label htmlFor={inputID}>Text Input</Label>
      <Input type="text" value="Text input" id={inputID} name="input" />
    </>
  );
};

export const Placeholder: React.FC = () => {
  const inputID = useUID();
  return (
    <>
      <Label htmlFor={inputID}>Text Input</Label>
      <Input
        type="text"
        placeholder="Placeholder text..."
        id={inputID}
        name="input"
      />
    </>
  );
};

export const Required: React.FC = () => {
  const inputID = useUID();
  return (
    <>
      <Label htmlFor={inputID} required>
        Text Input
      </Label>
      <Input
        type="text"
        value="Required text"
        id={inputID}
        name="input-required"
        required
      />
    </>
  );
};

export const ReadOnly: React.FC = () => {
  const inputID = useUID();
  return (
    <>
      <Label htmlFor={inputID}>Text Input</Label>
      <Input
        type="text"
        value="Read only text"
        id={inputID}
        name="input-readonly"
        readOnly
      />
    </>
  );
};

export const Disabled: React.FC = () => {
  const inputID = useUID();
  return (
    <>
      <Label htmlFor={inputID}>Text Input</Label>
      <Input
        type="text"
        value="Disabled text"
        id={inputID}
        name="input-disabled"
        disabled
      />
    </>
  );
};

export const Error: React.FC = () => {
  const inputID = useUID();
  const helpTextID = useUID();
  return (
    <>
      <Label htmlFor={inputID}>Text Input</Label>
      <Input
        aria-describedby={helpTextID}
        type="text"
        value="Error text"
        id={inputID}
        name="input-error"
        hasError
      />
      <HelpText hasError id={helpTextID}>
        This is an error message.
      </HelpText>
    </>
  );
};

export const Hidden: React.FC = () => {
  const inputID = useUID();
  return (
    <Input type="hidden" value="Hidden text" id={inputID} name="input-hidden" />
  );
};

export const Number: React.FC = () => {
  const inputID = useUID();
  return (
    <>
      <Label htmlFor={inputID}>Number Input</Label>
      <Input type="number" value="500" id={inputID} name="input-number" />
    </>
  );
};

export const NumberError: React.FC = () => {
  const inputID = useUID();
  return (
    <>
      <Label htmlFor={inputID}>Number Error Input</Label>
      <Input
        type="number"
        value="Error on number input"
        id={inputID}
        name="input-number-error"
        hasError
      />
      <HelpText>Number type inputs should only contain numbers.</HelpText>
    </>
  );
};

export const Borderless: React.FC = () => {
  const inputID = useUID();
  return (
    <>
      <Label htmlFor={inputID}>Borderless Input</Label>
      <Input
        type="text"
        value="Borderless text"
        id={inputID}
        name="input-borderless"
        borderless
      />
    </>
  );
};

export const CenteredText: React.FC = () => {
  const inputID = useUID();
  return (
    <>
      <Label htmlFor={inputID}>Centered text Input</Label>
      <Input
        type="text"
        value="Centered text"
        id={inputID}
        name="input-centered-text"
        centeredText
      />
    </>
  );
};

export const Roboto: React.FC = () => {
  const inputID = useUID();
  return (
    <>
      <Label htmlFor={inputID}>Roboto Input</Label>
      <Input
        type="text"
        value="300/500"
        id={inputID}
        name="input-roboto"
        fontFamily="roboto"
      />
    </>
  );
};
