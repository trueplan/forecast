/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface PlusCircleIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const PlusCircleIcon: React.FC<PlusCircleIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative
}) => {
  const titleId = `PlusCircleIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error(
      "[PlusCircleIcon]: Missing a title for non-decorative icon."
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
          d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-18a8 8 0 100 16 8 8 0 000-16zm0 2.757a1 1 0 011 1V9h3.243a1 1 0 110 2H11v3.243a1 1 0 01-2 0V11H5.756a1 1 0 110-2H9V5.757a1 1 0 011-1z"
        />
      </svg>
    </IconWrapper>
  );
};

PlusCircleIcon.displayName = "PlusCircleIcon";
export { PlusCircleIcon };
