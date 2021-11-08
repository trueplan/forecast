/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface DocumentCloseIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const DocumentCloseIcon: React.FC<DocumentCloseIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative
}) => {
  const titleId = `DocumentCloseIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error(
      "[DocumentCloseIcon]: Missing a title for non-decorative icon."
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
          d="M0 17a3 3 0 003 3h12a3 3 0 003-3V6.38a3 3 0 00-.755-1.99l-1.648-1.86-1.283-1.488A3 3 0 0012.042 0H3a3 3 0 00-3 3v14zM13 2.58l1.09 1.266L15.115 5H13V2.58zM11 2v4a1 1 0 001 1h4v10a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1h8zm.707 7.293a1 1 0 010 1.414L10.414 12l1.293 1.293a1 1 0 01-1.414 1.414L9 13.414l-1.293 1.293a1 1 0 01-1.414-1.414L7.586 12l-1.293-1.293a1 1 0 111.414-1.414L9 10.586l1.293-1.293a1 1 0 011.414 0z"
        />
      </svg>
    </IconWrapper>
  );
};

DocumentCloseIcon.displayName = "DocumentCloseIcon";
export { DocumentCloseIcon };
