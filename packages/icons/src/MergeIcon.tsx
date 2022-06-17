/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface MergeIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const MergeIcon: React.FC<MergeIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `MergeIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error("[MergeIcon]: Missing a title for non-decorative icon.");
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
          d="M10 20a1 1 0 01-1-1V1a1 1 0 112 0v18a1 1 0 01-1 1zM4.293 7.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-2 2a1 1 0 01-1.414-1.414L4.586 11H1a1 1 0 110-2h3.586l-.293-.293a1 1 0 010-1.414zm10 0a1 1 0 111.414 1.414L15.414 9H19a1 1 0 110 2h-3.586l.293.293a1 1 0 01-1.414 1.414l-2-2a1 1 0 010-1.414l2-2z"
        />
      </svg>
    </IconWrapper>
  );
};

MergeIcon.displayName = "MergeIcon";
export { MergeIcon };
