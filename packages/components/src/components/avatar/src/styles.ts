import { styled, theme } from "@forecast/theme";

export const StyledAvatar = styled("div", {
  alignItems: "center",
  br: "$circle",
  boxSizing: "border-box",
  color: theme.colors.white,
  display: "flex",
  fw: "$semiBold",
  justifyContent: "center",
  overflow: "hidden",
  variants: {
    size: {
      small: {
        fs: "$10",
        lh: "$10",
        height: "24px",
        width: "24px",
      },
      medium: {
        fs: "$20",
        lh: "$20",
        height: "32px",
        width: "32px",
      },
      large: {
        fs: "$30",
        lh: "$30",
        height: "40px",
        width: "40px",
      },
    },
    color: {
      blue: {
        backgroundColor: theme.colors.blue,
      },
      green: {
        backgroundColor: theme.colors.green,
      },
      lilac: {
        backgroundColor: theme.colors.lilac,
      },
      sky: {
        backgroundColor: theme.colors.sky,
      },
      yellow: {
        backgroundColor: theme.colors.yellow,
      },
      red: {
        backgroundColor: theme.colors.red,
      },
      royal: {
        backgroundColor: theme.colors.royal,
      },
    },
  },
  defaultVariants: {
    size: "medium",
    color: "lilac",
  },
});

export const StyledAvatarInitials = styled("abbr", {
  color: "inherit",
  display: "block",
  fontFamily: "inherit",
  fontSize: "inherit",
  fontWeight: "inherit",
  lineHeight: "inherit",
  textAlign: "center",
  textDecoration: "none",
});

export const StyledAvatarImage = styled("img", {
  maxWidth: "100%",
  height: "auto",
});
