/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface SkipBackIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const SkipBackIcon: React.FC<SkipBackIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `SkipBackIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error("[SkipBackIcon]: Missing a title for non-decorative icon.");
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
          d="M11.68 19.675a1.077 1.077 0 01-1.542 0L.32 10.785a1.126 1.126 0 010-1.57l9.818-8.89a1.077 1.077 0 011.543 0 1.126 1.126 0 010 1.572L2.633 10l9.046 8.103a1.126 1.126 0 010 1.572z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.68 19.675a1.077 1.077 0 01-1.542 0l-9.818-8.89a1.126 1.126 0 010-1.57l9.818-8.89a1.077 1.077 0 011.542 0 1.126 1.126 0 010 1.572L9.634 10l9.046 8.103a1.126 1.126 0 010 1.572z"
        />
      </svg>
    </IconWrapper>
  );
};

SkipBackIcon.displayName = "SkipBackIcon";
export { SkipBackIcon };
