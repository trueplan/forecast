import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { keyframes } from "@stitches/react";
import { styled } from "@trueplan/forecast-theme";
import { Badge } from "../../badge";
import { Stack } from "../../../layout/stack";

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const StyledContent = styled(TooltipPrimitive.Content, {
  background: "$gray100",
  color: "$white",
  padding: "$25",
  borderRadius: "$30",
  maxWidth: 174,
  fontSize: "$10",
  fontWeight: "$medium",
  lineHeight: 1.3,
  '&[data-align="start"]&[data-side="bottom"]': { borderTopLeftRadius: 0 },
  '&[data-align="end"]&[data-side="bottom"]': { borderTopRightRadius: 0 },
  '&[data-align="start"]&[data-side="top"]': { borderBottomLeftRadius: 0 },
  '&[data-align="end"]&[data-side="top"]': { borderBottomRightRadius: 0 },
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "400ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: "transform, opacity",
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
    },
  },
});

const StyledArrow = styled(TooltipPrimitive.Arrow, {
  fill: "$gray100",
});

export interface ToolTipContentProps
  extends Omit<TooltipPrimitive.TooltipContentProps, "css"> {
  badge?: string;
}

export const TooltipContent: React.FC<ToolTipContentProps> = ({
  children,
  sideOffset = 2,
  side = "top",
  badge,
  ...props
}) => (
  <StyledContent sideOffset={sideOffset} side={side} {...props}>
    {badge ? (
      <Stack direction="horizontal" spacing="$25" align="center">
        Approvals <Badge color="green">{badge}</Badge>
      </Stack>
    ) : (
      children
    )}
    <StyledArrow width={9} height={6} />
  </StyledContent>
);

export const TooltipTrigger = TooltipPrimitive.Trigger;
export const Tooltip = TooltipPrimitive.Root;
