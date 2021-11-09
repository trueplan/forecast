/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface ArrowSwapIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ArrowSwapIcon: React.FC<ArrowSwapIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `ArrowSwapIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error(
      "[ArrowSwapIcon]: Missing a title for non-decorative icon."
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
          d="M4.392 10.285a1 1 0 111.398 1.43L3.453 14H19a1 1 0 110 2H3.453l2.337 2.285a1 1 0 11-1.398 1.43l-4.091-4a1 1 0 010-1.43l4.09-4zm11.216-10a1 1 0 10-1.398 1.43L16.547 4H1a1 1 0 100 2h15.547L14.21 8.285a1 1 0 001.398 1.43l4.091-4a1 1 0 000-1.43l-4.09-4z"
        />
      </svg>
    </IconWrapper>
  );
};

ArrowSwapIcon.displayName = "ArrowSwapIcon";
export { ArrowSwapIcon };
