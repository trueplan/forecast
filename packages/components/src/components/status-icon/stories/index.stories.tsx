import * as React from "react";
import { DocumentCheckIcon, BriefcaseIcon } from "@trueplan/forecast-icons";
import { Stack } from "../../../layout/stack";
import { StatusIcon } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Status Icon",
  component: StatusIcon,
};

export const XSmallIcons: React.FC = () => (
  <Stack direction="vertical" spacing="$60">
    <StatusIcon status="lilac">
      <BriefcaseIcon decorative={false} title="Recruiter Tools" size="xsmall" />
    </StatusIcon>
    <StatusIcon status="green">
      <DocumentCheckIcon decorative={false} title="Approvals" size="xsmall" />
    </StatusIcon>
  </Stack>
);

export const XXSmallIcons: React.FC = () => (
  <Stack direction="vertical" spacing="$60">
    <StatusIcon status="lilac">
      <BriefcaseIcon
        decorative={false}
        title="Recruiter Tools"
        size="xxsmall"
      />
    </StatusIcon>
    <StatusIcon status="green">
      <DocumentCheckIcon decorative={false} title="Approvals" size="xxsmall" />
    </StatusIcon>
  </Stack>
);

export const SmallIcons: React.FC = () => (
  <Stack direction="vertical" spacing="$60">
    <StatusIcon status="lilac">
      <BriefcaseIcon decorative={false} title="Recruiter Tools" size="small" />
    </StatusIcon>
    <StatusIcon status="green">
      <DocumentCheckIcon decorative={false} title="Approvals" size="small" />
    </StatusIcon>
  </Stack>
);

export const MediumIcons: React.FC = () => (
  <Stack direction="vertical" spacing="$60">
    <StatusIcon status="lilac" mediumIcon>
      <BriefcaseIcon decorative={false} title="Recruiter Tools" size="medium" />
    </StatusIcon>
    <StatusIcon status="green" mediumIcon>
      <DocumentCheckIcon decorative={false} title="Approvals" size="medium" />
    </StatusIcon>
  </Stack>
);
