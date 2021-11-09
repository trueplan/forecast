/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface HiddenIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const HiddenIcon: React.FC<HiddenIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `HiddenIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error("[HiddenIcon]: Missing a title for non-decorative icon.");
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
          d="M18.293.293a1 1 0 111.414 1.414l-3.41 3.41c.502.382.945.786 1.334 1.189a12.895 12.895 0 011.722 2.238 11.092 11.092 0 01.524.968l.029.064.008.02.003.006.001.002v.001c.001 0 .001.001-.918.395.92.394.919.394.919.395l-.002.003-.003.007-.008.02a4.702 4.702 0 01-.136.284c-.094.184-.232.442-.417.748-.37.61-.937 1.422-1.722 2.237C16.054 15.33 13.56 17 10 17c-1.776 0-3.286-.416-4.55-1.036l-3.743 3.743a1 1 0 01-1.414-1.414l18-18zM6.967 14.447A8.328 8.328 0 0010 15c2.868 0 4.874-1.329 6.19-2.694A10.896 10.896 0 0017.884 10a10.893 10.893 0 00-1.692-2.306 9.558 9.558 0 00-1.324-1.147l-1.42 1.421a4 4 0 01-5.478 5.478l-1.002 1.001zm2.515-2.515a2 2 0 002.45-2.45l-2.45 2.45zM19 10l.92.394a1 1 0 000-.788L19 10zm-9-7c.898 0 1.729.106 2.493.292l-1.74 1.74A8.973 8.973 0 0010 5C7.131 5 5.126 6.329 3.81 7.694A10.89 10.89 0 002.116 10a10.923 10.923 0 001.532 2.136l-1.415 1.415a12.914 12.914 0 01-1.587-2.095 11.084 11.084 0 01-.524-.967 4.477 4.477 0 01-.029-.065l-.008-.02-.003-.006-.001-.002v-.001C.08 10.395.08 10.394 1 10l-.92.394a1 1 0 010-.788L1 10C.08 9.606.08 9.606.08 9.605l.002-.003.003-.007.008-.02a4.605 4.605 0 01.136-.284c.094-.184.232-.442.417-.747.37-.61.937-1.423 1.722-2.238C3.946 4.67 6.44 3 10 3zM6.006 9.779a4 4 0 013.773-3.773L6.006 9.779z"
        />
      </svg>
    </IconWrapper>
  );
};

HiddenIcon.displayName = "HiddenIcon";
export { HiddenIcon };
