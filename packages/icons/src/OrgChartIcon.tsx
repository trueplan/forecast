/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface OrgChartIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const OrgChartIcon: React.FC<OrgChartIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `OrgChartIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error("[OrgChartIcon]: Missing a title for non-decorative icon.");
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
          d="M11 0H9a3 3 0 000 6v3H6a3 3 0 00-3 3v2a3 3 0 100 6h2a3 3 0 100-6v-2a1 1 0 011-1h8a1 1 0 011 1v2a3 3 0 100 6h2a3 3 0 100-6v-2a3 3 0 00-3-3h-3V6a3 3 0 100-6zm5 16h-1a1 1 0 100 2h2a1 1 0 100-2h-1zM3 16h2a1 1 0 110 2H3a1 1 0 110-2zm7-12h1a1 1 0 100-2H9a1 1 0 100 2h1z"
        />
      </svg>
    </IconWrapper>
  );
};

OrgChartIcon.displayName = "OrgChartIcon";
export { OrgChartIcon };
