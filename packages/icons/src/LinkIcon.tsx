/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface LinkIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const LinkIcon: React.FC<LinkIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative
}) => {
  const titleId = `LinkIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error("[LinkIcon]: Missing a title for non-decorative icon.");
  }

  return (
    <IconWrapper display={display} size={size} color={color}>
      <svg
        role="img"
        aria-hidden={decorative}
        width="100%"
        height="100%"
        viewBox="0 0 20 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby={titleId}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 5a3 3 0 003 3h2a1 1 0 110 2H5A5 5 0 015 0h2a1 1 0 010 2H5a3 3 0 00-3 3zm16 0a3 3 0 01-3 3h-2a1 1 0 100 2h2a5 5 0 000-10h-2a1 1 0 100 2h2a3 3 0 013 3zM6 4a1 1 0 000 2h8a1 1 0 100-2H6z"
        />
      </svg>
    </IconWrapper>
  );
};

LinkIcon.displayName = "LinkIcon";
export { LinkIcon };
