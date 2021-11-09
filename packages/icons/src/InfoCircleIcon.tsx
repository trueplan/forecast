/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface InfoCircleIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const InfoCircleIcon: React.FC<InfoCircleIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `InfoCircleIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error(
      "[InfoCircleIcon]: Missing a title for non-decorative icon."
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
          d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-18a8 8 0 100 16 8 8 0 000-16zm0 6.75c.69 0 1.25.56 1.25 1.25v4a1.25 1.25 0 11-2.5 0v-4c0-.69.56-1.25 1.25-1.25zM10 5a1.25 1.25 0 100 2.5A1.25 1.25 0 0010 5z"
        />
      </svg>
    </IconWrapper>
  );
};

InfoCircleIcon.displayName = "InfoCircleIcon";
export { InfoCircleIcon };
