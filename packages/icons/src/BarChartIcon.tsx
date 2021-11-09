/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface BarChartIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const BarChartIcon: React.FC<BarChartIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `BarChartIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error("[BarChartIcon]: Missing a title for non-decorative icon.");
  }

  return (
    <IconWrapper display={display} size={size} color={color}>
      <svg
        role="img"
        aria-hidden={decorative}
        width="100%"
        height="100%"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby={titleId}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 0h14a3 3 0 013 3v14a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm15 3a1 1 0 00-1-1H3a1 1 0 00-1 1v14a1 1 0 001 1h14a1 1 0 001-1V3zM5.5 4A1.5 1.5 0 017 5.5v9a1.5 1.5 0 01-3 0v-9A1.5 1.5 0 015.5 4zm6 5.5a1.5 1.5 0 00-3 0v5a1.5 1.5 0 003 0v-5zm3 2.5a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-3 0v-1a1.5 1.5 0 011.5-1.5z"
        />
      </svg>
    </IconWrapper>
  );
};

BarChartIcon.displayName = "BarChartIcon";
export { BarChartIcon };
