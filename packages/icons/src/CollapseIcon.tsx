/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface CollapseIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const CollapseIcon: React.FC<CollapseIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `CollapseIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error("[CollapseIcon]: Missing a title for non-decorative icon.");
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
          d="M18 2H2v16h16V2zM2 0a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V2a2 2 0 00-2-2H2zm6.521 6.147a1 1 0 01.332 1.374l-1.65 2.701 1.603 2.187a1 1 0 11-1.612 1.182l-2.397-3.268 2.35-3.844a1 1 0 011.374-.332zm6.332 1.374a1 1 0 00-1.706-1.042l-2.35 3.844 2.397 3.268a1 1 0 001.612-1.182l-1.603-2.187 1.65-2.7z"
        />
      </svg>
    </IconWrapper>
  );
};

CollapseIcon.displayName = "CollapseIcon";
export { CollapseIcon };
