/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface DashboardIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const DashboardIcon: React.FC<DashboardIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `DashboardIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error(
      "[DashboardIcon]: Missing a title for non-decorative icon."
    );
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
          d="M6.5 0h-4A2.5 2.5 0 000 2.5v4A2.5 2.5 0 002.5 9h4A2.5 2.5 0 009 6.5v-4A2.5 2.5 0 006.5 0zM2 2.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-4zM6.5 11h-4A2.5 2.5 0 000 13.5v4A2.5 2.5 0 002.5 20h4A2.5 2.5 0 009 17.5v-4A2.5 2.5 0 006.5 11zM2 13.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-4zM13.5 0h4A2.5 2.5 0 0120 2.5v4A2.5 2.5 0 0117.5 9h-4A2.5 2.5 0 0111 6.5v-4A2.5 2.5 0 0113.5 0zm0 2a.5.5 0 00-.5.5v4a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5h-4zm4 9h-4a2.5 2.5 0 00-2.5 2.5v4a2.5 2.5 0 002.5 2.5h4a2.5 2.5 0 002.5-2.5v-4a2.5 2.5 0 00-2.5-2.5zM13 13.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-4z"
        />
      </svg>
    </IconWrapper>
  );
};

DashboardIcon.displayName = "DashboardIcon";
export { DashboardIcon };
