/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface DocumentCheckIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const DocumentCheckIcon: React.FC<DocumentCheckIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative
}) => {
  const titleId = `DocumentCheckIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error(
      "[DocumentCheckIcon]: Missing a title for non-decorative icon."
    );
  }

  return (
    <IconWrapper display={display} size={size} color={color}>
      <svg
        role="img"
        aria-hidden={decorative}
        width="100%"
        height="100%"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby={titleId}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 20H3a3 3 0 01-3-3V3a3 3 0 013-3h9.042a3 3 0 012.272 1.042l1.283 1.488 1.648 1.86A3 3 0 0118 6.38V17a3 3 0 01-3 3zm-.91-16.154L13 2.58V5h2.114L14.09 3.846zM11 6V2H3a1 1 0 00-1 1v14a1 1 0 001 1h12a1 1 0 001-1V7h-4a1 1 0 01-1-1zm1.277 4.63a1 1 0 10-1.554-1.26l-2.495 3.08-.977-1.11a1 1 0 10-1.502 1.32l1.76 2a1 1 0 001.527-.03l3.241-4z"
        />
      </svg>
    </IconWrapper>
  );
};

DocumentCheckIcon.displayName = "DocumentCheckIcon";
export { DocumentCheckIcon };
