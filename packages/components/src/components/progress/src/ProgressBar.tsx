import * as React from "react";
import { Progress } from "./Progress";
import { ProgressIndicator } from "./ProgressIndicator";
import type { ProgressBarProps } from "./types";

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ color = "blue", value, ...props }, ref) => (
    <Progress value={value} ref={ref} {...props}>
      <ProgressIndicator color={color} style={{ width: `${value}%` }} />
    </Progress>
  )
);

ProgressBar.displayName = "ProgressBar";

export { ProgressBar };
