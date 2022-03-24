import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { keyframes, styled, theme } from "@trueplan/forecast-theme";
import { CloseIcon } from "@trueplan/forecast-icons";

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const StyledPopoverContent = styled(PopoverPrimitive.Content, {
  position: "relative",
  borderRadius: theme.radii[30],
  padding: theme.space[25],
  paddingRight: theme.space[50],
  backgroundColor: theme.colors.backgroundInverse,
  maxWidth: "350px",
  boxShadow: "rgb(18 28 45 / 10%) 0px 2px 10px 0px",
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "400ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    animationFillMode: "forwards",
    willChange: "transform, opacity",
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

const StyledPopoverArrow = styled(PopoverPrimitive.Arrow, {
  fill: theme.colors.backgroundInverse,
});

const StyledPopoverClose = styled(PopoverPrimitive.Close, {
  all: "unset",
  position: "absolute",
  top: theme.space[25],
  right: theme.space[25],
  cursor: "pointer",
  color: "$gray70",
  "&:hover": {
    color: "$gray80",
  },
  "&:focus": {
    outline: "$borderWidths$20 solid $colors$gray40 !important",
    outlineOffset: "1px",
  },
});

export type PopoverContentProps = Omit<
  PopoverPrimitive.PopoverContentProps,
  "css"
>;

export const PopoverContent: React.FC<PopoverContentProps> = ({
  children,
  sideOffset = 2,
  side = "top",
  ...props
}) => (
  <StyledPopoverContent sideOffset={sideOffset} side={side} {...props}>
    {children}
    <StyledPopoverClose>
      <CloseIcon
        decorative={false}
        title="Close"
        color="current"
        size="xxsmall"
      />
    </StyledPopoverClose>
    <StyledPopoverArrow width={9} height={6} />
  </StyledPopoverContent>
);

export const PopoverTrigger = PopoverPrimitive.Trigger;
export const Popover = PopoverPrimitive.Root;
