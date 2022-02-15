import * as React from "react";
import { Pill } from "../../pill";
import { ProgressBar } from "../../progress";
import {
  Stat,
  StatButton,
  StatName,
  StatNumber,
  StatInformation,
} from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Stat",
  component: StatNumber,
};

export const Default: React.FC = () => (
  <Stat>
    <StatName>Stat Name</StatName>
    <StatNumber>100</StatNumber>
    <StatInformation>More information</StatInformation>
  </Stat>
);

export const WithPadding: React.FC = () => (
  <Stat padding="space40">
    <StatName>Stat Name</StatName>
    <StatNumber>100</StatNumber>
    <StatInformation>More information</StatInformation>
  </Stat>
);

export const Percentage: React.FC = () => (
  <Stat>
    <StatName>Stat Name</StatName>
    <StatNumber>100</StatNumber>
    <StatInformation>More information</StatInformation>
    <Pill color="green" size="small" fontFamily="roboto">
      99%
    </Pill>
  </Stat>
);

export const Progress: React.FC = () => (
  <Stat>
    <StatName>Stat Name</StatName>
    <StatNumber>100</StatNumber>
    <StatInformation>More information</StatInformation>
    <ProgressBar value={50} />
    <Pill color="green" size="small" fontFamily="roboto">
      99%
    </Pill>
  </Stat>
);

export const StatButtonDefault: React.FC = () => (
  <StatButton>
    <StatName>Stat Name</StatName>
    <StatNumber>100</StatNumber>
    <StatInformation>More information</StatInformation>
  </StatButton>
);

export const StatButtonPercentage: React.FC = () => (
  <StatButton>
    <StatName>Stat Name</StatName>
    <StatNumber>100</StatNumber>
    <StatInformation>More information</StatInformation>
    <Pill color="green" size="small" fontFamily="roboto">
      99%
    </Pill>
  </StatButton>
);

export const StatButtonProgress: React.FC = () => (
  <StatButton>
    <StatName>Stat Name</StatName>
    <StatNumber>100</StatNumber>
    <StatInformation>More information</StatInformation>
    <ProgressBar value={50} />
    <Pill color="green" size="small" fontFamily="roboto">
      99%
    </Pill>
  </StatButton>
);
