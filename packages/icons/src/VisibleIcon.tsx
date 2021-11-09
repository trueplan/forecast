/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface VisibleIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const VisibleIcon: React.FC<VisibleIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `VisibleIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error("[VisibleIcon]: Missing a title for non-decorative icon.");
  }

  return (
    <IconWrapper display={display} size={size} color={color}>
      <svg
        role="img"
        aria-hidden={decorative}
        width="100%"
        height="100%"
        viewBox="0 0 20 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby={titleId}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.357 6.581c-.096.159-.176.3-.24.419a10.89 10.89 0 001.692 2.306C5.126 10.67 7.131 12 10 12c2.868 0 4.874-1.329 6.19-2.694A10.893 10.893 0 0017.884 7a10.893 10.893 0 00-1.692-2.306C14.874 3.33 12.868 2 10 2 7.131 2 5.126 3.329 3.81 4.694a10.89 10.89 0 00-1.453 1.887zm17.562.814L19 7l.92.394a1 1 0 000-.788L19 7c.92-.394.919-.394.919-.395l-.002-.003-.003-.007-.008-.02a4.844 4.844 0 00-.136-.284 11.092 11.092 0 00-.417-.747c-.37-.61-.937-1.423-1.722-2.238C16.054 1.67 13.56 0 10 0 6.44 0 3.946 1.671 2.37 3.306A12.889 12.889 0 00.646 5.544a11.07 11.07 0 00-.524.968 4.605 4.605 0 00-.029.064l-.008.02-.003.006-.001.002v.001C.08 6.605.08 6.606 1 7l-.92-.394a1 1 0 000 .788L1 7c-.92.394-.919.394-.919.395l.002.003.003.007.008.02a4.605 4.605 0 00.136.284c.094.184.232.442.417.747.37.61.937 1.423 1.722 2.238C3.946 12.33 6.44 14 10 14c3.56 0 6.054-1.671 7.63-3.306a12.894 12.894 0 001.723-2.238 11.092 11.092 0 00.524-.968l.029-.064.008-.02.003-.006.001-.002v-.001zM10 9a2 2 0 110-4 2 2 0 010 4zM6 7a4 4 0 118 0 4 4 0 01-8 0z"
        />
      </svg>
    </IconWrapper>
  );
};

VisibleIcon.displayName = "VisibleIcon";
export { VisibleIcon };
