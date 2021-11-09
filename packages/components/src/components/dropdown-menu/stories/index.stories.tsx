import * as React from "react";
import { CloseCircleIcon, GearIcon } from "@forecast/icons";
import { theme } from "@forecast/theme";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuItemRightSlot,
  DropdownMenuItemLeftSlot,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "../src";
import { FauxSelectBox } from "../src/FauxSelect";
import { Button } from "../../button";
import { Box } from "../../../layout/box";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Dropdown Menu",
  component: DropdownMenu,
  parameters: {
    chromatic: { delay: 1000 },
  },
};

export const Default: React.FC = () => (
  <Box css={{ position: "absolute", top: 20, left: 20 }}>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="primary">Open Menu</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start">
        <DropdownMenuItem onSelect={() => alert("Dropdown item clicked")}>
          All Activities{" "}
          <DropdownMenuItemRightSlot>⌘+A</DropdownMenuItemRightSlot>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <DropdownMenuItemLeftSlot>
            <CloseCircleIcon decorative size="small" />
          </DropdownMenuItemLeftSlot>
          People
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          Requests &amp; Approvals
          <DropdownMenuItemRightSlot>
            <CloseCircleIcon decorative size="small" />
          </DropdownMenuItemRightSlot>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuLabel>Group Label</DropdownMenuLabel>

          <DropdownMenuItem>Recruiting</DropdownMenuItem>
          <DropdownMenuItem>User Roles</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  </Box>
);

export const TopRightPosition: React.FC = () => (
  <Box css={{ position: "absolute", top: 20, right: 20 }}>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="primary">Open Menu</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start">
        <DropdownMenuItem>
          All Activities{" "}
          <DropdownMenuItemRightSlot>⌘+A</DropdownMenuItemRightSlot>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <DropdownMenuItemLeftSlot>
            <CloseCircleIcon decorative size="small" />
          </DropdownMenuItemLeftSlot>
          People
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          Requests &amp; Approvals
          <DropdownMenuItemRightSlot>
            <CloseCircleIcon decorative size="small" />
          </DropdownMenuItemRightSlot>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuLabel>Group Label</DropdownMenuLabel>

          <DropdownMenuItem>Recruiting</DropdownMenuItem>
          <DropdownMenuItem>User Roles</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  </Box>
);

export const DefaultOpen: React.FC = () => (
  <Box css={{ position: "absolute", top: 20, left: 20 }}>
    <DropdownMenu open>
      <DropdownMenuTrigger asChild>
        <Button variant="primary">Open Menu</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start">
        <DropdownMenuItem>
          All Activities{" "}
          <DropdownMenuItemRightSlot>⌘+A</DropdownMenuItemRightSlot>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <DropdownMenuItemLeftSlot>
            <CloseCircleIcon decorative size="small" />
          </DropdownMenuItemLeftSlot>
          People
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          Requests &amp; Approvals
          <DropdownMenuItemRightSlot>
            <CloseCircleIcon decorative size="small" />
          </DropdownMenuItemRightSlot>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuLabel>Group Label</DropdownMenuLabel>

          <DropdownMenuItem>Recruiting</DropdownMenuItem>
          <DropdownMenuItem>User Roles</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  </Box>
);

