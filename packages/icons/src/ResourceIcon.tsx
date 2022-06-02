/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "react-uid";
import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/types";

export interface ResourceIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ResourceIcon: React.FC<ResourceIconProps> = ({
  display = "block",
  size = "medium",
  color = "current",
  title,
  decorative,
}) => {
  const titleId = `ResourceIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error("[ResourceIcon]: Missing a title for non-decorative icon.");
  }

  return (
    <IconWrapper display={display} size={size} color={color}>
      <svg
        role="img"
        aria-hidden={decorative}
        width="100%"
        height="100%"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby={titleId}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.23 19.753c-.252-.037-.565-.08-.913-.123-.909-.113-2.027-.222-2.932-.222-.905 0-2.024.11-2.933.222a44.619 44.619 0 00-1.45.205l-.087.014-.022.003-.893.15V1.249l.4-.237.002-.001h.001l.003-.003.008-.004L.437.99.51.952C.57.921.656.88.766.83c.22-.098.538-.223.955-.346C2.553.238 3.775 0 5.385 0c1.609 0 2.83.238 3.664.484.414.123.731.247.951.344.22-.097.537-.221.951-.344C11.784.238 13.006 0 14.615 0c1.61 0 2.832.238 3.664.484.417.123.735.248.955.346a4.754 4.754 0 01.33.161l.177.105-.142-.084-.002-.002.001.001h.001L20 1.25v18.753l-.893-.15-.022-.003-.087-.014c-.076-.012-.187-.03-.327-.05a44.68 44.68 0 00-1.123-.155c-.909-.113-2.028-.222-2.933-.222-.905 0-2.023.11-2.932.222-.348.043-.66.087-.914.123v.249L10 19.873l-.77.129v-.249zm-7.692-1.68V2.292c.153-.06.349-.13.588-.2.705-.21 1.791-.426 3.259-.426 1.467 0 2.553.217 3.259.425.238.07.434.14.587.201v15.78a46.08 46.08 0 00-.739-.099c-.923-.114-2.112-.233-3.107-.233-.995 0-2.184.119-3.108.233-.27.034-.52.067-.739.098zm9.231 0c.219-.032.469-.065.739-.099.924-.114 2.112-.233 3.107-.233.995 0 2.184.119 3.108.233.27.034.52.067.739.098V2.293a6.963 6.963 0 00-.588-.2c-.705-.21-1.791-.426-3.259-.426-1.467 0-2.553.217-3.259.425a6.98 6.98 0 00-.587.201v15.78z"
        />
      </svg>
    </IconWrapper>
  );
};

ResourceIcon.displayName = "ResourceIcon";
export { ResourceIcon };
