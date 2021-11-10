import { styled, theme } from "@trueplan/forecast-theme";

export const StyledCard = styled("div", {
  backgroundColor: theme.colors.white,
  borderColor: theme.colors.borderLight,
  borderRadius: theme.radii[30],
  borderStyle: "solid",
  borderWidth: theme.borderWidths[10],
  variants: {
    borderless: {
      true: {
        border: "none",
      },
    },
    padding: {
      space0: {
        padding: theme.space[0],
      },
      space10: {
        padding: theme.space[10],
      },
      space20: {
        padding: theme.space[20],
      },
      space30: {
        padding: theme.space[30],
      },
      space40: {
        padding: theme.space[40],
      },
      space50: {
        padding: theme.space[50],
      },
      space60: {
        padding: theme.space[60],
      },
      space70: {
        padding: theme.space[70],
      },
      space80: {
        padding: theme.space[80],
      },
      space90: {
        padding: theme.space[90],
      },
    },
    paddingTop: {
      space0: {
        paddingTop: theme.space[0],
      },
      space10: {
        paddingTop: theme.space[10],
      },
      space20: {
        paddingTop: theme.space[20],
      },
      space30: {
        paddingTop: theme.space[30],
      },
      space40: {
        paddingTop: theme.space[40],
      },
      space50: {
        paddingTop: theme.space[50],
      },
      space60: {
        paddingTop: theme.space[60],
      },
      space70: {
        paddingTop: theme.space[70],
      },
      space80: {
        paddingTop: theme.space[80],
      },
      space90: {
        paddingTop: theme.space[90],
      },
    },
    paddingRight: {
      space0: {
        paddingRight: theme.space[0],
      },
      space10: {
        paddingRight: theme.space[10],
      },
      space20: {
        paddingRight: theme.space[20],
      },
      space30: {
        paddingRight: theme.space[30],
      },
      space40: {
        paddingRight: theme.space[40],
      },
      space50: {
        paddingRight: theme.space[50],
      },
      space60: {
        paddingRight: theme.space[60],
      },
      space70: {
        paddingRight: theme.space[70],
      },
      space80: {
        paddingRight: theme.space[80],
      },
      space90: {
        paddingRight: theme.space[90],
      },
    },
    paddingBottom: {
      space0: {
        paddingBottom: theme.space[0],
      },
      space10: {
        paddingBottom: theme.space[10],
      },
      space20: {
        paddingBottom: theme.space[20],
      },
      space30: {
        paddingBottom: theme.space[30],
      },
      space40: {
        paddingBottom: theme.space[40],
      },
      space50: {
        paddingBottom: theme.space[50],
      },
      space60: {
        paddingBottom: theme.space[60],
      },
      space70: {
        paddingBottom: theme.space[70],
      },
      space80: {
        paddingBottom: theme.space[80],
      },
      space90: {
        paddingBottom: theme.space[90],
      },
    },
    paddingLeft: {
      space0: {
        paddingLeft: theme.space[0],
      },
      space10: {
        paddingLeft: theme.space[10],
      },
      space20: {
        paddingLeft: theme.space[20],
      },
      space30: {
        paddingLeft: theme.space[30],
      },
      space40: {
        paddingLeft: theme.space[40],
      },
      space50: {
        paddingLeft: theme.space[50],
      },
      space60: {
        paddingLeft: theme.space[60],
      },
      space70: {
        paddingLeft: theme.space[70],
      },
      space80: {
        paddingLeft: theme.space[80],
      },
      space90: {
        paddingLeft: theme.space[90],
      },
    },
  },
});

export const StyledCardHeader = styled("div", {
  borderBottomColor: theme.colors.borderLight,
  borderBottomStyle: "solid",
  borderBottomWidth: theme.borderWidths[10],
  px: theme.space[40],
  py: theme.space[20],
});

export const StyledCardFooter = styled("div", {
  borderTopColor: theme.colors.borderLight,
  borderTopStyle: "solid",
  borderTopWidth: theme.borderWidths[10],
  px: theme.space[40],
  py: theme.space[20],
});
