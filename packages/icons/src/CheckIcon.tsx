/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface CheckIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const CheckIcon: React.FC<CheckIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative
}) => {
  const titleId = `CheckIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error("[CheckIcon]: Missing a title for non-decorative icon.");
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
          d="M19.587.185a.953.953 0 01.222 1.356L7.514 18 .292 10.98a.951.951 0 01.001-1.374 1.021 1.021 0 011.415.001l5.564 5.41L18.19.4a1.02 1.02 0 011.396-.216z"
        />
      </svg>
    </IconWrapper>
  );
};

CheckIcon.displayName = "CheckIcon";
export { CheckIcon };
