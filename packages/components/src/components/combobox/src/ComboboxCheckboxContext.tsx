import * as React from "react";
import type { CheckboxState } from "ariakit/checkbox";

export const ComboboxCheckboxContext = React.createContext<CheckboxState<
  string[]
> | null>(null);
