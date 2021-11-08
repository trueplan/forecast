/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface SearchIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const SearchIcon: React.FC<SearchIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative
}) => {
  const titleId = `SearchIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error("[SearchIcon]: Missing a title for non-decorative icon.");
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
          d="M0 7.5a7.5 7.5 0 0012.096 5.928.998.998 0 00.197.28l6 6a1 1 0 001.414-1.415l-6-6a.998.998 0 00-.28-.197A7.5 7.5 0 100 7.5zm2 0a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0z"
        />
      </svg>
    </IconWrapper>
  );
};

SearchIcon.displayName = "SearchIcon";
export { SearchIcon };
