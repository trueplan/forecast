import * as React from "react";
import {
  StyledAvatar,
  StyledAvatarInitials,
  StyledAvatarImage,
} from "./styles";
import type { AvatarProps, AvatarContentProps } from "./types";
import { getInitialsFromName } from "./utils";

const AvatarContents: React.FC<AvatarContentProps> = ({ name, src }) => {
  if (src != null) {
    return <StyledAvatarImage src={src} alt={name} title={name} />;
  }
  return (
    <StyledAvatarInitials title={name}>
      {getInitialsFromName(name)}
    </StyledAvatarInitials>
  );
};

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ color = "lilac", name, size = "medium", src, ...props }, ref) => {
    return (
      <StyledAvatar color={color} ref={ref} size={size} {...props}>
        <AvatarContents name={name} src={src} />
      </StyledAvatar>
    );
  }
);

Avatar.displayName = "Avatar";

export { Avatar };
