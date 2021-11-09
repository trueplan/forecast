import * as React from "react";
import { Box } from "../../../layout/box";
import { Heading } from "../../heading";
import { ModalTitle, StyledSubTitle } from "./styles";
import type { ModalHeadingProps } from "./types";

const ModalHeading = React.forwardRef<HTMLHeadingElement, ModalHeadingProps>(
  ({ as = "h2", children, subTitle, ...props }, ref) => {
    return (
      <Box
        css={{
          display: "flex",
          alignItems: "center",
          flexGrow: 1,
          marginRight: "$40",
        }}
      >
        <Box>
          <ModalTitle asChild>
            <Heading
              as={as}
              marginBottom="space0"
              size="heading50"
              ref={ref}
              {...props}
            >
              {children}
            </Heading>
          </ModalTitle>
          {subTitle && <StyledSubTitle>{subTitle}</StyledSubTitle>}
        </Box>
      </Box>
    );
  }
);

ModalHeading.displayName = "ModalHeading";

export { ModalHeading };
