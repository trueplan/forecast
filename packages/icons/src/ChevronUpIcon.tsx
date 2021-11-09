/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface ChevronUpIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ChevronUpIcon: React.FC<ChevronUpIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `ChevronUpIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error(
      "[ChevronUpIcon]: Missing a title for non-decorative icon."
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
          d="M.325 11.68a1.077 1.077 0 010-1.542L9.215.32a1.126 1.126 0 011.57 0l8.89 9.818a1.077 1.077 0 010 1.543 1.126 1.126 0 01-1.572 0L10 2.633 1.897 11.68a1.126 1.126 0 01-1.572 0z"
        />
      </svg>
    </IconWrapper>
  );
};

ChevronUpIcon.displayName = "ChevronUpIcon";
export { ChevronUpIcon };
