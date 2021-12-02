/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface PriorityOneIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const PriorityOneIcon: React.FC<PriorityOneIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `PriorityOneIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error(
      "[PriorityOneIcon]: Missing a title for non-decorative icon."
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
          d="M10 .233l9.614 7.478a1 1 0 11-1.228 1.578L10 2.767 1.614 9.289A1 1 0 01.386 7.711L10 .233zm0 5l9.614 7.478a1 1 0 11-1.228 1.578L10 7.767l-8.386 6.522a1 1 0 01-1.228-1.578L10 5.233zm9.614 12.978L10 10.733.386 18.211a1 1 0 101.228 1.578L10 13.267l8.386 6.522a1 1 0 001.228-1.578z"
        />
      </svg>
    </IconWrapper>
  );
};

PriorityOneIcon.displayName = "PriorityOneIcon";
export { PriorityOneIcon };
