/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface UnmergeIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const UnmergeIcon: React.FC<UnmergeIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `UnmergeIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error("[UnmergeIcon]: Missing a title for non-decorative icon.");
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
          d="M10 20a1 1 0 01-1-1V1a1 1 0 112 0v18a1 1 0 01-1 1zM3.707 7.293a1 1 0 00-1.414 0l-2 2a1 1 0 000 1.414l2 2a1 1 0 001.414-1.414L3.414 11H7a1 1 0 100-2H3.414l.293-.293a1 1 0 000-1.414zm14 0a1 1 0 10-1.414 1.414l.293.293H13a1 1 0 100 2h3.586l-.293.293a1 1 0 001.414 1.414l2-2a1 1 0 000-1.414l-2-2z"
        />
      </svg>
    </IconWrapper>
  );
};

UnmergeIcon.displayName = "UnmergeIcon";
export { UnmergeIcon };
