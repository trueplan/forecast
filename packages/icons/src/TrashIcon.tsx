/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface TrashIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const TrashIcon: React.FC<TrashIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative
}) => {
  const titleId = `TrashIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error("[TrashIcon]: Missing a title for non-decorative icon.");
  }

  return (
    <IconWrapper display={display} size={size} color={color}>
      <svg
        role="img"
        aria-hidden={decorative}
        width="100%"
        height="100%"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby={titleId}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.26 3H13a3 3 0 00-3-3H8a3 3 0 00-3 3H1a1 1 0 000 2h1v12a3 3 0 003 3h8a3 3 0 003-3V5h1a1 1 0 100-2h-3.74zM14 5H4v12a1 1 0 001 1h8a1 1 0 001-1V5zM7 3h4a1 1 0 00-1-1H8a1 1 0 00-1 1zm0 4a1 1 0 011 1v7a1 1 0 11-2 0V8a1 1 0 011-1zm5 1a1 1 0 10-2 0v7a1 1 0 102 0V8z"
        />
      </svg>
    </IconWrapper>
  );
};

TrashIcon.displayName = "TrashIcon";
export { TrashIcon };
