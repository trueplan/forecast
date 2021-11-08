/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface LocationIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const LocationIcon: React.FC<LocationIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative
}) => {
  const titleId = `LocationIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error("[LocationIcon]: Missing a title for non-decorative icon.");
  }

  return (
    <IconWrapper display={display} size={size} color={color}>
      <svg
        role="img"
        aria-hidden={decorative}
        width="100%"
        height="100%"
        viewBox="0 0 14 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby={titleId}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.301 9.855L7 16.95 2.699 9.855C.612 6.415 3.036 1.971 7 1.971s6.387 4.443 4.301 7.884zM1.058 10.893C-1.825 6.138 1.524 0 7 0s8.825 6.138 5.942 10.893l-5.3 8.741a.748.748 0 01-1.285 0l-5.3-8.741zM7 4.927c-1.066 0-1.93.883-1.93 1.971 0 1.089.864 1.971 1.93 1.971 1.066 0 1.93-.882 1.93-1.97 0-1.09-.864-1.972-1.93-1.972z"
        />
      </svg>
    </IconWrapper>
  );
};

LocationIcon.displayName = "LocationIcon";
export { LocationIcon };
