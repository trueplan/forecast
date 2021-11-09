import * as React from "react";
import { useUID } from "react-uid";
import { HelpText } from "../../help-text";
import { Label } from "../../label";
import { TextArea } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/TextArea",
  component: TextArea,
};

export const Default: React.FC = () => {
  const textAreaID = useUID();
  return (
    <>
      <Label htmlFor={textAreaID}>Textarea</Label>
      <TextArea id={textAreaID} name="textarea">
        Textarea content
      </TextArea>
    </>
  );
};

export const Placeholder: React.FC = () => {
  const textAreaID = useUID();
  return (
    <>
      <Label htmlFor={textAreaID}>Textarea</Label>
      <TextArea
        placeholder="Placeholder text..."
        id={textAreaID}
        name="textarea"
      />
    </>
  );
};

export const Required: React.FC = () => {
  const textAreaID = useUID();
  return (
    <>
      <Label htmlFor={textAreaID} required>
        Textarea
      </Label>
      <TextArea id={textAreaID} name="textarea-required" required>
        Textarea content
      </TextArea>
    </>
  );
};

export const ReadOnly: React.FC = () => {
  const textAreaID = useUID();
  return (
    <>
      <Label htmlFor={textAreaID}>Textarea</Label>
      <TextArea id={textAreaID} name="textarea-readonly" readOnly>
        Textarea content
      </TextArea>
    </>
  );
};

export const Disabled: React.FC = () => {
  const textAreaID = useUID();
  return (
    <>
      <Label htmlFor={textAreaID}>Textarea</Label>
      <TextArea id={textAreaID} name="textarea-disabled" disabled>
        Textarea content
      </TextArea>
    </>
  );
};

export const Error: React.FC = () => {
  const textAreaID = useUID();
  const helpTextID = useUID();
  return (
    <>
      <Label htmlFor={textAreaID}>Textarea</Label>
      <TextArea
        aria-describedby={helpTextID}
        id={textAreaID}
        name="textarea-error"
        hasError
      >
        Textarea content
      </TextArea>
      <HelpText hasError id={helpTextID}>
        This is an error message.
      </HelpText>
    </>
  );
};
