import { styled, theme } from "@forecast/theme";

export const StyledLabel = styled("label", {
  fontFamily: theme.fonts.inter,
  fontWeight: theme.fontWeights.medium,
  fontSize: theme.fontSizes[10],
  lineHeight: theme.lineHeights[10],
  color: theme.colors.textLight,
  marginBottom: theme.space[10],
  display: "flex",
  alignItems: "center",
  variants: {
    marginBottom: {
      space0: {
        marginBottom: theme.space[0],
      },
      space10: {
        marginBottom: theme.space[10],
      },
    },
    radiocheckbox: {
      true: {
        color: theme.colors.gray80,
        fontSize: theme.fontSizes[20],
        fontWeight: theme.fontWeights.normal,
        lineHeight: theme.lineHeights[20],
      },
    },
    disabled: {
      true: {
        color: theme.colors.textLight,
        cursor: "not-allowed",
      },
    },
  },
});

export const StyledDot = styled("div", {
  height: "3px",
  width: "3px",
  borderRadius: theme.radii.circle,
  backgroundColor: theme.colors.red,
  marginLeft: theme.space[10],
});
