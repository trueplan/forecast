import * as React from "react";
import { styled, theme } from "@trueplan/forecast-theme";
import { Stack } from "../../../layout/stack";
import { Text } from "../../../primitives/text";

export const StyledStatButton = styled("button", {
  all: "unset",
  appearance: "none",
  background: "none",
  display: "block",
  borderColor: "transparent",
  borderStyle: "solid",
  borderWidth: theme.borderWidths[10],
  borderRadius: theme.radii[30],
  outline: "none",
  transition: "border-color 100ms ease-in",
  textAlign: "left",
  textDecoration: "none",
  position: "relative",
  margin: theme.space[0],
  padding: theme.space[40],
  cursor: "pointer",
  "&:hover": { textDecoration: "none", borderColor: theme.colors.gray50 },
  "&:focus": { textDecoration: "none", borderColor: theme.colors.gray50 },
  "&:active": { textDecoration: "none", borderColor: theme.colors.gray50 },
});

export interface StatProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "css"> {
  children: React.ReactNode;
}

const Stat = React.forwardRef<HTMLButtonElement, StatProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledStatButton ref={ref} {...props}>
        <Stack direction="vertical" spacing="$20">
          {children}
        </Stack>
      </StyledStatButton>
    );
  }
);

Stat.displayName = "Stat";

export { Stat };

export interface StatNameProps {
  children: React.ReactNode;
}

const StatName = React.forwardRef<HTMLSpanElement, StatNameProps>(
  ({ children, ...props }, ref) => {
    return (
      <Text
        as="div"
        color="textLight"
        lineHeight="lineHeight5"
        fontFamily="inter"
        fontSize="fontSize10"
        fontWeight="medium"
        ref={ref}
        {...props}
      >
        {children}
      </Text>
    );
  }
);

StatName.displayName = "StatName";

export { StatName };

export interface StatNumberProps {
  children: React.ReactNode;
}

const StatNumber = React.forwardRef<HTMLSpanElement, StatNumberProps>(
  ({ children, ...props }, ref) => {
    return (
      <Text
        as="div"
        color="textMedium"
        lineHeight="lineHeight5"
        fontFamily="roboto"
        fontSize="fontSize60"
        fontWeight="medium"
        ref={ref}
        {...props}
      >
        {children}
      </Text>
    );
  }
);

StatNumber.displayName = "StatNumber";

export { StatNumber };

export interface StatInformationProps {
  children: React.ReactNode;
}

const StatInformation = React.forwardRef<HTMLSpanElement, StatInformationProps>(
  // eslint-disable-next-line sonarjs/no-identical-functions
  ({ children, ...props }, ref) => {
    return (
      <Text
        as="div"
        color="textLight"
        lineHeight="lineHeight5"
        fontFamily="inter"
        fontSize="fontSize10"
        fontWeight="normal"
        ref={ref}
        {...props}
      >
        {children}
      </Text>
    );
  }
);

StatInformation.displayName = "StatInformation";

export { StatInformation };
