/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface ExpandIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ExpandIcon: React.FC<ExpandIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `ExpandIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error("[ExpandIcon]: Missing a title for non-decorative icon.");
  }

  return (
    <IconWrapper display={display} size={size} color={color}>
      <svg
        role="img"
        aria-hidden={decorative}
        fill="none"
        height="100%"
        viewBox="0 0 20 20"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby={titleId}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          clipRule="evenodd"
          d="M2 18h16V2H2zm16 2a2 2 0 002-2V2a2 2 0 00-2-2H2a2 2 0 00-2 2v16a2 2 0 002 2zm-6.521-6.147a1 1 0 01-.332-1.374l1.65-2.701-1.603-2.187a1 1 0 111.612-1.182l2.397 3.268-2.35 3.844a1 1 0 01-1.374.332zM5.147 12.48a1 1 0 001.706 1.042l2.35-3.844-2.397-3.268A1 1 0 005.194 7.59l1.603 2.187z"
          fillRule="evenodd"
        />
      </svg>
    </IconWrapper>
  );
};

ExpandIcon.displayName = "ExpandIcon";
export { ExpandIcon };
