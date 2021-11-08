/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface ChevronDownIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ChevronDownIcon: React.FC<ChevronDownIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative
}) => {
  const titleId = `ChevronDownIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error(
      "[ChevronDownIcon]: Missing a title for non-decorative icon."
    );
  }

  return (
    <IconWrapper display={display} size={size} color={color}>
      <svg
        role="img"
        aria-hidden={decorative}
        width="100%"
        height="100%"
        viewBox="0 0 20 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby={titleId}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M.325.32a1.077 1.077 0 000 1.542l8.89 9.819a1.126 1.126 0 001.57 0l8.89-9.819a1.077 1.077 0 000-1.542 1.126 1.126 0 00-1.572 0L10 9.366 1.897.32a1.126 1.126 0 00-1.572 0z"
        />
      </svg>
    </IconWrapper>
  );
};

ChevronDownIcon.displayName = "ChevronDownIcon";
export { ChevronDownIcon };
