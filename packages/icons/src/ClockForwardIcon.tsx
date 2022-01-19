/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface ClockForwardIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ClockForwardIcon: React.FC<ClockForwardIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `ClockForwardIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error(
      "[ClockForwardIcon]: Missing a title for non-decorative icon."
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
          d="M2.593 3.643C3.889 2.347 6.183 1 9 1c2.808 0 5.054 1.29 6.357 2.593 1.088 1.088 2.211 2.879 2.544 5.091l.392-.391a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.332.074l-2.5-2a1 1 0 111.25-1.562l.775.62c-.286-1.659-1.14-3.015-1.957-3.832C12.949 4.014 11.192 3 9 3 6.816 3 5.007 4.057 4.007 5.057 3.014 6.051 2 7.808 2 10c0 2.184 1.057 3.993 2.057 4.993C5.051 15.986 6.808 17 9 17a1 1 0 110 2c-2.808 0-5.054-1.29-6.357-2.593C1.347 15.111 0 12.817 0 10c0-2.808 1.29-5.054 2.593-6.357zM9 6.5a1 1 0 10-2 0v4.375a1 1 0 00.341.753l3 2.625a1 1 0 001.318-1.506L9 10.421V6.5z"
        />
      </svg>
    </IconWrapper>
  );
};

ClockForwardIcon.displayName = "ClockForwardIcon";
export { ClockForwardIcon };
