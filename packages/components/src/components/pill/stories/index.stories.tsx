import * as React from "react";
import { Pill } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Pill",
  component: Pill,
};

export const Default: React.FC = () => <Pill>I'm a pill</Pill>;

export const Small: React.FC = () => <Pill size="small">I'm a small pill</Pill>;

export const Large: React.FC = () => <Pill size="large">I'm a large pill</Pill>;

export const Green: React.FC = () => (
  <Pill color="green">I'm a green pill</Pill>
);

export const Blue: React.FC = () => <Pill color="blue">I'm a blue pill</Pill>;

export const Lilac: React.FC = () => (
  <Pill color="lilac">I'm a lilac pill</Pill>
);

export const Grey: React.FC = () => <Pill color="grey">I'm a grey pill</Pill>;

export const Red: React.FC = () => <Pill color="red">I'm a red pill</Pill>;

export const Roboto: React.FC = () => <Pill fontFamily="roboto">+2.80%</Pill>;
