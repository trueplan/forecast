import * as ProgressPrimitive from "@radix-ui/react-progress";
import { styled, theme } from "@trueplan/forecast-theme";

export const StyledProgress = styled(ProgressPrimitive.Root, {
  backgroundColor: theme.colors.gray50,
  borderRadius: "99999px",
  height: "6px",
  overflow: "hidden",
  position: "relative",
  width: "250px",
});

export const StyledProgressIndicator = styled(ProgressPrimitive.Indicator, {
  height: "100%",
  transition: "width 660ms cubic-bezier(0.65, 0, 0.35, 1)",
  variants: {
    color: {
      blue: {
        backgroundColor: theme.colors.blue,
      },
      green: {
        backgroundColor: theme.colors.green,
      },
      red: {
        backgroundColor: theme.colors.red,
      },
      yellow: {
        backgroundColor: theme.colors.yellow,
      },
    },
  },
});
