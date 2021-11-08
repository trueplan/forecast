/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface DocumentPlusIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const DocumentPlusIcon: React.FC<DocumentPlusIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative
}) => {
  const titleId = `DocumentPlusIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error(
      "[DocumentPlusIcon]: Missing a title for non-decorative icon."
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
          d="M3 20h12a3 3 0 003-3V6.38a3 3 0 00-.755-1.99l-1.648-1.86-1.283-1.488A3 3 0 0012.042 0H3a3 3 0 00-3 3v14a3 3 0 003 3zM13 2.58l1.09 1.266L15.115 5H13V2.58zM11 2v4a1 1 0 001 1h4v10a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1h8zm-5.5 9.5a1 1 0 011-1H8V9a1 1 0 112 0v1.5h1.5a1 1 0 110 2H10V14a1 1 0 11-2 0v-1.5H6.5a1 1 0 01-1-1z"
        />
      </svg>
    </IconWrapper>
  );
};

DocumentPlusIcon.displayName = "DocumentPlusIcon";
export { DocumentPlusIcon };
