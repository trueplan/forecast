/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface ArrowDownIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ArrowDownIcon: React.FC<ArrowDownIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `ArrowDownIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error(
      "[ArrowDownIcon]: Missing a title for non-decorative icon."
    );
  }

  return (
    <IconWrapper display={display} size={size} color={color}>
      <svg
        role="img"
        aria-hidden={decorative}
        width="100%"
        height="100%"
        viewBox="0 0 12 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby={titleId}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.7 13.196a1 1 0 01.013 1.414l-5 5.09a1 1 0 01-1.426 0l-5-5.09a1 1 0 011.426-1.402L5 16.555V1a1 1 0 112 0v15.555l3.287-3.347a1 1 0 011.414-.012z"
        />
      </svg>
    </IconWrapper>
  );
};

ArrowDownIcon.displayName = "ArrowDownIcon";
export { ArrowDownIcon };
