/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface ReverseIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ReverseIcon: React.FC<ReverseIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `ReverseIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error("[ReverseIcon]: Missing a title for non-decorative icon.");
  }

  return (
    <IconWrapper display={display} size={size} color={color}>
      <svg
        role="img"
        aria-hidden={decorative}
        width="100%"
        height="100%"
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby={titleId}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.159.247a1 1 0 00-1.412.095l-3.5 4a1 1 0 000 1.317l3.5 4a1 1 0 101.506-1.317L3.203 6H13a5 5 0 010 10H4.5a1 1 0 100 2H13a7 7 0 100-14H3.204l2.049-2.341A1 1 0 005.159.247z"
        />
      </svg>
    </IconWrapper>
  );
};

ReverseIcon.displayName = "ReverseIcon";
export { ReverseIcon };
