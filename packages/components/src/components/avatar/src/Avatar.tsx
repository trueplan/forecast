import * as React from "react";
import { Box } from "../../../primitives/box";
import { Text } from "../../../primitives/text";
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
  (
    { color = "lilac", name, showName, size = "medium", title, src, ...props },
    ref
  ) => {
    return (
      <Box
        css={{
          display: showName ? "flex" : "inline-block",
          alignItems: "center",
        }}
      >
        <StyledAvatar color={color} ref={ref} size={size} {...props}>
          <AvatarContents name={name} src={src} />
        </StyledAvatar>
        {showName ? (
          <Text css={{ marginLeft: "$20" }}>
            <Text
              display="block"
              fontSize="fontSize10"
              lineHeight="lineHeight2"
              fontWeight="semiBold"
            >
              {name}
            </Text>
            {title && size !== "small" ? (
              <Text
                display="block"
                fontSize="fontSize10"
                lineHeight="lineHeight2"
                fontWeight="normal"
              >
                {title}
              </Text>
            ) : null}
          </Text>
        ) : null}
      </Box>
    );
  }
);

Avatar.displayName = "Avatar";

export { Avatar };
