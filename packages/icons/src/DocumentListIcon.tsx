/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface DocumentListIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const DocumentListIcon: React.FC<DocumentListIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `DocumentListIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error(
      "[DocumentListIcon]: Missing a title for non-decorative icon."
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
          d="M3 20h12a3 3 0 003-3V6.38a3 3 0 00-.755-1.99l-1.648-1.86-1.283-1.488A3 3 0 0012.042 0H3a3 3 0 00-3 3v14a3 3 0 003 3zM13 2.58l1.09 1.266L15.115 5H13V2.58zM11 2v4a1 1 0 001 1h4v10a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1h8zm-6 8a1 1 0 011-1h6a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H6z"
        />
      </svg>
    </IconWrapper>
  );
};

DocumentListIcon.displayName = "DocumentListIcon";
export { DocumentListIcon };