export const Multiple: React.FC = () => (
  <Box css={{ position: "absolute", top: 20, left: 20 }}>
    <Box css={{ marginBottom: "$25" }}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="primary">Open Menu</Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start">
          <DropdownMenuItem>
            All Activities{" "}
            <DropdownMenuItemRightSlot>⌘+A</DropdownMenuItemRightSlot>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <DropdownMenuItemLeftSlot>
              <CloseCircleIcon decorative size="small" />
            </DropdownMenuItemLeftSlot>
            People
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            Requests &amp; Approvals
            <DropdownMenuItemRightSlot>
              <CloseCircleIcon decorative size="small" />
            </DropdownMenuItemRightSlot>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuLabel>Group Label</DropdownMenuLabel>

            <DropdownMenuItem>Recruiting</DropdownMenuItem>
            <DropdownMenuItem>User Roles</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </Box>
    <Box css={{ marginBottom: "$25" }}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary">Open Menu</Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start">
          <DropdownMenuItem>
            All Activities{" "}
            <DropdownMenuItemRightSlot>⌘+A</DropdownMenuItemRightSlot>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <DropdownMenuItemLeftSlot>
              <CloseCircleIcon decorative size="small" />
            </DropdownMenuItemLeftSlot>
            People
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            Requests &amp; Approvals
            <DropdownMenuItemRightSlot>
              <CloseCircleIcon decorative size="small" />
            </DropdownMenuItemRightSlot>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuLabel>Group Label</DropdownMenuLabel>

            <DropdownMenuItem>Recruiting</DropdownMenuItem>
            <DropdownMenuItem>User Roles</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </Box>
    <Box css={{ marginBottom: "$25" }}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="iconSmall">
            <GearIcon decorative={false} title="Open menu" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start">
          <DropdownMenuItem>
            All Activities{" "}
            <DropdownMenuItemRightSlot>⌘+A</DropdownMenuItemRightSlot>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <DropdownMenuItemLeftSlot>
              <CloseCircleIcon decorative size="small" />
            </DropdownMenuItemLeftSlot>
            People
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            Requests &amp; Approvals
            <DropdownMenuItemRightSlot>
              <CloseCircleIcon decorative size="small" />
            </DropdownMenuItemRightSlot>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuLabel>Group Label</DropdownMenuLabel>

            <DropdownMenuItem>Recruiting</DropdownMenuItem>
            <DropdownMenuItem>User Roles</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </Box>
    <Box css={{ marginBottom: "$25" }}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="iconSmall">
            <GearIcon decorative={false} title="Open menu" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start">
          <DropdownMenuItem>
            All Activities{" "}
            <DropdownMenuItemRightSlot>⌘+A</DropdownMenuItemRightSlot>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <DropdownMenuItemLeftSlot>
              <CloseCircleIcon decorative size="small" />
            </DropdownMenuItemLeftSlot>
            People
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            Requests &amp; Approvals
            <DropdownMenuItemRightSlot>
              <CloseCircleIcon decorative size="small" />
            </DropdownMenuItemRightSlot>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuLabel>Group Label</DropdownMenuLabel>

            <DropdownMenuItem>Recruiting</DropdownMenuItem>
            <DropdownMenuItem>User Roles</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </Box>
  </Box>
);

const changeTrigger = (): void => {
  console.log("this would change pivot states");
};

export const FauxSelect: React.FC = () => {
  const [selectText, setSelectText] = React.useState("Pivot: Off");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <FauxSelectBox>{selectText}</FauxSelectBox>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start">
        <DropdownMenuRadioGroup
          value={selectText}
          onValueChange={setSelectText}
        >
          <DropdownMenuRadioItem value="Pivot: Off">Off</DropdownMenuRadioItem>
          <DropdownMenuGroup>
            <DropdownMenuLabel>Headcount by Month</DropdownMenuLabel>
            <DropdownMenuRadioItem
              value="Headcount By Month By Org"
              onSelect={() => changeTrigger()}
            >
              By Org
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Headcount By Month By Department">
              By Department
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Headcount By Month By Sub-Department">
              By Sub-Department
            </DropdownMenuRadioItem>
          </DropdownMenuGroup>
          <DropdownMenuGroup>
            <DropdownMenuLabel>Headcount by Quarter</DropdownMenuLabel>
            <DropdownMenuRadioItem value="Headcount By Quarter By Org">
              By Org
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Headcount By Quarter By Department">
              By Department
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Headcount By Quarter By Sub-Department">
              By Sub-Department
            </DropdownMenuRadioItem>
          </DropdownMenuGroup>
          <DropdownMenuGroup>
            <DropdownMenuLabel>Pay Scale by Quarter</DropdownMenuLabel>
            <DropdownMenuRadioItem value="Pay Scale By Quarter By Org">
              By Org
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Pay Scale By Quarter By Department">
              By Department
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Pay Scale By Quarter By Sub-Department">
              By Sub-Department
            </DropdownMenuRadioItem>
          </DropdownMenuGroup>
          <DropdownMenuGroup>
            <DropdownMenuLabel>Pay Scale by Month</DropdownMenuLabel>
            <DropdownMenuRadioItem value="Pay Scale By Month By Org">
              By Org
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Pay Scale By Month By Department">
              By Department
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Pay Scale By Month By Sub-Department">
              By Sub-Department
            </DropdownMenuRadioItem>
          </DropdownMenuGroup>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
