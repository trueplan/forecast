import * as React from "react";
import { styled, theme } from "@trueplan/forecast-theme";
import { BriefcaseIcon } from "@trueplan/forecast-icons";
import { Box } from "../../box";
import { Button } from "../../../components/button";
import { Text } from "../../text";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Primitives/Collapsible",
  component: Collapsible,
};

export const Default: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger asChild>
        <button>{open ? "close" : "open"}</button>
      </CollapsibleTrigger>
      <Box>
        <Text>Solutions</Text>
      </Box>

      <CollapsibleContent>
        <Box>
          <Text>Finance</Text>
        </Box>
        <Box>
          <Text>Recruiting</Text>
        </Box>
        <Box>
          <Text>Budget Owner</Text>
        </Box>
        <Box>
          <Text>People Operations</Text>
        </Box>
      </CollapsibleContent>
    </Collapsible>
  );
};

const NavOpener = styled("button", {
  all: "unset",
  boxSizing: "border-box",
  fontFamily: theme.fonts.inter,
  fontSize: theme.fontSizes[10],
  fontWeight: theme.fontWeights.medium,
  color: theme.colors.textLight,
  paddingTop: theme.space[10],
  paddingBottom: theme.space[10],
  paddingLeft: theme.space[30],
  paddingRight: theme.space[30],
  display: "flex",
  alignItems: "center",
  width: "100%",
  borderRadius: theme.radii[30],
  "&:hover": {
    color: theme.colors.textMedium,
    cursor: "pointer",
  },
  "&:focus": {
    outline: "$borderWidths$20 solid $colors$royal50",
  },
  "&[data-state='open']": {
    color: theme.colors.textMedium,
  },
});

const NavItem = styled("button", {
  all: "unset",
  boxSizing: "border-box",
  fontFamily: theme.fonts.inter,
  fontSize: theme.fontSizes[10],
  fontWeight: theme.fontWeights.normal,
  color: theme.colors.textLight,
  paddingTop: theme.space[10],
  paddingBottom: theme.space[10],
  paddingRight: theme.space[60],
  paddingLeft: theme.space[60],
  borderRadius: theme.radii[30],
  width: "100%",
  "&:hover": {
    backgroundColor: theme.colors.gray20,
    color: theme.colors.textMedium,
    cursor: "pointer",
  },
  "&:focus": {
    backgroundColor: theme.colors.gray20,
    color: theme.colors.textMedium,
    outline: "$borderWidths$20 solid $colors$royal50",
  },
});

const StyledUl = styled("ul", {
  margin: theme.space[0],
  marginTop: theme.space[10],
  padding: theme.space[0],
  listStyle: "none",
});

const StyledLi = styled("li", {
  margin: theme.space[0],
  marginTop: theme.space[10],
  padding: theme.space[0],
  display: "block",
});

export const NavMockUp: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Box css={{ width: "200px" }}>
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger asChild>
          <NavOpener>
            <BriefcaseIcon decorative size="small" />
            <Box as="span" css={{ marginLeft: "$20" }}>
              Recruiter Tools
            </Box>
          </NavOpener>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <StyledUl>
            <StyledLi>
              <NavItem>Recruiter Capacity</NavItem>
            </StyledLi>
            <StyledLi>
              <NavItem>Approved Hires</NavItem>
            </StyledLi>
            <StyledLi>
              <NavItem>Unclaimed Hires</NavItem>
            </StyledLi>
          </StyledUl>
        </CollapsibleContent>
      </Collapsible>
    </Box>
  );
};
