import * as React from "react";
import { ChevronDownIcon } from "@trueplan/forecast-icons";
import { Box } from "../../..";

const SelectIconWrapper: React.FC = () => (
  <Box
    css={{
      position: "absolute",
      top: "50%",
      right: 12,
      marginTop: "-0.313rem",
    }}
  >
    <ChevronDownIcon decorative size="xxsmall" />
  </Box>
);

SelectIconWrapper.displayName = "SelectIconWrapper";

export { SelectIconWrapper };
