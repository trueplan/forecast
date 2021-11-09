import * as React from "react";
import { HelpText } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Help Text",
  component: HelpText,
};

export const Default: React.FC = () => <HelpText>This is help text.</HelpText>;

export const Error: React.FC = () => (
  <HelpText hasError>This is an error message.</HelpText>
);
