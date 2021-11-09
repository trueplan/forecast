import * as React from "react";
import { Badge } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Badge",
  component: Badge,
};

export const Small: React.FC = () => (
  <div style={{ display: "flex", gap: "10px" }}>
    <Badge size="small" color="lilac">
      0
    </Badge>
    <Badge size="small" color="green">
      1
    </Badge>
    <Badge size="small" color="red">
      2
    </Badge>
    <Badge size="small" color="gray">
      3
    </Badge>
    <Badge size="small">100</Badge>
  </div>
);

export const Large: React.FC = () => (
  <div style={{ display: "flex", gap: "10px" }}>
    <Badge size="large" color="lilac">
      0
    </Badge>
    <Badge size="large" color="green">
      1
    </Badge>
    <Badge size="large" color="red">
      2
    </Badge>
    <Badge size="large" color="gray">
      3
    </Badge>
    <Badge size="large">100</Badge>
  </div>
);
