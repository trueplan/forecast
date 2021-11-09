/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface PlusSquareIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const PlusSquareIcon: React.FC<PlusSquareIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `PlusSquareIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error(
      "[PlusSquareIcon]: Missing a title for non-decorative icon."
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
          d="M3 0h14a3 3 0 013 3v14a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm0 2a1 1 0 00-1 1v14a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1H3zm7 2.757a1 1 0 011 1V9h3.243a1 1 0 110 2H11v3.243a1 1 0 01-2 0V11H5.756a1 1 0 110-2H9V5.757a1 1 0 011-1z"
        />
      </svg>
    </IconWrapper>
  );
};

PlusSquareIcon.displayName = "PlusSquareIcon";
export { PlusSquareIcon };
